
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const WhyChooseUsSection = () => {
  return (
    <section className="bg-gray-50 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-800 mb-8">
          Why Choose Summit Law For Your Defense
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">Former Prosecutor Insight</h3>
            <p className="text-gray-700">
              Attorney Joe Brava's background as a prosecutor gives him unique insight into how cases are built and prosecuted, allowing him to develop more effective defense strategies.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">Local Court Knowledge</h3>
            <p className="text-gray-700">
              We have extensive experience in Massachusetts courts and understand the local legal landscape, procedures, and personalities that can affect your case.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">Personalized Defense</h3>
            <p className="text-gray-700">
              We develop customized defense strategies based on the unique circumstances of your case, never applying a one-size-fits-all approach.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-10">
          <Link to="/contact">
            <Button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white border-none px-6 py-3 text-lg">
              Contact Us for a Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
