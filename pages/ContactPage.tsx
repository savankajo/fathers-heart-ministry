import React, { useState } from 'react';
import { YoutubeIcon, FacebookIcon, InstagramIcon, TikTokIcon, MapPinIcon } from '../components/icons';
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
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const subjectEncoded = encodeURIComponent(subject || "Message from Father's Heart Church Website");
    const bodyEncoded = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    const mailtoLink = `mailto:savan.kajo@yahoo.com?subject=${subjectEncoded}&body=${bodyEncoded}`;
    window.open(mailtoLink, '_blank');
    setSent(true);
    setName(''); setEmail(''); setSubject(''); setMessage('');
  };

  const inputClass = 'mt-1 block w-full px-4 py-3 border-2 border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1a3a5c] focus:border-[#1a3a5c] hover:border-[#1a3a5c]/40 transition-colors duration-300 bg-gray-50';

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
                  <p className="text-gray-600">Every Saturday from 4:00 PM</p>
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
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold font-heading text-[#1a3a5c] mb-2">Send a Message</h2>
            <p className="text-gray-500 text-sm mb-4">We'd love to hear from you.</p>
            {sent && (
              <div className="bg-blue-50 border border-blue-200 text-blue-800 rounded-xl p-4 mb-5 flex items-start gap-3">
                <span className="text-2xl">✉️</span>
                <div>
                  <p className="font-bold">Your email app should open now!</p>
                  <p className="text-sm mt-1">Your message is pre-filled and ready to send to <strong>savan.kajo@yahoo.com</strong>. Just press Send in your email app.</p>
                </div>
              </div>
            )}
            <form className="space-y-5" onSubmit={handleSend}>
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="John Doe"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                  Your Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="john@example.com"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700">Subject</label>
                <input
                  type="text"
                  id="subject"
                  value={subject}
                  onChange={e => setSubject(e.target.value)}
                  placeholder="How can we help?"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700">Your Message</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  rows={5}
                  placeholder="Write your message here..."
                  className={inputClass}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#1a3a5c] text-white font-bold py-4 px-8 rounded-xl hover:bg-[#0f2540] transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl text-base"
              >
                ✉️ Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;