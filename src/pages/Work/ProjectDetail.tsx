import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { projects } from '@/data/site';
import { usePageMeta } from '@/hooks/usePageMeta';
import { Container } from '@/components/ui/Container';
import { ProjectImage } from '@/sections/Projects/ProjectCard';
import { CTA } from '@/sections/CTA/CTA';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  usePageMeta(project?.title ?? 'Project', project?.summary);
  if (!project) return <Navigate to="/work" replace />;

  const sections = [
    ['The challenge', project.challenge],
    ['What we built', project.solution],
    ['The result', project.result],
  ].filter(([, text]) => text) as [string, string][];

  return (
    <>
      <Container className="flex flex-col gap-10 py-14 lg:gap-14 lg:py-20">
        <Link to="/work" className="inline-flex items-center gap-2 self-start text-muted hover:text-fg"><ArrowLeft className="size-4" /> All projects</Link>
        <div className="flex flex-col gap-5">
          <p className="font-mono text-[13px] text-accent-fg">{project.categories.join(' · ')}</p>
          <h1 className="max-w-4xl font-display text-5xl leading-none font-bold tracking-tight lg:text-7xl">{project.title}</h1>
          <p className="max-w-2xl text-xl leading-relaxed text-muted">{project.summary}</p>
        </div>
        <ProjectImage project={project} className="aspect-[16/9] w-full" />
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          {project.stack && (
            <div className="flex flex-col gap-3">
              <h2 className="font-mono text-xs tracking-[0.14em] text-muted">STACK</h2>
              <ul className="flex flex-wrap gap-2">
                {project.stack.map((t) => <li key={t} className="rounded-full border border-line px-3.5 py-1.5 text-sm">{t}</li>)}
              </ul>
            </div>
          )}
          <div className="flex flex-col gap-10">
            {sections.map(([title, text]) => (
              <section key={title} className="flex flex-col gap-3">
                <h2 className="font-display text-3xl font-bold">{title}</h2>
                <p className="text-lg leading-relaxed text-muted">{text}</p>
              </section>
            ))}
          </div>
        </div>
      </Container>
      <CTA />
    </>
  );
}
