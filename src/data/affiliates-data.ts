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
  impact: {
    brandKey: "impact",
    name: "Impact",
    rating: 4.6,
    reviewCount: "3,800+ Reviews",
    description:
      "Impact is a leading partnership automation platform that enables brands to manage, grow and optimize their affiliate, influencer and strategic partnership programs at scale.",
    tags: [
      { label: "Enterprise", iconName: "BadgeCheck", color: "bg-violet-50 text-violet-600 ring-violet-200", ringColor: "ring-violet-200" },
      { label: "Top Rated", iconName: "Flame", color: "bg-orange-50 text-orange-600 ring-orange-200", ringColor: "ring-orange-200" },
      { label: "Global", iconName: "Globe", color: "bg-indigo-50 text-indigo-600 ring-indigo-200", ringColor: "ring-indigo-200" },
    ],
    stats: [
      { label: "Commission", value: "Up to 40%", accent: "text-emerald-600" },
      { label: "Cookie Duration", value: "30 Days", accent: "text-slate-900" },
      { label: "Payment", value: "Net 30", accent: "text-slate-900" },
      { label: "Countries", value: "Global", accent: "text-slate-900" },
    ],
    requirements: [
      "A professional website or blog with quality traffic",
      "Relevant audience aligned with partner brands",
      "Approved Impact account application",
      "Compliance with partnership disclosure guidelines",
    ],
    pros: [
      "Leading enterprise partnership automation platform",
      "Supports affiliate, influencer & strategic partnerships",
      "Advanced tracking and attribution capabilities",
      "Access to premium Fortune 500 brand programs",
    ],
    cons: [
      "Higher barrier to entry for beginners",
      "Smaller network compared to legacy affiliate networks",
      "Some brands require minimum traffic thresholds",
    ],
    commissionTable: [
      { cat: "Software & SaaS", rate: "40%", cookie: "30 Days" },
      { cat: "Financial Services", rate: "35%", cookie: "30 Days" },
      { cat: "E-commerce", rate: "25%", cookie: "30 Days" },
      { cat: "Travel & Hospitality", rate: "20%", cookie: "30 Days" },
      { cat: "Education & Courses", rate: "30%", cookie: "30 Days" },
    ],
    resources: [
      { iconName: "ImageIcon", label: "Banners" },
      { iconName: "Link2", label: "Deep Links" },
      { iconName: "PlugZap", label: "API Access" },
      { iconName: "Package", label: "Creative Assets" },
    ],
    payouts: [
      { iconName: "Banknote", label: "Bank Transfer" },
      { iconName: "Wallet", label: "PayPal" },
      { iconName: "CreditCard", label: "Wire Transfer" },
    ],
    faqs: [
      { q: "How does Impact differ from other affiliate networks?", a: "Impact is a full partnership automation platform that goes beyond traditional affiliate marketing. It supports influencer, strategic and B2B partnerships alongside standard affiliate programs." },
      { q: "Is there a minimum traffic requirement?", a: "Traffic requirements vary by brand. Some premium programs may require a minimum number of monthly visitors, while others are open to all qualified publishers." },
      { q: "How are commissions tracked?", a: "Impact uses advanced multi-touch attribution and real-time tracking to ensure every conversion is accurately credited to the right partner." },
    ],
    related: [
      { brandKey: "amazon", name: "Amazon Associates", rate: "Up to 10%", rating: 4.6 },
      { brandKey: "clickbank", name: "ClickBank", rate: "Up to 75%", rating: 4.7 },
      { brandKey: "shareasale", name: "ShareASale", rate: "Up to 20%", rating: 4.5 },
      { brandKey: "cj", name: "CJ Affiliate", rate: "Up to 30%", rating: 4.5 },
    ],
    earningsDefault: { visitors: 8000, conversion: 2.5, aov: 60 },
  },
  shareasale: {
    brandKey: "shareasale",
    name: "ShareASale",
    rating: 4.5,
    reviewCount: "4,200+ Reviews",
    description:
      "ShareASale is a trusted affiliate marketing network connecting publishers with over 4,000 merchants. Known for its reliable tracking and user-friendly interface, it's an excellent choice for affiliate marketers of all levels.",
    tags: [
      { label: "Beginner Friendly", iconName: "BadgeCheck", color: "bg-emerald-50 text-emerald-600 ring-emerald-200", ringColor: "ring-emerald-200" },
      { label: "Reliable", iconName: "Globe", color: "bg-indigo-50 text-indigo-600 ring-indigo-200", ringColor: "ring-indigo-200" },
      { label: "Trusted Network", iconName: "Flame", color: "bg-orange-50 text-orange-600 ring-orange-200", ringColor: "ring-orange-200" },
    ],
    stats: [
      { label: "Commission", value: "Up to 20%", accent: "text-emerald-600" },
      { label: "Cookie Duration", value: "30 Days", accent: "text-slate-900" },
      { label: "Payment", value: "Net 30", accent: "text-slate-900" },
      { label: "Countries", value: "Global", accent: "text-slate-900" },
    ],
    requirements: [
      "An active website or blog with original content",
      "Approved ShareASale publisher account",
      "Compliance with FTC affiliate disclosure guidelines",
      "Valid tax and payment information",
    ],
    pros: [
      "Large merchant network with 4,000+ programs",
      "Reliable tracking and reporting dashboard",
      "User-friendly interface for beginners",
      "Regular and timely payments",
    ],
    cons: [
      "Interface feels dated compared to newer platforms",
      "Some merchants have low conversion rates",
      "Limited advanced automation features",
    ],
    commissionTable: [
      { cat: "E-commerce & Retail", rate: "20%", cookie: "30 Days" },
      { cat: "Health & Wellness", rate: "18%", cookie: "30 Days" },
      { cat: "Home & Garden", rate: "15%", cookie: "30 Days" },
      { cat: "Fashion & Apparel", rate: "12%", cookie: "30 Days" },
      { cat: "Food & Beverage", rate: "10%", cookie: "30 Days" },
    ],
    resources: [
      { iconName: "ImageIcon", label: "Banners" },
      { iconName: "Link2", label: "Text Links" },
      { iconName: "Package", label: "Product Feeds" },
      { iconName: "Gift", label: "Coupons" },
    ],
    payouts: [
      { iconName: "Banknote", label: "Bank Transfer" },
      { iconName: "Wallet", label: "PayPal" },
      { iconName: "CreditCard", label: "Direct Deposit" },
    ],
    faqs: [
      { q: "How do I join ShareASale?", a: "Simply create a publisher account on ShareASale.com, provide your website details and tax information. Most applications are approved within 1-2 business days." },
      { q: "What is the minimum payout threshold?", a: "The minimum payout threshold is $50. Payments are issued on Net 30 terms via check, direct deposit or PayPal." },
    ],
    related: [
      { brandKey: "amazon", name: "Amazon Associates", rate: "Up to 10%", rating: 4.6 },
      { brandKey: "clickbank", name: "ClickBank", rate: "Up to 75%", rating: 4.7 },
      { brandKey: "impact", name: "Impact", rate: "Up to 40%", rating: 4.6 },
      { brandKey: "cj", name: "CJ Affiliate", rate: "Up to 30%", rating: 4.5 },
    ],
    earningsDefault: { visitors: 6000, conversion: 2, aov: 45 },
  },
  cj: {
    brandKey: "cj",
    name: "CJ Affiliate",
    rating: 4.5,
    reviewCount: "3,500+ Reviews",
    description:
      "CJ Affiliate (formerly Commission Junction) is a global affiliate network that connects publishers with leading Fortune 500 brands. With advanced tracking tools and a vast advertiser marketplace, it's a top choice for serious affiliate marketers.",
    tags: [
      { label: "Premium Brands", iconName: "BadgeCheck", color: "bg-emerald-50 text-emerald-600 ring-emerald-200", ringColor: "ring-emerald-200" },
      { label: "Fortune 500", iconName: "Globe", color: "bg-indigo-50 text-indigo-600 ring-indigo-200", ringColor: "ring-indigo-200" },
      { label: "Global Reach", iconName: "Flame", color: "bg-orange-50 text-orange-600 ring-orange-200", ringColor: "ring-orange-200" },
    ],
    stats: [
      { label: "Commission", value: "Up to 30%", accent: "text-emerald-600" },
      { label: "Cookie Duration", value: "45 Days", accent: "text-slate-900" },
      { label: "Payment", value: "Net 30", accent: "text-slate-900" },
      { label: "Countries", value: "Global", accent: "text-slate-900" },
    ],
    requirements: [
      "Professional website with quality content",
      "Approved CJ publisher account",
      "Adherence to CJ compliance policies",
      "Valid tax documentation",
    ],
    pros: [
      "Access to premium Fortune 500 brand programs",
      "Advanced deep-linking and product feed tools",
      "Reliable tracking and real-time reporting",
      "Dedicated account management for top publishers",
    ],
    cons: [
      "Strict approval process for some advertisers",
      "Minimum traffic requirements for premium programs",
      "Interface can be complex for beginners",
    ],
    commissionTable: [
      { cat: "Retail & Department Stores", rate: "25%", cookie: "45 Days" },
      { cat: "Beauty & Cosmetics", rate: "20%", cookie: "45 Days" },
      { cat: "Electronics & Tech", rate: "15%", cookie: "45 Days" },
      { cat: "Travel & Booking", rate: "12%", cookie: "45 Days" },
      { cat: "Financial Services", rate: "30%", cookie: "45 Days" },
    ],
    resources: [
      { iconName: "ImageIcon", label: "Banners" },
      { iconName: "Link2", label: "Deep Links" },
      { iconName: "Package", label: "Product Catalogs" },
      { iconName: "PlugZap", label: "API Access" },
    ],
    payouts: [
      { iconName: "Banknote", label: "Bank Transfer" },
      { iconName: "Wallet", label: "PayPal" },
      { iconName: "CreditCard", label: "Wire Transfer" },
    ],
    faqs: [
      { q: "How do I get started with CJ Affiliate?", a: "Create a publisher account on CJ.com, complete your profile with website details and tax information. Once approved, you can browse and apply to advertiser programs." },
      { q: "What is the minimum payout?", a: "The minimum payout threshold is $50. Payments are made monthly on Net 30 terms." },
      { q: "Does CJ work with international publishers?", a: "Yes, CJ Affiliate has a global network with advertisers and publishers from over 100 countries worldwide." },
    ],
    related: [
      { brandKey: "amazon", name: "Amazon Associates", rate: "Up to 10%", rating: 4.6 },
      { brandKey: "clickbank", name: "ClickBank", rate: "Up to 75%", rating: 4.7 },
      { brandKey: "impact", name: "Impact", rate: "Up to 40%", rating: 4.6 },
      { brandKey: "shareasale", name: "ShareASale", rate: "Up to 20%", rating: 4.5 },
    ],
    earningsDefault: { visitors: 7000, conversion: 2, aov: 55 },
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
