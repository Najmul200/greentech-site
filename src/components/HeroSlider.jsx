import { useEffect, useState } from 'react';
import { SLIDES } from '../data/siteData';

export default function HeroSlider() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % SLIDES.length), 4500);
    return () => clearInterval(t);
  }, []);
  const go = (d) => setI((p) => (p + d + SLIDES.length) % SLIDES.length);
  if (!SLIDES.length) return null;

  return (
    <section id="home" aria-label="Featured products" className="relative bg-slate-900">
      <div className="mx-auto max-w-6xl px-3 sm:px-5">
        <div className="relative aspect-[4/3] max-h-[520px] min-h-[260px] w-full overflow-hidden sm:aspect-[16/8] sm:min-h-0">
          {SLIDES.map((s, n) => (
            <img key={s.src} src={s.src} alt={s.alt} loading={n === 0 ? 'eager' : 'lazy'}
              className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-700 ${n === i ? 'opacity-100' : 'opacity-0'}`} />
          ))}
          <button onClick={() => go(-1)} aria-label="Previous slide" className="absolute left-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white transition hover:bg-black/70 sm:h-11 sm:w-11 sm:text-lg">‹</button>
          <button onClick={() => go(1)} aria-label="Next slide" className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white transition hover:bg-black/70 sm:h-11 sm:w-11 sm:text-lg">›</button>
        </div>
        <div className="flex justify-center gap-2 py-2">
          {SLIDES.map((_, n) => (
            <button key={n} onClick={() => setI(n)} aria-label={`Go to slide ${n + 1}`}
              className={`h-2.5 w-2.5 rounded-full ${n === i ? 'bg-green-500' : 'bg-gray-500'}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
