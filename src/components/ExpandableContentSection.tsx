
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible';
import { ChevronDown } from 'lucide-react';
import { ContentSection } from '@/data/blogPosts';
import EnhancedBlogContent from '@/components/EnhancedBlogContent';

interface ExpandableContentSectionProps {
  title: string;
  content: ContentSection[];
  stepNumber?: number;
  defaultOpen?: boolean;
}

const ExpandableContentSection: React.FC<ExpandableContentSectionProps> = ({
  title,
  content,
  stepNumber,
  defaultOpen = false
}) => {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);

  return (
    <Card className="border-2 border-black mb-6 overflow-hidden">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger className="w-full">
          <div className="bg-black text-white p-6 flex items-center justify-between hover:bg-gray-800 transition-colors">
            <div className="flex items-center space-x-4">
              {stepNumber && (
                <div className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                  {stepNumber}
                </div>
              )}
              <h3 className="text-xl font-semibold text-left">{title}</h3>
            </div>
            <ChevronDown 
              className={`h-5 w-5 transition-transform duration-200 ${
                isOpen ? 'rotate-180' : ''
              }`} 
            />
          </div>
        </CollapsibleTrigger>
        
        <CollapsibleContent>
          <CardContent className="p-6 bg-white">
            <EnhancedBlogContent content={content} />
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
};

export default ExpandableContentSection;
