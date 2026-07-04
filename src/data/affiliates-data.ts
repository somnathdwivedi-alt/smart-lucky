export type AffStat = { label: string; value: string; accent: string };
export type AffCommissionRow = { cat: string; rate: string; cookie: string };
export type AffResource = { iconName: string; label: string };
export type AffPayout = { iconName: string; label: string };
export type AffFaq = { q: string; a: string };

export type AffiliateData = {
  brandKey: string;
  name: string;
  rating: number;
  reviewCount: string;
  description: string;
  tags: { label: string; iconName: string; color: string; ringColor: string }[];
  stats: AffStat[];
  requirements: string[];
  pros: string[];
  cons: string[];
  commissionTable: AffCommissionRow[];
  resources: AffResource[];
  payouts: AffPayout[];
  faqs: AffFaq[];
  related: { brandKey: string; name: string; rate: string; rating: number }[];
  earningsDefault: { visitors: number; conversion: number; aov: number };
};

export const AFFILIATES_DATA: Record<string, AffiliateData> = {
  amazon: {
    brandKey: "amazon",
    name: "Amazon Associates",
    rating: 4.6,
    reviewCount: "12K+ Reviews",
    description:
      "The Amazon Associates Program helps content creators, publishers and bloggers monetize their traffic with the world's largest product catalog.",
    tags: [
      { label: "Popular", iconName: "Flame", color: "bg-orange-50 text-orange-600 ring-orange-200", ringColor: "ring-orange-200" },
      { label: "Easy to Join", iconName: "BadgeCheck", color: "bg-emerald-50 text-emerald-600 ring-emerald-200", ringColor: "ring-emerald-200" },
      { label: "Trusted", iconName: "Globe", color: "bg-indigo-50 text-indigo-600 ring-indigo-200", ringColor: "ring-indigo-200" },
      { label: "1–3 Days Approval", iconName: "CalendarClock", color: "bg-violet-50 text-violet-600 ring-violet-200", ringColor: "ring-violet-200" },
    ],
    stats: [
      { label: "Commission", value: "Up to 10%", accent: "text-emerald-600" },
      { label: "Cookie Duration", value: "24 Hours", accent: "text-slate-900" },
      { label: "Payment", value: "Monthly", accent: "text-slate-900" },
      { label: "Countries", value: "Global", accent: "text-slate-900" },
    ],
    requirements: [
      "An active website, blog, app or YouTube channel",
      "Original content updated within the last 60 days",
      "3 qualified sales within the first 180 days",
      "Clear affiliate disclosure on your platform",
    ],
    pros: [
      "Huge product catalog — something for every niche",
      "High conversion rates from trusted brand",
      "Earn on entire cart, not just linked product",
      "Fast, simple approval process",
    ],
    cons: [
      "Short 24-hour cookie duration",
      "Commission rates lowered in recent years",
      "Strict compliance & disclosure rules",
    ],
    commissionTable: [
      { cat: "Luxury Beauty", rate: "10%", cookie: "24 Hours" },
      { cat: "Digital Music", rate: "5%", cookie: "24 Hours" },
      { cat: "Physical Books", rate: "4.5%", cookie: "24 Hours" },
      { cat: "Digital Products", rate: "4%", cookie: "24 Hours" },
      { cat: "Amazon Devices", rate: "4%", cookie: "24 Hours" },
      { cat: "Toys & Furniture", rate: "3%", cookie: "24 Hours" },
    ],
    resources: [
      { iconName: "ImageIcon", label: "Banners" },
      { iconName: "Link2", label: "Text Links" },
      { iconName: "Package", label: "Product Links" },
      { iconName: "PlugZap", label: "API Access" },
      { iconName: "Gift", label: "Widgets" },
    ],
    payouts: [
      { iconName: "Banknote", label: "Bank Transfer" },
      { iconName: "Wallet", label: "PayPal" },
      { iconName: "CreditCard", label: "Wire Transfer" },
      { iconName: "Gift", label: "Amazon Gift Card" },
    ],
    faqs: [
      { q: "How do I join the Amazon Associates program?", a: "Sign up with your website, app or YouTube channel. Approval usually takes 1–3 days, and you must generate 3 qualified sales within 180 days to remain in the program." },
      { q: "When do affiliates get paid?", a: "Payments are issued monthly, approximately 60 days after the end of the month in which the commission was earned." },
      { q: "Is there a minimum payout threshold?", a: "Yes — $10 for direct deposit and gift cards, $100 for checks." },
      { q: "Can I promote links on social media?", a: "Yes, as long as your accounts are listed in your Associates profile and you disclose the affiliate relationship." },
    ],
    related: [
      { brandKey: "clickbank", name: "ClickBank", rate: "Up to 75%", rating: 4.7 },
      { brandKey: "impact", name: "Impact", rate: "Up to 40%", rating: 4.6 },
      { brandKey: "shareasale", name: "ShareASale", rate: "Up to 20%", rating: 4.5 },
      { brandKey: "cj", name: "CJ Affiliate", rate: "Up to 30%", rating: 4.5 },
    ],
    earningsDefault: { visitors: 10000, conversion: 2, aov: 50 },
  },
  clickbank: {
    brandKey: "clickbank",
    name: "ClickBank",
    rating: 4.7,
    reviewCount: "5,200 Reviews",
    description:
      "ClickBank is a leading affiliate marketplace for digital products. With high commission rates up to 75%, it's the go-to platform for affiliates promoting courses, eBooks and software.",
    tags: [
      { label: "Top Rated", iconName: "Flame", color: "bg-orange-50 text-orange-600 ring-orange-200", ringColor: "ring-orange-200" },
      { label: "High Commissions", iconName: "BadgeCheck", color: "bg-emerald-50 text-emerald-600 ring-emerald-200", ringColor: "ring-emerald-200" },
    ],
    stats: [
      { label: "Commission", value: "Up to 75%", accent: "text-emerald-600" },
      { label: "Cookie Duration", value: "60 Days", accent: "text-slate-900" },
      { label: "Payment", value: "Weekly", accent: "text-slate-900" },
      { label: "Countries", value: "Global", accent: "text-slate-900" },
    ],
    requirements: [
      "An active website or social media following",
      "Approved ClickBank account",
      "Promote products in ClickBank marketplace",
    ],
    pros: [
      "Highest commission rates in the industry",
      "60-day cookie window",
      "Weekly payments available",
      "Huge digital product marketplace",
    ],
    cons: [
      "Mostly digital products only",
      "Product quality varies",
      "Competitive niche categories",
    ],
    commissionTable: [
      { cat: "Digital Courses", rate: "75%", cookie: "60 Days" },
      { cat: "eBooks", rate: "60%", cookie: "60 Days" },
      { cat: "Software", rate: "50%", cookie: "60 Days" },
      { cat: "Membership Sites", rate: "40%", cookie: "60 Days" },
    ],
    resources: [
      { iconName: "ImageIcon", label: "Banners" },
      { iconName: "Link2", label: "Text Links" },
      { iconName: "PlugZap", label: "API Access" },
    ],
    payouts: [
      { iconName: "Banknote", label: "Bank Transfer" },
      { iconName: "Wallet", label: "PayPal" },
      { iconName: "CreditCard", label: "Wire Transfer" },
    ],
    faqs: [
      { q: "How do I get started with ClickBank?", a: "Create a free ClickBank account, browse the marketplace, and start promoting products using your affiliate link." },
      { q: "What is the minimum payout?", a: "The minimum payout threshold is $10." },
    ],
    related: [
      { brandKey: "amazon", name: "Amazon Associates", rate: "Up to 10%", rating: 4.6 },
      { brandKey: "impact", name: "Impact", rate: "Up to 40%", rating: 4.6 },
      { brandKey: "shareasale", name: "ShareASale", rate: "Up to 20%", rating: 4.5 },
      { brandKey: "cj", name: "CJ Affiliate", rate: "Up to 30%", rating: 4.5 },
    ],
    earningsDefault: { visitors: 5000, conversion: 3, aov: 40 },
  },
};
