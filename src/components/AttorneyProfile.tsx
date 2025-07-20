
import { Briefcase, Award, Scale, Users } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AttorneyProfile = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8 }
    }
  };

  const scrollToContact = () => {
    const footer = document.querySelector('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="attorney-profile" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
              Founded Summit Law in January 2023 after extensive experience as both a prosecutor 
              and criminal defense attorney in Massachusetts.
            </p>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left Column - Biography */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={itemVariants}
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Briefcase className="w-6 h-6 mr-3 text-gray-600" />
                  Professional Background
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Attorney Joe Brava brings a unique perspective to criminal defense, having served 
                  as both a prosecutor and defense attorney throughout Massachusetts. This dual 
                  experience provides invaluable insight into courtroom strategies and prosecutorial tactics.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  After years of successfully defending clients across the Commonwealth, Joe founded 
                  Summit Law Offices in January 2023 to provide strategic, personalized criminal 
                  defense representation to individuals facing serious charges.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Scale className="w-6 h-6 mr-3 text-gray-600" />
                  Practice Philosophy
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Every client deserves aggressive, strategic defense backed by thorough case preparation 
                  and insider knowledge of the legal system. Joe's approach combines meticulous attention 
                  to detail with the courtroom experience necessary to protect your rights and freedom.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Credentials & Stats */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={itemVariants}
          >
            <Card className="p-8 shadow-lg">
              <CardContent className="space-y-8 p-0">
                {/* Attorney Photo Placeholder */}
                <div className="text-center">
                  <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <div className="text-4xl font-bold text-gray-600">JB</div>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">Joe Brava, Esq.</h4>
                  <p className="text-gray-600">Founder & Principal Attorney</p>
                </div>

                {/* Statistics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-3xl font-bold text-gray-900 mb-2">1,000+</div>
                    <div className="text-sm text-gray-600">Criminal Cases</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-3xl font-bold text-gray-900 mb-2">9+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                </div>

                {/* Key Qualifications */}
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Award className="w-5 h-5 text-gray-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold text-gray-900">Former Prosecutor</h5>
                      <p className="text-sm text-gray-600">Insider knowledge of DA tactics and strategies</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Users className="w-5 h-5 text-gray-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold text-gray-900">Comprehensive Defense</h5>
                      <p className="text-sm text-gray-600">Criminal defense, restraining orders, motor vehicle offenses</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Scale className="w-5 h-5 text-gray-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold text-gray-900">Strategic Approach</h5>
                      <p className="text-sm text-gray-600">Meticulous case analysis and reverse engineering</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center" 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={itemVariants}
        >
          <Card className="bg-gray-900 text-white p-8 md:p-12">
            <CardContent className="p-0">
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
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default AttorneyProfile;
