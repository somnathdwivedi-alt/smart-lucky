import { CalendarDays, ChevronRight, Clock, Search } from "lucide-react";
import { useState } from "react";
import { navigate } from "../router";
import { Newsletter } from "../components/NewsletterFooter";
import { Reveal, StaggerContainer, StaggerItem } from "../components/ui";
import { PageHeader, Pagination } from "../components/shared";
import { NEWS_DATA } from "../data/news-data";

const ALL_ARTICLES = Object.entries(NEWS_DATA).map(([key, a]) => ({ key, ...a }));

const CATEGORY_PILLS = [
  "Marketing News",
  "Social Media News",
  "Trends",
  "SEO",
  "AI Marketing",
  "Advertising",
  "Affiliate Marketing",
  "Case Studies",
  "Industry Insights",
  "Platform Updates",
];

export default function NewsListing() {
  const [sort, setSort] = useState("Latest");
  const [query, setQuery] = useState("");

  let filtered = ALL_ARTICLES.filter(
    (a) => !query || a.title.toLowerCase().includes(query.toLowerCase()) || a.category.toLowerCase().includes(query.toLowerCase())
  );

  switch (sort) {
    case "Oldest":
      filtered = [...filtered].reverse();
      break;
    case "Most Popular":
      break;
    case "Trending":
      break;
  }

  return (
    <div className="bg-slate-50/50 pb-4">
      <PageHeader
        crumbs={[
          { label: "Home", route: "home" },
          { label: "Blog" },
        ]}
      />

      {/* ═══════════════════════════════════════
         HERO BANNER
      ═══════════════════════════════════════ */}
      <section className="mx-auto max-w-[1440px] px-4 pt-6 sm:px-8">
        <Reveal>
          <div className="card relative overflow-hidden p-8 sm:p-10">
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-sky-100/60 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 right-1/3 h-56 w-56 rounded-full bg-indigo-100/60 blur-3xl" />

            <div className="relative">
              <h1 className="text-[40px] font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-[52px] xl:text-[60px]">
                Marketing Blog
              </h1>
              <p className="mt-3 max-w-[650px] text-[16px] leading-relaxed text-slate-500 sm:text-[18px]">
                Stay up to date with the latest marketing news, platform updates, SEO insights, and industry trends.
                <br />
                New articles every week from our expert strategists.
              </p>

              <div className="mt-6">
                <p className="mb-2 text-[13px] font-bold text-slate-400">Search Articles</p>
                <div className="relative max-w-[500px]">
                  <Search className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search articles, topics, or trends..."
                    className="h-[52px] w-full rounded-2xl border border-slate-200 bg-white pl-12 pr-5 text-[15px] shadow-sm outline-none transition-all placeholder:text-slate-400 focus:border-indigo-300 focus:ring-4 focus:ring-indigo-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ═══════════════════════════════════════
         ARTICLES TOOLBAR
      ═══════════════════════════════════════ */}
      <div className="mx-auto mt-8 max-w-[1440px] px-4 sm:px-8">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <p className="text-[13.5px] text-slate-500">
            Showing <span className="font-extrabold text-slate-900">1–{filtered.length}</span> of{" "}
            <span className="font-extrabold text-slate-900">{filtered.length}</span> articles
          </p>
          <label className="flex items-center gap-2 text-[13px] text-slate-500">
            Sort By:
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-[13px] font-semibold text-slate-700 outline-none focus:border-indigo-300 focus:ring-4 focus:ring-indigo-100"
            >
              {["Latest", "Most Popular", "Most Read", "Trending", "Oldest", "Editor's Choice"].map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </label>
        </div>

        {/* ═══════════════════════════════════════
           ARTICLES GRID
        ═══════════════════════════════════════ */}
        <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((a, i) => {
            const imgSrc = a.image || "/images/blog.jpg";
            return (
              <StaggerItem key={a.key}>
                <button onClick={() => navigate("news", a.key)} className="card card-hover group flex h-full w-full flex-col overflow-hidden text-left">
                  {/* Featured Image Area */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={imgSrc}
                      alt={a.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    {/* Category Badge */}
                    <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-0.5 text-[11px] font-extrabold text-slate-800 shadow-sm backdrop-blur">
                      {a.category}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-[15px] font-bold leading-snug text-slate-900 transition-colors group-hover:text-indigo-600">
                      {a.title}
                    </h3>
                    <p className="mt-3 flex items-center gap-3 text-[12px] text-slate-400">
                      <span className="flex items-center gap-1">
                        <CalendarDays className="h-3 w-3" /> {a.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {a.readTime}
                      </span>
                    </p>
                    <div className="mt-auto flex items-center pt-4">
                      <span className="flex items-center gap-1 text-[13px] font-bold text-indigo-600 transition-all group-hover:gap-2">
                        Read More <ChevronRight className="h-3.5 w-3.5" />
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

        {/* ═══════════════════════════════════════
           BROWSE CATEGORIES
        ═══════════════════════════════════════ */}
        <Reveal className="mt-10">
          <div className="card p-6">
            <h3 className="text-[18px] font-extrabold tracking-tight text-slate-900 sm:text-[22px]">
              Browse Categories
            </h3>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {CATEGORY_PILLS.map((cat) => (
                <span
                  key={cat}
                  onClick={() => setQuery(cat)}
                  className="cursor-pointer rounded-full border border-indigo-200 bg-indigo-50/60 px-4 py-1.5 text-[12.5px] font-semibold text-indigo-700 transition-all hover:border-indigo-400 hover:bg-indigo-100 hover:text-indigo-800"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <Newsletter />
    </div>
  );
}
