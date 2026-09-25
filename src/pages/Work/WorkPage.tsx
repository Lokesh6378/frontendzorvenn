import { usePageMeta } from '@/hooks/usePageMeta';
import { PageHeader } from '@/components/common/PageHeader';
import { Projects } from '@/sections/Projects/Projects';
import { CTA } from '@/sections/CTA/CTA';

export default function WorkPage() {
  usePageMeta('Work', 'Selected projects and case studies from ZORVENN.');
  return (
    <>
      <PageHeader eyebrow="Work" title="Selected projects." intro="Products we've designed, built and shipped for our clients." />
      <Projects showHeading={false} />
      <CTA />
    </>
  );
}
