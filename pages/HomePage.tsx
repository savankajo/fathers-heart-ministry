import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import ContactForm from '../components/ContactForm';
import {
  HERO_SLIDES, TEAM_MEMBERS, GALLERY_ITEMS, SERVICE_EVENTS, PLAYLISTS
} from '../constants';
import { GalleryItem, ServiceEvent } from '../types';

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   HERO SLIDER
â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
const HeroSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState<boolean[]>(HERO_SLIDES.map(() => false));

  useEffect(() => {
    const timer = setInterval(() => setCurrent(c => (c + 1) % HERO_SLIDES.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const handleError = (e: React.SyntheticEvent<HTMLImageElement>, idx: number) => {
    (e.target as HTMLImageElement).src = HERO_SLIDES[idx].fallback;
  };

  return (
    <section id="home" className="relative h-screen min-h-[600px] overflow-hidden">
      {HERO_SLIDES.map((slide, idx) => (
        <div
          key={slide.id}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: idx === current ? 1 : 0, zIndex: idx === current ? 1 : 0 }}
        >
          <img
            src={slide.imageUrl}
            alt={`Father's Heart Church slide ${idx + 1}`}
            className="w-full h-full object-cover"
            onError={e => handleError(e, idx)}
            onLoad={() => setLoaded(prev => { const n = [...prev]; n[idx] = true; return n; })}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
        </div>
      ))}

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <div className="animate-fadeIn">
          <p className="text-[#D4AF37] font-semibold tracking-[0.3em] text-sm md:text-base uppercase mb-4">
            Welcome to Father's Heart Church
          </p>
          <h1 className="text-5xl md:text-7xl xl:text-8xl font-bold text-white font-heading leading-tight mb-6 drop-shadow-2xl">
            Faith is our solid Ground
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Pentecostal Assemblies of Canada — Reaching Nations for Christ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://fathersheartministry.ca/#/about"
              className="bg-[#D4AF37] text-black font-bold py-4 px-10 rounded-full text-base hover:bg-[#c49b2a] transition-all duration-300 transform hover:-translate-y-1 shadow-xl"
            >
              About Us
            </a>
            <a
              href="https://fathersheartministry.ca/#/service"
              className="border-2 border-white text-white font-bold py-4 px-10 rounded-full text-base hover:bg-white hover:text-black transition-all duration-300 transform hover:-translate-y-1"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>

      {/* Slide Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === current ? 'bg-[#D4AF37] w-8' : 'bg-white/50 hover:bg-white'}`}
          />
        ))}
      </div>

      {/* Scroll Down Arrow */}
      <a
        href="#about"
        className="absolute bottom-8 right-8 z-10 text-white/70 hover:text-[#D4AF37] transition-colors duration-300 animate-bounce"
        aria-label="Scroll down"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </a>
    </section>
  );
};

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   ABOUT US
â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
const AboutSection: React.FC = () => (
  <section id="about" className="py-20 md:py-28 bg-white">
    <div className="container mx-auto px-4 max-w-6xl">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Image Side */}
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
            <img
              src="https://fathersheartchurch.ca/wp-content/uploads/2023/06/DSC01319-scaled.jpg"
              alt="Father's Heart Church congregation"
              className="w-full h-full object-cover"
              onError={e => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=800&q=80'; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-6 -right-6 bg-[#1a3a5c] text-white rounded-2xl p-6 shadow-2xl">
            <p className="text-[#D4AF37] text-sm font-semibold tracking-widest uppercase">Est.</p>
            <p className="text-4xl font-bold">2015</p>
          </div>
        </div>

        {/* Text Side */}
        <div>
          <p className="text-[#D4AF37] font-semibold tracking-[0.3em] text-sm uppercase mb-3">
            Pentecostal Assemblies of Canada
          </p>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-[#1a3a5c] mb-6 leading-tight">
            About Father's Heart Church
          </h2>
          <div className="w-16 h-1 bg-[#D4AF37] mb-8 rounded-full" />
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            <strong className="text-[#1a3a5c]">Carrying the Gospel Where It's Never Been Before.</strong>
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            Sharing the good news. Spreading the Gospel. Reaching nations for Christ — that's what we are all about, and it starts by developing strong Local churches. So with God's guidance, we seek to come alongside leaders in the countries where we serve to help them as they work diligently to reach their communities for Christ. Through vital resources and support, we help these ministers of the Gospel as they seek to carry out Christ's Great Commission.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/contact"
              className="bg-[#1a3a5c] text-white font-bold py-3 px-8 rounded-full hover:bg-[#0f2540] transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg"
            >
              Contact Us
            </a>
            <a
              href="https://fathersheartministry.ca/#/service"
              className="border-2 border-[#1a3a5c] text-[#1a3a5c] font-bold py-3 px-8 rounded-full hover:bg-[#1a3a5c] hover:text-white transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   OUR TEAM
â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
const TeamSection: React.FC = () => (
  <section className="py-20 md:py-28 bg-gray-50">
    <div className="container mx-auto px-4 max-w-6xl">
      <div className="text-center mb-14">
        <p className="text-[#D4AF37] font-semibold tracking-[0.3em] text-sm uppercase mb-3">The People Behind The Ministry</p>
        <h2 className="text-4xl md:text-5xl font-bold font-heading text-[#1a3a5c] mb-4">OUR TEAM</h2>
        <div className="w-16 h-1 bg-[#D4AF37] mx-auto rounded-full" />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {TEAM_MEMBERS.map((member, idx) => (
          <div
            key={idx}
            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
          >
            <div className="relative aspect-square overflow-hidden">
              <img
                src={member.imageUrl}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                onError={e => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=400&q=80'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a5c]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold font-heading text-[#1a3a5c] mb-1">{member.name}</h3>
              <p className="text-[#D4AF37] font-semibold text-sm tracking-wide uppercase">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   QUOTE BANNER
â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
const QuoteBanner: React.FC = () => (
  <section className="relative py-20 overflow-hidden">
    <div className="absolute inset-0">
      <img
        src="https://fathersheartchurch.ca/wp-content/uploads/2021/07/DSC01397-scaled.jpg"
        alt="Church banner background"
        className="w-full h-full object-cover"
        onError={e => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=1920&q=80'; }}
      />
      <div className="absolute inset-0 bg-[#1a3a5c]/85" />
    </div>
    <div className="relative z-10 container mx-auto px-4 text-center">
      <svg className="w-12 h-12 text-[#D4AF37] mx-auto mb-6 opacity-80" fill="currentColor" viewBox="0 0 24 24">
        <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.05-.56.187-.882.312C7.272 4.799 6.904 4.895 6.562 5.123c-.344.218-.741.4-1.091.692C5.132 6.116 4.723 6.54 4.421 7.038c-.3.462-.522 1.038-.586 1.7-.021.155-.033.315-.033.476 0 .353.046.696.141 1.02.096.325.252.63.464.901m7.5 0c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L17.258 4.03c0 0-.218.052-.597.144-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.143-.686.239-1.028.467-.344.218-.741.4-1.091.692-.338.301-.747.725-1.049 1.223-.3.462-.522 1.038-.586 1.7-.021.155-.033.315-.033.476 0 .353.046.696.141 1.02.096.325.252.63.464.901" />
      </svg>
      <blockquote className="text-3xl md:text-5xl font-bold font-heading text-white leading-tight max-w-4xl mx-auto italic">
        "HE IS SO GOOD TO BE TRUE, BUT HE IS TRUE."
      </blockquote>
      <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-8 rounded-full" />
    </div>
  </section>
);

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   GALLERY / VIDEO PRODUCTION
â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
const GallerySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'ceremony' | 'events' | 'short'>('all');
  const tabs: { key: 'all' | 'ceremony' | 'events' | 'short'; label: string }[] = [
    { key: 'all', label: 'All' },
    { key: 'ceremony', label: 'Ceremony' },
    { key: 'events', label: 'Events Gallery' },
    { key: 'short', label: 'Short Message' },
  ];

  const filtered = activeTab === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeTab);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-[#D4AF37] font-semibold tracking-[0.3em] text-sm uppercase mb-3">Media</p>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-[#1a3a5c] mb-4">
            OUR <span className="text-[#D4AF37]">Video production</span>
          </h2>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto rounded-full mb-8" />

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2">
            {tabs.map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === tab.key
                  ? 'bg-[#1a3a5c] text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map(item => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const GalleryCard: React.FC<{ item: GalleryItem }> = ({ item }) => (
  <div className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 bg-black aspect-square">
    <img
      src={item.imageUrl}
      alt={item.title}
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90"
      onError={e => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1492176273113-2d51f47b23b0?auto=format&fit=crop&w=400&q=80'; }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
      <h4 className="text-white font-bold text-sm">{item.title}</h4>
      <div className="flex items-center gap-1 mt-1">
        <svg className="w-4 h-4 text-[#D4AF37]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
        <span className="text-white/80 text-xs">{item.likes} {item.likes === 1 ? 'Like' : 'Likes'}</span>
      </div>
    </div>
    {/* NO category badge â€” removed as requested */}
  </div>
);

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   SERVICES & EVENTS
â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
const categoryColor: Record<string, string> = {
  saturday: 'bg-blue-100 text-blue-800 border-blue-200',
  social: 'bg-green-100 text-green-800 border-green-200',
  media: 'bg-purple-100 text-purple-800 border-purple-200',
};
const categoryDot: Record<string, string> = {
  saturday: 'bg-blue-500',
  social: 'bg-green-500',
  media: 'bg-purple-500',
};

const ServicesSection: React.FC = () => (
  <section id="services" className="py-20 md:py-28 bg-gray-50">
    <div className="container mx-auto px-4 max-w-6xl">
      <div className="text-center mb-12">
        <p className="text-[#D4AF37] font-semibold tracking-[0.3em] text-sm uppercase mb-3">What We Offer</p>
        <h2 className="text-4xl md:text-5xl font-bold font-heading text-[#1a3a5c] mb-4">
          SERVICES <span className="text-[#D4AF37]">&amp; Events</span>
        </h2>
        <div className="w-16 h-1 bg-[#D4AF37] mx-auto rounded-full mb-4" />
        <p className="text-gray-500 max-w-xl mx-auto">Join us every week. More events will be added soon.</p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-3xl mx-auto">
        <div className="grid grid-cols-12 bg-[#1a3a5c] text-white text-sm font-semibold px-6 py-4">
          <div className="col-span-1" />
          <div className="col-span-5 md:col-span-4">Event</div>
          <div className="col-span-6 md:col-span-4">Time</div>
          <div className="hidden md:block md:col-span-3">Details</div>
        </div>
        {SERVICE_EVENTS.map((event, idx) => (
          <EventRow key={event.id} event={event} isLast={idx === SERVICE_EVENTS.length - 1} />
        ))}
      </div>

      <p className="text-center text-gray-400 text-sm mt-6 italic">More events coming soon â€” stay connected!</p>
    </div>
  </section>
);

const EventRow: React.FC<{ event: ServiceEvent; isLast: boolean }> = ({ event, isLast }) => (
  <div className={`grid grid-cols-12 items-center px-6 py-5 hover:bg-gray-50 transition-colors duration-200 ${!isLast ? 'border-b border-gray-100' : ''}`}>
    <div className="col-span-1">
      <span className={`w-3 h-3 rounded-full block ${categoryDot[event.category]}`} />
    </div>
    <div className="col-span-5 md:col-span-4">
      <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full border ${categoryColor[event.category]}`}>
        {event.title}
      </span>
    </div>
    <div className="col-span-6 md:col-span-4 text-gray-700 text-sm font-medium">
      {event.timeStart}{event.timeEnd ? ` â€“ ${event.timeEnd}` : ''}
    </div>
    <div className="hidden md:block md:col-span-3 text-gray-500 text-sm">
      {event.description || <span className="italic text-gray-300">Weekly gathering</span>}
    </div>
  </div>
);

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   CONTACT US
â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
const ContactSection: React.FC = () => (
  <section id="contact" className="py-20 md:py-28 bg-white">
    <div className="container mx-auto px-4 max-w-6xl">
      <div className="text-center mb-14">
        <p className="text-[#D4AF37] font-semibold tracking-[0.3em] text-sm uppercase mb-3">Reach Out</p>
        <h2 className="text-4xl md:text-5xl font-bold font-heading text-[#1a3a5c] mb-4">CONTACT US</h2>
        <div className="w-16 h-1 bg-[#D4AF37] mx-auto rounded-full" />
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Info + Map */}
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-[#1a3a5c] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <svg className="w-5 h-5 text-[#D4AF37]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#1a3a5c] mb-1">Our Address</h3>
              <p className="text-gray-600">10167 148 St, Surrey, BC</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-[#1a3a5c] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <svg className="w-5 h-5 text-[#D4AF37]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#1a3a5c] mb-1">Email Us</h3>
              <a href="mailto:info@fathersheartchurch.ca" className="text-[#D4AF37] hover:underline">
                info@fathersheartchurch.ca
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-[#1a3a5c] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <svg className="w-5 h-5 text-[#D4AF37]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#1a3a5c] mb-1">Service Times</h3>
              <p className="text-gray-600">Every Saturday at 1:00 PM</p>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 aspect-video">
            <iframe
              title="Father's Heart Church Location"
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
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Open in Google Maps
          </a>
        </div>

        {/* Contact Form */}
        <ContactForm />
      </div>
    </div>
  </section>
);

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   SERMONS PREVIEW (links to /sermons page)
â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
const SermonsPreview: React.FC = () => {
  const featured = PLAYLISTS.slice(0, 3);
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-[#D4AF37] font-semibold tracking-[0.3em] text-sm uppercase mb-3">Feed Your Spirit</p>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-[#1a3a5c] mb-4">Featured Sermons</h2>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {featured.map(pl => (
            <a
              key={pl.id}
              href={pl.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-black aspect-video"
            >
              <img src={pl.thumbnail} alt={pl.title} className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" onError={e => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1492176273113-2d51f47b23b0?auto=format&fit=crop&w=800&q=80'; }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-[#D4AF37] rounded-full p-4 shadow-xl">
                  <svg className="w-7 h-7 text-black ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-white text-base font-bold leading-snug line-clamp-2">{pl.title}</h3>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <a
            href="/sermons"
            className="inline-flex items-center gap-2 bg-[#1a3a5c] text-white font-bold py-3 px-8 rounded-full hover:bg-[#0f2540] transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg"
          >
            View All Sermons
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   HOME PAGE (assembles all sections)
â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
const HomePage: React.FC = () => (
  <div className="font-body">
    <SEO
      title="Home"
      description="Father's Heart Church in Surrey, BC â€” Pentecostal Assemblies of Canada. Carrying the Gospel where it's never been before. Join us every Saturday at 1 PM."
    />
    <HeroSlider />
    <AboutSection />
    <TeamSection />
    <QuoteBanner />
    <GallerySection />
    <SermonsPreview />
    <ServicesSection />
    <ContactSection />
  </div>
);

export default HomePage;
