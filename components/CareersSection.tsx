import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, Users, Rocket, Target, Heart } from 'lucide-react';

const CareersSection: React.FC = () => {
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

      const section = document.getElementById('careers');
      if (section) observer.observe(section);

      return () => observer.disconnect();
    }, []);

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

    const cardVariants = {
      hidden: { opacity: 0, scale: 0.9, y: 20 },
      visible: { 
        opacity: 1, 
        scale: 1, 
        y: 0,
        transition: { 
          duration: 0.5,
          ease: [0.23, 1, 0.32, 1] as const
        }
      }
    };

    const benefits = [
      {
        title: 'Mission-Driven Work',
        description: 'Contribute to technology that directly saves lives and improves patient outcomes',
        icon: Heart,
        color: 'from-red-500 to-pink-500'
      },
      {
        title: 'Innovation Culture',
        description: 'Work at the forefront of AI and medical technology with cutting-edge tools',
        icon: Rocket,
        color: 'from-purple-500 to-violet-500'
      },
      {
        title: 'Growth Opportunities',
        description: 'Accelerate your career with mentorship, learning, and leadership opportunities',
        icon: Target,
        color: 'from-blue-500 to-cyan-500'
      }
    ];
    const openPositions = [
      { 
        title: 'AI Residency Program', 
        location: 'Baku, Azerbaijan', 
        type: 'Internship',
        color: 'from-green-500 to-emerald-500',
        icon: Users
      },
      { 
        title: 'Senior Frontend Engineer', 
        location: 'Baku, Azerbaijan', 
        type: 'Full-time',
        color: 'from-blue-500 to-cyan-500',
        icon: Briefcase
      },
      { 
        title: 'Clinical Data Scientist', 
        location: 'Baku, Azerbaijan', 
        type: 'Full-time',
        color: 'from-purple-500 to-pink-500',
        icon: Target
      },
      { 
        title: 'Machine Learning Operations (MLOps) Engineer', 
        location: 'Remote / Baku', 
        type: 'Full-time',
        color: 'from-orange-500 to-amber-500',
        icon: Rocket
      },
    ];
    
    return (
      <section id="careers" className="relative py-20 bg-gradient-to-br from-slate-50 via-orange-50/30 to-white min-h-screen flex flex-col justify-center overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-orange-400/8 to-amber-400/8 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-400/8 to-pink-400/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-gradient-to-br from-blue-400/8 to-cyan-400/8 rounded-full blur-3xl animate-pulse delay-2000"></div>
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
                <motion.div 
                  className="p-4 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl shadow-lg"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Briefcase className="w-10 h-10 text-white" />
                </motion.div>
                <motion.div 
                  className="p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-lg"
                  animate={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <Rocket className="w-10 h-10 text-white" />
                </motion.div>
                <motion.div 
                  className="p-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl shadow-lg"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                >
                  <Heart className="w-10 h-10 text-white" />
                </motion.div>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[--color-primary] via-[--color-secondary] to-[--color-accent] bg-clip-text text-transparent">
                Join the Mission
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-[--color-primary]">
                Define the Future
              </h3>
              <p className="text-xl text-[--color-text-light] max-w-4xl mx-auto leading-relaxed">
                We are looking for brilliant, passionate, and mission-driven individuals to join us. If you want to work on problems that matter and build technology that saves lives, you have found your home.
              </p>
            </motion.div>

            {/* Benefits Section */}
            <motion.div variants={itemVariants} className="py-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <motion.div
                      key={index}
                      variants={cardVariants}
                      custom={index}
                      className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 text-center group"
                      whileHover={{ scale: 1.05, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div 
                        className={`inline-flex p-4 bg-gradient-to-br ${benefit.color} rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}
                        animate={{ 
                          rotate: [0, 5, -5, 0],
                          scale: [1, 1.05, 1]
                        }}
                        transition={{ 
                          duration: 4,
                          repeat: Infinity,
                          delay: index * 0.5
                        }}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <h3 className="text-xl font-bold text-[--color-primary] mb-4">{benefit.title}</h3>
                      <p className="text-[--color-text-light] leading-relaxed">{benefit.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Open Positions */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-[--color-primary]">Open Positions</h3>
              </div>
              
              <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden">
                {openPositions.map((job, index) => {
                  const Icon = job.icon;
                  return (
                    <motion.div 
                      key={index}
                      variants={cardVariants}
                      custom={index}
                      className="group border-b border-white/20 last:border-b-0 transition-all duration-300 hover:bg-white/50"
                      whileHover={{ x: 5 }}
                    >
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-8 px-8 gap-6 sm:gap-4">
                        <div className="flex items-start gap-4">
                          <div className={`p-3 bg-gradient-to-br ${job.color} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h4 className="text-xl font-bold text-[--color-primary] mb-2 group-hover:text-[--color-secondary] transition-colors duration-300">
                              {job.title}
                            </h4>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-[--color-text-light]">
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                <span className="text-sm">{job.location}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                <span className="text-sm">{job.type}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <motion.a 
                          href="#" 
                          className={`inline-flex items-center gap-3 bg-gradient-to-r ${job.color} text-white px-6 py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap group/button`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Apply Now
                          <motion.span
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            →
                          </motion.span>
                        </motion.a>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div variants={itemVariants} className="pt-12 text-center">
              <motion.div 
                className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-8 shadow-xl border border-orange-100/50 max-w-3xl mx-auto"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold text-[--color-primary] mb-6">Don't See Your Role?</h3>
                <p className="text-lg text-[--color-text-light] mb-8 leading-relaxed">
                  We're always looking for exceptional talent. Send us your resume and let us know how you'd like to contribute to our mission.
                </p>
                <motion.a 
                  href="#contact" 
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[--color-primary] to-[--color-secondary] text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Briefcase className="text-black w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                 <span className='text-black'> See All Openings</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    );
};

export default CareersSection;
