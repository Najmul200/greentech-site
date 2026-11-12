import { useEffect } from 'react';
// Placeholder SEO manager. Fill the props per page. (Use react-helmet-async if you prefer.)
export default function Seo({
  title = 'A GreenTech Solution | Battery Chargers & Controllers Manufacturer', // TODO
  description = 'Fast MCU-controlled battery chargers with overcharge protection.', // TODO
  image = '/images/slide-1-poster.png',
  url = 'https://yourdomain.com/', // TODO
}) {
  useEffect(() => {
    document.title = title;
    const set = (attr, key, val) => {
      let el = document.head.querySelector(`meta[${attr}="${key}"]`);
      if (!el) { el = document.createElement('meta'); el.setAttribute(attr, key); document.head.appendChild(el); }
      el.setAttribute('content', val);
    };
    set('name', 'description', description);
    set('property', 'og:title', title);
    set('property', 'og:description', description);
    set('property', 'og:image', image);
    set('property', 'og:url', url);
    set('property', 'og:type', 'website');
  }, [title, description, image, url]);
  return null;
}
