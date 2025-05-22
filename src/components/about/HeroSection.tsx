
import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-blue-900 text-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Our Team</h1>
            <p className="text-xl text-blue-100">
              Proven Prosecutorial Insight. Strategic Criminal Defense
            </p>
          </div>
          <div className="w-full md:w-1/2">
            {/* Placeholder for Attorney Joe Brava's professional image */}
            <div className="bg-blue-800 w-full aspect-[4/3] rounded-lg flex items-center justify-center">
              <span>Professional Photo of Attorney Joe Brava</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
