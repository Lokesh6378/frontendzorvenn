import { NavLink, Outlet } from 'react-router-dom';
import { Inbox, LayoutDashboard, LogOut, Mail, ExternalLink } from 'lucide-react';
import { useAuth } from '@/lib/auth';
import { cn } from '@/lib/format';
import { ThemeToggle } from '@/components/common/ThemeToggle';

const links = [
  { to: '/admin', label: 'Dashboard', icon: LayoutDashboard, end: true },
  { to: '/admin/leads', label: 'Leads', icon: Inbox, end: false },
  { to: '/admin/subscribers', label: 'Subscribers', icon: Mail, end: false },
];

export function AdminLayout() {
  const { admin, logout } = useAuth();
  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      <aside className="flex shrink-0 flex-col gap-6 border-b border-line bg-card p-4 lg:sticky lg:top-0 lg:h-screen lg:w-64 lg:border-r lg:border-b-0 lg:p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="flex size-8 items-center justify-center rounded-lg bg-accent font-display font-extrabold text-white">Z</span>
            <span className="font-display font-extrabold tracking-[0.1em]">ADMIN</span>
          </div>
          <div className="lg:hidden"><ThemeToggle /></div>
        </div>
        <nav aria-label="Admin" className="flex gap-1 overflow-x-auto lg:flex-col">
          {links.map(({ to, label, icon: Icon, end }) => (
            <NavLink key={to} to={to} end={end}
              className={({ isActive }) => cn('flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-[15px] whitespace-nowrap transition',
                isActive ? 'bg-accent-soft font-semibold text-fg' : 'text-muted hover:text-fg')}>
              <Icon className="size-4" />{label}
            </NavLink>
          ))}
        </nav>
        <div className="mt-auto hidden flex-col gap-3 lg:flex">
          <a href="/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-muted hover:text-fg"><ExternalLink className="size-4" /> View website</a>
          <div className="flex items-center justify-between gap-2 border-t border-line pt-4">
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold">{admin?.name}</p>
              <p className="truncate text-xs text-muted">{admin?.email}</p>
            </div>
            <ThemeToggle />
          </div>
          <button type="button" onClick={logout} className="flex items-center gap-2 text-sm text-muted hover:text-fg"><LogOut className="size-4" /> Sign out</button>
        </div>
      </aside>
      <main className="min-w-0 flex-1 p-5 lg:p-10">
        <Outlet />
        <button type="button" onClick={logout} className="mt-10 flex items-center gap-2 text-sm text-muted lg:hidden"><LogOut className="size-4" /> Sign out</button>
      </main>
    </div>
  );
}
