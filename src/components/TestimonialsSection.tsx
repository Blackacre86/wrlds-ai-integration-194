
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Summit Law provided exceptional counsel during our company's merger. Their strategic approach and attention to detail were invaluable.",
      author: "Jane Thompson",
      position: "CEO, Acme Industries"
    },
    {
      quote: "The team at Summit Law delivered results beyond our expectations. Their expertise in intellectual property law helped protect our innovations.",
      author: "Michael Chen",
      position: "Founder, TechStart Inc."
    },
    {
      quote: "Working with Summit Law has been a game-changer for our business. Their responsiveness and legal acumen are truly outstanding.",
      author: "Sarah Rodriguez",
      position: "General Counsel, Global Retail Group"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're proud of the relationships we build and the results we deliver for our clients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-t-4 border-blue-700">
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-blue-200 mb-4" />
                <p className="text-gray-700 mb-6 italic">{testimonial.quote}</p>
                <div>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
