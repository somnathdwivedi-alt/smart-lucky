import { ChevronRight, Search, SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import { navigate } from "../router";
import { Newsletter } from "../components/NewsletterFooter";
import { LogoBadge, Rating, Reveal, StaggerContainer, StaggerItem } from "../components/ui";
import { PageHeader, Pagination } from "../components/shared";
import { TOOLS_DATA } from "../data/tools-data";
import { getBrand } from "../data/brand";

const ALL_TOOLS = Object.entries(TOOLS_DATA).map(([key, t]) => ({ key, ...t }));

const CATEGORY_OPTIONS = ["SEO", "Design", "AI Writing", "Email Marketing", "CRM", "Social Media", "Productivity", "Writing Assistant"];
const PRICING_OPTIONS = ["Free", "Under $10/mo", "$10-$20/mo", "$20-$50/mo", "$50+/mo"];
const SORT_OPTIONS = ["Popular", "Highest Rated", "Newest", "Most Reviewed", "Alphabetical", "Free First"];

export default function ToolListing() {
  const [sort, setSort] = useState("Popular");
  const [query, setQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<Set<string>>(new Set());
  const [selectedPricing, setSelectedPricing] = useState<Set<string>>(new Set());

  const toggleCategory = (cat: string) => {
    setSelectedCategories((prev) => {
      const next = new Set(prev);
      if (next.has(cat)) next.delete(cat);
      else next.add(cat);
      return next;
    });
  };

  const togglePricing = (p: string) => {
    setSelectedPricing((prev) => {
      const next = new Set(prev);
      if (next.has(p)) next.delete(p);
      else next.add(p);
      return next;
    });
  };

  const clearAll = () => {
    setSelectedCategories(new Set());
    setSelectedPricing(new Set());
  };

  const anyFilters = selectedCategories.size > 0 || selectedPricing.size > 0;

  let filtered = ALL_TOOLS.filter((t) => {
    if (query && !t.name.toLowerCase().includes(query.toLowerCase()) && !t.description.toLowerCase().includes(query.toLowerCase())) return false;
    if (selectedCategories.size > 0) {
      const cat = t.meta.find((m) => m.label === "Category")?.value ?? t.tags[0] ?? "";
      if (!selectedCategories.has(cat)) return false;
    }
    if (selectedPricing.size > 0) {
      const price = t.meta.find((m) => m.label === "Pricing")?.value ?? "";
      const numeric = parseFloat(price.replace(/[^0-9.]/g, ""));
      let match = false;
      selectedPricing.forEach((range) => {
        if (range === "Free" && (price === "$0" || price.toLowerCase().includes("free"))) match = true;
        else if (range === "Under $10/mo" && numeric > 0 && numeric < 10) match = true;
        else if (range === "$10-$20/mo" && numeric >= 10 && numeric <= 20) match = true;
        else if (range === "$20-$50/mo" && numeric > 20 && numeric <= 50) match = true;
        else if (range === "$50+/mo" && numeric > 50) match = true;
      });
      if (!match) return false;
    }
    return true;
  });

  switch (sort) {
    case "Highest Rated":
      filtered = [...filtered].sort((a, b) => b.rating - a.rating);
      break;
    case "Newest":
      break;
    case "Most Reviewed":
      filtered = [...filtered].sort((a, b) => (b.reviews?.length ?? 0) - (a.reviews?.length ?? 0));
      break;
    case "Alphabetical":
      filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "Free First":
      filtered = [...filtered].sort((a, b) => {
        const aFree = a.meta.some((m) => m.value === "$0" || m.value.toLowerCase().includes("free")) ? 0 : 1;
        const bFree = b.meta.some((m) => m.value === "$0" || m.value.toLowerCase().includes("free")) ? 0 : 1;
        return aFree - bFree;
      });
      break;
  }

  return (
    <div className="bg-slate-50/50 pb-4">
      <PageHeader
        crumbs={[
          { label: "Home", route: "home" },
          { label: "Tools" },
        ]}
      />

      {/* ═══════════════════════════════════════
         HERO BANNER
      ═══════════════════════════════════════ */}
      <section className="mx-auto max-w-[1440px] px-4 pt-6 sm:px-8">
        <Reveal>
          <div className="card relative overflow-hidden p-8 sm:p-10">
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-cyan-100/60 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 right-1/3 h-56 w-56 rounded-full bg-indigo-100/60 blur-3xl" />

            <div className="relative">
              <h1 className="text-[40px] font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-[52px] xl:text-[60px]">
                Marketing Tools
              </h1>
              <p className="mt-3 max-w-2xl text-[16px] leading-relaxed text-slate-500 sm:text-[18px]">
                Compare the best marketing tools across SEO, design, AI, email, social media, and productivity.
                <br />
                In-depth features, pricing, and user reviews.
              </p>

              <div className="mt-6">
                <p className="mb-2 text-[13px] font-bold text-slate-400">Search Tools</p>
                <div className="relative max-w-[450px]">
                  <Search className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search tools..."
                    className="h-[52px] w-full rounded-2xl border border-slate-200 bg-white pl-12 pr-5 text-[15px] shadow-sm outline-none transition-all placeholder:text-slate-400 focus:border-indigo-300 focus:ring-4 focus:ring-indigo-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ═══════════════════════════════════════
         TWO-COLUMN LAYOUT
      ═══════════════════════════════════════ */}
      <div className="mx-auto mt-8 grid max-w-[1440px] items-start gap-8 px-4 sm:px-8 lg:grid-cols-[270px_1fr]">
        {/* ── FILTER SIDEBAR ── */}
        <aside className="lg:sticky lg:top-28">
          <div className="card p-5">
            <div className="flex items-center justify-between">
              <p className="flex items-center gap-2 text-[14px] font-extrabold text-slate-900">
                <SlidersHorizontal className="h-4 w-4 text-indigo-500" /> Filters
              </p>
              {anyFilters && (
                <button onClick={clearAll} className="text-[12px] font-bold text-indigo-600 hover:text-violet-600">
                  Clear All
                </button>
              )}
            </div>

            <button
              onClick={() => setShowFilters(!showFilters)}
              className="mt-3 w-full rounded-xl border border-slate-200 py-2.5 text-[12.5px] font-bold text-slate-600 lg:hidden"
            >
              {showFilters ? "Hide Filters" : "Show Filters"}
            </button>

            <div className={`${showFilters ? "block" : "hidden"} mt-4 space-y-5 lg:block`}>
              {/* Category */}
              <div>
                <p className="font-heading mb-3 text-[12.5px] font-extrabold text-slate-900">Category</p>
                <div className="space-y-2.5">
                  {CATEGORY_OPTIONS.map((lbl) => (
                    <label key={lbl} className="flex cursor-pointer items-center gap-2.5 text-[13px] text-slate-600 hover:text-slate-900">
                      <input
                        type="checkbox"
                        checked={selectedCategories.has(lbl)}
                        onChange={() => toggleCategory(lbl)}
                        className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-300"
                      />
                      {lbl}
                    </label>
                  ))}
                </div>
              </div>

              {/* Pricing */}
              <div>
                <p className="font-heading mb-3 text-[12.5px] font-extrabold text-slate-900">Pricing</p>
                <div className="space-y-2.5">
                  {PRICING_OPTIONS.map((lbl) => (
                    <label key={lbl} className="flex cursor-pointer items-center gap-2.5 text-[13px] text-slate-600 hover:text-slate-900">
                      <input
                        type="checkbox"
                        checked={selectedPricing.has(lbl)}
                        onChange={() => togglePricing(lbl)}
                        className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-300"
                      />
                      {lbl}
                    </label>
                  ))}
                </div>
              </div>

              {/* Free Trial */}
              <div>
                <p className="font-heading mb-3 text-[12.5px] font-extrabold text-slate-900">Free Trial</p>
                <label className="flex cursor-pointer items-center gap-2.5 text-[13px] text-slate-600 hover:text-slate-900">
                  <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-300" />
                  Available
                </label>
              </div>
            </div>
          </div>
        </aside>

        {/* ── RESULTS ── */}
        <div>
          {/* Results toolbar */}
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <p className="text-[13.5px] text-slate-500">
              Showing <span className="font-extrabold text-slate-900">1–{filtered.length}</span> of{" "}
              <span className="font-extrabold text-slate-900">{filtered.length}</span> tools
            </p>
            <label className="flex items-center gap-2 text-[13px] text-slate-500">
              Sort By:
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-[13px] font-semibold text-slate-700 outline-none focus:border-indigo-300 focus:ring-4 focus:ring-indigo-100"
              >
                {SORT_OPTIONS.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </label>
          </div>

          {/* Tools Grid */}
          <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.map((t) => {
              const category = t.meta.find((m) => m.label === "Category")?.value ?? t.tags[0] ?? "Tool";
              const reviewCount = t.reviews?.length ?? 0;
              return (
                <StaggerItem key={t.key}>
                  <button
                    onClick={() => navigate("tool", t.key)}
                    className="card card-hover group flex h-full w-full flex-col p-5 text-left"
                  >
                    {/* Logo + Category Badge */}
                    <div className="flex items-start justify-between gap-3">
                      <LogoBadge brand={getBrand(t.brandKey)} size={48} />
                      <span className="shrink-0 rounded-full bg-indigo-50 px-2.5 py-0.5 text-[11px] font-extrabold text-indigo-600">
                        {category}
                      </span>
                    </div>

                    {/* Name */}
                    <h3 className="mt-4 text-[22px] font-bold leading-tight tracking-tight text-slate-900">
                      {t.name}
                    </h3>

                    {/* Rating */}
                    <div className="mt-2 flex items-center gap-2">
                      <Rating value={t.rating} size={14} />
                      <span className="text-[12px] text-slate-400">
                        ({reviewCount === 1 ? "1 review" : `${reviewCount} reviews`})
                      </span>
                    </div>

                    {/* Description */}
                    <p className="mt-2 flex-1 text-[13px] leading-relaxed text-slate-500 line-clamp-2">
                      {t.description}
                    </p>

                    {/* Divider + Bottom */}
                    <div className="mt-4 border-t border-slate-100 pt-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-[10px] font-extrabold tracking-widest text-slate-400">REACH</p>
                          <p className="text-[13px] font-bold text-slate-900">{t.userCount}</p>
                        </div>
                        <span className="flex items-center gap-1 text-[13px] font-bold text-indigo-600 transition-all group-hover:gap-2">
                          View Details <ChevronRight className="h-3.5 w-3.5" />
                        </span>
                      </div>
                    </div>
                  </button>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          {/* Pagination */}
          <div className="mt-10">
            <Pagination />
          </div>

          {/* Browse by Category */}
          <Reveal className="mt-10">
            <div className="card p-6">
              <h3 className="text-[18px] font-extrabold tracking-tight text-slate-900 sm:text-[22px]">
                Browse by Category
              </h3>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {[
                  "SEO Tools",
                  "Graphic Design",
                  "AI Content Generators",
                  "Social Media Schedulers",
                  "Video Editors",
                  "Ad Management",
                  "Market Research",
                  "Project Management",
                  "Email Marketing",
                  "CRM Platforms",
                ].map((cat) => (
                  <span
                    key={cat}
                    onClick={() => { setQuery(cat.replace(/ tools| generators| schedulers| platforms$/i, "")); setShowFilters(false); }}
                    className="cursor-pointer rounded-full border border-indigo-200 bg-indigo-50/60 px-4 py-1.5 text-[12.5px] font-semibold text-indigo-700 transition-all hover:border-indigo-400 hover:bg-indigo-100 hover:text-indigo-800"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <Newsletter />
    </div>
  );
}
