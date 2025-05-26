
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import StructuredData from "@/components/StructuredData";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

type PracticeAreaDetailProps = {
  title: string;
  description: string;
  metaDescription: string;
  content: React.ReactNode;
};

const PracticeAreaDetail = ({
  title,
  description,
  metaDescription,
  content,
}: PracticeAreaDetailProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Helmet>
        <title>{title} | Summit Law</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={`${title} | Summit Law`} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={`https://summitlawoffices.com${window.location.pathname}`} />
      </Helmet>
      
      <StructuredData 
        type="PracticeArea"
        title={title}
        description={metaDescription}
        url={`https://summitlawoffices.com${window.location.pathname}`}
      />
      
      <Header />
      <Breadcrumb />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-blue-800 to-blue-600 text-white">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <h1 className="text-3xl md:text-5xl font-bold text-center mb-4">
              {title}
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-center text-blue-100">
              {description}
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

        {/* Content Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto prose prose-lg prose-blue">
            {content}
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-gradient-to-r from-summit-gold-400 to-summit-gold-500 py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-summit-blue-900 mb-4">
              Ready to Protect Your Rights?
            </h2>
            <p className="text-lg text-summit-blue-800 mb-6 max-w-2xl mx-auto">
              Don't wait - contact Summit Law today for experienced criminal defense representation.
            </p>
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

export default PracticeAreaDetail;
