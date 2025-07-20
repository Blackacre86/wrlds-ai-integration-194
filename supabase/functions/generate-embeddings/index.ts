import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.52.0';

const openAIApiKey = Deno.env.get('OPENAI_API_KEY');
const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ContentChunk {
  content_id: string;
  content_type: string;
  title: string;
  content_text: string;
  chunk_index?: number;
  practice_area?: string;
  keywords?: string[];
  metadata?: Record<string, any>;
}

async function generateEmbedding(text: string): Promise<number[]> {
  const response = await fetch('https://api.openai.com/v1/embeddings', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${openAIApiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'text-embedding-3-small',
      input: text,
      encoding_format: 'float',
    }),
  });

  if (!response.ok) {
    throw new Error(`OpenAI API error: ${response.statusText}`);
  }

  const data = await response.json();
  return data.data[0].embedding;
}

function chunkContent(content: string, maxChunkSize: number = 1000): string[] {
  // Split by sentences to preserve legal context
  const sentences = content.split(/(?<=[.!?])\s+/);
  const chunks: string[] = [];
  let currentChunk = '';

  for (const sentence of sentences) {
    if (currentChunk.length + sentence.length > maxChunkSize && currentChunk.length > 0) {
      chunks.push(currentChunk.trim());
      currentChunk = sentence;
    } else {
      currentChunk += (currentChunk ? ' ' : '') + sentence;
    }
  }

  if (currentChunk.trim()) {
    chunks.push(currentChunk.trim());
  }

  return chunks.length > 0 ? chunks : [content];
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    const { content } = await req.json() as { content: ContentChunk };

    // Chunk the content if it's too long
    const textChunks = chunkContent(content.content_text);
    
    // Process each chunk
    const embeddings = [];
    for (let i = 0; i < textChunks.length; i++) {
      const chunk = textChunks[i];
      const embedding = await generateEmbedding(chunk);
      
      const embeddingData = {
        content_id: `${content.content_id}_chunk_${i}`,
        content_type: content.content_type,
        title: content.title,
        content_text: chunk,
        chunk_index: i,
        embedding: embedding,
        practice_area: content.practice_area,
        keywords: content.keywords,
        metadata: {
          ...content.metadata,
          total_chunks: textChunks.length,
          original_content_id: content.content_id,
        },
      };

      // Store in database
      const { error } = await supabase
        .from('content_embeddings')
        .upsert(embeddingData, { 
          onConflict: 'content_id',
          ignoreDuplicates: false 
        });

      if (error) {
        console.error('Database error:', error);
        throw error;
      }

      embeddings.push(embeddingData);
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        embeddings_created: embeddings.length,
        content_id: content.content_id 
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in generate-embeddings function:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }
});