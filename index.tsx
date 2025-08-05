/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import PageNavigator from './components/PageNavigator';

function App() {
  const [currentPage, setCurrentPage] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, { threshold: 0.1 });

    // Use a delay to ensure DOM is ready
    const initializeObserver = () => {
      const sections = document.querySelectorAll('.animate-on-scroll');
      sections.forEach(section => observer.observe(section));
    };

    // Run immediately and also after a short delay
    initializeObserver();
    const timeoutId = setTimeout(initializeObserver, 100);

    return () => {
      clearTimeout(timeoutId);
      const sections = document.querySelectorAll('.animate-on-scroll');
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, [currentPage]); // Re-run when page changes

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    // Update URL without triggering page reload
    window.history.pushState({}, '', `#${page}`);
  };

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash.slice(1) || 'hero';
      setCurrentPage(hash);
    };

    window.addEventListener('popstate', handlePopState);
    
    // Set initial page from URL
    const initialPage = window.location.hash.slice(1) || 'hero';
    setCurrentPage(initialPage);

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <>
      <Header 
        currentPage={currentPage}
        onNavigate={handlePageChange}
      />

      <main>
        <PageNavigator 
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </main>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);
