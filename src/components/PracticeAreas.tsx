import { useEffect, useRef, useState } from 'react';
import { Scale, Shield, Car, FileText, ArrowRight, MessageSquare } from "lucide-react";
import { cn } from '@/lib/utils';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
const PracticeAreas = () => {
  const practiceAreasRef = useRef<HTMLDivElement>(null);
  const [hoveredArea, setHoveredArea] = useState<number | null>(null);
  const practiceAreas = [{
    icon: <Scale className="w-10 h-10 text-white transition-transform duration-300 transform" />,
    title: "Criminal Defense",
    description: "Comprehensive defense for all felonies and misdemeanors in District and Superior Courts across Massachusetts.",
    image: "/lovable-uploads/48e540e5-6a25-44e4-b3f7-80f3bfc2777a.png"
  }, {
    icon: <Shield className="w-10 h-10 text-white transition-transform duration-300 transform" />,
    title: "Restraining & Harassment Orders",
    description: "Expert representation for 209A restraining orders and 258E harassment prevention orders, both seeking and defending.",
    image: "/lovable-uploads/48ecf6e2-5a98-4a9d-af6f-ae2265cd4098.png"
  }, {
    icon: <Car className="w-10 h-10 text-white transition-transform duration-300 transform" />,
    title: "Motor Vehicle Offenses",
    description: "Skilled defense for OUI/DUI, reckless driving, operating after suspension, and all motor vehicle violations.",
    image: "/lovable-uploads/cf8966e3-de0d-445f-9fbd-ee6c48daa7ff.png"
  }, {
    icon: <FileText className="w-10 h-10 text-white transition-transform duration-300 transform" />,
    title: "Show Cause Hearings",
    description: "Strategic representation at Clerk Magistrate show cause hearings to prevent criminal charges from being filed.",
    image: "/lovable-uploads/6739bd63-bf19-4abd-bb23-0b613bbf7ac8.png"
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
  return <section id="practice-areas" className="relative bg-white overflow-hidden py-10 md:py-[50px] w-full">
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
        }} onMouseEnter={() => setHoveredArea(index)} onMouseLeave={() => setHoveredArea(null)}>
              <div className="absolute inset-0 w-full h-full">
                <img src={area.image} alt={area.title} className="w-full h-full object-cover transition-all duration-300 grayscale" />
                <div className={cn("absolute inset-0 transition-opacity duration-300", hoveredArea === index ? "bg-black/50" : "bg-black/70")}></div>
              </div>
              
              <div className="relative z-10 flex flex-col justify-between p-6 h-full">
                <div>
                  <div className={cn("inline-block p-3 bg-gray-800/40 backdrop-blur-sm rounded-lg transition-all duration-300 transform mb-4", hoveredArea === index ? "hover:scale-110" : "")}>
                    
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {area.title}
                  </h3>
                  <p className="text-white/90 text-sm">
                    {area.description}
                  </p>
                </div>
                <div className={`h-0.5 bg-white/70 mt-3 transition-all duration-500 ${hoveredArea === index ? 'w-full' : 'w-0'}`}></div>
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