import { useEffect, useState } from 'react';
import { Download, Search, Trash2 } from 'lucide-react';
import { api, ApiError } from '@/lib/api';
import { formatDate } from '@/lib/format';
import { useDebounce } from '@/hooks/useDebounce';
import type { Paginated, Subscriber } from '@/types';
import { PageTitle } from '../components/PageTitle';
import { Pagination } from '../components/Pagination';

export default function Subscribers() {
  const [page, setPage] = useState(1);
  const [q, setQ] = useState('');
  const query = useDebounce(q);
  const [data, setData] = useState<Paginated<Subscriber> | null>(null);
  const [error, setError] = useState('');

  useEffect(() => setPage(1), [query]);
  useEffect(() => {
    const search = new URLSearchParams({ page: String(page), limit: '50' });
    if (query) search.set('q', query);
    api<Paginated<Subscriber>>(`/api/admin/subscribers?${search}`)
      .then(setData)
      .catch((e) => setError(e instanceof ApiError ? e.message : 'Could not load subscribers.'));
  }, [page, query]);

  async function remove(s: Subscriber) {
    if (!window.confirm(`Remove ${s.email} from the list?`)) return;
    try {
      await api(`/api/admin/subscribers/${s._id}`, { method: 'DELETE' });
      setData((d) => d && { ...d, total: d.total - 1, items: d.items.filter((x) => x._id !== s._id) });
    } catch (e) {
      setError(e instanceof ApiError ? e.message : 'Could not remove subscriber.');
    }
  }

  async function exportCsv() {
    const all = await api<Paginated<Subscriber>>('/api/admin/subscribers?limit=100&page=1');
    let items = all.items;
    for (let p = 2; p <= all.pages; p++) {
      items = items.concat((await api<Paginated<Subscriber>>(`/api/admin/subscribers?limit=100&page=${p}`)).items);
    }
    const csv = ['email,source,subscribed_at', ...items.map((s) => `${s.email},${s.source},${s.createdAt}`)].join('\n');
    const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv' }));
    const a = Object.assign(document.createElement('a'), { href: url, download: 'zorvenn-subscribers.csv' });
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <>
      <PageTitle title="Subscribers">
        <button type="button" onClick={exportCsv} disabled={!data?.total}
          className="inline-flex h-11 items-center gap-2 rounded-full border border-line px-5 text-sm font-semibold disabled:opacity-40">
          <Download className="size-4" /> Export CSV
        </button>
      </PageTitle>

      <label className="relative mb-5 block">
        <span className="sr-only">Search subscribers</span>
        <Search className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-muted" />
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search email"
          className="h-11 w-full rounded-full border border-line bg-card pr-4 pl-10 text-sm focus:border-accent focus:outline-none" />
      </label>

      {error && <p className="mb-4 text-red-500">{error}</p>}

      <div className="overflow-x-auto rounded-2xl border border-line bg-card">
        <table className="w-full min-w-[520px] text-left text-sm">
          <thead className="border-b border-line text-muted">
            <tr><th className="p-4 font-medium">Email</th><th className="p-4 font-medium">Source</th><th className="p-4 font-medium">Subscribed</th><th className="p-4"><span className="sr-only">Actions</span></th></tr>
          </thead>
          <tbody className="divide-y divide-line">
            {!data && !error && <tr><td colSpan={4} className="p-6 text-muted">Loading…</td></tr>}
            {data?.items.length === 0 && <tr><td colSpan={4} className="p-6 text-muted">{query ? 'No subscribers match that search.' : 'No subscribers yet. Sign-ups from the Labs section will appear here.'}</td></tr>}
            {data?.items.map((s) => (
              <tr key={s._id}>
                <td className="p-4 font-medium">{s.email}</td>
                <td className="p-4 text-muted">{s.source}</td>
                <td className="p-4 text-muted">{formatDate(s.createdAt)}</td>
                <td className="p-4 text-right">
                  <button type="button" onClick={() => remove(s)} aria-label={`Remove ${s.email}`} className="rounded-full p-2 text-muted hover:text-red-500"><Trash2 className="size-4" /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {data && data.total > 0 && <div className="mt-5"><Pagination page={data.page} pages={data.pages} total={data.total} onChange={setPage} /></div>}
    </>
  );
}
