
import PageLayout from '@/components/PageLayout';
import { EmbeddingManager } from '@/components/EmbeddingManager';
import { AIAnalytics } from '@/components/AIAnalytics';
import { PerformanceMonitor } from '@/components/PerformanceMonitor';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import SEO from '@/components/SEO';

const AdminAI = () => {
  return (
    <PageLayout>
      <SEO 
        title="AI Admin Dashboard - Summit Law Offices" 
        description="AI content management, analytics, and performance monitoring for legal services"
      />
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-4">AI Administration Dashboard</h1>
              <p className="text-lg text-muted-foreground">
                Manage AI content, monitor performance, and analyze user engagement
              </p>
            </div>
            
            <Tabs defaultValue="embeddings" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="embeddings">Content Management</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="performance">Performance</TabsTrigger>
              </TabsList>
              
              <TabsContent value="embeddings" className="space-y-6">
                <EmbeddingManager />
              </TabsContent>
              
              <TabsContent value="analytics" className="space-y-6">
                <AIAnalytics />
              </TabsContent>
              
              <TabsContent value="performance" className="space-y-6">
                <PerformanceMonitor />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default AdminAI;
