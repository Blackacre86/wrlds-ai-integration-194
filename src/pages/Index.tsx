
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
      <Hero />
      <PracticeAreas />
      <SummitAdvantage />
      <AttorneyProfile />
    </PageLayout>
  );
};

export default Index;
