
import React from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

interface PracticeAreasDropdownProps {
  handleNavigation: (path: string) => void;
}

const PracticeAreasDropdown = ({ handleNavigation }: PracticeAreasDropdownProps) => {
  const practiceAreas = [
    { label: "OUI/DUI Defense", path: "/practice-areas/oui-dui" },
    { label: "Domestic Violence", path: "/practice-areas/domestic-violence" },
    { label: "Drug Crimes", path: "/practice-areas/drug-crimes" },
    { label: "Violent Crimes", path: "/practice-areas/violent-crimes" },
    { label: "Sex Offenses", path: "/practice-areas/sex-offenses" },
    { label: "Theft & Property", path: "/practice-areas/theft" },
    { label: "Federal Crimes", path: "/practice-areas/federal-crimes" },
    { label: "Student Defense", path: "/practice-areas/student-defense" },
  ];

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-white hover:text-summit-orange-500 font-medium transition-colors duration-300 text-base bg-transparent">
            Practice Areas
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {practiceAreas.map((area) => (
                <Link
                  key={area.path}
                  to={area.path}
                  onClick={() => handleNavigation(area.path)}
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                  <div className="text-sm font-medium leading-none">{area.label}</div>
                </Link>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default PracticeAreasDropdown;
