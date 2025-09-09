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
                {/* Skolyn Logo */}
                <img 
                  src={isScrolled ? "/logos/logo-black.svg" : "/logos/logo-white.svg"}
                  alt="Skolyn Logo"
                  className="h-8 w-auto transition-opacity duration-200"
                />
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
            <div className="flex items-center justify-center mx-auto mb-6">
              <img 
                src="/logos/logo-white2.svg"
                alt="Skolyn Logo"
                className="w-82 h-34 object-contain"
              />
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Clarity in <span className="text-[#00A99D] font-extrabold">Complexity</span>.
          </h1>
          
          <p className="text-base md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
            Skolyn is the enterprise-grade Clinical Intelligence OS. We leverage proprietary 
            Explainable AI to grant clinicians superhuman accuracy and build unwavering trust 
            in every diagnosis.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button 
              size="lg" 
              className="bg-[#00A99D] hover:bg-[#00A99D]/90 text-sm md:text-lg px-6 py-4 h-auto"
              onClick={() => scrollToSection('demo')}
            >
              Request a Personalized Demo
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-[#030f4f] text-sm md:text-lg px-6 py-4 h-auto"
              onClick={() => scrollToSection('platform')}
            >
              Explore Our Technology <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Scroll Indicator Down */}
 <div
  className="
    absolute bottom-8 
    left-1/2 -translate-x-1/2
    cursor-pointer 
    hidden md:block   // mobilde gizle, tablet ve üstünde göster
  "
  onClick={() => window.scrollBy({ top: 900, behavior: 'smooth' })}
>
  <ChevronDown className="h-8 w-8 text-white animate-bounce" />
</div>

{/* Scroll Indicator UP  */}
<div
  className="fixed bottom-8 right-8 cursor-pointer"
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
>
  <ChevronDown className="h-8 w-8 text-[#00A99D] rotate-180 animate-bounce" />
