
-- Enable the pgvector extension for vector similarity search
CREATE EXTENSION IF NOT EXISTS vector;

-- Create content_embeddings table for storing vector embeddings
CREATE TABLE public.content_embeddings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  content_id TEXT NOT NULL UNIQUE,
  content_type TEXT NOT NULL, -- 'hero', 'practice-area', 'attorney', 'advantage'
  title TEXT NOT NULL,
  content_text TEXT NOT NULL,
  chunk_index INTEGER DEFAULT 0,
  embedding vector(1536), -- OpenAI text-embedding-3-small dimensions
  metadata JSONB DEFAULT '{}',
  practice_area TEXT,
  keywords TEXT[],
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create index for vector similarity search
CREATE INDEX content_embeddings_embedding_idx ON public.content_embeddings 
USING ivfflat (embedding vector_cosine_ops) WITH (lists = 100);

-- Create indexes for efficient filtering
CREATE INDEX content_embeddings_content_type_idx ON public.content_embeddings(content_type);
CREATE INDEX content_embeddings_practice_area_idx ON public.content_embeddings(practice_area);
CREATE INDEX content_embeddings_created_at_idx ON public.content_embeddings(created_at DESC);

-- Enable Row Level Security
ALTER TABLE public.content_embeddings ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access (content is public)
CREATE POLICY "Public content embeddings are viewable by everyone" 
  ON public.content_embeddings 
  FOR SELECT 
  USING (true);

-- Create policy for authenticated users to manage embeddings
CREATE POLICY "Authenticated users can manage content embeddings" 
  ON public.content_embeddings 
  FOR ALL 
  USING (auth.role() = 'authenticated');

-- Create function for semantic search
CREATE OR REPLACE FUNCTION search_content_by_similarity(
  query_embedding vector(1536),
  match_threshold float DEFAULT 0.7,
  match_count int DEFAULT 10,
  filter_content_type text DEFAULT NULL,
  filter_practice_area text DEFAULT NULL
)
RETURNS TABLE (
  id uuid,
  content_id text,
  content_type text,
  title text,
  content_text text,
  practice_area text,
  similarity float
)
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN QUERY
  SELECT 
    ce.id,
    ce.content_id,
    ce.content_type,
    ce.title,
    ce.content_text,
    ce.practice_area,
    1 - (ce.embedding <=> query_embedding) as similarity
  FROM public.content_embeddings ce
  WHERE 
    (filter_content_type IS NULL OR ce.content_type = filter_content_type)
    AND (filter_practice_area IS NULL OR ce.practice_area = filter_practice_area)
    AND (1 - (ce.embedding <=> query_embedding)) > match_threshold
  ORDER BY ce.embedding <=> query_embedding
  LIMIT match_count;
END;
$$;
