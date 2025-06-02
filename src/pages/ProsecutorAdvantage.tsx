
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
        {/* Hero Section - Light and Clean */}
        <section className="relative py-20 md:py-28 bg-gradient-to-br from-summit-slate-50 via-white to-summit-blue-50 text-summit-slate-800 overflow-hidden">
          {/* Subtle geometric pattern overlay */}
          <div className="absolute inset-0 z-0 opacity-15">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23${encodeURIComponent('0ea5e9')}' fill-opacity='0.2'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
          </div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-summit-slate-800">
                The Summit Advantage of a Former Prosecutor
              </h1>
              <p className="text-xl text-summit-slate-600 mb-8 leading-relaxed">
                Like reaching the summit of a mountain, Attorney Joe Brava's prosecutorial background 
                gives you the strategic vantage point needed to overcome your legal challenges.
              </p>
              <p className="text-2xl font-semibold text-summit-blue-700 mb-8 italic">
                "Clarity of a Prosecutor. Strength of a Defender. Results That Matter."
              </p>
              <p className="text-lg text-summit-slate-600 mb-8 leading-relaxed">
                At Summit Law, our approach to criminal defense is built on insider expertise, rigorous case analysis, and highly personalized advocacy. These foundational pillars provide our clients with clarity, confidence, and effective results throughout every stage of their criminal case in Massachusetts.
              </p>
              <Button size="lg" className="bg-summit-blue-600 hover:bg-summit-blue-700 text-white border-none px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                The Summit Advantage
              </Button>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-16 bg-white relative overflow-hidden">
          {/* Subtle pattern background */}
          <div className="absolute inset-0 z-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23${encodeURIComponent('64748b')}' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
          </div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-1 gap-10">
                <div>
                  <h2 className="text-3xl font-bold text-summit-slate-800 mb-6">
                    Insider Knowledge That Makes the Difference
                  </h2>
                  <p className="text-lg text-summit-slate-600 mb-6">
                    Attorney Joe Brava spent five years as a prosecutor at the Berkshire District Attorney's 
                    Office, specializing in domestic violence cases and serving as the District Court 
                    Domestic Violence Supervisor.
                  </p>
                  <p className="text-lg text-summit-slate-600 mb-6">
                    This experience provides him with unique insights into how prosecutors build their
                    cases, what evidence they prioritize, and the strategies they use to secure convictions.
                  </p>
                  <p className="text-lg text-summit-slate-600">
                    Unlike most defense attorneys, Attorney Brava leverages firsthand experience gained as a former Assistant District Attorney to anticipate exactly how prosecutors think, strategize, and prepare their cases. By knowing precisely which evidence they value and which tactics they'll deploy, he proactively exposes weaknesses in the prosecution's strategy, giving his clients a decisive advantage from the outset.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Approach Section - Enhanced with new colors */}
        <section className="py-16 bg-gradient-to-br from-summit-blue-50 to-summit-teal-50 relative overflow-hidden">
          {/* Subtle pattern background */}
          <div className="absolute inset-0 z-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23${encodeURIComponent('14b8a6')}' fill-opacity='0.3'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
          </div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-summit-slate-800 mb-10">
                Our Unique Strategic Approach
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-summit-slate-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  <div className="bg-summit-blue-600 h-16 w-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <span className="text-2xl font-bold text-white">1</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-center text-summit-slate-800">Analyze the Prosecution's Case</h3>
                  <p className="text-summit-slate-600 text-center leading-relaxed">
                    Attorney Brava begins where most defense attorneys end. By first understanding how the prosecution 
                    will build their case against you, he can identify critical weaknesses before they're even aware of them.
                  </p>
                </div>
                
                <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-summit-slate-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  <div className="bg-summit-teal-600 h-16 w-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <span className="text-2xl font-bold text-white">2</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-center text-summit-slate-800">Identify Strategic Vulnerabilities</h3>
                  <p className="text-summit-slate-600 text-center leading-relaxed">
                    With his prosecutor's perspective, Attorney Brava recognizes evidentiary gaps, procedural missteps, 
                    and strategic flaws that other defense attorneys might miss entirely.
                  </p>
                </div>
                
                <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-summit-slate-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  <div className="bg-summit-slate-600 h-16 w-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-center text-summit-slate-800">Build a Proactive Defense</h3>
                  <p className="text-summit-slate-600 text-center leading-relaxed">
                    Rather than simply responding to the prosecution's moves, he anticipates them. 
                    This allows Attorney Brava to develop a defense strategy that stays several steps ahead throughout your case.
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <Link to="/contact">
                  <Button className="group bg-summit-blue-600 hover:bg-summit-blue-700 text-white text-lg border-none px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300">
                    Schedule Your Free Consultation
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
