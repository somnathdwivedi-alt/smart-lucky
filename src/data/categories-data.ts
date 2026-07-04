import { BRANDS, type Brand } from "../components/ui";
import { EXTRA_BRANDS } from "../components/shared";
import type { ToolRow } from "../components/shared";
import { PRODUCTS_DATA } from "./products-data";

export type CategoryInfo = {
  id: string;
  title: string;
  description: string;
  count: string;
  icon: string;
  bg: string;
  searchPlaceholder: string;
  items: ToolRow[];
  trending: string[];
  image?: string;
};

const b = (key: string): Brand =>
  (BRANDS as Record<string, Brand>)[key] || (EXTRA_BRANDS as Record<string, Brand>)[key] || { bg: "#64748b", label: "?" };

const p = (id: string): ToolRow | undefined => {
  const d = PRODUCTS_DATA[id];
  if (!d) return undefined;
  return {
    brand: b(d.brandKey),
    name: d.name,
    desc: d.description,
    rating: d.rating,
    meta: d.meta[0]?.value ?? "",
    badge: d.variants.find((v) => v.popular)?.price,
    badgeClass: "bg-indigo-50 text-indigo-600 ring-1 ring-indigo-200",
    id,
    route: "product",
  };
};

export const CATEGORIES: CategoryInfo[] = [
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description: "200+ tools to grow your digital presence — compared, rated and reviewed.",
    count: "200+ Offers",
    icon: "Monitor",
    bg: "bg-blue-500",
    image: "/images/digital.png",
    searchPlaceholder: "Search digital marketing tools...",
    trending: ["Google Ads", "SEO Tools", "Email Marketing", "Content Strategy", "Analytics"],
    items: [
      { brand: b("semrush"), name: "Semrush", desc: "All-in-one SEO & marketing toolkit", rating: 4.8, meta: "From $119.95/mo", badge: "30% OFF", id: "semrush" },
      { brand: b("canva"), name: "Canva Pro", desc: "Design platform for marketing assets", rating: 4.8, meta: "$12.99/mo", badge: "50% OFF", id: "canva" },
      { brand: b("hubspot"), name: "HubSpot", desc: "CRM, marketing & sales platform", rating: 4.5, meta: "From $45/mo", badge: "Free Plan", badgeClass: "bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200", id: "hubspot" },
      { brand: b("mailchimp"), name: "Mailchimp", desc: "Email marketing & automation", rating: 4.5, meta: "From $13/mo", badge: "Free Plan", badgeClass: "bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200", id: "mailchimp" },
      { brand: b("ahrefs"), name: "Ahrefs", desc: "SEO & competitor analysis", rating: 4.7, meta: "From $99/mo", badge: "Starts from $99", badgeClass: "bg-indigo-50 text-indigo-600 ring-1 ring-indigo-200", id: "ahrefs" },
    ],
  },
  {
    id: "affiliate-marketing",
    title: "Affiliate Marketing",
    description: "150+ affiliate programs to monetize your traffic — compared and reviewed.",
    count: "150+ Programs",
    icon: "Users",
    bg: "bg-violet-500",
    image: "/images/affiliate.png",
    searchPlaceholder: "Search affiliate programs...",
    trending: ["Amazon Associates", "ClickBank", "High Commission", "CPA Marketing", "Niche Sites"],
    items: [
      { brand: b("amazon"), name: "Amazon Associates", desc: "World's largest affiliate program", rating: 4.6, meta: "Commission: Up to 10%", badge: "Popular", badgeClass: "bg-orange-50 text-orange-600 ring-1 ring-orange-200", id: "amazon" },
      { brand: b("clickbank"), name: "ClickBank", desc: "Digital products marketplace", rating: 4.7, meta: "Commission: Up to 75%", badge: "Top Rated", badgeClass: "bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200", id: "clickbank" },
      { brand: b("impact"), name: "Impact", desc: "Partnership automation platform", rating: 4.6, meta: "Commission: Up to 40%", badge: "Premium", badgeClass: "bg-violet-50 text-violet-600 ring-1 ring-violet-200", id: "impact" },
      { brand: b("shareasale"), name: "ShareASale", desc: "Affiliate marketing network", rating: 4.5, meta: "Commission: Up to 20%", badge: "Trusted", badgeClass: "bg-indigo-50 text-indigo-600 ring-1 ring-indigo-200", id: "shareasale" },
      { brand: b("cj"), name: "CJ Affiliate", desc: "Enterprise affiliate network", rating: 4.5, meta: "Commission: Up to 30%", badge: "Verified", badgeClass: "bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200", id: "cj" },
    ],
  },
  {
    id: "advertising",
    title: "Advertising",
    description: "120+ advertising platforms to reach your audience — compared and rated.",
    count: "120+ Campaigns",
    icon: "Megaphone",
    bg: "bg-orange-500",
    image: "/images/business-communication-icon.png",
    searchPlaceholder: "Search advertising platforms...",
    trending: ["Google Ads", "Meta Ads", "TikTok Ads", "Programmatic", "Retargeting"],
    items: [
      { brand: b("googleads"), name: "Google Ads", desc: "Search & display advertising platform", rating: 4.8, meta: "From $0.50/click", badge: "40% Bonus Credit", badgeClass: "bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200", id: "googleads" },
      { brand: b("meta"), name: "Meta Ads", desc: "Facebook & Instagram advertising", rating: 4.7, meta: "From $0.30/click", badge: "20% OFF", badgeClass: "bg-indigo-50 text-indigo-600 ring-1 ring-indigo-200", id: "meta" },
      { brand: b("tiktok"), name: "TikTok Ads", desc: "Short video advertising platform", rating: 4.6, meta: "From $0.20/click", badge: "New Platform", badgeClass: "bg-slate-900 text-white ring-1 ring-slate-700", id: "tiktok" },
      { brand: b("linkedin"), name: "LinkedIn Ads", desc: "B2B advertising network", rating: 4.5, meta: "From $5/click", badge: "B2B Focus", badgeClass: "bg-blue-50 text-blue-600 ring-1 ring-blue-200", id: "linkedin" },
      { brand: b("pinterest"), name: "Pinterest Ads", desc: "Visual discovery advertising", rating: 4.4, meta: "From $0.50/click", badge: "Visual", badgeClass: "bg-red-50 text-red-600 ring-1 ring-red-200", id: "pinterest" },
    ],
  },
  {
    id: "seo-tools",
    title: "SEO Tools",
    description: "180+ tools to boost your SEO performance — compared, rated and reviewed.",
    count: "180+ Tools",
    icon: "Search",
    bg: "bg-indigo-600",
    image: "/images/chart-arrow-up-icon.png",
    searchPlaceholder: "Search SEO tools...",
    trending: ["Keyword Research", "Rank Tracking", "Backlink Tools", "Technical SEO", "Local SEO"],
    items: [
      { brand: b("semrush"), name: "Semrush", desc: "SEO, Content Marketing & Competitor Research", rating: 4.8, meta: "From $119.95/mo", badge: "30% OFF", id: "semrush" },
      { brand: b("ahrefs"), name: "Ahrefs", desc: "Backlink Analysis & SEO Toolset", rating: 4.7, meta: "From $99/mo", badge: "Starts from $99", badgeClass: "bg-indigo-50 text-indigo-600 ring-1 ring-indigo-200", id: "ahrefs" },
      { brand: b("moz"), name: "Moz Pro", desc: "SEO Software Suite for Rankings & Visibility", rating: 4.6, meta: "From $99/mo", badge: "30 Days Free Trial", badgeClass: "bg-violet-50 text-violet-600 ring-1 ring-violet-200", id: "moz" },
      { brand: b("ubersuggest"), name: "Ubersuggest", desc: "Keyword Research & SEO Audit Tool", rating: 4.5, meta: "From $29/mo", badge: "Free Plan Available", badgeClass: "bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200", id: "ubersuggest" },
      { brand: b("screamingfrog"), name: "Screaming Frog", desc: "SEO Spider Tool for Technical Site Audits", rating: 4.6, meta: "$259/year", badge: "Free Version", badgeClass: "bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200", id: "screamingfrog" },
      { brand: b("kwfinder"), name: "KWFinder", desc: "Keyword Research Tool by Mangools", rating: 4.6, meta: "From $29.90/mo", badge: "Starts from $29.90", badgeClass: "bg-indigo-50 text-indigo-600 ring-1 ring-indigo-200", id: "kwfinder" },
    ],
  },
  {
    id: "email-marketing",
    title: "Email Marketing",
    description: "90+ email marketing tools to nurture your audience — compared and rated.",
    count: "90+ Tools",
    icon: "Mail",
    bg: "bg-pink-500",
    image: "/images/email.png",
    searchPlaceholder: "Search email marketing tools...",
    trending: ["Email Automation", "Newsletters", "A/B Testing", "Deliverability", "Segmentation"],
    items: [
      { brand: b("mailchimp"), name: "Mailchimp", desc: "Email marketing & automation platform", rating: 4.5, meta: "From $13/mo", badge: "Free Plan", badgeClass: "bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200", id: "mailchimp" },
      { brand: b("hubspot"), name: "HubSpot", desc: "CRM-powered email marketing", rating: 4.5, meta: "From $45/mo", badge: "Free CRM", badgeClass: "bg-orange-50 text-orange-600 ring-1 ring-orange-200", id: "hubspot" },
      { brand: b("googleads"), name: "ConvertKit", desc: "Email for creators & publishers", rating: 4.4, meta: "From $29/mo", badge: "Creator Focus", badgeClass: "bg-indigo-50 text-indigo-600 ring-1 ring-indigo-200", id: "convertkit" },
      { brand: b("canva"), name: "ActiveCampaign", desc: "Email & marketing automation", rating: 4.5, meta: "From $15/mo", badge: "Automation", badgeClass: "bg-violet-50 text-violet-600 ring-1 ring-violet-200", id: "activecampaign" },
      { brand: b("semrush"), name: "Constant Contact", desc: "Easy email marketing for small biz", rating: 4.3, meta: "From $12/mo", badge: "Free Trial", badgeClass: "bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200", id: "constantcontact" },
    ],
  },
  {
    id: "ai-marketing",
    title: "AI Marketing",
    description: "100+ AI-powered marketing tools to work smarter — compared and rated.",
    count: "100+ Tools",
    icon: "BrainCircuit",
    bg: "bg-slate-900",
    image: "/images/aimarketing.png",
    searchPlaceholder: "Search AI marketing tools...",
    trending: ["AI Copywriting", "AI Image Generation", "ChatGPT", "AI Analytics", "Automation"],
    items: [
      { brand: b("chatgpt"), name: "ChatGPT", desc: "AI-powered content & copywriting", rating: 4.7, meta: "From $20/mo", badge: "Best AI Tool", badgeClass: "bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200", id: "chatgpt" },
      { brand: b("canva"), name: "Canva AI", desc: "AI-powered design platform", rating: 4.8, meta: "$12.99/mo", badge: "AI Features", badgeClass: "bg-indigo-50 text-indigo-600 ring-1 ring-indigo-200", id: "canva" },
      { brand: b("grammarly"), name: "Grammarly", desc: "AI writing & grammar assistant", rating: 4.6, meta: "From $12/mo", badge: "Free Plan", badgeClass: "bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200", id: "grammarly" },
      { brand: b("semrush"), name: "Semrush AI", desc: "AI content marketing toolkit", rating: 4.8, meta: "From $119.95/mo", badge: "30% OFF", id: "semrush" },
      { brand: b("notion"), name: "Notion AI", desc: "AI-powered workspace & docs", rating: 4.6, meta: "From $10/mo", badge: "AI Add-on", badgeClass: "bg-violet-50 text-violet-600 ring-1 ring-violet-200", id: "notion" },
    ],
  },
  {
    id: "web-hosting",
    title: "Web Hosting",
    description: "80+ hosting providers to power your website — compared and reviewed.",
    count: "80+ Offers",
    icon: "Server",
    bg: "bg-blue-600",
    image: "/images/webhosting.png",
    searchPlaceholder: "Search hosting providers...",
    trending: ["Shared Hosting", "VPS", "WordPress Hosting", "Dedicated Server", "Cloud Hosting"],
    items: [
      { brand: b("hostinger"), name: "Hostinger", desc: "Budget-friendly web hosting", rating: 4.6, meta: "From $2.49/mo", badge: "80% OFF", id: "hostinger" },
      { brand: b("clickfunnels"), name: "ClickFunnels", desc: "All-in-one funnel hosting", rating: 4.7, meta: "From $127/mo", badge: "14 Days Free", badgeClass: "bg-orange-50 text-orange-600 ring-1 ring-orange-200", id: "clickfunnels" },
      { brand: b("envato"), name: "Envato Elements", desc: "Creative assets & templates", rating: 4.5, meta: "$16.50/mo", badge: "Unlimited", badgeClass: "bg-violet-50 text-violet-600 ring-1 ring-violet-200", id: "envato" },
      { brand: b("canva"), name: "SiteGround", desc: "Reliable WordPress hosting", rating: 4.5, meta: "From $3.99/mo", badge: "Free SSL", badgeClass: "bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200", id: "siteground" },
      { brand: b("ahrefs"), name: "Bluehost", desc: "Official WordPress recommended host", rating: 4.4, meta: "From $2.95/mo", badge: "Free Domain", badgeClass: "bg-indigo-50 text-indigo-600 ring-1 ring-indigo-200", id: "bluehost" },
    ],
  },
  {
    id: "ecommerce",
    title: "Ecommerce",
    description: "70+ ecommerce platforms to sell online — compared and rated.",
    count: "70+ Platforms",
    icon: "ShoppingCart",
    bg: "bg-amber-500",
    image: "/images/ecommerce.png",
    searchPlaceholder: "Search ecommerce platforms...",
    trending: ["Shopify", "WooCommerce", "BigCommerce", "Dropshipping", "Payment Gateways"],
    items: [
      { brand: b("amazon"), name: "Shopify", desc: "All-in-one ecommerce platform", rating: 4.7, meta: "From $29/mo", badge: "Free Trial", badgeClass: "bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200", id: "shopify" },
      { brand: b("canva"), name: "WooCommerce", desc: "WordPress ecommerce plugin", rating: 4.6, meta: "Free", badge: "Free", badgeClass: "bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200", id: "woocommerce" },
      { brand: b("clickfunnels"), name: "BigCommerce", desc: "Enterprise ecommerce solution", rating: 4.5, meta: "From $29.95/mo", badge: "Enterprise", badgeClass: "bg-indigo-50 text-indigo-600 ring-1 ring-indigo-200", id: "bigcommerce" },
      { brand: b("semrush"), name: "Squarespace", desc: "Website builder & ecommerce", rating: 4.4, meta: "From $16/mo", badge: "All-in-One", badgeClass: "bg-violet-50 text-violet-600 ring-1 ring-violet-200", id: "squarespace" },
      { brand: b("hostinger"), name: "Wix", desc: "Drag-and-drop website builder", rating: 4.4, meta: "From $16/mo", badge: "Free Plan", badgeClass: "bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200", id: "wix" },
    ],
  },
  {
    id: "social-media-tools",
    title: "Social Media Tools",
    description: "60+ social media management tools — compared and rated.",
    count: "60+ Tools",
    icon: "ThumbsUp",
    bg: "bg-sky-500",
    image: "/images/socials.png",
    searchPlaceholder: "Search social media tools...",
    trending: ["Scheduling", "Analytics", "Content Creation", "Social Listening", "Influencer Marketing"],
    items: [
      { brand: b("buffer"), name: "Buffer", desc: "Social media scheduling & analytics", rating: 4.5, meta: "From $6/mo", badge: "Free Plan", badgeClass: "bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200", id: "buffer" },
      { brand: b("canva"), name: "Canva Pro", desc: "Design social media graphics", rating: 4.8, meta: "$12.99/mo", badge: "50% OFF", id: "canva" },
      { brand: b("chatgpt"), name: "Hootsuite", desc: "Enterprise social media management", rating: 4.4, meta: "From $99/mo", badge: "Free Trial", badgeClass: "bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200", id: "hootsuite" },
      { brand: b("grammarly"), name: "Later", desc: "Visual social media scheduling", rating: 4.4, meta: "From $25/mo", badge: "Free Plan", badgeClass: "bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200", id: "later" },
      { brand: b("notion"), name: "Sprout Social", desc: "Social media management platform", rating: 4.3, meta: "From $249/mo", badge: "Enterprise", badgeClass: "bg-indigo-50 text-indigo-600 ring-1 ring-indigo-200", id: "sproutsocial" },
    ],
  },
  {
    id: "content-marketing",
    title: "Content Marketing",
    description: "50+ content marketing tools to create & distribute content — compared and rated.",
    count: "50+ Tools",
    icon: "PenLine",
    bg: "bg-emerald-500",
    image: "/images/content.png",
    searchPlaceholder: "Search content marketing tools...",
    trending: ["Content Creation", "SEO Writing", "Content Planning", "Distribution", "Analytics"],
    items: [
      { brand: b("canva"), name: "Canva Pro", desc: "Design content for any platform", rating: 4.8, meta: "$12.99/mo", badge: "50% OFF", id: "canva" },
      { brand: b("semrush"), name: "Semrush", desc: "Content marketing & SEO toolkit", rating: 4.8, meta: "From $119.95/mo", badge: "30% OFF", id: "semrush" },
      { brand: b("chatgpt"), name: "ChatGPT", desc: "AI content generation assistant", rating: 4.7, meta: "From $20/mo", badge: "Best AI Tool", badgeClass: "bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200", id: "chatgpt" },
      { brand: b("grammarly"), name: "Grammarly", desc: "AI writing & content improvement", rating: 4.6, meta: "From $12/mo", badge: "Free Plan", badgeClass: "bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200", id: "grammarly" },
      { brand: b("notion"), name: "Notion", desc: "Content planning & documentation", rating: 4.6, meta: "From $10/mo", badge: "Free Plan", badgeClass: "bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200", id: "notion" },
    ],
  },
  /* ══════════════════════════════════════════════════
     PRODUCT CATEGORIES
     ══════════════════════════════════════════════════ */
  {
    id: "laptops",
    title: "Laptops",
    description: "The latest laptops from top brands — compared, rated and reviewed.",
    count: "50+ Models",
    icon: "Monitor",
    bg: "bg-indigo-600",
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=600&h=400&fit=crop",
    searchPlaceholder: "Search laptops...",
    trending: ["MacBook Pro", "Gaming Laptops", "Ultrabooks", "Budget Laptops", "2-in-1"],
    items: [
      p("macbook-pro-14"),
      p("dell-xps-16"),
    ].filter(Boolean) as ToolRow[],
  },
  {
    id: "smartphones",
    title: "Smartphones",
    description: "The best smartphones compared — from flagship to budget, find your perfect device.",
    count: "80+ Phones",
    icon: "Smartphone",
    bg: "bg-emerald-500",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=400&fit=crop",
    searchPlaceholder: "Search smartphones...",
    trending: ["iPhone 16 Pro", "Galaxy S25", "Pixel 10", "Flagship Cameras", "5G Phones"],
    items: [
      p("iphone-16-pro"),
      p("galaxy-s25-ultra"),
    ].filter(Boolean) as ToolRow[],
  },
  {
    id: "audio",
    title: "Audio",
    description: "Premium headphones, earbuds and speakers — rated by sound quality and value.",
    count: "60+ Devices",
    icon: "Headphones",
    bg: "bg-violet-500",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=400&fit=crop",
    searchPlaceholder: "Search audio devices...",
    trending: ["Noise Cancelling", "Wireless Earbuds", "Over-Ear", "Hi-Res Audio", "Spatial Audio"],
    items: [
      p("airpods-max-2"),
      p("sony-wh1000xm6"),
    ].filter(Boolean) as ToolRow[],
  },
  {
    id: "wearables",
    title: "Wearables",
    description: "Smartwatches, fitness trackers and wearable tech — compared for every lifestyle.",
    count: "40+ Devices",
    icon: "Watch",
    bg: "bg-amber-500",
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600&h=400&fit=crop",
    searchPlaceholder: "Search wearables...",
    trending: ["Apple Watch", "Fitness Tracking", "GPS Watches", "Health Monitoring", "Smart Bands"],
    items: [
      p("apple-watch-ultra-3"),
    ].filter(Boolean) as ToolRow[],
  },
  {
    id: "sneakers",
    title: "Sneakers",
    description: "The hottest sneaker releases — performance, style and comfort compared.",
    count: "100+ Pairs",
    icon: "Footprints",
    bg: "bg-orange-500",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=400&fit=crop",
    searchPlaceholder: "Search sneakers...",
    trending: ["Nike Air Max", "Adidas Ultraboost", "Running Shoes", "Lifestyle", "Limited Edition"],
    items: [
      p("nike-air-max-2025"),
      p("adidas-ultraboost-25"),
    ].filter(Boolean) as ToolRow[],
  },
  {
    id: "clothing",
    title: "Clothing",
    description: "Trending apparel from top fashion brands — curated, styled and reviewed.",
    count: "200+ Items",
    icon: "Shirt",
    bg: "bg-pink-500",
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600&h=400&fit=crop",
    searchPlaceholder: "Search clothing...",
    trending: ["Denim", "Blazers", "Sustainable Fashion", "Streetwear", "Office Wear"],
    items: [
      p("levis-501-2025"),
      p("zara-wool-blazer"),
    ].filter(Boolean) as ToolRow[],
  },
  {
    id: "appliances",
    title: "Appliances",
    description: "Smart home appliances that make life easier — compared and rated by experts.",
    count: "70+ Appliances",
    icon: "Plug",
    bg: "bg-blue-500",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=600&h=400&fit=crop",
    searchPlaceholder: "Search appliances...",
    trending: ["Vacuum Cleaners", "Stand Mixers", "Smart Home", "Kitchen Gadgets", "Cleaning"],
    items: [
      p("dyson-v15-detect"),
      p("kitchenaid-artisan-stand"),
    ].filter(Boolean) as ToolRow[],
  },
  {
    id: "electronics",
    title: "Electronics & TVs",
    description: "Top-rated TVs, monitors and home entertainment — find your perfect screen.",
    count: "50+ Devices",
    icon: "Tv",
    bg: "bg-slate-900",
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=600&h=400&fit=crop",
    searchPlaceholder: "Search electronics...",
    trending: ["OLED TVs", "Gaming Monitors", "4K HDR", "Home Theater", "Smart TVs"],
    items: [
      p("sony-bravia-xr-65"),
    ].filter(Boolean) as ToolRow[],
  },
];

export function getCategory(id: string): CategoryInfo | undefined {
  return CATEGORIES.find((c) => c.id === id);
}
