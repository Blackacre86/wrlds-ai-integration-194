
import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center space-x-3">
      <div className="h-12 w-auto relative">
        <img 
          src="/lovable-uploads/6c5ca4af-b6e3-4f1e-9772-0b4bd592e02b.png" 
          alt="Summit Law Logo" 
          className="h-full object-contain"
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
