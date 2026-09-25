import type { ReactNode } from 'react';
import { cn } from '@/lib/format';

interface Props {
  eyebrow: string;
  title: ReactNode;
  aside?: ReactNode;
  center?: boolean;
  as?: 'h1' | 'h2';
}

export function SectionHeading({ eyebrow, title, aside, center, as: Tag = 'h2' }: Props) {
  return (
    <div className={cn('flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between', center && 'items-center text-center lg:flex-col lg:items-center')}>
      <div className={cn('flex flex-col gap-4', center && 'items-center')}>
        <p className="font-mono text-xs tracking-[0.16em] text-accent-fg uppercase">{eyebrow}</p>
        <Tag className="max-w-3xl font-display text-[40px] leading-[1.02] font-bold tracking-tight md:text-[56px] lg:text-[68px] lg:leading-none">
          {title}
        </Tag>
      </div>
      {aside && <div className="max-w-sm text-[17px] leading-relaxed text-muted">{aside}</div>}
    </div>
  );
}
