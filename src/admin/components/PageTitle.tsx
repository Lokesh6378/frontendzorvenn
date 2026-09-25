import type { ReactNode } from 'react';
import { usePageMeta } from '@/hooks/usePageMeta';

export function PageTitle({ title, children }: { title: string; children?: ReactNode }) {
  usePageMeta(`${title} · Admin`);
  return (
    <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
      <h1 className="font-display text-4xl font-bold tracking-tight">{title}</h1>
      {children}
    </div>
  );
}
