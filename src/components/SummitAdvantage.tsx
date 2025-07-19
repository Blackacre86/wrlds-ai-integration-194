import { TrendingUp, CheckCircle, Phone } from "lucide-react";
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
      title: "Smart Evidence Presentation",
      description: "Clearly communicate your story with Summit Law's AI-powered visual evidence tools. Transform complex evidence into straightforward, persuasive visuals that resonate with judges and juries.",
      stat: "100%",
      statLabel: "Clear Communication",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop&auto=format"
    },
    {
      title: "AI-Powered Legal Research Agents", 
      description: "Get instant, precise answers to critical legal questions. Summit Law's custom-built research agents scan thousands of legal sources in seconds, delivering accurate insights tailored specifically to your case.",
      stat: "1000s",
      statLabel: "Sources Analyzed",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&auto=format"
    },
    {
      title: "Strategic Negotiation Intelligence",
      description: "Gain an edge at the negotiation table. Summit Law's AI analyzes historical plea agreements, guiding you toward more favorable outcomes with strategic, data-backed negotiation tactics.",
      stat: "24/7",
      statLabel: "Strategic Advantage",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop&auto=format"
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
              Strategic criminal defense powered by cutting-edge AI technology and prosecutorial experience, 
              giving you an unprecedented advantage in Massachusetts criminal law.
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
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="h-48 w-full">
                <img 
                  src={advantage.image} 
                  alt={advantage.title}
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {advantage.title}
                  </h3>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">{advantage.stat}</div>
                    <div className="text-sm text-gray-500">{advantage.statLabel}</div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
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
                    <strong>Landmark Achievement:</strong> Secured conviction in no-witness strangulation trial
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
                  enhanced by cutting-edge AI technology and insider knowledge of prosecution tactics.
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
