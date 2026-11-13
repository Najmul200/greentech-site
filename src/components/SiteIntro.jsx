import { useEffect, useState } from 'react';

const INTRO_KEY = 'greentech-site-intro-seen';
const PROGRESS_STEPS = [20, 50, 70, 80, 90, 95, 96, 98, 99, 100];

export default function SiteIntro() {
  const [visible, setVisible] = useState(() => !sessionStorage.getItem(INTRO_KEY));
  const [progress, setProgress] = useState(10);

  useEffect(() => {
    if (!visible) return undefined;

    sessionStorage.setItem(INTRO_KEY, 'true');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let step = 0;
    let completionTimer;

    if (reducedMotion) {
      setProgress(100);
      completionTimer = window.setTimeout(() => setVisible(false), 100);
      return () => window.clearTimeout(completionTimer);
    }

    const timer = window.setInterval(() => {
      const nextProgress = PROGRESS_STEPS[step];
      step += 1;
      setProgress(nextProgress);
      if (nextProgress === 100) {
        window.clearInterval(timer);
        completionTimer = window.setTimeout(() => setVisible(false), 120);
      }
    }, 180);

    return () => {
      window.clearInterval(timer);
      window.clearTimeout(completionTimer);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      role="status"
      aria-label="Welcome to A GreenTech Solution"
      className="site-intro fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#050b12]"
    >
      <div className="intro-grid" aria-hidden="true" />
      <div className="intro-glow intro-glow-left" aria-hidden="true" />
      <div className="intro-glow intro-glow-right" aria-hidden="true" />
      <div className="intro-scene relative flex w-full max-w-5xl flex-col items-center px-5 py-10 text-center">
        <div className="intro-orbit" aria-hidden="true">
          <span className="intro-orbit-path intro-orbit-path-one" />
          <span className="intro-orbit-path intro-orbit-path-two" />
          <div className="intro-product intro-product-one"><img src="/images/Gemini_Generated_Image_dbh6sadbh6sadbh6 (1).jfif" alt="" /></div>
          <div className="intro-product intro-product-two"><img src="/images/Gemini_Generated_Image_dbh6sadbh6sadbh6.jfif" alt="" /></div>
          <div className="intro-product intro-product-three"><img src="/images/Gemini_Generated_Image_dbh6sadbh6sadbh6 (3).jfif" alt="" /></div>
          <div className="intro-logo"><img src="/images/logo.png" alt="A GreenTech Solution" /></div>
        </div>
        <p className="intro-eyebrow">POWERING A SMARTER TOMORROW</p>
        <h1 className="intro-heading">A GreenTech <span>Solution</span></h1>
        <p className="intro-caption">Smart power. Reliable solutions.</p>
        <div className="intro-progress mt-7 w-40">
          <div className="flex items-center justify-between text-[10px] font-bold tracking-[0.16em] text-slate-300">
            <span>LOADING</span>
            <span className={progress === 100 ? 'text-[#ff1744]' : 'text-slate-300'} aria-live="polite" aria-atomic="true">{progress}%</span>
          </div>
          <div className="intro-loading mt-2 h-1 w-full overflow-hidden rounded-full bg-white/20" aria-hidden="true">
            <span style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>
    </div>
  );
}
