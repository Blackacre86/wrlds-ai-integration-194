
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Attorney Brava's experience as a former prosecutor gave me confidence in his ability to handle my OUI case. His strategy resulted in reduced charges that saved my license and my career.",
      author: "Michael R.",
      position: "OUI Defense Client",
      rating: 5,
      location: "Worcester, MA"
    },
    {
      quote: "When my son was facing serious charges that threatened his college future, Joe stepped in with a thorough defense strategy. His understanding of student defense issues and knowledge of university procedures made all the difference. My son graduated on time.",
      author: "Sarah T.",
      position: "Parent of Student Defense Client", 
      rating: 5,
      location: "Boston, MA"
    },
    {
      quote: "I was falsely accused of domestic violence and facing devastating consequences including losing my job. Joe's detailed investigation and courtroom expertise cleared my name completely. He saved my reputation and my future.",
      author: "David L.",
      position: "Domestic Violence Defense Client",
      rating: 5,
      location: "Clinton, MA"
    },
    {
      quote: "After being charged with drug possession, I thought my life was over. Attorney Brava not only got the charges dismissed but helped me understand my options for moving forward. His former prosecutor insight was invaluable.",
      author: "Jennifer M.", 
      position: "Drug Crime Defense Client",
      rating: 5,
      location: "Fitchburg, MA"
    }
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1 mb-4 justify-center">
        {[...Array(5)].map((_, index) => (
          <Star 
            key={index} 
            className={`h-5 w-5 ${index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-pattern-mountain opacity-5 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">Client Success Stories</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real results for real people facing criminal charges in Massachusetts. See what our clients say about their experience with Summit Law.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-t-4 border-blue-700 hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] overflow-hidden">
              <CardContent className="pt-8 pb-6 px-6">
                <div className="bg-blue-100/50 rounded-full w-14 h-14 flex items-center justify-center mb-6 mx-auto">
                  <Quote className="h-7 w-7 text-blue-600" />
                </div>
                {renderStars(testimonial.rating)}
                <p className="text-gray-700 mb-6 italic text-base leading-relaxed">{testimonial.quote}</p>
                <div className="pt-3 border-t border-gray-100 text-center">
                  <p className="font-bold text-base text-blue-800">{testimonial.author}</p>
                  <p className="text-sm text-gray-600 mb-1">{testimonial.position}</p>
                  <p className="text-xs text-gray-500">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 mb-6">
            Ready to join our successful clients? Contact Summit Law today for your free consultation.
          </p>
          <div className="flex justify-center">
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg p-1">
              <div className="bg-white rounded-md px-6 py-3">
                <p className="text-blue-800 font-semibold text-lg">⭐⭐⭐⭐⭐ 5.0 Client Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
