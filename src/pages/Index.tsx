
import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ProsecutorAdvantageSection from "@/components/ProsecutorAdvantageSection";
import AIInnovationSection from "@/components/AIInnovationSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { Mountain } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        
        {/* Summit Divider */}
        <div className="relative bg-gradient-to-b from-white to-gray-50 py-6 overflow-hidden">
          <div className="container mx-auto flex justify-center items-center">
            <div className="bg-blue-50 rounded-full p-4 shadow-md">
              <Mountain className="h-10 w-10 text-blue-700" />
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
        </div>
        
        <ServicesSection />
        <ProsecutorAdvantageSection />
        <TestimonialsSection />
        <AIInnovationSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
