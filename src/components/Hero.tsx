
import React from 'react';
import { Button } from '@/components/ui/button';
import { useContentContext } from '@/components/ContentProvider';

const Hero = () => {
  const { getContent } = useContentContext();
  const heroContent = getContent('hero');

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/summit_hero_1.mp4" type="video/mp4" />
          <source src="/summit_hero_2.mp4" type="video/mp4" />
          <source src="/summit_hero_3.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          {heroContent?.title || "Summit Law Offices"}
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light max-w-3xl mx-auto">
          {heroContent?.subtitle || "Strategic Criminal Defense Across Massachusetts"}
        </p>
        <p className="text-lg mb-8 text-gray-200 max-w-2xl mx-auto">
          {heroContent?.description || "When facing criminal charges in Massachusetts, you need more than just legal representation – you need a strategic defense partner who understands both sides of the courtroom."}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
            {heroContent?.ctaText || "Get Free Consultation"}
          </Button>
          <a 
            href={`tel:${heroContent?.ctaPhone || "508-454-0822"}`}
            className="text-white text-xl font-bold hover:text-gray-200 transition-colors"
          >
            📞 {heroContent?.ctaPhone || "508-454-0822"}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
