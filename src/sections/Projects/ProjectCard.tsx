import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { Project } from '@/types';
import { cn } from '@/lib/format';

export function ProjectImage({ project, className }: { project: Project; className?: string }) {
  return project.image ? (
    <img src={project.image} alt={`${project.title} preview`} loading="lazy" className={cn('rounded-3xl border border-line object-cover', className)} />
  ) : (
    <div className={cn('flex items-center justify-center rounded-3xl border border-line bg-card bg-grid [background-size:40px_40px] font-mono text-sm text-muted', className)}>
      [ PROJECT IMAGE ]
    </div>
  );
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className={cn('flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-16', index % 2 === 1 && 'lg:flex-row-reverse')}>
      <ProjectImage project={project} className="aspect-[16/10] w-full lg:w-[58%] lg:shrink-0" />
      <div className="flex flex-col gap-4">
        <span className="font-mono text-sm text-accent-fg">0{index + 1}</span>
        <h3 className="font-display text-3xl leading-tight font-bold tracking-tight lg:text-[42px]">{project.title}</h3>
        <p className="text-[17px] leading-relaxed text-muted">{project.summary}</p>
        <p className="font-mono text-[13px] text-muted">{project.categories.join(' · ')}</p>
        <Link to={`/work/${project.slug}`} className="mt-1 inline-flex items-center gap-2 font-semibold text-accent-fg hover:gap-3 transition-all">
          View case study <ArrowRight className="size-4" />
        </Link>
      </div>
    </article>
  );
}
