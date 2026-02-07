import React, { useState } from 'react';
import { YoutubeIcon, FacebookIcon, InstagramIcon, TikTokIcon, MapPinIcon } from '../components/icons';
import { CONTENT } from '../constants';
import SEO from '../components/SEO';

const socialLinks = [
  { href: 'https://www.youtube.com/@fathersheartchurch2023', icon: <YoutubeIcon />, name: 'YouTube' },
  { href: 'https://www.facebook.com/profile.php?id=100077360051805', icon: <FacebookIcon />, name: 'Facebook' },
  { href: 'https://www.instagram.com/fathersheart.church/', icon: <InstagramIcon />, name: 'Instagram' },
  { href: 'https://www.tiktok.com/@fathershearttchurch', icon: <TikTokIcon />, name: 'TikTok' },
];

const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const mailTo = `mailto:info@coffeewithshpherd.com?subject=Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0AFrom: ${encodeURIComponent(email)}`;
  const t = CONTENT.contact;

  return (
    <div className="bg-cream min-h-screen font-body">
      <SEO 
        title="Contact" 
        description="Get in touch with Father's Heart Ministry. Visit us at our Surrey location, send a message, or connect with us on social media." 
      />
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold font-heading text-olive mb-4">{t.title}</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl p-8 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold font-heading text-olive mb-6">{t.formTitle}</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">{t.nameLabel}</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-olive focus:border-olive hover:border-olive transition-colors duration-300" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">{t.emailLabel}</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-olive focus:border-olive hover:border-olive transition-colors duration-300" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">{t.messageLabel}</label>
                <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} rows={4} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-olive focus:border-olive hover:border-olive transition-colors duration-300"></textarea>
              </div>
              <div>
                <a
                  href={mailTo}
                  className="w-full inline-flex justify-center py-3 px-4 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-flame hover:bg-flame/90 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-flame"
                >
                  {t.sendButton}
                </a>
              </div>
            </form>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold font-heading text-olive mb-3">{t.connectTitle}</h3>
              <div className="flex space-x-4 gap-4">
                {socialLinks.map(link => (
                  <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="text-olive hover:text-flame transition-all duration-300 transform hover:scale-110">{link.icon}</a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold font-heading text-olive mb-3">{t.locationTitle}</h3>
              <p className="text-gray-700">{t.meetingText}</p>
              <p className="font-semibold text-gray-800 mb-4">10167 148 St, Surrey, BC V3R 3X2</p>
              
              <div className="w-full h-56 rounded-lg overflow-hidden shadow-md border border-gray-200 mb-4 hover:shadow-lg transition-shadow duration-300">
                <iframe 
                  width="100%" 
                  height="100%" 
                  title="Church Location Map"
                  src="https://maps.google.com/maps?q=10167+148+St,+Surrey,+BC+V3R+3X2&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                  frameBorder="0" 
                  scrolling="no" 
                  marginHeight={0} 
                  marginWidth={0}
                  className="w-full h-full"
                ></iframe>
              </div>

              <a href="https://www.google.com/maps?q=10167+148+St,+Surrey,+BC+V3R+3X2" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 text-olive hover:text-flame hover:underline font-semibold transition-all duration-300 gap-2 hover:translate-x-1">
                <MapPinIcon />
                <span>{t.getDirections}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;