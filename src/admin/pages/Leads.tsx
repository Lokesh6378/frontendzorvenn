import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search } from 'lucide-react';
import { api, ApiError } from '@/lib/api';
import { formatDate, statusLabel } from '@/lib/format';
import { useDebounce } from '@/hooks/useDebounce';
import type { Lead, LeadStatus, Paginated } from '@/types';
import { PageTitle } from '../components/PageTitle';
import { StatusBadge } from '../components/StatusBadge';
import { Pagination } from '../components/Pagination';
import { LeadPanel } from './LeadPanel';

const filterClass = 'h-11 rounded-full border border-line bg-card px-4 text-sm focus:border-accent focus:outline-none';

export default function Leads() {
  const [params, setParams] = useSearchParams();
  const status = params.get('status') ?? '';
  const type = params.get('type') ?? '';
  const page = Number(params.get('page') ?? 1);
  const openId = params.get('open');

  const [q, setQ] = useState(params.get('q') ?? '');
  const query = useDebounce(q);
  const [data, setData] = useState<Paginated<Lead> | null>(null);
  const [selected, setSelected] = useState<Lead | null>(null);
  const [error, setError] = useState('');

  const update = useCallback((changes: Record<string, string | null>) => {
    setParams((prev) => {
      const next = new URLSearchParams(prev);
      Object.entries(changes).forEach(([k, v]) => (v ? next.set(k, v) : next.delete(k)));
      return next;
    }, { replace: true });
  }, [setParams]);

  useEffect(() => { if (query !== (params.get('q') ?? '')) update({ q: query || null, page: null }); }, [query]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const search = new URLSearchParams({ page: String(page), limit: '20' });
    if (status) search.set('status', status);
    if (type) search.set('type', type);
    if (query) search.set('q', query);
    setError('');
    api<Paginated<Lead>>(`/api/admin/leads?${search}`)
      .then(setData)
      .catch((e) => setError(e instanceof ApiError ? e.message : 'Could not load leads.'));
  }, [status, type, page, query]);

  useEffect(() => {
    if (!openId) { setSelected(null); return; }
    const found = data?.items.find((l) => l._id === openId);
    if (found) setSelected(found);
    else api<Lead>(`/api/admin/leads/${openId}`).then(setSelected).catch(() => update({ open: null }));
  }, [openId, data]); // eslint-disable-line react-hooks/exhaustive-deps

  const onSaved = (lead: Lead) => {
    setSelected(lead);
    setData((d) => d && { ...d, items: d.items.map((l) => (l._id === lead._id ? lead : l)) });
  };
  const onDeleted = (id: string) => {
    update({ open: null });
    setData((d) => d && { ...d, total: d.total - 1, items: d.items.filter((l) => l._id !== id) });
  };

  return (
    <>
      <PageTitle title="Leads" />

      <div className="mb-5 flex flex-col gap-3 sm:flex-row">
        <label className="relative flex-1">
          <span className="sr-only">Search leads</span>
          <Search className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-muted" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search name, email or company" className={`${filterClass} w-full pl-10`} />
        </label>
        <label className="sr-only" htmlFor="filter-status">Status</label>
        <select id="filter-status" value={status} onChange={(e) => update({ status: e.target.value || null, page: null })} className={filterClass}>
          <option value="">All statuses</option>
          {(Object.keys(statusLabel) as LeadStatus[]).map((s) => <option key={s} value={s}>{statusLabel[s]}</option>)}
        </select>
        <label className="sr-only" htmlFor="filter-type">Type</label>
        <select id="filter-type" value={type} onChange={(e) => update({ type: e.target.value || null, page: null })} className={filterClass}>
          <option value="">All types</option>
          <option value="project">Project inquiries</option>
          <option value="contact">Contact messages</option>
        </select>
      </div>

      {error && <p className="mb-4 text-red-500">{error}</p>}

      <div className="overflow-x-auto rounded-2xl border border-line bg-card">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead className="border-b border-line text-muted">
            <tr>
              <th className="p-4 font-medium">Name</th>
              <th className="p-4 font-medium">Service</th>
              <th className="p-4 font-medium">Budget</th>
              <th className="p-4 font-medium">Received</th>
              <th className="p-4 font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {!data && !error && <tr><td colSpan={5} className="p-6 text-muted">Loading…</td></tr>}
            {data?.items.length === 0 && (
              <tr><td colSpan={5} className="p-6 text-muted">{status || type || query ? 'No leads match these filters.' : 'No leads yet. Submissions from the contact form will appear here.'}</td></tr>
            )}
            {data?.items.map((l) => (
              <tr key={l._id} className="cursor-pointer hover:bg-accent-soft" onClick={() => update({ open: l._id })}>
                <td className="p-4">
                  <button type="button" onClick={(e) => { e.stopPropagation(); update({ open: l._id }); }} className="text-left">
                    <span className="block font-medium">{l.name}</span>
                    <span className="block text-muted">{l.email}</span>
                  </button>
                </td>
                <td className="p-4">{l.service || <span className="text-muted">{l.type === 'project' ? '—' : 'Contact'}</span>}</td>
                <td className="p-4">{l.budget || <span className="text-muted">—</span>}</td>
                <td className="p-4 whitespace-nowrap text-muted">{formatDate(l.createdAt)}</td>
                <td className="p-4"><StatusBadge status={l.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {data && data.total > 0 && (
        <div className="mt-5"><Pagination page={data.page} pages={data.pages} total={data.total} onChange={(p) => update({ page: String(p) })} /></div>
      )}

      {selected && <LeadPanel lead={selected} onClose={() => update({ open: null })} onSaved={onSaved} onDeleted={onDeleted} />}
    </>
  );
}
