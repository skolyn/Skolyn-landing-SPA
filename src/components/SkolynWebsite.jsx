import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { 
  Menu, 
  X, 
  ArrowRight, 
  Shield, 
  Brain, 
  Zap, 
  Users, 
  Award, 
  Globe, 
  ChevronDown,
  Play,
  CheckCircle,
  TrendingUp,
  Clock,
  AlertTriangle,
  Target,
  Microscope,
  Activity,
  FileText,
  Eye,
  BarChart3,
  Lock,
  Cloud,
  Database,
  Cpu,
  Network,
  Calendar,
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Twitter,
  ExternalLink
} from 'lucide-react';

// Import sections
import ProblemSection from './sections/ProblemSection';
import PlatformSection from './sections/PlatformSection';
import TechnologySection from './sections/TechnologySection';
import CompanySection from './sections/CompanySection';
import NewsSection from './sections/NewsSection';
import CareersSection from './sections/CareersSection';
import DemoSection from './sections/DemoSection';

const SkolynWebsite = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      // Handle navigation background change
      setIsScrolled(window.scrollY > 50);

      sections.forEach((section) => {
        if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg border-b border-gray-200' 
          : 'bg-white/10 backdrop-blur-md'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Official Skolyn Logo */}
            <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('hero')}>
              <div className="flex items-center space-x-3">
                {/* Circular Logo */}
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 ${
                  isScrolled ? 'bg-white' : 'bg-white/10 backdrop-blur-sm'
                }`}>
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg viewBox="0 0 100 100" className="w-6 h-6">
                      <defs>
                        <pattern id="swirl" patternUnits="userSpaceOnUse" width="100" height="100">
                          <path 
                            d="M50,10 Q80,30 70,50 Q60,70 50,50 Q40,30 50,10" 
                            fill="none" 
                            stroke={isScrolled ? "#030f4f" : "white"} 
                            strokeWidth="8"
                          />
                          <path 
                            d="M50,90 Q20,70 30,50 Q40,30 50,50 Q60,70 50,90" 
                            fill="none" 
                            stroke={isScrolled ? "#030f4f" : "white"} 
                            strokeWidth="8"
                          />
                        </pattern>
                      </defs>
                      <circle cx="50" cy="50" r="45" fill="url(#swirl)" />
                    </svg>
                  </div>
                </div>
                {/* Skolyn Text */}
                <span className={`text-xl font-bold transition-colors duration-200 ${
                  isScrolled ? 'text-[#030f4f]' : 'text-white'
                }`}>
                  Skolyn
                </span>
              </div>
            </div>

            {/* Desktop Navigation - Updated Menu Items */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { label: 'The Platform', id: 'platform' },
                { label: 'Our Technology', id: 'technology' },
                { label: 'Our Story', id: 'company' },
                { label: 'News & Insights', id: 'news' },
                { label: 'Careers', id: 'careers' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`font-medium transition-colors duration-200 ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-[#030f4f]' 
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button 
                variant="outline" 
                onClick={() => onNavigate && onNavigate('login')}
                className={`transition-colors duration-200 ${
                  isScrolled
                    ? 'border-gray-300 text-gray-700 hover:bg-gray-50'
                    : 'border-white/30 text-white hover:bg-white/10'
                }`}
              >
                Login
              </Button>
              <Button 
                className="bg-[#00A99D] hover:bg-[#00A99D]/90 text-white"
                onClick={() => scrollToSection('demo')}
              >
                Request a Demo
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden transition-colors duration-200 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {[
                  { label: 'The Platform', id: 'platform' },
                  { label: 'Our Technology', id: 'technology' },
                  { label: 'Our Story', id: 'company' },
                  { label: 'News & Insights', id: 'news' },
                  { label: 'Careers', id: 'careers' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block px-3 py-2 text-gray-700 hover:text-[#030f4f] w-full text-left font-medium"
                  >
                    {item.label}
                  </button>
                ))}
                <div className="flex flex-col space-y-2 px-3 pt-4">
                  <Button variant="outline" onClick={() => onNavigate && onNavigate('login')}>
                    Login
                  </Button>
                  <Button 
                    className="bg-[#00A99D] hover:bg-[#00A99D]/90"
                    onClick={() => scrollToSection('demo')}
                  >
                    Request a Demo
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#030f4f] via-[#030f4f]/95 to-[#030f4f]/90">
          <div className="absolute inset-0 bg-black/20"></div>
          {/* Animated Neural Network Background */}
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full bg-gradient-to-br from-[#00A99D]/30 to-transparent"></div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl">
          {/* Main Logo */}
          <div className="mb-8">
            <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
              <div className="flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-16 h-16">
                  <defs>
                    <pattern id="swirl-hero" patternUnits="userSpaceOnUse" width="100" height="100">
                      <path 
                        d="M50,15 Q75,25 65,50 Q55,75 50,50 Q45,25 50,15" 
                        fill="none" 
                        stroke="#030f4f" 
                        strokeWidth="6"
                      />
                      <path 
                        d="M50,85 Q25,75 35,50 Q45,25 50,50 Q55,75 50,85" 
                        fill="none" 
                        stroke="#030f4f" 
                        strokeWidth="6"
                      />
                      <path 
                        d="M15,50 Q25,25 50,35 Q75,45 50,50 Q25,55 15,50" 
                        fill="none" 
                        stroke="#00A99D" 
                        strokeWidth="4"
                      />
                      <path 
                        d="M85,50 Q75,75 50,65 Q25,55 50,50 Q75,45 85,50" 
                        fill="none" 
                        stroke="#00A99D" 
                        strokeWidth="4"
                      />
                    </pattern>
                  </defs>
                  <circle cx="50" cy="50" r="40" fill="url(#swirl-hero)" />
                </svg>
              </div>
            </div>
            <p className="text-[#00A99D] font-semibold text-lg tracking-wide">
              Early. Accurate. Trusted.
            </p>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Clarity in <span className="text-[#00A99D] font-extrabold">Complexity</span>.
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
            Skolyn is the enterprise-grade Clinical Intelligence OS. We leverage proprietary 
            Explainable AI to grant clinicians superhuman accuracy and build unwavering trust 
            in every diagnosis.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button 
              size="lg" 
              className="bg-[#00A99D] hover:bg-[#00A99D]/90 text-lg px-8 py-6 h-auto"
              onClick={() => scrollToSection('demo')}
            >
              Request a Personalized Demo
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-[#030f4f] text-lg px-8 py-6 h-auto"
              onClick={() => scrollToSection('platform')}
            >
              Explore Our Technology <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <ChevronDown className="h-8 w-8 text-white animate-bounce" />
        </div>
      </section>

      {/* Credibility Bar - Infinite Scrolling Partners */}
      <section className="py-12 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600 mb-8 text-lg">
            A Registered National Technology Startup, Proudly Incubated at INNOland and Backed by a World-Class Ecosystem of Strategic Partners
          </p>
          
          {/* Infinite Scrolling Carousel */}
          <div className="relative">
            <div className="flex animate-scroll space-x-16 items-center">
              {/* First set of partners */}
              {[
                { name: 'INNOland', color: '#0066CC', url: 'https://innoland.az' },
                { name: 'KOBİA', color: '#FF4444', url: '#' },
                { name: 'Google for Startups', color: '#4285F4', url: 'https://startup.google.com' },
                { name: 'Pasha Bank', color: '#00A651', url: 'https://pashabank.az' }
              ].map((partner, index) => (
                <a
                  key={`first-${index}`}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 flex items-center space-x-3 grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105"
                >
                  <div 
                    className="w-16 h-16 rounded-xl flex items-center justify-center shadow-lg"
                    style={{ backgroundColor: partner.color }}
                  >
                    <span className="text-white font-bold text-lg">
                      {partner.name === 'Google for Startups' ? 'G' : partner.name.slice(0, 2)}
                    </span>
                  </div>
                  <span className="font-semibold text-gray-700 whitespace-nowrap">{partner.name}</span>
                </a>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {[
                { name: 'INNOland', color: '#0066CC', url: 'https://innoland.az' },
                { name: 'KOBİA', color: '#FF4444', url: '#' },
                { name: 'Google for Startups', color: '#4285F4', url: 'https://startup.google.com' },
                { name: 'Pasha Bank', color: '#00A651', url: 'https://pashabank.az' }
              ].map((partner, index) => (
                <a
                  key={`second-${index}`}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 flex items-center space-x-3 grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105"
                >
                  <div 
                    className="w-16 h-16 rounded-xl flex items-center justify-center shadow-lg"
                    style={{ backgroundColor: partner.color }}
                  >
                    <span className="text-white font-bold text-lg">
                      {partner.name === 'Google for Startups' ? 'G' : partner.name.slice(0, 2)}
                    </span>
                  </div>
                  <span className="font-semibold text-gray-700 whitespace-nowrap">{partner.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Sections */}
      <ProblemSection />
      <PlatformSection />
      <TechnologySection />
      <NewsSection />
      <CompanySection />
      <CareersSection />
      <DemoSection />

      {/* Footer */}
      <footer className="bg-[#030f4f] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              {/* Official Skolyn Logo */}
              <div className="mb-6">
                <div className="flex items-center space-x-3">
                  {/* Circular Logo */}
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                    <div className="w-8 h-8 flex items-center justify-center">
                      <svg viewBox="0 0 100 100" className="w-6 h-6">
                        <defs>
                          <pattern id="swirl-footer" patternUnits="userSpaceOnUse" width="100" height="100">
                            <path 
                              d="M50,10 Q80,30 70,50 Q60,70 50,50 Q40,30 50,10" 
                              fill="none" 
                              stroke="#030f4f" 
                              strokeWidth="8"
                            />
                            <path 
                              d="M50,90 Q20,70 30,50 Q40,30 50,50 Q60,70 50,90" 
                              fill="none" 
                              stroke="#030f4f" 
                              strokeWidth="8"
                            />
                          </pattern>
                        </defs>
                        <circle cx="50" cy="50" r="45" fill="url(#swirl-footer)" />
                      </svg>
                    </div>
                  </div>
                  {/* Skolyn Text */}
                  <span className="text-2xl font-bold text-white">Skolyn</span>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                Revolutionizing medical diagnostics through explainable AI that enhances 
                clinical decision-making while maintaining the human touch that defines 
                compassionate healthcare.
              </p>
              <div className="space-y-2">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 text-[#00A99D] mt-1 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">Z.Nudirəliyev küç. 79, Nərimanov rayonu, Bakı, Azərbaycan, AZ1078</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-[#00A99D]" />
                  <span className="text-gray-300 text-sm">leads@skolyn.se</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-[#00A99D]" />
                  <span className="text-gray-300 text-sm">+994 12 555 0123</span>
                </div>
              </div>
            </div>

            {/* Platform Links */}
            <div>
              <h3 className="font-bold text-lg mb-4">The Platform</h3>
              <ul className="space-y-2">
                {[
                  'Smart Triage & AI Prioritization',
                  'Multi-Modal Diagnostic Core',
                  'Explainable AI Engine',
                  'Longitudinal Analysis',
                  'AI-Assisted Reporting',
                  'Integration & APIs'
                ].map((item) => (
                  <li key={item}>
                    <button className="text-gray-300 hover:text-[#00A99D] transition-colors text-sm text-left">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                {[
                  { label: 'Our Story', id: 'company' },
                  { label: 'Leadership Team', id: 'company' },
                  { label: 'Our Technology', id: 'technology' },
                  { label: 'News & Insights', id: 'news' },
                  { label: 'Careers', id: 'careers' },
                  { label: 'Contact Us', id: 'demo' }
                ].map((item) => (
                  <li key={item.label}>
                    <button 
                      className="text-gray-300 hover:text-[#00A99D] transition-colors text-sm text-left"
                      onClick={() => scrollToSection(item.id)}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
                <p className="text-gray-400 text-sm">
                  © 2025 Skolyn LLC. All rights reserved.
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
                  <button 
                    className="text-gray-400 hover:text-[#00A99D] transition-colors"
                    onClick={() => onNavigate && onNavigate('privacy')}
                  >
                    Privacy Policy
                  </button>
                  <button 
                    className="text-gray-400 hover:text-[#00A99D] transition-colors"
                    onClick={() => onNavigate && onNavigate('terms')}
                  >
                    Terms of Service
                  </button>
                  <button 
                    className="text-gray-400 hover:text-[#00A99D] transition-colors"
                    onClick={() => onNavigate && onNavigate('gdpr')}
                  >
                    GDPR Compliance
                  </button>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 mt-4 md:mt-0">
                {[
                  { icon: <Linkedin className="h-5 w-5" />, label: 'LinkedIn', url: 'https://linkedin.com/company/skolyn' },
                  { icon: <Twitter className="h-5 w-5" />, label: 'Twitter', url: 'https://twitter.com/skolyn' },
                  { icon: <ExternalLink className="h-5 w-5" />, label: 'Website', url: 'https://skolyn.se' }
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-400 hover:text-[#00A99D] hover:bg-white/10 rounded-lg transition-all duration-200"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SkolynWebsite;