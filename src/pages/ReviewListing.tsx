import { ArrowRight, Check, Search, SlidersHorizontal, Star } from "lucide-react";
import { useState } from "react";
import { navigate } from "../router";
import { Newsletter } from "../components/NewsletterFooter";
import { LogoBadge, Rating, Reveal } from "../components/ui";
import { PageHeader, Pagination } from "../components/shared";
import { REVIEWS_DATA } from "../data/reviews-data";
import { getBrand } from "../data/brand";

const ALL_REVIEWS = Object.entries(REVIEWS_DATA).map(([key, r]) => ({ key, ...r }));

const RATING_OPTIONS = [
  { label: "5+ Stars", min: 5, count: ALL_REVIEWS.filter((r) => r.rating >= 5).length },
  { label: "4+ Stars", min: 4, count: ALL_REVIEWS.filter((r) => r.rating >= 4).length },
  { label: "3+ Stars", min: 3, count: ALL_REVIEWS.filter((r) => r.rating >= 3).length },
];

const CATEGORY_OPTIONS = [
  { label: "SEO", count: ALL_REVIEWS.filter((r) => ["semrush", "ahrefs", "moz", "ubersuggest", "spyfu"].includes(r.key)).length },
  { label: "Design", count: ALL_REVIEWS.filter((r) => ["canva"].includes(r.key)).length },
  { label: "Hosting", count: ALL_REVIEWS.filter((r) => ["hostinger"].includes(r.key)).length },
  { label: "Marketing", count: ALL_REVIEWS.filter((r) => ["semrush", "ahrefs", "moz", "spyfu"].includes(r.key)).length },
  { label: "Funnels", count: ALL_REVIEWS.filter((r) => ["clickfunnels"].includes(r.key)).length },
];

