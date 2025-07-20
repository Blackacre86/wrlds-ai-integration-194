
import PageLayout from '@/components/PageLayout';
import Hero from '@/components/Hero';
import PracticeAreas from '@/components/PracticeAreas';
import AttorneyProfile from '@/components/AttorneyProfile';
import SummitAdvantage from '@/components/SummitAdvantage';
import SEO from '@/components/SEO';

const Index = () => {
  return (
    <PageLayout>
      <SEO 
        title="Summit Law Offices - Strategic Criminal Defense Across Massachusetts" 
        description="Attorney Joe Brava provides strategic criminal defense across Massachusetts. Former prosecutor with 1,000+ cases of experience. Call 508-454-0822 for consultation."
        imageUrl="/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png"
        keywords={['criminal defense attorney', 'Massachusetts lawyer', 'DUI defense', 'restraining orders', 'Clinton MA attorney', 'former prosecutor']}
      />
      {/* Semantic HTML structure for AI agents */}
      <main role="main" itemScope itemType="https://schema.org/LegalService">
        <header id="hero" role="banner">
          <Hero />
        </header>
        
        <section id="summit-advantage" role="region" aria-labelledby="advantage-heading">
          <SummitAdvantage />
        </section>
        
        <section id="practice-areas" role="region" aria-labelledby="services-heading" itemScope itemType="https://schema.org/Service">
          <PracticeAreas />
        </section>
        
        <section id="attorney-profile" role="region" aria-labelledby="attorney-heading" itemScope itemType="https://schema.org/Person">
          <AttorneyProfile />
        </section>
        
        <section id="client-portal" role="region" aria-labelledby="portal-heading" className="py-16 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 id="portal-heading" className="text-3xl font-bold mb-6">Client Portal</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Securely access your case information and submit intake forms through our client portal.
            </p>
            <a 
              href="/client-auth" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary/90 transition-colors"
            >
              Access Client Portal
            </a>
          </div>
        </section>
      </main>
    </PageLayout>
  );
};

export default Index;
