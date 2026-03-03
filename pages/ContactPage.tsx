import React from 'react';
import { YoutubeIcon, FacebookIcon, InstagramIcon, TikTokIcon, MapPinIcon } from '../components/icons';
import SEO from '../components/SEO';
import ContactForm from '../components/ContactForm';

const socialLinks = [
  { href: 'https://www.youtube.com/@fathersheartchurch2023', icon: <YoutubeIcon />, name: 'YouTube' },
  { href: 'https://www.facebook.com/profile.php?id=100077360051805', icon: <FacebookIcon />, name: 'Facebook' },
  { href: 'https://www.instagram.com/fathersheart.church/', icon: <InstagramIcon />, name: 'Instagram' },
  { href: 'https://www.tiktok.com/@fathershearttchurch', icon: <TikTokIcon />, name: 'TikTok' },
];

const ContactPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-body">
      <SEO
        title="Contact Us"
        description="Get in touch with Father's Heart Church. Visit us at 10167 148 St, Surrey, BC or email info@fathersheartchurch.ca."
      />

      {/* Page Hero */}
      <div className="bg-[#1a3a5c] py-16 text-center">
        <p className="text-[#D4AF37] font-semibold tracking-[0.3em] text-sm uppercase mb-3">Reach Out</p>
        <h1 className="text-5xl font-bold font-heading text-white">CONTACT US</h1>
        <div className="w-16 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full" />
      </div>

      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left: Info + Map */}
          <div className="space-y-8">
            {/* Contact Info Cards */}
            <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#1a3a5c] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#D4AF37]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#1a3a5c] mb-1">Our Address</h3>
                  <p className="text-gray-600">10167 148 St, Surrey, BC</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#1a3a5c] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#D4AF37]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#1a3a5c] mb-1">Email</h3>
                  <a href="mailto:info@fathersheartchurch.ca" className="text-[#D4AF37] hover:underline">
                    info@fathersheartchurch.ca
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#1a3a5c] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#D4AF37]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#1a3a5c] mb-1">Service Times</h3>
                  <p className="text-gray-600">Every Saturday at 1:00 PM</p>
                </div>
              </div>

              {/* Social */}
              <div>
                <h3 className="font-bold text-[#1a3a5c] mb-3">Follow Us</h3>
                <div className="flex gap-3">
                  {socialLinks.map(link => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.name}
                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[#1a3a5c] hover:bg-[#1a3a5c] hover:text-white transition-all duration-300"
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 aspect-video">
              <iframe
                title="Father's Heart Church Map"
                src="https://maps.google.com/maps?q=10167+148+St,+Surrey,+BC+V3R+3X2&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
              />
            </div>
            <a
              href="https://www.google.com/maps?q=10167+148+St,+Surrey,+BC+V3R+3X2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#1a3a5c] font-semibold hover:text-[#D4AF37] transition-colors duration-300"
            >
              <MapPinIcon />
              Get Directions
            </a>
          </div>

          {/* Right: Form */}
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;