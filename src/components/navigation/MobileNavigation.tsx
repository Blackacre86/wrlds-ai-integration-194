
import React from "react";

type MobileNavigationProps = {
  isMenuOpen: boolean;
  handleNavigation: (path: string) => void;
};

const MobileNavigation = ({ isMenuOpen, handleNavigation }: MobileNavigationProps) => {
  if (!isMenuOpen) return null;
  
  return (
    <div className="md:hidden bg-white shadow-lg absolute top-20 inset-x-0 z-50 h-[calc(100vh-5rem)] overflow-y-auto">
      <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
        <button onClick={() => handleNavigation('/')} className="font-medium text-left text-blue-800 hover:text-blue-600 py-2 border-b border-gray-100 w-full">
          Home
        </button>
        <button onClick={() => handleNavigation('/about')} className="font-medium text-left text-blue-800 hover:text-blue-600 py-2 border-b border-gray-100 w-full">
          About Us
        </button>
        
        {/* Practice Areas Submenu */}
        <div className="py-2 border-b border-gray-100">
          <button onClick={() => handleNavigation('/practice-areas')} className="font-medium text-left text-blue-800 hover:text-blue-600 w-full">
            Practice Areas
          </button>
          <div className="pl-4 mt-2 space-y-1.5">
            <button onClick={() => handleNavigation('/practice-areas/oui-dui')} className="block text-left text-sm text-gray-700 hover:text-blue-600 py-1 w-full">
              OUI/DUI Defense
            </button>
            <button onClick={() => handleNavigation('/practice-areas/domestic-violence')} className="block text-left text-sm text-gray-700 hover:text-blue-600 py-1 w-full">
              Domestic Violence Defense
            </button>
            <button onClick={() => handleNavigation('/practice-areas/drug-crimes')} className="block text-left text-sm text-gray-700 hover:text-blue-600 py-1 w-full">
              Drug Crimes
            </button>
            <button onClick={() => handleNavigation('/practice-areas/violent-crimes')} className="block text-left text-sm text-gray-700 hover:text-blue-600 py-1 w-full">
              Violent Crimes
            </button>
            <button onClick={() => handleNavigation('/practice-areas/sex-offenses')} className="block text-left text-sm text-gray-700 hover:text-blue-600 py-1 w-full">
              Sex Offenses
            </button>
            <button onClick={() => handleNavigation('/practice-areas/theft')} className="block text-left text-sm text-gray-700 hover:text-blue-600 py-1 w-full">
              Theft & Property Crimes
            </button>
            <button onClick={() => handleNavigation('/practice-areas/magistrate-hearings')} className="block text-left text-sm text-gray-700 hover:text-blue-600 py-1 w-full">
              Magistrate Hearings
            </button>
            <button onClick={() => handleNavigation('/practice-areas/motor-vehicle')} className="block text-left text-sm text-gray-700 hover:text-blue-600 py-1 w-full">
              Motor Vehicle Offenses
            </button>
            <button onClick={() => handleNavigation('/practice-areas/209a-hearings')} className="block text-left text-sm text-gray-700 hover:text-blue-600 py-1 w-full">
              209A Hearings
            </button>
            <button onClick={() => handleNavigation('/practice-areas/student-defense')} className="block text-left text-sm text-gray-700 hover:text-blue-600 py-1 w-full">
              Student Defense
            </button>
          </div>
        </div>
        
        <button onClick={() => handleNavigation('/prosecutor-advantage')} className="font-medium text-left text-blue-800 hover:text-blue-600 py-2 border-b border-gray-100 w-full">
          Former Prosecutor Advantage
        </button>
        <button onClick={() => handleNavigation('/our-approach')} className="font-medium text-left text-blue-800 hover:text-blue-600 py-2 border-b border-gray-100 w-full">
          Our Approach
        </button>
        <button onClick={() => handleNavigation('/contact')} className="font-medium text-left text-blue-800 hover:text-blue-600 py-2 w-full">
          Contact Us
        </button>
        
        <div className="pt-4 mt-2">
          <button onClick={() => handleNavigation('/contact')} className="w-full bg-gradient-to-r from-blue-800 to-blue-600 hover:from-blue-900 hover:to-blue-700 text-sm text-white px-4 py-2 rounded-md font-medium shadow-md">
            Free Consultation
          </button>
        </div>
      </nav>
    </div>
  );
};

export default MobileNavigation;
