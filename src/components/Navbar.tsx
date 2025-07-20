
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const navigateHome = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <motion.nav className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full", isScrolled ? "bg-white shadow-sm" : "bg-black")} initial={{
      opacity: 1,
      y: 0
    }} animate={{
      opacity: 1,
      y: 0
    }}>
      <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <div className={cn("text-xl font-bold", isScrolled ? "text-gray-900" : "text-white")}>
                Summit Law
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu className={cn(isScrolled ? "" : "text-white")}>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <button onClick={navigateHome}>
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                      Home
                    </NavigationMenuLink>
                  </button>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <button onClick={() => scrollToSection('attorney-profile')}>
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                      About Attorney
                    </NavigationMenuLink>
                  </button>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn(isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                    Practice Areas
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px]">
                      <li>
                        <button onClick={() => scrollToSection('practice-areas')} className="block p-3 space-y-1 rounded-md hover:bg-gray-100 w-full text-left">
                          <div className="font-medium">Criminal Defense</div>
                          <p className="text-sm text-gray-500">Felonies and misdemeanors in all Massachusetts courts</p>
                        </button>
                      </li>
                      <li>
                        <button onClick={() => scrollToSection('practice-areas')} className="block p-3 space-y-1 rounded-md hover:bg-gray-100 w-full text-left">
                          <div className="font-medium">Restraining Orders</div>
                          <p className="text-sm text-gray-500">209A and 258E harassment prevention orders</p>
                        </button>
                      </li>
                      <li>
                        <button onClick={() => scrollToSection('practice-areas')} className="block p-3 space-y-1 rounded-md hover:bg-gray-100 w-full text-left">
                          <div className="font-medium">Motor Vehicle Offenses</div>
                          <p className="text-sm text-gray-500">OUI/DUI, reckless driving, license suspensions</p>
                        </button>
                      </li>
                      <li>
                        <button onClick={() => scrollToSection('practice-areas')} className="block p-3 space-y-1 rounded-md hover:bg-gray-100 w-full text-left">
                          <div className="font-medium">Show Cause Hearings</div>
                          <p className="text-sm text-gray-500">Clerk Magistrate hearings and criminal applications</p>
                        </button>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <button onClick={() => scrollToSection('summit-advantage')}>
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                      The Summit Advantage
                    </NavigationMenuLink>
                  </button>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <a href="tel:508-454-0822" className={cn("px-4 py-2 rounded-md transition-colors flex items-center", isScrolled ? "bg-gray-200 text-gray-700 hover:bg-gray-300" : "bg-gray-700 text-white hover:bg-gray-600")}>
                    <Phone className="w-4 h-4 mr-2" />
                    508-454-0822
                  </a>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <button onClick={() => scrollToSection('contact')} className={cn("px-4 py-2 rounded-md transition-colors", isScrolled ? "bg-gray-900 text-white hover:bg-gray-800" : "bg-white text-gray-900 hover:bg-gray-100")}>
                    Contact Us
                  </button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className={cn("focus:outline-none", isScrolled ? "text-gray-700" : "text-white")}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={cn("md:hidden transition-all duration-300 overflow-hidden w-full", isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0")}>
        <div className={cn("px-3 pt-2 pb-3 space-y-1 shadow-sm overflow-y-auto max-h-80", isScrolled ? "bg-white" : "bg-black")}>
          <Link to="/" className={cn("block px-3 py-1.5 rounded-md text-sm", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => {
            setIsMenuOpen(false);
            window.scrollTo(0, 0);
          }}>
            Home
          </Link>
          
          <button onClick={() => scrollToSection('attorney-profile')} className={cn("block w-full text-left px-3 py-1.5 rounded-md text-sm", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")}>
            About Attorney
          </button>
          
          <button onClick={() => scrollToSection('practice-areas')} className={cn("block w-full text-left px-3 py-1.5 rounded-md text-sm", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")}>
            Practice Areas
          </button>
          
          <button onClick={() => scrollToSection('summit-advantage')} className={cn("block w-full text-left px-3 py-1.5 rounded-md text-sm", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")}>
            The Summit Advantage
          </button>
          
          <a href="tel:508-454-0822" className={cn("block px-3 py-1.5 rounded-md text-sm flex items-center", isScrolled ? "text-gray-700 bg-gray-100 hover:bg-gray-200" : "text-white bg-gray-800 hover:bg-gray-700")} onClick={() => setIsMenuOpen(false)}>
            <Phone className="w-4 h-4 mr-2" />
            Call 508-454-0822
          </a>
          
          <button onClick={() => scrollToSection('contact')} className={cn("block w-full text-left px-3 py-1.5 rounded-md text-sm", isScrolled ? "text-gray-700 bg-gray-200 hover:bg-gray-300" : "text-white bg-gray-700 hover:bg-gray-600")}>
            Contact Us
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
