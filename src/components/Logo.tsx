
import React from "react";
import { useNavigate } from "react-router-dom";

const Logo = ({ variant = "dark" }: { variant?: "dark" | "light" }) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/');
    window.scrollTo(0, 0);
  };

  // Use the new logo files you uploaded
  const logoSrc = variant === "light" 
    ? "/lovable-uploads/dc7e700e-4aec-4909-8bd5-6d5b49d32233.png" // white logo for dark backgrounds
    : "/lovable-uploads/46b4f9c9-cc1f-4f4c-b3f1-0999ff24a912.png"; // black logo for light backgrounds

  return (
    <button onClick={handleClick} className="flex items-center group">
      <img 
        src={logoSrc}
        alt="Summit Law" 
        className="h-12 md:h-16 w-auto transition-transform duration-300 group-hover:scale-105"
      />
    </button>
  );
};

export default Logo;
