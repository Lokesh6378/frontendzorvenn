import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api, ApiError } from '@/lib/api';
import { formatDate, statusLabel } from '@/lib/format';
import type { LeadStatus, Stats } from '@/types';
import { PageTitle } from '../components/PageTitle';
import { StatusBadge } from '../components/StatusBadge';

export default function Dashboard() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    api<Stats>('/api/admin/stats').then(setStats).catch((e) => setError(e instanceof ApiError ? e.message : 'Could not load stats.'));
  }, []);

  if (error) return <><PageTitle title="Dashboard" /><p className="text-red-500">{error}</p></>;
  if (!stats) return <><PageTitle title="Dashboard" /><p className="text-muted">Loading…</p></>;

  const cards = [
    { label: 'New leads', value: stats.newLeads, to: '/admin/leads?status=new' },
    { label: 'Leads (30 days)', value: stats.last30Days, to: '/admin/leads' },
    { label: 'All leads', value: stats.totalLeads, to: '/admin/leads' },
    { label: 'Subscribers', value: stats.subscribers, to: '/admin/subscribers' },
  ];

  return (
    <>
      <PageTitle title="Dashboard" />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map((c) => (
          <Link key={c.label} to={c.to} className="flex flex-col gap-2 rounded-2xl border border-line bg-card p-6 transition hover:border-muted">
            <span className="text-sm text-muted">{c.label}</span>
            <span className="font-display text-4xl font-bold">{c.value}</span>
          </Link>
        ))}
      </div>

      <div className="mt-8 grid gap-6 xl:grid-cols-[1fr_320px]">
        <section className="rounded-2xl border border-line bg-card">
          <div className="flex items-center justify-between border-b border-line p-5">
            <h2 className="font-semibold">Latest leads</h2>
            <Link to="/admin/leads" className="text-sm text-accent-fg">View all</Link>
          </div>
          {stats.recent.length === 0 ? (
            <p className="p-5 text-muted">No leads yet. They'll appear here as soon as someone submits the contact form.</p>
          ) : (
            <ul className="divide-y divide-line">
              {stats.recent.map((l) => (
                <li key={l._id}>
                  <Link to={`/admin/leads?open=${l._id}`} className="flex items-center justify-between gap-4 p-5 hover:bg-accent-soft">
                    <div className="min-w-0">
                      <p className="truncate font-medium">{l.name} {l.company && <span className="text-muted">· {l.company}</span>}</p>
                      <p className="truncate text-sm text-muted">{l.service || (l.type === 'project' ? 'Project inquiry' : 'Contact message')} · {formatDate(l.createdAt)}</p>
                    </div>
                    <StatusBadge status={l.status} />
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className="rounded-2xl border border-line bg-card p-5">
          <h2 className="mb-4 font-semibold">Pipeline</h2>
          <ul className="flex flex-col gap-3">
            {(Object.keys(stats.byStatus) as LeadStatus[]).map((s) => {
              const pct = stats.totalLeads ? Math.round((stats.byStatus[s] / stats.totalLeads) * 100) : 0;
              return (
                <li key={s} className="flex flex-col gap-1.5">
                  <div className="flex justify-between text-sm"><span>{statusLabel[s]}</span><span className="text-muted">{stats.byStatus[s]}</span></div>
                  <div className="h-1.5 rounded-full bg-line"><div className="h-full rounded-full bg-accent" style={{ width: `${pct}%` }} /></div>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </>
  );
}
