
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import StructuredData from "@/components/StructuredData";
import PracticeAreasHero from "@/components/practice-areas/PracticeAreasHero";
import PracticeAreasGrid from "@/components/practice-areas/PracticeAreasGrid";
import WhyChooseUsSection from "@/components/practice-areas/WhyChooseUsSection";
import { Helmet } from "react-helmet-async";

const PracticeAreas = () => {
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
        <PracticeAreasHero />
        <PracticeAreasGrid />
        <WhyChooseUsSection />
      </main>
      <Footer />
    </div>
  );
};

export default PracticeAreas;
