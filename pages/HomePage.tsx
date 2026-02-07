import React from 'react';
import { Page, Playlist } from '../types';
import { PLAYLISTS, CONTENT } from '../constants';
import { MapPinIcon } from '../components/icons';
import SEO from '../components/SEO';

interface HomePageProps {
  setCurrentPage: (page: Page) => void;
}

const SermonCard: React.FC<{ playlist: Playlist }> = ({ playlist }) => (
  <a 
    href={playlist.url} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="group relative block w-full aspect-video rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-black"
  >
    {/* Background Image */}
    <img 
      src={playlist.thumbnail} 
      alt={playlist.title} 
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-90" 
      loading="lazy"
    />
    
    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-70 transition-all duration-500 group-hover:opacity-90 group-hover:via-black/60" />
    
    {/* Play Icon */}
    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-90 group-hover:scale-100 z-10">
      <div className="bg-flame/90 text-white rounded-full p-4 shadow-xl backdrop-blur-sm border border-white/20">
        <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
      </div>
    </div>

    {/* Content - Bottom */}
    <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform transition-transform duration-500 group-hover:translate-y-[-4px]">
      <h3 className="text-white text-xl md:text-2xl font-bold font-heading leading-tight drop-shadow-lg line-clamp-2 text-left">
        {playlist.title}
      </h3>
    </div>
  </a>
);

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
  const featuredPlaylists = PLAYLISTS.slice(0, 3);
  const t = CONTENT.home;
  
  return (
    <div className="font-body">
      <SEO 
        title="Home" 
        description="Father’s Heart Ministry in Surrey, BC. Encounter the transformative love of God the Father through our community, worship, and teachings." 
      />
      
      {/* Hero Section */}
      <section className="relative bg-cream py-24 pb-24 text-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-olive opacity-5" 
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }}
        ></div>
        <div className="absolute top-10 left-10 w-64 h-64 bg-flame opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-olive opacity-5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative">
          <h1 className="text-5xl md:text-7xl font-bold font-heading text-olive mb-6 tracking-tight leading-tight">{t.title}</h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-10 font-light leading-relaxed">{t.subtitle}</p>
          <button 
            onClick={() => setCurrentPage('Sermons')}
            className="bg-flame text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-flame/90 transition-all duration-300 transform hover:-translate-y-1 shadow-xl hover:shadow-2xl"
          >
            {t.cta}
          </button>
        </div>
      </section>

      {/* Featured Sermons */}
      <section className="py-24 bg-cream relative">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold font-heading text-olive mb-16 relative inline-block">
            {t.featuredSermons}
            <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-flame rounded-full"></span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {featuredPlaylists.map(playlist => <SermonCard key={playlist.id} playlist={playlist} />)}
          </div>
          <div className="mt-16">
            <button 
              onClick={() => setCurrentPage('Sermons')}
              className="group inline-flex items-center text-olive font-bold text-lg hover:text-flame hover:underline transition-all duration-300"
            >
              View All Sermons
              <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </button>
          </div>
        </div>
      </section>

      {/* Info Box Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-10 text-center border border-gray-100">
              <h2 className="text-3xl font-bold font-heading text-olive mb-4">{t.joinUsTitle}</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {t.joinUsText} <br />
                  <span className="font-semibold text-gray-900 block mt-1 text-xl">10167 148 St, Surrey, BC V3R 3X2</span>
              </p>
              <a 
                  href="https://www.google.com/maps?q=10167+148+St,+Surrey,+BC+V3R+3X2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-white bg-olive hover:bg-olive/90 px-6 py-3 rounded-lg font-semibold transition-all duration-300 justify-center gap-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                  <MapPinIcon />
                  <span>{t.openMaps}</span>
              </a>
          </div>
        </div>
      </section>
      
      {/* Newsletter CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold font-heading text-olive mb-6">{t.newsletterTitle}</h2>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">{t.newsletterText}</p>
            <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder={t.emailPlaceholder}
                className="flex-grow w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-olive focus:border-transparent transition-all duration-300 hover:border-olive text-lg"
              />
              <button 
                type="submit" 
                className="bg-flame text-white font-bold py-4 px-10 rounded-xl hover:bg-flame/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg whitespace-nowrap"
              >
                {t.subscribeBtn}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;