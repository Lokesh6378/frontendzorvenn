import { useState } from 'react';
import { stages } from '@/data/site';
import { cn } from '@/lib/format';

/** The hero's interactive visual: a code window + clickable build pipeline. */
export function Pipeline() {
  const [current, setCurrent] = useState(2);
  const stage = stages[current];

  return (
    <div className="w-full max-w-[1120px] overflow-hidden rounded-[20px] border border-line bg-card shadow-[0_40px_120px_-40px_var(--glow)]">
      <div className="flex h-12 items-center gap-2 border-b border-line px-5">
        {[0, 1, 2].map((i) => <span key={i} className="size-[11px] rounded-full bg-line" />)}
        <span className="ml-4 rounded-lg bg-bg px-3 py-1 font-mono text-xs">zorvenn.config.ts</span>
        <span className="hidden px-3 font-mono text-xs text-muted sm:inline">pipeline</span>
      </div>
      <div className="grid md:grid-cols-2">
        <pre className="hidden overflow-x-auto border-r border-line px-8 py-7 font-mono text-sm leading-[1.95] text-muted md:block">
          <code>
            <span className="text-accent-fg">export const</span> <span className="text-fg">stack</span> = {'{\n'}
            {'  frontend: ['}<span className="text-fg">"React"</span>, <span className="text-fg">"TypeScript"</span>, <span className="text-fg">"Tailwind"</span>{'],\n'}
            {'  backend: '}<span className="text-fg">"Node.js"</span>{',\n'}
            {'  database: '}<span className="text-fg">"MongoDB"</span>{',\n'}
            {'} '}<span className="text-accent-fg">satisfies</span>{' Stack;\n\n'}
            <span className="text-accent-fg">await</span>{' zorvenn.build({ idea, stack });\n\n'}
            <span className="text-fg">› stage </span><span className="text-accent-fg">{stage.name.toUpperCase()}</span>{'\n'}
            {'› '}{stage.status}
          </code>
        </pre>
        <div className="flex flex-col gap-2 p-4 md:p-5">
          {stages.map((s, i) => {
            const active = i === current;
            return (
              <button key={s.name} type="button" onClick={() => setCurrent(i)} aria-pressed={active}
                className={cn('flex h-[50px] items-center gap-4 rounded-xl border px-4 text-left text-[15px] transition',
                  active ? 'border-accent bg-accent-soft' : 'border-line hover:border-muted')}>
                <span className="font-mono text-xs text-muted">0{i + 1}</span>
                <span className="flex-1 font-semibold tracking-[0.06em] uppercase">{s.name}</span>
                <span className={cn('font-mono text-[11px]', active ? 'text-accent-fg' : 'text-muted')}>
                  {i < current ? 'done' : active ? 'running' : 'queued'}
                </span>
              </button>
            );
          })}
          <p className="px-1 pt-1 font-mono text-xs text-muted md:hidden">› {stage.status}</p>
        </div>
      </div>
    </div>
  );
}
