import { projects } from '@/data/site';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProjectCard } from './ProjectCard';

export function Projects({ limit, showHeading = true }: { limit?: number; showHeading?: boolean }) {
  const list = limit ? projects.slice(0, limit) : projects;
  return (
    <section id="work" className="border-t border-line py-16 lg:py-26">
      <Container className="flex flex-col gap-12 lg:gap-20">
        {showHeading && (
          <SectionHeading eyebrow="02 — Featured work" title="Selected projects."
            aside={<Button to="/work" variant="secondary" arrow>All projects</Button>} />
        )}
        {list.map((p, i) => <ProjectCard key={p.slug} project={p} index={i} />)}
      </Container>
    </section>
  );
}
