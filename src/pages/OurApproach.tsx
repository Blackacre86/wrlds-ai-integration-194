
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Scale, Brain, Cpu } from "lucide-react";
import { Link } from "react-router-dom";

const OurApproach = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        {/* Page Header */}
        <section className="py-12 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Our Approach: Proven, Strategic, Innovative
            </h1>
            <p className="text-lg max-w-3xl text-blue-100">
              At Summit Law, we use a uniquely effective method to defend criminal cases. Our approach sets us apart from traditional criminal defense attorneys because we begin with a perspective shaped by extensive prosecutorial experience.
            </p>
          </div>
        </section>

        {/* Former Prosecutor Advantage */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-start gap-12">
              <div className="w-full md:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  <Scale className="h-10 w-10 text-blue-700" />
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                    The Former Prosecutor Advantage
                  </h2>
                </div>
                <p className="text-lg text-gray-700 mb-6">
                  Attorney Joe Brava spent five years prosecuting criminal cases in the Berkshire District Attorney's Office, 
                  supervising district court domestic violence prosecutions. Having prosecuted and defended over 1,000 
                  criminal cases, Attorney Brava thoroughly understands how prosecutors think, prepare, and argue their cases. 
                  This insider knowledge provides a critical edge when planning your defense.
                </p>
                <Link to="/prosecutor-advantage">
                  <Button className="group bg-blue-800 hover:bg-blue-900 text-white">
                    Learn More About Our Prosecutor Background
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
              <div className="w-full md:w-1/2 bg-blue-50 rounded-lg p-8 border border-blue-100">
                <h3 className="text-xl font-semibold mb-4 text-blue-900">Key Prosecutor Insights</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="bg-blue-800 rounded-full p-1 mt-1">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Intimate knowledge of case-building strategies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-blue-800 rounded-full p-1 mt-1">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Understanding of evidentiary weak points</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-blue-800 rounded-full p-1 mt-1">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Relationships with current prosecutors and court personnel</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Reverse-Engineering Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row-reverse items-start gap-12">
              <div className="w-full md:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  <Brain className="h-10 w-10 text-blue-700" />
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Reverse-Engineering the Prosecution's Case
                  </h2>
                </div>
                <p className="text-lg text-gray-700 mb-4">
                  Most defense attorneys immediately jump to building a defense strategy. At Summit Law, our approach is fundamentally different. 
                  Before crafting your defense, we first step into the prosecutor's shoes and attempt to prove the charges ourselves.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  We thoroughly analyze evidence, reconstruct the prosecution's arguments, and draft a mock closing argument from the state's perspective. 
                  By proactively exposing the strengths and weaknesses of the prosecution's case, we uncover opportunities and vulnerabilities 
                  that typical defense strategies might miss.
                </p>
              </div>
              <div className="w-full md:w-1/2 flex flex-col gap-4">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <h3 className="text-xl font-bold mb-3 text-blue-800">Our Process</h3>
                  <ol className="space-y-4">
                    <li className="flex">
                      <span className="bg-blue-700 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                      <div>
                        <p className="font-medium">Build the prosecution's case</p>
                        <p className="text-gray-600 text-sm">We analyze how the state will likely structure their arguments against you</p>
                      </div>
                    </li>
                    <li className="flex">
                      <span className="bg-blue-700 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                      <div>
                        <p className="font-medium">Identify weaknesses</p>
                        <p className="text-gray-600 text-sm">We find gaps in evidence, procedural errors, and alternative explanations</p>
                      </div>
                    </li>
                    <li className="flex">
                      <span className="bg-blue-700 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                      <div>
                        <p className="font-medium">Develop targeted defense</p>
                        <p className="text-gray-600 text-sm">We create a custom strategy focusing directly on the prosecution's vulnerabilities</p>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Innovation Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-start gap-12">
              <div className="w-full md:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  <Cpu className="h-10 w-10 text-blue-700" />
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Leveraging AI Innovation
                  </h2>
                </div>
                <p className="text-lg text-gray-700 mb-4">
                  Summit Law combines legal expertise with cutting-edge technology. Using custom proprietary 
                  artificial intelligence tools, our firm securely and confidently enhances every aspect of 
                  case preparation and defense strategy.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  We handle your data with utmost security and confidentiality, storing information on 
                  secure private servers that adhere to strict privacy standards.
                </p>
                <Link to="/ai-innovation">
                  <Button className="group bg-blue-800 hover:bg-blue-900 text-white">
                    Explore Our AI Advantage
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
              <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                  <h3 className="text-lg font-bold mb-2 text-blue-800">Advanced Evidence Analysis</h3>
                  <p className="text-gray-700">
                    Quickly identifying key evidence patterns and inconsistencies that might otherwise be missed.
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                  <h3 className="text-lg font-bold mb-2 text-blue-800">Compelling Presentation</h3>
                  <p className="text-gray-700">
                    Creating clear, persuasive visual presentations of evidence and arguments for maximum impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-16 bg-blue-800 text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold mb-8">Why Choose Summit Law?</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Our distinctive combination of prosecutorial insights, strategic case preparation, and innovative AI-driven 
              methodologies ensures our clients receive a level of representation unmatched in criminal defense.
            </p>
            <div className="flex justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white border-none">
                  Contact Us Today
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
