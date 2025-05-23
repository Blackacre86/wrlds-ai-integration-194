
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const PracticeAreas = () => {
  const practiceAreas = [
    {
      title: "OUI/DUI Defense",
      description: "Expert defense for operating under the influence charges with strategies designed to protect your driving privileges and minimize penalties.",
      link: "/practice-areas/oui-dui"
    },
    {
      title: "Domestic Violence Defense",
      description: "Strategic defense against domestic violence allegations, protecting your rights while navigating these sensitive and complex cases.",
      link: "/practice-areas/domestic-violence"
    },
    {
      title: "Drug Crimes",
      description: "Comprehensive defense against drug possession, distribution, and trafficking charges with strategies focused on case dismissal or charge reduction.",
      link: "/practice-areas/drug-crimes"
    },
    {
      title: "Violent Crimes",
      description: "Aggressive defense against assault, battery, and other violent crime charges, challenging evidence and protecting your rights throughout the process.",
      link: "/practice-areas/violent-crimes"
    },
    {
      title: "Sex Offenses",
      description: "Strategic defense against sexual assault allegations and related charges, with careful attention to privacy, evidence examination, and constitutional rights.",
      link: "/practice-areas/sex-offenses"
    },
    {
      title: "Theft & Property Crimes",
      description: "Effective defense strategies for larceny, shoplifting, burglary, and other property crime allegations.",
      link: "/practice-areas/theft"
    },
    {
      title: "Magistrate Hearings",
      description: "Skilled representation at clerk magistrate hearings to prevent criminal charges from being issued against you.",
      link: "/practice-areas/magistrate-hearings"
    },
    {
      title: "Motor Vehicle Offenses",
      description: "Defense against driving violations, license suspensions, and other motor vehicle-related legal issues.",
      link: "/practice-areas/motor-vehicle"
    },
    {
      title: "209A Hearings",
      description: "Strategic representation in restraining order hearings to protect your rights and interests.",
      link: "/practice-areas/209a-hearings"
    },
    {
      title: "Student Defense",
      description: "Specialized defense for students facing academic disciplinary proceedings, criminal charges, or Title IX investigations.",
      link: "/practice-areas/student-defense"
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

      <Header />
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
          <div className="absolute bottom-0 left-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
              <path fill="#ffffff" fillOpacity="1" d="M0,128L80,133.3C160,139,320,149,480,144C640,139,800,117,960,122.7C1120,128,1280,160,1360,176L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
            </svg>
          </div>
        </div>

        <section className="container mx-auto px-4 py-12">
          <p className="text-lg text-gray-700 mb-8 max-w-4xl mx-auto text-center">
            At Summit Law, our attorneys have extensive experience representing clients in a wide range of criminal matters. Drawing on our background as former prosecutors, we provide knowledgeable and effective defense strategies tailored to your specific situation.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practiceAreas.map((area, index) => (
              <div key={index} className="p-6 bg-blue-50/60 rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                <h2 className="text-xl font-semibold text-blue-800 mb-3">{area.title}</h2>
                <p className="text-gray-700 mb-4">{area.description}</p>
                <Link to={area.link} className="inline-flex items-center text-blue-700 font-medium hover:underline">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
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
                  Our attorneys' background as prosecutors gives us unique insight into how cases are built and prosecuted, allowing us to develop more effective defense strategies.
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
