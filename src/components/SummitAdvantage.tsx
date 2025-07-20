
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Zap, Shield, Target, Users } from 'lucide-react';

const SummitAdvantage = () => {
  const advantages = [
    {
      icon: Shield,
      title: "Former Prosecutor Insight",
      description: "Understanding prosecution strategies from the inside gives us a unique advantage in building your defense."
    },
    {
      icon: Target,
      title: "Strategic Case Analysis",
      description: "Every case receives thorough analysis to identify the best defense strategies and potential weaknesses in the prosecution's case."
    },
    {
      icon: Zap,
      title: "AI-Enhanced Research",
      description: "Cutting-edge AI technology helps us analyze case law, identify precedents, and develop stronger legal arguments."
    },
    {
      icon: Users,
      title: "Personal Attention",
      description: "Direct access to your attorney throughout your case with responsive communication and regular updates."
    }
  ];

  return (
    <section id="summit-advantage" className="py-12 md:py-24 px-4 md:px-12 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 md:mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Zap size={20} className="text-black" />
            <Badge variant="outline" className="text-base px-4 py-2 border-black text-black bg-transparent">
              The Summit Advantage
            </Badge>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">Why Choose Summit Law</h2>
          <p className="text-gray-800 max-w-3xl mx-auto">
            Experience the difference that strategic thinking, cutting-edge technology, 
            and personalized attention can make in your criminal defense case.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {advantages.map((advantage, index) => (
            <Card key={index} className="bg-white border-gray-200 hover:shadow-lg transition-shadow duration-300 h-48">
              <CardContent className="p-6 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-black text-white rounded-lg">
                    <advantage.icon size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {advantage.title}
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed flex-1">
                  {advantage.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SummitAdvantage;
