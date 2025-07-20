
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from 'emailjs-com';

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const EMAILJS_SERVICE_ID = "service_i3h66xg";
      const EMAILJS_TEMPLATE_ID = "template_fgq53nh";
      const EMAILJS_PUBLIC_KEY = "wQmcZvoOqTAhGnRZ3";
      
      const templateParams = {
        from_name: "Legal Newsletter Subscriber",
        from_email: email,
        message: `New legal newsletter subscription request from the Summit Law website.`,
        to_name: 'Summit Law Offices',
        reply_to: email
      };
      
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      
      toast({
        title: "Success!",
        description: "Thank you for subscribing to our legal updates.",
        variant: "default"
      });
      
      setEmail("");
    } catch (error) {
      console.error("Error sending subscription:", error);
      
      toast({
        title: "Error",
        description: "There was a problem subscribing. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer id="contact" className="bg-black text-white pt-20 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium">
            Get Legal Help
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Contact Summit Law Offices
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Facing criminal charges? Need legal representation? Contact Attorney Joe Brava today 
            for a confidential consultation about your case.
          </p>
        </div>

        {/* Main Contact & Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Get In Touch</h3>
            
            <div className="space-y-6 mb-8">
              <a 
                href="tel:508-454-0822" 
                className="flex items-center text-gray-300 hover:text-white transition-colors p-4 bg-white/5 rounded-lg hover:bg-white/10"
              >
                <Phone className="w-6 h-6 mr-4 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-xl">508-454-0822</div>
                  <div className="text-sm text-gray-400">Call for immediate consultation</div>
                </div>
              </a>
              
              <a 
                href="mailto:joe@summitlawoffices.com" 
                className="flex items-center text-gray-300 hover:text-white transition-colors p-4 bg-white/5 rounded-lg hover:bg-white/10"
              >
                <Mail className="w-6 h-6 mr-4 flex-shrink-0" />
                <div>
                  <div className="font-semibold">joe@summitlawoffices.com</div>
                  <div className="text-sm text-gray-400">Email us anytime</div>
                </div>
              </a>
              
              <div className="flex items-start text-gray-300 p-4 bg-white/5 rounded-lg">
                <MapPin className="w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold">Office Location</div>
                  <div className="text-sm text-gray-400 mt-1">
                    1042 Main Street, Suite C<br />
                    Clinton, MA 01510
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-blue-900/30 rounded-lg border border-blue-800/50">
              <h4 className="font-semibold text-white mb-2">Free Consultation Available</h4>
              <p className="text-sm text-gray-300">
                All initial consultations are confidential and protected by attorney-client privilege. 
                We're here to help you understand your options and protect your rights.
              </p>
            </div>
          </div>

          {/* Google Maps */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Office Location</h3>
            <div className="bg-white/5 rounded-lg p-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.8623456789!2d-71.68234548455432!3d42.41234567891234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s1042+Main+St+%23C%2C+Clinton%2C+MA+01510!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
                title="Summit Law Offices Location"
              ></iframe>
              <div className="mt-4 text-center">
                <a 
                  href="https://maps.google.com/?q=1042+Main+Street+Suite+C+Clinton+MA+01510" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 pb-10 border-b border-gray-700">
          <div>
            <div className="text-2xl font-bold mb-6 text-white">
              Summit Law Offices
            </div>
            <p className="text-gray-300 mb-6">
              Strategic criminal defense across Massachusetts. Attorney Joe Brava provides expert legal representation 
              with the insight of a former prosecutor and the dedication of a passionate advocate.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Practice Areas</h3>
            <ul className="space-y-3">
              <li><span className="text-gray-300">Criminal Defense</span></li>
              <li><span className="text-gray-300">Restraining Orders</span></li>
              <li><span className="text-gray-300">Motor Vehicle Offenses</span></li>
              <li><span className="text-gray-300">Show Cause Hearings</span></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Legal Updates</h3>
            <form className="space-y-4" onSubmit={handleSubscribe}>
              <div>
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 text-white placeholder-gray-400"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                />
              </div>
              <button 
                type="submit" 
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Subscribing..." : (
                  <>
                    Subscribe
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Summit Law Offices. All rights reserved.
          </p>
          <p className="text-gray-400 text-xs text-center md:text-left max-w-md">
            Attorney Advertising. This website is designed for general information only. 
            The information presented should not be construed to be formal legal advice 
            nor the formation of a lawyer/client relationship.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
