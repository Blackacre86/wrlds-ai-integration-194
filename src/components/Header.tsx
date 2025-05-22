
import React from "react";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Logo />
        
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
                <Link to="/practice-areas/corporate" className="block p-2 hover:bg-gray-100 rounded-md">Corporate Law</Link>
                <Link to="/practice-areas/litigation" className="block p-2 hover:bg-gray-100 rounded-md">Litigation</Link>
                <Link to="/practice-areas/real-estate" className="block p-2 hover:bg-gray-100 rounded-md">Real Estate</Link>
                <Link to="/practice-areas/intellectual-property" className="block p-2 hover:bg-gray-100 rounded-md">Intellectual Property</Link>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/attorneys" className="text-sm font-medium text-gray-800 hover:text-blue-700 transition-colors">
              Attorneys
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/news" className="text-sm font-medium text-gray-800 hover:text-blue-700 transition-colors">
              News
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
        
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="hidden md:inline-flex">
            Client Portal
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
