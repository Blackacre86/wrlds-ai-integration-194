
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Search, MessageSquare, Target, Sparkles } from 'lucide-react';

export const HomeAIFeatures: React.FC = () => {
  const handleGetStarted = (feature: string) => {
    // Scroll to contact form or navigate based on feature
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 md:py-16 px-4 md:px-12 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-6 w-6 text-primary" />
            <Badge variant="outline" className="text-base px-4 py-2 border-primary text-primary">
              AI-Powered Legal Services
            </Badge>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
            Smart Legal Solutions
          </h2>
          <p className="text-gray-800 max-w-3xl mx-auto text-lg">
            Experience the future of legal services with our AI-powered tools designed to match you with the right legal assistance quickly and accurately.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-primary">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Search className="h-6 w-6 text-primary" />
                <CardTitle className="text-xl">Smart Search</CardTitle>
              </div>
              <CardDescription>
                Ask questions in natural language and get instant, relevant answers about legal services and procedures.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                <li>• Natural language queries</li>
                <li>• Instant legal information</li>
                <li>• Context-aware responses</li>
              </ul>
              <Button 
                onClick={() => handleGetStarted('search')}
                variant="outline" 
                className="w-full group"
              >
                Try Smart Search
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-primary">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Target className="h-6 w-6 text-primary" />
                <CardTitle className="text-xl">Service Matcher</CardTitle>
              </div>
              <CardDescription>
                Answer a few questions and get personalized recommendations for the legal services you need.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                <li>• Personalized assessment</li>
                <li>• Tailored recommendations</li>
                <li>• Priority level guidance</li>
              </ul>
              <Button 
                onClick={() => handleGetStarted('matcher')}
                variant="outline" 
                className="w-full group"
              >
                Find My Services
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-primary">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <MessageSquare className="h-6 w-6 text-primary" />
                <CardTitle className="text-xl">AI Assistant</CardTitle>
              </div>
              <CardDescription>
                Chat with our AI legal assistant for immediate guidance and answers to your legal questions.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                <li>• 24/7 availability</li>
                <li>• Instant responses</li>
                <li>• Legal guidance</li>
              </ul>
              <Button 
                onClick={() => handleGetStarted('chat')}
                variant="outline" 
                className="w-full group"
              >
                Start Chatting
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground mb-4">
            Need immediate legal assistance? Our AI tools are here to help, but for urgent matters:
          </p>
          <Button size="lg" className="text-lg px-8 py-3">
            Call (508) 454-0822 Now
          </Button>
        </div>
      </div>
    </section>
  );
};
