import { testimonials } from '@/data/site';
import { Container } from '@/components/ui/Container';

/** Renders nothing until real testimonials are added in data/site.ts. */
export function Testimonials() {
  if (testimonials.length === 0) return null;
  return (
    <section className="border-t border-line py-16 lg:py-24">
      <Container className="flex flex-col items-center gap-16 text-center">
        <p className="font-mono text-xs tracking-[0.16em] text-accent-fg">TESTIMONIALS</p>
        {testimonials.map((t) => (
          <figure key={t.name} className="flex max-w-4xl flex-col items-center gap-6">
            <blockquote className="font-display text-2xl leading-snug font-medium lg:text-[40px]">“{t.quote}”</blockquote>
            <figcaption className="text-muted">— {t.name}, {t.company}</figcaption>
          </figure>
        ))}
      </Container>
    </section>
  );
}
