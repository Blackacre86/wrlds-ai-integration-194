
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Trophy } from "lucide-react";

const WhyChooseUsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Summit Law</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <div className="flex justify-center mb-4 h-20">
                {/* Trophy icon for proven track record */}
                <Trophy className="h-20 w-20 text-blue-700" />
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
            <Button size="lg" className="bg-summit-gold-400 hover:bg-summit-gold-500 text-summit-blue-900 border-none text-base md:text-lg font-semibold px-6 py-6 shadow-lg hover:shadow-xl transition-all duration-300">
              Schedule Your Free Consultation
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
