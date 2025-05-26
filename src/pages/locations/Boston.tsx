
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import StructuredData from "@/components/StructuredData";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Phone } from "lucide-react";

const Boston = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Helmet>
        <title>Boston Criminal Defense Attorney | Summit Law</title>
        <meta name="description" content="Experienced Boston criminal defense attorney serving Suffolk County. Former prosecutor Joe Brava provides expert defense for OUI, drug crimes, domestic violence, and violent crimes in Boston, MA." />
        <meta name="keywords" content="Boston criminal defense attorney, Boston OUI lawyer, Boston drug crime defense, Suffolk County criminal lawyer, Boston domestic violence attorney" />
        <meta property="og:title" content="Boston Criminal Defense Attorney | Summit Law" />
        <meta property="og:description" content="Experienced Boston criminal defense attorney serving Suffolk County. Former prosecutor Joe Brava provides expert defense for OUI, drug crimes, domestic violence, and violent crimes in Boston, MA." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://summitlawoffices.com/locations/boston" />
        <link rel="canonical" href="https://summitlawoffices.com/locations/boston" />
      </Helmet>
      
      <StructuredData 
        type="LegalService"
        title="Boston Criminal Defense Attorney | Summit Law"
        description="Experienced Boston criminal defense attorney serving Suffolk County. Former prosecutor Joe Brava provides expert defense for OUI, drug crimes, domestic violence, and violent crimes in Boston, MA."
        url="https://summitlawoffices.com/locations/boston"
      />
      
      <Header />
      <Breadcrumb />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-blue-800 to-blue-600 text-white">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <h1 className="text-3xl md:text-5xl font-bold text-center mb-4">
              Boston Criminal Defense Attorney
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-center text-blue-100">
              Expert criminal defense representation in Suffolk County and Greater Boston area
            </p>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
              <path fill="#ffffff" fillOpacity="1" d="M0,128L80,133.3C160,139,320,149,480,144C640,139,800,117,960,122.7C1120,128,1280,160,1360,176L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
            </svg>
          </div>
        </div>

        {/* Local Information Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6">
              Criminal Defense Services in Boston, Massachusetts
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Summit Law provides comprehensive criminal defense representation throughout Boston and Suffolk County. 
              Our office serves clients facing charges in Boston Municipal Court, Suffolk Superior Court, and surrounding jurisdictions.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-blue-700 mb-4">Courts We Serve in Boston</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Boston Municipal Court</li>
                  <li>• Suffolk Superior Court</li>
                  <li>• Roxbury District Court</li>
                  <li>• South Boston District Court</li>
                  <li>• Brighton District Court</li>
                  <li>• Dorchester District Court</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-blue-700 mb-4">Common Boston Charges We Defend</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• OUI/DUI charges</li>
                  <li>• Domestic violence allegations</li>
                  <li>• Drug possession and trafficking</li>
                  <li>• Assault and battery</li>
                  <li>• Theft and property crimes</li>
                  <li>• Student disciplinary matters</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gradient-to-r from-summit-gold-400 to-summit-gold-500 py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-summit-blue-900 mb-4">
              Need a Boston Criminal Defense Attorney?
            </h2>
            <p className="text-lg text-summit-blue-800 mb-6 max-w-2xl mx-auto">
              Contact Summit Law today for experienced representation in Boston courts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <div className="flex items-center gap-2 text-summit-blue-800">
                <Phone className="h-5 w-5" />
                <span className="font-semibold">508-454-0822</span>
              </div>
              <div className="flex items-center gap-2 text-summit-blue-800">
                <MapPin className="h-5 w-5" />
                <span>Serving Boston & Suffolk County</span>
              </div>
            </div>
            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-summit-blue-700 hover:bg-summit-blue-800 text-white border-none px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Contact Us Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Boston;
