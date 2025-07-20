
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, AlertTriangle, Info } from 'lucide-react';
import { AIContentService, ServiceRecommendation } from '@/services/aiContentService';

interface SmartRecommendationsProps {
  currentContent?: string;
  title?: string;
  maxRecommendations?: number;
}

export const SmartRecommendations: React.FC<SmartRecommendationsProps> = ({
  currentContent = '',
  title = 'You Might Also Need',
  maxRecommendations = 3
}) => {
  const [recommendations, setRecommendations] = useState<ServiceRecommendation[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (currentContent.trim()) {
      loadRecommendations();
    }
  }, [currentContent]);

  const loadRecommendations = async () => {
    setLoading(true);
    try {
      const recs = await AIContentService.getSmartRecommendations(currentContent);
      setRecommendations(recs.slice(0, maxRecommendations));
    } catch (error) {
      console.error('Error loading recommendations:', error);
    } finally {
      setLoading(false);
    }
  };

  const getUrgencyIcon = (urgency: string) => {
    switch (urgency) {
      case 'high': return <AlertTriangle className="h-4 w-4 text-red-500" />;
      case 'medium': return <Clock className="h-4 w-4 text-yellow-500" />;
      default: return <Info className="h-4 w-4 text-blue-500" />;
    }
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'high': return 'destructive';
      case 'medium': return 'secondary';
      default: return 'outline';
    }
  };

  if (loading) {
    return (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="grid gap-4 md:grid-cols-3">
          {[...Array(3)].map((_, i) => (
            <Card key={i} className="animate-pulse">
              <CardHeader className="pb-3">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
              </CardHeader>
              <CardContent>
                <div className="h-16 bg-gray-200 rounded"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (recommendations.length === 0) {
    return null;
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold flex items-center gap-2">
        {title}
        <Badge variant="secondary" className="text-xs">
          AI-Powered
        </Badge>
      </h3>
      
      <div className="grid gap-4 md:grid-cols-3">
        {recommendations.map((rec, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <CardTitle className="text-base">{rec.practiceArea}</CardTitle>
                <div className="flex items-center gap-1">
                  {getUrgencyIcon(rec.urgency)}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant={getUrgencyColor(rec.urgency)} className="text-xs">
                  {rec.urgency} priority
                </Badge>
                <span className="text-xs text-muted-foreground">
                  {Math.round(rec.confidence * 100)}% match
                </span>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-3">
              <CardDescription className="text-sm">
                {rec.reasoning}
              </CardDescription>
              
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full group"
                onClick={() => {
                  // Scroll to practice areas or contact form
                  const practiceSection = document.getElementById('practice-areas');
                  const contactSection = document.getElementById('contact');
                  const targetSection = practiceSection || contactSection;
                  
                  if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Learn More
                <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
