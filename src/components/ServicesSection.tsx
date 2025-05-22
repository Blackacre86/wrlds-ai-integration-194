
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Scale, Building2, Landmark, Briefcase } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Scale className="h-8 w-8 text-blue-700" />,
      title: "Litigation",
      description: "Representing clients in civil and commercial disputes with strategic counsel and aggressive advocacy."
    },
    {
      icon: <Building2 className="h-8 w-8 text-blue-700" />,
      title: "Corporate Law",
      description: "Providing comprehensive legal guidance for businesses from formation through growth and expansion."
    },
    {
      icon: <Landmark className="h-8 w-8 text-blue-700" />,
      title: "Real Estate",
      description: "Handling all aspects of commercial and residential real estate transactions and disputes."
    },
    {
      icon: <Briefcase className="h-8 w-8 text-blue-700" />,
      title: "Intellectual Property",
      description: "Protecting your innovations, brands, and creative works through comprehensive IP services."
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Our Practice Areas</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Summit Law offers expertise across key legal disciplines to meet the diverse needs of our clients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="mb-2">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
