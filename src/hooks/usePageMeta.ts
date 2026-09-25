import { useEffect } from 'react';

/** Sets the document title and meta description for each page (basic SEO for an SPA). */
export function usePageMeta(title: string, description?: string) {
  useEffect(() => {
    document.title = title === 'ZORVENN' ? 'ZORVENN — Software & Digital Product Studio' : `${title} — ZORVENN`;
    if (description) {
      document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    }
  }, [title, description]);
}
