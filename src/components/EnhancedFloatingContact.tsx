
import React, { useState, useEffect } from 'react';
import { MessageSquare, Phone, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const EnhancedFloatingContact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setShowOptions(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact-info');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCall = () => {
    window.location.href = 'tel:508-454-0822';
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-2">
      {/* Additional floating options */}
      {showOptions && (
        <div className="space-y-2 animate-fade-in">
          <Button
            onClick={handleCall}
            className="bg-green-600 hover:bg-green-700 text-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all"
            size="icon"
            aria-label="Call Now"
          >
            <Phone className="h-5 w-5" />
          </Button>
          
          <Button
            onClick={scrollToContact}
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all"
            size="icon"
            aria-label="Schedule Consultation"
          >
            <Calendar className="h-5 w-5" />
          </Button>
        </div>
      )}

      {/* Main contact button */}
      <Button
        onClick={() => setShowOptions(!showOptions)}
        className="bg-gray-800 hover:bg-gray-700 text-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:scale-105"
        size="icon"
        aria-label="Contact Options"
      >
        <MessageSquare className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default EnhancedFloatingContact;
