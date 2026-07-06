import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { navigate } from "../router";
import { BRANDS, GoogleAdsLogo, LogoBadge, Reveal, SectionHeading, CanvaLogo, HostingerLogo, SemrushLogo, EnvatoLogo, ClickFunnelsLogo, TiltCard, ScaleReveal } from "./ui";

/* ---------------- Today's Best Deals (countdown) ---------------- */
const DEALS = [
  { brand: "canva", name: "Canva Pro", off: "50% OFF", on: "On Annual Plan", ends: 12 * 3600 + 45 * 60 + 30 },
  { brand: "hostinger", name: "Hostinger", off: "80% OFF", on: "On Hosting Plans", ends: 8 * 3600 + 25 * 60 + 30 },
  { brand: "semrush", name: "Semrush", off: "30% OFF", on: "On Guru Plan", ends: 10 * 3600 + 15 * 60 + 30 },
  { brand: "envato", name: "Envato Elements", off: "Unlimited", on: "7 Days Free Trial", ends: 6 * 3600 + 15 * 60 + 30 },
  { brand: "clickfunnels", name: "ClickFunnels", off: "20% OFF", on: "On Annual Plan", ends: 9 * 3600 + 55 * 60 + 30 },
];

function useCountdown(initial: number) {
  const [left, setLeft] = useState(initial);
  useEffect(() => {
    const id = setInterval(() => setLeft((s) => (s > 0 ? s - 1 : 24 * 3600)), 1000);
    return () => clearInterval(id);
  }, []);
  const h = Math.floor(left / 3600);
  const m = Math.floor((left % 3600) / 60);
  const s = left % 60;
  return [h, m, s].map((n) => String(n).padStart(2, "0"));
}

function DealCard({ deal }: { deal: (typeof DEALS)[number] }) {
  const [h, m, s] = useCountdown(deal.ends);
  const units = [
    { v: h, l: "Hours" },
    { v: m, l: "Mins" },
    { v: s, l: "Secs" },
  ];
  return (
    <div className="group/card card card-hover flex h-full flex-col p-5 bg-white/70 backdrop-blur-md">
      <div className="flex items-center gap-3">
        <div className="transition-transform duration-300 group-hover/card:scale-105">
          {deal.brand === "canva" ? <CanvaLogo size={42} /> :
           deal.brand === "hostinger" ? <HostingerLogo size={42} /> :
           deal.brand === "semrush" ? <SemrushLogo size={42} /> :
           deal.brand === "envato" ? <EnvatoLogo size={42} /> :
           deal.brand === "clickfunnels" ? <ClickFunnelsLogo size={42} /> :
           <LogoBadge brand={BRANDS[deal.brand]} size={42} />}
        </div>
        <div>
          <h3 className="text-[14px] font-extrabold text-slate-900 group-hover/card:text-indigo-650 transition-colors leading-tight">{deal.name}</h3>
          <span className="mt-1 inline-block rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 px-2 py-0.5 text-[10px] font-extrabold text-emerald-700 tracking-wide uppercase">
            {deal.off}
          </span>
        </div>
      </div>
      <p className="mt-3 text-center text-[13px] font-bold text-slate-700 leading-snug">{deal.on}</p>
      <p className="mt-4 flex items-center justify-center gap-1.5 text-[11px] font-extrabold uppercase tracking-widest text-slate-400">
        <span className="h-1.5 w-1.5 rounded-full bg-indigo-600 animate-pulse" />
        Expires in
      </p>
      <div className="mt-2.5 grid grid-cols-3 gap-2">
        {units.map((u) => (
          <div key={u.l} className="rounded-xl bg-slate-50 border border-slate-100/50 py-2.5 text-center">
            <p className="text-[17px] font-black tabular-nums text-indigo-600 leading-none">{u.v}</p>
            <p className="mt-1 text-[9px] font-extrabold uppercase tracking-wider text-slate-400">{u.l}</p>
          </div>
        ))}
      </div>
      <button
        onClick={() => navigate("deal", deal.brand)}
        className="btn-ripple mt-4 flex w-full items-center justify-center gap-1.5 rounded-xl border border-indigo-200/80 bg-indigo-50/20 py-2.5 text-[13px] font-bold text-indigo-600 shadow-sm transition-all hover:bg-indigo-600 hover:text-white hover:border-transparent hover:shadow-md hover:shadow-indigo-500/20"
      >
        View Deal
        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/card:translate-x-1" />
      </button>
    </div>
  );
}

export function BestDeals() {
  return (
      <section className="bg-secondary">
        <div className="mx-auto max-w-[1440px] px-4 py-12 sm:px-8 lg:py-16">
          <SectionHeading title="Today's Best Deals" linkLabel="View All Deals" linkRoute="deals" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
          {DEALS.map((d, i) => (
            <ScaleReveal key={d.name} delay={i * 0.07}>
              <TiltCard>
                <DealCard deal={d} />
              </TiltCard>
            </ScaleReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Compare Top Platforms ---------------- */
const COMPARE = [
  { brand: "googleads", name: "Google Ads", tag: "Best for Search Ads" },
  { brand: "facebook", name: "Facebook Ads", tag: "Best for Social Ads" },
  { brand: "tiktok", name: "TikTok Ads", tag: "Best for Short Video Ads" },
];

export function ComparePlatforms() {
  return (
    <section className="mx-auto max-w-[1440px] px-4 py-12 sm:px-8 lg:py-16">
      <SectionHeading
        center
        title="Compare Top Platforms"
        subtitle="Compare features, pricing and find the best platform for your business."
      />
      <Reveal>
        <div className="card relative overflow-hidden p-6 sm:p-8 border border-slate-100 bg-white/70 backdrop-blur-md">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-100/60 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-indigo-100/60 blur-3xl" />
          <div className="relative flex flex-col items-center justify-center gap-8 lg:flex-row lg:gap-6">
            {COMPARE.map((c, i) => (
              <div key={c.name} className="flex flex-col items-center gap-8 lg:flex-row lg:gap-6">
                {i > 0 && (
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 text-[11px] font-black text-white shadow-md shadow-indigo-500/20 ring-4 ring-white">
                    VS
                  </span>
                )}
                <TiltCard>
                  <div className="group/cmp flex w-full items-center gap-4 rounded-2xl border border-slate-100 bg-white p-4.5 shadow-sm transition-all duration-300 hover:border-indigo-200/50 hover:shadow-md sm:w-64">
                    {c.brand === "googleads" ? (
                      <GoogleAdsLogo size={50} />
                    ) : (
                      <LogoBadge brand={BRANDS[c.brand]} size={50} />
                    )}
                    <div>
                      <p className="font-heading text-[15px] font-extrabold text-slate-900 group-hover/cmp:text-indigo-650 transition-colors leading-tight">{c.name}</p>
                      <p className="mt-1 text-[12px] font-medium text-slate-500 leading-none">{c.tag}</p>
                    </div>
                  </div>
                </TiltCard>
              </div>
            ))}
          </div>
          <div className="relative mt-8 text-center">
            <button
              onClick={() => navigate("compare")}
              className="btn-ripple gradient-bg group inline-flex h-12 items-center gap-2 rounded-xl px-8 text-[14px] font-bold text-white shadow-xl shadow-indigo-500/30 transition-all hover:shadow-indigo-500/50"
            >
              Compare Now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
