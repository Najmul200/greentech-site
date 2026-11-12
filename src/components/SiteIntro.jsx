import { useEffect, useState } from 'react';

const INTRO_KEY = 'greentech-site-intro-seen';

export default function SiteIntro() {
  const [visible, setVisible] = useState(() => !sessionStorage.getItem(INTRO_KEY));

  useEffect(() => {
    if (!visible) return undefined;

    sessionStorage.setItem(INTRO_KEY, 'true');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const timer = window.setTimeout(() => setVisible(false), reducedMotion ? 500 : 2100);

    return () => window.clearTimeout(timer);
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      role="status"
      aria-label="Opening A GreenTech Solution"
      className="site-intro fixed inset-0 z-[100] flex items-center justify-center bg-slate-950"
    >
      <div className="site-intro-content flex flex-col items-center px-6 text-center">
        <div className="site-intro-logo-wrap flex h-28 w-28 items-center justify-center rounded-3xl bg-white p-3 shadow-2xl shadow-emerald-500/20 sm:h-36 sm:w-36">
          <img src="/images/logo.png" alt="" className="h-full w-full object-contain" />
        </div>
        <p className="mt-6 text-lg font-bold tracking-wide text-white sm:text-2xl">
          A GreenTech Solution
        </p>
        <p className="mt-2 text-sm text-slate-300">Smart power. Reliable solutions.</p>
        <span className="site-intro-progress mt-7 h-1 w-32 overflow-hidden rounded-full bg-white/20 sm:w-40" />
      </div>
    </div>
  );
}
