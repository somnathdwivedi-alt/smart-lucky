import { ArrowRight } from "lucide-react";
import { navigate } from "../router";
import { BRANDS, GoogleAdsLogo, MetaLogo, SemrushLogo, CanvaLogo, ClickFunnelsLogo, LogoBadge, Rating, Reveal, SectionHeading, AmazonLogo, ClickBankLogo, ImpactLogo, ShareASaleLogo, CJLogo } from "./ui";

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
              <div className="card card-hover flex h-full flex-col p-4">
                <div className="flex items-start justify-between">
                  {o.brand === "googleads" ? <GoogleAdsLogo size={44} /> :
                   o.brand === "meta" ? <MetaLogo size={44} /> :
                   o.brand === "semrush" ? <SemrushLogo size={44} /> :
                   o.brand === "canva" ? <CanvaLogo size={44} /> :
                   o.brand === "clickfunnels" ? <ClickFunnelsLogo size={44} /> :
                   <LogoBadge brand={BRANDS[o.brand]} size={44} />}
                  {o.sponsored && (
                    <span className="rounded-full bg-amber-50 px-2.5 py-1 text-[10px] font-bold text-amber-600 ring-1 ring-amber-200">
                      Sponsored
                    </span>
                  )}
                </div>
                <h3 className="mt-3 text-[16px] font-bold text-slate-900">{o.name}</h3>
                <Rating value={o.rating} className="mt-1" />
                <p className="mt-2 flex-1 text-[13px] leading-relaxed text-slate-500">{o.desc}</p>
                <span
                  className={`mt-3 block rounded-xl border border-dashed py-2 text-center text-[13px] font-extrabold ${o.badgeClass}`}
                >
                  {o.badge}
                </span>
                <button
                  onClick={() => navigate("deal", o.brand)}
                  className="btn-ripple gradient-bg group mt-2 flex w-full items-center justify-center gap-1.5 rounded-xl py-2.5 text-[13px] font-bold text-white shadow-md shadow-indigo-500/25 transition-shadow hover:shadow-indigo-500/45"
                >
                  View Offer
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Best Affiliate Programs ---------------- */
const PROGRAMS = [
  { brand: "amazon", name: "Amazon Associates", rating: 4.6, commission: "Up to 10%" },
  { brand: "clickbank", name: "ClickBank", rating: 4.7, commission: "Up to 75%" },
  { brand: "impact", name: "Impact", rating: 4.6, commission: "Up to 40%" },
  { brand: "shareasale", name: "ShareASale", rating: 4.5, commission: "Up to 20%" },
  { brand: "cj", name: "CJ Affiliate", rating: 4.5, commission: "Up to 30%" },
];

export function AffiliatePrograms() {
  return (
    <section className="mx-auto max-w-[1440px] px-4 py-12 sm:px-8 lg:py-16">
      <SectionHeading title="Best Affiliate Programs" linkLabel="View All Programs" />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
        {PROGRAMS.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.07}>
            <div className="card card-hover flex h-full flex-col p-4">
              <div className="flex items-center gap-3">
                {p.brand === "amazon" ? <AmazonLogo size={44} /> :
                 p.brand === "clickbank" ? <ClickBankLogo size={44} /> :
                 p.brand === "impact" ? <ImpactLogo size={44} /> :
                 p.brand === "shareasale" ? <ShareASaleLogo size={44} /> :
                 p.brand === "cj" ? <CJLogo size={44} /> :
                 <LogoBadge brand={BRANDS[p.brand]} size={44} />}
                <div className="min-w-0">
                  <h3 className="truncate text-[14px] font-bold text-slate-900">{p.name}</h3>
                  <Rating value={p.rating} />
                </div>
              </div>
              <p className="mt-3 text-[12px] font-semibold uppercase tracking-wide text-slate-400">
                Commission
              </p>
              <p className="mt-1 text-[24px] font-extrabold tracking-tight text-slate-900">
                {p.commission}
              </p>
                <button
                  onClick={() => navigate("affiliate", p.brand)}
                  className="btn-ripple group mt-3 flex w-full items-center justify-center gap-1.5 rounded-xl border border-indigo-200 py-2.5 text-[13px] font-bold text-indigo-600 transition-all hover:border-transparent hover:bg-indigo-600 hover:text-white"
                >
                  Join Now
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </button>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
