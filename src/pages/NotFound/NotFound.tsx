import { usePageMeta } from '@/hooks/usePageMeta';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';

export default function NotFound() {
  usePageMeta('Page not found');
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center gap-6 py-24 text-center">
      <p className="font-mono text-sm text-accent-fg">404</p>
      <h1 className="font-display text-5xl font-bold lg:text-7xl">This page doesn't exist.</h1>
      <p className="text-lg text-muted">The link may be old, or the page has moved.</p>
      <Button to="/" arrow>Go to homepage</Button>
    </Container>
  );
}
