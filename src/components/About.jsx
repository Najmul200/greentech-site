import { ABOUT } from '../data/siteData';

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="py-10 sm:py-14">
      <div className="mx-auto grid max-w-7xl items-center gap-6 px-4 sm:px-6 md:grid-cols-2 md:gap-8 lg:px-8">
        <img src="/images/slide-3-testing-lab.png" alt="Factory aging test cabinet loaded with chargers" loading="lazy" className="h-auto w-full rounded shadow" />
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
