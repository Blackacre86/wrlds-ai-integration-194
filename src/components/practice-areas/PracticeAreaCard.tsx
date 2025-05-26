
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

type PracticeAreaCardProps = {
  title: string;
  description: string;
  link: string;
  iconSrc: string;
};

const PracticeAreaCard = ({ title, description, link, iconSrc }: PracticeAreaCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 p-10 group">
      <div className="flex flex-col items-center text-center">
        <div className="mb-6">
          <img 
            src={iconSrc} 
            alt={`${title} icon`}
            className="h-12 w-12 object-contain filter brightness-0 saturate-100"
            style={{
              filter: 'brightness(0) saturate(100%) invert(26%) sepia(74%) saturate(1247%) hue-rotate(201deg) brightness(95%) contrast(95%)'
            }}
          />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4 font-serif leading-tight">{title}</h2>
        <p className="text-gray-600 mb-8 leading-relaxed text-base">{description}</p>
        <Link 
          to={link} 
          className="inline-flex items-center text-blue-700 font-semibold hover:text-blue-800 transition-colors duration-300 group-hover:translate-x-1 transform"
        >
          Learn more 
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default PracticeAreaCard;
