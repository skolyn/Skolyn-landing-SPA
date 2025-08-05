import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  Target, 
  Heart, 
  Shield, 
  Microscope, 
  Handshake, 
  Lightbulb, 
  Award,
  MapPin,
  Building,
  TrendingUp,
  CheckCircle,
  Briefcase
} from 'lucide-react';

const AboutSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activePhilosophy, setActivePhilosophy] = useState(0);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('about');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // Auto-rotate philosophy cards
  useEffect(() => {
    const interval = setInterval(() => {
      setActivePhilosophy((prev) => (prev + 1) % 3);
    }, 4000);
    
    return () => clearInterval(interval);
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

  const philosophyData = [
    {
      title: 'Augmenting Intelligence, Not Replacing It',
      description: 'We hold an unshakeable respect for the irreplaceable value of human expertise and clinical intuition. Our AI is designed from the ground up to be a co-pilot, not an autopilot, freeing clinicians to focus their cognitive energy on the most complex aspects of patient care.',
      icon: Users,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50'
    },
    {
      title: 'Trust Through Radical Transparency',
      description: 'We are fundamentally opposed to the "black box" model of AI. Our commitment to Explainable AI (XAI) means that every finding our platform generates is auditable, understandable, and defensible, creating a "Glass Box" to transform our platform from a mere tool into a trusted collaborator.',
      icon: Shield,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50'
    },
    {
      title: 'Innovation Grounded in Scientific Rigor',
      description: 'Innovation without validation is merely a hypothesis. Our approach is deeply rooted in the principles of evidence-based medicine. Every algorithm we deploy undergoes a relentless cycle of training, testing, and clinical validation against internationally recognized benchmarks.',
      icon: Microscope,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50'
    }
  ];

  const coreValues = [
    { 
      title: 'Patient-Centricity', 
      description: 'We start and end with the patient. Every feature must serve the goal of improving a patient\'s health.',
      icon: Heart,
      color: 'from-red-500 to-pink-500'
    },
    { 
      title: 'Uncompromising Integrity', 
      description: 'We operate with the highest ethical standards, transparency, and commitment to protecting patient data.',
      icon: Shield,
      color: 'from-blue-500 to-indigo-500'
    },
    { 
      title: 'Scientific Rigor', 
      description: 'We are evidence-driven. We question assumptions and validate our results to the highest standards.',
      icon: Microscope,
      color: 'from-green-500 to-teal-500'
    },
    { 
      title: 'Radical Collaboration', 
      description: 'We believe breakthroughs happen at the intersection of disciplines, fostering a culture of teamwork.',
      icon: Handshake,
      color: 'from-orange-500 to-amber-500'
    },
    { 
      title: 'Pioneering Innovation', 
      description: 'We are not here to follow; we are here to lead. We embrace bold ideas and challenge the status quo.',
      icon: Lightbulb,
      color: 'from-purple-500 to-violet-500'
    }
  ];
  const teamMembers = [
    { name: 'Murad Shikhiyev', title: 'Chief Executive Officer (CEO)', initials: 'MS' },
    { name: 'Said Aliyev', title: 'Chief Operating Officer (COO)', initials: 'SA' },
    { name: 'Konul Bayramova', title: 'Chief Financial Officer (CFO)', initials: 'KB' },
    { name: 'Olaf Yunus Laitinen Imanov', title: 'Chief Technology Officer (CTO)', initials: 'OI' },
    { name: 'Tural Hasanov', title: 'Chief Product Officer (CPO)', initials: 'TH' },
    { name: 'Nurlana Isazada', title: 'Chief Medical Officer (CMO)', initials: 'NI' },
    { name: 'Tamara Mammadli', title: 'Chief Ethics Officer (CETO)', initials: 'TM' },
    { name: 'Nurana Abdullayeva', title: 'Chief Legal Officer (CLO)', initials: 'NA' },
    { name: 'Rajab Iskandarli', title: 'Chief AI Officer (CAIO)', initials: 'RI' },
    { name: 'Ahmet Yasir Duman', title: 'Chief Automation & AI Ethics Officer (CAAE)', initials: 'AD' },
    { name: 'Kayrahan Ozcan', title: 'Chief AI Product Officer (CAIPO)', initials: 'KO' },
  ];

  return (
    <section id="about" className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white min-h-screen overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/8 to-cyan-400/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-br from-purple-400/8 to-pink-400/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-gradient-to-br from-green-400/8 to-emerald-400/8 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* Hero Section */}
          <motion.div variants={itemVariants} className="text-center pb-20">
            <div className="max-w-6xl mx-auto px-5">
              <div className="flex items-center justify-center gap-4 mb-8">
                <motion.div 
                  className="p-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl shadow-lg"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Building className="w-10 h-10 text-white" />
                </motion.div>
                <motion.div 
                  className="p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-lg"
                  animate={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <Target className="w-10 h-10 text-white" />
                </motion.div>
                <motion.div 
                  className="p-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl shadow-lg"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                >
                  <Award className="w-10 h-10 text-white" />
                </motion.div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[--color-primary] via-[--color-secondary] to-[--color-accent] bg-clip-text text-transparent mb-6">
                About Skolyn
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold text-[--color-primary] mb-6">
                Pioneering the Future of Clinical Intelligence
              </h2>
              <p className="text-xl max-w-4xl mx-auto text-[--color-text-light] leading-relaxed">
                We are a team of scientists, doctors, and engineers united by a single, audacious mission: to create an artificial intelligence that serves as a trusted co-pilot for every clinician, enhancing human expertise to save lives and improve patient outcomes.
              </p>
            </div>
          </motion.div>

          {/* Story Section */}
          <motion.div variants={itemVariants} className="py-20">
            <div className="max-w-6xl mx-auto px-5">
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="p-3 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-[--color-primary]">Our Story</h2>
              </div>
              <p className="text-center text-xl text-[--color-text-light] mb-12 max-w-3xl mx-auto">
                The Genesis of Skolyn
              </p>
              <div className="max-w-4xl mx-auto space-y-8">
                <motion.div 
                  className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-lg text-[--color-text-light] leading-relaxed">
                    Every transformative idea begins with a fundamental question. For us, it was a question born from observing the front lines of modern medicine. We saw brilliant, dedicated clinicians—radiologists, oncologists, surgeons—grappling with an unsustainable reality: an ever-increasing volume of complex medical data, diagnostic processes that still relied heavily on subjective interpretation, and the immense pressure of making life-altering decisions under tight time constraints.
                  </p>
                </motion.div>
                <motion.div 
                  className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 shadow-xl border border-blue-100/50"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-lg text-[--color-text-light] leading-relaxed">
                    Simultaneously, we saw the explosive potential of artificial intelligence. We knew AI could process images and find patterns far beyond human capacity. Yet, we also saw a critical gap—a <strong className="text-[--color-text] font-semibold">trust deficit</strong>. Early AI tools in medicine were "black boxes," offering conclusions without context, answers without reasoning. How could a doctor trust an algorithm with a patient's life if the algorithm couldn't explain <em>why</em> it made its decision?
                  </p>
                </motion.div>
                <motion.div 
                  className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 shadow-xl border border-purple-100/50"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-lg text-[--color-text-light] leading-relaxed">
                    This is where Skolyn was born. Our founders, a unique blend of Azerbaijani visionaries from the worlds of technology, medicine, and scientific research, came together to solve this challenge. We set out to build a new kind of AI—one that doesn't just provide an answer, but illuminates the path to that answer. It is an endeavor built not on replacing human expertise, but on augmenting it.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Philosophy Section */}
          <motion.div variants={itemVariants} className="py-20 relative">
            <div className="max-w-6xl mx-auto px-5">
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-[--color-primary]">Our Philosophy</h2>
              </div>
              <p className="text-center text-xl text-[--color-text-light] mb-16 max-w-3xl mx-auto">
                The Three Pillars of Skolyn's Intelligence
              </p>
              
              {/* Interactive Philosophy Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {philosophyData.map((pillar, index) => {
                  const Icon = pillar.icon;
                  return (
                    <motion.div
                      key={index}
                      variants={cardVariants}
                      className={`relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border transition-all duration-500 cursor-pointer group ${
                        activePhilosophy === index 
                          ? 'border-transparent ring-2 ring-blue-200 bg-gradient-to-br from-white to-blue-50/50' 
                          : 'border-white/20 hover:border-blue-100'
                      }`}
                      whileHover={{ scale: 1.05, y: -10 }}
                      onClick={() => setActivePhilosophy(index)}
                    >
                      {/* Gradient overlay for active card */}
                      {activePhilosophy === index && (
                        <motion.div 
                          className={`absolute inset-0 bg-gradient-to-br ${pillar.bgColor} opacity-20 rounded-3xl`}
                          layoutId="activePhilosophy"
                          transition={{ duration: 0.3 }}
                        />
                      )}
                      
                      <div className="relative z-10">
                        <motion.div 
                          className={`inline-flex p-4 bg-gradient-to-br ${pillar.color} rounded-2xl shadow-lg mb-6`}
                          animate={activePhilosophy === index ? { scale: [1, 1.1, 1] } : {}}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <Icon className="w-8 h-8 text-white" />
                        </motion.div>
                        <h3 className="text-xl font-bold text-[--color-primary] mb-4">{pillar.title}</h3>
                        <p className="text-base text-[--color-text-light] leading-relaxed">{pillar.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Mission and Vision */}
          <motion.div variants={itemVariants} className="py-20">
            <div className="max-w-6xl mx-auto px-5 text-center">
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-[--color-primary]">Our Mission and Vision</h2>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 justify-center max-w-5xl mx-auto">
                <motion.div 
                  className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 shadow-xl border border-blue-100/50"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-2xl text-[--color-secondary] font-bold">Our Vision</h4>
                  </div>
                  <p className="text-lg text-[--color-text-light] leading-relaxed">
                    To be Azerbaijan's flagship medical AI company, pioneering the development and implementation of clinical intelligence solutions that support the nation's strategic goals for healthcare innovation and digital transformation.
                  </p>
                </motion.div>
                <motion.div 
                  className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 shadow-xl border border-purple-100/50"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-2xl text-[--color-secondary] font-bold">Our Mission</h4>
                  </div>
                  <p className="text-lg text-[--color-text-light] leading-relaxed">
                    To empower Azerbaijani clinicians with a precise, data-driven diagnostic platform. By partnering with leading medical institutions, aligning with state health initiatives, and fostering local AI talent, we aim to significantly improve diagnostic accuracy, enhance patient outcomes, and establish Azerbaijan as a regional leader in health technology.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Core Values */}
          <motion.div variants={itemVariants} className="py-20 bg-gradient-to-br from-slate-50/50 to-blue-50/30">
            <div className="max-w-6xl mx-auto px-5">
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="p-3 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-[--color-primary]">Our Core Values</h2>
              </div>
              <p className="text-center text-xl text-[--color-text-light] mb-16 max-w-3xl mx-auto">
                The DNA of Our Culture
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {coreValues.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <motion.div
                      key={index}
                      variants={cardVariants}
                      custom={index}
                      className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20 text-left group hover:shadow-2xl transition-all duration-300"
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`p-3 bg-gradient-to-br ${value.color} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <h4 className="text-[--color-primary] font-bold text-lg">{value.title}</h4>
                      </div>
                      <p className="text-sm text-[--color-text-light] leading-relaxed">{value.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Team Section */}
          <motion.div variants={itemVariants} className="py-20">
            <div className="max-w-6xl mx-auto px-5 text-center">
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-[--color-primary]">The Team</h2>
              </div>
              <p className="text-xl text-[--color-text-light] mb-16 max-w-4xl mx-auto leading-relaxed">
                Led by a Convergence of Visionaries
              </p>
              <p className="mb-16 text-lg text-[--color-text-light] max-w-4xl mx-auto">
                Our strength lies in our multidisciplinary team—a carefully assembled group of leaders with deep expertise spanning AI research, software engineering, clinical medicine, regulatory affairs, and business strategy.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 max-w-6xl mx-auto">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={member.name}
                    variants={cardVariants}
                    custom={index}
                    className="text-center group"
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div 
                      className="w-24 h-24 md:w-30 md:h-30 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl md:text-4xl font-semibold shadow-xl border-4 border-white/20 group-hover:shadow-2xl transition-all duration-300"
                      style={{
                        backgroundImage: `linear-gradient(135deg, var(--color-primary), var(--color-accent))`
                      }}
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.6 }}
                    >
                      {member.initials}
                    </motion.div>
                    <h3 className="text-lg md:text-xl text-[--color-text] font-semibold mb-2">{member.name}</h3>
                    <p className="text-xs md:text-sm text-[--color-text-light] leading-relaxed">{member.title}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Commitment to Azerbaijan */}
          <motion.div variants={itemVariants} className="py-20 bg-gradient-to-br from-slate-50/50 to-blue-50/30">
            <div className="max-w-6xl mx-auto px-5 text-center">
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="p-3 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-[--color-primary]">Our Commitment to Azerbaijan</h2>
              </div>
              <motion.div 
                className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 max-w-4xl mx-auto mb-12"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-lg text-[--color-text-light] leading-relaxed mb-8">
                  Skolyn is proudly homegrown. We are more than a startup; we are a strategic national asset, born from and dedicated to the technological advancement of Azerbaijan. Our work is in direct alignment with the Presidential "Artificial Intelligence Strategy for 2025–2028" and the "Strategy of Socio-Economic Development for 2022–2026," driving innovation and building competitive human capital in the nation's most critical sector.
                </p>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <motion.div 
                  className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 shadow-lg border border-green-100/50"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <h4 className="font-bold text-[--color-primary]">Building Local Talent</h4>
                  </div>
                  <p className="text-sm text-[--color-text-light]">Through initiatives like the Skolyn AI Residency</p>
                </motion.div>
                
                <motion.div 
                  className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 shadow-lg border border-blue-100/50"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                    <h4 className="font-bold text-[--color-primary]">Economic Diversification</h4>
                  </div>
                  <p className="text-sm text-[--color-text-light]">Creating high-value, knowledge-based jobs</p>
                </motion.div>
                
                <motion.div 
                  className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 shadow-lg border border-purple-100/50"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-6 h-6 text-purple-600" />
                    <h4 className="font-bold text-[--color-primary]">Healthcare System</h4>
                  </div>
                  <p className="text-sm text-[--color-text-light]">Strengthening with world-class tools</p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="py-20">
            <div className="max-w-6xl mx-auto px-5 text-center">
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="p-3 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-[--color-primary]">Join Our Mission</h2>
              </div>
              <motion.div 
                className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-8 shadow-xl border border-orange-100/50 max-w-3xl mx-auto"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <p className="mb-8 text-lg text-[--color-text-light] leading-relaxed">
                  We are building a company that will leave a lasting impact on the world. If you are driven by a desire to solve meaningful problems and believe in the power of technology to improve human lives, we invite you to explore a career with us.
                </p>
                <motion.a 
                  href="#careers" 
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[--color-primary] to-[--color-secondary] text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Briefcase className="w-5 h-5 text-black group-hover:rotate-12 transition-transform duration-300" />
                  <span className="text-lg text-black">Explore Careers</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
