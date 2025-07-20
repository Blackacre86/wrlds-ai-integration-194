
import PageLayout from '@/components/PageLayout';
import { EnhancedSearch } from '@/components/EnhancedSearch';
import SEO from '@/components/SEO';

const AISearch = () => {
  return (
    <PageLayout>
      <SEO 
        title="AI Legal Search - Summit Law Offices" 
        description="Search legal services and information using natural language. Get instant answers to your legal questions."
      />
      <div className="min-h-screen py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Smart Legal Search
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Ask questions in natural language and get instant, relevant answers about legal services, procedures, and your rights.
              </p>
            </div>
            <EnhancedSearch />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default AISearch;
