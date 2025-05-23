
import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-5">
      <div className="w-24 h-24 md:w-28 md:h-28 relative">
        <img 
          src="/lovable-uploads/60f8e1a7-01fc-4068-8dfe-8e4c901fbd9f.png"
          alt="Summit Law Logo" 
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex flex-col">
        <span className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-blue-700 font-serif tracking-wide">
          SUMMIT LAW
        </span>
        <span className="text-xs md:text-sm text-blue-600 font-medium">
          Former prosecutor, Powerful defense
        </span>
      </div>
    </Link>
  );
};

export default Logo;
