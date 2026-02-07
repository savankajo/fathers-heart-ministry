import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import SermonsPage from './pages/PlaylistsPage';
import ContactPage from './pages/ContactPage';
import DonationsPage from './pages/DonationsPage';
import PodcastPage from './pages/PodcastPage';
import ScrollToTop from './components/ScrollToTop.tsx';

const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <div className="bg-cream min-h-screen text-gray-800 font-body flex flex-col">
          <ScrollToTop />
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutUsPage />} />
              <Route path="/sermons" element={<SermonsPage />} />
              <Route path="/podcast" element={<PodcastPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/donations" element={<DonationsPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;
