/**
 * All homepage content lives here, so copy can change without touching components.
 * Replace the [bracketed] placeholders with real content before launch.
 */
import type { Project, Service, Stage, Testimonial } from '@/types';

export const site = {
  name: 'ZORVENN',
  tagline: 'Software & Digital Product Studio',
  email: 'hello@zorvenn.com',
  social: {
    linkedin: '#',
    instagram: '#',
    github: '#',
    x: '#',
  },
};

export const coreStack = [
  { name: 'React', role: 'Interfaces' },
  { name: 'TypeScript', role: 'Type-safe code' },
  { name: 'Tailwind', role: 'Design systems' },
  { name: 'Node.js', role: 'APIs & services' },
  { name: 'MongoDB', role: 'Data layer' },
];

export const services: Service[] = [
  {
    slug: 'web-development',
    title: 'Web Development',
    summary: 'High-performance websites and web apps.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Node'],
    deliverables: ['Marketing sites and web apps', 'REST APIs and integrations', 'Performance and SEO foundations'],
    icon: 'code',
  },
  {
    slug: 'e-commerce',
    title: 'E-Commerce',
    summary: 'Online stores built to convert.',
    tags: ['Shopify', 'Custom', 'Payments'],
    deliverables: ['Shopify and custom storefronts', 'Checkout and payment gateways', 'Inventory and order management'],
    icon: 'cart',
  },
  {
    slug: 'custom-software',
    title: 'Custom Software',
    summary: 'Tools shaped around how you operate.',
    tags: ['Dashboards', 'Internal tools'],
    deliverables: ['Admin panels and portals', 'Workflow automation', 'Legacy system modernisation'],
    icon: 'monitor',
  },
  {
    slug: 'saas-development',
    title: 'SaaS Development',
    summary: 'From MVP to a multi-tenant platform.',
    tags: ['Auth', 'Billing', 'MongoDB'],
    deliverables: ['MVP scoping and build', 'Subscriptions and billing', 'Scalable multi-tenant architecture'],
    icon: 'cloud',
  },
  {
    slug: 'ai-automation',
    title: 'AI & Automation',
    summary: 'Put AI to work inside your product.',
    tags: ['LLM apps', 'Agents', 'Workflows'],
    deliverables: ['AI features and assistants', 'Document and data pipelines', 'Business process automation'],
    icon: 'sparkles',
  },
];

export const projects: Project[] = [
  {
    slug: 'e-commerce-platform',
    title: 'E-Commerce Platform',
    summary: '[One-line outcome — what you built and the result for the client.]',
    categories: ['E-Commerce', 'Development', 'UI/UX'],
    challenge: '[What problem did the client have?]',
    solution: '[What did you design and build?]',
    result: '[What changed for the client after launch?]',
    stack: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
  },
  {
    slug: 'project-02',
    title: '[Project 02 name]',
    summary: '[One-line outcome for this project.]',
    categories: ['[Category]', '[Discipline]'],
  },
  {
    slug: 'project-03',
    title: '[Project 03 name]',
    summary: '[One-line outcome for this project.]',
    categories: ['[Category]', '[Discipline]'],
  },
];

export const stages: Stage[] = [
  { name: 'Discover', description: 'We understand your business, users and goals.', status: 'mapping goals, users and constraints…' },
  { name: 'Plan', description: 'We define the product and the technology behind it.', status: 'scoping features and choosing the stack…' },
  { name: 'Build', description: 'Design and development in focused, visible sprints.', status: 'designing, building and reviewing weekly…' },
  { name: 'Launch', description: 'Deploy, monitor and measure what matters.', status: 'shipping to production and monitoring…' },
  { name: 'Grow', description: 'Continuous improvements as your business scales.', status: 'iterating on real usage data…' },
];

export const reasons = [
  { title: 'Strategy First', description: 'We start with your business goals, not the code.' },
  { title: 'Built for Scale', description: 'Architecture that grows with your users.' },
  { title: 'Clean Engineering', description: 'Typed, tested code any team can pick up.' },
  { title: 'Long-term Support', description: 'We stay after launch to maintain and improve.' },
];

/** Leave empty until you have real client quotes — the section hides itself. */
export const testimonials: Testimonial[] = [];

export const budgetOptions = ['Not sure yet', 'Under ₹1 lakh', '₹1–5 lakh', '₹5–15 lakh', '₹15 lakh+'];
export const timelineOptions = ['As soon as possible', 'Within 1 month', '1–3 months', 'Just exploring'];

export const navLinks = [
  { label: 'Services', to: '/services' },
  { label: 'Work', to: '/work' },
  { label: 'About', to: '/about' },
  { label: 'SaaS', to: '/saas', badge: 'Labs' },
  { label: 'Contact', to: '/contact' },
];
