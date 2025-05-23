
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
    <section className="py-20 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-pattern-mountain opacity-5 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">Client Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results for real people facing criminal charges in Massachusetts.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-t-4 border-blue-700 hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] overflow-hidden">
              <CardContent className="pt-8 pb-6 px-6">
                <div className="bg-blue-100/50 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <Quote className="h-8 w-8 text-blue-600" />
                </div>
                <p className="text-gray-700 mb-8 italic text-lg">{testimonial.quote}</p>
                <div className="pt-4 border-t border-gray-100">
                  <p className="font-bold text-lg">{testimonial.author}</p>
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
