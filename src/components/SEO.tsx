
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  type?: string;
  name?: string;
  imageUrl?: string;
  publishDate?: string;
  modifiedDate?: string;
  author?: string;
  category?: string;
  keywords?: string[];
  isBlogPost?: boolean;
  legalService?: {
    serviceType?: string;
    areaServed?: string;
    provider?: string;
  };
}

const SEO: React.FC<SEOProps> = ({
  title = 'Summit Law Offices - Strategic Criminal Defense Across Massachusetts',
  description = 'Attorney Joe Brava provides strategic criminal defense across Massachusetts. Former prosecutor with 1,000+ cases of experience. Call 508-454-0822 for consultation.',
  type = 'website',
  name = 'Summit Law Offices',
  imageUrl = '/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png',
  publishDate,
  modifiedDate,
  author,
  category,
  keywords = ['criminal defense attorney', 'Massachusetts lawyer', 'DUI defense', 'restraining orders', 'Clinton MA attorney', 'former prosecutor'],
  isBlogPost = false,
  legalService
}) => {
  const location = useLocation();
  const currentUrl = `https://summitlawoffices.com${location.pathname}`;
  const absoluteImageUrl = imageUrl.startsWith('http') ? imageUrl : `https://summitlawoffices.com${imageUrl}`;

  // AI-optimized route-specific content enhancement
  const getRouteSpecificData = () => {
    const path = location.pathname;
    
    if (path.includes('criminal-defense') || path === '/') {
      return {
        serviceType: 'Criminal Defense Legal Services',
        practiceArea: 'Criminal Law',
        urgency: 'high',
        aiKeywords: [
          'criminal defense lawyer Massachusetts',
          'felony defense attorney',
          'misdemeanor lawyer',
          'criminal court representation',
          'arrest defense strategy',
          'criminal charges defense'
        ]
      };
    }
    
    if (path.includes('restraining-orders')) {
      return {
        serviceType: 'Restraining Order Legal Services',
        practiceArea: 'Domestic Relations',
        urgency: 'high',
        aiKeywords: [
          '209A restraining order attorney',
          '258E harassment order lawyer',
          'domestic violence defense',
          'restraining order violation defense',
          'harassment prevention order'
        ]
      };
    }
    
    return {
      serviceType: 'Legal Services',
      practiceArea: 'General Law',
      urgency: 'medium',
      aiKeywords: keywords
    };
  };

  const routeData = getRouteSpecificData();

  // Enhanced AI-focused keywords
  const enhancedKeywords = [...keywords, ...routeData.aiKeywords];

  // Comprehensive AI-optimized structured data
  const organizationStructuredData = {
    '@context': 'https://schema.org',
    '@type': ['LegalService', 'LocalBusiness', 'ProfessionalService'],
    '@id': 'https://summitlawoffices.com/#organization',
    name: 'Summit Law Offices',
    alternateName: 'Summit Law',
    url: 'https://summitlawoffices.com',
    logo: 'https://summitlawoffices.com/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png',
    description: 'Strategic criminal defense representation across Massachusetts by former prosecutor Attorney Joe Brava. Over 1,000 cases of experience.',
    slogan: 'Strategic Defense. Proven Results.',
    foundingDate: '2010',
    areaServed: [
      {
        '@type': 'State',
        name: 'Massachusetts',
        containsPlace: [
          { '@type': 'City', name: 'Clinton' },
          { '@type': 'City', name: 'Worcester' },
          { '@type': 'City', name: 'Boston' },
          { '@type': 'City', name: 'Leominster' },
          { '@type': 'City', name: 'Fitchburg' }
        ]
      }
    ],
    serviceType: [routeData.serviceType, 'Criminal Defense', 'Legal Consultation', 'Court Representation'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Legal Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Criminal Defense',
            description: 'Strategic defense for felonies, misdemeanors, and criminal charges',
            serviceType: 'Criminal Defense',
            areaServed: 'Massachusetts'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Restraining Order Defense',
            description: '209A and 258E restraining order legal representation',
            serviceType: 'Family Law',
            areaServed: 'Massachusetts'
          }
        }
      ]
    },
    provider: {
      '@type': 'Person',
      '@id': 'https://summitlawoffices.com/attorney/joe-brava',
      name: 'Joe Brava',
      givenName: 'Joe',
      familyName: 'Brava',
      jobTitle: 'Criminal Defense Attorney',
      description: 'Former prosecutor with over 1,000 cases of criminal defense experience',
      alumniOf: {
        '@type': 'EducationalOrganization',
        name: 'Suffolk University Law School'
      },
      memberOf: [
        {
          '@type': 'Organization',
          name: 'Massachusetts Bar Association'
        },
        {
          '@type': 'Organization',
          name: 'National Association of Criminal Defense Lawyers'
        }
      ],
      knowsAbout: [
        'Criminal Defense',
        'Former Prosecutor Experience',
        'DUI Defense',
        'Restraining Orders',
        'Motor Vehicle Violations',
        'Massachusetts Criminal Law'
      ]
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        telephone: '+1-508-454-0822',
        email: 'info@summitlawoffices.com',
        availableLanguage: 'English',
        areaServed: 'Massachusetts',
        hoursAvailable: '24/7'
      },
      {
        '@type': 'ContactPoint',
        contactType: 'emergency',
        telephone: '+1-508-454-0822',
        description: 'Emergency criminal defense consultation available 24/7'
      }
    ],
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'MA',
      addressCountry: 'US',
      addressLocality: 'Clinton'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '42.4167',
      longitude: '-71.6833'
    },
    priceRange: '$$',
    paymentAccepted: ['Cash', 'Check', 'Credit Card'],
    currenciesAccepted: 'USD'
  };

  // Attorney profile structured data
  const attorneyStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Joe Brava',
    jobTitle: 'Criminal Defense Attorney',
    worksFor: {
      '@type': 'LegalService',
      name: 'Summit Law Offices'
    },
    alumniOf: 'Suffolk University Law School',
    memberOf: 'Massachusetts Bar Association',
    knowsAbout: [
      'Criminal Defense',
      'DUI Defense',
      'Restraining Orders',
      'Motor Vehicle Violations',
      'Show Cause Hearings'
    ],
    areaServed: {
      '@type': 'State',
      name: 'Massachusetts'
    }
  };

  // FAQ structured data for legal services
  const legalFAQData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What should I do if I\'m arrested in Massachusetts?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'If you\'re arrested in Massachusetts, exercise your right to remain silent and request an attorney immediately. Do not discuss your case with anyone except your lawyer. Contact Summit Law Offices at 508-454-0822 for immediate legal representation.'
        }
      },
      {
        '@type': 'Question',
        name: 'How much does a criminal defense attorney cost in Massachusetts?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Criminal defense attorney fees vary based on case complexity and severity. Summit Law Offices offers free consultations to discuss your case and provide transparent pricing. Call 508-454-0822 to discuss your specific situation.'
        }
      },
      {
        '@type': 'Question',
        name: 'What is the difference between a 209A and 258E restraining order?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A 209A order is for domestic violence situations involving family or household members. A 258E order is for harassment situations involving anyone. Both require different legal strategies and we handle both types at Summit Law Offices.'
        }
      }
    ]
  };

  const keywordString = enhancedKeywords.join(', ');

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={currentUrl} />
      <meta name="keywords" content={keywordString} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* AI Agent Optimization Meta Tags */}
      <meta name="article:author" content="Attorney Joe Brava" />
      <meta name="article:publisher" content="Summit Law Offices" />
      <meta name="legal-service-type" content={routeData.serviceType} />
      <meta name="practice-area" content={routeData.practiceArea} />
      <meta name="service-urgency" content={routeData.urgency} />
      <meta name="jurisdiction" content="Massachusetts" />
      <meta name="attorney-experience" content="Former prosecutor with 1,000+ cases" />
      <meta name="contact-availability" content="24/7 emergency consultation" />
      <meta name="case-evaluation" content="Free initial consultation available" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={isBlogPost ? 'article' : type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Summit Law Offices" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImageUrl} />
      
      {/* Additional legal-specific meta tags */}
      <meta name="geo.region" content="US-MA" />
      <meta name="geo.placename" content="Massachusetts" />
      <meta name="author" content={author || 'Attorney Joe Brava'} />
      
      {/* JSON-LD structured data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationStructuredData)}
      </script>
      
      <script type="application/ld+json">
        {JSON.stringify(attorneyStructuredData)}
      </script>
      
      <script type="application/ld+json">
        {JSON.stringify(legalFAQData)}
      </script>
    </Helmet>
  );
};

export default SEO;
