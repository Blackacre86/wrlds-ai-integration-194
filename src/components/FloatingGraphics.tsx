
import React from 'react';
import { Scale, FileText, Shield, Users } from 'lucide-react';

interface FloatingGraphicsProps {
  variant?: 'legal' | 'stats' | 'abstract';
  className?: string;
}

const FloatingGraphics: React.FC<FloatingGraphicsProps> = ({ 
  variant = 'legal', 
  className = '' 
}) => {
  const legalIcons = [
    { Icon: Scale, position: 'top-1/4 left-1/4', delay: '0s' },
    { Icon: FileText, position: 'top-1/2 right-1/3', delay: '1s' },
    { Icon: Shield, position: 'bottom-1/3 left-1/2', delay: '2s' },
    { Icon: Users, position: 'bottom-1/4 right-1/4', delay: '0.5s' }
  ];

  const statsElements = [
    { text: '1000+', label: 'Cases', position: 'top-1/3 left-1/4' },
    { text: 'Former', label: 'Prosecutor', position: 'top-1/2 right-1/4' },
    { text: '24/7', label: 'Available', position: 'bottom-1/3 left-1/3' }
  ];

  const abstractShapes = [
    { shape: 'circle', position: 'top-1/4 right-1/4', size: 'w-8 h-8' },
    { shape: 'square', position: 'top-1/2 left-1/3', size: 'w-6 h-6' },
    { shape: 'triangle', position: 'bottom-1/3 right-1/3', size: 'w-10 h-10' }
  ];

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {variant === 'legal' && legalIcons.map((item, index) => (
        <div
          key={index}
          className={`absolute ${item.position} opacity-10 animate-float`}
          style={{ animationDelay: item.delay }}
        >
          <item.Icon className="w-16 h-16 text-gray-400" />
        </div>
      ))}
      
      {variant === 'stats' && statsElements.map((item, index) => (
        <div
          key={index}
          className={`absolute ${item.position} opacity-20 text-center animate-pulse-slow`}
        >
          <div className="text-2xl font-bold text-gray-400">{item.text}</div>
          <div className="text-sm text-gray-300">{item.label}</div>
        </div>
      ))}
      
      {variant === 'abstract' && abstractShapes.map((item, index) => (
        <div
          key={index}
          className={`absolute ${item.position} ${item.size} opacity-5 animate-bounce-subtle`}
          style={{ animationDelay: `${index * 0.7}s` }}
        >
          {item.shape === 'circle' && (
            <div className="w-full h-full rounded-full bg-gray-400" />
          )}
          {item.shape === 'square' && (
            <div className="w-full h-full bg-gray-400" />
          )}
          {item.shape === 'triangle' && (
            <div className="w-full h-full bg-gray-400 transform rotate-45" />
          )}
        </div>
      ))}
    </div>
  );
};

export default FloatingGraphics;
