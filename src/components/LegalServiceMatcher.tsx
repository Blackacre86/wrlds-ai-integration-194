
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircle, ArrowLeft, ArrowRight, Phone } from 'lucide-react';
import { AIContentService, ServiceRecommendation } from '@/services/aiContentService';

interface Question {
  id: string;
  type: 'radio' | 'textarea' | 'checkbox';
  question: string;
  options?: string[];
  required?: boolean;
}

const questions: Question[] = [
  {
    id: 'situation',
    type: 'radio',
    question: 'What best describes your current legal situation?',
    options: [
      'I was arrested or charged with a crime',
      'I received a restraining order or need to file one',
      'I have a traffic violation or DUI charge',
      'I need to attend a show cause hearing',
      'I have general legal questions',
      'Other situation not listed'
    ],
    required: true
  },
  {
    id: 'urgency',
    type: 'radio',
    question: 'How urgent is your legal matter?',
    options: [
      'Immediate - I have a court date within days',
      'Soon - I need help within weeks',
      'Planning - I want to understand my options',
      'General inquiry'
    ],
    required: true
  },
  {
    id: 'details',
    type: 'textarea',
    question: 'Please provide any additional details about your situation:',
    required: false
  },
  {
    id: 'experience',
    type: 'radio',
    question: 'Have you dealt with legal matters like this before?',
    options: [
      'No, this is my first time',
      'Yes, I have some experience',
      'Yes, I have significant experience'
    ],
    required: false
  }
];

export const LegalServiceMatcher: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [recommendations, setRecommendations] = useState<ServiceRecommendation[]>([]);
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  const handleAnswer = (value: string) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: value
    }));
  };

  const nextStep = async () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      await generateRecommendations();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const generateRecommendations = async () => {
    setLoading(true);
    try {
      const recs = await AIContentService.matchLegalServices(answers);
      setRecommendations(recs);
      setShowResults(true);
    } catch (error) {
      console.error('Error generating recommendations:', error);
    } finally {
      setLoading(false);
    }
  };

  const resetQuestionnaire = () => {
    setCurrentStep(0);
    setAnswers({});
    setRecommendations([]);
    setShowResults(false);
  };

  const canProceed = () => {
    if (!currentQuestion.required) return true;
    return answers[currentQuestion.id] && answers[currentQuestion.id].trim();
  };

  if (loading) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle>Analyzing Your Legal Needs</CardTitle>
          <CardDescription>
            Our AI is matching you with the most relevant legal services...
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (showResults) {
    return (
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2">
            <CheckCircle className="h-6 w-6 text-green-500" />
            Your Legal Service Matches
          </CardTitle>
          <CardDescription>
            Based on your responses, here are the legal services that best match your needs
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {recommendations.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-2">
              {recommendations.map((rec, index) => (
                <Card key={index} className="border-l-4 border-l-primary">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{rec.practiceArea}</CardTitle>
                      <Badge variant={rec.urgency === 'high' ? 'destructive' : 'secondary'}>
                        {Math.round(rec.confidence * 100)}% match
                      </Badge>
                    </div>
                    <CardDescription>{rec.reasoning}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <span>Priority: {rec.urgency}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-muted-foreground mb-4">
                We couldn't find specific matches for your situation, but we're here to help.
              </p>
            </div>
          )}
          
          <div className="border-t pt-6 space-y-4">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Ready to Get Help?</h3>
              <p className="text-muted-foreground mb-4">
                Contact Attorney Joe Brava for a consultation about your legal matter
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button size="lg" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Call (508) 454-0822
                </Button>
                <Button variant="outline" size="lg" onClick={resetQuestionnaire}>
                  Start Over
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <CardTitle>Find Your Legal Service Match</CardTitle>
          <Badge variant="outline">
            {currentStep + 1} of {questions.length}
          </Badge>
        </div>
        <Progress value={progress} className="w-full" />
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-4">{currentQuestion.question}</h3>
          
          {currentQuestion.type === 'radio' && currentQuestion.options && (
            <RadioGroup
              value={answers[currentQuestion.id] || ''}
              onValueChange={handleAnswer}
              className="space-y-3"
            >
              {currentQuestion.options.map((option, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <RadioGroupItem value={option} id={`option-${index}`} />
                  <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          )}
          
          {currentQuestion.type === 'textarea' && (
            <Textarea
              value={answers[currentQuestion.id] || ''}
              onChange={(e) => handleAnswer(e.target.value)}
              placeholder="Please describe your situation in detail..."
              rows={4}
              className="w-full"
            />
          )}
        </div>
        
        <div className="flex justify-between pt-4">
          <Button
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 0}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Previous
          </Button>
          
          <Button
            onClick={nextStep}
            disabled={!canProceed()}
            className="flex items-center gap-2"
          >
            {currentStep === questions.length - 1 ? 'Get Recommendations' : 'Next'}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
