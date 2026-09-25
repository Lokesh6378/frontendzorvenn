import { useState, type FormEvent } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '@/lib/auth';
import { ApiError } from '@/lib/api';
import { usePageMeta } from '@/hooks/usePageMeta';
import { TextField } from '@/components/common/Field';
import { Button } from '@/components/ui/Button';

export default function Login() {
  usePageMeta('Admin sign in');
  const { admin, login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as { from?: string } | null)?.from ?? '/admin';
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  if (admin) return <Navigate to={from} replace />;

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    setSubmitting(true);
    setError('');
    try {
      await login(String(form.get('email')), String(form.get('password')));
      navigate(from, { replace: true });
    } catch (err) {
      setError(err instanceof ApiError ? err.message : 'Sign in failed. Try again.');
      setSubmitting(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-grid p-5">
      <div className="w-full max-w-md rounded-3xl border border-line bg-card p-8 lg:p-10">
        <div className="mb-8 flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-xl bg-accent font-display text-xl font-extrabold text-white">Z</span>
          <div>
            <h1 className="font-display text-2xl font-bold">Sign in</h1>
            <p className="text-sm text-muted">ZORVENN admin</p>
          </div>
        </div>
        <form onSubmit={onSubmit} className="flex flex-col gap-5">
          <TextField label="Email" name="email" type="email" required autoComplete="username" />
          <TextField label="Password" name="password" type="password" required autoComplete="current-password" />
          {error && <p role="alert" className="text-sm text-red-500">{error}</p>}
          <Button type="submit" size="lg" disabled={submitting}>{submitting ? 'Signing in…' : 'Sign in'}</Button>
        </form>
      </div>
    </div>
  );
}
