
import React from "react";
import { Button } from "@/components/ui/button";
import { Brain, Search, Shield, Cpu } from "lucide-react";
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
            
            {/* Visual Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              {/* Feature 1 */}
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 flex items-start space-x-4 hover:shadow-md transition-all">
                <div className="rounded-full bg-blue-100 p-3 flex-shrink-0">
                  <Brain className="h-6 w-6 text-blue-800" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Prosecutorial Mindset</h3>
                  <p className="text-gray-700">We think like prosecutors to anticipate and counter their strategies before they make them.</p>
                </div>
              </div>
              
              {/* Feature 2 */}
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 flex items-start space-x-4 hover:shadow-md transition-all">
                <div className="rounded-full bg-blue-100 p-3 flex-shrink-0">
                  <Search className="h-6 w-6 text-blue-800" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Investigative Analysis</h3>
                  <p className="text-gray-700">We meticulously reconstruct and scrutinize police investigations to identify crucial weaknesses.</p>
                </div>
              </div>
              
              {/* Feature 3 */}
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 flex items-start space-x-4 hover:shadow-md transition-all">
                <div className="rounded-full bg-blue-100 p-3 flex-shrink-0">
                  <Shield className="h-6 w-6 text-blue-800" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Defense Strategy</h3>
                  <p className="text-gray-700">We develop customized defense strategies based on identified flaws in the prosecution's approach.</p>
                </div>
              </div>
              
              {/* Feature 4 */}
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 flex items-start space-x-4 hover:shadow-md transition-all">
                <div className="rounded-full bg-blue-100 p-3 flex-shrink-0">
                  <Cpu className="h-6 w-6 text-blue-800" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">AI Technology</h3>
                  <p className="text-gray-700">We utilize proprietary AI tools to analyze evidence and enhance our courtroom arguments.</p>
                </div>
              </div>
            </div>
            
            <p className="text-lg">
              Rather than merely responding to charges or reacting to the prosecution's moves, we begin every case by thinking strategically like prosecutors and analytically like investigators. We carefully reconstruct the police investigation, scrutinizing how evidence was collected and evaluating investigative methods.
            </p>
            
            <p className="text-lg">
              Learn more about our comprehensive approach, including how we leverage AI technology to enhance your defense.
            </p>
            
            {/* Call to Action */}
            <div className="mt-10 text-center">
              <Link to="/our-approach">
                <Button size="lg" className="bg-gradient-to-r from-blue-800 to-blue-700 hover:from-blue-900 hover:to-blue-800 text-white px-8 py-6 text-lg font-semibold">
                  Explore Our Complete Strategy
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
