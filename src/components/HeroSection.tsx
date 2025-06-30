
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const HeroSection = () => {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-br from-mountain-stone-50 via-white to-mountain-sky-50 text-mountain-stone-800 overflow-hidden">
      {/* Subtle geometric pattern overlay */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23${encodeURIComponent('64748b')}' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Enhanced Logo for page content */}
          <div className="flex items-center justify-center md:justify-start mb-8">
            <div className="transform scale-125 md:scale-150 bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-mountain-stone-200">
              <Logo variant="dark" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif leading-tight mb-6 text-summit-slate-800">
            Massachusetts Criminal Defense Attorney
            <span className="block mt-2 text-summit-blue-600">
              Inside Knowledge, Strong Protection
            </span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-summit-slate-600 leading-relaxed max-w-3xl">
            When your freedom is on the line, you deserve an attorney who truly understands the prosecution's playbook. 
            Attorney Joe Brava leverages insider knowledge to build a strong, strategic defense customized for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-summit-blue-600 hover:bg-summit-blue-700 text-white border-none text-base md:text-lg font-semibold px-6 py-6 shadow-lg hover:shadow-xl transition-all duration-300">
                Secure Your Case Strategy
              </Button>
            </Link>
            <Link to="/our-approach">
              <Button size="lg" variant="outline" className="bg-summit-slate-50 border-summit-slate-300 text-summit-slate-700 hover:bg-summit-slate-100 hover:border-summit-blue-400 text-base md:text-lg font-semibold px-6 py-6 shadow-lg hover:shadow-xl transition-all duration-300">
                The Summit Advantage
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Clean solid bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-mountain-stone-600"></div>
    </section>
  );
};

export default HeroSection;
