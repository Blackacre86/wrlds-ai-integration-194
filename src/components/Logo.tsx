
import React from "react";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/');
    window.scrollTo(0, 0);
  };

  return (
    <button onClick={handleClick} className="flex items-center">
      <div className="text-blue-800 font-bold text-xl md:text-2xl">Summit Law</div>
    </button>
  );
};

export default Logo;
