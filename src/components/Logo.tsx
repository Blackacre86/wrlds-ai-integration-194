
import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-4">
      <div className="text-blue-800 font-bold text-xl">Summit Law</div>
    </Link>
  );
};

export default Logo;
