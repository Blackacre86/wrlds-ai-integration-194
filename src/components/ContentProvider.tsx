
import React, { createContext, useContext, ReactNode } from 'react';

interface ContentContextType {
  getContent: (path: string) => any;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

interface ContentProviderProps {
  children: ReactNode;
}

export const ContentProvider: React.FC<ContentProviderProps> = ({ children }) => {
  const getContent = (path: string) => {
    // Static content mapping for immediate implementation
    const contentMap: Record<string, any> = {
      'hero': {
        title: "Proven Criminal Defense in Massachusetts",
        subtitle: "Former Prosecutor. 1000+ Cases Handled. Focused on Results",
        description: "Strategic defense partner who understands both sides of the courtroom.",
        ctaText: "Get Consultation",
        ctaPhone: "508-454-0822"
      },
      'practiceAreas': {
        title: "Practice Areas",
        subtitle: "Focused legal representation across key areas of Massachusetts criminal law, with deep expertise in both trial advocacy and pre-trial resolution strategies.",
        areas: [
          {
            title: "Criminal Defense",
            description: "Comprehensive defense for felonies and misdemeanors in all Massachusetts courts. From initial arraignment through trial, we fight to protect your rights and freedom.",
            image: "/lovable-uploads/6a396c18-f5b0-4821-bc71-bcc05bb64089.png"
          },
          {
            title: "Restraining Orders",
            description: "Expert representation for 209A domestic violence restraining orders and 258E harassment prevention orders. We handle both defense and petitioning.",
            image: "/lovable-uploads/restraining-orders.jpg"
          },
          {
            title: "Motor Vehicle Offenses",
            description: "Skilled defense for OUI/DUI, reckless driving, suspended license charges, and all motor vehicle violations throughout Massachusetts.",
            image: "/lovable-uploads/motor-vehicle.jpg"
          },
          {
            title: "Show Cause Hearings",
            description: "In Massachusetts, if you're charged with a misdemeanor but weren't arrested, you'll receive notice of a clerk-magistrate ( 'show-cause' ) hearing. At this informal session, the complainant must establish probable cause before the clerk; if the clerk isn't convinced, no criminal complaint issues.",
            image: "/lovable-uploads/show-cause.jpg"
          }
        ]
      },
      'attorney': {
        name: "Joe Brava",
        title: "Attorney",
        description: "With 8+ years of legal experience and a proven track record of success, Attorney Joe Brava brings strategic thinking and tenacious advocacy to every case.",
        background: {
          prosecutor: "Served as an Assistant District Attorney, gaining invaluable insight into prosecution strategies and case development from the inside.",
          experience: "Successfully handled over 1,000 criminal cases, from minor infractions to serious felonies, with a focus on achieving the best possible outcomes for clients.",
          education: "Graduated from Suffolk University Law School with honors and maintains active membership in the Massachusetts Bar Association."
        },
        philosophy: {
          quote: "Every client deserves aggressive representation and personalized attention. I believe in fighting hard for my clients while maintaining the highest ethical standards.",
          approach: "My approach combines thorough case preparation, strategic thinking, and clear communication to ensure clients understand their options and feel confident in their defense."
        }
      },
      'advantages': {
        title: "The Summit Advantage",
        subtitle: "Experience the difference that strategic thinking, cutting-edge technology, and personalized attention can make in your criminal defense case.",
        items: [
          {
            image: "/lovable-uploads/810c64ae-5dff-4a0a-ab8b-555b99cf604a.png",
            title: "Evidence Strategy Optimization",
            description: "AI-powered analysis of evidence patterns and prosecution strategies to identify the strongest defense approaches and potential case weaknesses for your specific situation."
          },
          {
            image: "/lovable-uploads/92cc4676-3f43-4a6e-9bbe-1cb528cc4386.png",
            title: "Smart Evidence Presentation",
            description: "Advanced visualization and presentation tools that help judges and juries understand complex evidence in clear, compelling ways that support your defense."
          },
          {
            image: "/lovable-uploads/13a21a8f-d1ab-4a67-9b0e-0efc97b1ab04.png",
            title: "AI-Powered Legal Research",
            description: "Cutting-edge AI technology that analyzes thousands of cases to find relevant precedents and build stronger legal arguments for your defense strategy."
          }
        ]
      }
    };

    return contentMap[path] || null;
  };

  return (
    <ContentContext.Provider value={{ getContent }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContentContext = () => {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error('useContentContext must be used within a ContentProvider');
  }
  return context;
};
