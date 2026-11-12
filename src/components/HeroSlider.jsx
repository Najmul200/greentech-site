import { useEffect, useState } from 'react';
import { SLIDES, SITE } from '../data/siteData';

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
      <div className="relative mx-auto aspect-[4/3] max-h-[640px] min-h-[300px] w-full overflow-hidden sm:aspect-[16/8] sm:min-h-0">
        {SLIDES.map((s, n) => (
          <img key={s.src} src={s.src} alt={s.alt} loading={n === 0 ? 'eager' : 'lazy'}
            className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-700 ${n === i ? 'opacity-100' : 'opacity-0'}`} />
        ))}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-3 pt-12 sm:p-8 sm:pt-16">
          <h1 className="max-w-[85%] text-lg font-extrabold leading-tight text-white sm:max-w-none sm:text-4xl">{SITE.name}</h1>
          <p className="mt-1 hidden text-sm text-gray-200 sm:block">MCU controlled, overcharge protected chargers built for long life and safety.</p>
          <div className="mt-2 flex flex-wrap gap-2 sm:mt-3 sm:gap-3">
            <a href="/products" className="rounded bg-green-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-green-700 sm:px-5 sm:text-sm">View Products</a>
            <a href="/contact" className="rounded border border-white px-3 py-2 text-xs font-semibold text-white transition hover:bg-white hover:text-slate-900 sm:px-5 sm:text-sm">Get a Quote</a>
          </div>
        </div>
        <button onClick={() => go(-1)} aria-label="Previous slide" className="absolute left-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white transition hover:bg-black/70 sm:h-11 sm:w-11 sm:text-lg">‹</button>
        <button onClick={() => go(1)} aria-label="Next slide" className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white transition hover:bg-black/70 sm:h-11 sm:w-11 sm:text-lg">›</button>
      </div>
      <div className="flex justify-center gap-2 bg-slate-900 py-2">
        {SLIDES.map((_, n) => (
          <button key={n} onClick={() => setI(n)} aria-label={`Go to slide ${n + 1}`}
            className={`h-2.5 w-2.5 rounded-full ${n === i ? 'bg-green-500' : 'bg-gray-500'}`} />
        ))}
      </div>
    </section>
  );
}
