
import React, { useState, useRef, useEffect } from 'react';
import { Search, Loader2, AlertCircle, Filter, Sparkles } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useSemanticSearch } from '@/hooks/useSemanticSearch';
import { AIContentService } from '@/services/aiContentService';

interface SearchSuggestion {
  query: string;
  category: string;
}

const searchSuggestions: SearchSuggestion[] = [
  { query: "I was arrested for DUI, what should I do?", category: "Criminal Defense" },
  { query: "How to file a restraining order in Massachusetts", category: "Restraining Orders" },
  { query: "Show cause hearing preparation", category: "Show Cause" },
  { query: "Traffic violation defense strategies", category: "Motor Vehicle" },
  { query: "What to expect during arraignment", category: "Criminal Defense" },
  { query: "Domestic violence order defense", category: "Restraining Orders" }
];

export const EnhancedSearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchAnalytics, setSearchAnalytics] = useState<{question: string, answer: string}[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  
  const { results, isLoading, error, search, clearResults } = useSemanticSearch();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedownoutside', handleClickOutside);
    return () => document.removeEventListener('mousedownoutside', handleClickOutside);
  }, []);

  const handleSearch = async (searchQuery?: string) => {
    const queryToUse = searchQuery || query;
    if (!queryToUse.trim()) return;

    setShowSuggestions(false);
    
    // Perform semantic search
    await search(queryToUse, {
      matchThreshold: selectedFilter === 'all' ? 0.7 : 0.6,
      matchCount: 10,
      contentType: selectedFilter === 'all' ? undefined : selectedFilter
    });

    // Generate related FAQ based on search
    try {
      const faq = await AIContentService.generateDynamicFAQ(queryToUse);
      setSearchAnalytics(faq);
    } catch (err) {
      console.error('Error generating FAQ:', err);
    }
  };

  const handleSuggestionClick = (suggestion: SearchSuggestion) => {
    setQuery(suggestion.query);
    handleSearch(suggestion.query);
  };

  const handleClear = () => {
    setQuery('');
    clearResults();
    setSearchAnalytics([]);
  };

  const getFilterLabel = (filter: string) => {
    switch (filter) {
      case 'practice-area': return 'Practice Areas';
      case 'attorney': return 'Attorney Info';
      case 'hero': return 'General Info';
      default: return 'All Content';
    }
  };

  return (
    <div ref={searchRef} className="w-full max-w-4xl mx-auto space-y-6">
      {/* Search Header */}
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold flex items-center justify-center gap-2">
          <Sparkles className="h-6 w-6 text-primary" />
          AI-Powered Legal Search
        </h2>
        <p className="text-muted-foreground">
          Ask questions in natural language - our AI understands legal terminology
        </p>
      </div>

      {/* Search Input */}
      <div className="relative">
        <div className="flex gap-2">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Ask about legal services, procedures, or your specific situation..."
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setShowSuggestions(e.target.value.length > 2);
              }}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              className="pl-10 pr-4 py-3 text-base"
              disabled={isLoading}
            />
          </div>
          
          <Select value={selectedFilter} onValueChange={setSelectedFilter}>
            <SelectTrigger className="w-40">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Content</SelectItem>
              <SelectItem value="practice-area">Practice Areas</SelectItem>
              <SelectItem value="attorney">Attorney Info</SelectItem>
              <SelectItem value="hero">General Info</SelectItem>
            </SelectContent>
          </Select>
          
          <Button onClick={() => handleSearch()} disabled={isLoading || !query.trim()}>
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              'Search'
            )}
          </Button>
          
          {(results.length > 0 || error) && (
            <Button variant="outline" onClick={handleClear}>
              Clear
            </Button>
          )}
        </div>

        {/* Search Suggestions */}
        {showSuggestions && query.length > 2 && (
          <Card className="absolute top-full left-0 right-0 mt-1 z-10 max-h-60 overflow-y-auto">
            <CardContent className="p-2">
              <div className="text-xs text-muted-foreground mb-2 px-2">Suggested searches:</div>
              {searchSuggestions
                .filter(s => s.query.toLowerCase().includes(query.toLowerCase()))
                .slice(0, 5)
                .map((suggestion, index) => (
                  <div
                    key={index}
                    className="p-2 hover:bg-gray-50 cursor-pointer rounded-md border-b last:border-b-0"
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm">{suggestion.query}</span>
                      <Badge variant="outline" className="text-xs">
                        {suggestion.category}
                      </Badge>
                    </div>
                  </div>
                ))}
            </CardContent>
          </Card>
        )}
      </div>

      {/* Error Display */}
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {/* Search Results */}
      {results.length > 0 && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Search Results</h3>
            <div className="flex items-center gap-2">
              <Badge variant="secondary">
                {results.length} result{results.length !== 1 ? 's' : ''}
              </Badge>
              <Badge variant="outline" className="text-xs">
                Filtered by: {getFilterLabel(selectedFilter)}
              </Badge>
            </div>
          </div>
          
          <div className="grid gap-4">
            {results.map((result, index) => (
              <Card key={`${result.id}-${index}`} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-lg">{result.title}</CardTitle>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs capitalize">
                          {result.content_type.replace('-', ' ')}
                        </Badge>
                        {result.practice_area && (
                          <Badge variant="secondary" className="text-xs">
                            {result.practice_area}
                          </Badge>
                        )}
                        <span className="text-xs text-muted-foreground">
                          {Math.round(result.similarity * 100)}% relevance
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {result.content_text}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Dynamic FAQ */}
      {searchAnalytics.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            Related Questions
            <Badge variant="secondary" className="text-xs">AI-Generated</Badge>
          </h3>
          <div className="grid gap-3">
            {searchAnalytics.map((faq, index) => (
              <Card key={index} className="border-l-4 border-l-primary/50">
                <CardContent className="pt-4">
                  <h4 className="font-medium text-sm mb-2">{faq.question}</h4>
                  <p className="text-xs text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
