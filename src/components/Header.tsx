
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
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Logo />
        
        <NavigationMenu>
          <NavigationMenuList className="hidden md:flex space-x-6">
            <NavigationMenuItem>
              <Link to="/" className="text-sm font-medium text-gray-800 hover:text-blue-700 transition-colors">
                Home
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/about" className="text-sm font-medium text-gray-800 hover:text-blue-700 transition-colors">
                About
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-sm font-medium text-gray-800 hover:text-blue-700 transition-colors bg-transparent hover:bg-transparent">Practice Areas</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-3 p-4">
                  <Link to="/practice-areas/oui-dui" className="block p-2 hover:bg-gray-100 rounded-md">OUI/DUI Defense</Link>
                  <Link to="/practice-areas/drug-crimes" className="block p-2 hover:bg-gray-100 rounded-md">Drug Crimes</Link>
                  <Link to="/practice-areas/assault" className="block p-2 hover:bg-gray-100 rounded-md">Assault and Battery</Link>
                  <Link to="/practice-areas/theft" className="block p-2 hover:bg-gray-100 rounded-md">Theft and Property Crimes</Link>
                  <Link to="/practice-areas/violent-crimes" className="block p-2 hover:bg-gray-100 rounded-md">Violent Crimes</Link>
                  <Link to="/practice-areas/domestic-violence" className="block p-2 hover:bg-gray-100 rounded-md">Domestic Violence Defense</Link>
                  <Link to="/practice-areas/student-defense" className="block p-2 hover:bg-gray-100 rounded-md">Student Defense</Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/prosecutor-advantage" className="text-sm font-medium text-gray-800 hover:text-blue-700 transition-colors">
                Former Prosecutor Advantage
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/case-results" className="text-sm font-medium text-gray-800 hover:text-blue-700 transition-colors">
                Case Results
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/ai-innovation" className="text-sm font-medium text-gray-800 hover:text-blue-700 transition-colors">
                AI Innovation
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="hidden md:inline-flex">
            508-454-0822
          </Button>
          <Button className="bg-blue-800 hover:bg-blue-900">
            Contact Us
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
