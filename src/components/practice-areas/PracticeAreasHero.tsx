
import React from "react";

const PracticeAreasHero = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-800 to-blue-600 text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-4">
          Practice Areas
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-center text-blue-100">
          Expert criminal defense representation across a wide range of legal matters
        </p>
      </div>
      
      {/* Mountain background image - properly centered and visible */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <img 
          src="/lovable-uploads/f98ed06a-60c2-411a-99b5-ef4657787c04.png" 
          alt="Mountain Background" 
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      {/* Straight blue line separator */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white"></div>
    </div>
  );
};

export default PracticeAreasHero;
