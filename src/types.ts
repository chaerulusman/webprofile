export type PageId = 'home' | 'about' | 'services' | 'projects' | 'careers' | 'blog' | 'contact';

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  benefits: string[];
  deliverables: string[];
  timeline: string;
  startingPrice: string;
  category: string;
}

export interface ServicePackage {
  id: string;
  name: string;
  badge?: string;
  priceEstimate: string;
  description: string;
  features: string[];
  recommendedFor: string;
  popular?: boolean;
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  client: string;
  category: 'Finansial & Perbankan' | 'BUMN & Smart City' | 'Kesehatan & Medis' | 'E-Commerce & Retail' | 'Manufaktur & Logistik';
  thumbnail: string;
  year: string;
  duration: string;
  overview: string;
  challenge: string;
  solution: string;
  results: {
    label: string;
    value: string;
    subtext: string;
  }[];
  beforeAfter: {
    beforeText: string;
    afterText: string;
    beforeMetric: string;
    afterMetric: string;
  };
  techStack: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  division: 'Eksekutif' | 'Teknologi & Engineering' | 'Produk & Desain' | 'Konsultansi & Bisnis';
  photo: string;
  bio: string;
  expertise: string[];
  linkedin?: string;
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  type: 'Full-time' | 'Hybrid' | 'Remote';
  location: string;
  experience: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  perks: string[];
  postedDate: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string[];
  category: 'Transformasi Digital' | 'Keamanan Siber' | 'Cloud & Arsitektur' | 'Kecerdasan Buatan' | 'Wawasan Bisnis';
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishedAt: string;
  readTimeMinutes: number;
  tags: string[];
  featuredImage: string;
}

export interface Milestone {
  year: string;
  title: string;
  desc: string;
  description?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  content: string;
  projectTag: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  regNumber: string;
  year: string;
  icon: string;
  badge: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}
