import { ArrowRight } from "lucide-react";
import { navigate } from "../router";
import { BRANDS, GoogleAdsLogo, MetaLogo, SemrushLogo, CanvaLogo, ClickFunnelsLogo, LogoBadge, Rating, Reveal, SectionHeading, AmazonLogo, ClickBankLogo, ImpactLogo, ShareASaleLogo, CJLogo, TiltCard } from "./ui";

/* ---------------- Trending Marketing Offers ---------------- */
const OFFERS = [
  {
    brand: "googleads",
    name: "Google Ads",
    rating: 4.8,
    sponsored: true,
    desc: "Grow your business with Google Ads and get more customers.",
    badge: "40% Bonus Credit",
    badgeClass: "border-emerald-200 bg-emerald-50 text-emerald-600",
  },
  {
    brand: "meta",
    name: "Meta Ads",
    rating: 4.7,
    sponsored: true,
    desc: "Start advertising on Facebook & Instagram and grow your brand.",
    badge: "20% OFF",
    badgeClass: "border-indigo-200 bg-indigo-50 text-indigo-600",
  },
  {
    brand: "semrush",
    name: "Semrush",
    rating: 4.6,
    sponsored: false,
    desc: "Best SEO tool for keyword research, competitor analysis & more.",
    badge: "30% OFF",
    badgeClass: "border-emerald-200 bg-emerald-50 text-emerald-600",
  },
  {
    brand: "canva",
    name: "Canva Pro",
    rating: 4.8,
    sponsored: false,
    desc: "Design anything with Canva Pro and team collaboration.",
    badge: "Free Trial",
    badgeClass: "border-violet-200 bg-violet-50 text-violet-600",
  },
  {
    brand: "clickfunnels",
    name: "ClickFunnels",
    rating: 4.7,
    sponsored: false,
    desc: "Build sales funnels that convert visitors into collaboration.",
    badge: "14 Days Free",
    badgeClass: "border-orange-200 bg-orange-50 text-orange-600",
  },
];

