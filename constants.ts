import { TeamMember, Playlist, Page } from './types';

export const NAV_LINKS: Page[] = ['Home', 'About Us', 'Sermons', 'Contact', 'Podcast', 'Donations'];

export const NAV_LABELS: Record<Page, string> = {
  Home: 'Home',
  'About Us': 'About Us',
  Sermons: 'Sermons',
  Contact: 'Contact',
  Podcast: 'Podcast',
  Donations: 'Donations',
};

export const PAGE_PATHS: Record<Page, string> = {
  Home: '/',
  'About Us': '/about',
  Sermons: '/sermons',
  Contact: '/contact',
  Podcast: '/podcast',
  Donations: '/donations',
};

export const CONTENT = {
  home: {
    title: "Father’s Heart Ministry",
    subtitle: "Encounter the Father’s love. Be healed, equipped, and sent.",
    cta: "Watch Latest Sermons",
    joinUsTitle: "Join Us in Person",
    joinUsText: "Join our meeting every Saturday at 04:00 PM",
    openMaps: "Open in Google Maps",
    featuredSermons: "Featured Sermons",
    newsletterTitle: "Subscribe to Our Newsletter",
    newsletterText: "Stay updated with the latest news, events, and messages from our ministry.",
    subscribeBtn: "Subscribe",
    emailPlaceholder: "Enter your email address",
    viewOnYouTube: "View on YouTube"
  },
  about: {
    title: "About Our Ministry",
    subtitle: "Sharing the Gospel and the vision of Father's Heart Ministry.",
    missionTitle: "Our Mission",
    missionText: "Father’s Heart Ministry exists to create a space where everyone can encounter the transformative love of God the Father. We are committed to sharing the Gospel, leading people into a personal relationship with Jesus Christ, and fostering a community where healing, restoration, and spiritual growth are nurtured.",
    visionTitle: "Our Vision",
    visionText: "Our vision is to see lives changed by the power of the Holy Spirit. We aim to be a place where visitors find not just a church, but a family—experiencing deep healing, lasting peace, and full restoration. We seek to disciple believers, equipping them to walk in their God-given purpose and sending them out to impact the world for Christ.",
    teamTitle: "Meet Our Team"
  },
  sermons: {
    title: "Our Sermons",
    subtitle: "Browse and watch all our ministry sermon series. Find teachings, worship, and testimonies to uplift your spirit.",
    searchPlaceholder: "Search by sermon series title...",
    viewOnYoutube: "View on YouTube",
    noResults: "No sermon series found matching your search."
  },
  podcast: {
    title: "Coffee With Shepherd",
    subtitle: "Listen to insightful conversations, teachings, and stories that inspire faith.",
    searchPlaceholder: "Search podcasts...",
    noResults: "No podcasts found matching your search.",
    moreEpisodesBtn: "For more episodes and playlists"
  },
  contact: {
    title: "Get In Touch",
    subtitle: "We'd love to hear from you. Send us a message or connect with us online.",
    formTitle: "Send a Message",
    nameLabel: "Name",
    emailLabel: "Email",
    messageLabel: "Message",
    sendButton: "Send Message",
    connectTitle: "Connect With Us",
    locationTitle: "Our Location",
    meetingText: "We meet at:",
    getDirections: "Get Directions"
  },
  donations: {
    title: "Support Our Ministry",
    subtitle: "Every gift helps spread the Father’s love and transform lives. Thank you for your generosity and partnership in the Gospel.",
    optionsTitle: "Donation Options",
    insideCanada: "Inside Canada",
    outsideCanada: "Outside Canada",
    redirectText: "You will be redirected to our secure donation platform."
  }
};

export const TEAM_MEMBERS: TeamMember[] = [
  { name: 'Pastor Peter El Maasrany', role: 'Lead Pastor', imageUrl: 'https://picsum.photos/seed/peter/200' },
  { name: 'Pastor Liliane El Maasrany', role: 'Co-Pastor', imageUrl: 'https://picsum.photos/seed/liliane/200' },
  { name: 'Yosif Butrus', role: 'Camera Operator', imageUrl: 'https://picsum.photos/seed/peter/200' }, // Using available placeholders for team if not provided
  { name: 'Hijran Oshana', role: 'Camera Operator', imageUrl: 'https://picsum.photos/seed/peter/200' },
  { name: 'Savan Kajo', role: 'Camera Operator', imageUrl: 'https://picsum.photos/seed/peter/200' },
  { name: 'Mohanad Shukri', role: 'Picture Editor', imageUrl: 'https://picsum.photos/seed/peter/200' },
  { name: 'Steven Fahmy', role: 'Lighting', imageUrl: 'https://picsum.photos/seed/peter/200' },
  { name: 'Rita Shaker', role: 'Production Designer', imageUrl: 'https://picsum.photos/seed/peter/200' },
];