</div>



      </section>

      {/* Credibility Bar - Infinite Scrolling Partners */}
      <section className="py-12 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600 mb-8 text-base md:text-lg">
            A Registered National Technology Startup, Proudly Incubated at Innoland and Backed by a World-Class Ecosystem of Strategic Partners
          </p>
          
          {/* Infinite Scrolling Carousel */}
          <div className="relative">
            <div className="flex animate-scroll space-x-16 items-center">
              {/* First set of partners */}
              {[
                { name: 'Azərbaycan Respublikası Səhiyyə Nazirliyi', logo: 'Logo_of_the_Ministry_of_Healthcare_of_Azerbaijan.png', url: 'https://sehiyye.gov.az' },
                { name: 'Azərbaycan Respublikası Rəqəmsal İnkişaf və Nəqliyyat Nazirliyi', logo: 'Logo_of_Ministry_of_Digital_Development_and_Transportation_of_Azerbaijan.svg', url: 'https://www.mincom.gov.az' },
                { name: 'Azərbaycan Respublikası Elm və Təhsil Nazirliyi', logo: 'Ministry_of_Science_and_Education_of_the_Republic_of_Azerbaijan.svg', url: 'https://edu.gov.az' },
                { name: 'Tibbi Ərazi Bölmələrini İdarəetmə Birliyi (TƏBİB)', logo: 'TƏBİB_logo_PNG.png', url: 'https://tabib.gov.az' },
                { name: 'İnnovasiya və Rəqəmsal İnkişaf Agentliyi', logo: 'innovasiya-ve-reqemsal-inkisaf-agentliyi-0.png', url: 'https://idda.az/az' },
                { name: 'Azərbaycan Respublikasının Kiçik və Orta Biznesin İnkişafı Agentliyi (KOBİA)', logo: 'kobia.svg', url: 'https://smb.gov.az/az' },
                { name: 'Azərbaycan Respublikası Əqli Mülkiyyət Agentliyi', logo: 'copat.svg', url: 'https://www.copat.gov.az/az' },
                { name: 'İqtisadi İslahatların Təhlili və Kommunikasiya Mərkəzi', logo: 'iitkm_logo_az.png', url: 'https://ereforms.gov.az/az' },
                { name: 'Milli Onkologiya Mərkəzi', logo: 'millOncology.jpg', url: 'http://mom.gov.az' },
                { name: 'Azərbaycan Tibb Universiteti', logo: 'Emblem_of_the_Azerbaijan_Medical_University.jpg', url: 'https://amu.edu.az' },
                { name: 'Azərbaycan Respublikası Elm və Təhsil Nazirliyinin Yüksək Texnologiyalar Parkı (YTP)', logo: 'ytp.webp', url: 'https://ytp.az' },
                { name: 'INNOLAND Inkubasiya və Akselerasiya Mərkəzi', logo: 'innoland.svg', url: 'https://innoland.az' },
                { name: 'Azerbaijan Artificial Intelligence Lab', logo: 'aai.svg', url: 'https://ailab.az' },
                { name: 'Google for Startups', logo: 'Google_for_Startups_logo.svg', url: 'https://startup.google.com' },
                { name: 'German Research Center for Artificial Intelligence', logo: 'dfki_Logo_digital_black.png', url: 'https://www.dfki.de/en/web' }
              ].map((partner, index) => (
                <a
                  key={`first-${index}`}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={partner.name}
                  className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105 cursor-pointer"
                >
                  <img
                    src={`/logos/${partner.logo}`}
                    alt={partner.name}
                    className="w-28 h-28 object-contain rounded-lg shadow-lg bg-white p-4"
                  />
                </a>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {[
               { name: 'Azərbaycan Respublikası Səhiyyə Nazirliyi', logo: 'Logo_of_the_Ministry_of_Healthcare_of_Azerbaijan.png', url: 'https://sehiyye.gov.az' },
                { name: 'Azərbaycan Respublikası Rəqəmsal İnkişaf və Nəqliyyat Nazirliyi', logo: 'Logo_of_Ministry_of_Digital_Development_and_Transportation_of_Azerbaijan.svg', url: 'https://www.mincom.gov.az' },
                { name: 'Azərbaycan Respublikası Elm və Təhsil Nazirliyi', logo: 'Ministry_of_Science_and_Education_of_the_Republic_of_Azerbaijan.svg', url: 'https://edu.gov.az' },
                { name: 'Tibbi Ərazi Bölmələrini İdarəetmə Birliyi (TƏBİB)', logo: 'TƏBİB_logo_PNG.png', url: 'https://tabib.gov.az' },
                { name: 'İnnovasiya və Rəqəmsal İnkişaf Agentliyi', logo: 'innovasiya-ve-reqemsal-inkisaf-agentliyi-0.png', url: 'https://idda.az/az' },
                { name: 'Azərbaycan Respublikasının Kiçik və Orta Biznesin İnkişafı Agentliyi (KOBİA)', logo: 'kobia.svg', url: 'https://smb.gov.az/az' },
                { name: 'Azərbaycan Respublikası Əqli Mülkiyyət Agentliyi', logo: 'copat.svg', url: 'https://www.copat.gov.az/az' },
                { name: 'İqtisadi İslahatların Təhlili və Kommunikasiya Mərkəzi', logo: 'iitkm_logo_az.png', url: 'https://ereforms.gov.az/az' },
                { name: 'Milli Onkologiya Mərkəzi', logo: 'millOncology.jpg', url: 'http://mom.gov.az' },
                { name: 'Azərbaycan Tibb Universiteti', logo: 'Emblem_of_the_Azerbaijan_Medical_University.jpg', url: 'https://amu.edu.az' },
                { name: 'Azərbaycan Respublikası Elm və Təhsil Nazirliyinin Yüksək Texnologiyalar Parkı (YTP)', logo: 'ytp.webp', url: 'https://ytp.az' },
                { name: 'INNOLAND Inkubasiya və Akselerasiya Mərkəzi', logo: 'innoland.svg', url: 'https://innoland.az' },
                { name: 'Azerbaijan Artificial Intelligence Lab', logo: 'aai.svg', url: 'https://ailab.az' },
                { name: 'Google for Startups', logo: 'Google_for_Startups_logo.svg', url: 'https://startup.google.com' },
                { name: 'German Research Center for Artificial Intelligence', logo: 'dfki_Logo_digital_black.png', url: 'https://www.dfki.de/en/web' }
              ].map((partner, index) => (
                <a
                  key={`second-${index}`}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={partner.name}
                  className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105 cursor-pointer"
                >
                  <img
                    src={`/logos/${partner.logo}`}
                    alt={partner.name}
                    className="w-28 h-28 object-contain rounded-lg shadow-lg bg-white p-4"
                  />
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
                  {/* Skolyn Logo - White version for dark footer background */}
                  <img 
                    src="/logos/logo-white.svg"
                    alt="Skolyn Logo"
                    className="h-18 w-auto"
                  />
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
                  <span className="text-gray-300 text-sm">79 Z. Nudiraliyev St., Baku, Azerbaijan, AZ1078</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-[#00A99D]" />
                  <a href="mailto:contact@skolyn.se" className="text-[#00A99D] hover:underline ml-1 text-gray-300 text-sm">
                  contact@skolyn.se
                </a>
                </div>
               <div className="flex items-center space-x-3">
              <Phone className="h-4 w-4 text-[#00A99D]" />
              <a 
                href="tel:+994515396228" 
                className="text-gray-300 text-sm hover:underline"
              >
                +994 51 539 6228
              </a>
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