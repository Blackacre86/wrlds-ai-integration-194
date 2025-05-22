
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-r from-blue-900 to-blue-800 text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Massachusetts Criminal Defense Attorney – Ready to Fight for You
            </h1>
            <p className="text-lg mb-8 text-blue-100">
              When your freedom is at stake, you need an experienced former prosecutor 
              who understands how the other side builds their case. Attorney Joe Brava 
              brings insider knowledge to your defense.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white border-none">
                  Secure Your Case Strategy
                </Button>
              </Link>
              <Link to="/our-approach">
                <Button size="lg" variant="outline" className="backdrop-blur-sm bg-white/10 border-white/20 text-white hover:bg-white/20">
                  Learn About Our Approach
                </Button>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/3 rounded-lg overflow-hidden shadow-2xl backdrop-blur-md bg-white/10 border border-white/20 p-1">
            {/* Replace with actual image of Attorney Joe Brava */}
            <div className="bg-gray-300 w-full aspect-[3/4] flex items-center justify-center rounded-lg">
              <span className="text-gray-500">Attorney Joe Brava Image</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add mountain silhouette in background */}
      <div className="absolute -bottom-10 right-0 w-full opacity-10 pointer-events-none">
        <img 
          src="/lovable-uploads/30517370-4045-4723-b7f5-447436e4e589.png" 
          alt="Mountain Background" 
          className="w-full h-auto max-h-96 object-contain"
        />
      </div>
    </section>
  );
};

export default HeroSection;
