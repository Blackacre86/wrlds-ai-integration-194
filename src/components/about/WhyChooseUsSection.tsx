
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { KeySquare, CircleCheck, Cpu, Trophy } from "lucide-react";

const WhyChooseUsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Summit Law</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="border-t-4 border-blue-700">
            <CardContent className="pt-8">
              {/* Courthouse/Scales Icon */}
              <div className="flex justify-center mb-4">
                <img 
                  src="/lovable-uploads/df441e53-750f-45a2-b240-e28cfd848ecd.png" 
                  alt="Prosecutorial Experience" 
                  className="h-20 w-20 object-contain"
                  style={{ filter: "brightness(0) saturate(100%) invert(22%) sepia(70%) saturate(2921%) hue-rotate(212deg) brightness(94%) contrast(94%)" }}
                />
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Insider Knowledge</h3>
              <p className="text-center">
                Attorney Joe Brava leverages extensive experience as a prosecutor to anticipate the government's approach.
              </p>
            </CardContent>
          </Card>
      
          <Card className="border-t-4 border-blue-700">
            <CardContent className="pt-8">
              {/* Process/Cycle Icon */}
              <div className="flex justify-center mb-4">
                <img 
                  src="/lovable-uploads/28bf46a3-558e-4eb4-800b-4d9d79ba5ffd.png" 
                  alt="Reverse Engineering" 
                  className="h-20 w-20 object-contain"
                  style={{ filter: "brightness(0) saturate(100%) invert(22%) sepia(70%) saturate(2921%) hue-rotate(212deg) brightness(94%) contrast(94%)" }}
                />
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Strategic Defense</h3>
              <p className="text-center">
                Every case is meticulously reverse-engineered, identifying investigative errors to craft targeted defenses.
              </p>
            </CardContent>
          </Card>
      
          <Card className="border-t-4 border-blue-700">
            <CardContent className="pt-8">
              {/* Brain/AI Icon */}
              <div className="flex justify-center mb-4">
                <img 
                  src="/lovable-uploads/57ecc485-c5a4-4d0e-b2dc-291183a42c14.png" 
                  alt="AI Analysis" 
                  className="h-20 w-20 object-contain"
                  style={{ filter: "brightness(0) saturate(100%) invert(22%) sepia(70%) saturate(2921%) hue-rotate(212deg) brightness(94%) contrast(94%)" }}
                />
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Advanced Technology</h3>
              <p className="text-center">
                Our AI-enhanced case analysis provides insights and advantages that traditional defense methods simply cannot match.
              </p>
            </CardContent>
          </Card>
      
          <Card className="border-t-4 border-blue-700">
            <CardContent className="pt-8">
              <div className="flex justify-center mb-4 h-20">
                {/* Trophy icon - keeping the existing icon for the fourth card */}
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-20 w-20 text-blue-700" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  strokeWidth="1.5"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" 
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Proven Track Record</h3>
              <p className="text-center">
                Attorney Joe Brava has consistently achieved exceptional outcomes in complex criminal cases through careful preparation and relentless advocacy.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-12">
          <Link to="/contact">
            <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white border-none">
              Schedule Your Free Consultation
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
