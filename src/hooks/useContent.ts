
import { useState, useEffect } from 'react';

interface ContentMatter {
  [key: string]: any;
}

interface MDXContent {
  content: string;
  matter: ContentMatter;
}

export const useContent = (contentPath: string) => {
  const [content, setContent] = useState<MDXContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadContent = async () => {
      try {
        setLoading(true);
        // In a real implementation, this would dynamically import MDX files
        // For now, we'll create a content mapping system
        const contentMap = await getContentMapping();
        const contentData = contentMap[contentPath];
        
        if (contentData) {
          setContent(contentData);
        } else {
          setError(`Content not found: ${contentPath}`);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load content');
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, [contentPath]);

  return { content, loading, error };
};

// Static content mapping - in production this would be generated at build time
const getContentMapping = async (): Promise<Record<string, MDXContent>> => {
  return {
    'pages/hero': {
      content: '',
      matter: {
        title: "Strategic Criminal Defense Across Massachusetts",
        subtitle: "Attorney Joe Brava provides strategic criminal defense across Massachusetts. Former prosecutor with 1,000+ cases of experience.",
        ctaText: "Get Consultation",
        ctaPhone: "508-454-0822",
        backgroundVideo: "/summit_hero_1.mp4"
      }
    },
    'attorney/joe-brava': {
      content: '',
      matter: {
        name: "Joe Brava",
        title: "Attorney",
        education: "Suffolk University Law School",
        barAdmissions: ["Massachusetts Bar Association"],
        experience: "1000+",
        specialties: ["Criminal Defense", "Former Prosecutor", "Trial Experience"],
        phone: "508-454-0822"
      }
    }
  };
};
