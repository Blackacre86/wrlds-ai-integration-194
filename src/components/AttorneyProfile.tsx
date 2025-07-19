
import { Briefcase, MapPin, Calendar, ArrowRight, CheckCircle, GraduationCap, Award, Users, Scale } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AttorneyProfile = () => {
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: {
      y: 30,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-info');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="attorney-profile" className="bg-gray-50 py-20 md:py-28 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="mb-16" 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="max-w-4xl">
            <div className="inline-block mb-4 px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium shadow-sm">
              About Your Attorney
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Attorney Joe Brava
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Attorney Joe Brava is a Massachusetts criminal defense attorney and founder of Summit Law Offices. 
              He earned his JD from Massachusetts School of Law in 2016 after graduating from Suffolk University in 2009, 
              where he studied American government. Before law school, Joe worked as a political consultant on local, 
              congressional, and statewide campaigns throughout New England.
            </p>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left Column - Professional Overview */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={itemVariants}
            className="space-y-8"
          >
            {/* Quick Stats */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mr-4">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Joe Brava, Esq.</h3>
                  <p className="text-gray-600">Founder & Principal Attorney</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-gray-900">1,000+</div>
                  <div className="text-sm text-gray-600 font-medium">Criminal Cases</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-gray-900">7+</div>
                  <div className="text-sm text-gray-600 font-medium">Years Experience</div>
                </div>
              </div>

              <div className="space-y-3 text-gray-600">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
                  <span className="text-sm">1042 Main Street, Suite C, Clinton, MA 01510</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
                  <span className="text-sm">Founded Summit Law - January 2023</span>
                </div>
              </div>
            </div>

            {/* Education Timeline */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <h4 className="text-lg font-semibold mb-6 flex items-center text-gray-900">
                <GraduationCap className="w-5 h-5 text-gray-600 mr-3" />
                Education & Background
              </h4>
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 w-20 text-sm text-gray-500 font-medium">2016</div>
                  <div className="border-l-2 border-gray-200 pl-6 pb-4">
                    <div className="font-semibold text-gray-900">Juris Doctor (JD)</div>
                    <div className="text-gray-600">Massachusetts School of Law</div>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 w-20 text-sm text-gray-500 font-medium">2009</div>
                  <div className="border-l-2 border-gray-200 pl-6 pb-4">
                    <div className="font-semibold text-gray-900">Bachelor's Degree</div>
                    <div className="text-gray-600">Suffolk University - American Government</div>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 w-20 text-sm text-gray-500 font-medium">Pre-Law</div>
                  <div className="border-l-2 border-gray-200 pl-6">
                    <div className="font-semibold text-gray-900">Political Consultant</div>
                    <div className="text-gray-600">Local, congressional, and statewide campaigns throughout New England</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Professional Experience & Office */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={itemVariants}
            className="space-y-8"
          >
            {/* Proven Track Record */}
            <div className="bg-gray-900 text-white rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <Award className="w-6 h-6 text-white mr-3" />
                <span className="text-sm font-medium text-gray-300 uppercase tracking-wide">
                  Proven Track Record
                </span>
              </div>
              <h3 className="text-3xl font-bold mb-6 text-white">
                From Prosecutor to Your Advocate
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">
                    <strong className="text-white">Berkshire DA's Office:</strong> Specialized in domestic violence cases, 
                    served as District Court Domestic Violence Supervisor
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">
                    <strong className="text-white">Landmark Achievement:</strong> Secured unprecedented consecutive sentence in no-witness strangulation case, setting county record with a 5-year conviction in district court.
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">
                    <strong className="text-white">Advanced Training:</strong> National District Attorneys Association certification (Arizona, 2022)
                  </p>
                </div>
              </div>
            </div>

            {/* Office Location with Google Maps */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <h4 className="text-lg font-semibold mb-6 flex items-center text-gray-900">
                <MapPin className="w-5 h-5 text-gray-600 mr-3" />
                Office Location
              </h4>
              <div className="rounded-lg overflow-hidden shadow-lg mb-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.1234567890123!2d-71.6828!3d42.4167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e46b8c123d4567%3A0x1234567890abcdef!2s1042%20Main%20St%2C%20Clinton%2C%20MA%2001510!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="240"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                  title="Summit Law Offices Location"
                ></iframe>
              </div>
              <div className="space-y-2">
                <p className="font-medium text-gray-900">1042 Main Street, Suite C</p>
                <p className="text-gray-600">Clinton, MA 01510</p>
                <a 
                  href="https://maps.google.com/?q=1042+Main+Street,+Clinton,+MA+01510" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 font-medium"
                >
                  Get Directions
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div 
          className="bg-gray-900 text-white rounded-2xl p-12 text-left max-w-5xl" 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={itemVariants}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Strategic Defense. Insider Knowledge. Proven Results.
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                When your freedom is on the line, you need an attorney who understands both sides of the courtroom. 
                Let's discuss your case today.
              </p>
            </div>
            <div className="lg:text-right">
              <Button 
                onClick={scrollToContact} 
                className="px-8 py-4 bg-white text-gray-900 hover:bg-gray-100 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl text-base"
              >
                Schedule Your Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AttorneyProfile;
