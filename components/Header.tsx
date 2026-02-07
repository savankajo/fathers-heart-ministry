import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { NAV_LINKS, NAV_LABELS, PAGE_PATHS } from '../constants';
import { MenuIcon, XIcon } from './icons';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
    setIsMenuOpen(false);
  }

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <button
              onClick={handleLogoClick}
              className="flex items-center space-x-2 transition-transform duration-300 hover:scale-105"
            >
              <img
                className="h-16 w-auto"
                src="https://res.cloudinary.com/dyjffxbef/image/upload/v1765302297/logotransport_ljm5vs.png"
                alt="Father's Heart Ministry Logo"
              />
            </button>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-baseline gap-4">
              {NAV_LINKS.map((page) => (
                <NavLink
                  key={page}
                  to={PAGE_PATHS[page]}
                  className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${isActive
                      ? 'bg-olive text-white shadow-md'
                      : 'text-gray-600 hover:bg-olive/10 hover:text-olive'
                    } ${page === 'Donations' ? '!bg-flame text-white hover:!bg-flame/80 hover:shadow-lg transform hover:-translate-y-0.5' : ''}`}
                >
                  {NAV_LABELS[page]}
                </NavLink>
              ))}
            </nav>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-olive hover:text-white hover:bg-olive focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition-colors duration-300"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((page) => (
              <NavLink
                key={page}
                to={PAGE_PATHS[page]}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => `block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${isActive
                    ? 'bg-olive text-white'
                    : 'text-gray-600 hover:bg-olive/10 hover:text-olive'
                  } ${page === 'Donations' ? '!bg-flame text-white hover:!bg-flame/80' : ''}`}
              >
                {NAV_LABELS[page]}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
