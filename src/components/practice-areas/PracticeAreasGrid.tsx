
import React from "react";
import PracticeAreaCard from "./PracticeAreaCard";

const PracticeAreasGrid = () => {
  const practiceAreas = [
    {
      title: "OUI/DUI Defense",
      description: "Expert defense for operating under the influence charges with strategies designed to protect your driving privileges and minimize penalties.",
      link: "/practice-areas/oui-dui",
      iconSrc: "/lovable-uploads/6ab07878-5981-4ef7-b689-709b1e62cc5d.png"
    },
    {
      title: "Domestic Violence Defense",
      description: "Strategic defense against domestic violence allegations, protecting your rights while navigating these sensitive and complex cases.",
      link: "/practice-areas/domestic-violence",
      iconSrc: "/lovable-uploads/cbb63e3c-159d-41d5-92d5-60c81fc7cc0e.png"
    },
    {
      title: "Drug Crimes",
      description: "Comprehensive defense against drug possession, distribution, and trafficking charges with strategies focused on case dismissal or charge reduction.",
      link: "/practice-areas/drug-crimes",
      iconSrc: "/lovable-uploads/6c46386c-f77c-4d8c-86cc-a0ea0d6f987b.png"
    },
    {
      title: "Violent Crimes",
      description: "Aggressive defense against assault, battery, and other violent crime charges, challenging evidence and protecting your rights throughout the process.",
      link: "/practice-areas/violent-crimes",
      iconSrc: "/lovable-uploads/e2960c62-58f4-4527-93eb-97690136e15c.png"
    },
    {
      title: "Federal Crimes",
      description: "Experienced representation in complex federal investigations and indictments, providing strategic defense at the highest level.",
      link: "/practice-areas/federal-crimes",
      iconSrc: "/lovable-uploads/7e7181e8-3f65-47b3-86e4-01443fc4da0f.png"
    },
    {
      title: "Theft & Property Crimes",
      description: "Effective defense strategies for larceny, shoplifting, burglary, and other property crime allegations.",
      link: "/practice-areas/theft",
      iconSrc: "/lovable-uploads/8ca7c586-fa4c-46ba-aaad-3ac8e500b520.png"
    }
  ];

  return (
    <section className="bg-slate-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-serif text-center mb-4 text-summit-navy-900">
          Practice Areas
        </h2>
        <p className="text-lg text-slate-600 mb-16 max-w-4xl mx-auto text-center leading-relaxed">
          At Summit Law, Attorney Joe Brava has extensive experience representing clients in a wide range of criminal matters. Drawing on his background as a former prosecutor, he provides knowledgeable and effective defense strategies tailored to your specific situation.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {practiceAreas.map((area, index) => (
            <PracticeAreaCard
              key={index}
              title={area.title}
              description={area.description}
              link={area.link}
              iconSrc={area.iconSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreasGrid;
