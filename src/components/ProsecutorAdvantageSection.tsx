
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ProsecutorAdvantageSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-summit-slate-50 to-summit-blue-50 relative overflow-hidden">
      {/* Subtle geometric pattern overlay */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23${encodeURIComponent('0ea5e9')}' fill-opacity='0.3' fill-rule='evenodd'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-summit-slate-800 mb-4 font-serif">The Former Prosecutor Advantage</h2>
            <p className="text-lg text-summit-slate-600 mb-4 leading-relaxed">
              Attorney Joe Brava spent five years as a prosecutor at the Berkshire District Attorney's Office, 
              specializing in domestic violence cases. This experience provides him with insider knowledge of 
              how prosecutors build their cases against you.
            </p>
            <p className="text-lg text-summit-slate-600 mb-6 leading-relaxed">
              Unlike most defense attorneys, we begin by reverse-engineering the prosecution's case, 
              identifying weaknesses and building a strategic defense that anticipates their every move.
            </p>
            <Link to="/prosecutor-advantage">
              <Button className="group bg-summit-blue-600 hover:bg-summit-blue-700 text-white px-6 py-3 text-base shadow-md hover:shadow-lg transition-all duration-300">
                Learn More About Our Approach
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="grid grid-cols-2 gap-5">
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-summit-slate-200 hover:shadow-xl transition-all duration-300 hover:translate-y-[-3px]">
                <div className="h-16 w-16 mb-4 flex items-center justify-center mx-auto bg-summit-blue-50 rounded-full p-3 border border-summit-blue-200">
                  <img 
                    src="/lovable-uploads/4f801225-f723-4f29-8a2f-221b3118f3f6.png"
                    alt="Padlock" 
                    className="h-full w-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3 text-center text-summit-slate-800">Inside Knowledge</h3>
                <p className="text-summit-slate-600 text-sm text-center">
                  We know exactly how prosecutors build their cases, what evidence they prioritize, and how they prepare for trial.
                </p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-summit-slate-200 hover:shadow-xl transition-all duration-300 hover:translate-y-[-3px]">
                <div className="h-16 w-16 mb-4 flex items-center justify-center mx-auto bg-summit-teal-50 rounded-full p-3 border border-summit-teal-200">
                  <img 
                    src="/lovable-uploads/16a64fae-8213-4d53-8020-9fdc9d61b6ad.png"
                    alt="Chess Knight" 
                    className="h-full w-full object-contain"
                    style={{ filter: "brightness(0) saturate(100%) invert(25%) sepia(71%) saturate(1870%) hue-rotate(195deg) brightness(92%) contrast(96%)" }}
                  />
                </div>
                <h3 className="text-xl font-bold mb-3 text-center text-summit-slate-800">Strategic Analysis</h3>
                <p className="text-summit-slate-600 text-sm text-center">
                  By analyzing the prosecution's case first, we identify vulnerabilities they don't expect us to find.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Clean solid bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-summit-teal-500"></div>
    </section>
  );
};

export default ProsecutorAdvantageSection;
