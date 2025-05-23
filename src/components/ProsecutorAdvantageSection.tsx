
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ProsecutorAdvantageSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Mountain Background Image with subtle overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/f98ed06a-60c2-411a-99b5-ef4657787c04.png" 
          alt="Mountain Path" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/90 to-blue-100/90"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">The Former Prosecutor Advantage</h2>
            <p className="text-xl text-gray-700 mb-5 leading-relaxed">
              Attorney Joe Brava spent five years as a prosecutor at the Berkshire District Attorney's Office, 
              specializing in domestic violence cases. This experience provides him with insider knowledge of 
              how prosecutors build their cases against you.
            </p>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Unlike most defense attorneys, we begin by reverse-engineering the prosecution's case, 
              identifying weaknesses and building a strategic defense that anticipates their every move.
            </p>
            <Link to="/prosecutor-advantage">
              <Button className="group bg-blue-800 hover:bg-blue-900 text-white px-8 py-6 text-lg shadow-md hover:shadow-lg transition-all duration-300">
                Learn More About Our Approach
                <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-2" />
              </Button>
            </Link>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="grid grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg backdrop-blur-sm bg-white/90 hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px]">
                <div className="h-20 w-20 mb-6 flex items-center justify-center mx-auto bg-blue-50 rounded-full p-4">
                  <img 
                    src="/lovable-uploads/4f801225-f723-4f29-8a2f-221b3118f3f6.png"
                    alt="Padlock" 
                    className="h-full w-full object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">Inside Knowledge</h3>
                <p className="text-gray-600 text-lg text-center">
                  We know exactly how prosecutors build their cases, what evidence they prioritize, and how they prepare for trial.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg backdrop-blur-sm bg-white/90 hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px]">
                <div className="h-20 w-20 mb-6 flex items-center justify-center mx-auto bg-blue-50 rounded-full p-4">
                  <img 
                    src="/lovable-uploads/16a64fae-8213-4d53-8020-9fdc9d61b6ad.png"
                    alt="Chess Knight" 
                    className="h-full w-full object-contain"
                    style={{ filter: "brightness(0) saturate(100%) invert(25%) sepia(71%) saturate(1870%) hue-rotate(208deg) brightness(92%) contrast(96%)" }}
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">Strategic Analysis</h3>
                <p className="text-gray-600 text-lg text-center">
                  By analyzing the prosecution's case first, we identify vulnerabilities they don't expect us to find.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProsecutorAdvantageSection;
