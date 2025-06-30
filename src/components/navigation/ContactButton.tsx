
import React from "react";

type ContactButtonProps = {
  handleNavigation: (path: string) => void;
};

const ContactButton = ({ handleNavigation }: ContactButtonProps) => {
  return (
    <div className="hidden md:flex items-center space-x-4">
      <button 
        onClick={() => handleNavigation('/contact')} 
        className="inline-flex items-center justify-center bg-summit-blue-600 hover:bg-summit-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300"
      >
        Contact Us
      </button>
    </div>
  );
};

export default ContactButton;
