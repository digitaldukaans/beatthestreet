export interface InsightArticle {
  id: string;
  title: string;
  slug: string;
  category: 'Business Deep Dive' | 'Fundamental Analysis' | 'Forensic Analysis' | 'Corporate Developments' | 'Market Intelligence';
  summary: string;
  date: string;
  readTime: string;
  author: string;
  tags: string[];
  imageUrl: string;
  featured?: boolean;
}

export interface EcosystemChannel {
  name: string;
  handle: string;
  focus: string;
  description: string;
  url: string;
  platform: 'youtube' | 'substack' | 'x' | 'telegram' | 'whatsapp' | 'linkedin' | 'instagram';
  badge: string;
  highlightText: string;
}

export interface CoverageArea {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  points: string[];
  tag: string;
  iconName: string;
}

export interface TeamMember {
  name: string;
  role: string;
  focus: string;
  location: string;
  bio: string;
  highlights: string[];
  imageUrl: string;
}

export interface MarketTickerItem {
  symbol: string;
  name: string;
  note: string;
  category: string;
}

