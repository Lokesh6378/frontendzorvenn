import type { LeadStatus } from '@/types';

export const statusLabel: Record<LeadStatus, string> = {
  new: 'New',
  contacted: 'Contacted',
  in_progress: 'In progress',
  won: 'Won',
  lost: 'Lost',
};

export function formatDate(iso: string, withTime = false) {
  return new Date(iso).toLocaleString(undefined, {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    ...(withTime ? { hour: '2-digit', minute: '2-digit' } : {}),
  });
}

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}
