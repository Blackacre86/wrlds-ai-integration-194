
import React from "react";
import { Helmet } from "react-helmet-async";

type StructuredDataProps = {
  type?: "LegalService" | "Attorney" | "PracticeArea";
  title?: string;
  description?: string;
  url?: string;
};

const StructuredData = ({ 
  type = "LegalService", 
  title = "Summit Law - Criminal Defense Attorney",
  description = "Expert criminal defense representation in Massachusetts with former prosecutor advantage",
  url = "https://summitlawoffices.com"
}: StructuredDataProps) => {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": type === "LegalService" ? "LegalService" : "Attorney",
    "name": "Summit Law",
    "alternateName": "Law Offices of Joe Brava",
    "description": description,
    "url": url,
    "telephone": "508-454-0822",
    "email": "Joe@summitlawoffices.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1042 Main Street, Suite C",
      "addressLocality": "Clinton",
      "addressRegion": "MA",
      "postalCode": "01510",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "42.4170",
      "longitude": "-71.6828"
    },
    "areaServed": [
      {
        "@type": "State",
        "name": "Massachusetts"
      }
    ],
    "serviceType": "Criminal Defense",
    "priceRange": "$$",
    "knowsAbout": [
      "OUI Defense",
      "Drug Crime Defense", 
      "Domestic Violence Defense",
      "Violent Crime Defense",
      "Sex Crime Defense",
      "Theft Defense",
      "Motor Vehicle Offenses",
      "Student Defense",
      "Magistrate Hearings",
      "209A Hearings"
    ],
    "attorney": {
      "@type": "Person",
      "name": "Joe Brava",
      "jobTitle": "Criminal Defense Attorney",
      "alumniOf": "Former Prosecutor",
      "knowsLanguage": "English"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(baseSchema)}
      </script>
    </Helmet>
  );
};

export default StructuredData;
