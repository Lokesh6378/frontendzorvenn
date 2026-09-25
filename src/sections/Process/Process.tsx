import { stages } from '@/data/site';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function Process() {
  return (
    <section id="process" className="border-t border-line py-16 lg:py-26">
      <Container className="flex flex-col gap-10 lg:gap-16">
        <SectionHeading eyebrow="03 — Our process" title="From idea to impact." />
        <ol className="ml-1 grid border-l border-line lg:ml-0 lg:grid-cols-5 lg:border-t lg:border-l-0">
          {stages.map((s, i) => (
            <li key={s.name} className="relative flex flex-col gap-2 pb-8 pl-7 lg:gap-3.5 lg:pt-9 lg:pr-7 lg:pb-0 lg:pl-0">
              <span aria-hidden className="absolute top-1 -left-[5px] size-[9px] rounded-full bg-accent lg:-top-[5px] lg:left-0" />
              <span className="font-mono text-sm text-muted">0{i + 1}</span>
              <span className="font-display text-[22px] font-bold tracking-[0.02em] uppercase lg:text-[28px]">{s.name}</span>
              <span className="leading-relaxed text-muted">{s.description}</span>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
