
import { ArrowRight, Phone, MessageSquare } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const isMobile = useIsMobile();
  
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
        duration: 0.8
      }
    }
  };
  
  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };
  
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  
  const handlePhoneCall = () => {
    window.location.href = 'tel:508-454-0822';
  };
  
  return (
    <motion.div 
      className="relative w-full" 
      initial="hidden" 
      animate="visible" 
      variants={containerVariants}
    >
      <div className="banner-container bg-black relative overflow-hidden h-[60vh] sm:h-[70vh] md:h-[600px] lg:h-[650px] xl:h-[700px] w-full">
        <div className="absolute inset-0 bg-black w-full z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            preload="metadata" 
            className={`w-full h-full object-cover opacity-70 grayscale z-10 ${isMobile ? 'object-center' : 'object-center'}`}
          >
            <source src="/summit_hero_1.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30 z-10"></div>
        </div>
        
        <div className="banner-overlay absolute inset-0 z-20 pt-20 sm:pt-24 md:pt-32 w-full">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center h-full">
            <motion.div className="w-full max-w-5xl text-center" variants={itemVariants}>
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6"
                style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}
                variants={itemVariants}
              >
                Strategic Criminal Defense Across Massachusetts
              </motion.h1>
              <motion.p 
                className="text-gray-200 mt-6 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
                style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}
                variants={itemVariants}
              >
                Enhanced by Cutting-Edge AI Technology
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 mt-8 sm:mt-10 justify-center items-center" 
                variants={itemVariants}
              >
                {/* Phone call button */}
                <button 
                  className="w-full sm:w-auto min-h-[48px] px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:shadow-white/10 flex items-center justify-center group text-base font-semibold"
                  onClick={handlePhoneCall}
                >
                  Call 508-454-0822
                  <Phone className="ml-3 w-5 h-5 group-hover:scale-110 transition-transform" />
                </button>
                
                {/* Contact form button */}
                <button 
                  className="w-full sm:w-auto min-h-[48px] px-8 py-4 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all shadow-lg hover:shadow-xl hover:shadow-gray-300/20 flex items-center justify-center group text-base font-semibold border border-gray-600"
                  onClick={scrollToContact}
                >
                  Request Consultation
                  <MessageSquare className="ml-3 w-5 h-5 group-hover:scale-110 transition-transform" />
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
