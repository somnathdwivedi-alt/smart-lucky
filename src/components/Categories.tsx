import { ArrowRight } from "lucide-react";
import { Reveal, SectionHeading, TiltCard } from "./ui";
import { navigate } from "../router";

type CategoryTheme = {
  iconBg: string;
  iconColor: string;
  badgeBg: string;
  badgeText: string;
};

const THEMES: Record<string, CategoryTheme> = {
  "digital-marketing": { iconBg: "rgba(88,72,255,0.08)", iconColor: "#5848FF", badgeBg: "#F2EEFF", badgeText: "#5848FF" },
  "affiliate-marketing": { iconBg: "rgba(59,110,245,0.08)", iconColor: "#3B6EF5", badgeBg: "#EEF5FF", badgeText: "#3B6EF5" },
  "advertising": { iconBg: "rgba(44,182,125,0.08)", iconColor: "#2CB67D", badgeBg: "#EAF9F3", badgeText: "#2CB67D" },
  "seo-tools": { iconBg: "rgba(255,138,0,0.08)", iconColor: "#FF8A00", badgeBg: "#FFF4E8", badgeText: "#FF8A00" },
  "email-marketing": { iconBg: "rgba(14,165,233,0.08)", iconColor: "#0EA5E9", badgeBg: "#F0F9FF", badgeText: "#0EA5E9" },
  "ai-marketing": { iconBg: "rgba(124,58,237,0.08)", iconColor: "#7C3AED", badgeBg: "#F3F0FF", badgeText: "#7C3AED" },
  "web-hosting": { iconBg: "rgba(79,70,229,0.08)", iconColor: "#4F46E5", badgeBg: "#EEF2FF", badgeText: "#4F46E5" },
  "ecommerce": { iconBg: "rgba(236,72,153,0.08)", iconColor: "#EC4899", badgeBg: "#FDF2F8", badgeText: "#EC4899" },
  "social-media-tools": { iconBg: "rgba(224,82,107,0.08)", iconColor: "#E0526B", badgeBg: "#FFF0F3", badgeText: "#E0526B" },
  "content-marketing": { iconBg: "rgba(20,184,166,0.08)", iconColor: "#14B8A6", badgeBg: "#ECFDF5", badgeText: "#14B8A6" },
};

const DESCRIPTIONS: Record<string, string> = {
  "digital-marketing": "Discover top offers and resources to grow your audience and boost conversions.",
  "affiliate-marketing": "Find high-paying affiliate programs to monetize your traffic and earn passive income.",
  "advertising": "Launch targeted ad campaigns across platforms to reach your ideal customers.",
  "seo-tools": "Optimize your website with powerful SEO tools for higher rankings and more traffic.",
  "email-marketing": "Build and nurture your audience with automated email campaigns and sequences.",
  "ai-marketing": "Leverage artificial intelligence to automate, personalize, and scale your marketing.",
  "web-hosting": "Reliable hosting solutions with blazing speed, security, and 24/7 support.",
  "ecommerce": "Launch and grow your online store with powerful ecommerce platforms and tools.",
  "social-media-tools": "Schedule, manage, and analyze your social media presence across all networks.",
  "content-marketing": "Create compelling content strategies that drive engagement, traffic, and leads.",
};

const CATEGORIES = [
  { id: "digital-marketing", title: "Digital Marketing", count: "200+ Offers", image: "/images/digital.png" },
  { id: "affiliate-marketing", title: "Affiliate Marketing", count: "150+ Programs", image: "/images/affiliate.png" },
  { id: "advertising", title: "Advertising", count: "120+ Campaigns", image: "/images/business-communication-icon.png" },
  { id: "seo-tools", title: "SEO Tools", count: "180+ Tools", image: "/images/chart-arrow-up-icon.png" },
  { id: "email-marketing", title: "Email Marketing", count: "90+ Tools", image: "/images/email.png" },
  { id: "ai-marketing", title: "AI Marketing", count: "100+ Tools", image: "/images/aimarketing.png" },
  { id: "web-hosting", title: "Web Hosting", count: "80+ Offers", image: "/images/webhosting.png" },
  { id: "ecommerce", title: "Ecommerce", count: "70+ Platforms", image: "/images/ecommerce.png" },
  { id: "social-media-tools", title: "Social Media Tools", count: "60+ Tools", image: "/images/socials.png" },
  { id: "content-marketing", title: "Content Marketing", count: "50+ Tools", image: "/images/content.png" },
];

export default function Categories() {
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-[1440px] px-4 py-10 sm:px-8 lg:py-14">
        <SectionHeading title="Explore Categories" linkLabel="View All Categories" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 md:gap-6 xl:grid-cols-5 xl:gap-6">
          {CATEGORIES.map((c, i) => {
            const theme = THEMES[c.id];
            const desc = DESCRIPTIONS[c.id];

            return (
              <Reveal key={c.title} delay={(i % 5) * 0.07}>
                <TiltCard className="h-full">
                  <button
                    onClick={() => navigate("category", c.id)}
                    className="group/btn card card-hover flex h-full w-full flex-col justify-between rounded-2xl border border-slate-100 bg-white/70 backdrop-blur-md p-5 text-left shadow-sm transition-all duration-300 hover:border-indigo-200/50"
                  >
                    <div>
                      <span
                        className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl sm:h-12 sm:w-12 transition-transform duration-300 group-hover/btn:scale-108 shadow-sm"
                        style={{ backgroundColor: theme.iconBg }}
                      >
                        <img
                          src={c.image}
                          alt={c.title}
                          className="h-[22px] w-[22px] object-contain sm:h-6 sm:w-6"
                        />
                      </span>

                      <h3 className="mt-4 text-[14px] font-extrabold sm:text-[15px] text-slate-800 transition-colors group-hover/btn:text-indigo-600">
                        {c.title}
                      </h3>

                      <p className="mt-2 text-[12px] leading-relaxed sm:text-[13px] text-slate-500 line-clamp-3">
                        {desc}
                      </p>
                    </div>

                    <div>
                      <div
                        className="mt-4 flex h-8 w-max items-center rounded-lg px-2.5"
                        style={{ backgroundColor: theme.badgeBg }}
                      >
                        <span className="text-[11px] font-extrabold tracking-wide uppercase" style={{ color: theme.badgeText }}>
                          {c.count}
                        </span>
                      </div>

                      <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-bold text-indigo-600 hover:text-indigo-700">
                        Explore
                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </span>
                    </div>
                  </button>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
