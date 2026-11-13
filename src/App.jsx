import { useEffect, useState } from 'react';
import Seo from './components/Seo';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import ChargerCategories from './components/ChargerCategories';
import ProductCenter from './components/ProductCenter';
import ProductDetails from './components/ProductDetails';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SiteIntro from './components/SiteIntro';
import { CATEGORIES } from './data/siteData';

const readLocation = () => `${window.location.pathname}${window.location.search}${window.location.hash}`;

export default function App() {
  const [currentLocation, setCurrentLocation] = useState(readLocation);
  const route = new URL(currentLocation, window.location.origin);
  const path = route.pathname.replace(/\/+$/, '') || '/';
  const queryCategory = route.searchParams.get('category');
  const requestedCategory = CATEGORIES.includes(queryCategory) ? queryCategory : 'All';
  const [homeCategory, setHomeCategory] = useState(requestedCategory);
  const isProductsPage = path === '/products';
  const productDetailsMatch = path.match(/^\/products\/(\d+)$/);

  const navigate = (destination, { replace = false } = {}) => {
    const nextUrl = new URL(destination, window.location.origin);
    const nextLocation = `${nextUrl.pathname}${nextUrl.search}${nextUrl.hash}`;
    window.history[replace ? 'replaceState' : 'pushState']({}, '', nextLocation);
    setCurrentLocation(nextLocation);
  };

  useEffect(() => {
    const onPopState = () => setCurrentLocation(readLocation());
    const onDocumentClick = (event) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      if (!(event.target instanceof Element)) return;
      const anchor = event.target.closest('a[href]');
      if (!anchor || anchor.target === '_blank' || anchor.hasAttribute('download')) return;

      const destination = new URL(anchor.href, window.location.href);
      if (destination.origin !== window.location.origin) return;
      if (destination.pathname === window.location.pathname && destination.search === window.location.search) return;

      event.preventDefault();
      navigate(`${destination.pathname}${destination.search}${destination.hash}`);
    };

    window.addEventListener('popstate', onPopState);
    document.addEventListener('click', onDocumentClick);
    return () => {
      window.removeEventListener('popstate', onPopState);
      document.removeEventListener('click', onDocumentClick);
    };
  }, []);

  useEffect(() => {
    setHomeCategory(requestedCategory);
    if (route.hash) {
      window.setTimeout(() => document.getElementById(decodeURIComponent(route.hash.slice(1)))?.scrollIntoView(), 0);
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [currentLocation]);

  return (
    <div className="flex min-h-screen flex-col">
      <Seo />
      <SiteIntro />
      <Header />
      <main className="flex-1">
        {path === '/' && (
          <>
            <HeroSlider />
            <ChargerCategories />
            <ProductCenter
              selectedCategory={homeCategory}
              onCategoryChange={(category) => {
                setHomeCategory(category);
                const query = category === 'All' ? '' : `?category=${encodeURIComponent(category)}`;
                navigate(`/${query}#products`, { replace: true });
              }}
              showAllProductsLink
            />
            <About />
          </>
        )}
        {isProductsPage && (
          <>
            <ChargerCategories />
            <ProductCenter
              selectedCategory={requestedCategory}
              onCategoryChange={(category) => navigate(
                category === 'All' ? '/products' : `/products?category=${encodeURIComponent(category)}`
              )}
            />
          </>
        )}
        {productDetailsMatch && <ProductDetails key={productDetailsMatch[1]} productId={productDetailsMatch[1]} />}
        {path === '/about' && <About />}
        {path === '/contact' && <Contact />}
        {!['/', '/products', '/about', '/contact'].includes(path) && !productDetailsMatch && <HeroSlider />}
      </main>
      <Footer />
    </div>
  );
}
