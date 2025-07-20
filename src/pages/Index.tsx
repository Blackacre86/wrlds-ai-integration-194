
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
      </main>
    </PageLayout>
  );
};

export default Index;
