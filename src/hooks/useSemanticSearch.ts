import { useState, useCallback } from 'react';
import { EmbeddingService, SearchResult } from '@/services/embeddingService';

interface UseSemanticSearchResult {
  results: SearchResult[];
  isLoading: boolean;
  error: string | null;
  search: (query: string, options?: {
    matchThreshold?: number;
    matchCount?: number;
    contentType?: string;
    practiceArea?: string;
  }) => Promise<void>;
  clearResults: () => void;
}

export const useSemanticSearch = (): UseSemanticSearchResult => {
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const search = useCallback(async (
    query: string, 
    options: {
      matchThreshold?: number;
      matchCount?: number;
      contentType?: string;
      practiceArea?: string;
    } = {}
  ) => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const searchResults = await EmbeddingService.searchBySimilarity(query, options);
      setResults(searchResults);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Search failed';
      setError(errorMessage);
      console.error('Semantic search error:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const clearResults = useCallback(() => {
    setResults([]);
    setError(null);
  }, []);

  return {
    results,
    isLoading,
    error,
    search,
    clearResults
  };
};