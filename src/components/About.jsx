import { ABOUT } from '../data/siteData';

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="py-10 sm:py-14">
      <div className="mx-auto grid max-w-7xl items-center gap-6 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:gap-8 lg:px-8">
        <img src="/images/Gemini_Generated_Image_sizvaasizvaasizv.jfif" alt="Production room with battery chargers and factory testing equipment" loading="lazy" className="h-[240px] w-full rounded shadow object-cover object-center min-[420px]:h-[280px] sm:h-[340px] lg:h-[500px] xl:h-[520px]" />
        <div>
          <h2 id="about-title" className="text-2xl font-bold text-gray-800 sm:text-3xl">About Us</h2>
          <h3 className="mt-1 text-xl font-semibold text-blue-700">{ABOUT.heading}</h3>
          <div className="mt-2 h-1 w-16 bg-blue-700" />
          {ABOUT.paragraphs.map((x) => <p key={x} className="mt-3 text-gray-600">{x}</p>)}
          <ul className="mt-5 grid grid-cols-1 gap-3 text-center min-[420px]:grid-cols-3">
            {ABOUT.stats.map(([a, b]) => (
              <li key={a} className="rounded bg-gray-50 p-3 shadow-sm"><p className="text-xl font-bold text-green-600">{a}</p><p className="text-xs text-gray-500">{b}</p></li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
