
import React from 'react';

interface BackgroundPatternProps {
  variant?: 'dots' | 'lines' | 'grid';
  opacity?: 'light' | 'medium' | 'subtle';
  className?: string;
}

const BackgroundPattern: React.FC<BackgroundPatternProps> = ({
  variant = 'dots',
  opacity = 'subtle',
  className = ''
}) => {
  const opacities = {
    light: 'opacity-5',
    medium: 'opacity-10',
    subtle: 'opacity-3'
  };

  const patterns = {
    dots: (
      <svg width="60" height="60" viewBox="0 0 60 60" className="absolute inset-0 w-full h-full">
        <circle cx="30" cy="30" r="2" fill="currentColor" />
      </svg>
    ),
    lines: (
      <svg width="60" height="60" viewBox="0 0 60 60" className="absolute inset-0 w-full h-full">
        <line x1="0" y1="30" x2="60" y2="30" stroke="currentColor" strokeWidth="1" />
      </svg>
    ),
    grid: (
      <svg width="60" height="60" viewBox="0 0 60 60" className="absolute inset-0 w-full h-full">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    )
  };

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <div className={`text-gray-400 ${opacities[opacity]}`}>
        {patterns[variant]}
      </div>
    </div>
  );
};

export default BackgroundPattern;
