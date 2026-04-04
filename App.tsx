import * as React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicePage from './pages/ServicePage';
import ContactPage from './pages/ContactPage';
import DonationsPage from './pages/DonationsPage';
import AboutUsPage from './pages/AboutUsPage';
import ArticlesPage from './pages/ArticlesPage';
import ScrollToTop from './components/ScrollToTop.tsx';

const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen text-gray-800 font-body flex flex-col">
          <ScrollToTop />
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutUsPage />} />
              <Route path="/articles" element={<ArticlesPage />} />
              <Route path="/service" element={<ServicePage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/donations" element={<DonationsPage />} />
              {/* Keep old URLs working */}
              <Route path="/sermons" element={<Navigate to="/service" replace />} />
              <Route path="/podcast" element={<Navigate to="/service" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;
