
import React from "react";
import { useNavigate } from "react-router-dom";

const Logo = ({ variant = "header" }: { variant?: "header" | "page-content" | "white" | "blue" }) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/');
    window.scrollTo(0, 0);
  };

  return (
    <button onClick={handleClick} className="flex items-center group">
      {variant === "header" || variant === "blue" ? (
        // Original header logo - simple text design
        <div className="flex items-center space-x-2">
          <div className="text-summit-blue-700">
            <div className="text-2xl font-bold tracking-wide">SUMMIT</div>
            <div className="text-sm font-medium -mt-1">LAW</div>
          </div>
        </div>
      ) : variant === "white" ? (
        // White logo for footer
        <div className="flex items-center space-x-2">
          <div className="text-white">
            <div className="text-2xl font-bold tracking-wide">SUMMIT</div>
            <div className="text-sm font-medium -mt-1">LAW</div>
          </div>
        </div>
      ) : (
        // Enhanced page content logo - more prominent for hero sections
        <div className="bg-white/95 backdrop-blur-sm text-summit-blue-800 px-8 py-4 rounded-xl shadow-2xl border-2 border-summit-gold-400 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] transition-all duration-300 group-hover:scale-105">
          <div className="flex items-center space-x-4">
            <div className="text-left">
              <div className="text-3xl font-bold tracking-wide">SUMMIT</div>
              <div className="text-lg font-medium text-summit-blue-600 -mt-1">LAW</div>
            </div>
          </div>
        </div>
      )}
    </button>
  );
};

export default Logo;
