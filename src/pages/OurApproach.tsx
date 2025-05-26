import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Scale, Brain, ShieldCheck, BarChart3, Eye } from "lucide-react";
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
                <Button size="lg" className="bg-summit-gold-400 hover:bg-summit-gold-500 text-summit-blue-900 border-none text-base md:text-lg font-semibold px-6 py-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  Secure Your Case Strategy
                </Button>
              </Link>
              <Link to="/prosecutor-advantage">
                <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/50 text-base md:text-lg font-semibold px-6 py-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  Learn About Our Prosecutor Background
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Add mountain silhouette in background */}
          <div className="absolute -bottom-10 right-0 w-full opacity-10 pointer-events-none">
            <img 
              src="/lovable-uploads/30517370-4045-4723-b7f5-447436e4e589.png" 
              alt="Mountain Background" 
              className="w-full h-auto max-h-96 object-contain"
            />
          </div>
        </section>

        {/* The Summit Advantage */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">The Summit Advantage</h2>
              <p className="text-lg text-gray-700">
                Our approach is built on two key pillars that form the foundation of our success in defending clients 
                against criminal charges in Massachusetts.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-blue-50 rounded-lg p-8 border border-blue-100 transition-transform hover:shadow-lg hover:-translate-y-1">
                <div className="bg-blue-800 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Scale className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-800">Prosecutorial Experience</h3>
                <p className="text-gray-700">
                  With five years in the District Attorney's Office, we know exactly how prosecutors build their cases, 
                  what evidence they prioritize, and how they prepare for trial.
                </p>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-8 border border-blue-100 transition-transform hover:shadow-lg hover:-translate-y-1">
                <div className="bg-blue-800 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-800">Reverse-Engineering</h3>
                <p className="text-gray-700">
                  We build the prosecution's case first, then systematically dismantle it by 
                  identifying weaknesses that traditional defense attorneys often miss.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tabbed Content Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-10">Our Comprehensive Approach</h2>
            
            <Tabs defaultValue="prosecutor" className="w-full max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-1 sm:grid-cols-2 mb-8">
                <TabsTrigger value="prosecutor">Former Prosecutor Advantage</TabsTrigger>
                <TabsTrigger value="methodology">Our Methodology</TabsTrigger>
              </TabsList>
              
              {/* Former Prosecutor Tab Content */}
              <TabsContent value="prosecutor" className="border rounded-lg bg-white p-6 shadow-sm">
                <div className="flex flex-col md:flex-row items-start gap-12">
                  <div className="w-full md:w-1/2">
                    <div className="flex items-center gap-4 mb-6">
                      <Scale className="h-10 w-10 text-blue-700" />
                      <h3 className="text-2xl font-bold text-gray-900">
                        The Former Prosecutor Advantage
                      </h3>
                    </div>
                    <p className="text-lg text-gray-700 mb-4">
                      We spent five years prosecuting criminal cases in the Berkshire District Attorney's Office, 
                      supervising district court domestic violence prosecutions. This experience provides us with unique insights 
                      that benefit every client we represent.
                    </p>
                    <p className="text-lg text-gray-700 mb-6">
                      Unlike defense attorneys who have never worked as prosecutors, we understand the internal workings of 
                      the District Attorney's Office, including:
                    </p>
                    
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start gap-3">
                        <div className="bg-blue-800 rounded-full p-1 mt-1">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <span className="text-gray-700">How cases are prioritized and assigned to prosecutors</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="bg-blue-800 rounded-full p-1 mt-1">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <span className="text-gray-700">Which factors influence plea bargaining decisions</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="bg-blue-800 rounded-full p-1 mt-1">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <span className="text-gray-700">How evidence is evaluated for strengths and weaknesses</span>
                      </li>
                    </ul>
                    
                    <Link to="/prosecutor-advantage">
                      <Button className="group bg-blue-800 hover:bg-blue-900 text-white">
                        Learn More About Our Prosecutor Background
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                  
                  <div className="w-full md:w-1/2 bg-blue-50 rounded-lg p-8 border border-blue-100">
                    <h4 className="text-xl font-semibold mb-6 text-blue-900 border-b border-blue-100 pb-4">The Prosecutor's Playbook</h4>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-blue-100 rounded-full p-3 mt-1">
                          <Eye className="h-5 w-5 text-blue-800" />
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-900 mb-1">Evidence Assessment</h5>
                          <p className="text-gray-600">We know exactly how prosecutors evaluate evidence and witness credibility, allowing us to proactively address vulnerabilities.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="bg-blue-100 rounded-full p-3 mt-1">
                          <ShieldCheck className="h-5 w-5 text-blue-800" />
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-900 mb-1">Prosecution Strategies</h5>
                          <p className="text-gray-600">We understand the tactical playbook prosecutors use and can anticipate their moves before they make them.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="bg-blue-100 rounded-full p-3 mt-1">
                          <BarChart3 className="h-5 w-5 text-blue-800" />
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-900 mb-1">Resource Allocation</h5>
                          <p className="text-gray-600">We know how and where prosecutors allocate their limited resources, allowing us to leverage these constraints to your advantage.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              {/* Methodology Tab Content */}
              <TabsContent value="methodology" className="border rounded-lg bg-white p-6 shadow-sm">
                <div className="flex flex-col md:flex-row items-start gap-12">
                  <div className="w-full md:w-1/2">
                    <div className="flex items-center gap-4 mb-6">
                      <Brain className="h-10 w-10 text-blue-700" />
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
                <Button size="lg" className="bg-summit-gold-400 hover:bg-summit-gold-500 text-summit-blue-900 border-none text-base md:text-lg font-semibold px-6 py-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  Secure Your Case Strategy
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OurApproach;
