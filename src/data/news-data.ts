export type NewsComment = { name: string; time: string; text: string };

export type NewsArticle = {
  title: string;
  category: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  paragraphs: { type: "text" | "quote" | "list" | "callout"; content: string[]; attribution?: string }[];
  comments: NewsComment[];
  related: { tag: string; color: string; title: string; date: string }[];
  shareButtons?: boolean;
};

export const NEWS_DATA: Record<string, NewsArticle> = {
  "google-ads-ai": {
    title: "Google Ads Introduces New AI Features for Advertisers",
    category: "Marketing News",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=1200&h=630&fit=crop",
    author: "MarketyDeals Team",
    date: "May 12, 2024",
    readTime: "6 min read",
    paragraphs: [
      { type: "text", content: ["Google has announced new AI-powered features in Google Ads that help advertisers optimize campaigns, improve targeting, and get better results. The rollout marks the biggest update to the platform since the introduction of Performance Max campaigns.",
        "According to Google, advertisers using the new conversational campaign builder saw a 42% increase in ad strength ratings, translating directly to better auction performance and lower cost-per-acquisition.",
      ]},
      { type: "quote", content: ["\"AI is not replacing marketers — it's giving them superpowers. These tools let small businesses compete with enterprise budgets.\""], attribution: "Google Ads Product Team" },
      { type: "list", content: ["AI-powered campaign optimization", "Smarter keyword suggestions", "Improved audience targeting", "New reporting insights & anomaly detection"] },
      { type: "callout", content: ["\uD83D\uDCA1 Pro Tip: Pair the new AI features with the current Google Ads 40% bonus credit deal to test the tools with reduced risk."] },
      { type: "text", content: ["The features begin rolling out globally this month, starting with English-language accounts. Advertisers can opt in from the Recommendations tab inside Google Ads."] },
    ],
    comments: [
      { name: "Alex P.", time: "2 hours ago", text: "The AI-powered campaign optimization has already improved our ROAS by 15%. Great summary!" },
      { name: "Maria G.", time: "5 hours ago", text: "Curious how the smarter keyword suggestions compare to third-party tools. Anyone tested this yet?" },
    ],
    related: [
      { tag: "Meta", color: "bg-blue-500", title: "Meta Launches New Ad Tools", date: "May 10, 2024" },
      { tag: "TikTok", color: "bg-slate-900", title: "TikTok Ad Update: New Targeting", date: "May 08, 2024" },
      { tag: "Microsoft", color: "bg-emerald-500", title: "Microsoft Ads New Features", date: "May 06, 2024" },
    ],
  },
  "meta-ad-tools": {
    title: "Meta Launches New Advantage+ Advertising Tools",
    category: "Marketing News",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1200&h=630&fit=crop",
    author: "MarketyDeals Team",
    date: "May 10, 2024",
    readTime: "5 min read",
    paragraphs: [
      { type: "text", content: ["Meta has unveiled a new suite of Advantage+ advertising tools designed to help businesses maximize their return on ad spend across Facebook and Instagram. The AI-driven tools automate campaign optimization, creative generation, and audience targeting.",
        "Early adopters report up to 32% lower cost per acquisition and 28% improvement in click-through rates compared to standard campaigns.",
      ]},
      { type: "quote", content: ["\"Advantage+ is transforming how advertisers approach the Meta ecosystem. The automation allows marketers to focus on strategy while the AI handles optimization.\""], attribution: "Meta Business Blog" },
      { type: "list", content: ["Automated campaign optimization", "AI creative generation", "Advanced audience targeting", "Cross-platform performance insights"] },
      { type: "callout", content: ["\uD83D\uDCA1 Pro Tip: Start with a small budget to test Advantage+ before scaling. The AI needs about 50 conversions to optimize effectively."] },
      { type: "text", content: ["The new tools are available now for all Meta Ads accounts globally, with additional features rolling out over the coming months."] },
    ],
    comments: [
      { name: "Sam T.", time: "4 hours ago", text: "Advantage+ has been a game changer for our e-commerce clients. Highly recommend testing it." },
    ],
    related: [
      { tag: "Google", color: "bg-blue-500", title: "Google Ads AI Features", date: "May 12, 2024" },
      { tag: "TikTok", color: "bg-slate-900", title: "TikTok Ad Update: New Targeting", date: "May 08, 2024" },
      { tag: "Microsoft", color: "bg-emerald-500", title: "Microsoft Ads New Features", date: "May 06, 2024" },
    ],
  },
  "tiktok-ad-update": {
    title: "TikTok Ads Update: New Targeting Options for Businesses",
    category: "Marketing News",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&h=630&fit=crop",
    author: "MarketyDeals Team",
    date: "May 08, 2024",
    readTime: "4 min read",
    paragraphs: [
      { type: "text", content: ["TikTok has rolled out major updates to its advertising platform, introducing new targeting capabilities that give businesses more precision when reaching their ideal audience on the rapidly growing social platform.",
        "The update includes improved interest-based targeting, lookalike audience expansion, and enhanced retargeting options that leverage TikTok's powerful engagement data.",
      ]},
      { type: "quote", content: ["\"TikTok's targeting improvements level the playing field for small and medium businesses looking to reach highly engaged audiences.\""], attribution: "TikTok for Business Team" },
      { type: "list", content: ["Interest-based audience targeting", "Lookalike audience expansion", "Enhanced retargeting capabilities", "Improved engagement metrics"] },
      { type: "text", content: ["The new targeting options are available globally for all TikTok Ads accounts. Early testing shows up to 25% improvement in conversion rates for businesses using the new tools."] },
    ],
    comments: [
      { name: "Chen L.", time: "8 hours ago", text: "The new interest targeting is much more precise. Our CTR improved significantly." },
    ],
    related: [
      { tag: "Google", color: "bg-blue-500", title: "Google Ads AI Features", date: "May 12, 2024" },
      { tag: "Meta", color: "bg-blue-500", title: "Meta Launches New Ad Tools", date: "May 10, 2024" },
      { tag: "Microsoft", color: "bg-emerald-500", title: "Microsoft Ads New Features", date: "May 06, 2024" },
    ],
  },
  "microsoft-ad-ai": {
    title: "Microsoft Ads Rolls Out New AI-Powered Features",
    category: "Marketing News",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1200&h=630&fit=crop",
    author: "MarketyDeals Team",
    date: "May 06, 2024",
    readTime: "5 min read",
    paragraphs: [
      { type: "text", content: ["Microsoft Advertising has announced a comprehensive update to its platform, introducing AI-powered features that help advertisers optimize bids, create better ad copy, and reach more relevant audiences across the Microsoft Search Network.",
        "The new tools leverage Microsoft's Copilot AI to provide real-time optimization suggestions, automated bid adjustments, and intelligent keyword expansion based on campaign performance data.",
      ]},
      { type: "quote", content: ["\"With Copilot integration, Microsoft Ads is making enterprise-grade AI accessible to every advertiser, regardless of budget or team size.\""], attribution: "Microsoft Advertising Team" },
      { type: "list", content: ["AI-powered bid optimization", "Automated ad copy generation", "Smart keyword expansion", "Cross-network performance insights"] },
      { type: "callout", content: ["\uD83D\uDCA1 Pro Tip: Start with automated bidding on high-performing campaigns to maximize the benefit of Microsoft's AI features."] },
      { type: "text", content: ["The features are now rolling out to all Microsoft Advertising accounts globally with no additional cost."] },
    ],
    comments: [
      { name: "Rachel K.", time: "1 day ago", text: "The automated bidding has been excellent for our B2B campaigns. Highly recommended." },
    ],
    related: [
      { tag: "Google", color: "bg-blue-500", title: "Google Ads AI Features", date: "May 12, 2024" },
      { tag: "Meta", color: "bg-blue-500", title: "Meta Launches New Ad Tools", date: "May 10, 2024" },
      { tag: "TikTok", color: "bg-slate-900", title: "TikTok Ad Update: New Targeting", date: "May 08, 2024" },
    ],
  },
  "linkedin-b2b-tools": {
    title: "LinkedIn Launches New B2B Marketing Features",
    category: "Social Media News",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=630&fit=crop",
    author: "MarketyDeals Team",
    date: "May 03, 2024",
    readTime: "4 min read",
    paragraphs: [
      { type: "text", content: ["LinkedIn has introduced a suite of new B2B marketing tools designed to help businesses generate high-quality leads and build meaningful professional relationships. The updates focus on account-based marketing (ABM) and improved targeting capabilities.",
        "The new features include enhanced company targeting, expanded lead-gen forms, and AI-powered audience suggestions that help marketers identify decision-makers more effectively.",
      ]},
      { type: "list", content: ["Enhanced account-based marketing (ABM) tools", "AI-powered audience suggestions", "Expanded lead generation forms", "Improved company targeting & intent data"] },
      { type: "callout", content: ["\uD83D\uDCA1 Pro Tip: Use LinkedIn's ABM tools to target specific companies with personalized campaigns for higher conversion rates."] },
      { type: "text", content: ["The new B2B features are available now for all LinkedIn Campaign Manager accounts globally."] },
    ],
    comments: [
      { name: "James W.", time: "2 days ago", text: "The ABM tools are exactly what we needed for our enterprise sales. Great update from LinkedIn." },
    ],
    related: [
      { tag: "Meta", color: "bg-blue-500", title: "Meta Launches New Ad Tools", date: "May 10, 2024" },
      { tag: "Google", color: "bg-blue-500", title: "Google Ads AI Features", date: "May 12, 2024" },
      { tag: "Microsoft", color: "bg-emerald-500", title: "Microsoft Ads New Features", date: "May 06, 2024" },
    ],
  },
  "pinterest-trends": {
    title: "Pinterest Releases 2024 Marketing Trends Report",
    category: "Trends",
    image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=1200&h=630&fit=crop",
    author: "MarketyDeals Team",
    date: "Apr 30, 2024",
    readTime: "6 min read",
    paragraphs: [
      { type: "text", content: ["Pinterest has released its annual marketing trends report, revealing key insights into consumer behavior and emerging trends that marketers need to know for the coming year. The report analyzes data from over 480 million monthly active users.",
        "Key findings show a 40% increase in searches for sustainable products, rising interest in AI-assisted shopping, and the growing importance of video content in the discovery journey.",
      ]},
      { type: "quote", content: ["\"Pinterest is where people come to plan their future. Understanding these trends is essential for brands that want to be part of those plans.\""], attribution: "Pinterest Trends Team" },
      { type: "list", content: ["Sustainable products search up 40%", "AI-assisted shopping on the rise", "Video content driving discovery", "Seasonal planning starting earlier than ever"] },
      { type: "text", content: ["The full report is available on Pinterest's business blog with actionable insights for marketers planning their 2024 strategies."] },
    ],
    comments: [
      { name: "Sophie L.", time: "3 days ago", text: "The sustainability trend is huge. We've already adjusted our content strategy based on these insights." },
    ],
    related: [
      { tag: "Google", color: "bg-blue-500", title: "Google Ads AI Features", date: "May 12, 2024" },
      { tag: "Meta", color: "bg-blue-500", title: "Meta Launches New Ad Tools", date: "May 10, 2024" },
      { tag: "TikTok", color: "bg-slate-900", title: "TikTok Ad Update: New Targeting", date: "May 08, 2024" },
    ],
  },
  "instagram-reels-ads": {
    title: "Instagram Expands Reels Ad Options for Brands",
    category: "Social Media News",
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=1200&h=630&fit=crop",
    author: "MarketyDeals Team",
    date: "Apr 26, 2024",
    readTime: "4 min read",
    paragraphs: [
      { type: "text", content: ["Instagram has announced significant expansions to its Reels advertising options, giving brands more ways to reach audiences through short-form video content. The updates include new ad formats, improved targeting, and enhanced measurement tools.",
        "With Reels now accounting for over 50% of time spent on Instagram, the platform is doubling down on video advertising capabilities to help brands capitalize on this growing engagement trend.",
      ]},
      { type: "list", content: ["New Reels overlay ad formats", "Improved call-to-action options", "Expanded targeting for video ads", "Enhanced performance analytics"] },
      { type: "callout", content: ["\uD83D\uDCA1 Pro Tip: Keep Reels ads under 15 seconds for optimal engagement. Short, punchy content performs best."] },
      { type: "text", content: ["The new Reels ad options are rolling out globally over the next few weeks to all Instagram business accounts."] },
    ],
    comments: [
      { name: "Emma R.", time: "5 days ago", text: "Reels ads have been outperforming our feed ads by 3x. These new options are exciting!" },
    ],
    related: [
      { tag: "Meta", color: "bg-blue-500", title: "Meta Launches New Ad Tools", date: "May 10, 2024" },
      { tag: "TikTok", color: "bg-slate-900", title: "TikTok Ad Update: New Targeting", date: "May 08, 2024" },
      { tag: "Google", color: "bg-blue-500", title: "Google Ads AI Features", date: "May 12, 2024" },
    ],
  },
  "seo-core-update": {
    title: "Google's Latest Core Update: What Marketers Need to Know",
    category: "SEO",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1200&h=630&fit=crop",
    author: "MarketyDeals Team",
    date: "Apr 22, 2024",
    readTime: "7 min read",
    paragraphs: [
      { type: "text", content: ["Google has released its latest core algorithm update, bringing significant changes to how websites are ranked in search results. The update focuses on rewarding high-quality content and improving the visibility of helpful, people-first content.",
        "Early analysis shows the update heavily impacts AI-generated content, affiliate sites, and pages with thin content. Sites with original research, expert-authored content, and strong user engagement signals are seeing ranking improvements.",
      ]},
      { type: "quote", content: ["\"This update reaffirms that content quality and user experience are the foundation of SEO success. Shortcuts don't work.\""], attribution: "Google Search Liaison" },
      { type: "list", content: ["Focus on E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)", "Avoid AI-generated content without human editing", "Improve Core Web Vitals & page experience", "Build genuine backlinks through quality content"] },
      { type: "callout", content: ["\u26A0\uFE0F Important: Sites that lost rankings should audit their content quality and remove thin or unhelpful pages immediately."] },
      { type: "text", content: ["Google has confirmed the update will take 2-3 weeks to fully roll out. Marketers should monitor their rankings closely using tools like Semrush or Ahrefs."] },
    ],
    comments: [
      { name: "David M.", time: "1 week ago", text: "We saw a 25% traffic increase after this update. Investing in original research really paid off." },
      { name: "Anna S.", time: "6 days ago", text: "Our affiliate site took a hit. Working on improving content quality as recommended." },
    ],
    related: [
      { tag: "Google", color: "bg-blue-500", title: "Google Ads AI Features", date: "May 12, 2024" },
      { tag: "Meta", color: "bg-blue-500", title: "Meta Launches New Ad Tools", date: "May 10, 2024" },
      { tag: "Microsoft", color: "bg-emerald-500", title: "Microsoft Ads New Features", date: "May 06, 2024" },
    ],
  },
};
