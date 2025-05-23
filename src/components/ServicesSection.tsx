
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
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 font-serif">Our Practice Areas</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experienced criminal defense representation across a wide range of practice areas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-8 rounded-xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-b from-white to-blue-50 hover:translate-y-[-5px]"
            >
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <Link to={service.link} className="text-blue-700 hover:text-blue-800 flex items-center group">
                <span className="mr-2">Learn More</span> 
                <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link to="/practice-areas">
            <Button className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-6 text-lg shadow-md hover:shadow-lg transition-all duration-300">
              View All Practice Areas
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
