import { Search, X } from "lucide-react";
import { useState } from "react";
import {
  EXTRA_BRANDS,
  FilterGroup,
  PageHeader,
  Pagination,
  RatingFilterGroup,
  ToolRowCard,
  type ToolRow,
} from "../components/shared";
import { BRANDS, Reveal } from "../components/ui";

const TABS = [
  { label: "All", count: 230 },
  { label: "Deals", count: 80 },
  { label: "Tools", count: 120 },
  { label: "Reviews", count: 40 },
  { label: "News", count: 20 },
];

const RESULTS: ToolRow[] = [
  { brand: BRANDS.semrush, name: "Semrush", desc: "All-in-one SEO & marketing toolkit", rating: 4.8, meta: "From $119.95/mo", badge: "30% OFF", id: "semrush" },
  { brand: BRANDS.ahrefs, name: "Ahrefs", desc: "Backlink checker & SEO tools", rating: 4.7, meta: "From $99/mo", badge: "Starts from $99", badgeClass: "bg-indigo-50 text-indigo-600 ring-1 ring-indigo-200", id: "ahrefs" },
  { brand: EXTRA_BRANDS.moz, name: "Moz Pro", desc: "SEO software suite for rankings & visibility", rating: 4.6, meta: "From $99/mo", badge: "30 Days Free Trial", badgeClass: "bg-violet-50 text-violet-600 ring-1 ring-violet-200", id: "moz" },
  { brand: EXTRA_BRANDS.ubersuggest, name: "Ubersuggest", desc: "Keyword research & SEO audit tool", rating: 4.5, meta: "From $29/mo", badge: "Free Plan Available", badgeClass: "bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200", id: "ubersuggest" },
  { brand: BRANDS.canva, name: "Canva Pro", desc: "Design platform for marketing assets", rating: 4.8, meta: "$12.99/mo", badge: "50% OFF", id: "canva" },
];

export default function SearchResults() {
  const [query, setQuery] = useState("SEO tools");
  const [tab, setTab] = useState("All");

  const filtered = RESULTS.filter(
    (r) => r.name.toLowerCase().includes(query.toLowerCase()) || r.desc.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="bg-[#F8FAFC] pb-8">
      <PageHeader crumbs={[{ label: "Home", route: "home" }, { label: "Search" }]} />

      <div className="mx-auto max-w-[1280px] px-6 pt-8 sm:px-8">
        {/* ─────── SEARCH INPUT ─────── */}
        <Reveal>
          <div className="relative mx-auto max-w-3xl">
            <Search className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-[#6B7280]" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search SEO tools..."
              className="h-14 w-full rounded-2xl border border-[#E5E7EB] bg-white pl-14 pr-14 text-[18px] text-[#111827] shadow-sm outline-none transition-all placeholder:text-[#6B7280] focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-[#6B7280] transition-colors hover:text-[#111827]"
                aria-label="Clear search"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
          <p className="mt-4 text-center text-[15px] text-[#6B7280]">
            <span className="font-semibold text-[#111827]">{filtered.length} results</span> found for "
            <span className="font-semibold text-indigo-600">{query}</span>"
          </p>
        </Reveal>

        {/* ─────── SEARCH CATEGORY TABS ─────── */}
        <Reveal className="mt-8">
          <div className="flex gap-1 overflow-x-auto border-b border-[#E5E7EB] scrollbar-none">
            {TABS.map((t) => (
              <button
                key={t.label}
                onClick={() => setTab(t.label)}
                className={`relative shrink-0 px-5 py-4 text-[14px] font-semibold transition-colors ${
                  tab === t.label
                    ? "text-indigo-600"
                    : "text-[#6B7280] hover:text-[#111827]"
                }`}
              >
                {t.label} <span className="text-[13px] font-normal text-[#6B7280]">({t.count})</span>
                {tab === t.label && (
                  <span className="absolute inset-x-3 -bottom-px h-[3px] rounded-full bg-indigo-600" />
                )}
              </button>
            ))}
          </div>
        </Reveal>

        {/* ─────── MAIN CONTENT ─────── */}
        <div className="mt-8 grid items-start gap-8 lg:grid-cols-[280px_1fr]">
          {/* Sidebar Filters */}
          <aside className="lg:sticky lg:top-28">
            <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
              <div className="mb-2 flex items-center justify-between">
                <p className="text-[15px] font-bold text-[#111827]">Filters</p>
                <button className="text-[13px] font-semibold text-indigo-600 hover:text-indigo-800">
                  Clear All
                </button>
              </div>
              <FilterGroup
                title="Category"
                options={[
                  { label: "SEO Tools", count: "160" },
                  { label: "Deals", count: "80" },
                  { label: "Reviews", count: "40" },
                ]}
              />
              <FilterGroup
                title="Price"
                options={[{ label: "Free" }, { label: "Paid" }, { label: "Freemium" }]}
              />
              <RatingFilterGroup />
              <FilterGroup title="Free Trial" options={[{ label: "Yes" }]} />
              <div className="border-b border-[#E5E7EB] py-[14px]">
                <p className="font-heading mb-4 text-[13px] font-extrabold text-[#111827]">Sort By</p>
                <select className="h-11 w-full rounded-xl border border-[#E5E7EB] bg-white px-3 text-[13px] font-semibold text-[#111827] outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100">
                  {["Most Relevant", "Most Popular", "Highest Rated", "Newest"].map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </div>
            </div>
          </aside>

          {/* Results */}
          <div>
            <p className="mb-5 text-[14px] text-[#6B7280]">
              Showing <span className="font-semibold text-[#111827]">1–{filtered.length}</span> of{" "}
              <span className="font-semibold text-[#111827]">{filtered.length}</span> results
            </p>

            <div className="space-y-5">
              {filtered.map((r, i) => (
                <Reveal key={r.name} delay={i * 0.05}>
                  <ToolRowCard t={r} />
                </Reveal>
              ))}
            </div>

            <div className="mt-10">
              <Pagination total={16} />
            </div>

            {/* ─────── REQUEST TOOL CTA ─────── */}
            <Reveal className="mt-12">
              <div className="rounded-2xl border border-[#E5E7EB] bg-white p-8 shadow-sm">
                <div className="flex flex-col items-center gap-6 sm:flex-row">
                  <div className="flex-1">
                    <p className="text-[22px] font-bold text-[#111827]">
                      Can't find what you're looking for?
                    </p>
                    <p className="mt-2 text-[15px] leading-relaxed text-[#6B7280]">
                      Request a tool and we will review it for you. We add new tools and deals every single week.
                    </p>
                    <button className="mt-5 flex h-[48px] items-center justify-center rounded-xl bg-indigo-600 px-8 text-[15px] font-bold text-white shadow-lg shadow-indigo-500/30 transition-all hover:bg-indigo-700">
                      Request Tool
                    </button>
                  </div>
                  <div className="flex h-36 w-36 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-50 via-white to-violet-50">
                    <Search className="h-14 w-14 text-indigo-300" />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}
