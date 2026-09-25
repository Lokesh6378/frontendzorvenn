import { usePageMeta } from '@/hooks/usePageMeta';
import { PageHeader } from '@/components/common/PageHeader';
import { Labs } from '@/sections/Labs/Labs';
import { CTA } from '@/sections/CTA/CTA';

export default function SaaSPage() {
  usePageMeta('ZORVENN Labs', 'ZORVENN Labs builds SaaS products of our own. Our first product is coming soon.');
  return (
    <>
      <PageHeader eyebrow="ZORVENN Labs" title="Building products of our own." intro="Labs is where we turn what we learn from client work into our own SaaS products." />
      <Labs />
      <CTA />
    </>
  );
}
