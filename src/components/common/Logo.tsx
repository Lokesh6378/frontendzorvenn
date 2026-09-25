import { Link } from 'react-router-dom';
import { site } from '@/data/site';

export function Logo({ withTagline = true }: { withTagline?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label="ZORVENN home">
      <span className="flex size-[34px] items-center justify-center rounded-[9px] bg-accent font-display text-xl font-extrabold text-white">Z</span>
      <span className="flex flex-col gap-0.5">
        <span className="font-display text-xl leading-none font-extrabold tracking-[0.1em]">{site.name}</span>
        {withTagline && <span className="hidden text-[11px] tracking-wide text-muted sm:block">{site.tagline}</span>}
      </span>
    </Link>
  );
}
