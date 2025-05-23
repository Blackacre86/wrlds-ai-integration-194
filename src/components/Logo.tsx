
import React from "react";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/');
    window.scrollTo(0, 0);
  };

  return (
    <button onClick={handleClick} className="flex items-center gap-2">
      <div className="flex items-center">
        <img 
          src="/lovable-uploads/6ce3ee44-9c6a-48a3-9aa5-49f0aadd380d.png" 
          alt="Summit Law Logo" 
          className="h-16 w-auto md:h-20" 
          onError={(e) => {
            console.error("Logo image failed to load:", e);
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>
      <div className="text-blue-800 font-bold text-xl md:text-2xl">Summit Law</div>
    </button>
  );
};

export default Logo;
