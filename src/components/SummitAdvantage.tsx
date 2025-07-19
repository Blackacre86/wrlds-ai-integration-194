
import { Shield, Search, Users, TrendingUp, CheckCircle, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const SummitAdvantage = () => {
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
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const advantages = [
    {
      icon: <Shield className="w-8 h-8 text-gray-600" />,
      title: "Prosecutorial Experience",
      description: "Former prosecutor with first-hand insight into DA tactics, evidence evaluation, and courtroom strategies.",
      stat: "1,000+",
      statLabel: "Cases Prosecuted & Defended"
    },
    {
      icon: <Search className="w-8 h-8 text-gray-600" />,
      title: "Reverse Engineering",
      description: "Meticulous case analysis to identify weaknesses and dismantle prosecution arguments before they're presented.",
      stat: "100%",
      statLabel: "Cases Thoroughly Analyzed"
    },
    {
      icon: <Users className="w-8 h-8 text-gray-600" />,
      title: "Personalized Advocacy",
      description: "Individualized strategies, clear communication, and steadfast support throughout your legal journey.",
      stat: "24/7",
      statLabel: "Client Support Available"
    }
  ];

  return (
    <section id="summit-advantage" className="bg-gray-50 py-16 md:py-24 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <div className="inline-block mb-4 px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium shadow-sm">
              Why Choose Summit Law
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              The Summit Advantage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Strategic criminal defense backed by prosecutorial experience and a deep understanding 
              of Massachusetts criminal law.
            </p>
          </motion.div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-gray-50 rounded-xl">
                  {advantage.icon}
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">{advantage.stat}</div>
                  <div className="text-sm text-gray-500">{advantage.statLabel}</div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                {advantage.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {advantage.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-4">
                <TrendingUp className="w-6 h-6 text-gray-600 mr-3" />
                <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                  Proven Track Record
                </span>
              </div>
              <h3 className="text-3xl font-bold mb-6 text-gray-900">
                From Prosecutor to Your Advocate
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600">
                    <strong>Berkshire DA's Office:</strong> Specialized in domestic violence cases, 
                    served as District Court Domestic Violence Supervisor
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600">
                    <strong>Landmark Achievement:</strong> Secured 5-year sentence in no-witness DV case
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600">
                    <strong>Advanced Training:</strong> National District Attorneys Association certification (Arizona, 2022)
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center lg:text-left">
              <div className="bg-gray-50 rounded-xl p-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">
                  Ready to Fight for You
                </h4>
                <p className="text-gray-600 mb-6">
                  Every case receives personalized attention and strategic planning 
                  based on insider knowledge of how prosecutors build their cases.
                </p>
                <Button 
                  onClick={() => window.location.href = 'tel:508-454-0822'}
                  className="w-full sm:w-auto px-8 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call 508-454-0822
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SummitAdvantage;
