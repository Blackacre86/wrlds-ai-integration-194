
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Mountain } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-blue-950 via-blue-900 to-slate-800 text-white overflow-hidden">
      {/* Mountain Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/1469474968028-56623f02e42e.jpg" 
          alt="Mountain Summit" 
          className="w-full h-full object-cover opacity-80"
          onError={(e) => {
            console.error("Image failed to load:", e);
            e.currentTarget.style.display = 'none';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/80 to-slate-900/60 mix-blend-multiply"></div>
      </div>
      
      {/* Animated Mountain Icon Overlay */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20 z-0 animate-pulse">
        <Mountain className="w-2/3 h-2/3 text-white/20" strokeWidth={0.5} />
      </div>
      
      {/* Diagonal design element */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-tr from-blue-950 to-transparent transform -skew-y-2 z-0"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="relative mb-6 inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-400/30 to-blue-400/30 rounded-lg blur"></div>
            <h1 className="relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Massachusetts Criminal Defense Attorney
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-blue-200">
                Proven Insight, Powerful Defense
              </span>
            </h1>
          </div>
          <p className="text-lg md:text-xl mb-8 text-blue-100 leading-relaxed max-w-2xl">
            When your freedom is on the line, you deserve an attorney who truly understands the prosecution's playbook. 
            I am a former prosecutor who leverages insider knowledge to build a strong, strategic defense customized for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-5">
            <Link to="/contact">
              <Button size="lg" className="relative group overflow-hidden bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white border-none text-lg md:text-xl font-semibold px-8 py-7 transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg">
                <span className="relative z-10">Secure Your Case Strategy</span>
                <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Button>
            </Link>
            <Link to="/our-approach">
              <Button size="lg" variant="outline" className="backdrop-blur-sm bg-white/5 border-white/20 text-white hover:bg-white/15 hover:border-white/30 text-lg md:text-xl font-semibold px-8 py-7 transition-all duration-300 transform hover:translate-y-[-2px]">
                Discover My Unique Approach
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
