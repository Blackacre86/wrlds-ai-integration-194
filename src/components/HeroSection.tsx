
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-br from-blue-800 via-blue-700 to-slate-800 text-white overflow-hidden">
      {/* Mountain Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/f98ed06a-60c2-411a-99b5-ef4657787c04.png" 
          alt="Mountain Path" 
          className="w-full h-full object-cover opacity-25"
          onError={(e) => {
            console.error("Image failed to load:", e);
            e.currentTarget.style.display = 'none';
          }}
        />
        <div className="absolute inset-0 bg-blue-800/70 mix-blend-multiply"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo display in hero section */}
          <div className="flex items-center justify-center md:justify-start mb-8">
            <img 
              src="/lovable-uploads/6ce3ee44-9c6a-48a3-9aa5-49f0aadd380d.png" 
              alt="Summit Law Logo" 
              className="h-24 md:h-32 lg:h-40 w-auto drop-shadow-lg" 
              onError={(e) => {
                console.error("Hero logo image failed to load:", e);
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif leading-tight mb-6 drop-shadow-md">
            Massachusetts Criminal Defense Attorney
            <span className="block mt-2 text-blue-100">
              Proven Insight, Powerful Defense
            </span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-blue-50 leading-relaxed max-w-3xl drop-shadow-sm">
            When your freedom is on the line, you deserve an attorney who truly understands the prosecution's playbook. 
            Attorney Joe Brava leverages insider knowledge to build a strong, strategic defense customized for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-white border-none text-base md:text-lg font-semibold px-6 py-6 shadow-lg hover:shadow-xl transition-all duration-300">
                Secure Your Case Strategy
              </Button>
            </Link>
            <Link to="/our-approach">
              <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/50 text-base md:text-lg font-semibold px-6 py-6 shadow-lg hover:shadow-xl transition-all duration-300">
                Discover Our Unique Approach
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Angled bottom edge */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 40" className="fill-white w-full h-10 transform translate-y-1">
          <path d="M0,0L60,5.3C120,11,240,21,360,24C480,27,600,21,720,16C840,11,960,5,1080,8C1200,11,1320,21,1380,26.7L1440,32L1440,40L1380,40C1320,40,1200,40,1080,40C960,40,840,40,720,40C600,40,480,40,360,40C240,40,120,40,60,40L0,40Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
