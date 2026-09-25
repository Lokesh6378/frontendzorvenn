import { Link } from 'react-router-dom';
import { site } from '@/data/site';
import { Container } from '@/components/ui/Container';

const columns = [
  { title: 'Company', links: [['About', '/about'], ['Work', '/work'], ['Process', '/process'], ['Careers', '/contact']] },
  { title: 'Services', links: [['Web Development', '/services#web-development'], ['E-commerce', '/services#e-commerce'], ['SaaS', '/services#saas-development'], ['Custom Software', '/services#custom-software'], ['AI & Automation', '/services#ai-automation']] },
] as const;

const social = [['LinkedIn', site.social.linkedin], ['Instagram', site.social.instagram], ['GitHub', site.social.github], ['X', site.social.x]] as const;

export function Footer() {
  return (
    <footer className="border-t border-line">
      <Container className="flex flex-col gap-14 pt-14 pb-8 lg:pt-18">
        <div className="flex flex-col justify-between gap-12 lg:flex-row">
          <div className="flex flex-col gap-3">
            <span className="font-display text-3xl font-extrabold tracking-[0.1em]">{site.name}</span>
            <span className="text-muted">{site.tagline}</span>
            <a href={`mailto:${site.email}`} className="mt-3 text-lg font-semibold hover:text-accent-fg">{site.email}</a>
          </div>
          <div className="grid grid-cols-2 gap-10 text-[15px] sm:grid-cols-3 lg:gap-24">
            {columns.map((col) => (
              <div key={col.title} className="flex flex-col gap-3">
                <span className="font-mono text-xs tracking-[0.14em] text-muted uppercase">{col.title}</span>
                {col.links.map(([label, to]) => <Link key={label} to={to} className="hover:text-accent-fg">{label}</Link>)}
              </div>
            ))}
            <div className="flex flex-col gap-3">
              <span className="font-mono text-xs tracking-[0.14em] text-muted uppercase">Connect</span>
              {social.map(([label, href]) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" className="hover:text-accent-fg">{label}</a>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-2 border-t border-line pt-6 text-sm text-muted sm:flex-row">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <span>Built with React, TypeScript, Tailwind, Node.js &amp; MongoDB</span>
        </div>
      </Container>
    </footer>
  );
}
