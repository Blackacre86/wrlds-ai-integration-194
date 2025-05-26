
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
            className="inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2.5 text-sm font-medium text-summit-blue-700 hover:bg-summit-blue-50 hover:text-summit-blue-800 transition-colors duration-200"
          >
            Home
          </button>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <PracticeAreasDropdown handleNavigation={handleNavigation} />
        </NavigationMenuItem>
        <NavigationMenuItem>
          <button 
            onClick={() => handleNavigation('/prosecutor-advantage')} 
            className="inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2.5 text-sm font-medium text-summit-blue-700 hover:bg-summit-blue-50 hover:text-summit-blue-800 transition-colors duration-200"
          >
            Former Prosecutor Advantage
          </button>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <button 
            onClick={() => handleNavigation('/about')} 
            className="inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2.5 text-sm font-medium text-summit-blue-700 hover:bg-summit-blue-50 hover:text-summit-blue-800 transition-colors duration-200"
          >
            About Us
          </button>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <button 
            onClick={() => handleNavigation('/our-approach')} 
            className="inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2.5 text-sm font-medium text-summit-blue-700 hover:bg-summit-blue-50 hover:text-summit-blue-800 transition-colors duration-200"
          >
            Our Approach
          </button>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default DesktopNavigation;
