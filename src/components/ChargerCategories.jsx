const CHARGER_CATEGORIES = [
  {
    name: 'Battery',
    category: 'Dry Battery Chargers',
    image: '/images/slide-2-charger-box.png',
    alt: 'Battery charger product',
  },
  {
    name: 'Motor Controller',
    category: 'Controllers',
    image: '/images/slide-5-vent-side.png',
    alt: 'Motor control product category',
  },
  {
    name: 'Lithium Accessories',
    category: 'Lithium Chargers',
    image: '/images/slide-6-front.png',
    alt: 'Lithium charging product category',
  },
];

export default function ChargerCategories() {
  return (
    <section
      id="chargers"
      aria-labelledby="chargers-title"
      className="bg-[#145b91] px-4 py-9 sm:px-6 sm:py-14"
    >
      <div className="mx-auto max-w-5xl">
        <h2
          id="chargers-title"
          className="text-center text-xl font-extrabold tracking-wide text-white sm:text-3xl"
        >
          CHARGERS
        </h2>

        <ul className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {CHARGER_CATEGORIES.map((item) => (
            <li key={item.name}>
              <a
                href={`/products?category=${encodeURIComponent(item.category)}`}
                className="group block overflow-hidden rounded-sm bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                <div className="aspect-[4/3] overflow-hidden bg-white">
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    className="h-full w-full object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="border-t border-slate-100 px-3 py-3 text-center text-sm font-medium text-slate-700 transition-colors group-hover:text-blue-700 sm:text-base">
                  {item.name}
                </h3>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
