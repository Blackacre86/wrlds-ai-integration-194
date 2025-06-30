
import React from "react";
import PracticeAreasDropdown from "./PracticeAreasDropdown";

interface DesktopNavigationProps {
  handleNavigation: (path: string) => void;
}

const DesktopNavigation = ({ handleNavigation }: DesktopNavigationProps) => {
  const navItems = [
    { label: "About", path: "/about" },
    { label: "Our Approach", path: "/our-approach" },
    { label: "Case Results", path: "/case-results" },
  ];

  return (
    <nav className="hidden lg:flex items-center space-x-8">
      {navItems.map((item) => (
        <button
          key={item.path}
          onClick={() => handleNavigation(item.path)}
          className="text-white hover:text-summit-orange-500 font-medium transition-colors duration-300 text-base"
        >
          {item.label}
        </button>
      ))}
      <PracticeAreasDropdown handleNavigation={handleNavigation} />
    </nav>
  );
};

export default DesktopNavigation;
