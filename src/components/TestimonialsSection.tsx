
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Attorney Brava's experience as a former prosecutor gave me confidence in his ability to handle my OUI case. His strategy resulted in reduced charges that saved my license.",
      author: "Michael R.",
      position: "OUI Defense Client"
    },
    {
      quote: "When my son was facing serious charges that threatened his college future, Joe stepped in with a thorough defense strategy. His understanding of student defense issues made all the difference.",
      author: "Sarah T.",
      position: "Parent of Student Defense Client"
    },
    {
      quote: "I was falsely accused of domestic violence and facing devastating consequences. Joe's detailed investigation and courtroom expertise cleared my name completely.",
      author: "David L.",
      position: "Domestic Violence Defense Client"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Client Success Stories</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Real results for real people facing criminal charges in Massachusetts.
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
