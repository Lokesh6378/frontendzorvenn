import { useState, type FormEvent } from 'react';
import { Check } from 'lucide-react';
import { api, ApiError } from '@/lib/api';

export function NewsletterForm({ source = 'labs' }: { source?: string }) {
  const [email, setEmail] = useState('');
  const [state, setState] = useState<'idle' | 'loading' | 'done'>('idle');
  const [error, setError] = useState('');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const website = (new FormData(e.currentTarget).get('website') as string) || undefined;
    setState('loading');
    setError('');
    try {
      await api('/api/newsletter', { method: 'POST', body: { email, source, website } });
      setState('done');
    } catch (err) {
      setError(err instanceof ApiError ? (err.errors.email?.[0] ?? err.message) : 'Something went wrong. Try again.');
      setState('idle');
    }
  }

  if (state === 'done') {
    return (
      <p role="status" className="flex h-[50px] items-center gap-2.5 rounded-full border border-accent px-5 text-[15px] font-medium">
        <Check className="size-4 text-accent-fg" strokeWidth={2.4} /> You're on the list. We'll be in touch.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-2">
      <label htmlFor={`newsletter-${source}`} className="text-sm text-muted">Email address</label>
      <div className="flex flex-col gap-2.5 sm:flex-row">
        <input
          id={`newsletter-${source}`} type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com" autoComplete="email" aria-invalid={Boolean(error)}
          className="h-[50px] flex-1 rounded-full border border-line bg-bg px-5 text-[15px] text-fg placeholder:text-muted/70 focus:border-accent focus:outline-none"
        />
        {/* Honeypot: hidden from people, bots fill it in */}
        <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
        <button type="submit" disabled={state === 'loading'}
          className="h-[50px] rounded-full bg-accent px-6 text-[15px] font-semibold text-white transition hover:brightness-110 disabled:opacity-60">
          {state === 'loading' ? 'Adding…' : 'Notify me'}
        </button>
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </form>
  );
}
