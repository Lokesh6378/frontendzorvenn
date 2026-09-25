import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { api, ApiError } from '@/lib/api';
import { formatDate, statusLabel } from '@/lib/format';
import type { Lead, LeadStatus } from '@/types';
import { Button } from '@/components/ui/Button';

const statuses = Object.keys(statusLabel) as LeadStatus[];

interface Props {
  lead: Lead;
  onClose: () => void;
  onSaved: (lead: Lead) => void;
  onDeleted: (id: string) => void;
}

export function LeadPanel({ lead, onClose, onSaved, onDeleted }: Props) {
  const [status, setStatus] = useState<LeadStatus>(lead.status);
  const [notes, setNotes] = useState(lead.notes ?? '');
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => { setStatus(lead.status); setNotes(lead.notes ?? ''); setMessage(''); }, [lead]);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  async function save() {
    setSaving(true);
    setMessage('');
    try {
      const updated = await api<Lead>(`/api/admin/leads/${lead._id}`, { method: 'PATCH', body: { status, notes } });
      onSaved(updated);
      setMessage('Changes saved.');
    } catch (e) {
      setMessage(e instanceof ApiError ? e.message : 'Could not save changes.');
    } finally {
      setSaving(false);
    }
  }

  async function remove() {
    if (!window.confirm(`Delete the lead from ${lead.name}? This can't be undone.`)) return;
    try {
      await api(`/api/admin/leads/${lead._id}`, { method: 'DELETE' });
      onDeleted(lead._id);
    } catch (e) {
      setMessage(e instanceof ApiError ? e.message : 'Could not delete lead.');
    }
  }

  const details: [string, string | undefined][] = [
    ['Email', lead.email], ['Phone', lead.phone], ['Company', lead.company], ['Service', lead.service],
    ['Budget', lead.budget], ['Timeline', lead.timeline], ['Received', formatDate(lead.createdAt, true)],
  ];

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <button type="button" aria-label="Close lead details" onClick={onClose} className="absolute inset-0 bg-black/50" />
      <aside role="dialog" aria-modal="true" aria-labelledby="lead-title" className="relative flex h-full w-full max-w-lg flex-col overflow-y-auto border-l border-line bg-bg">
        <div className="flex items-start justify-between gap-4 border-b border-line p-6">
          <div>
            <p className="text-sm text-muted">{lead.type === 'project' ? 'Project inquiry' : 'Contact message'}</p>
            <h2 id="lead-title" className="font-display text-2xl font-bold">{lead.name}</h2>
          </div>
          <button type="button" onClick={onClose} aria-label="Close" className="flex size-10 items-center justify-center rounded-full border border-line"><X className="size-4" /></button>
        </div>

        <div className="flex flex-col gap-6 p-6">
          <dl className="grid grid-cols-[110px_1fr] gap-x-4 gap-y-2.5 text-sm">
            {details.filter(([, v]) => v).map(([k, v]) => (
              <div key={k} className="contents">
                <dt className="text-muted">{k}</dt>
                <dd className="break-words">{k === 'Email' ? <a href={`mailto:${v}`} className="text-accent-fg">{v}</a> : v}</dd>
              </div>
            ))}
          </dl>

          <div className="flex flex-col gap-2">
            <h3 className="text-sm text-muted">Message</h3>
            <p className="rounded-2xl border border-line bg-card p-4 leading-relaxed whitespace-pre-wrap">{lead.message}</p>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="lead-status" className="text-sm font-medium">Status</label>
            <select id="lead-status" value={status} onChange={(e) => setStatus(e.target.value as LeadStatus)}
              className="h-12 rounded-2xl border border-line bg-card px-4 focus:border-accent focus:outline-none">
              {statuses.map((s) => <option key={s} value={s}>{statusLabel[s]}</option>)}
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="lead-notes" className="text-sm font-medium">Internal notes</label>
            <textarea id="lead-notes" value={notes} onChange={(e) => setNotes(e.target.value)} rows={5} placeholder="Call summary, next steps, quote sent…"
              className="rounded-2xl border border-line bg-card p-4 leading-relaxed focus:border-accent focus:outline-none" />
          </div>

          {message && <p role="status" className="text-sm text-muted">{message}</p>}

          <div className="flex items-center justify-between gap-3">
            <Button type="button" onClick={save} disabled={saving}>{saving ? 'Saving…' : 'Save changes'}</Button>
            <button type="button" onClick={remove} className="text-sm text-red-500 hover:underline">Delete lead</button>
          </div>
        </div>
      </aside>
    </div>
  );
}
