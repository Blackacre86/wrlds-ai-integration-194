
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import StructuredData from "@/components/StructuredData";
import HeroSection from "@/components/about/HeroSection";
import AttorneyBiography from "@/components/about/AttorneyBiography";
import ParalegalBiography from "@/components/about/ParalegalBiography";
import WhyChooseUsSection from "@/components/about/WhyChooseUsSection";
import UniqueApproachSection from "@/components/about/UniqueApproachSection";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Helmet>
        <title>About Attorney Joe Brava | Summit Law Criminal Defense</title>
        <meta name="description" content="Learn about Attorney Joe Brava and the Summit Law team. Former prosecutor with 5+ years experience now providing expert criminal defense representation in Massachusetts." />
        <meta name="keywords" content="Joe Brava attorney, former prosecutor, criminal defense lawyer Massachusetts, Summit Law team, experienced criminal attorney" />
        <meta property="og:title" content="About Attorney Joe Brava | Summit Law Criminal Defense" />
        <meta property="og:description" content="Learn about Attorney Joe Brava and the Summit Law team. Former prosecutor with 5+ years experience now providing expert criminal defense representation in Massachusetts." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://summitlawoffices.com/about" />
        <link rel="canonical" href="https://summitlawoffices.com/about" />
      </Helmet>
      
      <StructuredData 
        type="Attorney"
        title="About Attorney Joe Brava | Summit Law"
        description="Former prosecutor with 5+ years experience now providing expert criminal defense representation in Massachusetts"
        url="https://summitlawoffices.com/about"
      />
      
      <Header />
      <Breadcrumb />
      <main className="flex-grow">
        <HeroSection />
        <AttorneyBiography />
        <ParalegalBiography />
        <WhyChooseUsSection />
        <UniqueApproachSection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
