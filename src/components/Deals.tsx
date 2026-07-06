import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { navigate } from "../router";
import { BRANDS, GoogleAdsLogo, LogoBadge, Reveal, SectionHeading, CanvaLogo, HostingerLogo, SemrushLogo, EnvatoLogo, ClickFunnelsLogo } from "./ui";

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
    <div className="card card-hover flex h-full flex-col p-4">
      <div className="flex items-center gap-3">
        {deal.brand === "canva" ? <CanvaLogo size={42} /> :
         deal.brand === "hostinger" ? <HostingerLogo size={42} /> :
         deal.brand === "semrush" ? <SemrushLogo size={42} /> :
         deal.brand === "envato" ? <EnvatoLogo size={42} /> :
         deal.brand === "clickfunnels" ? <ClickFunnelsLogo size={42} /> :
         <LogoBadge brand={BRANDS[deal.brand]} size={42} />}
        <div>
          <h3 className="text-[14px] font-bold text-slate-900">{deal.name}</h3>
          <span className="mt-0.5 inline-block rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-extrabold text-emerald-600 ring-1 ring-emerald-200">
            {deal.off}
          </span>
        </div>
      </div>
      <p className="mt-2 text-center text-[13px] font-semibold text-slate-500">{deal.on}</p>
      <p className="mt-2 text-center text-[11px] font-semibold uppercase tracking-wide text-slate-400">
        Expires in
      </p>
      <div className="mt-2 grid grid-cols-3 gap-2">
        {units.map((u) => (
          <div key={u.l} className="rounded-xl bg-indigo-50/80 py-2 text-center">
            <p className="text-[17px] font-extrabold tabular-nums text-indigo-700">{u.v}</p>
            <p className="text-[10px] font-semibold text-indigo-400">{u.l}</p>
          </div>
        ))}
      </div>
      <button
        onClick={() => navigate("deal", deal.brand)}
        className="btn-ripple group mt-3 flex w-full items-center justify-center gap-1.5 rounded-xl border border-indigo-200 bg-indigo-50/60 py-2.5 text-[13px] font-bold text-indigo-600 transition-all hover:border-transparent hover:bg-indigo-600 hover:text-white"
      >
        View Deal
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
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
            <Reveal key={d.name} delay={i * 0.07}>
              <DealCard deal={d} />
            </Reveal>
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
        <div className="card relative overflow-hidden p-6 sm:p-8">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-100/60 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-indigo-100/60 blur-3xl" />
          <div className="relative flex flex-col items-center justify-center gap-8 lg:flex-row lg:gap-6">
            {COMPARE.map((c, i) => (
              <div key={c.name} className="flex flex-col items-center gap-8 lg:flex-row lg:gap-6">
                {i > 0 && (
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-[12px] font-extrabold text-slate-400 ring-4 ring-white">
                    VS
                  </span>
                )}
                <div className="flex w-full items-center gap-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition-shadow hover:shadow-lg sm:w-64">
                  {c.brand === "googleads" ? (
                    <GoogleAdsLogo size={50} />
                  ) : (
                    <LogoBadge brand={BRANDS[c.brand]} size={50} />
                  )}
                  <div>
                    <p className="font-heading text-[16px] font-extrabold text-slate-900">{c.name}</p>
                    <p className="text-[12px] text-slate-400">{c.tag}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="relative mt-6 text-center">
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
