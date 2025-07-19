import { Briefcase, MapPin, Calendar, ArrowRight } from "lucide-react";
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
  return <section id="attorney-profile" className="bg-white py-16 md:py-24 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{
        once: true
      }} variants={containerVariants}>
          <motion.div variants={itemVariants}>
            <div className="inline-block mb-4 px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
              About Your Attorney
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Attorney Joe Brava
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Founded Summit Law in January 2023 after extensive experience as both a prosecutor 
              and criminal defense attorney in Massachusetts.
            </p>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-center justify-center mb-16">
          <div className="max-w-2xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{
            once: true
          }} variants={itemVariants}>
            <div className="bg-gray-50 rounded-2xl p-8 mb-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                  <Briefcase className="w-8 h-8 text-gray-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Joe Brava, Esq.</h3>
                  <p className="text-gray-600">Founder & Principal Attorney</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-3xl font-bold text-gray-900">1,000+</div>
                  <div className="text-sm text-gray-600">Criminal Cases</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-3xl font-bold text-gray-900">7+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-gray-500 mr-3" />
                  <span className="text-gray-600">1042 Main Street, Suite C, Clinton, MA 01510</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-gray-500 mr-3" />
                  <span className="text-gray-600">Founded Summit Law - January 2023</span>
                </div>
              </div>
            </div>

            {/* Office Location Map */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h4 className="text-lg font-semibold mb-4 flex items-center">
                <MapPin className="w-5 h-5 text-gray-600 mr-2" />
                Office Location
              </h4>
              <div className="rounded-lg overflow-hidden shadow-lg">
                
              </div>
              <div className="mt-4">
                <p className="text-gray-600 text-sm">
                  1042 Main Street, Suite C, Clinton, MA 01510
                </p>
              </div>
            </div>
          </motion.div>

        </div>

        <motion.div className="text-center" initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={itemVariants}>
          <div className="bg-gray-900 text-white rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-4">
              Strategic Defense. Insider Knowledge. Proven Results.
            </h3>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
              When your freedom is on the line, you need an attorney who understands both sides of the courtroom. 
              Let's discuss your case today.
            </p>
            <Button onClick={scrollToContact} className="px-8 py-3 bg-white text-gray-900 hover:bg-gray-100 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
              Schedule Your Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
          </motion.div>
          </div>
        </div>
    </section>;
};
export default AttorneyProfile;