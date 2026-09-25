import type { InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react';
import { cn } from '@/lib/format';

const control =
  'w-full rounded-2xl border border-line bg-card px-4 text-[15px] text-fg placeholder:text-muted/70 transition focus:border-accent focus:outline-none';

interface Wrap { label: string; name: string; error?: string; hint?: string; required?: boolean; children: ReactNode }

function FieldWrap({ label, name, error, hint, required, children }: Wrap) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-sm font-medium">
        {label} {required ? <span className="text-accent-fg">*</span> : <span className="text-muted">(optional)</span>}
      </label>
      {children}
      {error ? (
        <p id={`${name}-error`} className="text-sm text-red-500">{error}</p>
      ) : hint ? (
        <p className="text-sm text-muted">{hint}</p>
      ) : null}
    </div>
  );
}

type Base = { label: string; name: string; error?: string; hint?: string };

export function TextField({ label, name, error, hint, required, className, ...rest }: Base & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <FieldWrap label={label} name={name} error={error} hint={hint} required={required}>
      <input id={name} name={name} required={required} aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined} className={cn(control, 'h-13 py-3', className)} {...rest} />
    </FieldWrap>
  );
}

export function TextArea({ label, name, error, hint, required, ...rest }: Base & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <FieldWrap label={label} name={name} error={error} hint={hint} required={required}>
      <textarea id={name} name={name} required={required} aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined} className={cn(control, 'min-h-40 py-3 leading-relaxed')} {...rest} />
    </FieldWrap>
  );
}

export function SelectField({ label, name, error, options, placeholder, ...rest }: Base & { options: string[]; placeholder?: string } & SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <FieldWrap label={label} name={name} error={error}>
      <select id={name} name={name} className={cn(control, 'h-13 py-3')} {...rest}>
        <option value="">{placeholder ?? 'Select…'}</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </FieldWrap>
  );
}
