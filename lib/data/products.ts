// lib/data/products.ts

export type IncludeItem = { qty: number; item: string };

export type ProductImages = {
  desktop: string;
  tablet?: string;
  mobile?: string;
};

export type ProductGallery = {
  first: string;
  second: string;
  third: string;
};

export type Product = {
  slug: string;
  category: "headphones" | "speakers" | "earphones";
  name: string;
  description: string;
  isNew?: boolean;
  price: number;

  // Legacy (kept for compatibility with any existing code)
  image: string; // e.g. /assets/products/xx99-mk2/hero.png

  // New fields for the UI
  features: string;
  includes: IncludeItem[];
  images: ProductImages;
  gallery: ProductGallery;
  related: string[]; // array of slugs
};

export const PRODUCTS: Product[] = [
  // --------------------------------------
  // HEADPHONES
  // --------------------------------------
  {
    slug: "xx99-mark-two",
    category: "headphones",
    name: "XX99 Mark II Headphones",
    description:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    isNew: true,
    price: 2999,

    // legacy
    image: "/products/blackheadset.png",

    // new
    features:
      "Featuring a genuine leather head strap and premium earcup materials, the XX99 Mark II delivers an unparalleled listening experience with exceptional comfort and durability.",

      
    includes: [
      { qty: 1, item: "Headphone unit" },
      { qty: 2, item: "Replacement ear pads" },
      { qty: 1, item: "User manual" },
      { qty: 1, item: "3.5mm 5m audio cable" },
      { qty: 1, item: "Travel bag" },
    ],
    images: {
      desktop: "/products/blackheadset.png",
      tablet: "/products/blackheadset.png",
      mobile: "/products/blackheadset.png",
    },
    gallery: {
      first: "/feature/person.png",
      second: "/feature/tablephone.png",
      third: "/feature/halfheadset.png",
    },
    related: ["xx99-mark-one", "xx59", "zx9"],
  },

  {
    slug: "xx99-mark-one",
    category: "headphones",
    name: "XX99 Mark I Headphones",
    description:
      "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
    price: 1750,

    // legacy
    image: "/Home/gold.png",

    // new
    features:
      "Classic tuning with a warm, accurate response loved by studio professionals and enthusiasts alike. The Mark I delivers excellent isolation, dependable comfort and a durable design built to last.",
    includes: [
      { qty: 1, item: "Headphone unit" },
      { qty: 1, item: "User manual" },
      { qty: 1, item: "3.5mm audio cable" },
    ],
    images: {
      desktop: "/Home/gold.png",
      tablet: "/Home/gold.png",
      mobile: "/Home/gold.png",
    },
    gallery: {
      first: "/feature/speaker.png",
      second: "/feature/shoe.png",
      third: "/feature/light.png",
    },
    related: ["xx99-mark-two", "xx59", "zx7"],
  },

  {
    slug: "xx59",
    category: "headphones",
    name: "XX59 Headphones",
    description:
      " Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
    price: 899,

    // legacy
    image: "/products/whiteheadset.png",

    // new
    features:
      "These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.\n\nMore than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.",
    includes: [
      { qty: 1, item: "Headphone unit" },
      { qty: 1, item: "User manual" },
      { qty: 1, item: "3.5mm audio cable" },
    ],
    images: {
      desktop: "/products/whiteheadset.png",
      tablet: "/products/whiteheadset.png",
      mobile: "/products/whiteheadset.png",
    },
    gallery: {
      first: "/feature/woman.png",
      second: "/feature/book.png",
      third: "/feature/hand.png",
    },
    related: ["xx99-mark-one", "yx1", "zx7"],
  },

  // --------------------------------------
  // SPEAKERS
  // --------------------------------------
  {
    slug: "zx9",
    category: "speakers",
    name: "ZX9 Speaker",
    description:
      "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
    isNew: true,
    price: 4500,

    // legacy
    image: "/Home/fullspeaker.png",

    // new
    features:
      "Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).\n\nDiscover clear, more natural sounding highs than the competition with ZX9's signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5\" aluminum alloy bass unit. You'll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.",
    includes: [
      { qty: 2, item: "Speaker units" },
      { qty: 2, item: "Speaker grills" },
      { qty: 1, item: "User manual" },
      { qty: 2, item: "Speaker cables" },
    ],
    images: {
      desktop: "/Home/fullspeaker.png",
      tablet: "/Home/fullspeaker.png",
      mobile: "/Home/fullspeaker.png",
    },
    gallery: {
      first: "/feature/zoom.png",
      second: "/feature/studio.png",
      third: "/feature/double.png",
    },
    related: ["zx7", "xx99-mark-two", "yx1"],
  },

  {
    slug: "zx7",
    category: "speakers",
    name: "ZX7 Speaker",
    description: "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
    price: 2350,

    // legacy
    image: "/category/fullspeaker2.png",

    // new
    features:
      "Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.\n\nThe ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.",
    includes: [
      { qty: 2, item: "Speaker units" },
      { qty: 2, item: "Speaker grills" },
      { qty: 1, item: "User manual" },
      { qty: 2, item: "Speaker cables" },
    ],
    images: {
      desktop: "/category/fullspeaker2.png",
      tablet: "/category/fullspeaker2.png",
      mobile: "/category/fullspeaker2.png",
    },
    gallery: {
      first: "/feature/zoom2.png",
      second: "/feature/studio2.png",
      third: "/feature/side.png",
    },
    related: ["zx9", "xx59", "yx1"],
  },

  // --------------------------------------
  // EARPHONES
  // --------------------------------------
  {
    slug: "yx1",
    category: "earphones",
    name: "YX1 Wireless Earphones",
    description:
      "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
    isNew: true,
    price: 599,

    // legacy
    image: "/Home/closeearbuds.png",

    // new
    features:
      "Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.\n\nThe YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.",
    includes: [
      { qty: 2, item: "Earphone units" },
      { qty: 3, item: "Ear tip pairs" },
      { qty: 1, item: "Charging case" },
      { qty: 1, item: "USB-C cable" },
      { qty: 1, item: "User manual" },
    ],
    images: {
      desktop: "/Home/closeearbuds.png",
      tablet: "/Home/closeearbuds.png",
      mobile: "/Home/closeearbuds.png",
    },
    gallery: {
      first: "/feature/zoom3.png",
      second: "/feature/inside.png",
      third: "/feature/out.png",
    },
    related: ["xx59", "zx7", "xx99-mark-one"],
  },
];

// ------------------------------------------------------
// Small helpers (optional but handy in components/pages)
// ------------------------------------------------------
export const getProduct = (slug: string) =>
  PRODUCTS.find((p) => p.slug === slug);

export const getByCategory = (category: Product["category"]) =>
  PRODUCTS.filter((p) => p.category === category);
