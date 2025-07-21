
import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import Hero from '@/components/Hero';
import PracticeAreas from '@/components/PracticeAreas';
import AttorneyProfile from '@/components/AttorneyProfile';
import SummitAdvantage from '@/components/SummitAdvantage';
import BlogPreview from '@/components/BlogPreview';
import TransitionShape from '@/components/TransitionShape';
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
      
      <main role="main" itemScope itemType="https://schema.org/LegalService" className="smooth-scroll">
        <header id="hero" role="banner">
          <Hero />
        </header>
        
        <TransitionShape variant="wave" direction="down" color="gray" className="my-8" />
        
        <section id="summit-advantage" role="region" aria-labelledby="advantage-heading" className="animate-fade-in">
          <SummitAdvantage />
        </section>
        
        <TransitionShape variant="seamless" direction="up" color="white" />
        
        <section id="practice-areas" role="region" aria-labelledby="services-heading" itemScope itemType="https://schema.org/Service" className="animate-fade-in animation-delay-200">
          <PracticeAreas />
        </section>
        
        <TransitionShape variant="curve" direction="down" color="gray" className="my-8" />
        
        <section id="attorney-profile" role="region" aria-labelledby="attorney-heading" itemScope itemType="https://schema.org/Person" className="animate-fade-in animation-delay-300">
          <AttorneyProfile />
        </section>
        
        <TransitionShape variant="angular" direction="up" color="white" />
        
        <section id="blog" role="region" aria-labelledby="blog-heading" className="animate-fade-in animation-delay-400">
          <BlogPreview />
        </section>
        
        <TransitionShape variant="diagonal" direction="down" color="gray" className="my-8" />
        
        <section id="client-portal" role="region" aria-labelledby="portal-heading" className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white animate-fade-in animation-delay-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="relative">
              <h2 id="portal-heading" className="text-3xl md:text-4xl font-bold mb-6 text-black">
                Client Portal Access
              </h2>
              <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
                Secure, convenient access to your case information, documents, and communication tools. 
                Available 24/7 for your peace of mind.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link 
                  to="/client-auth" 
                  className="inline-flex items-center px-8 py-4 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 group"
                >
                  Access Client Portal
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <div className="text-sm text-gray-500">
                  New client? <Link to="/client-auth" className="text-black hover:underline font-medium">Create account</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageLayout>
  );
};

export default Index;
