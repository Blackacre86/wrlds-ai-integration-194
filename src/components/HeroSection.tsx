
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const HeroSection = () => {
  return (
    <section className="relative min-h-[75vh] flex items-center justify-center bg-gradient-to-br from-summit-navy-900 via-summit-navy-800 to-summit-slate-800 text-white overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23${encodeURIComponent('ffffff')}' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 md:px-8 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Enhanced Logo */}
          <div className="flex items-center justify-center mb-8">
            <div className="transform scale-125 md:scale-150 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <Logo variant="light" />
            </div>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif leading-tight mb-6">
            Massachusetts Criminal Defense Attorney
            <span className="block mt-2 text-summit-orange-500">
              20+ Years of Protecting Clients' Rights
            </span>
          </h1>
          
          <p className="text-lg md:text-xl mb-8 text-slate-200 leading-relaxed max-w-3xl mx-auto">
            When your freedom is on the line, you deserve an attorney who truly understands the prosecution's playbook. 
            Attorney Joe Brava leverages insider knowledge to build a strong, strategic defense customized for you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-summit-orange-500 hover:bg-summit-orange-600 text-white border-none text-base md:text-lg font-semibold px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300">
                Free Consultation
              </Button>
            </Link>
            <a href="tel:5084540822">
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-summit-orange-500 text-summit-orange-500 hover:bg-summit-orange-500 hover:text-white text-base md:text-lg font-semibold px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300">
                Call (508) 454-0822
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
