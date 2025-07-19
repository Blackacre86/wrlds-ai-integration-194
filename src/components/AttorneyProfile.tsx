
import { Briefcase, MapPin, Calendar, ArrowRight, CheckCircle, GraduationCap, Users, Award } from "lucide-react";
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
    <section id="attorney-profile" className="bg-white py-16 md:py-24 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16" 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <div className="inline-block mb-4 px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
              About Your Attorney
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Attorney Joe Brava
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Attorney Joe Brava is a Massachusetts criminal defense attorney and founder of Summit Law Offices. 
              He brings extensive prosecutorial experience and strategic insight to every case.
            </p>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left Column - Bio & Education */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={itemVariants}
          >
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

            {/* Education & Background */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h4 className="text-lg font-semibold mb-6 flex items-center">
                <GraduationCap className="w-5 h-5 text-gray-600 mr-2" />
                Education & Background
              </h4>
              <div className="space-y-4">
                <div className="border-l-2 border-gray-300 pl-4">
                  <div className="text-sm text-gray-500">2016</div>
                  <div className="font-medium text-gray-900">Juris Doctor (JD)</div>
                  <div className="text-gray-600">Massachusetts School of Law</div>
                </div>
                <div className="border-l-2 border-gray-300 pl-4">
                  <div className="text-sm text-gray-500">2009</div>
                  <div className="font-medium text-gray-900">Bachelor's Degree</div>
                  <div className="text-gray-600">Suffolk University - American Government</div>
                </div>
                <div className="border-l-2 border-gray-300 pl-4">
                  <div className="text-sm text-gray-500">Pre-Law</div>
                  <div className="font-medium text-gray-900">Political Consultant</div>
                  <div className="text-gray-600">Local, congressional, and statewide campaigns throughout New England</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Professional Experience */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={itemVariants}
          >
            {/* Proven Track Record */}
            <div className="bg-gray-900 text-white rounded-2xl p-8 mb-8">
              <div className="flex items-center mb-4">
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

            {/* Office Location Map */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h4 className="text-lg font-semibold mb-4 flex items-center">
                <MapPin className="w-5 h-5 text-gray-600 mr-2" />
                Office Location
              </h4>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=400&fit=crop"
                  alt="Summit Law Offices Location - 1042 Main Street, Clinton, MA"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="mt-4">
                <p className="text-gray-600 text-sm">
                  1042 Main Street, Suite C, Clinton, MA 01510
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="text-center" 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={itemVariants}
        >
          <div className="bg-gray-900 text-white rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-4">
              Strategic Defense. Insider Knowledge. Proven Results.
            </h3>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
              When your freedom is on the line, you need an attorney who understands both sides of the courtroom. 
              Let's discuss your case today.
            </p>
            <Button 
              onClick={scrollToContact} 
              className="px-8 py-3 bg-white text-gray-900 hover:bg-gray-100 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Schedule Your Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AttorneyProfile;
