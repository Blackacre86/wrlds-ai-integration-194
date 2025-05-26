
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
        <img 
          src="/lovable-uploads/f0b64e3b-37c8-4f95-86ce-8ba84a9bd94b.png" 
          alt="Summit Law" 
          className="h-20 md:h-28 transition-transform duration-300 group-hover:scale-105" 
          onError={(e) => {
            console.error("Logo failed to load:", e);
            // Fallback to text if image fails to load
            const target = e.currentTarget as HTMLElement;
            if (target.style) {
              target.style.display = 'none';
            }
            const nextSibling = target.nextElementSibling as HTMLElement;
            if (nextSibling) {
              nextSibling.style.display = 'block';
            }
          }}
        />
      ) : (
        <div className="relative">
          {/* Enhanced background for better contrast */}
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm rounded-lg -m-2 shadow-lg"></div>
          <img 
            src="/lovable-uploads/2bcf743c-4503-407f-8f7b-2d68c3a69106.png" 
            alt="Summit Law" 
            className="relative h-24 md:h-32 filter drop-shadow-lg brightness-110 contrast-110 transition-all duration-300 group-hover:scale-105 group-hover:brightness-125" 
            onError={(e) => {
              console.error("Logo failed to load:", e);
              // Fallback to text if image fails to load
              const target = e.currentTarget as HTMLElement;
              if (target.style) {
                target.style.display = 'none';
              }
              const nextSibling = target.nextElementSibling as HTMLElement;
              if (nextSibling) {
                nextSibling.style.display = 'block';
              }
            }}
          />
        </div>
      )}
      {/* Enhanced fallback text version */}
      <div className={`font-bold text-2xl md:text-4xl hidden transition-all duration-300 group-hover:scale-105 ${
        variant === "white" 
          ? "text-white drop-shadow-lg bg-black/20 backdrop-blur-sm px-4 py-2 rounded-lg" 
          : "text-blue-800"
      }`}>
        Summit Law
      </div>
    </button>
  );
};

export default Logo;
