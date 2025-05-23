
import React from "react";
import { Menu, X } from "lucide-react";

type MobileMenuButtonProps = {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  handleNavigation: (path: string) => void;
};

const MobileMenuButton = ({ isMenuOpen, toggleMenu, handleNavigation }: MobileMenuButtonProps) => {
  return (
    <div className="flex items-center md:hidden">
      <button 
        onClick={() => handleNavigation('/contact')} 
        className="inline-flex items-center justify-center bg-summit-blue-600 hover:bg-summit-blue-700 text-white px-3 py-1.5 rounded-md mr-2 shadow-md text-xs font-medium"
      >
        Contact
      </button>
      <button 
        onClick={toggleMenu} 
        className="p-1.5 rounded-md hover:bg-summit-blue-50 transition-colors"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMenuOpen ? <X className="h-5 w-5 text-summit-blue-600" /> : <Menu className="h-5 w-5 text-summit-blue-600" />}
      </button>
    </div>
  );
};

export default MobileMenuButton;
