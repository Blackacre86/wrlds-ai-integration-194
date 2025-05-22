
import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center space-x-3">
      <div className="h-24 w-auto flex items-center justify-center">
        <img 
          src="/lovable-uploads/6c67f401-c087-4168-9659-d289fdefec08.png" 
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
