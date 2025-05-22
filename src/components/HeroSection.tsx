
import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Experienced Legal Representation You Can Trust
          </h1>
          <p className="text-lg mb-8 text-blue-100">
            Summit Law provides exceptional legal services with a commitment to excellence, 
            integrity, and client satisfaction across a wide range of practice areas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
              Schedule a Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Explore Our Services
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
        {/* Background decorative mountain shapes */}
        <div className="absolute bottom-0 right-0 w-full h-full">
          <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[300px] border-l-transparent border-b-[400px] border-b-white border-r-[200px] border-r-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
