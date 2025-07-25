
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import GoogleMap from './GoogleMap';

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
                <p className="text-xs text-gray-600 italic mt-2">
                  <em>Submitting this form does not create an attorney-client relationship. No legal outcome is guaranteed.</em>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Office Location Map */}
        <div className="mt-8 bg-white rounded-xl shadow-xl p-6 max-w-2xl mx-auto">
          <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Our Office Location</h3>
          <GoogleMap
            address="1042 Main Street, Suite C, Clinton, MA 01510"
            title="Summit Law Offices - 1042 Main Street, Suite C, Clinton, MA 01510"
            zoom={15}
            height={300}
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
