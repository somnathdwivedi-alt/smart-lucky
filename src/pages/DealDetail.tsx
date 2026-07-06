import {
  ArrowRight,
  BadgeCheck,
  Bookmark,
  Clock,
  Globe,
  Rocket,
  Share2,
  ShieldCheck,
  Sparkles,
  Wallet,
} from "lucide-react";
import { useState } from "react";
import { navigate } from "../router";
import {
  CheckItem,
  Countdown,
  CouponCode,
  FAQAccordion,
  PageHeader,
  ProsCons,
  Tabs,
} from "../components/shared";
import { Newsletter } from "../components/NewsletterFooter";
import { LogoBadge, Rating, Reveal } from "../components/ui";
import { DEALS_DATA } from "../data/deals-data";
import { getBrand } from "../data/brand";

const TRUST_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  BadgeCheck, ShieldCheck, Wallet, Rocket, Sparkles, Globe,
};

function MiniDashboard() {
  return (
    <div className="card overflow-hidden rounded-2xl border-slate-200/70">
      <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50/80 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
      </div>
      <div className="grid grid-cols-3 gap-3 p-5">
        {["Traffic", "Keywords", "Backlinks"].map((k, i) => (
          <div key={k} className="rounded-xl bg-indigo-50/70 p-3">
            <p className="text-[10px] font-semibold text-slate-400">{k}</p>
            <p className="text-sm font-extrabold text-indigo-700">
              {["128K", "4,560", "89.2K"][i]}
            </p>
          </div>
        ))}
        <div className="col-span-3 rounded-xl border border-slate-100 p-4">
          <svg viewBox="0 0 300 70" className="w-full">
            <path
              d="M0 60 C30 55 45 30 75 36 S120 58 150 40 200 10 230 20 280 8 300 4"
              fill="none"
              stroke="url(#g1)"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="g1" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#4f46e5" />
                <stop offset="1" stopColor="#7c3aed" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function DealDetail({ id }: { id?: string }) {
  const [tab, setTab] = useState("Overview");
  const [saved, setSaved] = useState(false);

  const deal = id ? DEALS_DATA[id] : undefined;
  if (!deal) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 p-8 text-center">
        <p className="text-[20px] font-extrabold text-slate-900">Deal not found</p>
        <button onClick={() => navigate("home")} className="gradient-bg rounded-xl px-6 py-3 text-sm font-bold text-white">
          Back to Home
        </button>
      </div>
    );
  }

  const trustItems = deal.trustIcons.map((name) => ({
    icon: TRUST_ICONS[name] || BadgeCheck,
    label: name === "BadgeCheck" ? "Official Partner"
      : name === "ShieldCheck" ? "Verified Offer"
      : name === "Wallet" ? "No Hidden Charges"
      : name === "Rocket" ? "Instant Activation"
      : name === "Sparkles" ? "Beginner Friendly"
      : "Global Access",
  }));

  return (
    <div className="bg-secondary pb-4">
      <PageHeader
        crumbs={[
          { label: "Home", route: "home" },
          { label: "Deals", route: "category" },
          { label: deal.name },
        ]}
      />

      <div className="mx-auto grid max-w-[1440px] items-start gap-8 px-4 py-8 sm:px-8 lg:grid-cols-[1fr_360px]">
        {/* ---------- Main column ---------- */}
        <div className="space-y-8">
          {/* Hero card */}
          <Reveal>
            <div className="card p-6 sm:p-8">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                <LogoBadge brand={getBrand(deal.brandKey)} size={72} />
                <div className="flex-1">
                  <h1 className="text-[20px] font-extrabold tracking-tight text-slate-900 sm:text-[24px]">
                    {deal.name}
                  </h1>
                  <div className="mt-1.5 flex flex-wrap items-center gap-3">
                    <Rating value={deal.rating} size={15} />
                    <span className="text-[13px] text-slate-400">({deal.reviewCount})</span>
                  </div>
                  <div className="mt-3 flex flex-wrap items-center gap-2.5">
                    <span className={deal.badgeClass + " rounded-full px-3 py-1 text-[12px] font-extrabold"}>
                      {deal.badge}
                    </span>
                    <span className="flex items-center gap-1.5 rounded-full bg-rose-50 px-3 py-1 text-[12px] font-bold text-rose-500 ring-1 ring-rose-200">
                      <Clock className="h-3.5 w-3.5" /> {deal.expiresLabel}
                    </span>
                    <span className="flex items-center gap-1.5 rounded-full bg-indigo-50 px-3 py-1 text-[12px] font-bold text-indigo-600 ring-1 ring-indigo-200">
                      <BadgeCheck className="h-3.5 w-3.5" /> Official Partner
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <button className="btn-ripple gradient-bg group flex h-12 items-center gap-2 rounded-xl px-7 text-[14px] font-bold text-white shadow-lg shadow-indigo-500/30 transition-all hover:shadow-indigo-500/50">
                  Get Deal
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
                <button className="btn-ripple flex h-12 items-center gap-2 rounded-xl border border-indigo-200 px-7 text-[14px] font-bold text-indigo-600 transition-all hover:bg-indigo-50">
                  Visit Website
                </button>
                <button
                  onClick={() => setSaved(!saved)}
                  className={`flex h-12 items-center gap-2 rounded-xl border px-5 text-[13px] font-bold transition-all ${
                    saved
                      ? "border-indigo-300 bg-indigo-50 text-indigo-600"
                      : "border-slate-200 text-slate-600 hover:border-indigo-300 hover:text-indigo-600"
                  }`}
                >
                  <Bookmark className={`h-4 w-4 ${saved ? "fill-indigo-500 text-indigo-500" : ""}`} />
                  {saved ? "Saved" : "Save"}
                </button>
                <button className="flex h-12 items-center gap-2 rounded-xl border border-slate-200 px-5 text-[13px] font-bold text-slate-600 transition-all hover:border-indigo-300 hover:text-indigo-600">
                  <Share2 className="h-4 w-4" /> Share
                </button>
              </div>
            </div>
          </Reveal>

          {/* Trust badges */}
          <Reveal>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-6">
              {trustItems.map((t) => (
                <div key={t.label} className="card flex flex-col items-center gap-2 p-4 text-center">
                  <t.icon className="h-5 w-5 text-indigo-500" />
                  <span className="text-[11.5px] font-bold text-slate-700">{t.label}</span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Tabs */}
          <Reveal>
            <div className="card p-6 sm:p-8">
              <Tabs
                tabs={["Overview", "Benefits", "Screenshots", "Reviews", "FAQ"]}
                active={tab}
                onChange={setTab}
              />
              <div className="pt-6">
                {tab === "Overview" && (
                  <div className="grid gap-8 lg:grid-cols-2">
                    <div>
                      <h2 className="text-[18px] font-extrabold text-slate-900">
                        About {deal.name}
                      </h2>
                      <p className="mt-3 text-[13.5px] leading-relaxed text-slate-500">
                        {deal.description}
                      </p>
                      <ul className="mt-3 space-y-2.5">
                        {deal.checklist.map((item) => (
                          <CheckItem key={item}>{item}</CheckItem>
                        ))}
                      </ul>
                    </div>
                    <MiniDashboard />
                  </div>
                )}
                {tab === "Benefits" && (
                  <ProsCons pros={deal.pros} cons={deal.cons} />
                )}
                {tab === "Screenshots" && (
                  <div className="grid gap-6 sm:grid-cols-2">
                    <MiniDashboard />
                    <MiniDashboard />
                  </div>
                )}
                {tab === "Reviews" && (
                  <div className="space-y-4">
                    {deal.reviews.map((rv) => (
                      <div key={rv.n} className="rounded-2xl border border-slate-100 bg-slate-50/60 p-5">
                        <div className="flex items-center justify-between">
                          <p className="text-[13.5px] font-bold text-slate-900">{rv.n}</p>
                          <Rating value={rv.r} />
                        </div>
                        <p className="mt-2 text-[13.5px] leading-relaxed text-slate-500">{rv.t}</p>
                      </div>
                    ))}
                  </div>
                )}
                {tab === "FAQ" && <FAQAccordion items={deal.faqs} />}
              </div>
            </div>
          </Reveal>

          {/* Similar deals */}
          <Reveal>
            <div>
              <h2 className="mb-3 text-[20px] font-extrabold text-slate-900">Similar Deals</h2>
              <div className="grid grid-cols-2 gap-6 xl:grid-cols-4">
                {deal.similar.map((s) => (
                  <div key={s.name} className="card card-hover flex flex-col items-center p-4 text-center">
                    <LogoBadge brand={getBrand(s.brandKey)} size={46} />
                    <p className="mt-3 text-[14px] font-bold text-slate-900">{s.name}</p>
                    <div className="mt-1 flex items-center gap-2">
                      <Rating value={s.rating} size={11} />
                    </div>
                    <span className="mt-2 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-extrabold text-emerald-600 ring-1 ring-emerald-200">
                      {s.off}
                    </span>
                    <button
                      onClick={() => navigate("deal", s.brandKey)}
                      className="btn-ripple gradient-bg mt-3 w-full rounded-xl py-2 text-[12px] font-bold text-white shadow-md shadow-indigo-500/25"
                    >
                      View Deal
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* ---------- Sticky sidebar ---------- */}
        <aside className="space-y-6 lg:sticky lg:top-28">
          <Reveal>
            <div className="card p-5">
              <p className="gradient-text text-center text-[34px] font-extrabold">{deal.badge}</p>
              <p className="mt-1 text-center text-[12.5px] text-slate-400">Coupon Code</p>
              <div className="mt-3">
                <CouponCode code={deal.couponCode} />
              </div>
              <p className="mb-2 mt-4 text-center text-[11.5px] font-semibold uppercase tracking-wide text-slate-400">
                Offer Ends In
              </p>
              <Countdown seconds={deal.countdownSeconds} />
              <button className="btn-ripple gradient-bg group mt-4 flex w-full items-center justify-center gap-2 rounded-xl py-3 text-[14px] font-bold text-white shadow-lg shadow-indigo-500/30 transition-all hover:shadow-indigo-500/50">
                Visit Website
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <ul className="mt-4 space-y-2">
                <CheckItem>Verified & tested today</CheckItem>
                <CheckItem>7-day free trial included</CheckItem>
                <CheckItem>Cancel anytime, no fees</CheckItem>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card p-5">
              <p className="font-heading text-[13px] font-extrabold text-slate-900">Recommended Alternative</p>
              <div className="mt-3 flex items-center gap-3">
                <LogoBadge brand={getBrand(deal.similar[0]?.brandKey ?? deal.brandKey)} size={44} />
                <div>
                  <p className="text-[14px] font-bold text-slate-900">{deal.similar[0]?.name ?? "Alternative"}</p>
                  <Rating value={deal.similar[0]?.rating ?? 0} size={11} />
                </div>
              </div>
              <button
                onClick={() => navigate("compare")}
                className="mt-3 w-full rounded-xl border border-indigo-200 py-2.5 text-[12.5px] font-bold text-indigo-600 transition-all hover:bg-indigo-50"
              >
                Compare with Alternatives
              </button>
            </div>
          </Reveal>
        </aside>
      </div>

      <Newsletter />
    </div>
  );
}
