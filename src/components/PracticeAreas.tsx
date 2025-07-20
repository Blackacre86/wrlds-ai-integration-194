
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Gavel } from 'lucide-react';

const PracticeAreas = () => {
  const practiceAreas = [
    {
      title: "Criminal Defense",
      description: "Comprehensive defense for felonies and misdemeanors in all Massachusetts courts. From initial arraignment through trial, we fight to protect your rights and freedom.",
      image: "/lovable-uploads/c5bdf326-c48c-4785-9f8c-5f9b049f03d1.png"
    },
    {
      title: "Restraining Orders",
      description: "Expert representation for 209A domestic violence restraining orders and 258E harassment prevention orders. We handle both defense and petitioning.",
      image: "/lovable-uploads/restraining-orders.jpg"
    },
    {
      title: "Motor Vehicle Offenses",
      description: "Skilled defense for OUI/DUI, reckless driving, suspended license charges, and all motor vehicle violations throughout Massachusetts.",
      image: "/lovable-uploads/f2b58f1f-cad1-4db7-877d-b231214922c0.png"
    },
    {
      title: "Show Cause Hearings",
      description: "Strategic representation at Clerk Magistrate hearings and criminal applications to prevent charges from being filed against you.",
      image: "/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png"
    }
  ];

  return (
    <section id="practice-areas" className="py-12 md:py-24 px-4 md:px-12 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8 md:mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Gavel size={20} className="text-black" />
            <Badge variant="outline" className="text-base px-4 py-2 border-black text-black bg-transparent">
              Legal Services
            </Badge>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">Practice Areas</h2>
          <p className="text-gray-800 max-w-3xl">
            Focused legal representation across key areas of Massachusetts criminal law, 
            with deep expertise in both trial advocacy and pre-trial resolution strategies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {practiceAreas.map((area, index) => (
            <Card key={index} className="overflow-hidden bg-white border-gray-200 hover:shadow-lg transition-shadow duration-300 h-64">
              <div className="flex h-full">
                <div className="w-1/3 relative overflow-hidden">
                  <img 
                    src={area.image} 
                    alt={area.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="w-2/3 p-6 flex flex-col justify-center">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    {area.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {area.description}
                  </p>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
