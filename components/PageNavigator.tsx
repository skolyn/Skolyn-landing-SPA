import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroSection from './HeroSection';
import ProblemSection from './ProblemSection';
import PlatformSection from './PlatformSection';
import AboutSection from './AboutSection';
import PartnersSection from './PartnersSection';
import NewsSection from './NewsSection';
import CareersSection from './CareersSection';
import ContactSection from './ContactSection';
import LogoPlaceholder from './LogoPlaceholder';

interface PageNavigatorProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

interface Page {
  id: string;
  label: string;
  component: React.ComponentType<any>;
  props?: any;
}

const PageNavigator: React.FC<PageNavigatorProps> = ({ 
  currentPage, 
  onPageChange 
}) => {
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const partnerLogos = Array(8).fill(0).map((_,i) => 
    <div className="logo-item" key={i}>
      <LogoPlaceholder style={(i % 4) + 1}/>
    </div>
  );

  const pages: Page[] = [
    { 
      id: 'hero', 
      label: 'Home', 
      component: HeroSection
    },
    { 
      id: 'platform', 
      label: 'Platform', 
      component: PlatformSection 
    },
    { 
      id: 'about', 
      label: 'About', 
      component: AboutSection 
    },
    { 
      id: 'partners', 
      label: 'Partners', 
      component: PartnersSection 
    },
    { 
      id: 'news', 
      label: 'News', 
      component: NewsSection 
    },
    { 
      id: 'careers', 
      label: 'Careers', 
      component: CareersSection 
    },
    { 
      id: 'contact', 
      label: 'Contact', 
      component: ContactSection,
      props: { onPageChange }
    }
  ];

  const currentPageIndex = pages.findIndex(page => page.id === currentPage);
  const currentPageData = pages[currentPageIndex];

  const navigateToPage = useCallback((targetPageId: string) => {
    if (targetPageId === currentPage || isTransitioning) return;
    
    const targetIndex = pages.findIndex(page => page.id === targetPageId);
    const currentIndex = currentPageIndex;
    
    setDirection(targetIndex > currentIndex ? 'right' : 'left');
    setIsTransitioning(true);
    
    onPageChange(targetPageId);
    
    // Reset transition state after animation
    setTimeout(() => setIsTransitioning(false), 600);
  }, [currentPage, currentPageIndex, isTransitioning, onPageChange, pages]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isTransitioning) return;
      
      if (e.key === 'ArrowRight' && currentPageIndex < pages.length - 1) {
        navigateToPage(pages[currentPageIndex + 1].id);
      } else if (e.key === 'ArrowLeft' && currentPageIndex > 0) {
        navigateToPage(pages[currentPageIndex - 1].id);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPageIndex, isTransitioning, navigateToPage, pages]);

  // Expose navigation function globally for header
  useEffect(() => {
    (window as any).navigateToPage = navigateToPage;
    return () => {
      delete (window as any).navigateToPage;
    };
  }, [navigateToPage]);

  const slideVariants = {
    enter: (direction: 'left' | 'right') => ({
      x: direction === 'right' ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: 'left' | 'right') => ({
      x: direction === 'right' ? '-100%' : '100%',
      opacity: 0,
    }),
  };

  const transition = {
    duration: 0.5,
    ease: [0.23, 1, 0.32, 1] as const, // Custom easing for smooth feel
  };

  if (!currentPageData) {
    return <div>Page not found</div>;
  }

  const PageComponent = currentPageData.component;

  return (
    <div className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentPage}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={transition}
          className="absolute inset-0 w-full h-full"
        >
          <div className="h-full overflow-y-auto scrollbar-hide">
            <PageComponent {...(currentPageData.props || {})} />
            
            {/* Special sections for specific pages */}
            {currentPage === 'hero' && (
              <>
                <ProblemSection />
                <section id="credibility" className="py-20 bg-[--color-alt-bg]">
                  <div className="max-w-6xl mx-auto px-5 text-center">
                    <h2 className="text-4xl font-bold mb-12 text-[--color-primary]">A National Champion for a Healthier Future.</h2>
                    <p className="max-w-4xl mx-auto -mt-8 mb-8 text-lg text-[--color-text-light]">
                      Skolyn is proud to be a key partner in realizing Azerbaijan's national vision. Our work is in direct alignment with the Presidential "Artificial Intelligence Strategy for 2025–2028" and the "Strategy of Socio-Economic Development for 2022–2026," driving innovation and building competitive human capital in the nation's most critical sector.
                    </p>
                  </div>
                </section>
                <section id="demo" className="bg-[--color-primary] text-white py-20">
                  <div className="max-w-6xl mx-auto px-5 text-center">
                    <h2 className="text-4xl font-bold mb-4">Ready to Experience the Next Generation of Diagnostics?</h2>
                    <p className="text-xl max-w-3xl mx-auto mb-8 opacity-90">
                      See firsthand how Skolyn can transform your clinical workflow, enhance accuracy, and deliver better patient outcomes.
                    </p>
                    <button
                      onClick={() => navigateToPage('contact')}
                      className="bg-white text-[--color-primary] px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:bg-gray-100 inline-block"
                    >
                      Request a Personalized Demo
                    </button>
                  </div>
                </section>
              </>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

  
      {/* Navigation arrows */}
      {currentPageIndex > 0 && (
        <button
          onClick={() => navigateToPage(pages[currentPageIndex - 1].id)}
          disabled={isTransitioning}
          className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Go to previous page"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {currentPageIndex < pages.length - 1 && (
        <button
          onClick={() => navigateToPage(pages[currentPageIndex + 1].id)}
          disabled={isTransitioning}
          className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Go to next page"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default PageNavigator;
