import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/format';

type Variant = 'primary' | 'secondary' | 'inverse';
type Size = 'md' | 'lg';

const variants: Record<Variant, string> = {
  primary: 'bg-accent text-white hover:brightness-110',
  secondary: 'border border-line bg-card text-fg hover:border-muted',
  inverse: 'bg-fg text-bg hover:opacity-90',
};
const sizes: Record<Size, string> = {
  md: 'h-11 px-5 text-[15px]',
  lg: 'h-14 px-7 text-[17px]',
};

interface Props {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  className?: string;
  to?: string;
  href?: string;
}

export function Button({
  children, variant = 'primary', size = 'md', arrow, className, to, href,
  ...rest
}: Props & Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof Props>) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition disabled:cursor-not-allowed disabled:opacity-60',
    variants[variant], sizes[size], className
  );
  const content = (
    <>
      {children}
      {arrow && <ArrowRight aria-hidden className="size-4" strokeWidth={2.2} />}
    </>
  );

  if (to) return <Link to={to} className={classes}>{content}</Link>;
  if (href) return <a href={href} className={classes}>{content}</a>;
  return <button className={classes} {...rest}>{content}</button>;
}
