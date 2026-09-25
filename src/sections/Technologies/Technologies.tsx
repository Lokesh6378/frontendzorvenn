import { coreStack } from '@/data/site';
import { Container } from '@/components/ui/Container';

export function Technologies() {
  return (
    <section id="stack" aria-label="Our core stack" className="border-y border-line">
      <Container className="flex flex-col gap-6 py-10 lg:flex-row lg:items-center lg:gap-14 lg:py-14">
        <p className="shrink-0 font-mono text-xs tracking-[0.14em] text-muted lg:w-[200px]">OUR CORE STACK</p>
        <ul className="grid flex-1 grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4">
          {coreStack.map((t) => (
            <li key={t.name} className="flex flex-col gap-1 rounded-[14px] border border-line px-5 py-4">
              <span className="font-display text-lg font-bold lg:text-[22px]">{t.name}</span>
              <span className="text-[13px] text-muted">{t.role}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
