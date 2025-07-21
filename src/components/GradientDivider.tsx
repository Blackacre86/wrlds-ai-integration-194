
import React from 'react';

interface GradientDividerProps {
  variant?: 'thin' | 'medium' | 'thick';
  direction?: 'horizontal' | 'diagonal';
  color?: 'gray' | 'black' | 'white';
  className?: string;
}

const GradientDivider: React.FC<GradientDividerProps> = ({
  variant = 'thin',
  direction = 'horizontal',
  color = 'gray',
  className = ''
}) => {
  const heights = {
    thin: 'h-1',
    medium: 'h-2',
    thick: 'h-4'
  };

  const gradients = {
    gray: 'bg-gradient-to-r from-transparent via-gray-300 to-transparent',
    black: 'bg-gradient-to-r from-transparent via-black to-transparent',
    white: 'bg-gradient-to-r from-transparent via-white to-transparent'
  };

  const diagonalGradients = {
    gray: 'bg-gradient-to-br from-transparent via-gray-300 to-transparent',
    black: 'bg-gradient-to-br from-transparent via-black to-transparent',
    white: 'bg-gradient-to-br from-transparent via-white to-transparent'
  };

  return (
    <div className={`w-full ${className}`}>
      <div 
        className={`
          ${heights[variant]} 
          ${direction === 'horizontal' ? gradients[color] : diagonalGradients[color]}
          ${direction === 'diagonal' ? 'transform -skew-y-1' : ''}
          transition-all duration-500 hover:opacity-80
        `}
      />
    </div>
  );
};

export default GradientDivider;
