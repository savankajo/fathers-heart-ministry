import React, { useState, useMemo } from 'react';
import SEO from '../components/SEO';
import { ALL_ARTICLES, Article } from '../data/articles';
import { CONTENT } from '../constants';

const ArticlesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState<'English' | 'Arabic'>('English');

  const filteredArticles = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    return ALL_ARTICLES.filter(article => {
      const matchesLanguage = article.language === selectedLanguage;
      const matchesSearch = !query || 
        article.title.toLowerCase().includes(query) ||
        article.description.toLowerCase().includes(query);
      return matchesLanguage && matchesSearch;
    });
  }, [searchQuery, selectedLanguage]);

  const handleDownload = (pdfPath: string, title: string) => {
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = `${title}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="font-body bg-gray-50 min-h-screen pb-20">
      <SEO 
        title="Articles" 
        description="Access all spiritual articles and PDF teachings from Father's Heart Ministry in English and Arabic."
      />

      {/* Hero Header */}
      <section className="bg-[#1a3a5c] py-20 text-white text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-[#D4AF37] font-semibold tracking-[0.3em] text-sm uppercase mb-3">Spiritual Library</p>
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">{CONTENT.articles.title}</h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            {CONTENT.articles.subtitle}
          </p>
        </div>
      </section>

      {/* Control Panel */}
      <section className="py-12 -mt-10 relative z-10">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 border border-gray-100 flex flex-col gap-8">
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto w-full">
              <input
                type="text"
                placeholder={CONTENT.articles.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-[#D4AF37] focus:outline-none shadow-sm text-gray-700 transition-all duration-300"
              />
              <svg 
                className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Language Toggle (The "Normal Box") */}
            <div className="flex justify-center">
              <div className="inline-flex p-1.5 bg-gray-100 rounded-2xl border border-gray-200">
                <button
                  onClick={() => setSelectedLanguage('English')}
                  className={`px-8 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                    selectedLanguage === 'English' 
                    ? 'bg-white text-[#1a3a5c] shadow-lg scale-105' 
                    : 'text-gray-500 hover:text-[#1a3a5c] hover:bg-white/50'
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => setSelectedLanguage('Arabic')}
                  className={`px-8 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                    selectedLanguage === 'Arabic' 
                    ? 'bg-white text-[#1a3a5c] shadow-lg scale-105' 
                    : 'text-gray-500 hover:text-[#1a3a5c] hover:bg-white/50'
                  }`}
                >
                  العربية
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4 max-w-6xl">
          {filteredArticles.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <div 
                  key={article.id}
                  className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col group border border-gray-50"
                >
                  <div className="p-8 flex-grow">
                    <div className="flex items-center gap-3 mb-5">
                      <span className="bg-gray-50 text-gray-400 text-[10px] font-bold px-3 py-1.5 rounded-full border border-gray-100">
                        {article.date}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold font-heading text-[#1a3a5c] mb-4 group-hover:text-[#D4AF37] transition-colors duration-300 min-h-[56px] leading-tight">
                      {article.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-6 font-light">
                      {article.description}
                    </p>
                  </div>
                  <div className="px-8 pb-8 flex flex-col gap-3">
                    <a
                      href={article.pdfPath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#1a3a5c] text-white font-bold py-3.5 px-6 rounded-xl hover:bg-[#0f2540] transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-xl"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      View Article
                    </a>
                    <button
                      onClick={() => handleDownload(article.pdfPath, article.title)}
                      className="w-full bg-white text-[#1a3a5c] border-2 border-[#1a3a5c]/10 font-bold py-3 px-6 rounded-xl hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                    >
                      <svg className="w-5 h-5 text-gray-400 group-hover/btn:text-[#1a3a5c] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download PDF
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl shadow-sm max-w-2xl mx-auto border border-dashed border-gray-200">
              <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <p className="text-gray-400 font-medium">{CONTENT.articles.noResults}</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ArticlesPage;
