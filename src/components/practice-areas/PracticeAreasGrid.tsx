
import React from "react";
import PracticeAreaCard from "./PracticeAreaCard";
import { Gavel, Scale, Car, Shield, Handcuffs } from "lucide-react";

const PracticeAreasGrid = () => {
  const practiceAreas = [
    {
      title: "OUI/DUI Defense",
      description: "Expert defense for operating under the influence charges with strategies designed to protect your driving privileges and minimize penalties.",
      link: "/practice-areas/oui-dui",
      icon: Car
    },
    {
      title: "Domestic Violence Defense",
      description: "Strategic defense against domestic violence allegations, protecting your rights while navigating these sensitive and complex cases.",
      link: "/practice-areas/domestic-violence",
      icon: Handcuffs
    },
    {
      title: "Drug Crimes",
      description: "Comprehensive defense against drug possession, distribution, and trafficking charges with strategies focused on case dismissal or charge reduction.",
      link: "/practice-areas/drug-crimes",
      icon: Shield
    },
    {
      title: "Violent Crimes",
      description: "Aggressive defense against assault, battery, and other violent crime charges, challenging evidence and protecting your rights throughout the process.",
      link: "/practice-areas/violent-crimes",
      icon: Gavel
    },
    {
      title: "Sex Offenses",
      description: "Strategic defense against sexual assault allegations and related charges, with careful attention to privacy, evidence examination, and constitutional rights.",
      link: "/practice-areas/sex-offenses",
      icon: Scale
    },
    {
      title: "Theft & Property Crimes",
      description: "Effective defense strategies for larceny, shoplifting, burglary, and other property crime allegations.",
      link: "/practice-areas/theft",
      icon: Scale
    },
    {
      title: "Magistrate Hearings",
      description: "Skilled representation at clerk magistrate hearings to prevent criminal charges from being issued against you.",
      link: "/practice-areas/magistrate-hearings",
      icon: Gavel
    },
    {
      title: "Motor Vehicle Offenses",
      description: "Defense against driving violations, license suspensions, and other motor vehicle-related legal issues.",
      link: "/practice-areas/motor-vehicle",
      icon: Car
    },
    {
      title: "209A Hearings",
      description: "Strategic representation in restraining order hearings to protect your rights and interests.",
      link: "/practice-areas/209a-hearings",
      icon: Scale
    },
    {
      title: "Student Defense",
      description: "Specialized defense for students facing academic disciplinary proceedings, criminal charges, or Title IX investigations.",
      link: "/practice-areas/student-defense",
      icon: Shield
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
            icon={area.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default PracticeAreasGrid;
