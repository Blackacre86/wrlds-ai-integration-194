
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      title: "OUI/DUI Defense",
      description: "Strategic defense against operating under the influence charges, protecting your driving privileges and future.",
      link: "/practice-areas/oui-dui",
      iconSrc: "/lovable-uploads/6ab07878-5981-4ef7-b689-709b1e62cc5d.png"
    },
    {
      title: "Domestic Violence Defense",
      description: "Sensitive and effective representation for those facing domestic violence allegations.",
      link: "/practice-areas/domestic-violence",
      iconSrc: "/lovable-uploads/cbb63e3c-159d-41d5-92d5-60c81fc7cc0e.png"
    },
    {
      title: "Drug Crimes",
      description: "Comprehensive defense for all drug-related offenses, from possession to trafficking charges.",
      link: "/practice-areas/drug-crimes",
      iconSrc: "/lovable-uploads/6c46386c-f77c-4d8c-86cc-a0ea0d6f987b.png"
    },
    {
      title: "Violent Crimes",
      description: "Experienced defense for serious charges including armed robbery, weapons offenses, and homicide.",
      link: "/practice-areas/violent-crimes",
      iconSrc: "/lovable-uploads/e2960c62-58f4-4527-93eb-97690136e15c.png"
    },
    {
      title: "Sex Offenses",
      description: "Dedicated legal representation for clients facing allegations of sexual misconduct and sex-related crimes.",
      link: "/practice-areas/sex-offenses",
      iconSrc: "/lovable-uploads/7e7181e8-3f65-47b3-86e4-01443fc4da0f.png"
    },
    {
      title: "Theft & Property Crimes",
      description: "Strategic representation for larceny, burglary, shoplifting, and other property offenses.",
      link: "/practice-areas/theft",
      iconSrc: "/lovable-uploads/8ca7c586-fa4c-46ba-aaad-3ac8e500b520.png"
    },
    {
      title: "Magistrate Hearings",
      description: "Expert advocacy at magistrate hearings to prevent criminal charges from being issued against you.",
      link: "/practice-areas/magistrate-hearings",
      iconSrc: "/lovable-uploads/38d5632d-ff90-4405-95e5-fad362ff0396.png"
    },
    {
      title: "Motor Vehicle Offenses",
      description: "Skilled defense for traffic violations, license suspensions, and other motor vehicle charges.",
      link: "/practice-areas/motor-vehicle",
      iconSrc: "/lovable-uploads/b59dd472-a3c0-4553-b4c7-c980e89b1346.png"
    },
    {
      title: "209A Hearings",
      description: "Experienced representation for restraining order hearings and related protective order matters.",
      link: "/practice-areas/209a-hearings",
      iconSrc: "/lovable-uploads/401f7142-9093-41ba-9b21-30ea6195984d.png"
    },
    {
      title: "Student Defense",
      description: "Specialized defense for students facing criminal charges or university disciplinary proceedings.",
      link: "/practice-areas/student-defense",
      iconSrc: "/lovable-uploads/a7532ce8-b0fb-46f0-a8d9-1c0cdb28aba6.png"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link 
              key={index}
              to={service.link}
              className="group block p-8 rounded-lg border border-summit-blue-100 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6">
                  <img 
                    src={service.iconSrc} 
                    alt={`${service.title} icon`}
                    className="h-20 w-20 object-contain mx-auto"
                    style={{
                      filter: 'brightness(0) saturate(100%) invert(26%) sepia(74%) saturate(1247%) hue-rotate(201deg) brightness(95%) contrast(95%)'
                    }}
                  />
                </div>
                <h3 className="text-xl font-bold mb-4 text-summit-blue-700 group-hover:text-summit-blue-800 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
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
