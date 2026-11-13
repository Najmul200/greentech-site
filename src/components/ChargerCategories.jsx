const CHARGER_CATEGORIES = [
  {
    name: 'Dry Battery Charger',
    category: 'Dry Battery Chargers',
    image: '/images/Gemini_Generated_Image_dbh6sadbh6sadbh6 (2).jfif',
    alt: 'Battery charger product',
  },
  {
    name: 'Fast Battery Charger',
    category: 'Chargers',
    image: '/images/Gemini_Generated_Image_dbh6sadbh6sadbh6.jfif',
    alt: 'Blue fast battery charger',
  },
  {
    name: 'Lithium Battery Charger',
    category: 'Lithium Chargers',
    image: '/images/Gemini_Generated_Image_dbh6sadbh6sadbh6 (3).jfif',
    alt: 'Lithium charging product category',
  },
];

export default function ChargerCategories() {
  return (
    <section
      id="chargers"
      aria-labelledby="chargers-title"
      className="charger-section-bg px-4 py-9 sm:px-6 sm:py-14"
    >
      <div className="mx-auto max-w-3xl">
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
                className="group block overflow-hidden rounded-md border border-white bg-white shadow-[0_12px_30px_rgba(4,25,52,0.34)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(4,25,52,0.48)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                <div className="aspect-[16/9] overflow-hidden bg-white p-1 sm:p-2">
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    className="h-full w-full object-contain transition-transform duration-300 ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <div className="border-t border-slate-100 bg-white px-3 py-2 text-center sm:px-4 sm:py-2.5">
                  <h3 className="text-[10px] font-semibold leading-tight text-slate-700 transition-colors group-hover:text-blue-700 sm:text-xs">{item.name}</h3>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
