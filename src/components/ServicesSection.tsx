
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Car, Pill, Gavel, Wallet, Shield, HeartCrack, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      icon: <Car className="h-8 w-8 text-blue-700" />,
      title: "OUI/DUI Defense",
      description: "Expert defense against operating under the influence charges with strategies to protect your driving privileges and freedom."
    },
    {
      icon: <PillIcon className="h-8 w-8 text-blue-700" />,
      title: "Drug Crimes",
      description: "Comprehensive defense for all drug-related charges, from possession to trafficking, focusing on rehabilitation options and reduced penalties."
    },
    {
      icon: <Gavel className="h-8 w-8 text-blue-700" />,
      title: "Assault and Battery",
      description: "Strategic defense against violent crime accusations, examining evidence and witness testimonies to build a strong case."
    },
    {
      icon: <Wallet className="h-8 w-8 text-blue-700" />,
      title: "Theft and Property Crimes",
      description: "Dedicated representation for larceny, fraud, burglary, and other property crimes with a focus on minimizing consequences."
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-700" />,
      title: "Violent Crimes",
      description: "Experienced defense for serious violent offense charges, ensuring thorough investigation and constitutional rights protection."
    },
    {
      icon: <HeartCrack className="h-8 w-8 text-blue-700" />,
      title: "Domestic Violence Defense",
      description: "Sensitive and strategic representation in domestic violence cases, with insight from Attorney Brava's prosecutorial experience."
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-blue-700" />,
      title: "Student Defense",
      description: "Specialized defense for students facing criminal charges, disciplinary hearings, Title IX proceedings, and academic misconduct allegations."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Practice Areas</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Summit Law offers expert criminal defense representation across key areas of Massachusetts criminal law.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="mb-2">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/contact">
            <Button className="bg-blue-800 hover:bg-blue-900 text-white">
              Tell Us About Your Case
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

// Custom pill icon component as lucide-react doesn't have one by default
const PillIcon = ({ className }: { className?: string }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      className={className} 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M10.5 20.5a7.78 7.78 0 0 1-5-2.5c-2.83-2.83-2.83-7.17 0-10 2.83-2.83 7.17-2.83 10 0 2.83 2.83 2.83 7.17 0 10a7.78 7.78 0 0 1-5 2.5Z"/>
      <path d="m8.5 8.5 7 7"/>
    </svg>
  );
};

export default ServicesSection;
