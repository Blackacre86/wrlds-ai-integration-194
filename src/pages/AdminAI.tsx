import PageLayout from '@/components/PageLayout';
import { EmbeddingManager } from '@/components/EmbeddingManager';
import SEO from '@/components/SEO';

const AdminAI = () => {
  return (
    <PageLayout>
      <SEO 
        title="AI Admin - Summit Law Offices" 
        description="AI content management and semantic search administration"
      />
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-4">AI Content Management</h1>
              <p className="text-lg text-muted-foreground">
                Manage AI embeddings and test semantic search functionality
              </p>
            </div>
            <EmbeddingManager />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default AdminAI;