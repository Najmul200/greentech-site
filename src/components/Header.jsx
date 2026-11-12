import { useState } from 'react';
import { NAV, SITE } from '../data/siteData';

export default function Header() {
  const [open, setOpen] = useState(false);
  const active = window.location.pathname.replace(/\/+$/, '') || '/';

  return (
    <header className="sticky top-0 z-50 border-b border-slate-300 border-t-4 border-t-green-600 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 shadow-[0_8px_25px_rgba(15,23,42,0.16)] backdrop-blur">
      <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-3 px-4 py-1 sm:px-6 lg:px-8">
        <a href="/" aria-label={`${SITE.name} home`} className="group min-w-0 shrink-0">
          <img src="/images/logo.png" alt={`${SITE.name} logo`} className="w-36 max-w-[42vw] object-contain transition-transform duration-300 ease-out group-hover:scale-[1.02] sm:w-44 sm:max-w-none" />
        </a>

        <nav aria-label="Main navigation" className="hidden lg:block">
          <ul className="flex items-center gap-1 text-xs font-semibold text-gray-700 xl:gap-2 xl:text-sm">
            {NAV.map((n) => {
              const isActive = active === n.href;

              return (
                <li key={n.label}>
                  <a
                    href={n.href}
                    aria-current={active === n.href ? 'page' : undefined}
                    className={`group relative block overflow-hidden rounded-full px-3 py-2 transition-all duration-300 ease-out xl:px-4 ${
                      active === n.href
                        ? 'bg-gradient-to-r from-green-600 to-emerald-500 text-white shadow-md shadow-green-200'
                        : 'text-gray-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 hover:text-green-700'
                    }`}
                  >
                    <span className="relative z-10">{n.label}</span>
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden rounded-xl bg-green-50 px-3 py-1.5 text-right xl:block">
          <p className="text-[10px] font-bold tracking-widest text-green-700">CONTACT HOTLINE</p>
          <a href={`tel:${SITE.phone}`} className="text-sm font-bold text-slate-800 transition-colors hover:text-green-700">{SITE.phone}</a>
        </div>

        <button className="rounded-lg border border-green-100 bg-green-50 p-2.5 transition-colors hover:bg-green-100 lg:hidden" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span className="block h-0.5 w-6 bg-slate-800" />
          <span className="mt-1.5 block h-0.5 w-6 bg-slate-800" />
          <span className="mt-1.5 block h-0.5 w-6 bg-slate-800" />
        </button>
      </div>

      {open && (
        <nav aria-label="Mobile navigation" className="border-t border-green-100 bg-white lg:hidden">
          <ul className="mx-auto max-w-7xl px-4 py-2 sm:px-6">
            {NAV.map((n) => {
              return (
                <li key={n.label}>
                  <a
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-lg px-4 py-3 text-sm font-semibold transition-all duration-200 ${
                      active === n.href
                        ? 'bg-green-100 text-green-700'
                        : 'text-gray-700 hover:bg-green-50 hover:text-green-700'
                    }`}
                  >
                    {n.label}
                  </a>
                </li>
              );
            })}
            <li className="px-4 py-3">
              <a href={`tel:${SITE.phone}`} className="font-bold text-green-700">{SITE.phone}</a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
