
import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-4">
      <div className="flex items-center">
        <img 
          src="/lovable-uploads/6fadd948-052c-46e3-b8eb-f5a4db222ff1.png" 
          alt="Summit Law Logo" 
          className="h-12 md:h-14"
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
