
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface BlogProgressTrackerProps {
  steps: string[];
  onStepClick?: (stepIndex: number) => void;
}

const BlogProgressTracker: React.FC<BlogProgressTrackerProps> = ({ 
  steps,
  onStepClick
}) => {
  const handleStepClick = (stepIndex: number) => {
    if (onStepClick) {
      onStepClick(stepIndex);
    } else {
      // Default behavior: scroll to section
      const sectionId = `step-${stepIndex + 1}`;
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <Card className="sticky top-20 z-10 border-2 border-black mb-8">
      <CardContent className="p-4">
        <div className="space-y-2">
          <h4 className="font-semibold text-black mb-3">Process Steps</h4>
          {steps.map((step, index) => (
            <div 
              key={index}
              onClick={() => handleStepClick(index)}
              className="flex items-center space-x-3 p-2 rounded transition-all duration-300 cursor-pointer hover:bg-gray-100 text-gray-600 hover:text-black"
            >
              <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold bg-gray-200 hover:bg-black hover:text-white transition-colors">
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
