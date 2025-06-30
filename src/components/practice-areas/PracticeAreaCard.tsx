
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
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-200 p-8 group">
      <div className="flex flex-col items-center text-center">
        <div className="mb-6">
          <img 
            src={iconSrc} 
            alt={`${title} icon`}
            className="h-16 w-16 object-contain"
            style={{
              filter: 'brightness(0) saturate(100%) invert(12%) sepia(52%) saturate(1738%) hue-rotate(201deg) brightness(91%) contrast(102%)'
            }}
          />
        </div>
        <h3 className="text-xl font-bold text-summit-navy-900 mb-4 font-serif leading-tight">{title}</h3>
        <p className="text-slate-600 mb-6 leading-relaxed text-sm">{description}</p>
        <Link 
          to={link} 
          className="inline-flex items-center text-summit-orange-500 font-semibold hover:text-summit-orange-600 transition-colors duration-300 group-hover:translate-x-1 transform"
        >
          Learn more 
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default PracticeAreaCard;
