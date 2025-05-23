
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Cpu, SearchCheck, PieChart } from "lucide-react";

const AIInnovationSection = () => {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5 bg-pattern-leaf pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-serif">
            Innovative Legal Defense with AI Technology
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Summit Law leverages cutting-edge artificial intelligence tools to provide you with superior criminal defense representation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center text-center p-6 bg-gradient-to-b from-gray-50 to-blue-50/30 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:translate-y-[-3px]">
            <div className="bg-blue-50 rounded-full p-4 mb-4">
              <Cpu className="h-10 w-10 text-[hsl(var(--summit-blue))]" />
            </div>
            <h3 className="text-xl font-bold mb-3">Advanced Case Analysis</h3>
            <p className="text-gray-600 text-sm">
              Our proprietary AI tools analyze case evidence and documentation to identify patterns, inconsistencies, and opportunities that human review might miss.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6 bg-gradient-to-b from-gray-50 to-blue-50/30 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:translate-y-[-3px]">
            <div className="bg-blue-50 rounded-full p-4 mb-4">
              <SearchCheck className="h-10 w-10 text-[hsl(var(--summit-blue))]" />
            </div>
            <h3 className="text-xl font-bold mb-3">Enhanced Legal Research</h3>
            <p className="text-gray-600 text-sm">
              AI-powered legal research gives us instant access to relevant precedents and legal strategies that strengthen your defense.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6 bg-gradient-to-b from-gray-50 to-blue-50/30 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:translate-y-[-3px]">
            <div className="bg-blue-50 rounded-full p-4 mb-4">
              <PieChart className="h-10 w-10 text-[hsl(var(--summit-blue))]" />
            </div>
            <h3 className="text-xl font-bold mb-3">Compelling Evidence Presentation</h3>
            <p className="text-gray-600 text-sm">
              We create clear, persuasive visualizations of complex evidence and timelines that make your case stronger in court.
            </p>
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <Link to="/ai-innovation">
            <Button size="lg" className="bg-[hsl(var(--summit-blue))] hover:bg-blue-900 text-white text-base px-6 py-3 shadow-md hover:shadow-lg transition-all duration-300">
              Learn How Our AI Tools Benefit Your Case
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AIInnovationSection;
