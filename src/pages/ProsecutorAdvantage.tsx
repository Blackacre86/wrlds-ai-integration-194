
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Scale, Brain, FileText, BookOpen, ArrowRight, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ProsecutorAdvantage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        {/* Natural Hero Section */}
        <section className="relative py-20 md:py-28 bg-gradient-to-b from-green-900 to-blue-900 text-white overflow-hidden">
          {/* Nature Background */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/lovable-uploads/3253b549-78e5-4c96-8b31-1743186d65d8.png" 
              alt="Mountain Forest" 
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          
          {/* Natural Elements Overlay */}
          <div className="absolute inset-0 z-0 bg-pattern-leaf opacity-10"></div>
          
          {/* Animated Leaves */}
          <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
            <div className="leaf-1 absolute">
              <Leaf className="h-12 w-12 text-green-300 opacity-40" style={{ transform: "rotate(20deg)" }} />
            </div>
            <div className="leaf-2 absolute">
              <Leaf className="h-8 w-8 text-green-400 opacity-30" style={{ transform: "rotate(-15deg)" }} />
            </div>
            <div className="leaf-3 absolute">
              <Leaf className="h-10 w-10 text-green-200 opacity-20" style={{ transform: "rotate(45deg)" }} />
            </div>
          </div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
                Natural Advantage of a Former Prosecutor
              </h1>
              <p className="text-xl text-green-100 mb-8 leading-relaxed drop-shadow-md">
                Just as nature provides countless advantages to those who understand its patterns, 
                Attorney Joe Brava's prosecutorial background gives you a strategic edge in your defense.
              </p>
              <div className="inline-block p-1 bg-gradient-to-r from-green-400/30 to-blue-400/30 rounded-lg backdrop-blur-sm">
                <Button size="lg" className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-6 text-lg">
                  Discover Your Defense Advantage
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
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
                    Unlike most defense attorneys, we begin by reverse-engineering the prosecution's case,
                    identifying weaknesses and building a strategic defense that anticipates their every move.
                  </p>
                </div>
                <div className="bg-blue-50 p-8 rounded-xl border border-blue-100">
                  <h3 className="text-2xl font-bold text-blue-800 mb-6">Prosecutorial Experience</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                        <Scale className="h-5 w-5 text-blue-700" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">Five Years at DA's Office</h4>
                        <p className="text-gray-700">Extensive experience prosecuting various criminal cases</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                        <BookOpen className="h-5 w-5 text-blue-700" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">Advanced Training</h4>
                        <p className="text-gray-700">Completed specialized investigative and prosecutorial training with federal agencies</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                        <FileText className="h-5 w-5 text-blue-700" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">Domestic Violence Supervisor</h4>
                        <p className="text-gray-700">Specialized knowledge in handling sensitive and complex cases</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Approach Section */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
                Our Unique Strategic Approach
              </h2>
              
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-xl shadow-sm border border-blue-100">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/4 flex justify-center">
                      <div className="bg-blue-100 h-20 w-20 rounded-full flex items-center justify-center">
                        <span className="text-3xl font-bold text-blue-800">1</span>
                      </div>
                    </div>
                    <div className="md:w-3/4">
                      <h3 className="text-xl font-bold mb-3">Analyze the Prosecution's Case</h3>
                      <p className="text-gray-700">
                        We begin where most defense attorneys end. By first understanding how the prosecution 
                        will build their case against you, we can identify critical weaknesses before they're even aware of them.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-sm border border-blue-100">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/4 flex justify-center">
                      <div className="bg-blue-100 h-20 w-20 rounded-full flex items-center justify-center">
                        <span className="text-3xl font-bold text-blue-800">2</span>
                      </div>
                    </div>
                    <div className="md:w-3/4">
                      <h3 className="text-xl font-bold mb-3">Identify Strategic Vulnerabilities</h3>
                      <p className="text-gray-700">
                        With our prosecutor's perspective, we recognize evidentiary gaps, procedural missteps, 
                        and strategic flaws that other defense attorneys might miss entirely.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-sm border border-blue-100">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/4 flex justify-center">
                      <div className="bg-blue-100 h-20 w-20 rounded-full flex items-center justify-center">
                        <span className="text-3xl font-bold text-blue-800">3</span>
                      </div>
                    </div>
                    <div className="md:w-3/4">
                      <h3 className="text-xl font-bold mb-3">Build a Proactive Defense</h3>
                      <p className="text-gray-700">
                        Rather than simply responding to the prosecution's moves, we anticipate them. 
                        This allows us to develop a defense strategy that stays several steps ahead throughout your case.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 text-center">
                <Link to="/contact">
                  <Button className="group bg-blue-800 hover:bg-blue-900 text-white text-lg px-6 py-3">
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
