
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ProsecutorAdvantage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        {/* Mountain Hero Section - Refined */}
        <section className="relative py-20 md:py-28 bg-gradient-to-b from-blue-900 to-blue-800 text-white overflow-hidden">
          {/* Mountain Background - Adjusted opacity */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/lovable-uploads/f98ed06a-60c2-411a-99b5-ef4657787c04.png" 
              alt="Mountain Path" 
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-blue-900/70 mix-blend-multiply"></div>
          </div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                The Summit Advantage of a Former Prosecutor
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Like reaching the summit of a mountain, Attorney Joe Brava's prosecutorial background 
                gives you the strategic vantage point needed to overcome your legal challenges.
              </p>
              <p className="text-2xl font-semibold text-white mb-8 italic">
                "Clarity of a Prosecutor. Strength of a Defender. Results That Matter."
              </p>
              <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white border-none px-8 py-6 text-lg">
                The Summit Advantage
              </Button>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-16 bg-white relative overflow-hidden">
          {/* Subtle mountain background - Adjusted opacity */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/lovable-uploads/f98ed06a-60c2-411a-99b5-ef4657787c04.png" 
              alt="Mountain Path" 
              className="w-full h-full object-cover opacity-10"
            />
            <div className="absolute inset-0 bg-white/90"></div>
          </div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-1 gap-10">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Insider Knowledge That Makes the Difference
                  </h2>
                  <p className="text-lg text-gray-700 mb-6">
                    Attorney Joe Brava spent five years as a prosecutor at the Berkshire District Attorney's 
                    Office, specializing in domestic violence cases and serving as the District Court 
                    Domestic Violence Supervisor.
                  </p>
                  <p className="text-lg text-gray-700 mb-6">
                    This experience provides him with unique insights into how prosecutors build their
                    cases, what evidence they prioritize, and the strategies they use to secure convictions.
                  </p>
                  <p className="text-lg text-gray-700">
                    Unlike most defense attorneys, Attorney Brava leverages firsthand experience gained as a former Assistant District Attorney to anticipate exactly how prosecutors think, strategize, and prepare their cases. By knowing precisely which evidence they value and which tactics they'll deploy, he proactively exposes weaknesses in the prosecution's strategy, giving his clients a decisive advantage from the outset.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Approach Section - Enhanced and Redesigned */}
        <section className="py-16 bg-blue-50 relative overflow-hidden">
          {/* Subtle mountain background */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/lovable-uploads/f98ed06a-60c2-411a-99b5-ef4657787c04.png" 
              alt="Mountain Path" 
              className="w-full h-full object-cover opacity-10"
            />
            <div className="absolute inset-0 bg-blue-50/90"></div>
          </div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
                Our Unique Strategic Approach
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white p-8 rounded-xl shadow-lg border border-blue-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  <div className="bg-blue-600 h-16 w-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <span className="text-2xl font-bold text-white">1</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-center text-blue-800">Analyze the Prosecution's Case</h3>
                  <p className="text-gray-700 text-center leading-relaxed">
                    Attorney Brava begins where most defense attorneys end. By first understanding how the prosecution 
                    will build their case against you, he can identify critical weaknesses before they're even aware of them.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-lg border border-blue-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  <div className="bg-blue-600 h-16 w-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <span className="text-2xl font-bold text-white">2</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-center text-blue-800">Identify Strategic Vulnerabilities</h3>
                  <p className="text-gray-700 text-center leading-relaxed">
                    With his prosecutor's perspective, Attorney Brava recognizes evidentiary gaps, procedural missteps, 
                    and strategic flaws that other defense attorneys might miss entirely.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-lg border border-blue-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  <div className="bg-blue-600 h-16 w-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-center text-blue-800">Build a Proactive Defense</h3>
                  <p className="text-gray-700 text-center leading-relaxed">
                    Rather than simply responding to the prosecution's moves, he anticipates them. 
                    This allows Attorney Brava to develop a defense strategy that stays several steps ahead throughout your case.
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <Link to="/contact">
                  <Button className="group bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white text-lg border-none px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300">
                    Discuss Your Case With Us
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default ProsecutorAdvantage;
