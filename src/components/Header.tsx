
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
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 border-b border-blue-100">
      <div className="container mx-auto flex h-24 items-center justify-between px-4 md:px-6">
        <Logo />
        
        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList className="space-x-2">
            <NavigationMenuItem>
              <Link to="/" className="px-4 py-2 rounded-lg backdrop-blur-md bg-blue-50/30 border border-blue-100/50 text-sm font-medium text-blue-800 hover:bg-blue-100/50 transition-colors">
                Home
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/about" className="px-4 py-2 rounded-lg backdrop-blur-md bg-blue-50/30 border border-blue-100/50 text-sm font-medium text-blue-800 hover:bg-blue-100/50 transition-colors">
                About Us
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <div className="flex items-center">
                <Link to="/practice-areas" className="px-4 py-2 rounded-lg backdrop-blur-md bg-blue-50/30 border border-blue-100/50 text-sm font-medium text-blue-800 hover:bg-blue-100/50 transition-colors mr-1">
                  Practice Areas
                </Link>
                <NavigationMenuTrigger className="h-full px-1 py-2 rounded-lg backdrop-blur-md bg-blue-50/30 border border-blue-100/50 text-sm font-medium text-blue-800 hover:bg-blue-100/50 transition-colors">
                </NavigationMenuTrigger>
              </div>
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-3 p-4 backdrop-blur-md bg-white/90 border border-blue-100 rounded-lg shadow-lg">
                  <Link to="/practice-areas/oui-dui" className="block p-2 hover:bg-blue-50/70 rounded-md">OUI/DUI Defense</Link>
                  <Link to="/practice-areas/domestic-violence" className="block p-2 hover:bg-blue-50/70 rounded-md">Domestic Violence Defense</Link>
                  <Link to="/practice-areas/drug-crimes" className="block p-2 hover:bg-blue-50/70 rounded-md">Drug Crimes</Link>
                  <Link to="/practice-areas/violent-crimes" className="block p-2 hover:bg-blue-50/70 rounded-md">Violent Crimes</Link>
                  <Link to="/practice-areas/sex-offenses" className="block p-2 hover:bg-blue-50/70 rounded-md">Sex Offenses</Link>
                  <Link to="/practice-areas/theft" className="block p-2 hover:bg-blue-50/70 rounded-md">Theft & Property Crimes</Link>
                  <Link to="/practice-areas/magistrate-hearings" className="block p-2 hover:bg-blue-50/70 rounded-md">Magistrate Hearings</Link>
                  <Link to="/practice-areas/motor-vehicle" className="block p-2 hover:bg-blue-50/70 rounded-md">Motor Vehicle Offenses</Link>
                  <Link to="/practice-areas/209a-hearings" className="block p-2 hover:bg-blue-50/70 rounded-md">209A Hearings</Link>
                  <Link to="/practice-areas/student-defense" className="block p-2 hover:bg-blue-50/70 rounded-md">Student Defense</Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/prosecutor-advantage" className="px-4 py-2 rounded-lg backdrop-blur-md bg-blue-50/30 border border-blue-100/50 text-sm font-medium text-blue-800 hover:bg-blue-100/50 transition-colors">
                Former Prosecutor Advantage
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/case-results" className="px-4 py-2 rounded-lg backdrop-blur-md bg-blue-50/30 border border-blue-100/50 text-sm font-medium text-blue-800 hover:bg-blue-100/50 transition-colors">
                Case Results
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/ai-innovation" className="px-4 py-2 rounded-lg backdrop-blur-md bg-blue-50/30 border border-blue-100/50 text-sm font-medium text-blue-800 hover:bg-blue-100/50 transition-colors">
                AI Innovation
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <Link to="/contact" className="bg-gradient-to-r from-blue-800 to-blue-600 hover:from-blue-900 hover:to-blue-700 text-white px-4 py-2 rounded-md mr-2">
            Contact
          </Link>
          <button 
            onClick={toggleMenu} 
            className="p-2 rounded-md hover:bg-blue-50 transition-colors"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6 text-blue-800" /> : <Menu className="h-6 w-6 text-blue-800" />}
          </button>
        </div>
        
        {/* Desktop Contact Button */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/contact" className="bg-gradient-to-r from-blue-800 to-blue-600 hover:from-blue-900 hover:to-blue-700 text-white px-4 py-2 rounded-md">
            Contact Us
          </Link>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-20 inset-x-0 z-50 h-[calc(100vh-5rem)] overflow-y-auto">
          <nav className="container mx-auto px-4 py-6 flex flex-col space-y-6">
            <Link to="/" className="font-medium text-blue-800 hover:text-blue-600 py-2 border-b border-gray-100" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/about" className="font-medium text-blue-800 hover:text-blue-600 py-2 border-b border-gray-100" onClick={toggleMenu}>
              About Us
            </Link>
            
            {/* Practice Areas Submenu */}
            <div className="py-2 border-b border-gray-100">
              <Link to="/practice-areas" className="font-medium text-blue-800 hover:text-blue-600" onClick={toggleMenu}>
                Practice Areas
              </Link>
              <div className="pl-4 mt-3 space-y-2">
                <Link to="/practice-areas/oui-dui" className="block text-sm text-gray-700 hover:text-blue-600 py-1" onClick={toggleMenu}>
                  OUI/DUI Defense
                </Link>
                <Link to="/practice-areas/domestic-violence" className="block text-sm text-gray-700 hover:text-blue-600 py-1" onClick={toggleMenu}>
                  Domestic Violence Defense
                </Link>
                <Link to="/practice-areas/drug-crimes" className="block text-sm text-gray-700 hover:text-blue-600 py-1" onClick={toggleMenu}>
                  Drug Crimes
                </Link>
                <Link to="/practice-areas/violent-crimes" className="block text-sm text-gray-700 hover:text-blue-600 py-1" onClick={toggleMenu}>
                  Violent Crimes
                </Link>
                <Link to="/practice-areas/sex-offenses" className="block text-sm text-gray-700 hover:text-blue-600 py-1" onClick={toggleMenu}>
                  Sex Offenses
                </Link>
                <Link to="/practice-areas/theft" className="block text-sm text-gray-700 hover:text-blue-600 py-1" onClick={toggleMenu}>
                  Theft & Property Crimes
                </Link>
                <Link to="/practice-areas/magistrate-hearings" className="block text-sm text-gray-700 hover:text-blue-600 py-1" onClick={toggleMenu}>
                  Magistrate Hearings
                </Link>
                <Link to="/practice-areas/motor-vehicle" className="block text-sm text-gray-700 hover:text-blue-600 py-1" onClick={toggleMenu}>
                  Motor Vehicle Offenses
                </Link>
                <Link to="/practice-areas/209a-hearings" className="block text-sm text-gray-700 hover:text-blue-600 py-1" onClick={toggleMenu}>
                  209A Hearings
                </Link>
                <Link to="/practice-areas/student-defense" className="block text-sm text-gray-700 hover:text-blue-600 py-1" onClick={toggleMenu}>
                  Student Defense
                </Link>
              </div>
            </div>
            
            <Link to="/prosecutor-advantage" className="font-medium text-blue-800 hover:text-blue-600 py-2 border-b border-gray-100" onClick={toggleMenu}>
              Former Prosecutor Advantage
            </Link>
            <Link to="/case-results" className="font-medium text-blue-800 hover:text-blue-600 py-2 border-b border-gray-100" onClick={toggleMenu}>
              Case Results
            </Link>
            <Link to="/ai-innovation" className="font-medium text-blue-800 hover:text-blue-600 py-2 border-b border-gray-100" onClick={toggleMenu}>
              AI Innovation
            </Link>
            <Link to="/contact" className="font-medium text-blue-800 hover:text-blue-600 py-2" onClick={toggleMenu}>
              Contact Us
            </Link>
            
            <div className="pt-4 mt-4">
              <Link to="/contact" onClick={toggleMenu}>
                <Button className="w-full bg-gradient-to-r from-blue-800 to-blue-600 hover:from-blue-900 hover:to-blue-700">
                  Free Consultation
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
