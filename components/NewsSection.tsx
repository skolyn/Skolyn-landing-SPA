import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Newspaper, FileText, Tv, Calendar, ExternalLink, ArrowRight } from 'lucide-react';

const NewsSection: React.FC = () => {
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

      const section = document.getElementById('news');
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
    const newsItems = [
      {
        category: 'Press Release',
        slug: 'press-release',
        date: 'October 26, 2023',
        title: 'Skolyn Announces Strategic Partnership with Baku Health Center to Deploy AI Platform',
        excerpt: 'This landmark collaboration will integrate Skolyn\'s full suite of diagnostic tools across the center\'s radiology department, aiming to enhance diagnostic accuracy and patient throughput.',
        icon: Newspaper,
        color: 'from-blue-500 to-cyan-500',
        bgColor: 'from-blue-50 to-cyan-50'
      },
      {
        category: 'Publication',
        slug: 'publication',
        date: 'October 15, 2023',
        title: 'Groundbreaking Research on Explainable AI in Radiology Published in The Lancet Digital Health',
        excerpt: 'Our latest study, validating the efficacy and trustworthiness of our XAI model, has been published in a leading peer-reviewed journal, marking a significant milestone for transparent AI.',
        icon: FileText,
        color: 'from-green-500 to-emerald-500',
        bgColor: 'from-green-50 to-emerald-50'
      },
      {
        category: 'Media Feature',
        slug: 'media',
        date: 'September 29, 2023',
        title: 'Skolyn Featured in Tech Caspian for Innovations in National Medical AI Strategy',
        excerpt: 'Tech Caspian highlights Skolyn\'s pivotal role in advancing Azerbaijan\'s healthcare technology landscape and its alignment with national strategic goals for digital transformation.',
        icon: Tv,
        color: 'from-orange-500 to-amber-500',
        bgColor: 'from-orange-50 to-amber-50'
      },
      {
        category: 'Event',
        slug: 'event',
        date: 'September 5, 2023',
        title: 'CEO Murad Shikhiyev to Deliver Keynote at the World Health Innovation Summit',
        excerpt: 'Our CEO will discuss the future of augmented clinical intelligence and the ethical imperatives of AI in medicine on a global stage, sharing insights from our journey.',
        icon: Calendar,
        color: 'from-purple-500 to-pink-500',
        bgColor: 'from-purple-50 to-pink-50'
      },
    ];

    const getCategoryColor = (slug: string) => {
      const item = newsItems.find(item => item.slug === slug);
      return item ? item.color : 'from-gray-500 to-gray-600';
    };
  
    return (
      <section id="news" className="relative py-20 bg-gradient-to-br from-slate-50 via-green-50/30 to-white min-h-screen flex flex-col justify-center overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-green-400/8 to-emerald-400/8 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-orange-400/8 to-amber-400/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-purple-400/8 to-pink-400/8 rounded-full blur-3xl animate-pulse delay-2000"></div>
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
                  className="p-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl shadow-lg"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Newspaper className="w-10 h-10 text-white" />
                </motion.div>
                <motion.div 
                  className="p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-lg"
                  animate={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <FileText className="w-10 h-10 text-white" />
                </motion.div>
                <motion.div 
                  className="p-4 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl shadow-lg"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                >
                  <Tv className="w-10 h-10 text-white" />
                </motion.div>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[--color-primary] via-[--color-secondary] to-[--color-accent] bg-clip-text text-transparent">
                Latest News & Updates
              </h2>
              <p className="text-xl text-[--color-text-light] max-w-4xl mx-auto leading-relaxed">
                Stay informed about our latest research, partnerships, and breakthroughs in clinical intelligence.
              </p>
            </motion.div>

            {/* News Items */}
            <motion.div variants={itemVariants} className="flex flex-col gap-8 max-w-4xl mx-auto">
              {newsItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div 
                    key={index}
                    variants={cardVariants}
                    custom={index}
                    className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 transition-all duration-300 hover:shadow-2xl"
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 lg:gap-8">
                      <div className="space-y-4">
                        <div className="flex items-center gap-4 mb-4">
                          <div className={`p-3 bg-gradient-to-br ${item.color} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                            <span className={`text-xs font-bold py-2 px-4 bg-gradient-to-r ${item.color} text-white rounded-full uppercase tracking-wider shadow-lg`}>
                              {item.category}
                            </span>
                            <span className="text-sm text-[--color-text-light] flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {item.date}
                            </span>
                          </div>
                        </div>
                        <h4 className="text-2xl font-bold text-[--color-primary] mb-3 leading-tight group-hover:text-[--color-secondary] transition-colors duration-300">
                          {item.title}
                        </h4>
                        <p className="text-[--color-text-light] text-lg leading-relaxed">{item.excerpt}</p>
                      </div>
                      <div className="flex lg:items-center">
                        <motion.a 
                          href="#" 
                          className={`inline-flex items-center gap-3 bg-gradient-to-r ${item.color} text-white px-6 py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap group/button`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink className="w-4 h-4 group-hover/button:rotate-12 transition-transform duration-300" />
                          Read More
                          <ArrowRight className="w-4 h-4 group-hover/button:translate-x-1 transition-transform duration-300" />
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>
    );
  };

export default NewsSection;
