import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, MessageSquare, Send, CheckCircle, ExternalLink } from 'lucide-react';

interface ContactSectionProps {
  onPageChange?: (page: string) => void;
}

const ContactSection: React.FC<ContactSectionProps> = ({ onPageChange }) => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
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

    const section = document.getElementById('contact');
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd handle form submission here.
    console.log("Form submitted");
    setIsFormSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsFormSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="relative bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 text-blue-100 py-16 pb-8 min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-gradient-to-br from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-5 z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Demo Request Section */}
          <motion.div variants={itemVariants} className="text-center space-y-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <motion.div 
                className="p-4 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl shadow-lg"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <MessageSquare className="w-10 h-10 text-white" />
              </motion.div>
              <motion.div 
                className="p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-lg"
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <Mail className="w-10 h-10 text-white" />
              </motion.div>
              <motion.div 
                className="p-4 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl shadow-lg"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              >
                <Send className="w-10 h-10 text-white" />
              </motion.div>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white">
              Schedule a Personalized Demonstration
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              Fill out the form below, and a member of our team will be in touch to schedule a live demonstration.
            </p>
            
            <motion.div 
              className="max-w-2xl mx-auto bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {isFormSubmitted ? (
                <motion.div 
                  className="text-center py-8"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div 
                    className="inline-flex p-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mb-6"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <CheckCircle className="w-12 h-12 text-white" />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-white mb-4">Thank you!</h3>
                  <p className="text-blue-100 text-lg">We'll be in touch soon to schedule your demonstration.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="fullName" className="block mb-3 font-semibold text-white text-sm">Full Name</label>
                      <input 
                        type="text" 
                        id="fullName" 
                        name="fullName" 
                        required 
                        className="w-full p-4 border border-white/30 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300" 
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="jobTitle" className="block mb-3 font-semibold text-white text-sm">Job Title</label>
                      <input 
                        type="text" 
                        id="jobTitle" 
                        name="jobTitle" 
                        required 
                        className="w-full p-4 border border-white/30 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300" 
                        placeholder="Enter your job title"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="institution" className="block mb-3 font-semibold text-white text-sm">Hospital / Institution</label>
                      <input 
                        type="text" 
                        id="institution" 
                        name="institution" 
                        required 
                        className="w-full p-4 border border-white/30 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300" 
                        placeholder="Enter your institution"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block mb-3 font-semibold text-white text-sm">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required 
                        className="w-full p-4 border border-white/30 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300" 
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  
                  <fieldset className="border-none p-0">
                    <legend className="block mb-4 font-semibold text-white text-sm">Module(s) of Interest</legend>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {['Breast', 'Neuro', 'Prostate', 'Knee'].map((interest) => (
                        <div key={interest} className="flex items-center p-3 bg-white/5 rounded-xl border border-white/20 hover:bg-white/10 transition-all duration-300">
                          <input 
                            type="checkbox" 
                            id={`interest${interest}`} 
                            name="interest" 
                            value={interest} 
                            className="mr-3 w-4 h-4 rounded accent-cyan-500" 
                          />
                          <label htmlFor={`interest${interest}`} className="text-blue-100 text-sm font-medium">{interest}</label>
                        </div>
                      ))}
                    </div>
                  </fieldset>
                  
                  <div>
                    <label htmlFor="message" className="block mb-3 font-semibold text-white text-sm">Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={4} 
                      className="w-full p-4 border border-white/30 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell us about your specific needs or questions..."
                    ></textarea>
                  </div>
                  
                  <div className="text-center pt-4">
                    <motion.button 
                      type="submit" 
                      className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Send className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                      Submit Request
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </motion.button>
                  </div>
                </form>
              )}
            </motion.div>
          </motion.div>

          {/* Contact Information Section */}
          <motion.div variants={itemVariants} className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div 
                className="space-y-6 text-center lg:text-left"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">Skolyn</h3>
                </div>
                <p className="leading-relaxed">Empowering clinicians with precise, data-driven diagnostic intelligence.</p>
              </motion.div>
              
              <motion.div 
                className="space-y-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="text-white text-lg font-semibold flex items-center gap-2">
                  <ExternalLink className="w-5 h-5" />
                  Navigate
                </h4>
                <ul className="space-y-3">
                  {[
                    { label: 'Platform', page: 'platform' },
                    { label: 'About', page: 'about' },
                    { label: 'Partners', page: 'partners' },
                    { label: 'Careers', page: 'careers' }
                  ].map((item) => (
                    <li key={item.page}>
                      <motion.button 
                        onClick={() => onPageChange?.(item.page)} 
                        className="text-blue-100 hover:text-white transition-colors duration-300 text-left group flex items-center gap-2"
                        whileHover={{ x: 5 }}
                      >
                        <span className="w-1 h-1 bg-cyan-400 rounded-full group-hover:scale-150 transition-transform duration-300"></span>
                        {item.label}
                      </motion.button>
                    </li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div 
                className="space-y-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="text-white text-lg font-semibold flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Contact
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    <p>Baku, Azerbaijan</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-cyan-400" />
                    <a href="mailto:info@skolyn.se" className="text-blue-100 hover:text-white transition-colors duration-300">
                      info@skolyn.se
                    </a>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="space-y-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="text-white text-lg font-semibold flex items-center gap-2">
                  <ExternalLink className="w-5 h-5" />
                  Follow Us
                </h4>
                <div className="flex gap-4 justify-center lg:justify-start">
                  {[
                    { 
                      name: 'LinkedIn', 
                      href: '#',
                      icon: (
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      )
                    },
                    { 
                      name: 'Twitter', 
                      href: '#',
                      icon: (
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.298 1.634 4.212 3.793 4.649-.65.177-1.353.242-2.074.197.621 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.588-7.52 2.588-.49 0-.974-.028-1.455-.086 2.679 1.728 5.86 2.746 9.282 2.746 8.525 0 13.32-7.017 13.045-13.419.9-6.522 1.626-1.227 2.21-2.125z"/>
                        </svg>
                      )
                    }
                  ].map((social) => (
                    <motion.a 
                      key={social.name}
                      href={social.href} 
                      aria-label={social.name} 
                      className="p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-blue-100 hover:text-white hover:bg-white/20 transition-all duration-300 group"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              className="border-t border-white/20 pt-8 text-center"
              variants={itemVariants}
            >
              <p className="text-sm opacity-80">
                &copy; {new Date().getFullYear()} Skolyn. All rights reserved.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
