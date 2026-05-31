import { useState } from 'react';
import type { NavItem } from '../../types/portfolio';

type NavigationProps = {
  items: NavItem[];
  activeId: string;
  compact: boolean;
};

export function Navigation({ items, activeId, compact }: NavigationProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav aria-label="Main navigation" className="fixed left-1/2 top-4 z-50 w-[calc(100%-32px)] max-w-container -translate-x-1/2" id="nav">
      <div className={`glass flex items-center justify-between rounded-full px-5 py-3 shadow-sm transition-all duration-300 md:px-7 ${compact ? '!py-2' : ''}`}>
        <a className="font-display text-2xl font-extrabold tracking-tight" href="#hero">
          SAMA
        </a>
        <div className="hidden items-center gap-8 text-sm md:flex">
          {items.map((item) => (
            <a className={`nav-link ${activeId === item.href.slice(1) ? 'active' : ''}`} data-nav href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </div>
        <a className="btn-primary label-caps rounded-full px-5 py-2.5" data-magnet href="#contact">
          Contact Me
        </a>
        <button
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
          className="btn-ghost ml-2 inline-flex h-10 w-10 items-center justify-center rounded-full md:hidden"
          onClick={() => setMobileOpen((value) => !value)}
          type="button"
        >
          {mobileOpen ? 'X' : '='}
        </button>
      </div>
      {mobileOpen ? (
        <div className="glass mt-2 rounded-3xl p-4 md:hidden">
          <div className="flex flex-col gap-3">
            {items.map((item) => (
              <a
                className={`nav-link rounded-xl px-3 py-2 text-base ${activeId === item.href.slice(1) ? 'active bg-white/75' : ''}`}
                data-nav
                href={item.href}
                key={item.href}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a className="btn-primary label-caps mt-1 inline-flex justify-center rounded-full px-4 py-3" data-magnet href="#contact" onClick={() => setMobileOpen(false)}>
              Contact Me
            </a>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
