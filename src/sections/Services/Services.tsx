import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { services } from '@/data/site';
import { cn } from '@/lib/format';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ServiceIcon } from './ServiceIcon';

export function Services() {
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="py-16 lg:py-28">
      <Container className="flex flex-col gap-10 lg:gap-14">
        <SectionHeading eyebrow="01 — Services" title="Everything you need to build digital." aside="Select a service to see what's included." />

        <div className="grid items-start gap-3 md:grid-cols-2 lg:grid-cols-6 lg:gap-[18px]">
          {services.map((s, i) => {
            const open = i === active;
            return (
              <button key={s.slug} type="button" onClick={() => setActive(open ? -1 : i)} aria-expanded={open}
                className={cn('flex flex-col gap-4 rounded-[20px] border p-6 text-left transition-colors lg:min-h-[260px] lg:p-[30px]',
                  i < 3 ? 'lg:col-span-2' : 'lg:col-span-3',
                  open ? 'border-accent bg-accent-soft' : 'border-line bg-card hover:border-muted')}>
                <div className="flex w-full items-center justify-between">
                  <span className={cn('font-mono text-sm', open ? 'text-accent-fg' : 'text-muted')}>0{i + 1}</span>
                  <span className={cn('flex size-10 items-center justify-center rounded-full border border-line', open ? 'text-accent-fg' : 'text-muted')}>
                    <ServiceIcon name={s.icon} className="size-4" />
                  </span>
                </div>
                <h3 className="font-display text-2xl font-bold tracking-tight lg:mt-6 lg:text-[32px]">{s.title}</h3>
                <p className="text-base leading-relaxed text-muted">{s.summary}</p>
                <p className="font-mono text-[13px] text-muted">{s.tags.join(' · ')}</p>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.ul initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }} className="flex w-full flex-col gap-2.5 overflow-hidden">
                      <li aria-hidden className="mb-1.5 border-t border-line" />
                      {s.deliverables.map((d) => (
                        <li key={d} className="flex items-center gap-3 text-[15px]">
                          <Check className="size-4 shrink-0 text-accent-fg" strokeWidth={2.4} />{d}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </button>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
