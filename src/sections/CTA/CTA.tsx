import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';

export function CTA() {
  return (
    <section className="relative overflow-hidden border-t border-line bg-grid">
      <div className="glow absolute top-1/2 left-1/2 h-[600px] w-[1000px] -translate-x-1/2 -translate-y-1/2" />
      <Container className="relative flex flex-col items-center gap-6 py-20 text-center lg:py-32">
        <h2 className="font-display text-[clamp(48px,8vw,112px)] leading-[0.94] font-extrabold tracking-[-0.04em]">
          Have an idea?<br /><span className="text-accent-fg">Let's build it.</span>
        </h2>
        <p className="text-lg text-muted lg:text-xl">Tell us what you're building.</p>
        <Button to="/contact" size="lg" arrow className="w-full sm:w-auto">Start a Project</Button>
      </Container>
    </section>
  );
}
