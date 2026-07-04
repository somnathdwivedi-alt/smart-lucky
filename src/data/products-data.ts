export type ProductMeta = { label: string; value: string };
export type ProductFeature = { iconName: string; name: string; desc: string };
export type ProductVariant = { name: string; price: string; desc: string; cta: string; popular: boolean };
export type ProductReview = { n: string; role: string; r: number; t: string };
export type ProductFaq = { q: string; a: string };

export type ProductData = {
  brandKey: string;
  name: string;
  rating: number;
  reviewCount: string;
  description: string;
  image: string;
  gallery?: string[];
  overview?: string[];
  meta: ProductMeta[];
  features: ProductFeature[];
  variants: ProductVariant[];
  alternatives: { brandKey: string; name: string; rating: number }[];
  faqs: ProductFaq[];
  reviews: ProductReview[];
  category: string;
};

export const PRODUCTS_DATA: Record<string, ProductData> = {
  /* ═══════════════════ LAPTOPS & COMPUTERS ═══════════════════ */
  "macbook-pro-14": {
    brandKey: "apple",
    name: "MacBook Pro 14″ M4",
    rating: 4.8,
    reviewCount: "12,400 Reviews",
    description: "The most powerful MacBook Pro ever — supercharged by the M4 chip for extraordinary performance, stunning Liquid Retina XDR display, and all-day battery life.",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&h=500&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=800&h=500&fit=crop", "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800&h=500&fit=crop", "https://images.unsplash.com/photo-1625766763788-95dcce9bf5ac?w=800&h=500&fit=crop"],
    overview: [
      "The MacBook Pro 14″ with the M4 chip delivers a groundbreaking combination of performance and efficiency. Whether you're compiling code, editing 8K video, or running complex simulations, it handles everything with ease.",
      "The Liquid Retina XDR display with ProMotion brings HDR content to life with 1000 nits sustained brightness and 1600 nits peak. The 1080p FaceTime HD camera, six-speaker sound system, and studio-quality three-mic array make it the ultimate pro laptop.",
    ],
    category: "laptops",
    meta: [
      { label: "Price", value: "From $1,599" },
      { label: "Chip", value: "M4 Pro / M4 Max" },
      { label: "Display", value: "14.2″ Liquid Retina XDR" },
      { label: "RAM", value: "16GB – 48GB Unified" },
      { label: "Storage", value: "512GB – 8TB SSD" },
      { label: "Battery", value: "Up to 22 hours" },
    ],
    features: [
      { iconName: "Cpu", name: "M4 Chip", desc: "Up to 14-core CPU, 40-core GPU" },
      { iconName: "Monitor", name: "Liquid Retina XDR", desc: "ProMotion 120Hz, 1600 nits" },
      { iconName: "Battery", name: "All-Day Battery", desc: "Up to 22 hours video playback" },
      { iconName: "Fingerprint", name: "Touch ID", desc: "Secure unlock & payments" },
      { iconName: "Wifi", name: "Wi-Fi 7", desc: "Next-gen wireless connectivity" },
      { iconName: "Usb", name: "Thunderbolt 5", desc: "Up to 120Gb/s transfer" },
    ],
    variants: [
      { name: "M4 Pro 14-Core", price: "$1,599", desc: "24GB RAM, 512GB SSD — for most professionals.", cta: "Buy Now", popular: false },
      { name: "M4 Pro 20-Core", price: "$1,999", desc: "48GB RAM, 1TB SSD — for power users.", cta: "Buy Now", popular: true },
      { name: "M4 Max 40-Core", price: "$3,199", desc: "48GB RAM, 1TB SSD — for extreme workflows.", cta: "Buy Now", popular: false },
    ],
    alternatives: [
      { brandKey: "dell", name: "Dell XPS 16", rating: 4.6 },
      { brandKey: "lenovo", name: "Lenovo ThinkPad X1", rating: 4.5 },
      { brandKey: "hp", name: "HP Spectre x360", rating: 4.4 },
      { brandKey: "asus", name: "ASUS ROG Zephyrus", rating: 4.5 },
    ],
    reviews: [
      { n: "Alex Chen", role: "Software Engineer", r: 5, t: "The M4 MacBook Pro is an absolute beast. Compilation times dropped by 40% compared to my Intel Mac. The display is phenomenal for long coding sessions." },
      { n: "Maya Torres", role: "Video Editor", r: 5, t: "Editing 8K ProRes footage is buttery smooth. The XDR display is a game-changer for color grading. Battery lasts me two full workdays." },
      { n: "James Wilson", role: "Designer", r: 4.5, t: "Incredible machine. Only wish it had a touchscreen. Otherwise, best laptop I've ever owned." },
    ],
    faqs: [
      { q: "Is the MacBook Pro 14″ good for gaming?", a: "While not a dedicated gaming laptop, the M4 Max GPU can run many AAA titles at high settings. However, game compatibility is limited compared to Windows laptops." },
      { q: "Can I connect external monitors?", a: "Yes — M4 Pro supports up to 2 external displays, M4 Max supports up to 4 displays at up to 8K resolution via Thunderbolt 5." },
      { q: "Is the RAM upgradeable?", a: "No — the RAM is unified and soldered. Choose your configuration at purchase as it cannot be upgraded later." },
    ],
  },

  "dell-xps-16": {
    brandKey: "dell",
    name: "Dell XPS 16",
    rating: 4.6,
    reviewCount: "8,200 Reviews",
    description: "The Dell XPS 16 combines a stunning 4K OLED display with Intel Core Ultra processors in an infinitely slim design. Perfect for creators and professionals.",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&h=500&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?w=800&h=500&fit=crop", "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&h=500&fit=crop"],
    category: "laptops",
    meta: [
      { label: "Price", value: "From $1,499" },
      { label: "Processor", value: "Intel Core Ultra 9" },
      { label: "Display", value: "16.3″ 4K OLED Touch" },
      { label: "RAM", value: "16GB – 64GB LPDDR5x" },
      { label: "Storage", value: "512GB – 4TB SSD" },
      { label: "Battery", value: "Up to 16 hours" },
    ],
    features: [
      { iconName: "Monitor", name: "4K OLED Display", desc: "100% DCI-P3, VESA HDR 500" },
      { iconName: "Cpu", name: "Intel Core Ultra", desc: "Up to 16 cores, AI Boost NPU" },
      { iconName: "Gpu", name: "NVIDIA RTX 4070", desc: "Dedicated graphics for creators" },
      { iconName: "Fingerprint", name: "Windows Hello", desc: "IR camera & fingerprint reader" },
      { iconName: "Wifi", name: "Wi-Fi 7", desc: "Intel BE200 wireless" },
      { iconName: "Usb", name: "Thunderbolt 4", desc: "40Gb/s USB-C with PD" },
    ],
    variants: [
      { name: "Core Ultra 7", price: "$1,499", desc: "16GB RAM, 512GB SSD, FHD+ display.", cta: "Buy Now", popular: false },
      { name: "Core Ultra 9", price: "$1,999", desc: "32GB RAM, 1TB SSD, 4K OLED.", cta: "Buy Now", popular: true },
      { name: "Ultra 9 + RTX 4070", price: "$2,499", desc: "64GB RAM, 2TB SSD, 4K OLED.", cta: "Buy Now", popular: false },
    ],
    alternatives: [
      { brandKey: "macbook-pro-14", name: "MacBook Pro 14″", rating: 4.8 },
      { brandKey: "lenovo", name: "Lenovo ThinkPad X1", rating: 4.5 },
      { brandKey: "hp", name: "HP Spectre x360", rating: 4.4 },
      { brandKey: "asus", name: "ASUS ZenBook Pro", rating: 4.4 },
    ],
    reviews: [
      { n: "Priya Sharma", role: "UX Designer", r: 5, t: "The OLED display is absolutely stunning. Colors are incredibly vibrant. Perfect for my design workflow." },
      { n: "David Kim", role: "Data Analyst", r: 4, t: "Great build quality and performance. Battery life is good but not as advertised. Still a solid machine." },
    ],
    faqs: [
      { q: "Does the XPS 16 have a touchscreen?", a: "Yes, the 4K OLED configuration includes a touchscreen with anti-reflective coating." },
      { q: "Can I upgrade the RAM later?", a: "No — the RAM is soldered on the XPS 16. Choose your configuration at checkout." },
    ],
  },

  /* ═══════════════════ SMARTPHONES ═══════════════════ */
  "iphone-16-pro": {
    brandKey: "apple",
    name: "iPhone 16 Pro",
    rating: 4.7,
    reviewCount: "28,500 Reviews",
    description: "The ultimate iPhone — powered by A18 Pro chip, pro camera system with 48MP Fusion + 5x Telephoto, and Apple Intelligence for a smarter, more personal experience.",
    image: "/images/Apple iPhone 16 Pro 256 GB.jpg",
    gallery: ["/images/Iphone 16 pro max desert titanium.jpg", "/images/Iphone 16.jpg", "/images/iphone16.jpg", "/images/iPhone 16 Pro Max White ASMR Unboxing  #unboxing #iphone16 #asmr #trending #shorts.jpg", "/images/iPhone 16 Pro max 🎉Apple iPhone 16 Pro Max Giveaway.jpg", "/images/iPhone 16 pro max in black.jpg"],
    category: "smartphones",
    meta: [
      { label: "Price", value: "From $999" },
      { label: "Chip", value: "A18 Pro" },
      { label: "Display", value: "6.3″ Super Retina XDR" },
      { label: "Camera", value: "48MP + 48MP + 12MP" },
      { label: "Battery", value: "Up to 28h video" },
      { label: "Storage", value: "256GB – 1TB" },
    ],
    features: [
      { iconName: "Camera", name: "Pro Camera System", desc: "48MP Fusion + 5x Telephoto" },
      { iconName: "Cpu", name: "A18 Pro Chip", desc: "3nm, 16-core Neural Engine" },
      { iconName: "Monitor", name: "ProMotion Display", desc: "120Hz always-on, 2000 nits" },
      { iconName: "Battery", name: "All-Day Battery", desc: "Up to 28 hours video playback" },
      { iconName: "Shield", name: "Titanium Design", desc: "Grade 5 titanium, Ceramic Shield" },
      { iconName: "Wifi", name: "Wi-Fi 7 + USB-C", desc: "Ultra-fast transfers & charging" },
    ],
    variants: [
      { name: "iPhone 16 Pro", price: "$999", desc: "256GB storage, 8GB RAM.", cta: "Buy Now", popular: false },
      { name: "iPhone 16 Pro Max", price: "$1,199", desc: "6.9″ display, 512GB, 12GB RAM.", cta: "Buy Now", popular: true },
      { name: "iPhone 16 Pro Max 1TB", price: "$1,599", desc: "Max storage, all pro features.", cta: "Buy Now", popular: false },
    ],
    alternatives: [
      { brandKey: "samsung", name: "Samsung Galaxy S25 Ultra", rating: 4.7 },
      { brandKey: "google", name: "Google Pixel 10 Pro", rating: 4.6 },
      { brandKey: "oneplus", name: "OnePlus 14", rating: 4.5 },
      { brandKey: "xiaomi", name: "Xiaomi 15 Pro", rating: 4.4 },
    ],
    reviews: [
      { n: "Sarah T.", role: "Photographer", r: 5, t: "The camera system is unreal. The 5x telephoto gives me DSLR-quality shots. Apple Intelligence makes editing a breeze." },
      { n: "Mike L.", role: "Tech Reviewer", r: 4.5, t: "Best iPhone yet. A18 Pro is blazing fast, battery lasts two days, and the titanium build feels premium." },
    ],
    faqs: [
      { q: "Is the iPhone 16 Pro worth upgrading from the 15 Pro?", a: "If you want the 5x telephoto, larger display, and Apple Intelligence features, yes. Otherwise, the 15 Pro remains very capable." },
      { q: "Does it support USB-C fast charging?", a: "Yes — up to 45W wired charging via USB-C, and 25W MagSafe wireless charging." },
    ],
  },

  "galaxy-s25-ultra": {
    brandKey: "samsung",
    name: "Samsung Galaxy S25 Ultra",
    rating: 4.7,
    reviewCount: "22,100 Reviews",
    description: "Samsung's most advanced smartphone with Galaxy AI, a 200MP camera system, built-in S Pen, and the powerful Snapdragon 8 Elite processor.",
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=800&h=500&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800&h=500&fit=crop", "https://images.unsplash.com/photo-1678911820864-e2c567c655d7?w=800&h=500&fit=crop"],
    category: "smartphones",
    meta: [
      { label: "Price", value: "From $1,299" },
      { label: "Processor", value: "Snapdragon 8 Elite" },
      { label: "Display", value: "6.9″ Dynamic AMOLED 2X" },
      { label: "Camera", value: "200MP + 50MP + 50MP" },
      { label: "Battery", value: "5000mAh" },
      { label: "S Pen", value: "Built-in" },
    ],
    features: [
      { iconName: "Camera", name: "200MP Camera", desc: "8K video, AI-powered editing" },
      { iconName: "Cpu", name: "Snapdragon 8 Elite", desc: "3nm, dedicated AI engine" },
      { iconName: "Monitor", name: "Dynamic AMOLED 2X", desc: "120Hz, 2600 nits peak" },
      { iconName: "Pen", name: "S Pen Built-in", desc: "Precision writing & drawing" },
      { iconName: "Battery", name: "5000mAh + 45W", desc: "All-day battery, fast charging" },
      { iconName: "Shield", name: "Galaxy AI", desc: "Live Translate, AI summarise" },
    ],
    variants: [
      { name: "Galaxy S25 Ultra", price: "$1,299", desc: "256GB, 12GB RAM, Phantom Black.", cta: "Buy Now", popular: false },
      { name: "Galaxy S25 Ultra+", price: "$1,499", desc: "512GB, 16GB RAM, Titanium Gray.", cta: "Buy Now", popular: true },
      { name: "Galaxy S25 Ultra 1TB", price: "$1,799", desc: "1TB, 16GB RAM, exclusive colors.", cta: "Buy Now", popular: false },
    ],
    alternatives: [
      { brandKey: "iphone-16-pro", name: "iPhone 16 Pro Max", rating: 4.7 },
      { brandKey: "google", name: "Google Pixel 10 Pro", rating: 4.6 },
      { brandKey: "oneplus", name: "OnePlus 14", rating: 4.5 },
      { brandKey: "xiaomi", name: "Xiaomi 15 Pro", rating: 4.4 },
    ],
    reviews: [
      { n: "Carlos M.", role: "Tech Enthusiast", r: 5, t: "The S Pen makes this a productivity powerhouse. Galaxy AI features like Live Translate are genuinely useful daily." },
      { n: "Aisha K.", role: "Content Creator", r: 4.5, t: "Camera is incredible — the 200MP sensor captures insane detail. Video stabilization is best in class." },
    ],
    faqs: [
      { q: "Does the S25 Ultra support DeX?", a: "Yes — Samsung DeX works wirelessly or via USB-C, turning your phone into a desktop experience." },
      { q: "Is the battery removable?", a: "No — the 5000mAh battery is sealed. It supports 45W wired and 15W wireless charging." },
    ],
  },

  /* ═══════════════════ HEADPHONES & AUDIO ═══════════════════ */
  "airpods-max-2": {
    brandKey: "apple",
    name: "AirPods Max 2",
    rating: 4.6,
    reviewCount: "9,800 Reviews",
    description: "Reimagined over-ear headphones with H2 chip, Adaptive Audio, USB-C, and up to 40 hours of battery life. Stunning sound with personalized spatial audio.",
    image: "https://images.unsplash.com/photo-1628202926206-c63a34b1618f?w=800&h=500&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1625766763788-95dcce9bf5ac?w=800&h=500&fit=crop", "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?w=800&h=500&fit=crop"],
    category: "audio",
    meta: [
      { label: "Price", value: "$549" },
      { label: "Chip", value: "Apple H2" },
      { label: "Battery", value: "40 hours" },
      { label: "Audio", value: "Spatial Audio" },
      { label: "Noise Cancel", value: "Active + Adaptive" },
      { label: "Weight", value: "385g" },
    ],
    features: [
      { iconName: "Music", name: "Spatial Audio", desc: "Personalized, dynamic head tracking" },
      { iconName: "Shield", name: "Adaptive Noise Control", desc: "ANC + Transparency seamlessly" },
      { iconName: "Battery", name: "40-Hour Battery", desc: "Quick charge: 5min = 3hr playtime" },
      { iconName: "Mic", name: "Voice Isolation", desc: "Crystal clear calls, wind blocked" },
      { iconName: "Usb", name: "USB-C + Lossless", desc: "Wired lossless with USB-C audio" },
      { iconName: "Palette", name: "5 Colors", desc: "Midnight, Starlight, Blue, Purple, Orange" },
    ],
    variants: [
      { name: "AirPods Max 2", price: "$549", desc: "Standard model, all colors.", cta: "Buy Now", popular: true },
    ],
    alternatives: [
      { brandKey: "sony", name: "Sony WH-1000XM6", rating: 4.7 },
      { brandKey: "bose", name: "Bose QC Ultra", rating: 4.6 },
      { brandKey: "beats", name: "Beats Studio Pro", rating: 4.4 },
    ],
    reviews: [
      { n: "Daniel O.", role: "Music Producer", r: 4.5, t: "Sound quality is phenomenal. Spatial audio with head tracking is immersive. USB-C lossless is a welcome addition." },
      { n: "Emma R.", role: "Frequent Flyer", r: 4, t: "ANC is top-tier. Battery lasts entire international flights. A bit heavy but worth it for the comfort and sound." },
    ],
    faqs: [
      { q: "Are AirPods Max 2 waterproof?", a: "No — they are sweat and water resistant but not waterproof. Avoid submerging in water." },
      { q: "Do they work with Android?", a: "Yes, but features like Spatial Audio and Siri are limited to Apple devices. Bluetooth pairing works universally." },
    ],
  },

  "sony-wh1000xm6": {
    brandKey: "sony",
    name: "Sony WH-1000XM6",
    rating: 4.7,
    reviewCount: "15,200 Reviews",
    description: "The industry standard for noise-cancelling headphones — now with the新一代 Integrated Processor V2, 8 microphones for ultimate call clarity, and 50-hour battery life.",
    image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=800&h=500&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&h=500&fit=crop", "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=500&fit=crop"],
    category: "audio",
    meta: [
      { label: "Price", value: "$399" },
      { label: "Processor", value: "Integrated V2" },
      { label: "Battery", value: "50 hours" },
      { label: "Audio", value: "LDAC + DSEE Extreme" },
      { label: "Noise Cancel", value: "Auto NC Optimizer" },
      { label: "Weight", value: "250g" },
    ],
    features: [
      { iconName: "Shield", name: "Industry ANC", desc: "Auto Noise Cancelling Optimizer" },
      { iconName: "Battery", name: "50-Hour Battery", desc: "3min charge = 3hr playback" },
      { iconName: "Mic", name: "8-Mic System", desc: "Precise voice pickup, wind reduction" },
      { iconName: "Music", name: "Hi-Res Audio", desc: "LDAC wireless + DSEE Extreme upscaling" },
      { iconName: "Star", name: "Sony 360 Reality", desc: "Immersive spatial audio experience" },
      { iconName: "Wifi", name: "Multi-Point", desc: "Connect 2 devices simultaneously" },
    ],
    variants: [
      { name: "WH-1000XM6", price: "$399", desc: "Best-in-class ANC, 50hr battery.", cta: "Buy Now", popular: true },
      { name: "WH-1000XM6 Premium", price: "$449", desc: "Includes carry case + airline adapter.", cta: "Buy Now", popular: false },
    ],
    alternatives: [
      { brandKey: "airpods-max-2", name: "AirPods Max 2", rating: 4.6 },
      { brandKey: "bose", name: "Bose QC Ultra", rating: 4.6 },
      { brandKey: "beats", name: "Beats Studio Pro", rating: 4.4 },
    ],
    reviews: [
      { n: "Liam N.", role: "Commuter", r: 5, t: "The ANC is magical — I can't hear a thing on the subway. 50-hour battery means I charge once every two weeks." },
      { n: "Sophie B.", role: "Remote Worker", r: 4.5, t: "Call quality is dramatically improved with the 8-mic system. My team can hear me clearly even in coffee shops." },
    ],
    faqs: [
      { q: "Are these comfortable for glasses wearers?", a: "Yes — the ear cups are deep and padded with soft foam. They accommodate glasses without pressure points." },
      { q: "Do they support aptX?", a: "No — Sony uses LDAC for high-quality wireless audio, which is superior to aptX on supported devices." },
    ],
  },

  /* ═══════════════════ SMARTWATCHES ═══════════════════ */
  "apple-watch-ultra-3": {
    brandKey: "apple",
    name: "Apple Watch Ultra 3",
    rating: 4.7,
    reviewCount: "6,500 Reviews",
    description: "The most rugged and capable Apple Watch ever — precision dual-frequency GPS, 100m water resistance, 86-hour battery life, and a bright 3000-nit display.",
    image: "https://images.unsplash.com/photo-1600856209923-34372e319a5d?w=800&h=500&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1617625802912-c7379f6e366e?w=800&h=500&fit=crop", "https://images.unsplash.com/photo-1517502884422-41eaaced0168?w=800&h=500&fit=crop"],
    category: "wearables",
    meta: [
      { label: "Price", value: "$799" },
      { label: "Display", value: "49mm, 3000 nits" },
      { label: "Chip", value: "S10 SiP" },
      { label: "Battery", value: "86 hours" },
      { label: "Water Res.", value: "100m (WR100)" },
      { label: "Materials", value: "Titanium" },
    ],
    features: [
      { iconName: "Battery", name: "86-Hour Battery", desc: "Low-power mode, fast charging" },
      { iconName: "Compass", name: "Dual-Frequency GPS", desc: "Precision tracking, all conditions" },
      { iconName: "Shield", name: "100m Water Res.", desc: "Dive certification, depth gauge" },
      { iconName: "Heart", name: "Health Monitoring", desc: "ECG, SpO2, temperature sensor" },
      { iconName: "Action", name: "Action Button", desc: "Programmable shortcut key" },
      { iconName: "Siren", name: "Emergency Siren", desc: "86dB siren for safety" },
    ],
    variants: [
      { name: "Ultra 3", price: "$799", desc: "Titanium case, all bands included.", cta: "Buy Now", popular: true },
    ],
    alternatives: [
      { brandKey: "samsung", name: "Galaxy Watch 7 Ultra", rating: 4.5 },
      { brandKey: "google", name: "Pixel Watch 3", rating: 4.4 },
      { brandKey: "fossil", name: "Fossil Gen 8", rating: 4.2 },
    ],
    reviews: [
      { n: "Tom H.", role: "Trail Runner", r: 5, t: "The GPS is incredibly accurate even in dense forests. Battery lasts my entire ultra-marathon. Worth every penny." },
      { n: "Rachel Z.", role: "Scuba Diver", r: 4.5, t: "Took it diving to 40m — performed flawlessly. The depth gauge and water temperature logging are fantastic." },
    ],
    faqs: [
      { q: "Can I use it for scuba diving?", a: "Yes — it's certified to 100m and includes a built-in depth gauge, water temperature sensor, and dive computer functionality." },
      { q: "Does it work with Android?", a: "No — Apple Watch requires an iPhone. It's not compatible with Android devices." },
    ],
  },

  /* ═══════════════════ FASHION — SNEAKERS ═══════════════════ */
  "nike-air-max-2025": {
    brandKey: "nike",
    name: "Nike Air Max 2025",
    rating: 4.6,
    reviewCount: "14,800 Reviews",
    description: "The future of comfort — full-length Nike Air unit, Flyknit recycled upper, and a bold new silhouette. Designed for movement, built for the planet.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=500&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&h=500&fit=crop", "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&h=500&fit=crop"],
    category: "sneakers",
    meta: [
      { label: "Price", value: "$190" },
      { label: "Upper", value: "Flyknit Recycled" },
      { label: "Sole", value: "Full-Length Air" },
      { label: "Weight", value: "340g (US 9)" },
      { label: "Colors", value: "12 Options" },
      { label: "Release", value: "Spring 2025" },
    ],
    features: [
      { iconName: "Heart", name: "Full-Length Air", desc: "Max cushioning, responsive feel" },
      { iconName: "Leaf", name: "Sustainable Upper", desc: "100% recycled Flyknit material" },
      { iconName: "Star", name: "Modern Silhouette", desc: "Bold new design language" },
      { iconName: "Footprints", name: "All-Day Comfort", desc: "Padded collar, plush insole" },
    ],
    variants: [
      { name: "Air Max 2025", price: "$190", desc: "Standard width, all colors.", cta: "Shop Now", popular: true },
      { name: "Air Max 2025 SE", price: "$220", desc: "Premium materials, limited edition.", cta: "Shop Now", popular: false },
    ],
    alternatives: [
      { brandKey: "adidas", name: "Adidas Ultraboost 25", rating: 4.5 },
      { brandKey: "puma", name: "Puma Rise Pro", rating: 4.3 },
      { brandKey: "new-balance", name: "New Balance 1080v14", rating: 4.5 },
    ],
    reviews: [
      { n: "Jordan P.", role: "Runner", r: 5, t: "Most comfortable Nikes I've ever worn. The full-length Air unit makes every step feel like walking on clouds." },
      { n: "Mia K.", role: "Fashion Blogger", r: 4, t: "Love the sustainable materials and the futuristic look. Runs slightly narrow — go half a size up." },
    ],
    faqs: [
      { q: "Are they true to size?", a: "Most customers recommend going half a size up, especially if you have wide feet or plan to wear thick socks." },
      { q: "Are they good for running?", a: "The Air Max 2025 is designed as a lifestyle sneaker with running-inspired comfort. For serious running, consider Nike's dedicated running line." },
    ],
  },

  "adidas-ultraboost-25": {
    brandKey: "adidas",
    name: "Adidas Ultraboost 25",
    rating: 4.5,
    reviewCount: "11,200 Reviews",
    description: "The legendary Ultraboost returns — with 30% more Boost foam, a new Primeknit+ upper, and Continental™ rubber outsole for unparalleled energy return.",
    image: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?w=800&h=500&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&h=500&fit=crop", "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=800&h=500&fit=crop"],
    category: "sneakers",
    meta: [
      { label: "Price", value: "$180" },
      { label: "Upper", value: "Primeknit+" },
      { label: "Midsole", value: "Boost 2.0" },
      { label: "Weight", value: "310g (US 9)" },
      { label: "Colors", value: "8 Options" },
      { label: "Outsole", value: "Continental™" },
    ],
    features: [
      { iconName: "Heart", name: "Boost 2.0 Foam", desc: "30% more energy return" },
      { iconName: "Star", name: "Primeknit+ Upper", desc: "Adaptive fit, recycled yarns" },
      { iconName: "Footprints", name: "Continental Outsole", desc: "Superior grip, wet or dry" },
      { iconName: "Leaf", name: "Sustainable Design", desc: "Made with recycled materials" },
    ],
    variants: [
      { name: "Ultraboost 25", price: "$180", desc: "Core colors, standard fit.", cta: "Shop Now", popular: true },
      { name: "Ultraboost 25 LTD", price: "$220", desc: "Limited colorway, premium box.", cta: "Shop Now", popular: false },
    ],
    alternatives: [
      { brandKey: "nike", name: "Nike Air Max 2025", rating: 4.6 },
      { brandKey: "puma", name: "Puma Rise Pro", rating: 4.3 },
      { brandKey: "new-balance", name: "New Balance 1080v14", rating: 4.5 },
    ],
    reviews: [
      { n: "Ryan S.", role: "Marathon Runner", r: 5, t: "Best running shoes I've owned. The Boost 2.0 foam gives incredible energy return. I shaved 3 minutes off my 10K time." },
      { n: "Olivia M.", role: "Casual Wearer", r: 4.5, t: "Unbelievably comfortable for all-day wear. The Primeknit upper stretches perfectly. Worth every dollar." },
    ],
    faqs: [
      { q: "Are Ultraboost 25 good for wide feet?", a: "Yes — the Primeknit+ upper stretches to accommodate wide feet, but a wide size option is also available." },
      { q: "How do I clean them?", a: "Remove the insoles and laces, hand wash with mild soap and cold water, and air dry. Machine washing is not recommended." },
    ],
  },

  /* ═══════════════════ FASHION — CLOTHING ═══════════════════ */
  "levis-501-2025": {
    brandKey: "levis",
    name: "Levi's 501 Original 2025",
    rating: 4.5,
    reviewCount: "32,000 Reviews",
    description: "The iconic 501 Original Fit — reissued with sustainable Cottonized Hemp™ blend, updated modern fit, and the same legendary craftsmanship since 1873.",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&h=500&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=800&h=500&fit=crop", "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?w=800&h=500&fit=crop"],
    category: "clothing",
    meta: [
      { label: "Price", value: "$98" },
      { label: "Fit", value: "Original Straight" },
      { label: "Material", value: "Cottonized Hemp™" },
      { label: "Sizes", value: "28–42 Waist" },
      { label: "Colors", value: "7 Washes" },
      { label: "Origin", value: "Since 1873" },
    ],
    features: [
      { iconName: "Leaf", name: "Sustainable Hemp", desc: "Uses 50% less water than cotton" },
      { iconName: "Star", name: "Iconic Design", desc: "Straight fit, button fly, 5-pocket" },
      { iconName: "Heart", name: "All-Day Comfort", desc: "Stretch comfort, broken-in feel" },
      { iconName: "Shield", name: "Built to Last", desc: "Reinforced stitching, durable denim" },
    ],
    variants: [
      { name: "501 Original", price: "$98", desc: "Classic straight fit, medium wash.", cta: "Shop Now", popular: true },
      { name: "501 '90s", price: "$108", desc: "Loose fit, vintage-inspired wash.", cta: "Shop Now", popular: false },
    ],
    alternatives: [
      { brandKey: "calvinklein", name: "Calvin Klein Straight", rating: 4.3 },
      { brandKey: "tommys", name: "Tommy Hilfiger Denim", rating: 4.2 },
      { brandKey: "zara", name: "Zara Straight Jeans", rating: 4.1 },
    ],
    reviews: [
      { n: "Jake R.", role: "Fashion Consultant", r: 5, t: "The 501 is timeless. The new hemp blend is softer than traditional denim and looks even better. My go-to jeans for life." },
      { n: "Emma L.", role: "Designer", r: 4.5, t: "Love that Levi's is using sustainable materials without compromising on quality or style. Fit is consistent." },
    ],
    faqs: [
      { q: "How do 501s fit compared to 511s?", a: "501s are a straight/regular fit through the thigh and leg, while 511s are a slim fit. Size down if you prefer a slimmer look." },
      { q: "Do they shrink?", a: "These are pre-shrunk, but minimal shrinkage (1-2%) may occur on first wash. Follow care instructions to minimize." },
    ],
  },

  "zara-wool-blazer": {
    brandKey: "zara",
    name: "ZARA Wool Blazer",
    rating: 4.3,
    reviewCount: "4,200 Reviews",
    description: "A modern tailoring essential — Italian wool-blend fabric, relaxed fit, notched lapels, and a fully lined interior. Perfect for smart-casual and office wear.",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&h=500&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&h=500&fit=crop", "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=500&fit=crop"],
    category: "clothing",
    meta: [
      { label: "Price", value: "$159" },
      { label: "Material", value: "54% Wool, 46% Polyester" },
      { label: "Fit", value: "Relaxed" },
      { label: "Sizes", value: "XS – XXL" },
      { label: "Colors", value: "Navy, Black, Grey" },
      { label: "Care", value: "Dry Clean" },
    ],
    features: [
      { iconName: "Star", name: "Italian Wool Blend", desc: "Premium fabric, structured drape" },
      { iconName: "Heart", name: "Fully Lined", desc: "Silk-like interior, easy on/off" },
      { iconName: "Shield", name: "Notched Lapels", desc: "Classic collar, versatile look" },
      { iconName: "Leaf", name: "Two-Button Closure", desc: "Modern fit, flattering silhouette" },
    ],
    variants: [
      { name: "Wool Blazer", price: "$159", desc: "Relaxed fit, navy, standard sizing.", cta: "Shop Now", popular: true },
      { name: "Wool Blazer Slim", price: "$159", desc: "Slim fit, black, tailored look.", cta: "Shop Now", popular: false },
    ],
    alternatives: [
      { brandKey: "hnm", name: "H&M Wool Blazer", rating: 4.0 },
      { brandKey: "tommys", name: "Tommy Hilfiger Blazer", rating: 4.2 },
    ],
    reviews: [
      { n: "Carlos D.", role: "Professional", r: 4.5, t: "Excellent quality for the price. The fabric has a nice weight to it and drapes well. Perfect for the office." },
      { n: "Nina P.", role: "Stylist", r: 4, t: "Great relaxed silhouette that can be dressed up or down. Runs slightly large — size down for a more fitted look." },
    ],
    faqs: [
      { q: "Is this suit separates compatible?", a: "Yes — ZARA offers matching trousers sold separately in the same fabric and color." },
      { q: "Can I machine wash it?", a: "No — dry clean only due to the wool content and structured construction." },
    ],
  },

  /* ═══════════════════ HOME & KITCHEN ═══════════════════ */
  "dyson-v15-detect": {
    brandKey: "dyson",
    name: "Dyson V15 Detect",
    rating: 4.7,
    reviewCount: "18,600 Reviews",
    description: "The most intelligent cordless vacuum — Laser Slim Fluffy™ head reveals microscopic dust, Piezo sensor counts particles, and Auto mode optimizes power across floor types.",
    image: "/images/DYSON V15 Detect.jpg",
    gallery: ["/images/Dyson 15 Detect Absolute.jpg", "/images/Dyson v15 detect™.jpg"],
    category: "appliances",
    meta: [
      { label: "Price", value: "$749" },
      { label: "Battery", value: "60 minutes" },
      { label: "Suction", value: "230 AW" },
      { label: "Bin Size", value: "0.76L" },
      { label: "Weight", value: "6.8 lbs" },
      { label: "Filtration", value: "HEPA Whole-Machine" },
    ],
    features: [
      { iconName: "Laser", name: "Laser Slim Fluffy™", desc: "Reveals invisible dust on hard floors" },
      { iconName: "Cpu", name: "Piezo Sensor", desc: "Counts particles, shows real-time data" },
      { iconName: "Battery", name: "60-Min Run Time", desc: "Removable battery, quick charge" },
      { iconName: "Leaf", name: "Auto Mode", desc: "Adjusts suction for carpet vs hard floor" },
      { iconName: "Shield", name: "HEPA Filtration", desc: "Traps 99.99% of particles" },
      { iconName: "Usb", name: "LCD Screen", desc: "Real-time performance dashboard" },
    ],
    variants: [
      { name: "V15 Detect", price: "$749", desc: "Full kit with Laser head, complete tools.", cta: "Buy Now", popular: true },
      { name: "V15 Detect+", price: "$849", desc: "Extra battery, additional tool kit.", cta: "Buy Now", popular: false },
    ],
    alternatives: [
      { brandKey: "samsung_appliances", name: "Samsung Bespoke Jet", rating: 4.5 },
      { brandKey: "bosch", name: "Bosch Unlimited 8", rating: 4.4 },
      { brandKey: "roomba", name: "Roomba j9+", rating: 4.5 },
    ],
    reviews: [
      { n: "Helen T.", role: "Homeowner", r: 5, t: "The laser head is not a gimmick — I was shocked to see how much dust I was missing. The LCD screen showing particle count is addictively satisfying." },
      { n: "Mark W.", role: "Pet Owner", r: 4.5, t: "With two shedding dogs, this vacuum is a lifesaver. The auto mode detects when I move from hardwood to carpet and adjusts power instantly." },
    ],
    faqs: [
      { q: "Is it suitable for pet hair?", a: "Absolutely — the V15 Detect comes with a motorized pet tool and anti-tangle technology that wraps hair around the brush bar for easy removal." },
      { q: "Can it replace an upright vacuum?", a: "For most homes, yes. The 60-minute battery covers average-sized homes. For very large homes, consider the V15 Detect+ with an extra battery." },
    ],
  },

  "kitchenaid-artisan-stand": {
    brandKey: "kitchenaid",
    name: "KitchenAid Artisan Stand Mixer",
    rating: 4.8,
    reviewCount: "45,000 Reviews",
    description: "The iconic KitchenAid Artisan Series 5-Quart Stand Mixer — legendary durability, 10 speeds, tilt-head design, and endless attachment possibilities for every kitchen.",
    image: "https://images.unsplash.com/photo-1595122245592-2cc35e8d531a?w=800&h=500&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1588690074211-f187a55ad06a?w=800&h=500&fit=crop", "https://images.unsplash.com/photo-1578643463396-0997cb5328c1?w=800&h=500&fit=crop"],
    category: "appliances",
    meta: [
      { label: "Price", value: "$449" },
      { label: "Capacity", value: "5 Quart" },
      { label: "Speeds", value: "10" },
      { label: "Power", value: "325 Watts" },
      { label: "Weight", value: "26 lbs" },
      { label: "Colors", value: "30+ Colors" },
    ],
    features: [
      { iconName: "Heart", name: "5-Quart Capacity", desc: "Bakes 9 dozen cookies in one batch" },
      { iconName: "Star", name: "10 Speeds", desc: "Precise mixing from stir to whip" },
      { iconName: "Shield", name: "Tilt-Head Design", desc: "Easy access to bowl and beater" },
      { iconName: "Cpu", name: "Planetary Action", desc: "Thorough ingredient incorporation" },
      { iconName: "Palette", name: "30+ Signature Colors", desc: "Match any kitchen aesthetic" },
      { iconName: "Usb", name: "Attachment Hub", desc: "Pasta maker, grinder, spiralizer + more" },
    ],
    variants: [
      { name: "Artisan 5-Quart", price: "$449", desc: "Tilt-head, includes coated flat beater.", cta: "Buy Now", popular: true },
      { name: "Artisan Mini", price: "$349", desc: "3.5-quart, compact for smaller kitchens.", cta: "Buy Now", popular: false },
      { name: "Pro Line 7-Quart", price: "$699", desc: "Bowl-lift, 1HP motor, commercial grade.", cta: "Buy Now", popular: false },
    ],
    alternatives: [
      { brandKey: "bosch", name: "Bosch Universal Plus", rating: 4.5 },
      { brandKey: "smeg", name: "Smeg Retro Stand Mixer", rating: 4.3 },
    ],
    reviews: [
      { n: "Martha G.", role: "Home Baker", r: 5, t: "Had mine for 12 years and it's still going strong. The Artisan handles everything from bread dough to whipped cream. A lifetime investment." },
      { n: "Chef Antoine", role: "Pastry Chef", r: 5, t: "I use these in my professional kitchen. Consistent results every time. The attachment system is incredibly versatile." },
    ],
    faqs: [
      { q: "Can it knead bread dough?", a: "Yes — the Artisan can handle up to 4 loaves of bread dough at once. Use the dough hook on speed 2 for best results." },
      { q: "What attachments are included?", a: "Comes with a coated flat beater, dough hook, and wire whip. Over 15 additional attachments are available separately." },
    ],
  },

  /* ═══════════════════ ELECTRONICS — TV ═══════════════════ */
  "sony-bravia-xr-65": {
    brandKey: "sony",
    name: "Sony Bravia XR A90L 65″",
    rating: 4.8,
    reviewCount: "7,300 Reviews",
    description: "Sony's flagship OLED TV — the Cognitive Processor XR™ delivers lifelike picture quality, Acoustic Surface Audio+, and Google TV with hands-free voice control.",
    image: "/images/Sony 75\" Class Bravia 9 II True RGB 4K HDR with Gemini in Black - Smart Google TV.jpg",
    gallery: ["/images/Sony BRAVIA 2M2 65\" 4K Google TV – Premium Cinematic Experience.jpg", "/images/Sony Bravia 139 cm (55 inches) 4K Ultra HD Smart LED Google TV KD-55X74L (Black).jpg", "/images/Test Sony Bravia 9 II _ ultra lumineux et sans reflets, le Mini-Led RGB de Sony prouve qu'il peut co.jpg"],
    category: "electronics",
    meta: [
      { label: "Price", value: "$2,799" },
      { label: "Display", value: "65″ 4K OLED" },
      { label: "Processor", value: "Cognitive XR" },
      { label: "HDR", value: "Dolby Vision, HDR10+" },
      { label: "Audio", value: "Acoustic Surface+" },
      { label: "Smart TV", value: "Google TV" },
    ],
    features: [
      { iconName: "Monitor", name: "XR OLED Contrast Pro", desc: "Deep blacks, vibrant colors" },
      { iconName: "Cpu", name: "Cognitive Processor XR", desc: "Cross-analyzes picture & sound" },
      { iconName: "Music", name: "Acoustic Surface Audio+", desc: "Sound comes from the screen itself" },
      { iconName: "Star", name: "Dolby Vision & Atmos", desc: "Cinematic HDR and immersive audio" },
      { iconName: "Gamepad", name: "PS5 Ready", desc: "4K/120Hz, VRR, ALLM" },
      { iconName: "Wifi", name: "Google TV", desc: "Hands-free voice, Chromecast built-in" },
    ],
    variants: [
      { name: "55″ A90L", price: "$1,999", desc: "55-inch, perfect for medium rooms.", cta: "Buy Now", popular: false },
      { name: "65″ A90L", price: "$2,799", desc: "65-inch, best-selling, immersive viewing.", cta: "Buy Now", popular: true },
      { name: "77″ A90L", price: "$4,499", desc: "77-inch, cinematic home theater.", cta: "Buy Now", popular: false },
    ],
    alternatives: [
      { brandKey: "samsung", name: "Samsung S95D OLED", rating: 4.7 },
      { brandKey: "lg", name: "LG G4 OLED", rating: 4.7 },
      { brandKey: "xiaomi", name: "Xiaomi TV Master", rating: 4.3 },
    ],
    reviews: [
      { n: "Peter H.", role: "Home Theater Enthusiast", r: 5, t: "The picture quality is breathtaking. Blacks are truly black, and the XR processor makes everything look stunning. Best TV I've ever owned." },
      { n: "Lisa C.", role: "Film Critic", r: 5, t: "Color accuracy out of the box is phenomenal. Acoustic Surface Audio makes dialogue crystal clear. A reference-grade television." },
    ],
    faqs: [
      { q: "Is it good for gaming?", a: "Yes — 4K/120Hz, VRR, ALLM, and low input lag make it one of the best TVs for PS5 and Xbox Series X." },
      { q: "Does it support Dolby Vision?", a: "Yes — Dolby Vision, Dolby Atmos, HDR10, and HDR10+ are all supported." },
    ],
  },
};
