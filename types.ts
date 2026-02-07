
export type Page = 'Home' | 'About Us' | 'Sermons' | 'Contact' | 'Podcast' | 'Donations';

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
