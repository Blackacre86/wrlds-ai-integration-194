
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, CheckCircle, AlertCircle, Database, Play } from 'lucide-react';
import { EmbeddingService } from '@/services/embeddingService';
import { SemanticSearch } from '@/components/SemanticSearch';

export const EmbeddingManager: React.FC = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [status, setStatus] = useState<{
    type: 'idle' | 'success' | 'error';
    message: string;
  }>({ type: 'idle', message: '' });

  // Auto-generate embeddings on component mount if needed
  useEffect(() => {
    const checkAndGenerateEmbeddings = async () => {
      // Only auto-generate if no status message is set (first time load)
      if (status.message === '') {
        try {
          setStatus({ type: 'idle', message: 'Checking content embeddings...' });
          await EmbeddingService.processContentFromMDX();
          setStatus({
            type: 'success',
            message: 'Content embeddings are ready! You can now use semantic search and AI features.'
          });
        } catch (error) {
          console.error('Auto-generation failed:', error);
          setStatus({
            type: 'idle',
            message: 'Click the button below to generate content embeddings for AI features.'
          });
        }
      }
    };

    checkAndGenerateEmbeddings();
  }, []);

  const generateAllEmbeddings = async () => {
    setIsGenerating(true);
    setStatus({ type: 'idle', message: 'Generating embeddings...' });

    try {
      await EmbeddingService.processContentFromMDX();
      setStatus({
        type: 'success',
        message: 'All content embeddings generated successfully! AI features are now fully operational.'
      });
    } catch (error) {
      setStatus({
        type: 'error',
        message: `Failed to generate embeddings: ${error instanceof Error ? error.message : 'Unknown error'}`
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5" />
            AI Content Embeddings
          </CardTitle>
          <CardDescription>
            Vector embeddings enable AI-powered semantic search and intelligent content recommendations for your legal services
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button 
            onClick={generateAllEmbeddings}
            disabled={isGenerating}
            className="w-full"
            size="lg"
          >
            {isGenerating ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating Embeddings...
              </>
            ) : (
              <>
                <Play className="mr-2 h-4 w-4" />
                Generate Content Embeddings
              </>
            )}
          </Button>

          {status.message && (
            <Alert variant={status.type === 'error' ? 'destructive' : 'default'}>
              {status.type === 'success' ? (
                <CheckCircle className="h-4 w-4" />
              ) : status.type === 'error' ? (
                <AlertCircle className="h-4 w-4" />
              ) : null}
              <AlertDescription>{status.message}</AlertDescription>
            </Alert>
          )}

          <div className="text-sm text-muted-foreground space-y-2">
            <p><strong>This process generates vector embeddings for:</strong></p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Hero section content</li>
              <li>Practice area descriptions</li>
              <li>Attorney profile information</li>
              <li>Legal service advantages</li>
            </ul>
            <p className="text-xs text-muted-foreground mt-2">
              Embeddings enable AI-powered search, recommendations, and content matching.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>AI-Powered Semantic Search</CardTitle>
          <CardDescription>
            Search through your legal content using natural language queries powered by AI
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SemanticSearch />
        </CardContent>
      </Card>
    </div>
  );
};
