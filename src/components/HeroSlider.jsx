import { useEffect, useState } from 'react';
import { SLIDES } from '../data/siteData';

export default function HeroSlider() {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const timer = window.setInterval(() => setI((current) => (current + 1) % SLIDES.length), 2200);
    return () => window.clearInterval(timer);
  }, []);

  const go = (direction) => setI((current) => (current + direction + SLIDES.length) % SLIDES.length);
  if (!SLIDES.length) return null;

  return (
    <section
      id="home"
      aria-label="Featured products"
      className="relative w-full overflow-hidden bg-slate-950"
    >
      <div className="relative h-[280px] w-full bg-slate-100 sm:h-[360px] lg:h-[450px] xl:h-[480px]">
        {SLIDES.map((slide, index) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            loading={index === 0 ? 'eager' : 'lazy'}
            className={`absolute inset-0 h-full w-full object-cover object-[center_55%] transition-opacity duration-700 ease-in-out ${index === i ? 'opacity-100' : 'opacity-0'}`}
            aria-hidden={index !== i}
          />
        ))}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-slate-950/10" aria-hidden="true" />

        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous slide"
          className="absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-slate-950/40 text-xl text-white shadow-lg backdrop-blur-sm transition hover:scale-105 hover:bg-white hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:left-6 sm:h-12 sm:w-12 lg:left-10"
        >
          &larr;
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next slide"
          className="absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-slate-950/40 text-xl text-white shadow-lg backdrop-blur-sm transition hover:scale-105 hover:bg-white hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:right-6 sm:h-12 sm:w-12 lg:right-10"
        >
          &rarr;
        </button>

        <div className="absolute bottom-0 left-0 right-0 z-20 flex items-center justify-center gap-2 px-4 pb-4 pt-10 sm:pb-6">
          {SLIDES.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => setI(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === i ? 'true' : undefined}
              className={`h-1.5 rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white ${index === i ? 'w-8 bg-white' : 'w-1.5 bg-white/55 hover:bg-white'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
