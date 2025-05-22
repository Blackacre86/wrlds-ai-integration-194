
import React from "react";
import Header from "@/components/Header";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ProsecutorAdvantageSection from "@/components/ProsecutorAdvantageSection";
import AIInnovationSection from "@/components/AIInnovationSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
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
