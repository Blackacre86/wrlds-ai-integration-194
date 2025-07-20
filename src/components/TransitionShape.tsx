
import React from 'react';

interface TransitionShapeProps {
  variant?: 'wave' | 'diagonal' | 'curve' | 'angular';
  direction?: 'up' | 'down';
  color?: 'gray' | 'black' | 'white';
  className?: string;
}

const TransitionShape: React.FC<TransitionShapeProps> = ({
  variant = 'wave',
  direction = 'down',
  color = 'gray',
  className = ''
}) => {
  const colorClasses = {
    gray: 'fill-gray-100',
    black: 'fill-black',
    white: 'fill-white'
  };

  const shapeVariants = {
    wave: (
      <path d="M0,0 C150,100 300,0 450,50 C600,100 750,0 900,25 C1050,50 1200,0 1350,0 L1350,100 L0,100 Z" />
    ),
    diagonal: (
      <path d="M0,0 L1350,0 L1350,50 L0,100 Z" />
    ),
    curve: (
      <path d="M0,0 Q675,100 1350,0 L1350,100 L0,100 Z" />
    ),
    angular: (
      <path d="M0,0 L675,50 L1350,0 L1350,100 L0,100 Z" />
    )
  };

  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 1350 100"
        className={`w-full h-16 md:h-20 ${direction === 'up' ? 'rotate-180' : ''} transition-all duration-700 ease-in-out`}
        preserveAspectRatio="none"
      >
        <g className={`${colorClasses[color]} transition-all duration-500`}>
          {shapeVariants[variant]}
        </g>
      </svg>
    </div>
  );
};

export default TransitionShape;
