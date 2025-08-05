import React, { useState, useEffect, useCallback } from 'react';

interface HeaderProps {
  currentPage?: string;
  onNavigate?: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 1);
  }, []);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const throttledHandleScroll = () => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(handleScroll, 10);
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [handleScroll]);

  const toggleMenu = useCallback(() => {
    setMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen, closeMenu]);

  const navItems = [
    { href: 'hero', label: 'Home' },
    { href: 'platform', label: 'Platform' },
    { href: 'about', label: 'About' },
    { href: 'partners', label: 'Partners' },
    { href: 'news', label: 'News' },
    { href: 'careers', label: 'Careers' },
    { href: 'contact', label: 'Contact' },
  ];

  const handleNavClick = useCallback((e: React.MouseEvent, href: string) => {
    e.preventDefault();
    closeMenu();
    
    // Use the onNavigate prop if available, otherwise try the global function
    if (onNavigate) {
      onNavigate(href);
    } else if ((window as any).navigateToPage) {
      (window as any).navigateToPage(href);
    }
  }, [onNavigate, closeMenu]);

  // Determine header background based on current page
  const getHeaderBackground = () => {
    if (currentPage === 'hero' || currentPage === 'contact') {
      return isScrolled 
        ? 'bg-white/95 backdrop-blur-md' 
        : 'bg-blue-900/70 backdrop-blur-sm';
    } else {
      return isScrolled 
        ? 'bg-white/95 backdrop-blur-md' 
        : 'bg-white/90 backdrop-blur-sm';
    }
  };

  const getLogoColor = () => {
    return (currentPage === 'hero' || currentPage === 'contact') && !isScrolled ? 'text-white' : 'text-[--color-primary]';
  };

  const getBurgerColor = () => {
    return (currentPage === 'hero' || currentPage === 'contact') && !isScrolled ? 'bg-white' : 'bg-[--color-primary]';
  };

  return (
    <div className={`sticky top-0 z-50 transition-all duration-500 ${getHeaderBackground()} `}>
      <header className={`transition-all duration-500 shadow-lg  bg-inherit ${
        currentPage === 'hero' || currentPage === 'contact' 
          ? 'w-full ' 
          : 'w-fit mx-auto rounded-b-[3rem]'
      }`}>
        <div className="relative overflow-hidden rounded-b-[3rem]">
          {/* Main header content */}
          <div className="relative px-8 py-4">
            <div className="flex justify-between items-center gap-8">
            <a href="/" className={`text-3xl font-bold no-underline transition-colors duration-300 ${getLogoColor()}`}>
              Skolyn
            </a>
            
            <nav 
              className={`${
                isMenuOpen 
                  ? 'fixed top-0 right-0 w-64 h-screen bg-white flex flex-col pt-24 px-8 gap-3 transform translate-x-0 shadow-2xl' 
                  : 'hidden md:flex gap-2 transform translate-x-full md:translate-x-0'
              } transition-transform duration-300 z-40`}
              role="navigation"
              aria-label="Main navigation"
            >
              {navItems.map(({ href, label }) => (
                <a 
                  key={href}
                  href={`#${href}`} 
                  onClick={(e) => handleNavClick(e, href)}
                  className={`relative px-3 py-2 font-medium transition-all duration-300 rounded-lg group focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:ring-offset-2 ${
                    currentPage === href 
                      ? (currentPage === 'hero' || currentPage === 'contact') && !isScrolled && !isMenuOpen
                        ? 'text-white'
                        : 'text-[--color-secondary]'
                      : (currentPage === 'hero' || currentPage === 'contact') && !isScrolled && !isMenuOpen
                        ? 'text-white/90 hover:text-white hover:bg-white/10'
                        : 'text-[--color-text] hover:text-[--color-secondary] hover:bg-gray-50'
                  } ${isMenuOpen ? 'text-[--color-text] hover:text-[--color-secondary] hover:bg-gray-50' : ''}`}
                >
                  <span className="relative z-10">{label}</span>
                  
                  {/* Modern minimal highlight indicator for active page */}
                  {currentPage === href && (
                    <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 rounded-r-full transition-all duration-300 ${
                      (currentPage === 'hero' || currentPage === 'contact') && !isScrolled && !isMenuOpen
                        ? 'bg-white'
                        : 'bg-blue-500'
                    }`}></div>
                  )}
                  
                  {/* Subtle hover effect */}
                  <div className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    (currentPage === 'hero' || currentPage === 'contact') && !isScrolled && !isMenuOpen
                      ? 'bg-white/5'
                      : 'bg-gray-50'
                  }`}></div>
                </a>
              ))}
            </nav>
            
            <div className="flex items-center gap-4">
              <button 
                className={`md:hidden bg-transparent border-none cursor-pointer p-2 z-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:ring-offset-2 transition-all duration-300 ${
                  isMenuOpen ? 'fixed right-5 top-5 bg-white/10 backdrop-blur-sm' : ''
                }`}
                onClick={toggleMenu} 
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
              >
                <span className={`block w-6 h-0.5 my-1.5 transition-all duration-300 ${
                  isMenuOpen 
                    ? 'transform translate-y-2 rotate-45 bg-[--color-primary]' 
                    : getBurgerColor()
                }`} />
                <span className={`block w-6 h-0.5 my-1.5 transition-all duration-300 ${
                  isMenuOpen 
                    ? 'opacity-0 bg-[--color-primary]' 
                    : getBurgerColor()
                }`} />
                <span className={`block w-6 h-0.5 my-1.5 transition-all duration-300 ${
                  isMenuOpen 
                    ? 'transform -translate-y-2 -rotate-45 bg-[--color-primary]' 
                    : getBurgerColor()
                }`} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
    </div>
  );
};

export default Header;
