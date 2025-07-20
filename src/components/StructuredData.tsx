import { useContentContext } from '@/components/ContentProvider';

interface StructuredDataProps {
  type: 'attorney' | 'legal-service' | 'faq' | 'local-business';
  data?: any;
}

const StructuredData = ({ type, data }: StructuredDataProps) => {
  const { getContent } = useContentContext();

  const generateStructuredData = () => {
    const baseUrl = "https://summitlawsite.com";
    
    switch (type) {
      case 'attorney':
        const attorneyContent = getContent('attorney');
        return {
          "@context": "https://schema.org",
          "@type": "Attorney",
          "name": attorneyContent?.name || "Joe Brava",
          "jobTitle": "Criminal Defense Attorney",
          "worksFor": {
            "@type": "LegalService",
            "name": "Summit Law Offices",
            "url": baseUrl
          },
          "alumniOf": {
            "@type": "EducationalOrganization",
            "name": attorneyContent?.education || "Suffolk University Law School"
          },
          "memberOf": attorneyContent?.barAdmissions?.map((bar: string) => ({
            "@type": "Organization",
            "name": bar
          })) || [{ "@type": "Organization", "name": "Massachusetts Bar Association" }],
          "areaServed": {
            "@type": "Place",
            "name": "Massachusetts"
          },
          "telephone": attorneyContent?.phone || "508-454-0822",
          "url": `${baseUrl}/attorney/joe-brava`
        };

      case 'legal-service':
        const practiceContent = getContent('practiceAreas');
        return {
          "@context": "https://schema.org",
          "@type": "LegalService",
          "name": "Summit Law Offices",
          "description": "Strategic Criminal Defense Across Massachusetts",
          "provider": {
            "@type": "Attorney",
            "name": "Joe Brava"
          },
          "areaServed": {
            "@type": "Place",
            "name": "Massachusetts"
          },
          "serviceType": practiceContent?.areas?.map((area: any) => area.title) || [
            "Criminal Defense",
            "Restraining Orders", 
            "Motor Vehicle Offenses",
            "Show Cause Hearings"
          ],
          "telephone": "508-454-0822",
          "url": baseUrl,
          "priceRange": "$$",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Legal Services",
            "itemListElement": practiceContent?.areas?.map((area: any, index: number) => ({
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": area.title,
                "description": area.description
              }
            })) || []
          }
        };

      case 'faq':
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What should I do if I'm arrested in Massachusetts?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Contact an experienced criminal defense attorney immediately. Do not speak to police without legal representation present."
              }
            },
            {
              "@type": "Question", 
              "name": "How much does criminal defense representation cost?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Legal fees vary based on case complexity. Summit Law Offices offers free consultations to discuss your case and fee structure."
              }
            },
            {
              "@type": "Question",
              "name": "What types of criminal cases does Summit Law handle?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We handle criminal defense, restraining orders, motor vehicle offenses, and show cause hearings across Massachusetts."
              }
            }
          ]
        };

      case 'local-business':
        return {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": `${baseUrl}#business`,
          "name": "Summit Law Offices",
          "description": "Strategic Criminal Defense Across Massachusetts",
          "url": baseUrl,
          "telephone": "508-454-0822",
          "areaServed": {
            "@type": "Place",
            "name": "Massachusetts"
          },
          "serviceArea": {
            "@type": "Place",
            "name": "Massachusetts"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Legal Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Criminal Defense",
                  "description": "Strategic defense for criminal charges in Massachusetts"
                }
              }
            ]
          }
        };

      default:
        return null;
    }
  };

  const structuredData = generateStructuredData();
  
  if (!structuredData) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default StructuredData;