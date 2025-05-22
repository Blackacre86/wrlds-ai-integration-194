
import React from "react";
import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-800 to-blue-900 text-white relative overflow-hidden">
      {/* Mountain Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/3253b549-78e5-4c96-8b31-1743186d65d8.png" 
          alt="Mountain Summit" 
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-8 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Fighting for Your Freedom Starts With a Conversation
          </h2>
          <p className="text-xl mb-8 text-center text-blue-100">
            Don't face criminal charges alone. Schedule your free consultation with Attorney Joe Brava today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-white">
              <Phone className="mr-2 h-5 w-5" />
              Call 508-454-0822
            </Button>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-500/10">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
