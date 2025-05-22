
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/about/HeroSection";
import AttorneyBiography from "@/components/about/AttorneyBiography";
import ParalegalBiography from "@/components/about/ParalegalBiography";
import UniqueApproachSection from "@/components/about/UniqueApproachSection";
import WhyChooseUsSection from "@/components/about/WhyChooseUsSection";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AttorneyBiography />
        <ParalegalBiography />
        <UniqueApproachSection />
        <WhyChooseUsSection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
