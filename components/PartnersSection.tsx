import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Building2, Handshake, Users, Award, Globe, Heart } from 'lucide-react';
import LogoPlaceholder from './LogoPlaceholder';

const PartnersSection: React.FC = () => {
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

    const section = document.getElementById('partners');
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

  const partnershipValues = [
    {
      title: 'Innovation Together',
      description: 'Collaborative research and development to push the boundaries of medical AI',
      icon: Building2,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Trust & Reliability',
      description: 'Building long-term partnerships based on mutual respect and shared goals',
      icon: Handshake,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Global Impact',
      description: 'Expanding reach to improve healthcare outcomes worldwide',
      icon: Globe,
      color: 'from-green-500 to-emerald-500'
    }
  ];
  const partnerLogos = Array(8).fill(0).map((_, i) => (
    <motion.div 
      className="flex items-center justify-center group" 
      key={i}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3 }}
    >
      <LogoPlaceholder style={(i % 4) + 1} />
    </motion.div>
  ));

  return (
    <section id="partners" className="relative py-20 bg-gradient-to-br from-slate-50 via-purple-50/30 to-white min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-400/8 to-pink-400/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-blue-400/8 to-cyan-400/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-gradient-to-br from-green-400/8 to-emerald-400/8 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-5 text-center z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex items-center justify-center gap-3 mb-6">
              <motion.div 
                className="p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-lg"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <Handshake className="w-10 h-10 text-white" />
              </motion.div>
              <motion.div 
                className="p-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl shadow-lg"
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <Users className="w-10 h-10 text-white" />
              </motion.div>
              <motion.div 
                className="p-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl shadow-lg"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              >
                <Award className="w-10 h-10 text-white" />
              </motion.div>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[--color-primary] via-[--color-secondary] to-[--color-accent] bg-clip-text text-transparent">
              Our Strength is in Our Collaboration
            </h2>
            <p className="text-xl text-[--color-text-light] max-w-4xl mx-auto leading-relaxed">
              We are proud to partner with leading institutions to build the future of medicine, together.
            </p>
          </motion.div>

          {/* Partnership Values */}
          <motion.div variants={itemVariants} className="py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
              {partnershipValues.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 text-center group"
                    whileHover={{ scale: 1.05, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className={`inline-flex p-4 bg-gradient-to-br ${value.color} rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}
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
                    <h3 className="text-xl font-bold text-[--color-primary] mb-4">{value.title}</h3>
                    <p className="text-[--color-text-light] leading-relaxed">{value.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Partner Logos */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="p-3 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-[--color-primary]">Trusted by Industry Leaders</h3>
            </div>
            
            <div className="relative">
              <div className="w-full overflow-hidden rounded-3xl bg-white/50 backdrop-blur-sm py-12 shadow-xl border border-white/20" style={{
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
                maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)'
              }}>
                <div className="flex gap-16 w-fit animate-scroll">
                  {partnerLogos}
                  {partnerLogos}
                </div>
              </div>
              
              {/* Gradient overlays */}
              <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none"></div>
              <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none"></div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="pt-12">
            <motion.div 
              className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 shadow-xl border border-purple-100/50 max-w-3xl mx-auto"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <Heart className="w-8 h-8 text-purple-600" />
                <h3 className="text-2xl font-bold text-[--color-primary]">Partner with Us</h3>
              </div>
              <p className="text-lg text-[--color-text-light] mb-8 leading-relaxed">
                Ready to join our mission to transform healthcare through AI? Let's explore how we can collaborate to make a meaningful impact together.
              </p>
              <motion.a 
                href="#contact" 
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[--color-primary] to-[--color-secondary] text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Handshake className="w-5 h-5 text-black group-hover:rotate-12 transition-transform duration-300" />
                <span className="text-black">Start Partnership Discussion</span>
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

export default PartnersSection;
