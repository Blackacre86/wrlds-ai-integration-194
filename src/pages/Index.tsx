
import React, { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ProsecutorAdvantageSection from "@/components/ProsecutorAdvantageSection";
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

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      // Scroll to just above the contact section
      const offsetPosition = contactSection.offsetTop - 100;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const SectionDivider = ({ targetSectionId }: { targetSectionId: string }) => (
    <div className="relative bg-gradient-to-r from-summit-slate-50 to-white py-8 overflow-hidden">
      <div className="container mx-auto flex flex-col justify-center items-center">
        <div className="mb-4 transform scale-110 bg-white/80 backdrop-blur-sm rounded-xl p-3 shadow-md border border-summit-slate-200">
          <Logo variant="header" />
        </div>
        <button 
          onClick={() => scrollToSection(targetSectionId)}
          className="flex flex-col items-center gap-2 group cursor-pointer"
          aria-label="Scroll to next section"
        >
          <div className="bg-gradient-to-br from-summit-blue-100 to-summit-teal-50 rounded-full p-5 shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:transform group-hover:scale-105 border border-summit-blue-200">
            <ChevronDown className="h-8 w-8 text-summit-blue-700" />
          </div>
        </button>
      </div>
      <Separator className="mt-8 bg-gradient-to-r from-transparent via-summit-teal-300 to-transparent h-[2px]" />
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <StructuredData />
      <Header />
      <main className="flex-grow">
        <HeroSection />
        
        {/* Divider to Services */}
        <SectionDivider targetSectionId="services-section" />
        
        <div id="services-section" className="animate-on-scroll">
          <ServicesSection />
        </div>
        
        {/* Divider to Prosecutor Advantage */}
        <SectionDivider targetSectionId="prosecutor-advantage-section" />
        
        <div id="prosecutor-advantage-section" className="animate-on-scroll">
          <ProsecutorAdvantageSection />
        </div>
        
        {/* Divider to Testimonials */}
        <SectionDivider targetSectionId="testimonials-section" />
        
        <div id="testimonials-section" className="animate-on-scroll">
          <TestimonialsSection />
        </div>
        
        {/* Divider to Contact */}
        <SectionDivider targetSectionId="contact-section" />
        
        <div id="contact-section" className="animate-on-scroll">
          <CTASection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
