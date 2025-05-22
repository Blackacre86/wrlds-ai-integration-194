
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AttorneyBiography from "@/components/about/AttorneyBiography";
import ParalegalBiography from "@/components/about/ParalegalBiography";
import UniqueApproachSection from "@/components/about/UniqueApproachSection";
import WhyChooseUsSection from "@/components/about/WhyChooseUsSection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const About = () => {
  // Function to handle tab changes and prevent scrolling to the bottom
  const handleTabChange = (value: string) => {
    // Scroll to the top of the tabs container
    const tabsContainer = document.querySelector('.tabs-container');
    if (tabsContainer) {
      tabsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 md:px-6 py-8 tabs-container">
          <h1 className="text-4xl font-bold text-center mb-8">About Our Team</h1>
          
          <Tabs defaultValue="attorney" className="w-full" onValueChange={handleTabChange}>
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="attorney" className="text-lg px-6">Attorney Profile</TabsTrigger>
                <TabsTrigger value="paralegal" className="text-lg px-6">Paralegal Profile</TabsTrigger>
                <TabsTrigger value="approach" className="text-lg px-6">Our Approach</TabsTrigger>
                <TabsTrigger value="why-choose" className="text-lg px-6">Why Choose Us</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="attorney">
              <AttorneyBiography />
            </TabsContent>
            
            <TabsContent value="paralegal">
              <ParalegalBiography />
            </TabsContent>
            
            <TabsContent value="approach">
              <UniqueApproachSection />
            </TabsContent>
            
            <TabsContent value="why-choose">
              <WhyChooseUsSection />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
