
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
      <img 
        src="/lovable-uploads/25ad2a19-eadc-44ae-ba5b-c75a83e8af10.png" 
        alt="Summit Law Logo" 
        className={`
          ${variant === "header" ? "h-16 w-auto" : 
            variant === "page-content" ? "h-24 w-auto" : 
            "h-20 w-auto"} 
          transition-transform duration-300 group-hover:scale-105
        `}
      />
    </button>
  );
};

export default Logo;
