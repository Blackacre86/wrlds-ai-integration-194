
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
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/90 border-b border-blue-100 shadow-sm">
      <div className="container mx-auto flex h-28 items-center justify-between px-4 md:px-8">
        <Logo />
        
        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList className="gap-1">
            <NavigationMenuItem>
              <Link to="/" className="inline-flex h-10 w-max items-center justify-center rounded-md bg-gradient-to-b from-blue-50 to-blue-100/70 px-4 py-2.5 text-sm font-medium text-blue-800 hover:bg-blue-100 hover:text-blue-900 transition-colors duration-200 shadow-sm hover:shadow">
                Home
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/about" className="inline-flex h-10 w-max items-center justify-center rounded-md bg-gradient-to-b from-blue-50 to-blue-100/70 px-4 py-2.5 text-sm font-medium text-blue-800 hover:bg-blue-100 hover:text-blue-900 transition-colors duration-200 shadow-sm hover:shadow">
                About Us
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <div className="flex items-center">
                <Link to="/practice-areas" className="inline-flex h-10 w-max items-center justify-center rounded-md bg-gradient-to-b from-blue-50 to-blue-100/70 px-4 py-2.5 text-sm font-medium text-blue-800 hover:bg-blue-100 hover:text-blue-900 transition-colors duration-200 shadow-sm hover:shadow-md mr-0.5">
                  Practice Areas
                </Link>
                <NavigationMenuTrigger className="h-10 px-1 py-2.5 ml-0.5 rounded-md bg-gradient-to-b from-blue-50 to-blue-100/70 text-sm font-medium text-blue-800 hover:bg-blue-100 hover:text-blue-900 transition-colors duration-200 shadow-sm hover:shadow-md">
                </NavigationMenuTrigger>
              </div>
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-2 p-4 md:grid-cols-2 backdrop-blur-md bg-white/95 border border-blue-100 rounded-lg shadow-lg">
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
              <Link to="/prosecutor-advantage" className="inline-flex h-10 w-max items-center justify-center rounded-md bg-gradient-to-b from-blue-50 to-blue-100/70 px-4 py-2.5 text-sm font-medium text-blue-800 hover:bg-blue-100 hover:text-blue-900 transition-colors duration-200 shadow-sm hover:shadow">
                Former Prosecutor Advantage
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/case-results" className="inline-flex h-10 w-max items-center justify-center rounded-md bg-gradient-to-b from-blue-50 to-blue-100/70 px-4 py-2.5 text-sm font-medium text-blue-800 hover:bg-blue-100 hover:text-blue-900 transition-colors duration-200 shadow-sm hover:shadow">
                Case Results
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/ai-innovation" className="inline-flex h-10 w-max items-center justify-center rounded-md bg-gradient-to-b from-blue-50 to-blue-100/70 px-4 py-2.5 text-sm font-medium text-blue-800 hover:bg-blue-100 hover:text-blue-900 transition-colors duration-200 shadow-sm hover:shadow">
                AI Innovation
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <Link to="/contact" className="bg-gradient-to-r from-[hsl(var(--summit-blue))] to-blue-600 hover:from-blue-900 hover:to-blue-700 text-white px-3 py-1.5 rounded-md mr-2 shadow-md text-xs font-medium">
            Contact
          </Link>
          <button 
            onClick={toggleMenu} 
            className="p-1.5 rounded-md hover:bg-blue-50 transition-colors"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-5 w-5 text-[hsl(var(--summit-blue))]" /> : <Menu className="h-5 w-5 text-[hsl(var(--summit-blue))]" />}
          </button>
        </div>
        
        {/* Desktop Contact Button */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/contact" className="bg-gradient-to-r from-[hsl(var(--summit-blue))] to-blue-600 hover:from-blue-900 hover:to-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300">
            Contact Us
          </Link>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-20 inset-x-0 z-50 h-[calc(100vh-5rem)] overflow-y-auto">
          <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
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
              <div className="pl-4 mt-2 space-y-1.5">
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
            
            <div className="pt-4 mt-2">
              <Link to="/contact" onClick={toggleMenu}>
                <Button className="w-full bg-gradient-to-r from-blue-800 to-blue-600 hover:from-blue-900 hover:to-blue-700 text-sm">
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
