import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Eye, TrendingUp, Brain, Shield, Sparkles } from 'lucide-react';

const PlatformSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('multi-modal');
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('platform');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);
  
  const tabsData = {
    'multi-modal': {
      title: 'Multi-Modal Diagnostic Core',
      description: 'Go beyond a single image. Our AI analyzes entire studies (MRI, CT, etc.) to deliver a holistic diagnostic picture, from detection and classification to staging and subtyping.',
      icon: Layers,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-gradient-to-br from-blue-50 to-cyan-50',
      features: ['Comprehensive Analysis', 'Multiple Imaging Modalities', 'Holistic Diagnostics']
    },
    'xai': {
      title: 'Explainable AI (XAI): The Glass Box',
      description: "We don't just give you an answer; we show you the 'why.' Every finding is supported by visual heatmaps and clear, concise textual justifications, building a new level of trust and confidence.",
      icon: Eye,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-gradient-to-br from-purple-50 to-pink-50',
      features: ['Visual Heatmaps', 'Clear Justifications', 'Transparent AI']
    },
    'monitoring': {
      title: 'Longitudinal Monitoring',
      description: 'Track disease, not just a single scan. Skolyn automatically compares current and prior scans to quantify changes, monitor treatment response, and predict patient outcomes over time.',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-gradient-to-br from-green-50 to-emerald-50',
      features: ['Timeline Tracking', 'Treatment Response', 'Outcome Prediction']
    }
  };

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

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1] as const
      }
    }
  };

  const tabVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0, 
      scale: 0.9,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section id="platform" className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-green-400/10 to-emerald-400/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-5 z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[--color-primary] via-[--color-secondary] to-[--color-accent] bg-clip-text text-transparent">
              Your AI Co-Pilot
            </h2>
            <p className="text-xl text-[--color-text-light] max-w-3xl mx-auto leading-relaxed">
              Built on a Foundation of Trust and Transparency
            </p>
          </motion.div>

          {/* Tabs Navigation */}
          <motion.div variants={itemVariants} className="max-w-5xl mx-auto">
            <div className="flex justify-center gap-2 mb-16 p-2 bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-white/20">
              {Object.entries(tabsData).map(([key, { title, icon: Icon, color }]) => (
                <button
                  key={key}
                  className={`relative px-6 py-4 rounded-xl font-semibold text-sm md:text-base transition-all duration-300 flex items-center gap-3 group ${
                    activeTab === key 
                      ? `bg-gradient-to-r ${color} text-white shadow-lg transform scale-105` 
                      : 'text-[--color-text-light] hover:text-[--color-primary] hover:bg-white/50'
                  }`}
                  onClick={() => setActiveTab(key)}
                  role="tab"
                  aria-selected={activeTab === key}
                  aria-controls={`tab-content-${key}`}
                >
                  <Icon className={`w-5 h-5 transition-transform duration-300 ${
                    activeTab === key ? 'scale-110' : 'group-hover:scale-110'
                  }`} />
                  <span className="hidden sm:inline">{title}</span>
                  <span className="sm:hidden">{title.split(' ')[0]}</span>
                  
                  {activeTab === key && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 rounded-xl"
                      initial={false}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </button>
              ))}
            </div>
            
            {/* Tab Content */}
            <div className="relative min-h-[400px]">
              <AnimatePresence mode="wait">
                {Object.entries(tabsData).map(([key, { title, description, icon: Icon, color, bgColor, features }]) => (
                  activeTab === key && (
                    <motion.div
                      key={key}
                      id={`tab-content-${key}`}
                      variants={tabVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="grid md:grid-cols-2 gap-12 items-center"
                      role="tabpanel"
                      aria-labelledby={`tab-button-${key}`}
                    >
                      {/* Content */}
                      <div className="md:order-1 space-y-6">
                        <div className="flex items-center gap-4 mb-6">
                          <div className={`p-4 bg-gradient-to-br ${color} rounded-2xl shadow-lg`}>
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                          <h3 className="text-3xl md:text-4xl font-bold text-[--color-primary]">{title}</h3>
                        </div>
                        <p className="text-lg text-[--color-text-light] leading-relaxed">{description}</p>
                        
                        {/* Features List */}
                        <div className="space-y-3">
                          {features.map((feature, index) => (
                            <motion.div
                              key={feature}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 * index, duration: 0.3 }}
                              className="flex items-center gap-3"
                            >
                              <div className={`w-2 h-2 bg-gradient-to-r ${color} rounded-full`}></div>
                              <span className="text-[--color-text] font-medium">{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Visual */}
                      <div className="md:order-2">
                        <motion.div 
                          className={`relative w-full h-80 ${bgColor} rounded-3xl shadow-xl border border-white/20 overflow-hidden group`}
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.3 }}
                        >
                          {/* Animated background pattern */}
                          <div className="absolute inset-0 opacity-20">
                            <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-10`}></div>
                            <div className="absolute top-4 left-4 w-20 h-20 bg-white/30 rounded-full blur-xl animate-pulse"></div>
                            <div className="absolute bottom-4 right-4 w-16 h-16 bg-white/20 rounded-full blur-lg animate-pulse delay-1000"></div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white/25 rounded-full blur-2xl animate-pulse delay-500"></div>
                          </div>
                          
                          {/* Main icon */}
                          <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <motion.div
                              className={`p-8 bg-gradient-to-br ${color} rounded-3xl shadow-2xl mb-6`}
                              animate={{ 
                                rotate: [0, 5, -5, 0],
                                scale: [1, 1.05, 1]
                              }}
                              transition={{ 
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            >
                              <Icon className="w-16 h-16 text-white" />
                            </motion.div>
                            <motion.p 
                              className="text-[--color-text-light] font-medium text-center px-6"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.3 }}
                            >
                              Advanced {title.split(' ')[0]} Technology
                            </motion.p>
                          </div>

                          {/* Hover effect overlay */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                        </motion.div>
                      </div>
                    </motion.div>
                  )
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PlatformSection;
