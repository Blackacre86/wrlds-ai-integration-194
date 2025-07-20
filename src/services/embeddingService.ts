
import { supabase } from '@/integrations/supabase/client';

export interface ContentForEmbedding {
  content_id: string;
  content_type: 'hero' | 'practice-area' | 'attorney' | 'advantage';
  title: string;
  content_text: string;
  practice_area?: string;
  keywords?: string[];
  metadata?: Record<string, any>;
}

export interface SearchResult {
  id: string;
  content_id: string;
  content_type: string;
  title: string;
  content_text: string;
  practice_area: string | null;
  similarity: number;
}

export class EmbeddingService {
  static async generateEmbeddings(content: ContentForEmbedding): Promise<void> {
    try {
      const { data, error } = await supabase.functions.invoke('generate-embeddings', {
        body: { content }
      });

      if (error) {
        throw new Error(`Failed to generate embeddings: ${error.message}`);
      }

      console.log(`Generated embeddings for ${content.content_id}:`, data);
    } catch (error) {
      console.error('Error generating embeddings:', error);
      throw error;
    }
  }

  static async searchBySimilarity(
    query: string,
    options: {
      matchThreshold?: number;
      matchCount?: number;
      contentType?: string;
      practiceArea?: string;
    } = {}
  ): Promise<SearchResult[]> {
    try {
      console.log('Starting semantic search for query:', query);
      
      // Generate embedding for the query using the query_only parameter
      const { data: queryResponse, error: embeddingError } = await supabase.functions.invoke('generate-embeddings', {
        body: { 
          query: query,
          query_only: true
        }
      });

      if (embeddingError) {
        console.error('Embedding error:', embeddingError);
        throw new Error(`Failed to generate query embedding: ${embeddingError.message}`);
      }

      if (!queryResponse?.embedding) {
        throw new Error('No embedding returned from generate-embeddings function');
      }

      console.log('Query embedding generated successfully');

      // Use the vector similarity search function
      const { data, error } = await supabase.rpc('search_content_by_similarity', {
        query_embedding: queryResponse.embedding,
        match_threshold: options.matchThreshold || 0.7,
        match_count: options.matchCount || 10,
        filter_content_type: options.contentType || null,
        filter_practice_area: options.practiceArea || null
      });

      if (error) {
        console.error('Search RPC error:', error);
        throw new Error(`Search failed: ${error.message}`);
      }

      console.log(`Search completed, found ${data?.length || 0} results`);
      return data || [];
    } catch (error) {
      console.error('Error searching by similarity:', error);
      throw error;
    }
  }

  static async processContentFromMDX(): Promise<void> {
    console.log('Starting content embedding generation...');
    
    try {
      // Process hero content
      await this.generateEmbeddings({
        content_id: 'hero-main',
        content_type: 'hero',
        title: 'Strategic Criminal Defense Across Massachusetts',
        content_text: 'Attorney Joe Brava provides strategic criminal defense across Massachusetts. Former prosecutor with 1,000+ cases of experience. Specialized in criminal defense, restraining orders, motor vehicle violations, and show cause hearings.',
        keywords: ['criminal defense', 'Massachusetts', 'attorney', 'prosecutor', 'legal services']
      });

      // Process practice areas
      const practiceAreas = [
        {
          id: 'criminal-defense',
          title: 'Criminal Defense',
          description: 'Comprehensive criminal defense representation with former prosecutor perspective. Expert handling of felonies, misdemeanors, and complex criminal cases.',
          keywords: ['criminal defense', 'felony', 'misdemeanor', 'court representation']
        },
        {
          id: 'restraining-orders',
          title: 'Restraining Orders',
          description: 'Professional handling of restraining order cases, both defense and petitioning. Experienced in 209A orders, harassment prevention orders, and court proceedings.',
          keywords: ['restraining orders', '209A', 'harassment prevention', 'protective orders']
        },
        {
          id: 'motor-vehicle',
          title: 'Motor Vehicle Violations',
          description: 'Expert defense for traffic violations, DUI, license suspensions, and motor vehicle infractions. Protect your driving record and privileges.',
          keywords: ['traffic violations', 'DUI', 'license suspension', 'motor vehicle']
        },
        {
          id: 'show-cause',
          title: 'Show Cause Hearings',
          description: 'Skilled representation in show cause hearings and criminal complaint procedures. Strategic defense from the earliest stages of criminal proceedings.',
          keywords: ['show cause', 'criminal complaint', 'preliminary hearings']
        }
      ];

      for (const area of practiceAreas) {
        await this.generateEmbeddings({
          content_id: area.id,
          content_type: 'practice-area',
          title: area.title,
          content_text: area.description,
          practice_area: area.title,
          keywords: area.keywords
        });
      }

      // Process attorney info
      await this.generateEmbeddings({
        content_id: 'attorney-joe-brava',
        content_type: 'attorney',
        title: 'Attorney Joe Brava',
        content_text: 'Joe Brava is an experienced criminal defense attorney and former prosecutor with over 1,000 cases of experience. Graduate of Suffolk University Law School, admitted to Massachusetts Bar Association. Specializes in criminal defense, former prosecutor experience, and trial advocacy.',
        keywords: ['Joe Brava', 'attorney', 'criminal defense', 'former prosecutor', 'Suffolk University', 'Massachusetts Bar']
      });

      // Process advantages
      await this.generateEmbeddings({
        content_id: 'advantages-strategic',
        content_type: 'advantage',
        title: 'Strategic Legal Approach',
        content_text: 'Strategic criminal defense with cutting-edge technology and personalized attention. Former prosecutor experience provides unique insights into case strategy and courtroom tactics.',
        keywords: ['strategic defense', 'technology', 'personalized', 'prosecutor experience']
      });

      console.log('Content embeddings generated successfully');
    } catch (error) {
      console.error('Error processing content embeddings:', error);
      throw error;
    }
  }
}
