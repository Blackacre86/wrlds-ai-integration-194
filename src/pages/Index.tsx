import React, { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ProsecutorAdvantageSection from "@/components/ProsecutorAdvantageSection";
import AIInnovationSection from "@/components/AIInnovationSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import { ChevronDown } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Logo from "@/components/Logo";

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
      <StructuredData />
      <Header />
      <main className="flex-grow">
        <HeroSection />
        
        {/* Updated Summit Divider with header variant logo */}
        <div className="relative bg-white py-8 overflow-hidden">
          <div className="container mx-auto flex flex-col justify-center items-center">
            {/* Header variant logo for divider */}
            <div className="mb-4 transform scale-110">
              <Logo variant="header" />
            </div>
            <button 
              onClick={scrollToNextSection}
              className="flex flex-col items-center gap-2 group cursor-pointer"
              aria-label="Scroll to next section"
            >
              <div className="bg-gradient-to-br from-blue-100 to-teal-50 rounded-full p-5 shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:transform group-hover:scale-105">
                <ChevronDown className="h-8 w-8 text-blue-800" />
              </div>
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
          <AIInnovationSection />
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
