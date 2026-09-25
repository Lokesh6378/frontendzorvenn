export type LeadType = 'contact' | 'project';
export type LeadStatus = 'new' | 'contacted' | 'in_progress' | 'won' | 'lost';

export interface Lead {
  _id: string;
  type: LeadType;
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service?: string;
  budget?: string;
  timeline?: string;
  message: string;
  status: LeadStatus;
  notes: string;
  createdAt: string;
  updatedAt: string;
}

export interface Subscriber {
  _id: string;
  email: string;
  source: string;
  createdAt: string;
}

export interface Paginated<T> {
  items: T[];
  total: number;
  page: number;
  pages: number;
}

export interface Stats {
  totalLeads: number;
  newLeads: number;
  last30Days: number;
  subscribers: number;
  byStatus: Record<LeadStatus, number>;
  recent: Lead[];
}

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: 'admin';
}

export interface Service {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  deliverables: string[];
  icon: 'code' | 'cart' | 'monitor' | 'cloud' | 'sparkles';
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  categories: string[];
  image?: string;
  /** Case-study sections shown on /work/:slug */
  challenge?: string;
  solution?: string;
  result?: string;
  stack?: string[];
}

export interface Stage {
  name: string;
  description: string;
  status: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  company: string;
}
