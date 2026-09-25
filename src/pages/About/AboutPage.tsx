import { usePageMeta } from '@/hooks/usePageMeta';
import { PageHeader } from '@/components/common/PageHeader';
import { WhyZorvenn } from '@/sections/WhyZorvenn/WhyZorvenn';
import { Technologies } from '@/sections/Technologies/Technologies';
import { CTA } from '@/sections/CTA/CTA';

export default function AboutPage() {
  usePageMeta('About', 'ZORVENN is a software and digital product studio that builds for clients and builds its own SaaS products.');
  return (
    <>
      <PageHeader eyebrow="About" title={<>A studio that builds what's next.</>}
        intro="We're a software and digital product studio. We partner with businesses to build their products — and we build SaaS products of our own under ZORVENN Labs." />
      <WhyZorvenn />
      <Technologies />
      <CTA />
    </>
  );
}
