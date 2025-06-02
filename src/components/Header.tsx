
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo";
import DesktopNavigation from "./navigation/DesktopNavigation";
import MobileNavigation from "./navigation/MobileNavigation";
import MobileMenuButton from "./navigation/MobileMenuButton";
import ContactButton from "./navigation/ContactButton";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    // Ensure scroll to top
    window.scrollTo(0, 0);
    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-summit-slate-200 shadow-sm">
      <div className="container mx-auto flex h-28 items-center justify-between px-4 md:px-8">
        <div className="flex items-center justify-center">
          <Logo variant="header" />
        </div>
        
        {/* Desktop Navigation */}
        <DesktopNavigation handleNavigation={handleNavigation} />
        
        {/* Mobile Menu Button */}
        <MobileMenuButton 
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
          handleNavigation={handleNavigation}
        />
        
        {/* Desktop Contact Button */}
        <ContactButton handleNavigation={handleNavigation} />
      </div>
      
      {/* Mobile Navigation */}
      <MobileNavigation 
        isMenuOpen={isMenuOpen}
        handleNavigation={handleNavigation}
      />
    </header>
  );
};

export default Header;
