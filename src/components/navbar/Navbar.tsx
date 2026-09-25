import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks } from '@/data/site';
import { cn } from '@/lib/format';
import { Logo } from '@/components/common/Logo';
import { ThemeToggle } from '@/components/common/ThemeToggle';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-xl">
      <Container className="flex h-[68px] items-center justify-between lg:h-[84px]">
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-9 text-[15px] text-muted lg:flex">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to}
              className={({ isActive }) => cn('flex items-center gap-2 transition hover:text-fg', isActive && 'text-fg')}>
              {link.label}
              {link.badge && (
                <span className="rounded-full border border-line px-2 py-0.5 font-mono text-[10px] tracking-widest text-accent-fg uppercase">{link.badge}</span>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2 lg:gap-3">
          <ThemeToggle />
          <span className="hidden sm:block"><Button to="/contact" variant="inverse" arrow>Start Project</Button></span>
          <button type="button" onClick={() => setOpen((o) => !o)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}
            className="flex size-11 items-center justify-center rounded-full border border-line lg:hidden">
            {open ? <X className="size-[18px]" /> : <Menu className="size-[18px]" />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.nav aria-label="Mobile" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }} className="overflow-hidden border-t border-line bg-bg lg:hidden">
            <Container className="flex flex-col py-5 pb-7">
              {navLinks.map((link) => (
                <NavLink key={link.to} to={link.to} className="flex items-center gap-3 py-3 font-display text-3xl font-bold">
                  {link.label}
                  {link.badge && <span className="rounded-full border border-line px-2 py-0.5 font-mono text-[11px] font-medium tracking-widest text-accent-fg uppercase">{link.badge}</span>}
                </NavLink>
              ))}
              <Button to="/contact" size="lg" className="mt-4">Start Project</Button>
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
