import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1] as const
      }
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-[#0d47a1]/75 to-[#0d47a1]/75 text-white py-32 pb-24 text-center -mt-20 bg-cover bg-center min-h-screen flex items-center" 
             style={{
               backgroundImage: `linear-gradient(rgba(13, 71, 161, 0.75), rgba(13, 71, 161, 0.75)), url(https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop)`
             }}>
      <div className="max-w-6xl mx-auto px-5 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-6xl md:text-7xl mb-4 font-bold"
          >
            The Future of Clinical Intelligence is Here.
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl max-w-4xl mx-auto mb-8 opacity-90"
          >
            Skolyn is an AI-powered clinical intelligence platform that empowers clinicians with unparalleled accuracy, efficiency, and trust in medical diagnostics. We turn complex data into clear, actionable insights.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-12"
          >
            <motion.button
              onClick={() => {
                if ((window as any).navigateToPage) {
                  (window as any).navigateToPage('contact');
                }
              }}
              className="group relative bg-gradient-to-r from-[--color-secondary] to-[--color-secondary]/80 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-[--color-secondary]/25 border-2 border-transparent inline-flex items-center gap-3 min-w-[200px] justify-center overflow-hidden"
              whileHover={{ 
                scale: 1.05,
                y: -2,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[--color-primary] to-[--color-secondary] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center gap-3">
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Request a Demo
              </span>
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            </motion.button>
            
            <motion.button 
              onClick={(e) => {
                e.preventDefault();
                if ((window as any).navigateToPage) {
                  (window as any).navigateToPage('platform');
                }
              }}
              className="group relative bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-white hover:text-[--color-primary] inline-flex items-center gap-3 min-w-[200px] justify-center overflow-hidden"
              whileHover={{ 
                scale: 1.05,
                y: -2,
                boxShadow: "0 20px 40px rgba(255, 255, 255, 0.1)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center gap-3">
                Explore the Platform
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
