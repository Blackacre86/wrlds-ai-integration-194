
import { useEffect, useRef } from 'react';
import { ArrowRight, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const PracticeAreas = () => {
  const practiceAreasRef = useRef<HTMLDivElement>(null);

  const practiceAreas = [{
    title: "Criminal Defense",
    description: "Comprehensive defense for all felonies and misdemeanors in District and Superior Courts across Massachusetts.",
    image: "/lovable-uploads/f2b58f1f-cad1-4db7-877d-b231214922c0.png"
  }, {
    title: "Restraining & Harassment Orders", 
    description: "Expert representation for 209A restraining orders and 258E harassment prevention orders, both seeking and defending.",
    image: "/lovable-uploads/restraining-orders.jpg"
  }, {
    title: "Motor Vehicle Offenses",
    description: "Skilled defense for OUI/DUI, reckless driving, operating after suspension, and all motor vehicle violations.",
    image: "/lovable-uploads/a6b4b356-4246-4c8e-b810-2d264ed0a61d.png"
  }, {
    title: "Show Cause Hearings",
    description: "Strategic representation at Clerk Magistrate show cause hearings to prevent criminal charges from being filed.",
    image: "/lovable-uploads/c5bdf326-c48c-4785-9f8c-5f9b049f03d1.png"
  }];

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact-info');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-in');
          (entry.target as HTMLElement).style.opacity = '1';
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });

    if (practiceAreasRef.current) {
      const elements = practiceAreasRef.current.querySelectorAll('.practice-area-item');
      elements.forEach(el => {
        if (!el.classList.contains('animate-slide-in')) {
          (el as HTMLElement).style.opacity = '0';
          observer.observe(el);
        }
      });
    }

    return () => observer.disconnect();
  }, []);

  return <section id="practice-areas" className="relative bg-white overflow-hidden py-16 md:py-20 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8" ref={practiceAreasRef}> 
        <div className="text-center mb-10 max-w-3xl mx-auto practice-area-item">
          <div className="inline-block mb-2 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
            Legal Services
          </div>
          <h2 className="text-3xl font-bold mb-4">Practice Areas</h2>
          <p className="text-gray-600 mt-4">
            Summit Law Offices provides comprehensive legal representation across all areas of criminal defense,
            with specialized expertise in Massachusetts state courts.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {practiceAreas.map((area, index) => <div key={index} className="practice-area-item rounded-xl overflow-hidden transform transition-all duration-500 relative shadow-lg hover:-translate-y-1 h-[280px]" style={{
          transitionDelay: `${index * 100}ms`
        }}>
              <div className="absolute inset-0 w-full h-full">
                <img 
                  src={area.image} 
                  alt={
                    area.title === "Criminal Defense" ? "Courthouse aerial view - Criminal Defense representation" :
                    area.title === "Restraining & Harassment Orders" ? "Legal protection - Restraining and Harassment Orders" :
                    area.title === "Motor Vehicle Offenses" ? "Police officer writing citation - Motor Vehicle Offenses" :
                    "Judge's bench in courtroom - Show Cause Hearings"
                  }
                  className="w-full h-full object-cover object-center grayscale" 
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/50"></div>
              </div>
              
              <div className="relative z-10 flex flex-col justify-between p-6 h-full">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {area.title}
                  </h3>
                  <p className="text-white/90 text-sm">
                    {area.description}
                  </p>
                </div>
                <div className="h-0.5 bg-white/70 mt-3 w-full"></div>
              </div>
            </div>)}
        </div>

        <div className="text-center mt-12 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button onClick={scrollToContact} className="inline-flex items-center px-4 sm:px-6 py-3 bg-gray-700 hover:bg-gray-800 text-white rounded-lg shadow-md hover:shadow-lg transition-all group w-full sm:w-auto">
            Need Legal Representation?
            <MessageSquare className="ml-2 w-4 h-4 group-hover:animate-pulse" />
          </Button>
          
          <Button onClick={() => window.location.href = 'tel:508-454-0822'} className="inline-flex items-center px-4 sm:px-6 py-3 bg-white text-gray-700 rounded-lg border border-gray-200 hover:bg-gray-50 hover:shadow-md transition-all group w-full sm:w-auto">
            Call 508-454-0822
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>;
};

export default PracticeAreas;
