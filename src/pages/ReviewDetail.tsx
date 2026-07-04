import { Award, CalendarDays, Check, ChevronRight, Clock, ExternalLink, Trophy, User, X } from "lucide-react";
import { useState } from "react";
import { navigate } from "../router";
import { PageHeader } from "../components/shared";
import { LogoBadge, Rating, Reveal } from "../components/ui";
import { REVIEWS_DATA } from "../data/reviews-data";
import { getBrand } from "../data/brand";

const TOC_SECTIONS = [
  "Overview",
  "Pros & Cons",
  "Key Features",
  "Pricing",
  "Performance",
  "Alternatives",
  "Final Verdict",
];

export default function ReviewDetail({ id }: { id?: string }) {
  const [activeSection, setActiveSection] = useState("Overview");
  const review = id ? REVIEWS_DATA[id] : undefined;

  if (!review) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 p-8 text-center">
        <p className="text-[20px] font-extrabold text-slate-900">Review not found</p>
        <button onClick={() => navigate("home")} className="gradient-bg rounded-xl px-6 py-3 text-sm font-bold text-white">
          Back to Home
        </button>
      </div>
    );
  }

  const brand = getBrand(review.brandKey);
  const brandName = review.title.split(" ")[0];
  const scrollTo = (id: string) => {
    setActiveSection(id);
    document.getElementById(`section-${id}`)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-bg-primary pb-16">
      <PageHeader
        crumbs={[
          { label: "Home", route: "home" },
          { label: "Reviews", route: "reviews" },
          { label: review.title },
        ]}
      />

      {/* ═══════════════════════════════════════
         REVIEW HERO
      ═══════════════════════════════════════ */}
      <section className="mx-auto max-w-[1440px] px-4 pt-8 sm:px-8">
        <Reveal>
          <div className="card relative overflow-hidden p-8 sm:p-10">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-purple-100/30 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 left-1/4 h-48 w-48 rounded-full bg-blue-100/20 blur-3xl" />

            <div className="relative flex flex-wrap items-start justify-between gap-6">
              <div className="max-w-3xl">
                <div className="flex flex-wrap items-center gap-3">
                  {review.recommended && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-600 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-white">
                      <Award className="h-3.5 w-3.5" /> Editor's Choice
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1 text-[14px] font-bold text-amber-500">
                    <span className="inline-flex">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <span key={i} className="text-amber-400">{i <= Math.round(review.rating) ? "★" : "☆"}</span>
                      ))}
                    </span>
                    {review.rating}
                  </span>
                </div>
                <h1 className="mt-4 text-[36px] font-extrabold leading-[1.12] tracking-tight text-slate-900 sm:text-[48px] xl:text-[56px]">
                  {review.title}:
                  <br />
                  <span className="text-slate-700">The Definitive Guide to {brandName} in 2024</span>
                </h1>
                <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-slate-400">
                  <span className="flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center overflow-hidden rounded-full bg-slate-200">
                      <User className="h-3.5 w-3.5 text-slate-500" />
                    </span>
                    By <span className="font-semibold text-slate-700">{review.author}</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CalendarDays className="h-3.5 w-3.5" /> {review.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" /> {review.readTime}
                  </span>
                </div>
              </div>

              <div className="flex shrink-0 items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50/50 p-4">
                <LogoBadge brand={brand} size={56} />
                <div>
                  <p className="text-[13px] font-semibold text-slate-400">Overall</p>
                  <p className="text-[28px] font-extrabold text-slate-900">{review.score.toFixed(1)}</p>
                  <Rating value={review.score} size={10} />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ═══════════════════════════════════════
         THREE-COLUMN LAYOUT
      ═══════════════════════════════════════ */}
      <div className="mx-auto mt-8 grid max-w-[1440px] items-start gap-8 px-4 sm:px-8 lg:grid-cols-[220px_1fr_320px]">
        {/* ── LEFT: TOC ── */}
        <aside className="lg:sticky lg:top-28">
          <div className="card p-5">
            <p className="font-heading mb-1 text-[11px] font-extrabold tracking-widest text-slate-400">ON THIS PAGE</p>
            <nav className="relative mt-4 space-y-1">
              <div className="absolute left-[11px] top-0 h-full w-px bg-slate-100" />
              {TOC_SECTIONS.map((s) => {
                const isActive = activeSection === s;
                return (
                  <button
                    key={s}
                    onClick={() => scrollTo(s)}
                    className={`relative flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-[12.5px] font-semibold transition-all ${
                      isActive
                        ? "text-purple-600"
                        : "text-slate-500 hover:text-slate-800"
                    }`}
                  >
                    <span
                      className={`relative z-10 h-[22px] w-[22px] shrink-0 rounded-full text-[10px] font-extrabold flex items-center justify-center transition-all ${
                        isActive
                          ? "bg-purple-600 text-white shadow-sm"
                          : "bg-slate-100 text-slate-400"
                      }`}
                    >
                      {TOC_SECTIONS.indexOf(s) + 1}
                    </span>
                    <span>{s}</span>
                    {isActive && (
                      <span className="absolute left-[11px] top-0 z-10 h-full w-px bg-purple-600" />
                    )}
                  </button>
                );
              })}
            </nav>
          </div>
        </aside>

        {/* ── CENTER: MAIN CONTENT ── */}
        <div className="space-y-10">
          {/* Overview: Rating Summary + Software Overview */}
          <div id="section-Overview">
          <Reveal>
            <div className="card grid gap-8 p-6 sm:grid-cols-[auto_1fr] sm:p-8">
              <div className="flex flex-col items-center justify-center">
                <div className="relative h-[130px] w-[130px]">
                  <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90">
                    <circle cx="18" cy="18" r="15.5" fill="none" stroke="#eef0f6" strokeWidth="3.5" />
                    <circle
                      cx="18" cy="18" r="15.5" fill="none"
                      stroke="url(#scoreGradient)" strokeWidth="3.5" strokeLinecap="round"
                      strokeDasharray={`${(review.score / 5) * 97.4} 97.4`}
                    />
                    <defs>
                      <linearGradient id="scoreGradient" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0" stopColor="#6D4CFF" />
                        <stop offset="1" stopColor="#7B61FF" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <p className="text-[32px] font-extrabold text-slate-900">{review.score.toFixed(1)}</p>
                    <p className="text-[11px] font-semibold text-slate-400">Out of 5</p>
                  </div>
                </div>
                <p className="mt-2 text-[13px] font-bold text-purple-600">Outstanding</p>
              </div>
              <div className="space-y-4">
                <p className="font-heading text-[15px] font-extrabold text-slate-900">Rating Breakdown</p>
                {review.scores.map((s) => (
                  <div key={s.label}>
                    <div className="mb-1.5 flex items-center justify-between">
                      <span className="text-[13px] font-semibold text-slate-600">{s.label}</span>
                      <span className="text-[13px] font-extrabold text-slate-900">{s.value.toFixed(1)}</span>
                    </div>
                    <div className="h-2.5 overflow-hidden rounded-full bg-slate-100">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-purple-500 to-purple-400"
                        style={{ width: `${(s.value / 5) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Software Overview */}
          <Reveal>
            <div>
              <h2 className="text-[28px] font-extrabold tracking-tight text-slate-900 sm:text-[36px]">Software Overview</h2>
              <div className="mt-4 space-y-4">
                {review.overview.map((p, i) => (
                  <p key={i} className="text-[16px] leading-[1.8] text-slate-500 sm:text-[17px]">{p}</p>
                ))}
              </div>
            </div>
          </Reveal>
          </div>

          {/* Feature Preview Image */}
          <Reveal>
            <div className="card overflow-hidden">
              <div className="flex h-[240px] items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-50 sm:h-[340px]">
                <LogoBadge brand={brand} size={96} />
              </div>
            </div>
          </Reveal>

          {/* Pros & Cons */}
          <Reveal>
            <div id="section-Pros & Cons">
              <h2 className="text-[28px] font-extrabold tracking-tight text-slate-900 sm:text-[36px]">Pros & Cons</h2>
              <div className="mt-4 grid gap-6 sm:grid-cols-2">
                <div className="card border-emerald-100 p-6">
                  <p className="font-heading mb-4 flex items-center gap-2.5 text-[16px] font-extrabold text-emerald-600">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50">
                      <Check className="h-5 w-5" />
                    </span>
                    The Wins
                  </p>
                  <ul className="space-y-3">
                    {review.pros.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-[14px] text-slate-600">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="card border-rose-100 p-6">
                  <p className="font-heading mb-4 flex items-center gap-2.5 text-[16px] font-extrabold text-rose-500">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-rose-50">
                      <X className="h-5 w-5" />
                    </span>
                    The Trade-offs
                  </p>
                  <ul className="space-y-3">
                    {review.cons.map((c) => (
                      <li key={c} className="flex items-start gap-3 text-[14px] text-slate-600">
                        <X className="mt-0.5 h-4 w-4 shrink-0 text-rose-400" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Key Features */}
          <Reveal>
            <div id="section-Key Features">
              <h2 className="text-[28px] font-extrabold tracking-tight text-slate-900 sm:text-[36px]">Key Features</h2>
              <div className="mt-4 grid gap-5 sm:grid-cols-2">
                {[
                  { title: "Funnel Builder", desc: "Drag-and-drop builder to create high-converting sales funnels in minutes without any coding." },
                  { title: "Template Library", desc: "Access hundreds of professionally designed funnel templates optimized for conversions." },
                  { title: "CRM Automation", desc: "Built-in customer relationship management with automated follow-up sequences." },
                  { title: "A/B Split Testing", desc: "Test different funnel variations to optimize conversion rates with real-time analytics." },
                ].map((f) => (
                  <div key={f.title} className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
                    <h3 className="text-[15px] font-extrabold text-slate-900">{f.title}</h3>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-slate-500">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Pricing */}
          <Reveal>
            <div id="section-Pricing">
              <h2 className="text-[28px] font-extrabold tracking-tight text-slate-900 sm:text-[36px]">Pricing</h2>
              <div className="mt-4 grid gap-5 sm:grid-cols-3">
                {[
                  { plan: "Basic", price: "$127/mo", users: "1 User", desc: "Core funnel builder with essential templates." },
                  { plan: "Pro", price: "$157/mo", users: "3 Users", desc: "Unlimited funnels, templates, and priority support.", popular: true },
                  { plan: "Enterprise", price: "$208/mo", users: "5+ Users", desc: "Advanced features, CRM, and dedicated account manager." },
                ].map((p) => (
                  <div key={p.plan} className={`relative rounded-xl border p-5 ${p.popular ? "border-purple-200 bg-purple-50/40 shadow-sm" : "border-slate-100 bg-white shadow-sm"}`}>
                    {p.popular && (
                      <span className="absolute -top-2.5 left-4 rounded-full bg-purple-600 px-3 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-white">
                        Popular
                      </span>
                    )}
                    <h3 className="text-[15px] font-extrabold text-slate-900">{p.plan}</h3>
                    <p className="mt-1 text-[24px] font-extrabold text-slate-900">{p.price}</p>
                    <p className="text-[12px] text-slate-400">{p.users}</p>
                    <p className="mt-3 text-[13px] text-slate-500">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Performance */}
          <Reveal>
            <div id="section-Performance">
              <h2 className="text-[28px] font-extrabold tracking-tight text-slate-900 sm:text-[36px]">Performance</h2>
              <div className="mt-4 grid gap-5 sm:grid-cols-3">
                {[
                  { metric: "Uptime", value: "99.9%", desc: "Reliable platform availability" },
                  { metric: "Loading Speed", value: "< 2s", desc: "Fast page load times" },
                  { metric: "Conversion Rate", value: "4.2%", desc: "Average funnel conversion" },
                ].map((m) => (
                  <div key={m.metric} className="card flex flex-col items-center p-5 text-center">
                    <p className="text-[28px] font-extrabold text-purple-600">{m.value}</p>
                    <p className="mt-1 text-[14px] font-bold text-slate-900">{m.metric}</p>
                    <p className="mt-1 text-[12px] text-slate-400">{m.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Alternatives */}
          <Reveal>
            <div id="section-Alternatives">
              <h2 className="text-[28px] font-extrabold tracking-tight text-slate-900 sm:text-[36px]">Alternatives</h2>
              <div className="mt-4 grid gap-5 sm:grid-cols-3">
                {review.related.map((r) => (
                  <button
                    key={r.name}
                    onClick={() => navigate("review", r.brandKey)}
                    className="card card-hover flex flex-col items-center p-5 text-center"
                  >
                    <LogoBadge brand={getBrand(r.brandKey)} size={52} />
                    <p className="mt-3 text-[14px] font-bold text-slate-900">{r.name}</p>
                    <Rating value={r.rating} className="mt-1" size={11} />
                    <span className="mt-2 text-[12px] font-semibold text-purple-600">Read Review →</span>
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Final Verdict */}
          <Reveal>
            <div id="section-Final Verdict">
              <div className="card relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-purple-50/40 p-8 sm:p-10">
                <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-purple-200/30 blur-3xl" />
                <div className="relative flex flex-col items-center text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100">
                    <Trophy className="h-8 w-8 text-purple-600" />
                  </span>
                  <h2 className="mt-4 text-[28px] font-extrabold tracking-tight text-slate-900 sm:text-[36px]">Final Verdict</h2>
                  <p className="mt-4 max-w-2xl text-[16px] leading-[1.8] text-slate-500">
                    {review.verdict}
                  </p>
                  <p className="mt-4 text-[15px] font-bold text-slate-900">
                    {review.recommended
                      ? `We highly recommend ${brandName} for anyone looking to build and optimize their marketing funnels.`
                      : "Consider your options before choosing."}
                  </p>
                  <button className="btn-ripple mt-6 inline-flex h-[52px] items-center gap-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-purple-500 px-8 text-[15px] font-bold text-white shadow-[0_8px_24px_rgba(109,76,255,0.25)] transition-all hover:brightness-105 hover:shadow-[0_12px_30px_rgba(109,76,255,0.35)]">
                    Start Your 14-Day Free Trial
                    <ExternalLink className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ── RIGHT: STICKY SIDEBAR ── */}
        <aside className="space-y-6 lg:sticky lg:top-28">
          {/* Summary Card */}
          <Reveal>
            <div className="card border-purple-200 bg-gradient-to-b from-purple-50/60 to-white p-5 ring-1 ring-purple-100">
              <div className="flex flex-col items-center text-center">
                <p className="text-[36px] font-extrabold text-slate-900">{review.score.toFixed(1)}</p>
                <div className="mt-1 inline-flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className={`text-[18px] ${i <= Math.round(review.score) ? "text-amber-400" : "text-slate-200"}`}>★</span>
                  ))}
                </div>
                <p className="mt-1 text-[11px] font-semibold text-slate-400">Out of 5</p>
              </div>
              <div className="mt-2">
                <LogoBadge brand={brand} size={48} className="mx-auto" />
              </div>
              <p className="mt-3 text-[12.5px] font-bold text-slate-900">Our Summary</p>
              <p className="mt-1 text-[12.5px] leading-relaxed text-slate-500">{review.verdict.slice(0, 120)}...</p>
              <button className="btn-ripple mt-4 w-full rounded-xl bg-gradient-to-r from-purple-600 to-purple-500 py-3 text-[13.5px] font-bold text-white shadow-[0_6px_20px_rgba(109,76,255,0.25)] transition-all hover:brightness-105">
                Visit {brandName} →
              </button>
              <p className="mt-2 text-[11px] text-slate-400">
                We may earn a commission if you purchase through our links.
              </p>
            </div>
          </Reveal>

          {/* Related Reviews */}
          <Reveal delay={0.1}>
            <div className="card p-5">
              <p className="font-heading mb-4 text-[13px] font-extrabold text-slate-900">Related Reviews</p>
              <div className="space-y-3">
                {review.related.map((r) => (
                  <button
                    key={r.name}
                    onClick={() => navigate("review", r.brandKey)}
                    className="flex w-full items-center gap-3 rounded-2xl border border-slate-100 p-3 text-left transition-all hover:border-purple-200 hover:bg-purple-50/40"
                  >
                    <LogoBadge brand={getBrand(r.brandKey)} size={38} />
                    <div className="flex-1">
                      <p className="text-[12.5px] font-bold text-slate-900">{r.name}</p>
                      <Rating value={r.rating} size={10} />
                    </div>
                    <ChevronRight className="h-4 w-4 text-slate-300" />
                  </button>
                ))}
              </div>
            </div>
          </Reveal>
        </aside>
      </div>
    </div>
  );
}
