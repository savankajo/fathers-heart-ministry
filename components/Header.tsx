import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon } from './icons';

// Navigation links (left side)
const NAV_ITEMS = [
  { label: 'Home', to: '/', exact: true },
  { label: 'About Us', to: '/about', exact: false },
  { label: 'Service', to: '/service', exact: false },
  { label: 'Gallery', to: '/#gallery', exact: false, isAnchor: true },
  { label: 'Contact Us', to: '/contact', exact: false },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleGalleryClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsMenuOpen(false);
    if (location.pathname === '/') {
      const el = document.getElementById('gallery');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#gallery';
    }
  };

  const navBg = scrolled
    ? 'bg-white/95 backdrop-blur-md shadow-lg'
    : 'bg-white shadow-md';

  const linkClass = (isActive: boolean) =>
    `px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 relative group ${isActive
      ? 'text-[#1a3a5c] bg-blue-50'
      : 'text-gray-700 hover:text-[#1a3a5c] hover:bg-blue-50'
    }`;

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex-shrink-0 flex items-center space-x-3 group">
            <img
              className="h-14 w-auto transition-transform duration-300 group-hover:scale-105"
              src="https://res.cloudinary.com/dyjffxbef/image/upload/v1765302297/logotransport_ljm5vs.png"
              alt="Father's Heart Ministry Logo"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map(item =>
              item.isAnchor ? (
                <a
                  key={item.label}
                  href={item.to}
                  onClick={handleGalleryClick}
                  className={linkClass(false)}
                >
                  {item.label}
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#D4AF37] group-hover:w-4/5 transition-all duration-300 rounded-full" />
                </a>
              ) : (
                <NavLink
                  key={item.label}
                  to={item.to}
                  end={item.exact}
                  className={({ isActive }) => linkClass(isActive)}
                >
                  {({ isActive }) => (
                    <>
                      {item.label}
                      <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-[#D4AF37] transition-all duration-300 rounded-full ${isActive ? 'w-4/5' : 'w-0 group-hover:w-4/5'}`} />
                    </>
                  )}
                </NavLink>
              )
            )}
            {/* Donate button */}
            <NavLink
              to="/donations"
              className={({ isActive }) =>
                `ml-3 font-bold px-5 py-2.5 rounded-full text-sm transition-all duration-300 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg ${isActive
                  ? 'bg-[#c49b2a] text-black'
                  : 'bg-[#D4AF37] hover:bg-[#c49b2a] text-black'
                }`
              }
            >
              Donate
            </NavLink>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-lg text-[#1a3a5c] hover:bg-blue-50 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 space-y-1">
            {NAV_ITEMS.map(item =>
              item.isAnchor ? (
                <a
                  key={item.label}
                  href={item.to}
                  onClick={handleGalleryClick}
                  className="block px-4 py-3 text-gray-700 font-medium rounded-xl hover:bg-blue-50 hover:text-[#1a3a5c] transition-all duration-200"
                >
                  {item.label}
                </a>
              ) : (
                <NavLink
                  key={item.label}
                  to={item.to}
                  end={item.exact}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-3 font-medium rounded-xl transition-all duration-200 ${isActive ? 'bg-[#1a3a5c] text-white' : 'text-gray-700 hover:bg-blue-50 hover:text-[#1a3a5c]'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              )
            )}
            <NavLink
              to="/donations"
              onClick={() => setIsMenuOpen(false)}
              className="block mt-2 bg-[#D4AF37] text-black font-bold px-4 py-3 rounded-xl text-center hover:bg-[#c49b2a] transition-colors duration-200"
            >
              Donate Now
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
