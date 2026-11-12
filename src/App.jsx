import { useState } from 'react';
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

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  const queryCategory = new URLSearchParams(window.location.search).get('category');
  const requestedCategory = CATEGORIES.includes(queryCategory) ? queryCategory : 'All';
  const [homeCategory, setHomeCategory] = useState(requestedCategory);
  const isProductsPage = path === '/products';
  const productDetailsMatch = path.match(/^\/products\/(\d+)$/);

  return (
    <>
      <Seo />
      <SiteIntro />
      <Header />
      <main>
        {path === '/' && (
          <>
            <HeroSlider />
            <ChargerCategories />
            <ProductCenter
              selectedCategory={homeCategory}
              onCategoryChange={(category) => {
                setHomeCategory(category);
                const query = category === 'All' ? '' : `?category=${encodeURIComponent(category)}`;
                window.history.replaceState(null, '', `/${query}#products`);
              }}
              showAllProductsLink
            />
          </>
        )}
        {isProductsPage && (
          <>
            <ChargerCategories />
            <ProductCenter
              selectedCategory={requestedCategory}
              onCategoryChange={(category) => {
                window.location.href = category === 'All'
                  ? '/products'
                  : `/products?category=${encodeURIComponent(category)}`;
              }}
            />
          </>
        )}
        {productDetailsMatch && <ProductDetails productId={productDetailsMatch[1]} />}
        {path === '/about' && <About />}
        {path === '/contact' && <Contact />}
        {!['/', '/products', '/about', '/contact'].includes(path) && !productDetailsMatch && <HeroSlider />}
      </main>
      <Footer />
    </>
  );
}
