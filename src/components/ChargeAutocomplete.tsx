import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { supabase } from '@/integrations/supabase/client';
import { Search, Plus } from 'lucide-react';

interface Statute {
  id: string;
  chapter: string;
  section: string;
  statute_code: string;
  charge_name: string;
  full_description: string;
}

interface ChargeAutocompleteProps {
  onSelectCharge: (charge: { charge_name: string; statute_code: string; full_description: string }) => void;
}

export default function ChargeAutocomplete({ onSelectCharge }: ChargeAutocompleteProps) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<Statute[]>([]);
  const [loading, setLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    if (query.length < 2) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    const searchStatutes = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from('ma_criminal_statutes')
          .select('*')
          .or(`charge_name.ilike.%${query}%,statute_code.ilike.%${query}%,full_description.ilike.%${query}%`)
          .limit(10);

        if (error) throw error;

        setSuggestions(data || []);
        setShowSuggestions(true);
      } catch (error) {
        console.error('Error searching statutes:', error);
        setSuggestions([]);
      } finally {
        setLoading(false);
      }
    };

    const debounceTimer = setTimeout(searchStatutes, 300);
    return () => clearTimeout(debounceTimer);
  }, [query]);

  const handleSelectCharge = (statute: Statute) => {
    onSelectCharge({
      charge_name: statute.charge_name,
      statute_code: statute.statute_code,
      full_description: statute.full_description,
    });
    setQuery('');
    setSuggestions([]);
    setShowSuggestions(false);
  };

  return (
    <div className="relative space-y-2">
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for charges (e.g., 'assault', 'OUI', 'larceny')..."
            className="pl-10"
          />
        </div>
      </div>

      {showSuggestions && suggestions.length > 0 && (
        <Card className="absolute z-10 w-full max-h-64 overflow-y-auto">
          <CardContent className="p-0">
            {suggestions.map((statute) => (
              <div
                key={statute.id}
                className="p-3 hover:bg-muted cursor-pointer border-b border-border last:border-b-0"
                onClick={() => handleSelectCharge(statute)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">{statute.charge_name}</h4>
                    <p className="text-xs text-muted-foreground">{statute.statute_code}</p>
                    <p className="text-xs text-muted-foreground mt-1">{statute.full_description}</p>
                  </div>
                  <Button size="sm" variant="ghost" className="ml-2">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {loading && (
        <div className="text-sm text-muted-foreground">Searching...</div>
      )}

      {showSuggestions && suggestions.length === 0 && !loading && query.length >= 2 && (
        <div className="text-sm text-muted-foreground">No charges found. Try a different search term.</div>
      )}
    </div>
  );
}