
import React from "react";
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

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 border-b border-blue-100">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Logo />
        
        <NavigationMenu>
          <NavigationMenuList className="hidden md:flex space-x-2">
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
              <NavigationMenuTrigger className="px-4 py-2 rounded-lg backdrop-blur-md bg-blue-50/30 border border-blue-100/50 text-sm font-medium text-blue-800 hover:bg-blue-100/50 transition-colors">
                Practice Areas
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-3 p-4 backdrop-blur-md bg-white/90 border border-blue-100 rounded-lg shadow-lg">
                  <Link to="/practice-areas/oui-dui" className="block p-2 hover:bg-blue-50/70 rounded-md">OUI/DUI Defense</Link>
                  <Link to="/practice-areas/drug-crimes" className="block p-2 hover:bg-blue-50/70 rounded-md">Drug Crimes</Link>
                  <Link to="/practice-areas/assault" className="block p-2 hover:bg-blue-50/70 rounded-md">Assault and Battery</Link>
                  <Link to="/practice-areas/theft" className="block p-2 hover:bg-blue-50/70 rounded-md">Theft and Property Crimes</Link>
                  <Link to="/practice-areas/violent-crimes" className="block p-2 hover:bg-blue-50/70 rounded-md">Violent Crimes</Link>
                  <Link to="/practice-areas/domestic-violence" className="block p-2 hover:bg-blue-50/70 rounded-md">Domestic Violence Defense</Link>
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
        
        <div className="flex items-center space-x-4">
          <Link to="/contact" className="bg-gradient-to-r from-blue-800 to-blue-600 hover:from-blue-900 hover:to-blue-700 text-white px-4 py-2 rounded-md">
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
