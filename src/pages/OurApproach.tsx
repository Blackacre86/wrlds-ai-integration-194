import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Scale, RefreshCw, ShieldCheck, BarChart3, Eye, Users } from "lucide-react";
import { Link } from "react-router-dom";

const OurApproach = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Our Strategic Approach to Criminal Defense
            </h1>
            <p className="text-xl max-w-3xl text-blue-100 mb-8">
              We combine prosecutorial experience and strategic case analysis to develop defense strategies that others simply cannot match.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-summit-gold-400 hover:bg-summit-gold-500 text-white border-none text-base md:text-lg font-semibold px-6 py-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  Secure Your Case Strategy
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Updated background image */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <img 
              src="/lovable-uploads/f98ed06a-60c2-411a-99b5-ef4657787c04.png" 
              alt="Mountain Background" 
              className="w-full h-full object-cover"
            />
          </div>
          {/* Clean solid bottom edge */}
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-white"></div>
        </section>

        {/* The Summit Advantage - Updated Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-4xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Summit Advantage</h2>
              <p className="text-lg text-gray-700 mb-8">
                At Summit Law, our defense strategy is built on three foundational pillars that distinctly position our firm in defending clients facing criminal charges throughout Massachusetts. These core principles reflect our commitment to strategic insight, meticulous analysis, and deeply personalized advocacy designed to deliver clarity and confidence to every client.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-blue-50 rounded-lg p-8 border border-blue-100 transition-transform hover:shadow-lg hover:-translate-y-1">
                <div className="bg-blue-800 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Scale className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-800">Prosecutorial Experience</h3>
                <p className="text-gray-700">
                  Having served extensively within the District Attorney's Office, Attorney Joe Brava possesses firsthand knowledge of prosecutorial methods, case evaluation techniques, evidence prioritization, and trial preparation strategies. This unique insider perspective enables us to anticipate prosecutorial actions and proactively counter them with precision and effectiveness.
                </p>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-8 border border-blue-100 transition-transform hover:shadow-lg hover:-translate-y-1">
                <div className="bg-blue-800 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <RefreshCw className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-800">Reverse Engineering</h3>
                <p className="text-gray-700">
                  Our defense process involves meticulously examining and dismantling the prosecution's case from the inside out. By identifying and leveraging overlooked weaknesses and strategic gaps in the prosecution's approach, we develop robust, targeted defenses tailored specifically to neutralize their strongest points.
                </p>
              </div>

              <div className="bg-blue-50 rounded-lg p-8 border border-blue-100 transition-transform hover:shadow-lg hover:-translate-y-1">
                <div className="bg-blue-800 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-800">Personalized Advocacy</h3>
                <p className="text-gray-700">
                  We firmly believe each client deserves dedicated attention and individually tailored defense strategies. Our commitment extends beyond technical legal representation; we prioritize clear communication, compassionate counsel, and steadfast support. At Summit Law, each client receives personalized advocacy designed to protect their interests and guide them confidently through their legal journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solid blue separator */}
        <div className="h-2 bg-blue-800"></div>

        {/* Tabbed Content Section - Updated to single tab */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-10">Our Comprehensive Approach</h2>
            
            <Tabs defaultValue="methodology" className="w-full max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-1 mb-8">
                <TabsTrigger value="methodology">Our Methodology</TabsTrigger>
              </TabsList>
              
              {/* Methodology Tab Content */}
              <TabsContent value="methodology" className="border rounded-lg bg-white p-6 shadow-sm">
                <div className="flex flex-col md:flex-row items-start gap-12">
                  <div className="w-full md:w-1/2">
                    <div className="flex items-center gap-4 mb-6">
                      <RefreshCw className="h-10 w-10 text-blue-700" />
                      <h3 className="text-2xl font-bold text-gray-900">
                        Our Reverse-Engineering Methodology
                      </h3>
                    </div>
                    <p className="text-lg text-gray-700 mb-4">
                      Most defense attorneys immediately jump to building a defense strategy. Our approach is fundamentally different. 
                      We begin by stepping into the prosecutor's shoes to understand exactly how they'll build their case against you.
                    </p>
                    <p className="text-lg text-gray-700 mb-6">
                      This methodology allows us to:
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start gap-3">
                        <div className="bg-blue-800 rounded-full p-1 mt-1">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <span className="text-gray-700">Identify hidden weaknesses in the prosecution's case</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="bg-blue-800 rounded-full p-1 mt-1">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <span className="text-gray-700">Develop targeted counter-arguments focused on specific vulnerabilities</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="bg-blue-800 rounded-full p-1 mt-1">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <span className="text-gray-700">Anticipate and prepare for the prosecution's strategic pivots</span>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full md:w-1/2 bg-blue-50 rounded-lg p-8 border border-blue-100">
                    <h4 className="text-xl font-bold mb-6 text-blue-900 border-b border-blue-200 pb-3">Our Process</h4>
                    <ol className="space-y-6">
                      <li className="flex">
                        <span className="bg-blue-700 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">1</span>
                        <div>
                          <p className="font-bold text-gray-900">Case Analysis & Evidence Review</p>
                          <p className="text-gray-700 mt-2">We thoroughly examine all available evidence, police reports, witness statements, and forensic findings to understand the full scope of the case against you.</p>
                        </div>
                      </li>
                      <li className="flex">
                        <span className="bg-blue-700 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">2</span>
                        <div>
                          <p className="font-bold text-gray-900">Prosecution Simulation</p>
                          <p className="text-gray-700 mt-2">We build the prosecution's case from scratch, creating the narrative they'll likely present and identifying the key evidence they'll emphasize.</p>
                        </div>
                      </li>
                      <li className="flex">
                        <span className="bg-blue-700 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">3</span>
                        <div>
                          <p className="font-bold text-gray-900">Vulnerability Identification</p>
                          <p className="text-gray-700 mt-2">We methodically identify every potential weakness in their case—from procedural errors to evidentiary gaps to witness credibility issues.</p>
                        </div>
                      </li>
                      <li className="flex">
                        <span className="bg-blue-700 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">4</span>
                        <div>
                          <p className="font-bold text-gray-900">Strategic Defense Development</p>
                          <p className="text-gray-700 mt-2">Only after fully understanding the prosecution's case do we develop our defense strategy, precisely targeting the vulnerabilities we've identified.</p>
                        </div>
                      </li>
                    </ol>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Solid blue separator */}
        <div className="h-2 bg-blue-800"></div>

        {/* Why Choose Section - Enhanced */}
        <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Why Choose Our Approach?</h2>
              <p className="text-xl mb-6">
                Our distinctive methodology combines prosecutorial insights and strategic case preparation to provide a level of defense unmatched in Massachusetts.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20 hover:bg-white/15 transition">
                <h3 className="text-xl font-bold mb-4 text-yellow-400">Comprehensive Analysis</h3>
                <p className="text-blue-50">
                  No stone goes unturned when we examine your case. We analyze evidence from multiple perspectives to build the strongest possible defense.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20 hover:bg-white/15 transition">
                <h3 className="text-xl font-bold mb-4 text-yellow-400">Strategic Advantage</h3>
                <p className="text-blue-50">
                  By anticipating the prosecution's strategy, we position your defense to counter their strongest arguments before they even make them.
                </p>
              </div>
            </div>
            
            <div className="flex justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-summit-gold-400 hover:bg-summit-gold-500 text-white border-none text-base md:text-lg font-semibold px-6 py-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  Secure Your Case Strategy
                </Button>
              </Link>
            </div>
          </div>
          {/* Clean solid bottom edge */}
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-white"></div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OurApproach;
