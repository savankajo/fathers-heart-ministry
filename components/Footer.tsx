
import React from 'react';
import { YoutubeIcon, FacebookIcon, InstagramIcon, TikTokIcon } from './icons';

const socialLinks = [
  { href: 'https://www.youtube.com/@fathersheartchurch2023', icon: <YoutubeIcon />, name: 'YouTube' },
  { href: 'https://www.facebook.com/profile.php?id=100077360051805', icon: <FacebookIcon />, name: 'Facebook' },
  { href: 'https://www.instagram.com/fathersheart.church/', icon: <InstagramIcon />, name: 'Instagram' },
  { href: 'https://www.tiktok.com/@fathershearttchurch', icon: <TikTokIcon />, name: 'TikTok' },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Father's Heart Ministry. All rights reserved.</p>
          <div className="flex space-x-6">
            {socialLinks.map(link => (
              <a 
                key={link.name} 
                href={link.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-olive hover:text-flame transition-all duration-300 transform hover:scale-110"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
