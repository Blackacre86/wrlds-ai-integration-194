
import React, { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ProsecutorAdvantageSection from "@/components/ProsecutorAdvantageSection";
import AIInnovationSection from "@/components/AIInnovationSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { Mountain, ChevronDown, Cpu, SearchCheck, PieChart } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  // Subtle scroll animation for section elements
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.remove('opacity-0', 'translate-y-5');
        }
      });
    }, { threshold: 0.1 });

    const sections = document.querySelectorAll('.animate-on-scroll');
    sections.forEach(section => {
      section.classList.add('opacity-0', 'translate-y-5', 'transition-all', 'duration-700');
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  const scrollToNextSection = () => {
    const firstSection = document.getElementById('services-section');
    if (firstSection) {
      window.scrollTo({
        top: firstSection.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        
        {/* Enhanced Summit Divider with animation */}
        <div className="relative bg-white py-8 overflow-hidden">
          <div className="container mx-auto flex justify-center items-center">
            <button 
              onClick={scrollToNextSection}
              className="flex flex-col items-center gap-2 group cursor-pointer"
              aria-label="Scroll to next section"
            >
              <div className="bg-gradient-to-br from-blue-100 to-teal-50 rounded-full p-5 shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:transform group-hover:scale-105">
                <Mountain className="h-8 w-8 text-blue-800" />
              </div>
              <ChevronDown className="h-6 w-6 text-blue-800 animate-bounce" />
            </button>
          </div>
          <Separator className="mt-8 bg-gradient-to-r from-transparent via-blue-200 to-transparent h-[2px]" />
        </div>
        
        {/* Add IDs and animation classes to sections */}
        <div id="services-section" className="animate-on-scroll">
          <ServicesSection />
        </div>
        
        <div className="animate-on-scroll">
          <ProsecutorAdvantageSection />
        </div>
        
        <div className="animate-on-scroll">
          <TestimonialsSection />
        </div>
        
        <div className="animate-on-scroll">
          {/* Updated to link to Our Approach */}
          <section className="py-16 bg-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 bg-pattern-leaf pointer-events-none"></div>
            
            <div className="container mx-auto px-4 md:px-8 relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4 font-serif">
                  Innovative Legal Defense with AI Technology
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Summit Law leverages cutting-edge artificial intelligence tools to provide you with superior criminal defense representation.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center text-center p-6 bg-gradient-to-b from-gray-50 to-blue-50/30 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:translate-y-[-3px]">
                  <div className="bg-blue-50 rounded-full p-4 mb-4">
                    <Cpu className="h-10 w-10 text-[hsl(var(--summit-blue))]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Advanced Case Analysis</h3>
                  <p className="text-gray-600 text-sm">
                    Our proprietary AI tools analyze case evidence and documentation to identify patterns, inconsistencies, and opportunities that human review might miss.
                  </p>
                </div>
                
                <div className="flex flex-col items-center text-center p-6 bg-gradient-to-b from-gray-50 to-blue-50/30 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:translate-y-[-3px]">
                  <div className="bg-blue-50 rounded-full p-4 mb-4">
                    <SearchCheck className="h-10 w-10 text-[hsl(var(--summit-blue))]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Enhanced Legal Research</h3>
                  <p className="text-gray-600 text-sm">
                    AI-powered legal research gives us instant access to relevant precedents and legal strategies that strengthen your defense.
                  </p>
                </div>
                
                <div className="flex flex-col items-center text-center p-6 bg-gradient-to-b from-gray-50 to-blue-50/30 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:translate-y-[-3px]">
                  <div className="bg-blue-50 rounded-full p-4 mb-4">
                    <PieChart className="h-10 w-10 text-[hsl(var(--summit-blue))]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Compelling Evidence Presentation</h3>
                  <p className="text-gray-600 text-sm">
                    We create clear, persuasive visualizations of complex evidence and timelines that make your case stronger in court.
                  </p>
                </div>
              </div>
              
              <div className="mt-10 text-center">
                <Link to="/our-approach?tab=ai-innovation">
                  <Button size="lg" className="bg-[hsl(var(--summit-blue))] hover:bg-blue-900 text-white text-base px-6 py-3 shadow-md hover:shadow-lg transition-all duration-300">
                    Learn How Our AI Tools Benefit Your Case
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </div>
        
        <div className="animate-on-scroll">
          <CTASection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
