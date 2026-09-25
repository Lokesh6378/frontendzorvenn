import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { coreStack, site } from '@/data/site';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Pipeline } from './Pipeline';

export function Hero() {
  const reduce = useReducedMotion();
  // One orchestrated load sequence for the hero only.
  const rise = (delay: number) =>
    reduce ? {} : { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] } };

  return (
    <section className="relative overflow-hidden bg-grid [background-position:center_top]">
      <div className="glow absolute top-48 left-1/2 h-[760px] w-[1200px] -translate-x-1/2" />
      <Container className="relative flex flex-col items-center gap-7 pt-16 pb-14 text-center lg:gap-9 lg:pt-26 lg:pb-22">
        <motion.p {...rise(0)} className="flex items-center gap-2.5 rounded-full border border-line bg-card py-1.5 pr-1.5 pl-4 text-xs text-muted sm:text-sm">
          <span className="size-2 rounded-full bg-accent" />
          {site.tagline}
          <span className="rounded-full bg-accent-soft px-2.5 py-1 font-mono text-[10px] tracking-widest text-accent-fg sm:text-[11px]">AGENCY + LABS</span>
        </motion.p>

        <motion.h1 {...rise(0.08)} className="font-display text-[clamp(56px,10vw,136px)] leading-[0.92] font-extrabold tracking-[-0.04em] uppercase">
          We build<br /><span className="text-accent-fg">what's next.</span>
        </motion.h1>

        <motion.p {...rise(0.16)} className="max-w-[680px] text-[17px] leading-relaxed text-muted md:text-[21px]">
          We design and build high-performance websites, web apps and SaaS for ambitious businesses — and we're building SaaS products of our own.
        </motion.p>

        <motion.div {...rise(0.24)} className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Button to="/contact" size="lg" arrow>Start a Project</Button>
          <Button to="/work" size="lg" variant="secondary">Our Work</Button>
        </motion.div>

        <motion.div {...rise(0.32)} className="flex flex-wrap items-center justify-center gap-2.5">
          <span className="mr-1.5 hidden font-mono text-xs tracking-[0.12em] text-muted sm:inline">BUILT WITH</span>
          {coreStack.map((t) => (
            <span key={t.name} className="flex h-[34px] items-center gap-2 rounded-full border border-line bg-card px-3.5 text-sm font-medium">
              <span className="size-1.5 rounded-full bg-accent" />{t.name}
            </span>
          ))}
        </motion.div>

        <motion.div {...rise(0.44)} className="mt-2 flex w-full flex-col items-center gap-6">
          <a href="#stack" className="hidden items-center gap-2 font-mono text-xs tracking-[0.08em] text-muted hover:text-fg lg:flex">
            <ArrowDown className="size-3.5" /> SCROLL TO EXPLORE
          </a>
          <Pipeline />
        </motion.div>
      </Container>
    </section>
  );
}
