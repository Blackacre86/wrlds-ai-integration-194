
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Gavel } from 'lucide-react';
import { useContentContext } from '@/components/ContentProvider';

const PracticeAreas = () => {
  const { getContent } = useContentContext();
  const practiceContent = getContent('practiceAreas');

  return (
    <section id="practice-areas" className="py-12 md:py-16 px-4 md:px-12 bg-gradient-to-b from-transparent via-white to-white">
      <article itemScope itemType="https://schema.org/LegalService">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black" itemProp="name">
              {practiceContent?.title || "Practice Areas"}
            </h2>
            <p className="text-gray-800 max-w-3xl mx-auto leading-relaxed" itemProp="description">
              {practiceContent?.subtitle || "Focused legal representation across key areas of Massachusetts criminal law."}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {practiceContent?.areas?.map((area: any, index: number) => (
              <Card key={index} className="bg-gray-50 border-gray-200 hover:shadow-xl hover:-translate-y-2 focus-within:shadow-xl focus-within:-translate-y-2 transition-all duration-500 ease-out group overflow-hidden touch-manipulation">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-4 overflow-hidden rounded-lg">
                    <img 
                      src={area.image} 
                      alt={area.title} 
                      className="w-full h-48 object-cover rounded-lg grayscale saturate-0 brightness-105 group-hover:scale-110 group-focus-within:scale-110 active:scale-110 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform" 
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-black group-focus-within:text-black transition-colors duration-500 ease-out">
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
