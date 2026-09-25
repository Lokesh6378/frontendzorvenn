import type { ReactNode } from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function PageHeader({ eyebrow, title, intro }: { eyebrow: string; title: ReactNode; intro?: string }) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-grid">
      <div className="glow absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2" />
      <Container className="relative py-20 lg:py-28">
        <SectionHeading as="h1" eyebrow={eyebrow} title={title} aside={intro} />
      </Container>
    </section>
  );
}
