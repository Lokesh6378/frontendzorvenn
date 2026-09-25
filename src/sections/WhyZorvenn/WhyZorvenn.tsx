import { reasons } from '@/data/site';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function WhyZorvenn() {
  return (
    <section id="about" className="border-t border-line py-16 lg:py-26">
      <Container className="flex flex-col gap-10 lg:gap-16">
        <SectionHeading eyebrow="04 — Why ZORVENN"
          title={<>Not just developers. <span className="text-muted">Digital product partners.</span></>} />
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-[18px]">
          {reasons.map((r, i) => (
            <li key={r.title} className="flex gap-4 rounded-[20px] border border-line bg-card p-6 lg:min-h-[260px] lg:flex-col lg:justify-between lg:p-[30px]">
              <span className="font-display text-3xl leading-none font-extrabold text-line lg:text-6xl">0{i + 1}</span>
              <div className="flex flex-col gap-2">
                <h3 className="font-display text-xl font-bold lg:text-[25px]">{r.title}</h3>
                <p className="leading-relaxed text-muted">{r.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
