import React, { useState } from 'react';
import SkolynWebsite from '../SkolynWebsite';
import PrivacyPolicy from './PrivacyPolicy';
import TermsOfService from './TermsOfService';
import GDPRCompliance from './GDPRCompliance';
import Login from './Login';

const PageRouter = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'privacy':
        return <PrivacyPolicy onBack={() => setCurrentPage('home')} />;
      case 'terms':
        return <TermsOfService onBack={() => setCurrentPage('home')} />;
      case 'gdpr':
        return <GDPRCompliance onBack={() => setCurrentPage('home')} />;
      case 'login':
        return <Login onBack={() => setCurrentPage('home')} />;
      default:
        return <SkolynWebsite onNavigate={setCurrentPage} />;
    }
  };

  return renderPage();
};

export default PageRouter;