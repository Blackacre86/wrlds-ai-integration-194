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
      title: "Sex Offenses",
      description: "Strategic defense against sexual assault allegations and related charges, with careful attention to privacy, evidence examination, and constitutional rights.",
      link: "/practice-areas/sex-offenses",
      iconSrc: "/lovable-uploads/7e7181e8-3f65-47b3-86e4-01443fc4da0f.png"
    },
    {
      title: "Theft & Property Crimes",
      description: "Effective defense strategies for larceny, shoplifting, burglary, and other property crime allegations.",
      link: "/practice-areas/theft",
      iconSrc: "/lovable-uploads/8ca7c586-fa4c-46ba-aaad-3ac8e500b520.png"
    },
    {
      title: "Magistrate Hearings",
      description: "Skilled representation at clerk magistrate hearings to prevent criminal charges from being issued against you.",
      link: "/practice-areas/magistrate-hearings",
      iconSrc: "/lovable-uploads/38d5632d-ff90-4405-95e5-fad362ff0396.png"
    },
    {
      title: "Motor Vehicle Offenses",
      description: "Defense against driving violations, license suspensions, and other motor vehicle-related legal issues.",
      link: "/practice-areas/motor-vehicle",
      iconSrc: "/lovable-uploads/b59dd472-a3c0-4553-b4c7-c980e89b1346.png"
    },
    {
      title: "209A Hearings",
      description: "Strategic representation in restraining order hearings to protect your rights and interests.",
      link: "/practice-areas/209a-hearings",
      iconSrc: "/lovable-uploads/401f7142-9093-41ba-9b21-30ea6195984d.png"
    },
    {
      title: "Student Defense",
      description: "Specialized defense for students facing academic disciplinary proceedings, criminal charges, or Title IX investigations.",
      link: "/practice-areas/student-defense",
      iconSrc: "/lovable-uploads/a7532ce8-b0fb-46f0-a8d9-1c0cdb28aba6.png"
    }
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <p className="text-lg text-gray-700 mb-16 max-w-4xl mx-auto text-center leading-relaxed">
        At Summit Law, Attorney Joe Brava has extensive experience representing clients in a wide range of criminal matters. Drawing on his background as a former prosecutor, he provides knowledgeable and effective defense strategies tailored to your specific situation.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
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
    </section>
  );
};

export default PracticeAreasGrid;
