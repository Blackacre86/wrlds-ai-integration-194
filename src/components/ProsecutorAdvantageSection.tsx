
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Key } from "lucide-react";
import { Link } from "react-router-dom";

const ProsecutorAdvantageSection = () => {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Former Prosecutor Advantage</h2>
            <p className="text-lg text-gray-700 mb-4">
              Attorney Joe Brava spent five years as a prosecutor at the Berkshire District Attorney's Office, 
              specializing in domestic violence cases. This experience provides him with insider knowledge of 
              how prosecutors build their cases against you.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Unlike most defense attorneys, we begin by reverse-engineering the prosecution's case, 
              identifying weaknesses and building a strategic defense that anticipates their every move.
            </p>
            <Link to="/prosecutor-advantage">
              <Button className="group bg-blue-800 hover:bg-blue-900 text-white">
                Learn More About Our Approach
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Key className="h-12 w-12 text-blue-700 mb-4" />
                <h3 className="text-xl font-bold mb-2">Inside Knowledge</h3>
                <p className="text-gray-600">
                  We know exactly how prosecutors build their cases, what evidence they prioritize, and how they prepare for trial.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="h-12 w-12 text-blue-700 mb-4 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12">
                    {/* Chess knight piece */}
                    <path d="M8 16l1.5-5" />
                    <path d="M10.5 7.5L12 8V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h.5l-5 5a2 2 0 0 0-.5 1.5V16h12v-1c0-1-.6-1.5-1.5-1.5h-1c-1 0-1.5.5-1.5 1.5v1" />
                    <path d="M7 16.5v4a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-4" />
                    <path d="M16 11.5c.2-1-.8-1.5-1.7-1.5h-1.6c-.9 0-1.7.4-1.7 1.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Strategic Analysis</h3>
                <p className="text-gray-600">
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
