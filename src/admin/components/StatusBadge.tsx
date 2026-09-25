import type { LeadStatus } from '@/types';
import { statusLabel, cn } from '@/lib/format';

const styles: Record<LeadStatus, string> = {
  new: 'border-accent text-accent-fg bg-accent-soft',
  contacted: 'border-line text-fg',
  in_progress: 'border-amber-500/50 text-amber-600 dark:text-amber-400',
  won: 'border-emerald-500/50 text-emerald-700 dark:text-emerald-400',
  lost: 'border-line text-muted',
};

export function StatusBadge({ status }: { status: LeadStatus }) {
  return (
    <span className={cn('inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium whitespace-nowrap', styles[status])}>
      {statusLabel[status]}
    </span>
  );
}
