import { usePageMeta } from '@/hooks/usePageMeta';
import { PageHeader } from '@/components/common/PageHeader';
import { Process } from '@/sections/Process/Process';
import { CTA } from '@/sections/CTA/CTA';

export default function ProcessPage() {
  usePageMeta('Process', 'How ZORVENN works: discover, plan, build, launch and grow.');
  return (
    <>
      <PageHeader eyebrow="Process" title="From idea to impact." intro="Five clear stages, with working software you can see at every step." />
      <Process />
      <CTA />
    </>
  );
}
