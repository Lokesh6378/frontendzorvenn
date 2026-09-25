import { Cloud, Code2, Monitor, ShoppingCart, Sparkles } from 'lucide-react';
import type { Service } from '@/types';

const icons = { code: Code2, cart: ShoppingCart, monitor: Monitor, cloud: Cloud, sparkles: Sparkles };

export function ServiceIcon({ name, className }: { name: Service['icon']; className?: string }) {
  const Icon = icons[name];
  return <Icon aria-hidden className={className} strokeWidth={2} />;
}
