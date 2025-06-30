
import React from "react";
import { 
  NavigationMenuContent,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

type PracticeAreasDropdownProps = {
  handleNavigation: (path: string) => void;
};

const PracticeAreasDropdown = ({ handleNavigation }: PracticeAreasDropdownProps) => {
  return (
    <div className="flex items-center">
      <button 
        onClick={() => handleNavigation('/practice-areas')} 
        className="inline-flex h-10 w-max items-center justify-center rounded-md bg-gradient-to-b from-blue-50 to-blue-100/70 px-4 py-2.5 text-sm font-medium text-blue-800 hover:bg-blue-100 hover:text-blue-900 transition-colors duration-200 shadow-sm hover:shadow-md mr-0.5"
      >
        Practice Areas
      </button>
      <NavigationMenuTrigger className="h-10 px-1 py-2.5 ml-0.5 rounded-md bg-gradient-to-b from-blue-50 to-blue-100/70 text-sm font-medium text-blue-800 hover:bg-blue-100 hover:text-blue-900 transition-colors duration-200 shadow-sm hover:shadow-md">
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="grid w-[400px] gap-2 p-4 md:grid-cols-2 backdrop-blur-md bg-white/95 border border-blue-100 rounded-lg shadow-lg">
          {/* Changed from button to Link components */}
          <Link to="/practice-areas/oui-dui" className="block text-left p-2 hover:bg-blue-50/70 rounded-md w-full">OUI/DUI Defense</Link>
          <Link to="/practice-areas/domestic-violence" className="block text-left p-2 hover:bg-blue-50/70 rounded-md w-full">Domestic Violence Defense</Link>
          <Link to="/practice-areas/drug-crimes" className="block text-left p-2 hover:bg-blue-50/70 rounded-md w-full">Drug Crimes</Link>
          <Link to="/practice-areas/violent-crimes" className="block text-left p-2 hover:bg-blue-50/70 rounded-md w-full">Violent Crimes</Link>
          <Link to="/practice-areas/sex-offenses" className="block text-left p-2 hover:bg-blue-50/70 rounded-md w-full">Sex Offenses</Link>
          <Link to="/practice-areas/theft" className="block text-left p-2 hover:bg-blue-50/70 rounded-md w-full">Theft & Property Crimes</Link>
          <Link to="/practice-areas/magistrate-hearings" className="block text-left p-2 hover:bg-blue-50/70 rounded-md w-full">Magistrate Hearings</Link>
          <Link to="/practice-areas/motor-vehicle" className="block text-left p-2 hover:bg-blue-50/70 rounded-md w-full">Motor Vehicle Offenses</Link>
          <Link to="/practice-areas/209a-hearings" className="block text-left p-2 hover:bg-blue-50/70 rounded-md w-full">209A Hearings</Link>
          <Link to="/practice-areas/student-defense" className="block text-left p-2 hover:bg-blue-50/70 rounded-md w-full">Student Defense</Link>
        </div>
      </NavigationMenuContent>
    </div>
  );
};

export default PracticeAreasDropdown;
