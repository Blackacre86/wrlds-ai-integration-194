
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import StructuredData from "@/components/StructuredData";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Gavel, Scale, Car, Shield } from "lucide-react";

const PracticeAreas = () => {
  const practiceAreas = [
    {
      title: "OUI/DUI Defense",
      description: "Expert defense for operating under the influence charges with strategies designed to protect your driving privileges and minimize penalties.",
      link: "/practice-areas/oui-dui",
      icon: Car
    },
    {
      title: "Domestic Violence Defense",
      description: "Strategic defense against domestic violence allegations, protecting your rights while navigating these sensitive and complex cases.",
      link: "/practice-areas/domestic-violence",
      icon: Shield
    },
    {
      title: "Drug Crimes",
      description: "Comprehensive defense against drug possession, distribution, and trafficking charges with strategies focused on case dismissal or charge reduction.",
      link: "/practice-areas/drug-crimes",
      icon: Shield
    },
    {
      title: "Violent Crimes",
      description: "Aggressive defense against assault, battery, and other violent crime charges, challenging evidence and protecting your rights throughout the process.",
      link: "/practice-areas/violent-crimes",
      icon: Gavel
    },
    {
      title: "Sex Offenses",
      description: "Strategic defense against sexual assault allegations and related charges, with careful attention to privacy, evidence examination, and constitutional rights.",
      link: "/practice-areas/sex-offenses",
      icon: Scale
    },
    {
      title: "Theft & Property Crimes",
      description: "Effective defense strategies for larceny, shoplifting, burglary, and other property crime allegations.",
      link: "/practice-areas/theft",
      icon: Shield
    },
    {
      title: "Magistrate Hearings",
      description: "Skilled representation at clerk magistrate hearings to prevent criminal charges from being issued against you.",
      link: "/practice-areas/magistrate-hearings",
      icon: Gavel
    },
    {
      title: "Motor Vehicle Offenses",
      description: "Defense against driving violations, license suspensions, and other motor vehicle-related legal issues.",
      link: "/practice-areas/motor-vehicle",
      icon: Car
    },
    {
      title: "209A Hearings",
      description: "Strategic representation in restraining order hearings to protect your rights and interests.",
      link: "/practice-areas/209a-hearings",
      icon: Scale
    },
    {
      title: "Student Defense",
      description: "Specialized defense for students facing academic disciplinary proceedings, criminal charges, or Title IX investigations.",
      link: "/practice-areas/student-defense",
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Helmet>
        <title>Practice Areas | Summit Law Criminal Defense</title>
        <meta name="description" content="Summit Law provides expert criminal defense representation across Massachusetts in areas including OUI/DUI defense, domestic violence, drug crimes, violent crimes, sex offenses, theft, and more." />
        <meta name="keywords" content="criminal defense, OUI defense, DUI lawyer, domestic violence attorney, drug crimes, violent crimes defense, sex offenses attorney, Massachusetts lawyer" />
        <meta property="og:title" content="Practice Areas | Summit Law Criminal Defense" />
        <meta property="og:description" content="Summit Law provides expert criminal defense representation across Massachusetts in areas including OUI/DUI defense, domestic violence, drug crimes, violent crimes, sex offenses, theft, and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://summitlawoffices.com/practice-areas" />
        <link rel="canonical" href="https://summitlawoffices.com/practice-areas" />
      </Helmet>

      <StructuredData 
        type="LegalService"
        title="Practice Areas | Summit Law Criminal Defense"
        description="Summit Law provides expert criminal defense representation across Massachusetts in areas including OUI/DUI defense, domestic violence, drug crimes, violent crimes, sex offenses, theft, and more."
        url="https://summitlawoffices.com/practice-areas"
      />

      <Header />
      <Breadcrumb />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-blue-800 to-blue-600 text-white">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <h1 className="text-3xl md:text-5xl font-bold text-center mb-4">
              Practice Areas
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-center text-blue-100">
              Expert criminal defense representation across a wide range of legal matters
            </p>
          </div>
          
          {/* Mountain background image */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <img 
              src="/lovable-uploads/f98ed06a-60c2-411a-99b5-ef4657787c04.png" 
              alt="Mountain Background" 
              className="w-full h-full object-cover object-center"
            />
          </div>
          
          {/* Straight blue line separator */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white"></div>
        </div>

        <section className="container mx-auto px-4 py-12">
          <p className="text-lg text-gray-700 mb-12 max-w-4xl mx-auto text-center">
            At Summit Law, Attorney Joe Brava has extensive experience representing clients in a wide range of criminal matters. Drawing on his background as a former prosecutor, he provides knowledgeable and effective defense strategies tailored to your specific situation.
          </p>
          
          {/* Minimalistic card grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {practiceAreas.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <div 
                  key={index} 
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-100 p-8"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4">
                      <IconComponent className="h-10 w-10 text-blue-700" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-3 font-serif">{area.title}</h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">{area.description}</p>
                    <Link 
                      to={area.link} 
                      className="inline-flex items-center text-blue-700 font-medium hover:text-blue-800 transition-colors"
                    >
                      Learn more 
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="bg-gray-50 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-800 mb-8">
              Why Choose Summit Law For Your Defense
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-blue-700 mb-3">Former Prosecutor Insight</h3>
                <p className="text-gray-700">
                  Attorney Joe Brava's background as a prosecutor gives him unique insight into how cases are built and prosecuted, allowing him to develop more effective defense strategies.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-blue-700 mb-3">Local Court Knowledge</h3>
                <p className="text-gray-700">
                  We have extensive experience in Massachusetts courts and understand the local legal landscape, procedures, and personalities that can affect your case.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-blue-700 mb-3">Personalized Defense</h3>
                <p className="text-gray-700">
                  We develop customized defense strategies based on the unique circumstances of your case, never applying a one-size-fits-all approach.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-10">
              <Link to="/contact">
                <Button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white border-none px-6 py-3 text-lg">
                  Contact Us for a Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PracticeAreas;
