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
  {
    src: '/images/Gemini_Generated_Image_dbh6sadbh6sadbh6.jfif',
    alt: 'Blue GreenTech battery charger displayed in a factory',
    eyebrow: 'A GREENTECH SOLUTION',
    title: 'Power you can rely on.',
    description: 'Smart battery charging, built for dependable everyday performance.',
    action: 'Explore chargers',
    href: '/products?category=Chargers',
    detailsHref: '/products/4?from=%2F',
  },
  {
    src: '/images/Gemini_Generated_Image_dbh6sadbh6sadbh6 (2).jfif',
    alt: 'Blue fast charger with retail packaging',
    eyebrow: 'SMART CHARGING',
    title: 'Reliable power. Longer life.',
    description: 'Discover chargers with intelligent control and overcharge protection.',
    action: 'Shop dry battery chargers',
    href: '/products?category=Dry%20Battery%20Chargers',
    detailsHref: '/products/1?from=%2F',
  },
  {
    src: '/images/Gemini_Generated_Image_dbh6sadbh6sadbh6 (3).jfif',
    alt: 'Fast lithium battery charger',
    eyebrow: 'MADE FOR LITHIUM',
    title: 'The right charge for every journey.',
    description: 'Explore charging solutions for lithium battery applications.',
    action: 'View lithium chargers',
    href: '/products?category=Lithium%20Chargers',
    detailsHref: '/products/8?from=%2F',
  },
  {
    src: '/images/Gemini_Generated_Image_o7metvo7metvo7me.jfif',
    alt: 'Battery chargers on a production testing line',
    eyebrow: 'QUALITY IN EVERY DETAIL',
    title: 'Tested for dependable performance.',
    description: 'Careful production and testing help us deliver reliable power solutions.',
    action: 'About our company',
    href: '/about',
    detailsHref: '/about',
  },
  {
    src: '/images/Gemini_Generated_Image_sizvaasizvaasizv.jfif',
    alt: 'Chargers being aging-tested in the factory',
    eyebrow: 'BUILT WITH CARE',
    title: 'Quality you can count on.',
    description: 'Learn more about the people and process behind our products.',
    action: 'Meet GreenTech',
    href: '/about',
    detailsHref: '/about',
  },
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
const IMG = {
  box: '/images/Gemini_Generated_Image_dbh6sadbh6sadbh6 (2).jfif',
  fan: '/images/Gemini_Generated_Image_dbh6sadbh6sadbh6 (1).jfif',
  vent: '/images/Gemini_Generated_Image_dbh6sadbh6sadbh6.jfif',
  lithium: '/images/Gemini_Generated_Image_dbh6sadbh6sadbh6 (3).jfif',
};
export const PRODUCTS = [
  { id: 1, name: 'Fast Charger 48V 10A', cat: 'Dry Battery Chargers', img: IMG.box, desc: 'MCU controlled smart charging with overcharge protection for dry batteries.' },
  { id: 2, name: 'Fast Charger 60V 10A', cat: 'Dry Battery Chargers', img: IMG.box, desc: 'High-current charger for 60V battery packs, long life and safety.' },
  { id: 3, name: 'One Lamp Charger', cat: 'Chargers', img: IMG.fan, desc: 'Single indicator lamp lead acid battery charger.' },
  { id: 4, name: 'Seven Lamp Charger', cat: 'Chargers', img: IMG.vent, desc: 'Seven-lamp level indicator charger.' },
  { id: 5, name: 'Twelve Lamp Charger', cat: 'Chargers', img: IMG.box, desc: 'Twelve-lamp level indicator charger.' },
  { id: 6, name: 'Digital Display Charger', cat: 'Digital Display Chargers', img: IMG.fan, desc: 'Digital display shows charging voltage and status.' },
  { id: 7, name: 'Big Screen Digital Display Charger', cat: 'Digital Display Chargers', img: IMG.vent, desc: 'Large digital screen for clear charging information.' },
  { id: 8, name: 'Lithium Charger NO.1', cat: 'Lithium Chargers', img: IMG.lithium, desc: 'Lithium battery charger for lithium battery packs.' },
  { id: 9, name: 'Lithium Charger NO.2', cat: 'Lithium Chargers', img: IMG.lithium, desc: 'Lithium battery charger, second model.' },
  { id: 10, name: '12V Chargers', cat: '12V Chargers', img: IMG.fan, desc: '12V lead acid battery chargers.' },
  { id: 11, name: 'White Controller', cat: 'Controllers', img: IMG.fan, desc: 'Controller for electric vehicles.' },
  { id: 12, name: 'Converter 10A-20A', cat: 'Converters', img: IMG.box, desc: 'DC converter, 10A to 20A models.' },
];
