import React, { useState, useMemo } from 'react';
import { PODCASTS, CONTENT } from '../constants';
import { Playlist } from '../types';
import SEO from '../components/SEO';

const PodcastCard: React.FC<{ playlist: Playlist }> = ({ playlist }) => (
  <a 
    href={playlist.url} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="group relative block w-full aspect-video rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-black"
  >
    <img 
      src={playlist.thumbnail} 
      alt={playlist.title} 
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-90" 
      loading="lazy"
    />
    
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-70 transition-all duration-500 group-hover:opacity-90 group-hover:via-black/60" />

    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-90 group-hover:scale-100 z-10">
      <div className="bg-flame/90 text-white rounded-full p-4 shadow-xl backdrop-blur-sm border border-white/20">
        <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
      </div>
    </div>

    <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform transition-transform duration-500 group-hover:translate-y-[-4px]">
      <h3 className="text-white text-xl md:text-2xl font-bold font-heading leading-tight drop-shadow-lg line-clamp-2">
        {playlist.title}
      </h3>
    </div>
  </a>
);

const PodcastPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const t = CONTENT.podcast;

  const filteredPodcasts = useMemo(() => {
    return PODCASTS.filter(playlist => 
      playlist.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      playlist.id.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const paginatedPodcasts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredPodcasts.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredPodcasts, currentPage]);

  const totalPages = Math.ceil(filteredPodcasts.length / itemsPerPage);

  return (
    <div className="font-body">
      <SEO 
        title="Podcast" 
        description="Listen to Coffee With Shepherd. Faith-filled conversations, teachings, and stories from Pastor Peter and the Father's Heart community." 
      />
      
      <section className="bg-cream py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold font-heading text-olive mb-4">{t.title}</h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">{t.subtitle}</p>
          </div>
          
          <div className="mb-12 max-w-lg mx-auto">
            <div className="relative">
              <input 
                type="text"
                placeholder={t.searchPlaceholder}
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full px-5 py-4 pl-12 border-2 border-transparent bg-white shadow-md rounded-full focus:outline-none focus:ring-2 focus:ring-olive focus:border-transparent transition-all placeholder-gray-400 text-gray-700"
              />
              <div className="absolute top-0 bottom-0 right-4 flex items-center pointer-events-none">
                 <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </div>
            </div>
          </div>

          {filteredPodcasts.length > 0 ? (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                {paginatedPodcasts.map(playlist => (
                  <PodcastCard 
                    key={playlist.id} 
                    playlist={playlist} 
                  />
                ))}
              </div>
              
              {totalPages > 1 && (
                <div className="mt-16 flex justify-center items-center space-x-2 gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNumber => (
                    <button
                      key={pageNumber}
                      onClick={() => setCurrentPage(pageNumber)}
                      className={`w-10 h-10 rounded-full font-bold transition-all transform hover:scale-110 ${
                        currentPage === pageNumber 
                          ? 'bg-olive text-white shadow-lg' 
                          : 'bg-white text-gray-600 hover:bg-olive/10 shadow-sm'
                      }`}
                    >
                      {pageNumber}
                    </button>
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16 bg-white rounded-xl shadow-inner max-w-2xl mx-auto">
              <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
              <p className="text-xl text-gray-500 font-medium">{t.noResults}</p>
            </div>
          )}

          <div className="mt-16 text-center">
             <a 
                href="https://www.coffeewithshepherd.com/#/episodes" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-flame text-white font-bold text-lg rounded-full hover:bg-flame/90 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
             >
                {t.moreEpisodesBtn}
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
             </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PodcastPage;