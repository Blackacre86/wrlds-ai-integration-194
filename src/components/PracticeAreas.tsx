
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Gavel } from 'lucide-react';
import { useContentContext } from '@/components/ContentProvider';

const PracticeAreas = () => {
  const { getContent } = useContentContext();
  const practiceContent = getContent('practiceAreas');

  return (
    <section id="practice-areas" className="py-12 md:py-24 px-4 md:px-12 bg-gray-50">
      <article itemScope itemType="https://schema.org/LegalService">
        <div className="container mx-auto max-w-6xl">
        <div className="mb-8 md:mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Gavel size={20} className="text-black" />
            <Badge variant="outline" className="text-base px-4 py-2 border-black text-black bg-transparent">
              Legal Services
            </Badge>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black" itemProp="name">
            {practiceContent?.title || "Practice Areas"}
          </h2>
          <p className="text-gray-800 max-w-3xl" itemProp="description">
            {practiceContent?.subtitle || "Focused legal representation across key areas of Massachusetts criminal law."}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {practiceContent?.areas?.map((area: any, index: number) => (
            <Card key={index} className="bg-white border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="mb-4">
                  <img 
                    src={area.image} 
                    alt={area.title}
                    className="w-full h-48 object-cover rounded-lg grayscale"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {area.title}
                </h3>
                <p className="text-gray-700 leading-relaxed flex-1">
                  {area.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        </div>
      </article>
    </section>
  );
};

export default PracticeAreas;