export function TrendingOffers() {
  return (
    <section className="bg-slate-50/70">
      <div className="mx-auto max-w-[1440px] px-4 py-12 sm:px-8 lg:py-16">
        <SectionHeading title="Trending Marketing Offers" linkLabel="View All Offers" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
          {OFFERS.map((o, i) => (
            <Reveal key={o.name} delay={i * 0.07}>
              <TiltCard>
                <div className="group/card card card-hover flex h-full flex-col p-5 bg-white/70 backdrop-blur-md">
                  <div className="flex items-start justify-between">
                    <div className="transition-transform duration-300 group-hover/card:scale-105">
                      {o.brand === "googleads" ? <GoogleAdsLogo size={44} /> :
                       o.brand === "meta" ? <MetaLogo size={44} /> :
                       o.brand === "semrush" ? <SemrushLogo size={44} /> :
                       o.brand === "canva" ? <CanvaLogo size={44} /> :
                       o.brand === "clickfunnels" ? <ClickFunnelsLogo size={44} /> :
                       <LogoBadge brand={BRANDS[o.brand]} size={44} />}
                    </div>
                    {o.sponsored && (
                      <span className="rounded-full bg-gradient-to-r from-amber-500/10 to-orange-500/10 px-2.5 py-0.5 text-[10px] font-extrabold text-amber-700 border border-amber-500/20 tracking-wide uppercase">
                        Sponsored
                      </span>
                    )}
                  </div>
                  <h3 className="mt-4 text-[15px] font-extrabold text-slate-900 group-hover/card:text-indigo-600 transition-colors leading-tight">{o.name}</h3>
                  <Rating value={o.rating} className="mt-1" />
                  <p className="mt-2.5 flex-1 text-[13px] leading-relaxed text-slate-500 line-clamp-3">{o.desc}</p>
                  <div
                    className={`relative mt-4 overflow-hidden rounded-xl border border-dashed py-2 text-center text-[13px] font-extrabold ${o.badgeClass}`}
                  >
                    <span className="absolute -left-1.5 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-slate-50 border-r border-dashed border-inherit" />
                    <span className="absolute -right-1.5 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-slate-50 border-l border-dashed border-inherit" />
                    <span className="relative z-10">{o.badge}</span>
                  </div>
                  <button
                    onClick={() => navigate("deal", o.brand)}
                    className="btn-ripple gradient-bg group/btn mt-3.5 flex w-full items-center justify-center gap-1.5 rounded-xl py-2.5 text-[13px] font-bold text-white shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/35 transition-all"
                  >
                    View Offer
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/card:translate-x-1" />
                  </button>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Best Affiliate Programs ---------------- */
const PROGRAMS = [
  { brand: "amazon", name: "Amazon Associates", rating: 4.6, commission: "Up to 10%", desc: "World's largest affiliate program with millions of products to promote.", badge: "Best for Beginners", badgeClass: "border-emerald-200 bg-emerald-50 text-emerald-600" },
  { brand: "clickbank", name: "ClickBank", rating: 4.7, commission: "Up to 75%", desc: "High-converting digital products with industry-leading commission rates.", badge: "Top Payout", badgeClass: "border-indigo-200 bg-indigo-50 text-indigo-600" },
  { brand: "impact", name: "Impact", rating: 4.6, commission: "Up to 40%", desc: "Enterprise partnership platform trusted by top global brands.", badge: "Premium Network", badgeClass: "border-violet-200 bg-violet-50 text-violet-600" },
  { brand: "shareasale", name: "ShareASale", rating: 4.5, commission: "Up to 20%", desc: "Reliable affiliate network with over 4,000 merchants to choose from.", badge: "Trusted Network", badgeClass: "border-amber-200 bg-amber-50 text-amber-600" },
  { brand: "cj", name: "CJ Affiliate", rating: 4.5, commission: "Up to 30%", desc: "Global affiliate network connecting publishers with Fortune 500 brands.", badge: "Global Reach", badgeClass: "border-sky-200 bg-sky-50 text-sky-600" },
];

export function AffiliatePrograms() {
  return (
    <section className="mx-auto max-w-[1440px] px-4 py-12 sm:px-8 lg:py-16">
      <SectionHeading title="Best Affiliate Programs" linkLabel="View All Programs" />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
        {PROGRAMS.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.07}>
            <TiltCard>
              <div className="group/card card card-hover flex h-full flex-col p-5 bg-white/70 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="transition-transform duration-300 group-hover/card:scale-105">
                    {p.brand === "amazon" ? <AmazonLogo size={44} /> :
                     p.brand === "clickbank" ? <ClickBankLogo size={44} /> :
                     p.brand === "impact" ? <ImpactLogo size={44} /> :
                     p.brand === "shareasale" ? <ShareASaleLogo size={44} /> :
                     p.brand === "cj" ? <CJLogo size={44} /> :
                     <LogoBadge brand={BRANDS[p.brand]} size={44} />}
                  </div>
                  <div className="min-w-0">
                    <h3 className="truncate text-[14px] font-extrabold text-slate-900 group-hover/card:text-indigo-600 transition-colors leading-tight">{p.name}</h3>
                    <Rating value={p.rating} className="mt-0.5" />
                  </div>
                </div>
                {p.desc && (
                  <p className="mt-3 flex-1 text-[13px] leading-relaxed text-slate-500 line-clamp-2">
                    {p.desc}
                  </p>
                )}
                <div className="mt-4 rounded-xl bg-slate-50/80 p-3 border border-slate-100/50">
                  <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                    Commission
                  </p>
                  <p className="mt-0.5 text-[22px] font-black tracking-tight text-indigo-600 leading-none">
                    {p.commission}
                  </p>
                </div>
                {p.badge && (
                  <div className={`relative mt-3 overflow-hidden rounded-xl border border-dashed py-2 text-center text-[13px] font-extrabold ${p.badgeClass}`}>
                    <span className="absolute -left-1.5 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-slate-50 border-r border-dashed border-inherit" />
                    <span className="absolute -right-1.5 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-slate-50 border-l border-dashed border-inherit" />
                    <span className="relative z-10">{p.badge}</span>
                  </div>
                )}
                <button
                  onClick={() => navigate("affiliate", p.brand)}
                  className="btn-ripple mt-3.5 flex w-full items-center justify-center gap-1.5 rounded-xl border border-indigo-200/80 bg-indigo-50/20 py-2.5 text-[13px] font-bold text-indigo-600 shadow-sm transition-all hover:bg-indigo-600 hover:text-white hover:border-transparent hover:shadow-md hover:shadow-indigo-500/20"
                >
                  Join Now
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/card:translate-x-1" />
                </button>
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
