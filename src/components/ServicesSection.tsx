
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      title: "OUI/DUI Defense",
      description: "Strategic defense against operating under the influence charges, protecting your driving privileges and future.",
      link: "/practice-areas/oui-dui"
    },
    {
      title: "Domestic Violence Defense",
      description: "Sensitive and effective representation for those facing domestic violence allegations.",
      link: "/practice-areas/domestic-violence"
    },
    {
      title: "Drug Crimes",
      description: "Comprehensive defense for all drug-related offenses, from possession to trafficking charges.",
      link: "/practice-areas/drug-crimes"
    },
    {
      title: "Violent Crimes",
      description: "Experienced defense for serious charges including armed robbery, weapons offenses, and homicide.",
      link: "/practice-areas/violent-crimes"
    },
    {
      title: "Sex Offenses",
      description: "Dedicated legal representation for clients facing allegations of sexual misconduct and sex-related crimes.",
      link: "/practice-areas/sex-offenses"
    },
    {
      title: "Theft & Property Crimes",
      description: "Strategic representation for larceny, burglary, shoplifting, and other property offenses.",
      link: "/practice-areas/theft"
    },
    {
      title: "Magistrate Hearings",
      description: "Expert advocacy at magistrate hearings to prevent criminal charges from being issued against you.",
      link: "/practice-areas/magistrate-hearings"
    },
    {
      title: "Motor Vehicle Offenses",
      description: "Skilled defense for traffic violations, license suspensions, and other motor vehicle charges.",
      link: "/practice-areas/motor-vehicle"
    },
    {
      title: "209A Hearings",
      description: "Experienced representation for restraining order hearings and related protective order matters.",
      link: "/practice-areas/209a-hearings"
    },
    {
      title: "Student Defense",
      description: "Specialized defense for students facing criminal charges or university disciplinary proceedings.",
      link: "/practice-areas/student-defense"
    }
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title mb-3">Our Practice Areas</h2>
          <p className="section-subtitle">
            Experienced criminal defense representation across a wide range of practice areas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg border border-summit-blue-100 card-shadow bg-white hover:translate-y-[-3px]"
            >
              <h3 className="text-lg font-bold mb-2 text-summit-blue-700">{service.title}</h3>
              <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
              <Link to={service.link} className="text-summit-blue-600 hover:text-summit-blue-800 flex items-center group text-sm">
                <span className="mr-1.5">Learn More</span> 
                <ArrowRight className="h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/practice-areas">
            <Button className="bg-summit-blue-600 hover:bg-summit-blue-700 text-white px-6 py-3 text-base shadow-md hover:shadow-lg transition-all duration-300">
              View All Practice Areas
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
