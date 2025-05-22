
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Scale, Brain, Cpu, ShieldCheck, BarChart3, Eye } from "lucide-react";
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
              My Strategic Approach to Criminal Defense
            </h1>
            <p className="text-xl max-w-3xl text-blue-100 mb-8">
              I combine prosecutorial experience, strategic case analysis, and cutting-edge 
              technology to develop defense strategies that others simply cannot match.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white border-none">
                  Secure Your Case Strategy
                </Button>
              </Link>
              <Link to="/prosecutor-advantage">
                <Button size="lg" variant="outline" className="backdrop-blur-sm bg-white/10 border-white/20 text-white hover:bg-white/20">
                  Learn About My Prosecutor Background
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
                My approach is built on three key pillars that form the foundation of my success in defending clients 
                against criminal charges in Massachusetts.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-blue-50 rounded-lg p-8 border border-blue-100 transition-transform hover:shadow-lg hover:-translate-y-1">
                <div className="bg-blue-800 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Scale className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-800">Prosecutorial Experience</h3>
                <p className="text-gray-700">
                  With five years in the District Attorney's Office, I know exactly how prosecutors build their cases, 
                  what evidence they prioritize, and how they prepare for trial.
                </p>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-8 border border-blue-100 transition-transform hover:shadow-lg hover:-translate-y-1">
                <div className="bg-blue-800 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-800">Reverse-Engineering</h3>
                <p className="text-gray-700">
                  I build the prosecution's case first, then systematically dismantle it by 
                  identifying weaknesses that traditional defense attorneys often miss.
                </p>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-8 border border-blue-100 transition-transform hover:shadow-lg hover:-translate-y-1">
                <div className="bg-blue-800 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Cpu className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-800">AI-Enhanced Analysis</h3>
                <p className="text-gray-700">
                  My proprietary AI tools analyze case documents, identify precedents, and help me develop 
                  stronger arguments with greater efficiency than traditional methods.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Former Prosecutor Advantage - Enhanced Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-start gap-12">
              <div className="w-full md:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  <Scale className="h-10 w-10 text-blue-700" />
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                    The Former Prosecutor Advantage
                  </h2>
                </div>
                <p className="text-lg text-gray-700 mb-4">
                  I spent five years prosecuting criminal cases in the Berkshire District Attorney's Office, 
                  supervising district court domestic violence prosecutions. This experience provides me with unique insights 
                  that benefit every client I represent.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Unlike defense attorneys who have never worked as prosecutors, I understand the internal workings of 
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
                    Learn More About My Prosecutor Background
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
              <div className="w-full md:w-1/2 bg-white rounded-lg shadow-md p-8 border border-gray-200">
                <h3 className="text-xl font-semibold mb-6 text-blue-900 border-b border-blue-100 pb-4">The Prosecutor's Playbook</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 rounded-full p-3 mt-1">
                      <Eye className="h-5 w-5 text-blue-800" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Evidence Assessment</h4>
                      <p className="text-gray-600">I know exactly how prosecutors evaluate evidence and witness credibility, allowing me to proactively address vulnerabilities.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 rounded-full p-3 mt-1">
                      <ShieldCheck className="h-5 w-5 text-blue-800" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Prosecution Strategies</h4>
                      <p className="text-gray-600">I understand the tactical playbook prosecutors use and can anticipate their moves before they make them.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 rounded-full p-3 mt-1">
                      <BarChart3 className="h-5 w-5 text-blue-800" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Resource Allocation</h4>
                      <p className="text-gray-600">I know how and where prosecutors allocate their limited resources, allowing me to leverage these constraints to your advantage.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reverse-Engineering Section - Enhanced */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row-reverse items-start gap-12">
              <div className="w-full md:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  <Brain className="h-10 w-10 text-blue-700" />
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                    My Reverse-Engineering Methodology
                  </h2>
                </div>
                <p className="text-lg text-gray-700 mb-4">
                  Most defense attorneys immediately jump to building a defense strategy. My approach is fundamentally different. 
                  I begin by stepping into the prosecutor's shoes to understand exactly how they'll build their case against you.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  This methodology allows me to:
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
                <h3 className="text-xl font-bold mb-6 text-blue-900 border-b border-blue-200 pb-3">My Process</h3>
                <ol className="space-y-6">
                  <li className="flex">
                    <span className="bg-blue-700 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">1</span>
                    <div>
                      <p className="font-bold text-gray-900">Case Analysis & Evidence Review</p>
                      <p className="text-gray-700 mt-2">I thoroughly examine all available evidence, police reports, witness statements, and forensic findings to understand the full scope of the case against you.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="bg-blue-700 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">2</span>
                    <div>
                      <p className="font-bold text-gray-900">Prosecution Simulation</p>
                      <p className="text-gray-700 mt-2">I build the prosecution's case from scratch, creating the narrative they'll likely present and identifying the key evidence they'll emphasize.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="bg-blue-700 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">3</span>
                    <div>
                      <p className="font-bold text-gray-900">Vulnerability Identification</p>
                      <p className="text-gray-700 mt-2">I methodically identify every potential weakness in their case—from procedural errors to evidentiary gaps to witness credibility issues.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="bg-blue-700 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">4</span>
                    <div>
                      <p className="font-bold text-gray-900">Strategic Defense Development</p>
                      <p className="text-gray-700 mt-2">Only after fully understanding the prosecution's case do I develop my defense strategy, precisely targeting the vulnerabilities I've identified.</p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* AI Innovation Section - Enhanced */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-start gap-12">
              <div className="w-full md:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  <Cpu className="h-10 w-10 text-blue-700" />
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                    AI-Enhanced Legal Defense
                  </h2>
                </div>
                <p className="text-lg text-gray-700 mb-4">
                  I combine decades of legal expertise with cutting-edge technology. My proprietary 
                  artificial intelligence tools enhance every aspect of case preparation and defense strategy.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  I employ secure, private AI systems that adhere to strict attorney-client confidentiality standards. 
                  Your data is never shared with third-party AI providers, ensuring maximum security and privacy.
                </p>
                <Link to="/ai-innovation">
                  <Button className="group bg-blue-800 hover:bg-blue-900 text-white">
                    Explore My AI Advantage
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
              <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-bold mb-3 text-blue-800">Case Law Analysis</h3>
                  <p className="text-gray-700">
                    My AI tools scan thousands of similar cases to identify winning defense strategies and favorable precedents specific to your situation.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-bold mb-3 text-blue-800">Evidence Processing</h3>
                  <p className="text-gray-700">
                    Advanced document analysis identifies contradictions and inconsistencies in police reports, witness statements, and other evidence.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-bold mb-3 text-blue-800">Strategic Simulation</h3>
                  <p className="text-gray-700">
                    AI-driven case modeling helps me test different defense strategies to identify the approach most likely to succeed in your specific case.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-bold mb-3 text-blue-800">Enhanced Visualization</h3>
                  <p className="text-gray-700">
                    Creating clear, persuasive visual presentations of evidence and arguments for maximum impact with judges and juries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Section - Enhanced */}
        <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Why Choose My Approach?</h2>
              <p className="text-xl mb-6">
                My distinctive methodology combines prosecutorial insights, strategic case preparation, and innovative 
                AI-driven analysis to provide a level of defense unmatched in Massachusetts.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20 hover:bg-white/15 transition">
                <h3 className="text-xl font-bold mb-4 text-yellow-400">Comprehensive Analysis</h3>
                <p className="text-blue-50">
                  No stone goes unturned when I examine your case. I analyze evidence from multiple perspectives to build the strongest possible defense.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20 hover:bg-white/15 transition">
                <h3 className="text-xl font-bold mb-4 text-yellow-400">Strategic Advantage</h3>
                <p className="text-blue-50">
                  By anticipating the prosecution's strategy, I position your defense to counter their strongest arguments before they even make them.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20 hover:bg-white/15 transition">
                <h3 className="text-xl font-bold mb-4 text-yellow-400">Technological Edge</h3>
                <p className="text-blue-50">
                  My AI-enhanced legal research and case preparation provide insights and advantages that traditional defense methods simply cannot match.
                </p>
              </div>
            </div>
            
            <div className="flex justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white border-none">
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
