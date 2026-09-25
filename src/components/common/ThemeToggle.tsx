import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/lib/theme';

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className="flex size-11 items-center justify-center rounded-full border border-line text-fg transition hover:border-muted"
    >
      {theme === 'dark' ? <Sun className="size-[18px]" strokeWidth={1.8} /> : <Moon className="size-[18px]" strokeWidth={1.8} />}
    </button>
  );
}
