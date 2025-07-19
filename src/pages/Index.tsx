
import PageLayout from '@/components/PageLayout';
import Hero from '@/components/Hero';
import PracticeAreas from '@/components/PracticeAreas';
import AttorneyProfile from '@/components/AttorneyProfile';
import SummitAdvantage from '@/components/SummitAdvantage';
import BlogPreview from '@/components/BlogPreview';
import SEO from '@/components/SEO';
import { useEffect } from 'react';

const Index = () => {
  // Fix any ID conflicts when the page loads
  useEffect(() => {
    const contactElements = document.querySelectorAll('[id="contact"]');
    if (contactElements.length > 1) {
      // If there are multiple elements with id="contact", rename one
      contactElements[1].id = 'contact-footer';
    }
  }, []);

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
      <BlogPreview />
    </PageLayout>
  );
};

export default Index;
