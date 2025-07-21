import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { useContentContext } from '@/components/ContentProvider';
const SummitAdvantage = () => {
  const {
    getContent
  } = useContentContext();
  const advantagesContent = getContent('advantages');
  return <section id="summit-advantage" className="py-8 md:py-12 px-4 md:px-12 bg-gradient-to-b from-gray-50 via-gray-50 to-transparent pb-0">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 md:mb-12">
          <div className="mb-4">
            
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
            {advantagesContent?.title || "Why Choose Summit Law"}
          </h2>
          <p className="text-gray-800 max-w-3xl mx-auto leading-relaxed">
            {advantagesContent?.subtitle || "Experience the difference that strategic thinking, cutting-edge technology, and personalized attention can make in your criminal defense case."}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {advantagesContent?.items?.map((advantage: any, index: number) => <Card key={index} className="bg-white border-gray-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group overflow-hidden min-h-[420px] flex flex-col">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="mb-4 overflow-hidden rounded-lg flex-shrink-0">
                  <img src={advantage.image} alt={advantage.title} className="w-full h-48 object-cover rounded-lg grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500" />
                </div>
                <div className="flex flex-col flex-1 items-start">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-black transition-colors duration-300">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed flex-1 text-left">
                    {advantage.description}
                  </p>
                </div>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default SummitAdvantage;