export const PLAYLISTS: Playlist[] = [
  {
    id: 'PLg8vlxqLvRxsX5MAGt32h0plpdScv0zCn',
    title: 'Godliness has value for all things / التقوي نافعه لكل شيء',
    description: 'Discover the value of godliness in all aspects of life.',
    url: 'https://youtube.com/playlist?list=PLg8vlxqLvRxsX5MAGt32h0plpdScv0zCn&si=UfmXFarx9qHx7LU-',
    thumbnail: 'https://res.cloudinary.com/dyjffxbef/image/upload/v1766519261/Screenshot_2025-12-23_114517_jie9lk.png',
  },
  {
    id: 'PLg8vlxqLvRxuvIbgOr8FsPykERAOqa-_Q',
    title: 'How to Prepare for Jesus Return | كيف تستعد لمجيء الرب',
    description: 'Biblical teachings on preparing for the return of Jesus Christ.',
    url: 'https://youtube.com/playlist?list=PLg8vlxqLvRxuvIbgOr8FsPykERAOqa-_Q&si=aXBlg5DSFp01ENsa',
    thumbnail: 'https://res.cloudinary.com/dyjffxbef/image/upload/v1766520484/Screenshot_2025-12-23_120748_yj3pks.png',
  },
  {
    id: 'PLg8vlxqLvRxtfz1vRl0uJf7ZKmQQTJTcE',
    title: 'The Glory of The Sons of God / مجد اولاد الله',
    description: 'Exploring the glory revealed in the sons of God.',
    url: 'https://youtube.com/playlist?list=PLg8vlxqLvRxtfz1vRl0uJf7ZKmQQTJTcE&si=PuyanlQKnIbRgrYB',
    thumbnail: 'https://res.cloudinary.com/dyjffxbef/image/upload/v1766519440/Screenshot_2025-12-23_115010_zksphi.png',
  },
  {
    id: 'PLg8vlxqLvRxta_Ju68J9NjmHt0yMQ2tGK',
    title: 'تفعيل الحمايه الله الألهيه / God\'s Divine Protection Activation',
    description: 'Learn how to activate and walk in God\'s divine protection.',
    url: 'https://youtube.com/playlist?list=PLg8vlxqLvRxta_Ju68J9NjmHt0yMQ2tGK&si=_DzHYjJ2qEUxsNWZ',
    thumbnail: 'https://res.cloudinary.com/dyjffxbef/image/upload/v1766519491/Screenshot_2025-12-23_115101_csvqnk.png',
  },
  {
    id: 'PLg8vlxqLvRxuPBa91z5A63AD_Q8Ha-gFp',
    title: 'Christian Life Foundations and Principles / مبادئ والاسسيات للحياة المسيحي',
    description: 'Fundamental principles for a strong Christian life.',
    url: 'https://www.youtube.com/playlist?list=PLg8vlxqLvRxuPBa91z5A63AD_Q8Ha-gFp',
    thumbnail: 'https://res.cloudinary.com/dyjffxbef/image/upload/v1766519597/Screenshot_2025-12-23_115251_yc57mf.png',
  },
  {
    id: 'PLg8vlxqLvRxvku4ArkDjIfHmq7zBfBQb_',
    title: 'Joy of The Lord Is Our Strength / فرح الرب هو قوتنا',
    description: 'Understanding how the joy of the Lord sustains us.',
    url: 'https://youtube.com/playlist?list=PLg8vlxqLvRxvku4ArkDjIfHmq7zBfBQb_&si=3YhQ8E2CV1berECy',
    thumbnail: 'https://res.cloudinary.com/dyjffxbef/image/upload/v1766519719/Screenshot_2025-12-23_115417_bke6mr.png',
  },
  {
    id: 'PLg8vlxqLvRxvjFbjtpMyu2nHsIsB2nWFC',
    title: 'Renewing our mind and soul salvation / دراسه عن تجديد الذهن وخلاص النفس',
    description: 'Studies on the renewal of the mind and salvation of the soul.',
    url: 'https://youtube.com/playlist?list=PLg8vlxqLvRxvjFbjtpMyu2nHsIsB2nWFC&si=nHXxl434ssq5-dD8',
    thumbnail: 'https://res.cloudinary.com/dyjffxbef/image/upload/v1766519813/Screenshot_2025-12-23_115628_wanxfp.png',
  },
  {
    id: 'PLg8vlxqLvRxt8AI-XNQkz1WGfVyFpejp-',
    title: 'The Glorious of Resurrection / امجاد القيامة',
    description: 'Celebrating and understanding the power of the Resurrection.',
    url: 'https://youtube.com/playlist?list=PLg8vlxqLvRxt8AI-XNQkz1WGfVyFpejp-&si=Hu7V2X4UIKR_i0fp',
    thumbnail: 'https://res.cloudinary.com/dyjffxbef/image/upload/v1766519890/Screenshot_2025-12-23_115747_bbkfxw.png',
  },
  {
    id: 'PLg8vlxqLvRxtedTo4o2-Sg6FZYnz02IXs',
    title: 'God\'s Calling / دعوه الله',
    description: 'Discovering and responding to the call of God.',
    url: 'https://youtube.com/playlist?list=PLg8vlxqLvRxtedTo4o2-Sg6FZYnz02IXs&si=jjzJ5bt9-QQleg-h',
    thumbnail: 'https://res.cloudinary.com/dyjffxbef/image/upload/v1766519966/Screenshot_2025-12-23_115909_s7nx6i.png',
  },
  {
    id: 'PLg8vlxqLvRxsCojVjv1FrjTJkxjNrz3Jr',
    title: 'Word of God Series / سلسلة كلمة الله',
    description: 'Deep dive into the Word of God.',
    url: 'https://youtube.com/playlist?list=PLg8vlxqLvRxsCojVjv1FrjTJkxjNrz3Jr&si=xiPMaDL7us79mNob',
    thumbnail: 'https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'PLg8vlxqLvRxsF5wFIWgKMTIYQtzX10QWJ',
    title: 'Why did God order the extermination of some nations in the Old Testament? / لماذا أمر الرب بإبادة بعض الشعوب في العهد القديم؟',
    description: 'Addressing difficult questions in the Old Testament.',
    url: 'https://youtube.com/playlist?list=PLg8vlxqLvRxsF5wFIWgKMTIYQtzX10QWJ&si=PjLiwPqh83yHjRPW',
    thumbnail: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'PLg8vlxqLvRxthPya3-Td1IpGbkbe19zy7',
    title: 'The importance of spiritual shepherding / اهمية خدمة الرعاية الروحية',
    description: 'The role and importance of spiritual guidance and shepherding.',
    url: 'https://youtube.com/playlist?list=PLg8vlxqLvRxthPya3-Td1IpGbkbe19zy7&si=7XEz6T5h12N2bXmR',
    thumbnail: 'https://res.cloudinary.com/dyjffxbef/image/upload/v1766520040/Screenshot_2025-12-23_120023_jzmmtx.png',
  },
  {
    id: 'PLg8vlxqLvRxsvaymsZp8qRoxczs-0_tKX',
    title: 'Who is the greater in the kingdom of heaven? / فمن هو أعظم في ملكوت السموات؟',
    description: 'Jesus\' teachings on greatness in the Kingdom.',
    url: 'https://youtube.com/playlist?list=PLg8vlxqLvRxsvaymsZp8qRoxczs-0_tKX&si=i009-1qeS-jzl-NE',
    thumbnail: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'PLg8vlxqLvRxvAbG_o3iPGTbwx601WOrgx',
    title: 'the key to answered prayers / مفاتيح الصلاة المستجابة',
    description: 'Unlocking the keys to effective and answered prayer.',
    url: 'https://youtube.com/playlist?list=PLg8vlxqLvRxvAbG_o3iPGTbwx601WOrgx&si=LQS9Cgn0TwrG44Xh',
    thumbnail: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'PLg8vlxqLvRxtbmSPU5K0b-rNod_Vi1f-1',
    title: 'فدي نفسي - د. ثناء زغلول',
    description: 'Sermons by Dr. Thana Zaghloul.',
    url: 'https://youtube.com/playlist?list=PLg8vlxqLvRxtbmSPU5K0b-rNod_Vi1f-1&si=BKKV7Z_nsfdD6M4y',
    thumbnail: 'https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'PLg8vlxqLvRxuB2UmuncUcRLnIS9eZdiKe',
    title: 'Saturday Meetings / اجتماع يوم السبت',
    description: 'Recordings from our weekly Saturday meetings.',
    url: 'https://youtube.com/playlist?list=PLg8vlxqLvRxuB2UmuncUcRLnIS9eZdiKe&si=FrACDzUcjlrOz_UZ',
    thumbnail: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'PLg8vlxqLvRxtAR29YaTWKOJb41yoSYpdz',
    title: 'Worship time / فترة التسبيح والعبادة',
    description: 'Moments of deep worship and praise.',
    url: 'https://youtube.com/playlist?list=PLg8vlxqLvRxtAR29YaTWKOJb41yoSYpdz&si=0l1Q6wFn1x_3P5Q1',
    thumbnail: 'https://images.unsplash.com/photo-1518972559570-7cc1309f3229?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'PLg8vlxqLvRxsJ8RvvrPz_yUG7ZVXMQRVa',
    title: 'Short videos',
    description: 'Short, inspiring messages and clips.',
    url: 'https://youtube.com/playlist?list=PLg8vlxqLvRxsJ8RvvrPz_yUG7ZVXMQRVa&si=rPe70KUluuGJH41b',
    thumbnail: 'https://images.unsplash.com/photo-1515446028562-ca051938455c?auto=format&fit=crop&w=800&q=80',
  }
];

export const PODCASTS: Playlist[] = [
  {
    id: 'placeholder-podcast',
    title: 'Coffee With Shepherd - Latest Episodes',
    description: 'Join us for insightful conversations. New episodes coming soon.',
    url: 'https://www.coffeewithshepherd.com/#/episodes',
    thumbnail: 'https://images.unsplash.com/photo-1478737270239-2f02b77ac6d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  }
];