
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

type BreadcrumbItem = {
  label: string;
  path: string;
};

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  
  const getBreadcrumbItems = (): BreadcrumbItem[] => {
    const items: BreadcrumbItem[] = [{ label: "Home", path: "/" }];
    
    let currentPath = "";
    pathnames.forEach((pathname) => {
      currentPath += `/${pathname}`;
      
      // Convert URL segments to readable labels
      let label = pathname.replace(/-/g, ' ');
      label = label.charAt(0).toUpperCase() + label.slice(1);
      
      // Special handling for locations
      if (pathname === 'locations') {
        label = 'Service Areas';
      } else if (pathname === 'boston') {
        label = 'Boston';
      } else if (pathname === 'worcester') {
        label = 'Worcester';
      }
      // Special handling for practice areas
      else if (pathname === 'practice-areas') {
        label = 'Practice Areas';
      } else if (pathname === 'oui-dui') {
        label = 'OUI/DUI Defense';
      } else if (pathname === 'domestic-violence') {
        label = 'Domestic Violence Defense';
      } else if (pathname === 'drug-crimes') {
        label = 'Drug Crimes';
      } else if (pathname === 'violent-crimes') {
        label = 'Violent Crimes';
      } else if (pathname === 'sex-offenses') {
        label = 'Sex Offenses';
      } else if (pathname === 'magistrate-hearings') {
        label = 'Magistrate Hearings';
      } else if (pathname === 'motor-vehicle') {
        label = 'Motor Vehicle Offenses';
      } else if (pathname === '209a-hearings') {
        label = '209A Hearings';
      } else if (pathname === 'student-defense') {
        label = 'Student Defense';
      } else if (pathname === 'prosecutor-advantage') {
        label = 'Former Prosecutor Advantage';
      } else if (pathname === 'our-approach') {
        label = 'Our Approach';
      } else if (pathname === 'case-results') {
        label = 'Case Results';
      }
      
      items.push({ label, path: currentPath });
    });
    
    return items;
  };

  const breadcrumbItems = getBreadcrumbItems();
  
  // Don't show breadcrumb on homepage
  if (location.pathname === '/') {
    return null;
  }

  return (
    <nav className="bg-gray-50 border-b border-gray-200 py-3">
      <div className="container mx-auto px-4">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbItems.map((item, index) => (
            <li key={item.path} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="h-4 w-4 text-gray-400 mx-2" />
              )}
              {index === 0 && (
                <Home className="h-4 w-4 text-blue-600 mr-1" />
              )}
              {index === breadcrumbItems.length - 1 ? (
                <span className="text-gray-700 font-medium">{item.label}</span>
              ) : (
                <Link 
                  to={item.path} 
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;
