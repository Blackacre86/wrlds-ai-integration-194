import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const SummitAdvantage = () => {
  const advantages = [
    {
      image: "/lovable-uploads/810c64ae-5dff-4a0a-ab8b-555b99cf604a.png",
      title: "Evidence Strategy Optimization",
      description: "AI-powered analysis of evidence patterns and prosecution strategies to identify the strongest defense approaches and potential case weaknesses."
    },
    {
      image: "/lovable-uploads/92cc4676-3f43-4a6e-9bbe-1cb528cc4386.png",
      title: "Smart Evidence Presentation",
      description: "Advanced visualization and presentation tools that help judges and juries understand complex evidence in clear, compelling ways."
    },
    {
      image: "/lovable-uploads/13a21a8f-d1ab-4a67-9b0e-0efc97b1ab04.png",
      title: "AI-Powered Legal Research Agents",
      description: "Cutting-edge AI technology that analyzes thousands of cases to find relevant precedents and build stronger legal arguments for your defense."
    }
  ];

  return (
    <section id="summit-advantage" className="py-12 md:py-24 px-4 md:px-12 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 md:mb-12">
          <div className="mb-4">
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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => (
            <Card key={index} className="bg-white border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="mb-4">
                  <img 
                    src={advantage.image} 
                    alt={advantage.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {advantage.title}
                </h3>
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
