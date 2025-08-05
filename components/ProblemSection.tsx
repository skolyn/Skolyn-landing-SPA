import React from 'react';
import { motion } from 'framer-motion';

const ProblemSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1] as const
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 10,
        delay: 0.3
      }
    }
  };

  return (
    <section id="problem" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[--color-secondary] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[--color-primary] rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-indigo-400 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-5 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="text-center text-5xl md:text-6xl font-bold mb-16 bg-gradient-to-r from-[--color-primary] via-[--color-secondary] to-[--color-primary] bg-clip-text text-transparent"
        >
          Modern Medicine Demands a Smarter Approach.
        </motion.h2>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <motion.div 
            variants={cardVariants}
            whileHover={{ 
              y: -10, 
              scale: 1.02,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
            }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg border border-white/20 hover:border-[--color-secondary]/30 transition-all duration-500 group"
          >
            <motion.div 
              variants={iconVariants}
              className="mb-6 relative"
            >
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-red-200 transition-all duration-300">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  <circle cx="12" cy="12" r="1" fill="currentColor"/>
                  <circle cx="19" cy="9" r="1" fill="currentColor"/>
                  <circle cx="5" cy="9" r="1" fill="currentColor"/>
                </svg>
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                <span className="text-red-600 text-xs font-bold">!</span>
              </div>
            </motion.div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-[--color-primary] transition-colors duration-300">
              Overwhelming Caseloads
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Radiologists face an ever-increasing volume of complex scans, leading to burnout and potential delays in patient care.
            </p>
          </motion.div>
          
          <motion.div 
            variants={cardVariants}
            whileHover={{ 
              y: -10, 
              scale: 1.02,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
            }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg border border-white/20 hover:border-[--color-secondary]/30 transition-all duration-500 group"
          >
            <motion.div 
              variants={iconVariants}
              className="mb-6 relative"
            >
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-amber-200 transition-all duration-300">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <path d="M9 9h6v6H9z"/>
                  <path d="M9 1v6M15 1v6M9 15v8M15 15v8"/>
                  <circle cx="12" cy="12" r="2" fill="currentColor"/>
                </svg>
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center">
                <span className="text-amber-600 text-xs font-bold">?</span>
              </div>
            </motion.div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-[--color-primary] transition-colors duration-300">
              The Trust Deficit in AI
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Most AI tools are "black boxes," providing answers without explanation. This creates a critical barrier to adoption in high-stakes clinical decisions.
            </p>
          </motion.div>
          
          <motion.div 
            variants={cardVariants}
            whileHover={{ 
              y: -10, 
              scale: 1.02,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
            }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg border border-white/20 hover:border-[--color-secondary]/30 transition-all duration-500 group md:col-span-2 lg:col-span-1"
          >
            <motion.div 
              variants={iconVariants}
              className="mb-6 relative"
            >
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-blue-200 transition-all duration-300">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="m21 21-4.35-4.35"/>
                  <path d="M11 15a4 4 0 0 0 0-8"/>
                  <path d="M8 11h6"/>
                  <path d="M11 8v6"/>
                </svg>
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-xs font-bold">±</span>
              </div>
            </motion.div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-[--color-primary] transition-colors duration-300">
              Diagnostic Variability
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Diagnostic accuracy can vary between specialists and institutions, impacting the consistency and quality of care.
            </p>
          </motion.div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            These challenges demand a revolutionary solution that combines cutting-edge AI with transparent, explainable intelligence.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              if ((window as any).navigateToPage) {
                (window as any).navigateToPage('platform');
              }
            }}
            className="text-black bg-gradient-to-r from-[--color-primary] to-[--color-secondary] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg"
          >
          <span className='text-black'>Discover Our Solution →</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
