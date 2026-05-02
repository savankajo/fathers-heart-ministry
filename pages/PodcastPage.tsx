import React, { useMemo, useState } from 'react';
import SEO from '../components/SEO';

type PodcastEpisode = {
  id: string;
  title: string;
};

const YOUTUBE_CHANNEL_URL = 'https://www.youtube.com/@CoffeewiththeShepherd';

const PODCAST_EPISODES: PodcastEpisode[] = [
  { id: '83396TQmOaY', title: 'Episode 49: How To Overcome Sickness Part 4 | حلقة 49: كيف تغلب المرض الجزء الرابع' },
  { id: 'yQPddRJpTb4', title: 'Episode 48: How To Overcome Sickness Part 3 | حلقة 48: كيف تغلب المرض الجزء الثالث' },
  { id: 'zYjCcl3yECs', title: 'Episode 47: How To Overcome Sickness Part 2 | حلقة 47: كيف تغلب المرض الجزء الثاني' },
  { id: 'VXj_kcbGWbw', title: 'Episode 46: How To Overcome Sickness Part 1 | حلقة 46: كيف تغلب المرض الجزء الاول' },
  { id: '7aA1TRwGYpY', title: 'Episode 45: Complete the salvation of your souls Part 5 | حلقة 45: تمموا خلاص نفوسكم الجزء الخامس' },
  { id: 'haKKLeuIrfg', title: 'Episode 44: Complete the salvation of your souls Part 4 | حلقة 44: تمموا خلاص نفوسكم الجزء الرابع' },
  { id: 'tKdRzlPIeeU', title: 'Episode 43: Complete the salvation of your souls Part 3 | حلقة 43: تمموا خلاص نفوسكم الجزء الثالث' },
  { id: 'x05o49GL1XM', title: 'Episode 42: Complete the salvation of your souls Part 2 | حلقة 42: تمموا خلاص نفوسكم الجزء الثاني' },
  { id: 'P1fpgaQDgyQ', title: 'Episode 41: Complete the salvation of your souls Part 1 | حلقة 41: تمموا خلاص نفوسكم الجزء الاول' },
  { id: 'nWifPVkD47o', title: 'Episode 40: Divine Judgement Part 11 | حلقة 40: القضاء الإلهي الجزء الحادية عشر' },
  { id: 'gUbQKBfapcY', title: 'Episode 39: Divine Judgement Part 10 | حلقه39: القضاء الإلهي الجزء العاشر' },
  { id: '0pZCgfL8gJE', title: 'Episode 38: Divine Judgement Part 9 | حلقه 38: القضاء الإلهي الجزء التاسع' },
  { id: 'w2oadIRK9G4', title: 'Episode 37: Divine Judgement Part 8 | حلقه 37: القضاء الإلهي الجزء الثامن' },
  { id: 'Nv8iDMugGeQ', title: 'Episode 36: Divine Judgement Part 7 | حلقه 36: القضاء الإلهي الجزء السابع' },
  { id: 'PY-cvmRI3rg', title: 'Episode 35: Divine Judgement Part 6 | حلقه 35: القضاء الإلهي الجزء السادس' },
  { id: 'YWZ5nVG0jjw', title: 'Episode 34: Divine Judgement Part 5 | حلقه 34: القضاء الإلهي الجزء الخامس' },
  { id: 'yQV8XVByDDw', title: 'Episode 33: Divine Judgement Part 4 | حلقه 33: القضاء الإلهي الجزء الرابع' },
  { id: 'oRhRIwt4Gwc', title: 'Episode 32: Divine Judgement Part 3 | حلقه 32: القضاء الإلهي الجزء الثالث' },
  { id: '7Xtkjh_7oHI', title: 'Episode 31: Divine Judgement Part 2 | حلقه 31: القضاء الإلهي الجزء الثاني' },
  { id: 'cLRvLfiCCw8', title: 'Episode 30: Divine Judgement | حلقه 30: القضاء الإلهي' },
  { id: 'v4NZF-tWI4U', title: 'Episode 29: God’s Discipline | حلقه 29: التأديب الإلهي' },
  { id: 'md95TeOb0J4', title: 'Episode 28: God’s Discipline | حلقه 28: التأديب الإلهي' },
  { id: 'egVd-dnTios', title: 'Episode 27: God’s Discipline | حلقه ٢٧: التأديب الإلهي' },
  { id: 'pyTr8ZD8QfQ', title: 'Episode 26: The Test and Temptation | الحلقة 26: التجربة و الامتحان' },
  { id: 'YI5h4FS3g1Y', title: 'Episode 25: The Test and Temptation | الحلقة 25: التجربة و الامتحان' },
  { id: '6_8FzzIvdL0', title: 'Episode 24: The Test and Temptation | الحلقة 24: التجربة و الامتحان' },
  { id: '649whjKOR1M', title: 'Episode 23: The Mystery of Job (Part 9) | الحلقة 23: حل لغز سفر أيوب (الجزء التاسع)' },
  { id: 'b5cGsJnYapQ', title: 'Episode 22: The Mystery of Job (Part 8) | الحلقة 22: حل لغز سفر أيوب (الجزء الثامن)' },
  { id: '-c5skdEXnjk', title: 'الحلقة واحد عشرون - حل لغز سفر أيوب (الجزء السابع) / Episode Twenty One - The Mystery of Job (Part 7)' },
  { id: 'pAh33Ml6gUI', title: 'الحلقة عشرين - حل لغز سفر أيوب (الجزء السادس) / Episode Twenty - The Mystery of Job (Part 6)' },
  { id: 'vPWtX_eRguc', title: 'الحلقة التاسعة عشر - حل لغز سفر أيوب (الجزء الخامس) / Episode Nineteen - The Mystery of Job (Part 5)' },
  { id: 'uz4waL1SRTo', title: 'الحلقة الثامن عشر - حل لغز سفر أيوب (الجزء الرابع) / Episode Eighteen - The Mystery of Job (Part 4)' },
  { id: 'pmeh7R5QYWw', title: 'الحلقة السابعة عشر - حل لغز سفر أيوب (الجزء الثالت) / Episode Seventeen - The Mystery of Job (Part 3)' },
  { id: '-fQ7-hSuICg', title: 'الحلقة السادسة عشر - حل لغز سفر أيوب (الجزء الثاني) / Episode Sixteen - The Mystery of Job (Part Two)' },
  { id: '-U_LPoF0UMI', title: 'الحلقة الخامسة عشر - حل لغز سفر أيوب (الجزء الاول) / Episode Fifteen - The Mystery of Job (Part One)' },
  { id: '06gbRGsexng', title: 'الحلقة الرابعة عشر - خلاص النفس (الجزء الثالث) / Episode Fourteen - Soul Salvation (Part Three)' },
  { id: 'I0zp4YaImOk', title: 'الحلقة الثالثة عشر - خلاص النفس (الجزء الثاني) / Episode Thirteen - Soul Salvation (Part Two)' },
  { id: 'ZNcBSIxXxuc', title: 'الحلقة الثانية عشر - خلاص النفس (الجزء الاول) / Episode Twelve - Soul Salvation (Part One)' },
  { id: 'JI7qPsxm5D4', title: "الحلقة الحادية عشر - نعم المولود من الله لا يخطئ / Episode Eleven - Yes, the born from God don't do sin" },
  { id: 'Bg8xbDkhjWM', title: 'الحلقة العاشرة - هل المولود من الله لا يخطئ / Episode Ten - Does the one who born from God commit sin' },
  { id: 'wcycGzLo8N8', title: 'بودكاست/ قهوة مع الراعي الحلقة التاسعة / Podcast: Coffee with the Shepherd Episode Nine' },
  { id: '_oa7Kcxu8_o', title: 'بودكاست/ قهوة مع الراعي الحلقة الثامنة / Podcast: Coffee with the Shepherd Episode Eight' },
  { id: 'VUsj2BuT53E', title: 'بودكاست/ قهوة مع الراعي الحلقة السابعة / Podcast: Coffee with the Shepherd Episode Seven' },
  { id: '3MoP1I0WUMA', title: 'بودكاست/ قهوة مع الراعي الحلقة السادسة / Podcast: Coffee with the Shepherd Episode Six' },
  { id: 'FoHZGxjLerM', title: 'بودكاست/ قهوة مع الراعي الحلقة الخامسة / Podcast: Coffee with the Shepherd Episode Five' },
  { id: '6DJvTEYkQLY', title: 'بودكاست/ قهوة مع الراعي الحلقة الرابعة / Podcast: Coffee with the Shepherd Episode Four' },
  { id: 'oKtVaEQV_60', title: 'بودكاست/ قهوة مع الراعي الحلقة الثالثة / Podcast: Coffee with the Shepherd Episode Three' },
  { id: 'n_AW_hhjd4o', title: 'بودكاست/ قهوة مع الراعي الحلقة الثانية / Podcast: Coffee with the Shepherd Episode Two' },
  { id: '6Q5xNg4T1g4', title: 'بودكاست/ قهوة مع الراعي الحلقة الاولى / Podcast: Coffee with the Shepherd Episode One' },
];

