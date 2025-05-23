
import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-4">
      <div className="flex items-center">
        <img 
          src="/lovable-uploads/6fadd948-052c-46e3-b8eb-f5a4db222ff1.png" 
          alt="Summit Law Logo" 
          className="h-20 md:h-24 w-auto" // Increased height from h-12/h-14 to h-20/h-24
          onError={(e) => {
            console.error("Logo image failed to load:", e);
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>
    </Link>
  );
};

export default Logo;
