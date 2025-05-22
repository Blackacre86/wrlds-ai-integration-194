
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface PracticeAreaDetailProps {
  title: string;
  description: string;
  metaDescription: string;
  content: React.ReactNode;
}

const PracticeAreaDetail: React.FC<PracticeAreaDetailProps> = ({
  title,
  description,
  metaDescription,
  content
}) => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Helmet>
        <title>{`${title} | Summit Law Criminal Defense`}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={`${title.toLowerCase()}, criminal defense, attorney, Massachusetts, legal representation, Summit Law`} />
        <meta property="og:title" content={`${title} | Summit Law Criminal Defense`} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://summitlawoffices.com/practice-areas/${title.toLowerCase().replace(/\s+/g, "-")}`} />
        <link rel="canonical" href={`https://summitlawoffices.com/practice-areas/${title.toLowerCase().replace(/\s+/g, "-")}`} />
      </Helmet>
      
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-blue-800 to-blue-600 text-white">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <h1 className="text-3xl md:text-5xl font-bold text-center mb-4">
              {title}
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-center text-blue-100">
              {description}
            </p>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
              <path fill="#ffffff" fillOpacity="1" d="M0,128L80,133.3C160,139,320,149,480,144C640,139,800,117,960,122.7C1120,128,1280,160,1360,176L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
            </svg>
          </div>
        </div>

        {/* Main Content */}
        <section className="container mx-auto px-4 py-12">
          <div className="prose prose-blue max-w-4xl mx-auto">
            {content}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-blue-50 py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">
              Need Expert Legal Representation?
            </h2>
            <p className="text-blue-700 max-w-2xl mx-auto mb-8">
              Our experienced attorneys are ready to help you navigate your legal challenges with personalized strategies and dedicated advocacy.
            </p>
            <Link to="/contact">
              <Button className="bg-blue-800 hover:bg-blue-900 text-lg px-6 py-3">
                Contact Us for a Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PracticeAreaDetail;
