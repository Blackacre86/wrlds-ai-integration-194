
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
              <KeySquare className="h-12 w-12 text-blue-700 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-center mb-2">Insider Knowledge</h3>
              <p className="text-center">
                Attorney Joe Brava leverages extensive experience as a prosecutor to anticipate the government's approach.
              </p>
            </CardContent>
          </Card>
      
          <Card className="border-t-4 border-blue-700">
            <CardContent className="pt-8">
              <CircleCheck className="h-12 w-12 text-blue-700 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-center mb-2">Strategic Defense</h3>
              <p className="text-center">
                Every case is meticulously reverse-engineered, identifying investigative errors to craft targeted defenses.
              </p>
            </CardContent>
          </Card>
      
          <Card className="border-t-4 border-blue-700">
            <CardContent className="pt-8">
              <Cpu className="h-12 w-12 text-blue-700 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-center mb-2">Advanced Technology</h3>
              <p className="text-center">
                Secure, proprietary artificial intelligence tools ensure thorough evidence analysis and effective courtroom strategies.
              </p>
            </CardContent>
          </Card>
      
          <Card className="border-t-4 border-blue-700">
            <CardContent className="pt-8">
              <Trophy className="h-12 w-12 text-blue-700 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-center mb-2">Proven Track Record</h3>
              <p className="text-center">
                Attorney Joe Brava has consistently achieved exceptional outcomes in complex criminal cases through careful preparation and relentless advocacy.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-12">
          <Link to="/contact">
            <Button size="lg" className="bg-blue-800 hover:bg-blue-900">
              Schedule Your Free Consultation
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
