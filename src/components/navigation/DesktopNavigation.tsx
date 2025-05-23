
import React from "react";
import { 
  NavigationMenu, 
  NavigationMenuItem, 
  NavigationMenuList
} from "@/components/ui/navigation-menu";
import PracticeAreasDropdown from "./PracticeAreasDropdown";

type DesktopNavigationProps = {
  handleNavigation: (path: string) => void;
};

const DesktopNavigation = ({ handleNavigation }: DesktopNavigationProps) => {
  return (
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
          <PracticeAreasDropdown handleNavigation={handleNavigation} />
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
  );
};

export default DesktopNavigation;
