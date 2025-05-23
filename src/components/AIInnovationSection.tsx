
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Cpu, SearchCheck, PieChart } from "lucide-react";

const AIInnovationSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Innovative Legal Defense with AI Technology
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Summit Law leverages cutting-edge artificial intelligence tools to provide you with superior criminal defense representation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg">
            <Cpu className="h-12 w-12 text-[hsl(var(--summit-blue))] mb-4" />
            <h3 className="text-xl font-bold mb-2">Advanced Case Analysis</h3>
            <p className="text-gray-600">
              Our proprietary AI tools analyze case evidence and documentation to identify patterns, inconsistencies, and opportunities that human review might miss.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg">
            <SearchCheck className="h-12 w-12 text-[hsl(var(--summit-blue))] mb-4" />
            <h3 className="text-xl font-bold mb-2">Enhanced Legal Research</h3>
            <p className="text-gray-600">
              AI-powered legal research gives us instant access to relevant precedents and legal strategies that strengthen your defense.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg">
            <PieChart className="h-12 w-12 text-[hsl(var(--summit-blue))] mb-4" />
            <h3 className="text-xl font-bold mb-2">Compelling Evidence Presentation</h3>
            <p className="text-gray-600">
              We create clear, persuasive visualizations of complex evidence and timelines that make your case stronger in court.
            </p>
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <Link to="/ai-innovation">
            <Button className="bg-[hsl(var(--summit-blue))] hover:bg-blue-900">
              Learn How Our AI Tools Benefit Your Case
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AIInnovationSection;
