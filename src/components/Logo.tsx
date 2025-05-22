
import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <div className="w-10 h-10 bg-blue-800 relative overflow-hidden rounded-sm">
        {/* Mountain peak shape using CSS */}
        <div className="absolute bottom-0 left-0 w-0 h-0 border-l-[20px] border-l-transparent border-b-[30px] border-b-blue-800 border-r-[20px] border-r-transparent"></div>
        <div className="absolute bottom-0 left-2 w-0 h-0 border-l-[10px] border-l-transparent border-b-[20px] border-b-white border-r-[10px] border-r-transparent"></div>
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold text-blue-800">SUMMIT LAW</span>
        <span className="text-[10px] text-gray-500">Strategic Defense, Innovative Solutions, Trusted Results</span>
      </div>
    </Link>
  );
};

export default Logo;
