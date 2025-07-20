
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactInfo = () => {
  return (
    <section id="contact-info" className="bg-gradient-to-b from-white to-black text-white relative py-[15px] md:py-[25px]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-block mb-3 px-3 py-1 bg-white text-black rounded-full text-sm font-medium">
            Get Legal Help
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            Contact Summit Law Offices
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Facing criminal charges? Need legal representation? Contact Attorney Joe Brava today for a confidential consultation about your case.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-2xl mx-auto">
          {/* Attorney Joe Brava Contact Info */}
          <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 border border-gray-700">
            <div className="flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full mb-4 bg-gray-200 flex items-center justify-center">
                <div className="text-4xl font-bold text-gray-600">JB</div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Attorney Joe Brava</h3>
              <p className="text-gray-600 mb-6">Founder & Principal Attorney</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                <div className="space-y-4">
                  <a href="mailto:joe@summitlawoffices.com" className="flex items-center text-gray-700 hover:text-blue-600 p-3 bg-gray-50 rounded-lg transition-colors">
                    <Mail className="w-5 h-5 mr-3 flex-shrink-0" />
                    <span className="text-sm">joe@summitlawoffices.com</span>
                  </a>
                  <a href="tel:508-454-0822" className="flex items-center text-gray-700 hover:text-blue-600 p-3 bg-gray-50 rounded-lg transition-colors">
                    <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
                    <span className="font-semibold">508-454-0822</span>
                  </a>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start text-gray-700 p-3 bg-gray-50 rounded-lg">
                    <MapPin className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                    <div className="text-sm">
                      <div>1042 Main Street, Suite C</div>
                      <div>Clinton, MA 01510</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg w-full">
                <h4 className="font-semibold text-gray-900 mb-2">Free Consultation Available</h4>
                <p className="text-sm text-gray-600">
                  All initial consultations are confidential and protected by attorney-client privilege. 
                  We're here to help you understand your options and protect your rights.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Office Location Map */}
        <div className="mt-8 bg-white rounded-xl shadow-xl p-6 max-w-2xl mx-auto">
          <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Our Office Location</h3>
          <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2943.825635!2d-71.68234!3d42.41234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e394a2a123456789:0x123456789abcdef!2s1042%20Main%20St%20%23C%2C%20Clinton%2C%20MA%2001510!5e0!3m2!1sen!2sus!4v1640000000000!5m2!1sen!2sus&q=1042+Main+Street+Suite+C+Clinton+MA+01510"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Summit Law Offices - 1042 Main Street, Suite C, Clinton, MA 01510"
            ></iframe>
          </div>
          
          <div className="mt-4 text-center">
            <a href="https://maps.google.com/?q=1042+Main+Street+Suite+C+Clinton+MA+01510" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
              <MapPin className="w-4 h-4 mr-1" />
              View on Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
