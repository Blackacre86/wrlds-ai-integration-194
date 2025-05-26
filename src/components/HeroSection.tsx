
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const HeroSection = () => {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-br from-summit-blue-600 to-summit-blue-800 text-white overflow-hidden">
      {/* Mountain Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/f98ed06a-60c2-411a-99b5-ef4657787c04.png" 
          alt="Mountain path leading to summit - representing the journey to successful legal defense" 
          className="w-full h-full object-cover opacity-25"
          onError={(e) => {
            console.error("Image failed to load:", e);
            e.currentTarget.style.display = 'none';
          }}
        />
        <div className="absolute inset-0 bg-summit-blue-700/70 mix-blend-multiply"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Enhanced Logo for page content */}
          <div className="flex items-center justify-center md:justify-start mb-8">
            <div className="transform scale-125 md:scale-150">
              <Logo variant="page-content" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif leading-tight mb-6 drop-shadow-md">
            Massachusetts Criminal Defense Attorney
            <span className="block mt-2 text-blue-100">
              Inside Knowledge, Strong Protection
            </span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-blue-50 leading-relaxed max-w-3xl drop-shadow-sm">
            When your freedom is on the line, you deserve an attorney who truly understands the prosecution's playbook. 
            Attorney Joe Brava leverages insider knowledge to build a strong, strategic defense customized for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-summit-gold-400 hover:bg-summit-gold-500 text-white border-none text-base md:text-lg font-semibold px-6 py-6 shadow-lg hover:shadow-xl transition-all duration-300">
                Secure Your Case Strategy
              </Button>
            </Link>
            <Link to="/our-approach">
              <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/50 text-base md:text-lg font-semibold px-6 py-6 shadow-lg hover:shadow-xl transition-all duration-300">
                The Summit Advantage
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Clean solid bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-white"></div>
    </section>
  );
};

export default HeroSection;
