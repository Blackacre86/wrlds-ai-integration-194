
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger 
} from "@/components/ui/navigation-menu";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

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
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/90 border-b border-blue-100 shadow-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-8">
        <Logo />
        
        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList className="gap-1">
            <NavigationMenuItem>
              <button 
                onClick={() => handleNavigation('/')} 
                className="inline-flex h-10 w-max items-center justify-center rounded-md bg-gradient-to-b from-blue-50 to-blue-100/70 px-4 py-2.5 text-sm font-medium text-blue-800 hover:bg-blue-100 hover:text-blue-900 transition-colors duration-200 shadow-sm hover:shadow"
              >
                Home
              </button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <button 
                onClick={() => handleNavigation('/about')} 
                className="inline-flex h-10 w-max items-center justify-center rounded-md bg-gradient-to-b from-blue-50 to-blue-100/70 px-4 py-2.5 text-sm font-medium text-blue-800 hover:bg-blue-100 hover:text-blue-900 transition-colors duration-200 shadow-sm hover:shadow"
              >
                About Us
              </button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <div className="flex items-center">
                <button 
                  onClick={() => handleNavigation('/practice-areas')} 
                  className="inline-flex h-10 w-max items-center justify-center rounded-md bg-gradient-to-b from-blue-50 to-blue-100/70 px-4 py-2.5 text-sm font-medium text-blue-800 hover:bg-blue-100 hover:text-blue-900 transition-colors duration-200 shadow-sm hover:shadow-md mr-0.5"
                >
                  Practice Areas
                </button>
                <NavigationMenuTrigger className="h-10 px-1 py-2.5 ml-0.5 rounded-md bg-gradient-to-b from-blue-50 to-blue-100/70 text-sm font-medium text-blue-800 hover:bg-blue-100 hover:text-blue-900 transition-colors duration-200 shadow-sm hover:shadow-md">
                </NavigationMenuTrigger>
              </div>
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-2 p-4 md:grid-cols-2 backdrop-blur-md bg-white/95 border border-blue-100 rounded-lg shadow-lg">
                  <button onClick={() => handleNavigation('/practice-areas/oui-dui')} className="block text-left p-2 hover:bg-blue-50/70 rounded-md w-full">OUI/DUI Defense</button>
                  <button onClick={() => handleNavigation('/practice-areas/domestic-violence')} className="block text-left p-2 hover:bg-blue-50/70 rounded-md w-full">Domestic Violence Defense</button>
                  <button onClick={() => handleNavigation('/practice-areas/drug-crimes')} className="block text-left p-2 hover:bg-blue-50/70 rounded-md w-full">Drug Crimes</button>
                  <button onClick={() => handleNavigation('/practice-areas/violent-crimes')} className="block text-left p-2 hover:bg-blue-50/70 rounded-md w-full">Violent Crimes</button>
                  <button onClick={() => handleNavigation('/practice-areas/sex-offenses')} className="block text-left p-2 hover:bg-blue-50/70 rounded-md w-full">Sex Offenses</button>
                  <button onClick={() => handleNavigation('/practice-areas/theft')} className="block text-left p-2 hover:bg-blue-50/70 rounded-md w-full">Theft & Property Crimes</button>
                  <button onClick={() => handleNavigation('/practice-areas/magistrate-hearings')} className="block text-left p-2 hover:bg-blue-50/70 rounded-md w-full">Magistrate Hearings</button>
                  <button onClick={() => handleNavigation('/practice-areas/motor-vehicle')} className="block text-left p-2 hover:bg-blue-50/70 rounded-md w-full">Motor Vehicle Offenses</button>
                  <button onClick={() => handleNavigation('/practice-areas/209a-hearings')} className="block text-left p-2 hover:bg-blue-50/70 rounded-md w-full">209A Hearings</button>
                  <button onClick={() => handleNavigation('/practice-areas/student-defense')} className="block text-left p-2 hover:bg-blue-50/70 rounded-md w-full">Student Defense</button>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <button 
                onClick={() => handleNavigation('/prosecutor-advantage')} 
                className="inline-flex h-10 w-max items-center justify-center rounded-md bg-gradient-to-b from-blue-50 to-blue-100/70 px-4 py-2.5 text-sm font-medium text-blue-800 hover:bg-blue-100 hover:text-blue-900 transition-colors duration-200 shadow-sm hover:shadow"
              >
                Former Prosecutor Advantage
              </button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <button 
                onClick={() => handleNavigation('/case-results')} 
                className="inline-flex h-10 w-max items-center justify-center rounded-md bg-gradient-to-b from-blue-50 to-blue-100/70 px-4 py-2.5 text-sm font-medium text-blue-800 hover:bg-blue-100 hover:text-blue-900 transition-colors duration-200 shadow-sm hover:shadow"
              >
                Case Results
              </button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <button 
                onClick={() => handleNavigation('/our-approach')} 
                className="inline-flex h-10 w-max items-center justify-center rounded-md bg-gradient-to-b from-blue-50 to-blue-100/70 px-4 py-2.5 text-sm font-medium text-blue-800 hover:bg-blue-100 hover:text-blue-900 transition-colors duration-200 shadow-sm hover:shadow"
              >
                Our Approach
              </button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button 
            onClick={() => handleNavigation('/contact')} 
            className="inline-flex items-center justify-center bg-gradient-to-r from-blue-800 to-blue-600 hover:from-blue-900 hover:to-blue-700 text-white px-3 py-1.5 rounded-md mr-2 shadow-md text-xs font-medium"
          >
            Contact
          </button>
          <button 
            onClick={toggleMenu} 
            className="p-1.5 rounded-md hover:bg-blue-50 transition-colors"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-5 w-5 text-blue-800" /> : <Menu className="h-5 w-5 text-blue-800" />}
          </button>
        </div>
        
        {/* Desktop Contact Button */}
        <div className="hidden md:flex items-center space-x-4">
          <button 
            onClick={() => handleNavigation('/contact')} 
            className="inline-flex items-center justify-center bg-gradient-to-r from-blue-800 to-blue-600 hover:from-blue-900 hover:to-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300"
          >
            Contact Us
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
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
            <button onClick={() => handleNavigation('/case-results')} className="font-medium text-left text-blue-800 hover:text-blue-600 py-2 border-b border-gray-100 w-full">
              Case Results
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
      )}
    </header>
  );
};

export default Header;
