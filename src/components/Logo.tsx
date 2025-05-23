
import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-4">
      <div className="flex flex-col">
        <span className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-blue-700 font-serif tracking-wide">
          
        </span>
      </div>
    </Link>
  );
};

export default Logo;
