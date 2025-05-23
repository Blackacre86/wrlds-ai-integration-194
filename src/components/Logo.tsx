
import React from "react";
import { useNavigate } from "react-router-dom";

const Logo = ({ variant = "blue" }: { variant?: "blue" | "white" }) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/');
    window.scrollTo(0, 0);
  };

  return (
    <button onClick={handleClick} className="flex items-center">
      {variant === "blue" ? (
        <img 
          src="/lovable-uploads/f0b64e3b-37c8-4f95-86ce-8ba84a9bd94b.png" 
          alt="Summit Law" 
          className="h-20 md:h-28" // Significantly increased from h-12 md:h-16
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
        <img 
          src="/lovable-uploads/2bcf743c-4503-407f-8f7b-2d68c3a69106.png" 
          alt="Summit Law" 
          className="h-20 md:h-28" // Significantly increased from h-12 md:h-16
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
      )}
      {/* Fallback text version - hidden by default */}
      <div className="text-blue-800 font-bold text-2xl md:text-4xl hidden">Summit Law</div>
    </button>
  );
};

export default Logo;
