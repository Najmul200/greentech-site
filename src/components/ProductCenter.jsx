import { CATEGORIES, PRODUCTS } from '../data/siteData';

export default function ProductCenter({ selectedCategory, onCategoryChange, showAllProductsLink = false }) {
  const list = selectedCategory === 'All' ? PRODUCTS : PRODUCTS.filter((p) => p.cat === selectedCategory);
  const visibleProducts = showAllProductsLink ? list.slice(0, 8) : list;
  const returnTo = window.location.pathname === '/'
    ? `${selectedCategory === 'All' ? '/' : `/?category=${encodeURIComponent(selectedCategory)}`}#products`
    : `${window.location.pathname}${window.location.search}${window.location.hash}`;

  return (
    <section id="products" aria-labelledby="products-title" className="bg-gray-50 pb-10 pt-2 sm:pb-14 sm:pt-4">
      <div className="mx-auto max-w-7xl px-4">
        <h2 id="products-title" className="text-center text-2xl font-bold text-[#111111] sm:text-3xl">PRODUCT CENTER</h2>
        <div className="mx-auto mt-2 h-1 w-16 bg-blue-700" />
        {selectedCategory !== 'All' && (
          <p className="mt-3 text-center">
            <button
              onClick={() => onCategoryChange('All')}
              className="text-sm font-semibold text-blue-700 hover:underline"
            >
              Show all products
            </button>
          </p>
        )}
        <ul className="mt-6 flex flex-wrap justify-center gap-2 sm:mt-8">
          {CATEGORIES.map((c) => (
            <li key={c}>
              <button onClick={() => onCategoryChange(c)}
                className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors sm:px-4 sm:text-sm ${selectedCategory === c ? 'border-blue-700 bg-blue-700 text-white' : 'bg-white text-gray-700 hover:border-blue-700'}`}>{c}</button>
            </li>
          ))}
        </ul>
        <ul className={`mx-auto mt-6 grid grid-cols-2 gap-2.5 min-[420px]:gap-3 sm:mt-8 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 ${showAllProductsLink ? 'max-w-5xl' : ''}`}>
          {visibleProducts.map((p) => (
            <li key={p.id}>
              <article className="group h-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-900/10">
                <a
                  href={`/products/${p.id}?from=${encodeURIComponent(returnTo)}`}
                  aria-label={`View details for ${p.name}`}
                  className="block h-full w-full text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-blue-600"
                >
                  <div className={`relative overflow-hidden bg-white ${showAllProductsLink ? 'aspect-square p-2 sm:p-3 lg:aspect-[2/1] lg:p-1' : 'aspect-square p-3'}`}>
                    <img
                      src={p.img}
                      alt={`${p.name} by A GreenTech Solution`}
                      loading="lazy"
                      className="h-full w-full object-contain transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    <span className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-slate-950/75 to-transparent px-3 pb-3 pt-8 text-center text-xs font-bold uppercase tracking-wider text-white transition-transform duration-300 group-hover:translate-y-0 group-focus-within:translate-y-0">
                      View details
                    </span>
                  </div>
                  <div className="flex min-h-[64px] flex-col items-center justify-center border-t border-slate-100 px-2 py-2 text-center">
                    <h3 className="text-xs font-semibold text-slate-800 transition-colors group-hover:text-blue-700 sm:text-sm">{p.name}</h3>
                    <p className="mt-1 text-[10px] text-slate-500 sm:text-xs">{p.cat}</p>
                  </div>
                </a>
              </article>
            </li>
          ))}
        </ul>
        {showAllProductsLink && (
          <div className="mt-6 text-center">
            <a href="/products" className="inline-flex w-full justify-center rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-800 sm:w-auto">
              View all products
            </a>
          </div>
        )}
      </div>

    </section>
  );
}
