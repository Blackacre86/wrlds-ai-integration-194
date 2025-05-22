
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/about/HeroSection";
import AttorneyBiography from "@/components/about/AttorneyBiography";
import ParalegalBiography from "@/components/about/ParalegalBiography";
import UniqueApproachSection from "@/components/about/UniqueApproachSection";
import WhyChooseUsSection from "@/components/about/WhyChooseUsSection";
import { Separator } from "@/components/ui/separator";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        
        <div className="container mx-auto px-4 md:px-6 py-8">
          <section id="attorney" className="scroll-mt-20">
            <AttorneyBiography />
            <Separator className="my-12" />
          </section>
          
          <section id="paralegal" className="scroll-mt-20">
            <ParalegalBiography />
            <Separator className="my-12" />
          </section>
          
          <section id="approach" className="scroll-mt-20">
            <UniqueApproachSection />
            <Separator className="my-12" />
          </section>
          
          <section id="why-choose" className="scroll-mt-20">
            <WhyChooseUsSection />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
