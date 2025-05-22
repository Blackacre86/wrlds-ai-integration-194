
import React from "react";
import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-800 to-blue-900 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-8 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Fighting for Your Freedom Starts With a Conversation
          </h2>
          <p className="text-xl mb-8 text-center text-blue-100">
            Don't face criminal charges alone. Schedule your free consultation with Attorney Joe Brava today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white">
              <Phone className="mr-2 h-5 w-5" />
              Call 508-454-0822
            </Button>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="backdrop-blur-sm bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Add mountain silhouette in background */}
      <div className="absolute bottom-0 right-0 w-full opacity-5 pointer-events-none">
        <img 
          src="/lovable-uploads/30517370-4045-4723-b7f5-447436e4e589.png" 
          alt="Mountain Background" 
          className="w-full h-auto max-h-96 object-contain"
        />
      </div>
    </section>
  );
};

export default CTASection;
