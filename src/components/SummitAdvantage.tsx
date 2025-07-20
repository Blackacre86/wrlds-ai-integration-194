
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
      title: "Evidence Strategy Optimization",
      description: "AI-powered analysis evaluates evidence presentation strategies, identifying the most compelling arguments and optimal sequencing. Summit Law's technology helps craft persuasive narratives that resonate in court.",
      stat: "Every Detail",
      statLabel: "Strategically Planned",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop&auto=format"
    },
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
              The Summit Advantage
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Strategic Defense Enhanced by AI
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Strategic criminal defense powered by cutting-edge AI technology and prosecutorial experience, 
              giving you an unprecedented advantage in Massachusetts criminal law.
            </p>
          </motion.div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
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
      </div>
    </section>
  );
};

export default SummitAdvantage;
