
import React from "react";
import { useNavigate } from "react-router-dom";

const Logo = ({ variant = "blue" }: { variant?: "blue" | "white" }) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/');
    window.scrollTo(0, 0);
  };

  return (
    <button onClick={handleClick} className="flex items-center group">
      {variant === "blue" ? (
        // Blue variant with solid background and text
        <div className="bg-gradient-to-br from-summit-blue-600 to-summit-blue-800 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-summit-gold-400 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <div>
              <div className="text-xl font-bold tracking-wide">SUMMIT</div>
              <div className="text-sm font-medium text-blue-100 -mt-1">LAW</div>
            </div>
          </div>
        </div>
      ) : (
        // White variant with solid background for dark backgrounds
        <div className="bg-white text-summit-blue-800 px-6 py-3 rounded-lg shadow-xl border-2 border-summit-gold-400 hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-summit-gold-400 to-summit-gold-500 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-summit-blue-800 rounded-full"></div>
            </div>
            <div>
              <div className="text-xl font-bold tracking-wide">SUMMIT</div>
              <div className="text-sm font-medium text-summit-blue-600 -mt-1">LAW</div>
            </div>
          </div>
        </div>
      )}
    </button>
  );
};

export default Logo;
