
import { supabase } from '@/integrations/supabase/client';
import { EmbeddingService } from './embeddingService';

export interface UserInteraction {
  contentType: string;
  contentId: string;
  timeSpent: number;
  timestamp: Date;
}

export interface ServiceRecommendation {
  practiceArea: string;
  confidence: number;
  reasoning: string;
  urgency: 'low' | 'medium' | 'high';
}

export interface LegalNeed {
  category: string;
  description: string;
  urgency: string;
  keywords: string[];
}

export class AIContentService {
  static async getSmartRecommendations(
    currentContent: string,
    userInteractions: UserInteraction[] = []
  ): Promise<ServiceRecommendation[]> {
    try {
      // Use semantic search to find related content
      const searchResults = await EmbeddingService.searchBySimilarity(
        currentContent,
        { matchThreshold: 0.6, matchCount: 5 }
      );

      // Analyze user interaction patterns
      const interactionPatterns = this.analyzeInteractionPatterns(userInteractions);

      // Generate recommendations based on content similarity and user behavior
      const recommendations = searchResults.map(result => ({
        practiceArea: result.practice_area || result.content_type,
        confidence: result.similarity,
        reasoning: this.generateRecommendationReasoning(result, interactionPatterns),
        urgency: this.determineUrgency(result.content_text)
      })).filter(rec => rec.practiceArea && rec.confidence > 0.6);

      return recommendations.slice(0, 3); // Top 3 recommendations
    } catch (error) {
      console.error('Error generating smart recommendations:', error);
      return [];
    }
  }

  static async matchLegalServices(answers: Record<string, any>): Promise<ServiceRecommendation[]> {
    try {
      // Convert questionnaire answers to searchable text
      const searchQuery = this.convertAnswersToQuery(answers);
      
      // Use semantic search to find matching services
      const searchResults = await EmbeddingService.searchBySimilarity(
        searchQuery,
        { matchThreshold: 0.5, matchCount: 10, contentType: 'practice-area' }
      );

      // Score and rank services based on answer relevance
      const recommendations = searchResults.map(result => ({
        practiceArea: result.practice_area || result.title,
        confidence: this.calculateServiceMatch(result, answers),
        reasoning: this.generateServiceMatchReasoning(result, answers),
        urgency: this.determineUrgencyFromAnswers(answers)
      })).sort((a, b) => b.confidence - a.confidence);

      return recommendations.slice(0, 4); // Top 4 matches
    } catch (error) {
      console.error('Error matching legal services:', error);
      return [];
    }
  }

  static async generateDynamicFAQ(searchPattern: string): Promise<Array<{question: string, answer: string}>> {
    try {
      const searchResults = await EmbeddingService.searchBySimilarity(
        searchPattern,
        { matchThreshold: 0.7, matchCount: 3 }
      );

      return searchResults.map(result => ({
        question: `What should I know about ${result.practice_area || result.title}?`,
        answer: result.content_text.substring(0, 200) + '...'
      }));
    } catch (error) {
      console.error('Error generating dynamic FAQ:', error);
      return [];
    }
  }

  private static analyzeInteractionPatterns(interactions: UserInteraction[]) {
    const patterns = {
      mostViewed: '',
      totalTime: 0,
      preferences: [] as string[]
    };

    if (interactions.length === 0) return patterns;

    // Group by content type
    const contentTypeMap = new Map<string, number>();
    interactions.forEach(interaction => {
      const current = contentTypeMap.get(interaction.contentType) || 0;
      contentTypeMap.set(interaction.contentType, current + interaction.timeSpent);
      patterns.totalTime += interaction.timeSpent;
    });

    // Find most viewed content type
    let maxTime = 0;
    contentTypeMap.forEach((time, contentType) => {
      if (time > maxTime) {
        maxTime = time;
        patterns.mostViewed = contentType;
      }
    });

    patterns.preferences = Array.from(contentTypeMap.keys());
    return patterns;
  }

  private static generateRecommendationReasoning(result: any, patterns: any): string {
    const reasons = [];
    
    if (result.similarity > 0.8) {
      reasons.push("highly relevant to your current interest");
    }
    
    if (patterns.preferences.includes(result.content_type)) {
      reasons.push("matches your viewing patterns");
    }
    
    if (result.practice_area) {
      reasons.push(`specialized ${result.practice_area} expertise`);
    }

    return reasons.length > 0 ? reasons.join(", ") : "related legal service";
  }

  private static determineUrgency(content: string): 'low' | 'medium' | 'high' {
    const urgentKeywords = ['arrest', 'charge', 'court', 'deadline', 'emergency', 'violation'];
    const mediumKeywords = ['consultation', 'advice', 'planning', 'review'];
    
    const lowerContent = content.toLowerCase();
    
    if (urgentKeywords.some(keyword => lowerContent.includes(keyword))) {
      return 'high';
    }
    
    if (mediumKeywords.some(keyword => lowerContent.includes(keyword))) {
      return 'medium';
    }
    
    return 'low';
  }

  private static convertAnswersToQuery(answers: Record<string, any>): string {
    const queryParts = [];
    
    Object.entries(answers).forEach(([key, value]) => {
      if (typeof value === 'string' && value.trim()) {
        queryParts.push(value);
      } else if (Array.isArray(value)) {
        queryParts.push(...value);
      }
    });
    
    return queryParts.join(' ');
  }

  private static calculateServiceMatch(result: any, answers: Record<string, any>): number {
    let score = result.similarity;
    
    // Boost score based on specific answer matches
    const answerText = this.convertAnswersToQuery(answers).toLowerCase();
    const contentText = result.content_text.toLowerCase();
    
    // Check for keyword matches
    const keywords = answerText.split(' ').filter(word => word.length > 3);
    const matches = keywords.filter(keyword => contentText.includes(keyword));
    
    // Boost score by 0.1 for each keyword match, up to 0.3 total boost
    score += Math.min(matches.length * 0.1, 0.3);
    
    return Math.min(score, 1.0);
  }

  private static generateServiceMatchReasoning(result: any, answers: Record<string, any>): string {
    const answerText = this.convertAnswersToQuery(answers).toLowerCase();
    const contentText = result.content_text.toLowerCase();
    
    const reasons = [`${Math.round(result.similarity * 100)}% content match`];
    
    // Check for specific matches
    if (answers.urgency === 'high' && contentText.includes('defense')) {
      reasons.push('immediate defense expertise available');
    }
    
    if (answers.situation && contentText.includes(answers.situation.toLowerCase())) {
      reasons.push('directly addresses your situation');
    }
    
    return reasons.join(', ');
  }

  private static determineUrgencyFromAnswers(answers: Record<string, any>): 'low' | 'medium' | 'high' {
    if (answers.urgency) {
      return answers.urgency;
    }
    
    if (answers.timeline === 'immediate' || answers.hasDeadline === true) {
      return 'high';
    }
    
    if (answers.timeline === 'soon' || answers.situation?.includes('court')) {
      return 'medium';
    }
    
    return 'low';
  }
}
