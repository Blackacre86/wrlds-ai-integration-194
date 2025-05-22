
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Cpu, Brain, Scale, BarChart2, FileText, PieChart } from "lucide-react";

const AIInnovation = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-blue-900 to-blue-800 text-white relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-full opacity-5 pointer-events-none">
            <img 
              src="/lovable-uploads/30517370-4045-4723-b7f5-447436e4e589.png" 
              alt="Mountain Background" 
              className="w-full h-auto max-h-96 object-contain"
            />
          </div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Unparalleled Innovation in Criminal Defense</h1>
              <p className="text-xl text-blue-100">
                At Summit Law, we recognize that the legal industry is traditionally slow to adopt change. 
                However, we break this mold by leveraging cutting-edge Artificial Intelligence (AI) technologies, 
                setting us distinctly apart from traditional criminal defense practices.
              </p>
            </div>
          </div>
        </section>

        {/* AI Advantages Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Why Summit Law's AI Sets Us Apart
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="backdrop-blur-md bg-blue-50/50 border border-blue-100 rounded-xl p-6 flex flex-col items-center text-center hover:shadow-lg transition-all">
                  <Brain className="h-12 w-12 text-blue-700 mb-4" />
                  <h3 className="text-xl font-bold mb-3">Customized Legal Analysis</h3>
                  <p className="text-gray-700">
                    Our proprietary AI tools and specially trained Large Language Models (LLMs) meticulously examine every aspect of your case,
                    identifying patterns and weaknesses in prosecutorial arguments.
                  </p>
                </div>
                
                <div className="backdrop-blur-md bg-blue-50/50 border border-blue-100 rounded-xl p-6 flex flex-col items-center text-center hover:shadow-lg transition-all">
                  <Cpu className="h-12 w-12 text-blue-700 mb-4" />
                  <h3 className="text-xl font-bold mb-3">Precision and Efficiency</h3>
                  <p className="text-gray-700">
                    Our AI systems rapidly analyze extensive legal databases and case precedents, ensuring we provide the most accurate
                    and current legal arguments in your defense.
                  </p>
                </div>
                
                <div className="backdrop-blur-md bg-blue-50/50 border border-blue-100 rounded-xl p-6 flex flex-col items-center text-center hover:shadow-lg transition-all">
                  <PieChart className="h-12 w-12 text-blue-700 mb-4" />
                  <h3 className="text-xl font-bold mb-3">Innovative Presentation</h3>
                  <p className="text-gray-700">
                    We present evidence and arguments in clear, compelling formats, such as visual simulations and interactive presentations,
                    making our arguments more persuasive to judges and juries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Clients Choose Us Section */}
        <section className="py-16 bg-gradient-to-r from-blue-50 to-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full opacity-3 pointer-events-none">
            <img 
              src="/lovable-uploads/30517370-4045-4723-b7f5-447436e4e589.png" 
              alt="Mountain Background" 
              className="w-full h-auto max-h-96 object-contain rotate-180"
            />
          </div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Why Clients Choose Summit Law for AI
              </h2>
              
              <p className="text-xl text-center text-gray-700 mb-10">
                Clients specifically hire Summit Law because our technology-driven approach provides advantages no other defense attorney can match.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="backdrop-blur-md bg-white/80 border border-blue-100 rounded-xl p-6 hover:shadow-lg transition-all">
                  <div className="flex items-center mb-4">
                    <Scale className="h-8 w-8 text-blue-700 mr-3" />
                    <h3 className="text-xl font-bold">Strategic Edge</h3>
                  </div>
                  <p className="text-gray-700">
                    By proactively uncovering and addressing the prosecution's tactics, our AI-driven strategies position clients ahead of traditional defense approaches.
                  </p>
                </div>
                
                <div className="backdrop-blur-md bg-white/80 border border-blue-100 rounded-xl p-6 hover:shadow-lg transition-all">
                  <div className="flex items-center mb-4">
                    <FileText className="h-8 w-8 text-blue-700 mr-3" />
                    <h3 className="text-xl font-bold">Confidence & Clarity</h3>
                  </div>
                  <p className="text-gray-700">
                    Our transparent, technology-aided process gives clients greater clarity and assurance about their legal situation, removing uncertainty and reducing stress.
                  </p>
                </div>
                
                <div className="backdrop-blur-md bg-white/80 border border-blue-100 rounded-xl p-6 hover:shadow-lg transition-all">
                  <div className="flex items-center mb-4">
                    <BarChart2 className="h-8 w-8 text-blue-700 mr-3" />
                    <h3 className="text-xl font-bold">Proven Results</h3>
                  </div>
                  <p className="text-gray-700">
                    Cases utilizing our AI innovations consistently yield exceptional results, positioning Summit Law as a trusted leader in technologically-enhanced criminal defense.
                  </p>
                </div>
              </div>
              
              <div className="mt-12 text-center">
                <p className="text-lg text-gray-700">
                  Choosing Summit Law means choosing an innovative defense that leverages technology to deliver outstanding results. 
                  Our commitment to continuous innovation ensures your defense strategy is always a step ahead.
                </p>
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

export default AIInnovation;
