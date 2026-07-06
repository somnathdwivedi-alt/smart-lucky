import {
  ArrowRight,
  BrainCircuit,
  ChevronDown,
  Footprints,
  Headphones,
  Megaphone,
  Monitor,
  PenLine,
  Mail,
  Plug,
  Search,
  Server,
  Shirt,
  ShoppingCart,
  SlidersHorizontal,
  Smartphone,
  ThumbsUp,
  Tv,
  Users,
  Watch,
} from "lucide-react";
import { useState } from "react";
import { navigate } from "../router";
import {
  FilterGroup,
  PageHeader,
  Pagination,
  RatingFilterGroup,
  ToolRowCard,
} from "../components/shared";
import { Newsletter } from "../components/NewsletterFooter";
import { Reveal } from "../components/ui";
import { CATEGORIES, getCategory } from "../data/categories-data";

const ICON_MAP: Record<string, typeof Monitor> = {
  Monitor, Users, Megaphone, Search, Mail, BrainCircuit,
  Server, ShoppingCart, ThumbsUp, PenLine,
  Smartphone, Headphones, Watch, Footprints, Shirt, Plug, Tv,
};

function AllCategories() {
  return (
    <div className="bg-secondary pb-4">
      <div className="mx-auto max-w-[1340px] px-6 py-12 sm:px-8">
        <Reveal>
          <div className="mb-14 text-center">
            <h1 className="text-[26px] font-extrabold tracking-tight text-slate-900 sm:text-[36px]">
              Explore <span className="gradient-text">Categories</span>
            </h1>
            <p className="mx-auto mt-3 max-w-lg text-[15px] text-slate-500">
              Browse tools, deals, and offers across every marketing category. Find exactly what you need.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
          {CATEGORIES.map((c, i) => {
            const Icon = ICON_MAP[c.icon] || Monitor;
            return (
              <Reveal key={c.id} delay={(i % 5) * 0.07}>
                <button
                  onClick={() => navigate("category", c.id)}
                  className="card card-hover group block w-full p-5 text-left"
                >
                  <span
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${c.image ? "bg-white border border-slate-100 p-2" : c.bg} text-white shadow-lg transition-transform duration-300 group-hover:scale-110 overflow-hidden`}
                  >
                    {c.image ? (
                      <img src={c.image} alt={c.title} className="h-full w-full object-contain" />
                    ) : (
                      <Icon className="h-7 w-7" />
                    )}
                  </span>
                  <h3 className="mt-3 text-[16px] font-bold text-slate-900">{c.title}</h3>
                  <p className="mt-1 text-[13px] text-slate-400">{c.count}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-[13px] font-bold text-indigo-600">
                    Explore
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
      <Newsletter />
    </div>
  );
}

export default function CategoryListing({ id }: { id?: string }) {
  const [sort, setSort] = useState("Popular");
  const [showFilters, setShowFilters] = useState(false);
  const [query, setQuery] = useState("");

  const cat = id ? getCategory(id) : undefined;

  if (!cat) return <AllCategories />;

  const filtered = cat.items.filter(
    (t) => !query || t.name.toLowerCase().includes(query.toLowerCase()) || t.desc.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="bg-secondary pb-8">
      <PageHeader
        crumbs={[
          { label: "Home", route: "home" },
          { label: "Categories", route: "category" },
          { label: cat.title },
        ]}
      />

      {/* Category Header */}
      <div className="mx-auto max-w-[1340px] px-6 pt-8 sm:px-8">
        <h1 className="text-[28px] font-extrabold tracking-tight text-slate-900 sm:text-[40px]">
          {cat.title}
        </h1>
        <p className="mt-2 text-[16px] text-slate-500">
          {cat.description}
        </p>

        {/* Search + Sort row */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={cat.searchPlaceholder}
              className="input h-14 w-full rounded-xl pl-12 pr-5 text-[15px]"
            />
          </div>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="select h-14 w-full rounded-xl px-4 text-[14px] font-medium sm:w-[220px]"
          >
            {["Popular", "Highest Rated", "Price: Low to High", "Newest"].map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Main content */}
      <div className="mx-auto mt-8 grid max-w-[1340px] items-start gap-8 px-6 sm:px-8 lg:grid-cols-[280px_1fr]">
        {/* Sidebar Filters */}
        <aside className="lg:sticky lg:top-28">
          <div className="card p-6">
            <div className="mb-2 flex items-center justify-between">
              <p className="font-heading flex items-center gap-2 text-[15px] font-extrabold text-slate-900">
                <SlidersHorizontal className="h-4 w-4 text-indigo-500" /> Filters
              </p>
              <button className="text-[13px] font-semibold text-indigo-600 hover:text-indigo-800">
                Clear All
              </button>
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="btn-secondary mt-3 w-full py-2.5 text-[13px] lg:hidden"
            >
              {showFilters ? "Hide Filters" : "Show Filters"}
            </button>
            <div className={`${showFilters ? "block" : "hidden"} lg:block`}>
              <FilterGroup
                title="Price"
                options={[
                  { label: "Free", count: "12" },
                  { label: "Paid", count: String(filtered.length - 12 > 0 ? filtered.length : filtered.length) },
                  { label: "Freemium", count: "8" },
                ]}
              />
              <FilterGroup title="Free Trial" options={[{ label: "Yes", count: String(filtered.length) }]} />
              <RatingFilterGroup />
              <FilterGroup
                title="Platforms"
                options={[
                  { label: "Web Based" },
                  { label: "Windows" },
                  { label: "Mac" },
                  { label: "Linux" },
                ]}
              />
              <FilterGroup
                title="Business Size"
                options={[{ label: "Freelancer" }, { label: "Small Business" }, { label: "Enterprise" }]}
              />
              <button className="mt-4 flex items-center gap-1 text-[13px] font-semibold text-indigo-600 hover:text-indigo-800">
                More Filters <ChevronDown className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </aside>

        {/* Listing Area */}
        <div>
          <p className="mb-5 text-[14px] text-slate-500">
            Showing <span className="font-semibold text-slate-900">1–{filtered.length}</span> of{" "}
            <span className="font-semibold text-slate-900">{filtered.length}</span> items
          </p>

          <div className="space-y-5">
            {filtered.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.05}>
                <ToolRowCard t={t} />
              </Reveal>
            ))}
          </div>

          <div className="mt-10">
            <Pagination />
          </div>

          {/* Popular Searches */}
          <Reveal className="mt-10">
            <div className="card p-6">
              <p className="font-heading mb-4 text-[15px] font-extrabold text-slate-900">Popular Searches</p>
              <div className="flex flex-wrap gap-2">
                {cat.trending.map((t) => (
                  <span
                    key={t}
                    onClick={() => setQuery(t)}
                    className="cursor-pointer rounded-full border border-slate-200 bg-card px-4 py-1.5 text-[13px] font-medium text-slate-500 transition-all hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600"
                  >
                    {t}
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
