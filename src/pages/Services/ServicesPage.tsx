import { Check } from 'lucide-react';
import { services } from '@/data/site';
import { usePageMeta } from '@/hooks/usePageMeta';
import { PageHeader } from '@/components/common/PageHeader';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { ServiceIcon } from '@/sections/Services/ServiceIcon';
import { CTA } from '@/sections/CTA/CTA';

export default function ServicesPage() {
  usePageMeta('Services', 'Web development, e-commerce, custom software, SaaS development and AI automation by ZORVENN.');
  return (
    <>
      <PageHeader eyebrow="Services" title="Everything you need to build digital." intro="Five ways we help businesses design, build and grow digital products." />
      <Container className="divide-y divide-line py-8 lg:py-12">
        {services.map((s, i) => (
          <section key={s.slug} id={s.slug} className="grid scroll-mt-28 gap-6 py-12 lg:grid-cols-[120px_1fr_1fr] lg:gap-12 lg:py-16">
            <div className="flex items-center gap-4 lg:flex-col lg:items-start">
              <span className="font-mono text-sm text-accent-fg">0{i + 1}</span>
              <span className="flex size-12 items-center justify-center rounded-full border border-line text-accent-fg"><ServiceIcon name={s.icon} className="size-5" /></span>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="font-display text-4xl font-bold tracking-tight lg:text-5xl">{s.title}</h2>
              <p className="text-lg leading-relaxed text-muted">{s.summary}</p>
              <p className="font-mono text-[13px] text-muted">{s.tags.join(' · ')}</p>
            </div>
            <div className="flex flex-col gap-5">
              <ul className="flex flex-col gap-3">
                {s.deliverables.map((d) => (
                  <li key={d} className="flex items-center gap-3 text-[17px]"><Check className="size-4 text-accent-fg" strokeWidth={2.4} />{d}</li>
                ))}
              </ul>
              <Button to={`/contact?service=${encodeURIComponent(s.title)}`} variant="secondary" arrow className="self-start">Discuss {s.title}</Button>
            </div>
          </section>
        ))}
      </Container>
      <CTA />
    </>
  );
}
