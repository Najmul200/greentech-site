// Edit everything here: contact details, slides, products.
export const SITE = {
  name: 'A GreenTech Solution',
  phone: '+8801966433392',
  email: 'info@yourdomain.com',            // TODO: replace
  address: 'Your factory address, Bangladesh', // TODO: replace
  facebook: 'https://facebook.com/',       // TODO: replace
  founded: 'XXXX', // TODO: your real founding year
  area: 'X,000 sq. m.', // TODO: your real factory area
};

export const NAV = [
  { label: 'HOME', href: '/' },
  { label: 'PRODUCTS', href: '/products' },
  { label: 'ABOUT US', href: '/about' },
  { label: 'CONTACT US', href: '/contact' },
];

export const SLIDES = [
  { src: '/images/slide-2-charger-box.png', alt: 'Blue MCU controlled fast charger with retail box' },
  { src: '/images/slide-3-testing-lab.png', alt: 'Chargers being aging-tested in the factory test cabinet' },
  { src: '/images/slide-4-fan-side.png', alt: 'Fan-cooled blue battery charger, side view' },
  { src: '/images/slide-5-vent-side.png', alt: 'Ventilated blue battery charger with power cable' },
  { src: '/images/slide-6-front.png', alt: 'Blue battery charger front view with EU plug' },
];

export const ABOUT = {
  heading: 'A GreenTech Solution',
  paragraphs: [
    'A GreenTech Solution is a professional, market-oriented electronic components company. We focus on the research and production of lead acid battery chargers, lead acid battery charging equipment, lithium battery chargers, lithium battery charging equipment, 12V chargers, controllers, converters and inverters.',
    'Our factory is equipped with lean production lines, automatic SMT (patch) production, automatic high-speed insertion machines and a variety of precision testing equipment, including multi-station aging cabinets. A strong and effective manufacturing chain gives us a solid foundation for sustainable development.',
    'We will continue to work hard to create a better future together with you!',
  ],
  stats: [['MCU', 'Smart control'], ['100%', 'Aging tested'], ['24/7', 'WhatsApp support']],
};

export const CATEGORIES = ['All', 'Dry Battery Chargers', 'Chargers', 'Lithium Chargers', '12V Chargers', 'Digital Display Chargers', 'Controllers', 'Converters'];

// Product names follow the reference site's Product Center. Replace img/desc with your own.
const IMG = { box: '/images/slide-2-charger-box.png', fan: '/images/slide-4-fan-side.png', vent: '/images/slide-5-vent-side.png', front: '/images/slide-6-front.png' };
export const PRODUCTS = [
  { id: 1, name: 'Fast Charger 48V 10A', cat: 'Dry Battery Chargers', img: IMG.box, desc: 'MCU controlled smart charging with overcharge protection for dry batteries.' },
  { id: 2, name: 'Fast Charger 60V 10A', cat: 'Dry Battery Chargers', img: IMG.front, desc: 'High-current charger for 60V battery packs, long life and safety.' },
  { id: 3, name: 'One Lamp Charger', cat: 'Chargers', img: IMG.fan, desc: 'Single indicator lamp lead acid battery charger.' },
  { id: 4, name: 'Seven Lamp Charger', cat: 'Chargers', img: IMG.vent, desc: 'Seven-lamp level indicator charger.' },
  { id: 5, name: 'Twelve Lamp Charger', cat: 'Chargers', img: IMG.front, desc: 'Twelve-lamp level indicator charger.' },
  { id: 6, name: 'Digital Display Charger', cat: 'Digital Display Chargers', img: IMG.fan, desc: 'Digital display shows charging voltage and status.' },
  { id: 7, name: 'Big Screen Digital Display Charger', cat: 'Digital Display Chargers', img: IMG.vent, desc: 'Large digital screen for clear charging information.' },
  { id: 8, name: 'Lithium Charger NO.1', cat: 'Lithium Chargers', img: IMG.box, desc: 'Lithium battery charger for lithium battery packs.' },
  { id: 9, name: 'Lithium Charger NO.2', cat: 'Lithium Chargers', img: IMG.front, desc: 'Lithium battery charger, second model.' },
  { id: 10, name: '12V Chargers', cat: '12V Chargers', img: IMG.fan, desc: '12V lead acid battery chargers.' },
  { id: 11, name: 'White Controller', cat: 'Controllers', img: IMG.vent, desc: 'Controller for electric vehicles.' },
  { id: 12, name: 'Converter 10A-20A', cat: 'Converters', img: IMG.front, desc: 'DC converter, 10A to 20A models.' },
];
