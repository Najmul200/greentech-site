import { useState } from 'react';
import { PRODUCTS, SITE } from '../data/siteData';

const CHARGER_MODELS = [
  { model: '48V3A', power: '200W', size: '168mm*78mm*57mm', voltage: 'DC 48 - 58.8V', current: 'DC 3.0±0.2A' },
  { model: '48V4A', power: '280W', size: '170mm*90mm*67mm', voltage: 'DC 48V-58.8V', current: 'DC 4.0±0.2A' },
  { model: '60V3A', power: '250W', size: '168mm*78mm*57mm', voltage: 'DC 60V-73.8V', current: 'DC 3.0±0.2A' },
  { model: '60V4A', power: '330W', size: '177mm*90mm*67mm', voltage: 'DC 60V-73.8V', current: 'DC 4.0±0.2A' },
  { model: '72V3A', power: '300W', size: '168mm*78mm*57mm', voltage: 'DC 72V-58.8V', current: 'DC 3.0±0.2A' },
  { model: '72V4A', power: '400W', size: '177mm*90mm*67mm', voltage: 'DC 72V-88.8V', current: 'DC 4.0±0.2A' },
];

export default function ProductDetails({ productId }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const product = PRODUCTS.find((item) => item.id === Number(productId));
  const requestedReturn = new URLSearchParams(window.location.search).get('from');
  const returnTo = requestedReturn?.startsWith('/') && !requestedReturn.startsWith('//')
    ? requestedReturn
    : '/products';

  if (!product) {
    return (
      <section className="mx-auto max-w-5xl px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-slate-900">Product not found</h1>
        <a href={returnTo} className="mt-5 inline-block font-semibold text-blue-700 hover:underline">
          Back to products
        </a>
      </section>
    );
  }

  const gallery = [
    product,
    ...PRODUCTS.filter((item) => item.cat === product.cat && item.img !== product.img)
      .filter((item, index, items) => items.findIndex((entry) => entry.img === item.img) === index),
  ];
  const activeImage = gallery[selectedImage] || product;
  const whatsappPhone = SITE.phone.replace(/\D/g, '');
  const whatsappMessage = `Hello, I am interested in ${product.name} (${product.cat}). Please share the price and more details.`;
  const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="bg-white py-7 sm:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <a href={returnTo} className="text-sm font-semibold text-blue-700 transition hover:text-blue-900">
          &larr; Back to products
        </a>

        <div className="mx-auto mt-5 max-w-4xl sm:mt-6">
          <div className="grid min-w-0 gap-3 sm:grid-cols-[minmax(0,1fr)_88px] sm:gap-4">
            <div className="flex aspect-[4/3] min-w-0 items-center justify-center overflow-hidden rounded-xl bg-slate-50 p-3 sm:p-8">
              <img src={activeImage.img} alt={activeImage.name} className="max-h-full w-full object-contain" />
            </div>

            {gallery.length > 1 && (
              <div className="flex max-w-full gap-2 overflow-x-auto pb-1 sm:max-h-[32rem] sm:flex-col sm:gap-3 sm:overflow-x-hidden sm:overflow-y-auto sm:pb-0">
                {gallery.map((image, index) => (
                  <button
                    key={image.img}
                    type="button"
                    onClick={() => setSelectedImage(index)}
                    aria-label={`Show ${image.name}`}
                    aria-pressed={selectedImage === index}
                    className={`flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-lg border-2 bg-white p-1.5 transition sm:h-20 sm:w-20 sm:p-2 ${
                      selectedImage === index ? 'border-blue-600 shadow-md' : 'border-slate-200 hover:border-blue-300'
                    }`}
                  >
                    <img src={image.img} alt={image.name} className="h-full w-full object-contain" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="mt-5 min-w-0 border-t border-slate-200 pt-5 sm:mt-6 sm:pt-6">
            <p className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
              {product.cat}
            </p>
            <h1 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">{product.name}</h1>
            <h2 className="mt-6 text-sm font-bold uppercase tracking-wider text-slate-500">Product details</h2>
            <div className="mt-3 divide-y divide-slate-200 border-y border-slate-200">
              {CHARGER_MODELS.map((item) => (
                <article key={item.model} className="break-words py-4 text-xs leading-5 text-slate-700 sm:text-sm sm:leading-6">
                  <p>Product brand: Hongjian Charger</p>
                  <p>Product model: {item.model}</p>
                  <p>Input power: {item.power}</p>
                  <p>Input voltage: 220V ~ 50HZ</p>
                  <p>Product size: {item.size}</p>
                  <p>Output voltage: {item.voltage}</p>
                  <p>Output current: {item.current}</p>
                </article>
              ))}
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="buy-now-float mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-rose-600 px-8 py-3.5 font-bold text-white shadow-lg shadow-rose-600/35 transition duration-200 hover:scale-[1.02] hover:bg-rose-700 hover:shadow-xl hover:shadow-rose-600/45 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-700 sm:w-auto"
            >
              <span>BUY NOW</span>
              <span aria-hidden="true" className="buy-now-arrow text-lg leading-none">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
