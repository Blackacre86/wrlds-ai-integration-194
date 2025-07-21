
import React, { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';

interface BlogProgressTrackerProps {
  steps: string[];
  currentStep?: number;
}

const BlogProgressTracker: React.FC<BlogProgressTrackerProps> = ({ 
  steps, 
  currentStep = 0 
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
      
      // Calculate which step we're on based on scroll position
      const stepProgress = Math.floor((progress / 100) * steps.length);
      setActiveStep(Math.min(stepProgress, steps.length - 1));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [steps.length]);

  return (
    <Card className="sticky top-20 z-10 border-2 border-black mb-8">
      <CardContent className="p-4">
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">Reading Progress</span>
            <span className="text-sm text-gray-500">{Math.round(scrollProgress)}%</span>
          </div>
          <Progress value={scrollProgress} className="h-2" />
        </div>
        
        <div className="space-y-2">
          <h4 className="font-semibold text-black mb-3">Process Steps</h4>
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`flex items-center space-x-3 p-2 rounded transition-all duration-300 ${
                index <= activeStep ? 'bg-black text-white' : 'text-gray-600'
              }`}
            >
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                index <= activeStep ? 'bg-white text-black' : 'bg-gray-200'
              }`}>
                {index + 1}
              </div>
              <span className="text-sm font-medium">{step}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogProgressTracker;
