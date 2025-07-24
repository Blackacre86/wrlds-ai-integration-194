
import React from 'react';
import { Button } from '@/components/ui/button';
import { useContentContext } from '@/components/ContentProvider';

const Hero = () => {
  const { getContent } = useContentContext();
  const heroContent = getContent('hero');

  // Safe fallbacks for all content
  const title = heroContent?.title || "Summit Law Offices";
  const subtitle = heroContent?.subtitle || "Strategic Criminal Defense Across Massachusetts";
  const description = heroContent?.description || "When facing criminal charges in Massachusetts, you need more than just legal representation – you need a strategic defense partner who understands both sides of the courtroom.";
  const ctaText = heroContent?.ctaText || "Get Free Consultation";
  const ctaPhone = heroContent?.ctaPhone || "508-454-0822";

  return (
    <section id="hero" className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover grayscale"
        >
          <source src="/summit_hero_1.mp4" type="video/mp4" />
          <source src="/summit_hero_2.mp4" type="video/mp4" />
          <source src="/summit_hero_3.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-slide-in">
          {title}
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light max-w-3xl mx-auto animate-slide-in animation-delay-200">
          {subtitle}
        </p>
        <p className="text-lg mb-8 text-gray-200 max-w-2xl mx-auto animate-fade-in animation-delay-300">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in animation-delay-400">
          <Button 
            size="lg" 
            className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
          >
            {ctaText}
          </Button>
          <a 
            href={`tel:${ctaPhone}`}
            className="text-white text-xl font-bold hover:text-gray-200 transition-colors hover:scale-105 duration-300 flex items-center gap-2"
          >
            <span className="text-2xl">📞</span> {ctaPhone}
          </a>
        </div>
        <p className="text-xs text-gray-300 italic text-center mt-4 max-w-md mx-auto">
          <em>Submitting this form does not create an attorney-client relationship. No legal outcome is guaranteed.</em>
        </p>
      </div>
    </section>
  );
};

export default Hero;
