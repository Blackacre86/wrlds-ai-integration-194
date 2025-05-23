
import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <div className="w-10 h-10 md:w-12 md:h-12 relative">
        <img 
          src="/lovable-uploads/60f8e1a7-01fc-4068-8dfe-8e4c901fbd9f.png"
          alt="Summit Law Logo" 
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex flex-col">
        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-blue-700 font-serif">
          SUMMIT LAW
        </span>
        <span className="text-[10px] text-blue-600">
          Strategic Defense, Innovative Solutions, Trusted Results
        </span>
      </div>
    </Link>
  );
};

export default Logo;
