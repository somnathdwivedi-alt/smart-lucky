export type ReviewScore = { label: string; value: number };

export type ReviewData = {
  brandKey: string;
  title: string;
  rating: number;
  author: string;
  date: string;
  readTime: string;
  score: number;
  scores: ReviewScore[];
  overview: string[];
  pros: string[];
  cons: string[];
  verdict: string;
  recommended: boolean;
  related: { brandKey: string; name: string; rating: number }[];
};

export const REVIEWS_DATA: Record<string, ReviewData> = {
  semrush: {
    brandKey: "semrush",
    title: "Semrush Review",
    rating: 4.8,
    author: "John Doe",
    date: "May 10, 2024",
    readTime: "12 min read",
    score: 4.8,
    scores: [
      { label: "Ease of Use", value: 4.7 },
      { label: "Features", value: 4.9 },
      { label: "Value for Money", value: 4.6 },
      { label: "Customer Support", value: 4.6 },
      { label: "Performance", value: 4.8 },
    ],
    overview: [
      "Semrush is an award-winning SEO tool trusted by marketers worldwide. It offers a complete suite of tools for SEO, content marketing, competitor research, PPC and social media marketing — over 55 tools in a single subscription.",
      "In our testing over 3 months, Semrush consistently delivered the most accurate keyword volume data and the deepest competitor insights of any platform we've reviewed. The interface has a learning curve, but the workflow becomes second nature within a week.",
    ],
    pros: [
      "Very easy to use once set up",
      "Huge keyword & backlink database",
      "Accurate, frequently updated data",
      "All-in-one platform for whole teams",
      "Excellent reporting features",
    ],
    cons: [
      "Expensive for beginners",
      "Some tools have a learning curve",
      "Single-user licenses by default",
    ],
    verdict: "Semrush is the best all-in-one SEO tool for agencies, marketers and businesses that want to grow organic traffic.",
    recommended: true,
    related: [
      { brandKey: "ahrefs", name: "Ahrefs Review", rating: 4.7 },
      { brandKey: "moz", name: "Moz Pro Review", rating: 4.6 },
      { brandKey: "ubersuggest", name: "Ubersuggest Review", rating: 4.5 },
    ],
  },
  ahrefs: {
    brandKey: "ahrefs",
    title: "Ahrefs Review",
    rating: 4.7,
    author: "John Doe",
    date: "May 8, 2024",
    readTime: "10 min read",
    score: 4.7,
    scores: [
      { label: "Ease of Use", value: 4.8 },
      { label: "Features", value: 4.7 },
      { label: "Value for Money", value: 4.5 },
      { label: "Customer Support", value: 4.5 },
      { label: "Performance", value: 4.8 },
    ],
    overview: [
      "Ahrefs is a powerhouse SEO toolset built around the industry's largest backlink index. It's the tool of choice for link builders, content marketers, and SEO professionals who need reliable, fast data.",
      "With over 10 billion keywords across 200+ countries and the most up-to-date backlink database, Ahrefs delivers precisely what serious SEOs need. Its user interface is notably cleaner than competitors, making it more approachable for beginners.",
    ],
    pros: [
      "Best backlink index in the industry",
      "Clean, intuitive interface",
      "Fast site audits",
      "Excellent content research tools",
      "Accurate rank tracking",
    ],
    cons: [
      "Fewer features than Semrush",
      "No PPC toolkit",
      "Limited reporting customization",
    ],
    verdict: "Ahrefs is the best tool for backlink analysis and a strong all-around SEO platform, especially for link builders.",
    recommended: true,
    related: [
      { brandKey: "semrush", name: "Semrush Review", rating: 4.8 },
      { brandKey: "moz", name: "Moz Pro Review", rating: 4.6 },
      { brandKey: "ubersuggest", name: "Ubersuggest Review", rating: 4.5 },
    ],
  },
  canva: {
    brandKey: "canva",
    title: "Canva Pro Review",
    rating: 4.8,
    author: "John Doe",
    date: "May 5, 2024",
    readTime: "8 min read",
    score: 4.8,
    scores: [
      { label: "Ease of Use", value: 4.9 },
      { label: "Features", value: 4.7 },
      { label: "Value for Money", value: 4.8 },
      { label: "Customer Support", value: 4.5 },
      { label: "Performance", value: 4.7 },
    ],
    overview: [
      "Canva Pro transforms the way teams and individuals create visual content. With an enormous library of templates, AI-powered design tools, and seamless collaboration, it has become the go-to design platform for non-designers and professionals alike.",
      "In our testing, the Magic Resize feature alone saved hours of manual work. The Brand Kit ensures consistency across all assets, making it invaluable for marketing teams. For the price, Canva Pro delivers unmatched value.",
    ],
    pros: [
      "Extremely easy to use",
      "Massive template library",
      "AI tools are genuinely useful",
      "Excellent team collaboration",
      "Great value for money",
    ],
    cons: [
      "Advanced design features limited",
      "Offline mode needs improvement",
      "Some premium elements cost extra",
    ],
    verdict: "Canva Pro is the best design tool for marketers and businesses that need professional visuals without a steep learning curve.",
    recommended: true,
    related: [
      { brandKey: "semrush", name: "Semrush Review", rating: 4.8 },
      { brandKey: "ahrefs", name: "Ahrefs Review", rating: 4.7 },
      { brandKey: "moz", name: "Moz Pro Review", rating: 4.6 },
    ],
  },
  moz: {
    brandKey: "moz",
    title: "Moz Pro Review",
    rating: 4.6,
    author: "Jane Smith",
    date: "June 15, 2024",
    readTime: "10 min read",
    score: 4.6,
    scores: [
      { label: "Ease of Use", value: 4.5 },
      { label: "Features", value: 4.6 },
      { label: "Value for Money", value: 4.4 },
      { label: "Customer Support", value: 4.7 },
      { label: "Performance", value: 4.5 },
    ],
    overview: [
      "Moz Pro is one of the most established SEO toolkits on the market, known for its user-friendly interface and excellent educational resources. It's particularly well-suited for beginners and small to medium-sized businesses.",
      "After testing Moz Pro extensively, we found its keyword research and site audit features to be standout performers. The Page Optimization Score gives actionable recommendations that are easy to implement, even for those new to SEO.",
    ],
    pros: [
      "Beginner-friendly interface",
      "Excellent learning resources & community",
      "Accurate keyword research data",
      "Great site audit reports",
      "Affordable entry-level pricing",
    ],
    cons: [
      "Smaller backlink index than Ahrefs",
      "Fewer advanced features than Semrush",
      "Some features capped on lower tiers",
    ],
    verdict: "Moz Pro is the best SEO tool for beginners and small businesses looking for an affordable, easy-to-use platform.",
    recommended: true,
    related: [
      { brandKey: "semrush", name: "Semrush Review", rating: 4.8 },
      { brandKey: "ahrefs", name: "Ahrefs Review", rating: 4.7 },
      { brandKey: "ubersuggest", name: "Ubersuggest Review", rating: 4.5 },
    ],
  },
  ubersuggest: {
    brandKey: "ubersuggest",
    title: "Ubersuggest Review",
    rating: 4.5,
    author: "Jane Smith",
    date: "June 10, 2024",
    readTime: "8 min read",
    score: 4.5,
    scores: [
      { label: "Ease of Use", value: 4.8 },
      { label: "Features", value: 4.3 },
      { label: "Value for Money", value: 4.9 },
      { label: "Customer Support", value: 4.2 },
      { label: "Performance", value: 4.4 },
    ],
    overview: [
      "Ubersuggest by Neil Patel is a budget-friendly SEO tool that punches above its weight class. It provides solid keyword research, competitor analysis, and site audit capabilities at a fraction of the cost of premium alternatives.",
      "During our testing, Ubersuggest proved to be an excellent entry point for small businesses and freelancers. The keyword suggestions are comprehensive, and the domain overview reports provide quick competitive insights.",
    ],
    pros: [
      "Very affordable pricing",
      "Clean, intuitive interface",
      "Good keyword research tool",
      "Free tier available",
      "Regular feature updates",
    ],
    cons: [
      "Smaller data set than competitors",
      "Limited report customization",
      "Backlink data less comprehensive",
    ],
    verdict: "Ubersuggest is the best value SEO tool for budget-conscious users and small businesses.",
    recommended: true,
    related: [
      { brandKey: "semrush", name: "Semrush Review", rating: 4.8 },
      { brandKey: "moz", name: "Moz Pro Review", rating: 4.6 },
      { brandKey: "ahrefs", name: "Ahrefs Review", rating: 4.7 },
    ],
  },
  hostinger: {
    brandKey: "hostinger",
    title: "Hostinger Review",
    rating: 4.6,
    author: "Mike R.",
    date: "June 5, 2024",
    readTime: "9 min read",
    score: 4.6,
    scores: [
      { label: "Ease of Use", value: 4.7 },
      { label: "Features", value: 4.5 },
      { label: "Value for Money", value: 4.9 },
      { label: "Customer Support", value: 4.4 },
      { label: "Performance", value: 4.7 },
    ],
    overview: [
      "Hostinger has rapidly become one of the most popular web hosting providers, offering blazing-fast performance at incredibly low prices. With a custom hPanel dashboard and advanced caching, it delivers premium performance on a budget.",
      "Our testing showed Hostinger consistently outperformed competitors in load speed tests while maintaining 99.9% uptime. The custom control panel is intuitive and makes managing websites, databases, and emails straightforward.",
    ],
    pros: [
      "Excellent price-to-performance ratio",
      "Fast load times with LiteSpeed",
      "Intuitive hPanel dashboard",
      "Free SSL & domain included",
      "30-day money-back guarantee",
    ],
    cons: [
      "No phone support (chat only)",
      "Higher renewal rates",
      "Limited advanced features on basic plans",
    ],
    verdict: "Hostinger delivers the best value in web hosting with excellent performance at unbeatable prices.",
    recommended: true,
    related: [
      { brandKey: "semrush", name: "Semrush Review", rating: 4.8 },
      { brandKey: "canva", name: "Canva Pro Review", rating: 4.8 },
      { brandKey: "ahrefs", name: "Ahrefs Review", rating: 4.7 },
    ],
  },
  clickfunnels: {
    brandKey: "clickfunnels",
    title: "ClickFunnels Review",
    rating: 4.7,
    author: "Mike R.",
    date: "June 1, 2024",
    readTime: "11 min read",
    score: 4.7,
    scores: [
      { label: "Ease of Use", value: 4.6 },
      { label: "Features", value: 4.8 },
      { label: "Value for Money", value: 4.3 },
      { label: "Customer Support", value: 4.5 },
      { label: "Performance", value: 4.6 },
    ],
    overview: [
      "ClickFunnels is the industry-leading sales funnel builder that enables businesses to create high-converting marketing funnels without any technical skills. It combines landing pages, email marketing, and payment processing in one platform.",
      "We tested ClickFunnels for over a month and were impressed by its drag-and-drop builder and extensive template library. The ability to build complete sales systems — from opt-in pages to order forms and membership sites — is powerful.",
    ],
    pros: [
      "All-in-one funnel building platform",
      "Excellent template library",
      "Beginner-friendly drag-and-drop editor",
      "Built-in email & SMS marketing",
      "A/B split testing included",
    ],
    cons: [
      "Premium pricing at higher tiers",
      "Limited blogging capabilities",
      "Can feel restrictive for advanced users",
    ],
    verdict: "ClickFunnels is the best all-in-one sales funnel platform for entrepreneurs and businesses focused on conversions.",
    recommended: true,
    related: [
      { brandKey: "semrush", name: "Semrush Review", rating: 4.8 },
      { brandKey: "canva", name: "Canva Pro Review", rating: 4.8 },
      { brandKey: "ahrefs", name: "Ahrefs Review", rating: 4.7 },
    ],
  },
  spyfu: {
    brandKey: "spyfu",
    title: "SpyFu Review",
    rating: 4.5,
    author: "John Doe",
    date: "May 28, 2024",
    readTime: "9 min read",
    score: 4.5,
    scores: [
      { label: "Ease of Use", value: 4.4 },
      { label: "Features", value: 4.6 },
      { label: "Value for Money", value: 4.7 },
      { label: "Customer Support", value: 4.3 },
      { label: "Performance", value: 4.5 },
    ],
    overview: [
      "SpyFu is the ultimate competitive intelligence tool for PPC and SEO research. It reveals every keyword your competitors have bought on Google Ads and every organic keyword they rank for, going back over 15 years.",
      "Our testing confirmed SpyFu's unique value proposition: no other tool provides the depth of historical ad data that SpyFu does. The competitor keyword analysis is exceptional, making it invaluable for PPC campaigns and SEO strategy.",
    ],
    pros: [
      "Unmatched historical ad data",
      "Excellent competitor keyword research",
      "Unlimited searches on all plans",
      "Good value for money",
      "Useful SEO research tools",
    ],
    cons: [
      "Outdated user interface",
      "Limited content marketing features",
      "No real-time rank tracking",
    ],
    verdict: "SpyFu is the best tool for competitive intelligence and PPC research, especially for uncovering competitor ad strategies.",
    recommended: true,
    related: [
      { brandKey: "semrush", name: "Semrush Review", rating: 4.8 },
      { brandKey: "ahrefs", name: "Ahrefs Review", rating: 4.7 },
      { brandKey: "moz", name: "Moz Pro Review", rating: 4.6 },
    ],
  },
};
