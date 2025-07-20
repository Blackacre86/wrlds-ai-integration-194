
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { SmartRecommendations } from '@/components/SmartRecommendations';
import { LegalServiceMatcher } from '@/components/LegalServiceMatcher';
import { EnhancedSearch } from '@/components/EnhancedSearch';
import { LegalChatbot } from '@/components/LegalChatbot';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Brain, Search, MessageSquare, Target, Sparkles } from 'lucide-react';

const AIServices = () => {
  return (
    <PageLayout>
      <SEO 
        title="AI-Powered Legal Services - Summit Law Offices" 
        description="Experience intelligent legal service matching, AI-powered search, and smart recommendations powered by advanced AI technology"
      />
      <LegalChatbot />
      
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Brain className="h-8 w-8 text-primary" />
                <h1 className="text-4xl font-bold">AI-Powered Legal Services</h1>
              </div>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Experience the future of legal service discovery with our AI-powered tools that help you find the right legal solutions for your specific situation.
              </p>
              <div className="flex items-center justify-center gap-2 mt-4">
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Sparkles className="h-3 w-3" />
                  AI-Enhanced
                </Badge>
                <Badge variant="outline">Natural Language Processing</Badge>
                <Badge variant="outline">Smart Matching</Badge>
              </div>
            </div>

            {/* AI Features Tabs */}
            <Tabs defaultValue="search" className="space-y-8">
              <TabsList className="grid w-full grid-cols-3 lg:grid-cols-3 h-auto p-1">
                <TabsTrigger value="search" className="flex items-center gap-2 p-3">
                  <Search className="h-4 w-4" />
                  <span className="hidden sm:inline">AI Search</span>
                </TabsTrigger>
                <TabsTrigger value="matcher" className="flex items-center gap-2 p-3">
                  <Target className="h-4 w-4" />
                  <span className="hidden sm:inline">Service Matcher</span>
                </TabsTrigger>
                <TabsTrigger value="recommendations" className="flex items-center gap-2 p-3">
                  <Brain className="h-4 w-4" />
                  <span className="hidden sm:inline">Smart Recommendations</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="search" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Search className="h-5 w-5" />
                      AI-Powered Legal Search
                    </CardTitle>
                    <CardDescription>
                      Search our legal content using natural language. Ask questions as you would to a lawyer, and our AI will find the most relevant information.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <EnhancedSearch />
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="matcher" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="h-5 w-5" />
                      Legal Service Matcher
                    </CardTitle>
                    <CardDescription>
                      Answer a few questions about your legal situation, and our AI will recommend the most appropriate legal services for your needs.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <LegalServiceMatcher />
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="recommendations" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Brain className="h-5 w-5" />
                      Smart Recommendations
                    </CardTitle>
                    <CardDescription>
                      Based on your interests and browsing patterns, here are personalized legal service recommendations.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <SmartRecommendations 
                      currentContent="Legal services and criminal defense representation in Massachusetts"
                      title="Recommended Legal Services for You"
                      maxRecommendations={4}
                    />
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Feature Overview Cards */}
            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card className="text-center">
                <CardHeader>
                  <Search className="h-8 w-8 mx-auto text-primary mb-2" />
                  <CardTitle className="text-lg">Natural Language Search</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Ask questions in plain English and get relevant legal information instantly.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Target className="h-8 w-8 mx-auto text-primary mb-2" />
                  <CardTitle className="text-lg">Smart Matching</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    AI-powered questionnaire matches you with the right legal services.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Brain className="h-8 w-8 mx-auto text-primary mb-2" />
                  <CardTitle className="text-lg">Intelligent Recommendations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Personalized suggestions based on your legal needs and interests.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <MessageSquare className="h-8 w-8 mx-auto text-primary mb-2" />
                  <CardTitle className="text-lg">Legal Chatbot</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    24/7 AI assistant for initial legal consultation and guidance.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Call to Action */}
            <div className="mt-16 text-center">
              <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-primary/10">
                <CardContent className="pt-8 pb-8">
                  <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Use our AI-powered tools to find the legal services you need, or contact Attorney Joe Brava directly for personalized legal assistance.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button 
                      onClick={() => {
                        const contactSection = document.getElementById('contact');
                        if (contactSection) {
                          contactSection.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-medium transition-colors"
                    >
                      Contact Attorney Brava
                    </button>
                    <button 
                      onClick={() => {
                        window.location.href = 'tel:508-454-0822';
                      }}
                      className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-3 rounded-lg font-medium transition-colors"
                    >
                      Call (508) 454-0822
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default AIServices;
