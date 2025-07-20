
import PageLayout from '@/components/PageLayout';
import { LegalServiceMatcher } from '@/components/LegalServiceMatcher';
import SEO from '@/components/SEO';

const AIServiceMatcher = () => {
  return (
    <PageLayout>
      <SEO 
        title="AI Legal Service Matcher - Summit Law Offices" 
        description="Get personalized legal service recommendations with our AI-powered questionnaire. Find the right legal help for your specific situation."
      />
      <div className="min-h-screen py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Find Your Perfect Legal Match
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our AI-powered questionnaire will analyze your situation and recommend the most relevant legal services for your needs.
              </p>
            </div>
            <LegalServiceMatcher />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default AIServiceMatcher;
