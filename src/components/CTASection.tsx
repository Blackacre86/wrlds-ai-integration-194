
import React from "react";
import { Button } from "@/components/ui/button";
import { Phone, Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-900 to-slate-900 text-white relative overflow-hidden">
      {/* Mountain Background Image with enhanced overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/1469474968028-56623f02e42e.jpg" 
          alt="Mountain Summit" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/80 to-slate-900/80 mix-blend-multiply"></div>
      </div>
      
      {/* Subtle animated mountain pattern */}
      <div className="absolute inset-0 bg-pattern-mountain opacity-10"></div>
      
      {/* Diagonal design elements */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-bl from-blue-950 to-transparent transform skew-y-2 z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="relative backdrop-blur-md bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-xl p-8 md:p-12 max-w-5xl mx-auto shadow-2xl overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-teal-500/20 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-12 -left-12 w-36 h-36 bg-blue-400/20 rounded-full blur-xl"></div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-teal-100">
              Fighting for Your Freedom Starts With a Conversation
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-10 text-center text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Don't face criminal charges alone. Schedule your free consultation with Attorney Joe Brava today.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-8">
            <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white px-8 py-7 text-lg font-semibold relative overflow-hidden group transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg">
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-yellow-400 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              <Phone className="mr-2 h-5 w-5 relative z-10" />
              <span className="relative z-10">Call 508-454-0822</span>
            </Button>
            
            <Link to="/contact" className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-400 to-blue-400 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-500 group-hover:duration-200"></div>
              <Button size="lg" variant="outline" className="relative border-teal-300/50 text-teal-200 hover:text-white hover:bg-blue-900/30 px-8 py-7 text-lg font-semibold w-full">
                <Calendar className="mr-2 h-5 w-5" />
                <span>Schedule Free Consultation</span>
                <ArrowRight className="ml-2 h-4 w-4 opacity-70 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Angled bottom edge */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 40" className="fill-white w-full h-10 transform translate-y-1">
          <path d="M0,0L60,5.3C120,11,240,21,360,24C480,27,600,21,720,16C840,11,960,5,1080,8C1200,11,1320,21,1380,26.7L1440,32L1440,40L1380,40C1320,40,1200,40,1080,40C960,40,840,40,720,40C600,40,480,40,360,40C240,40,120,40,60,40L0,40Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default CTASection;
