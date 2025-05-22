
import React from "react";
import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Fighting for Your Freedom Starts With a Conversation
          </h2>
          <p className="text-xl mb-8">
            Don't face criminal charges alone. Schedule your free consultation with Attorney Joe Brava today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-white">
              <Phone className="mr-2 h-5 w-5" />
              Call 508-454-0822
            </Button>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
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
