import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { NewsletterForm } from '@/components/common/NewsletterForm';

export function Labs() {
  return (
    <section id="labs" className="relative overflow-hidden border-t border-line py-16 lg:py-26">
      <div className="glow absolute top-32 -right-52 h-[700px] w-[900px]" />
      <Container className="relative flex flex-col gap-10 lg:gap-14">
        <SectionHeading eyebrow="05 — ZORVENN Labs"
          title={<>We build for clients. <span className="text-accent-fg">And for ourselves.</span></>}
          aside="We don't just build for businesses. We build businesses of our own." />

        <div className="grid gap-4 md:grid-cols-2 lg:gap-[18px]">
          <div className="flex flex-col gap-4 rounded-3xl border border-line bg-card p-7 lg:min-h-[340px] lg:p-9">
            <span className="self-start rounded-full border border-line px-3 py-1.5 font-mono text-[11px] tracking-[0.14em] text-muted">ZORVENN STUDIO</span>
            <h3 className="font-display text-[28px] font-bold tracking-tight lg:text-[38px]">Your product, built right.</h3>
            <p className="text-[17px] leading-relaxed text-muted">Websites, e-commerce, custom software and SaaS — designed and engineered by our team for your business.</p>
            <Button to="/contact" variant="inverse" arrow className="mt-auto self-start">Start a Project</Button>
          </div>

          <div className="flex flex-col gap-4 rounded-3xl border border-accent bg-accent-soft p-7 lg:min-h-[340px] lg:p-9">
            <div className="flex items-center justify-between">
              <span className="rounded-full border border-accent px-3 py-1.5 font-mono text-[11px] tracking-[0.14em] text-accent-fg">LABS · PRODUCT 01</span>
              <span className="font-mono text-xs text-muted">Coming soon</span>
            </div>
            <h3 className="font-display text-[28px] font-bold tracking-tight lg:text-[38px]">Our first SaaS is in the works.</h3>
            <p className="text-[17px] leading-relaxed text-muted">Be the first to know when it launches.</p>
            <div className="mt-auto"><NewsletterForm source="labs" /></div>
          </div>
        </div>
      </Container>
    </section>
  );
}
