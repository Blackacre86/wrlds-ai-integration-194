
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const UniqueApproachSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Our Unique Approach</h2>
          
          <div className="space-y-8">
            <p className="text-lg">
              We employ a strategic and proactive approach to criminal defense that fully utilizes our background as former prosecutors and our deep understanding of law enforcement investigations.
            </p>
            
            <div className="bg-blue-50 p-8 rounded-lg border border-blue-100 my-8">
              <h3 className="text-xl font-bold mb-4 text-blue-800">The Summit Advantage</h3>
              <p className="text-gray-700 mb-6">
                Our approach is built on two key pillars: prosecutorial experience and strategic case analysis. 
                By thinking like prosecutors while leveraging proven defense strategies, we develop defense approaches that others simply cannot match.
              </p>
              
              <Link to="/our-approach" className="inline-block">
                <Button className="group bg-blue-800 hover:bg-blue-900 text-white">
                  Secure Your Case Strategy
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniqueApproachSection;
