export type Page = 'Home' | 'About Us' | 'Gallery' | 'Services' | 'Contact' | 'Give' | 'Sermons' | 'Podcast' | 'Donations' | 'Articles';

export interface Playlist {
  id: string;
  title: string;
  description: string;
  url: string;
  thumbnail: string;
}

export interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  imageUrl: string;
  category: 'ceremony' | 'events' | 'short' | 'all';
  likes: number;
}

export interface ServiceEvent {
  id: string;
  title: string;
  timeStart: string;
  timeEnd: string;
  description: string;
  category: 'saturday' | 'social' | 'media';
}
