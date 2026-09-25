import { useState, type FormEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CheckCircle2, Mail } from 'lucide-react';
import { budgetOptions, services, site, timelineOptions } from '@/data/site';
import { api, ApiError } from '@/lib/api';
import { usePageMeta } from '@/hooks/usePageMeta';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { SelectField, TextArea, TextField } from '@/components/common/Field';

type Errors = Record<string, string | undefined>;

export default function ContactPage() {
  usePageMeta('Start a project', 'Tell ZORVENN what you are building. We reply within 2 business days.');
  const [params] = useSearchParams();
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [errors, setErrors] = useState<Errors>({});
  const [formError, setFormError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const body = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    setStatus('sending');
    setErrors({});
    setFormError('');
    try {
      const res = await api<{ message: string }>('/api/project-inquiry', { method: 'POST', body });
      setSuccessMessage(res.message);
      setStatus('sent');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      if (err instanceof ApiError) {
        setErrors(Object.fromEntries(Object.entries(err.errors).map(([k, v]) => [k, v?.[0]])));
        setFormError(err.message);
      } else {
        setFormError('Something went wrong. Try again, or email us directly.');
      }
      setStatus('idle');
    }
  }

  return (
    <section className="relative overflow-hidden bg-grid">
      <div className="glow absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2" />
      <Container className="relative grid gap-14 py-16 lg:grid-cols-[1fr_1.3fr] lg:gap-20 lg:py-24">
        <div className="flex flex-col gap-6">
          <p className="font-mono text-xs tracking-[0.16em] text-accent-fg">START A PROJECT</p>
          <h1 className="font-display text-5xl leading-none font-bold tracking-tight lg:text-7xl">Have an idea?<br /><span className="text-accent-fg">Let's build it.</span></h1>
          <p className="max-w-md text-lg leading-relaxed text-muted">Tell us what you're building. We reply within 2 business days with next steps.</p>
          <a href={`mailto:${site.email}`} className="mt-4 inline-flex items-center gap-3 self-start rounded-full border border-line bg-card px-5 py-3 font-semibold hover:border-muted">
            <Mail className="size-4 text-accent-fg" /> {site.email}
          </a>
        </div>

        <div className="rounded-3xl border border-line bg-card/80 p-6 backdrop-blur lg:p-10">
          {status === 'sent' ? (
            <div role="status" className="flex flex-col items-start gap-4 py-10">
              <CheckCircle2 className="size-10 text-accent-fg" />
              <h2 className="font-display text-3xl font-bold">Message sent.</h2>
              <p className="text-lg text-muted">{successMessage}</p>
              <Button to="/work" variant="secondary" arrow>See our work</Button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <TextField label="Name" name="name" required autoComplete="name" error={errors.name} />
                <TextField label="Email" name="email" type="email" required autoComplete="email" error={errors.email} />
                <TextField label="Company" name="company" autoComplete="organization" error={errors.company} />
                <TextField label="Phone" name="phone" type="tel" autoComplete="tel" error={errors.phone} />
                <SelectField label="Service" name="service" options={services.map((s) => s.title)} defaultValue={params.get('service') ?? ''} error={errors.service} />
                <SelectField label="Budget" name="budget" options={budgetOptions} error={errors.budget} />
              </div>
              <SelectField label="Timeline" name="timeline" options={timelineOptions} error={errors.timeline} />
              <TextArea label="About your project" name="message" required placeholder="What are you building, and what does success look like?" error={errors.message} />
              {/* Honeypot: hidden from people, bots fill it in */}
              <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
              {formError && <p role="alert" className="text-sm text-red-500">{formError}</p>}
              <Button type="submit" size="lg" arrow disabled={status === 'sending'} className="self-start">
                {status === 'sending' ? 'Sending…' : 'Send message'}
              </Button>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
