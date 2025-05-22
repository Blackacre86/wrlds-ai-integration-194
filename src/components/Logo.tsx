
import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center space-x-3">
      <div className="h-12 w-auto relative">
        <img 
          src="/lovable-uploads/30517370-4045-4723-b7f5-447436e4e589.png" 
          alt="Summit Law" 
          className="h-full object-contain"
        />
      </div>
      <div className="flex flex-col">
        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-600">
          SUMMIT LAW
        </span>
        <span className="text-xs font-medium text-blue-600">
          Criminal Defense Attorneys
        </span>
      </div>
    </Link>
  );
};

export default Logo;