const getEpisodeUrl = (id: string) => `https://www.youtube.com/watch?v=${id}`;
const getThumbnailUrl = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

const PodcastCard: React.FC<{ episode: PodcastEpisode }> = ({ episode }) => (
  <a
    href={getEpisodeUrl(episode.id)}
    target="_blank"
    rel="noopener noreferrer"
    className="group block overflow-hidden rounded-2xl bg-white shadow-lg border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
  >
    <div className="relative aspect-video overflow-hidden bg-[#1a3a5c]">
      <img
        src={getThumbnailUrl(episode.id)}
        alt={episode.title}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        onError={e => {
          (e.target as HTMLImageElement).src = 'https://res.cloudinary.com/dyjffxbef/image/upload/v1765302297/logotransport_ljm5vs.png';
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80" />
      <div className="absolute left-4 bottom-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#D4AF37] text-black shadow-lg transition-transform duration-300 group-hover:scale-110">
        <svg className="ml-0.5 h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
    </div>
    <div className="p-5">
      <h2 className="font-heading text-base font-bold leading-snug text-[#1a3a5c] transition-colors duration-200 group-hover:text-[#b99321]">
        {episode.title}
      </h2>
      <p className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-red-600">
        Watch on YouTube
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17 17 7M8 7h9v9" />
        </svg>
      </p>
    </div>
  </a>
);

const PodcastPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEpisodes = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    if (!query) return PODCAST_EPISODES;
    return PODCAST_EPISODES.filter(episode => episode.title.toLowerCase().includes(query));
  }, [searchTerm]);

  return (
    <div className="font-body bg-gray-50 min-h-screen">
      <SEO
        title="Podcast — Coffee With the Shepherd"
        description="Watch Coffee With the Shepherd podcast episodes from Father's Heart Ministry on YouTube."
        url="https://fathersheartministry.ca/#/podcast"
      />

      <div className="bg-[#1a3a5c] py-16 text-center">
        <p className="text-[#D4AF37] font-semibold tracking-[0.3em] text-sm uppercase mb-3">Podcast Episodes</p>
        <h1 className="text-4xl sm:text-5xl font-bold font-heading text-white">Coffee With the Shepherd</h1>
        <div className="w-16 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full" />
        <p className="text-white/75 mt-4 max-w-2xl mx-auto px-4">
          Watch every public episode from the Coffee With the Shepherd YouTube channel.
        </p>
      </div>

      <section className="py-14">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-10 overflow-hidden rounded-2xl bg-white shadow-xl border border-gray-100">
            <div className="bg-gradient-to-r from-[#1a3a5c] to-[#0f2540] p-7 text-white flex flex-col md:flex-row items-center gap-6">
              <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 border-4 border-[#D4AF37] bg-white shadow-xl">
                <img
                  src="https://res.cloudinary.com/dyjffxbef/image/upload/v1765302297/logotransport_ljm5vs.png"
                  alt="Father's Heart Ministry"
                  className="w-full h-full object-contain p-3"
                />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold font-heading mb-2">Coffee With the Shepherd on YouTube</h2>
                <p className="text-white/75 text-sm leading-relaxed max-w-2xl">
                  Select an episode below to open it directly on YouTube. The episode images use the YouTube thumbnails from your channel.
                </p>
              </div>
            </div>
            <div className="p-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="relative w-full md:max-w-md">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  placeholder="Search episodes"
                  className="w-full rounded-full border-2 border-gray-200 bg-white px-5 py-3 pr-11 text-gray-700 shadow-sm transition-all placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#1a3a5c]"
                />
                <svg className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m21 21-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <a
                href={YOUTUBE_CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-6 py-3 text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-700"
              >
                Visit Channel
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17 17 7M8 7h9v9" />
                </svg>
              </a>
            </div>
          </div>

          <p className="mb-8 text-center text-sm text-gray-500">
            Showing {filteredEpisodes.length} of {PODCAST_EPISODES.length} episodes
          </p>

          {filteredEpisodes.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredEpisodes.map(episode => (
                <PodcastCard key={episode.id} episode={episode} />
              ))}
            </div>
          ) : (
            <div className="mx-auto max-w-2xl rounded-xl bg-white py-16 text-center shadow-inner">
              <p className="text-xl font-medium text-gray-500">No episodes found.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default PodcastPage;
