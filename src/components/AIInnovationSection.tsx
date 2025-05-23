
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Cpu, SearchCheck, PieChart } from "lucide-react";

const AIInnovationSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Innovative Legal Defense with AI Technology
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Summit Law leverages cutting-edge artificial intelligence tools to provide you with superior criminal defense representation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col items-center text-center p-8 bg-gradient-to-b from-gray-50 to-blue-50/20 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <Cpu className="h-16 w-16 text-[hsl(var(--summit-blue))] mb-6" />
            <h3 className="text-2xl font-bold mb-3">Advanced Case Analysis</h3>
            <p className="text-gray-600 text-lg">
              Our proprietary AI tools analyze case evidence and documentation to identify patterns, inconsistencies, and opportunities that human review might miss.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center p-8 bg-gradient-to-b from-gray-50 to-blue-50/20 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <SearchCheck className="h-16 w-16 text-[hsl(var(--summit-blue))] mb-6" />
            <h3 className="text-2xl font-bold mb-3">Enhanced Legal Research</h3>
            <p className="text-gray-600 text-lg">
              AI-powered legal research gives us instant access to relevant precedents and legal strategies that strengthen your defense.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center p-8 bg-gradient-to-b from-gray-50 to-blue-50/20 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <PieChart className="h-16 w-16 text-[hsl(var(--summit-blue))] mb-6" />
            <h3 className="text-2xl font-bold mb-3">Compelling Evidence Presentation</h3>
            <p className="text-gray-600 text-lg">
              We create clear, persuasive visualizations of complex evidence and timelines that make your case stronger in court.
            </p>
          </div>
        </div>
        
        <div className="mt-14 text-center">
          <Link to="/ai-innovation">
            <Button size="lg" className="bg-[hsl(var(--summit-blue))] hover:bg-blue-900 text-lg px-8 py-6">
              Learn How Our AI Tools Benefit Your Case
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AIInnovationSection;
