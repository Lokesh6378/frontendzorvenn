import { usePageMeta } from '@/hooks/usePageMeta';
import { Hero } from '@/sections/Hero/Hero';
import { Technologies } from '@/sections/Technologies/Technologies';
import { Services } from '@/sections/Services/Services';
import { Projects } from '@/sections/Projects/Projects';
import { Process } from '@/sections/Process/Process';
import { WhyZorvenn } from '@/sections/WhyZorvenn/WhyZorvenn';
import { Labs } from '@/sections/Labs/Labs';
import { Testimonials } from '@/sections/Testimonials/Testimonials';
import { CTA } from '@/sections/CTA/CTA';

export default function Home() {
  usePageMeta('ZORVENN', 'ZORVENN designs and builds high-performance websites, web apps and SaaS for ambitious businesses.');
  return (
    <>
      <Hero />
      <Technologies />
      <Services />
      <Projects limit={3} />
      <Process />
      <WhyZorvenn />
      <Labs />
      <Testimonials />
      <CTA />
    </>
  );
}