export default function ReviewListing() {
  const [sort, setSort] = useState("Latest");
  const [query, setQuery] = useState("");

  const filtered = ALL_REVIEWS.filter(
    (r) => !query || r.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="bg-primary pb-4">
      <PageHeader
        crumbs={[
          { label: "Home", route: "home" },
          { label: "Reviews" },
        ]}
      />

      {/* ═══════════════════════════════════════
         HERO BANNER
      ═══════════════════════════════════════ */}
      <section className="mx-auto max-w-[1440px] px-4 pt-8 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#F0F2FF] via-white to-[#F5F0FF] p-8 sm:p-12">
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-purple-100/40 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 left-1/3 h-60 w-60 rounded-full bg-blue-100/30 blur-3xl" />

            <div className="relative flex items-center gap-12">
              {/* Left */}
              <div className="flex-1">
                <h1 className="text-[42px] font-extrabold leading-[1.12] tracking-tight text-slate-900 sm:text-[52px] xl:text-[60px]">
                  Honest Reviews.
                  <br />
                  <span className="gradient-text">Better Decisions.</span>
                </h1>
                <p className="mt-4 max-w-lg text-[18px] leading-relaxed text-slate-500">
                  In-depth, unbiased reviews of the top marketing platforms, SEO tools, hosting providers, and design software.
                </p>
                <div className="relative mt-7 max-w-[420px]">
                  <Search className="absolute left-5 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search reviews..."
                    className="h-[52px] w-full rounded-full border border-slate-200 bg-white pl-[52px] pr-5 text-[15px] text-slate-900 shadow-[0_4px_20px_rgba(15,23,42,0.06)] outline-none transition-all placeholder:text-slate-400 focus:border-purple-400 focus:shadow-[0_0_0_4px_rgba(109,76,255,0.12)]"
                  />
                </div>
              </div>

              {/* Right - floating cards */}
              <div className="relative hidden h-[340px] w-[320px] shrink-0 lg:block">
                {/* Rating card */}
                <div className="card animate-float-a absolute right-4 top-0 z-10 w-[170px] bg-white/95 p-4 backdrop-blur-md">
                  <p className="text-[10px] font-semibold text-slate-400">Overall Rating</p>
                  <div className="mt-1 flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="mt-1 text-[24px] font-extrabold text-slate-900">4.8</p>
                  <p className="text-[11px] text-slate-400">Based on 248 reviews</p>
                </div>

                {/* Verification badge */}
                <div className="card animate-float-b absolute bottom-16 left-0 z-10 flex h-[72px] w-[72px] items-center justify-center bg-white/95 backdrop-blur-md">
                  <span className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-emerald-50">
                    <Check className="h-6 w-6 text-emerald-500" />
                  </span>
                </div>

                {/* Mini review card */}
                <div className="card animate-float-c absolute bottom-0 right-6 z-10 w-[180px] bg-white/95 p-3.5 backdrop-blur-md">
                  <div className="flex items-center gap-2.5">
                    <LogoBadge brand={getBrand("semrush")} size={36} />
                    <div>
                      <p className="text-[12px] font-bold text-slate-900">Semrush</p>
                      <Rating value={4.8} size={9} />
                    </div>
                  </div>
                  <span className="mt-2 inline-block rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-600">
                    Top Rated
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ═══════════════════════════════════════
         MAIN CONTENT: Filters + Grid
      ═══════════════════════════════════════ */}
      <div className="mx-auto grid max-w-[1440px] items-start gap-8 px-4 py-10 sm:px-8 lg:grid-cols-[280px_1fr]">
        {/* ── Filters ── */}
        <aside className="lg:sticky lg:top-28">
          <div className="card p-5">
            <div className="flex items-center justify-between">
              <p className="flex items-center gap-2 text-[14px] font-extrabold text-slate-900">
                <SlidersHorizontal className="h-4 w-4 text-purple-500" /> Filters
              </p>
              <button className="text-[12px] font-bold text-purple-600 transition-colors hover:text-purple-700">
                Clear All
              </button>
            </div>

            <div className="mt-4 space-y-5">
              {/* Rating Filter */}
              <div>
                <p className="font-heading mb-3 text-[12.5px] font-extrabold text-slate-900">Rating</p>
                <div className="space-y-2.5">
                  {RATING_OPTIONS.map((opt) => (
                    <label key={opt.label} className="flex cursor-pointer items-center gap-2.5 text-[13px] text-slate-600 transition-colors hover:text-slate-900">
                      <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-purple-600 focus:ring-purple-300" />
                      <span className="flex-1">{opt.label}</span>
                      <span className="text-[11px] text-slate-400">({opt.count})</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="h-px bg-divider" />

              {/* Category Filter */}
              <div>
                <p className="font-heading mb-3 text-[12.5px] font-extrabold text-slate-900">Category</p>
                <div className="space-y-2.5">
                  {CATEGORY_OPTIONS.map((opt) => (
                    <label key={opt.label} className="flex cursor-pointer items-center gap-2.5 text-[13px] text-slate-600 transition-colors hover:text-slate-900">
                      <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-purple-600 focus:ring-purple-300" />
                      <span className="flex-1">{opt.label}</span>
                      <span className="text-[11px] text-slate-400">({opt.count})</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="h-px bg-divider" />

              {/* Editor's Choice */}
              <div>
                <p className="font-heading mb-3 text-[12.5px] font-extrabold text-slate-900">Editor's Choice</p>
                <label className="flex cursor-pointer items-center gap-2.5 text-[13px] text-slate-600 transition-colors hover:text-slate-900">
                  <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-purple-600 focus:ring-purple-300" />
                  Recommended Only
                </label>
              </div>
            </div>
          </div>
        </aside>

        {/* ── Results ── */}
        <div>
          {/* Results Header */}
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <p className="text-[13.5px] text-slate-500">
              Showing <span className="font-extrabold text-slate-900">1–{filtered.length}</span> of{" "}
              <span className="font-extrabold text-slate-900">{filtered.length}</span> reviews
            </p>
            <label className="flex items-center gap-2 text-[13px] text-slate-500">
              Sort by:
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-[13px] font-semibold text-slate-700 outline-none transition-all focus:border-purple-400 focus:ring-4 focus:ring-purple-100"
              >
                {["Latest", "Highest Rated", "Most Popular", "Recently Updated", "A–Z", "Editor Picks"].map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </label>
          </div>

          {/* Review Cards Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((r, i) => (
              <Reveal key={r.key} delay={i * 0.05}>
                <button onClick={() => navigate("review", r.key)} className="card card-hover group flex h-full w-full flex-col text-left">
                  <div className="flex h-[120px] items-center justify-center overflow-hidden rounded-t-[16px] bg-gradient-to-br from-slate-50 via-white to-slate-50">
                    <span className="transition-transform duration-500 group-hover:scale-110">
                      <LogoBadge brand={getBrand(r.brandKey)} size={64} />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5 pt-4">
                    <h3 className="text-[22px] font-bold leading-tight text-slate-900">{r.title}</h3>
                    <Rating value={r.rating} className="mt-1.5" size={14} />
                    <p className="mt-2 flex-1 text-[13px] leading-relaxed text-slate-500">
                      {r.overview[0]?.slice(0, 110)}...
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-bold text-purple-600 transition-colors group-hover:text-purple-700">
                      Read Review
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12">
            <Pagination total={Math.ceil(filtered.length / 8)} />
          </div>

          {/* ── Popular Reviews ── */}
          <Reveal className="mt-14">
            <div className="flex items-center justify-between">
              <h2 className="text-[22px] font-extrabold tracking-tight text-slate-900">Popular Reviews</h2>
              <button
                onClick={() => navigate("reviews")}
                className="text-[13px] font-semibold text-purple-600 transition-colors hover:text-purple-700"
              >
                View All
              </button>
            </div>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {["Semrush Review", "Ahrefs Review", "Canva Pro Review", "Moz Pro Review", "ClickFunnels Review", "Hostinger Review", "SpyFu Review"].map((t) => (
                <button
                  key={t}
                  onClick={() => setQuery(t)}
                  className="rounded-full border border-purple-200 bg-purple-50/60 px-4 py-1.5 text-[12.5px] font-medium text-purple-700 transition-all hover:bg-purple-100 hover:text-purple-800"
                >
                  {t}
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <Newsletter />
    </div>
  );
}
