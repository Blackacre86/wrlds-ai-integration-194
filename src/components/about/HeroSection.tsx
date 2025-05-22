
import React from "react";
import { Mountain } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-slate-800 text-white py-20 overflow-hidden">
      {/* Background mountain image with overlay - Reduced opacity */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/f98ed06a-60c2-411a-99b5-ef4657787c04.png" 
          alt="Mountain Path" 
          className="w-full h-full object-cover opacity-15"
          onError={(e) => {
            console.error("Image failed to load:", e);
            e.currentTarget.style.display = 'none';
          }}
        />
        <div className="absolute inset-0 bg-blue-950/90 mix-blend-multiply"></div>
      </div>
      
      {/* Diagonal design element */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-tr from-blue-950 to-transparent transform -skew-y-2 z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">About Me</h1>
            <p className="text-xl text-blue-100 leading-relaxed max-w-2xl">
              <span className="font-semibold text-blue-200">
                Proven Prosecutorial Insight. Strategic Criminal Defense
              </span>
            </p>
          </div>
          <div className="w-full md:w-1/2 relative">
            {/* Placeholder for Attorney Joe Brava's professional image */}
            <div className="relative overflow-hidden rounded-lg shadow-xl transform transition-all hover:translate-y-[-5px] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] duration-300">
              <div className="bg-gradient-to-br from-slate-800 to-blue-900 w-full aspect-[4/3] flex items-center justify-center p-1">
                <div className="border-2 border-white/10 rounded-md w-full h-full flex items-center justify-center bg-slate-800">
                  <span className="text-gray-400">Professional Photo of Attorney Joe Brava</span>
                </div>
              </div>
            </div>
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
