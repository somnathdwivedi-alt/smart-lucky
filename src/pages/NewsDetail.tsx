import { Bookmark, CalendarDays, Clock, MessageSquare, Sparkles, User } from "lucide-react";
import { useState } from "react";
import { navigate } from "../router";
import { CheckItem, PageHeader } from "../components/shared";
import { Newsletter } from "../components/NewsletterFooter";
import { Reveal } from "../components/ui";
import { NEWS_DATA } from "../data/news-data";

const SHARE = ["f", "𝕏", "in", "✉", "🔗"];
const CATEGORY_COLORS: Record<string, string> = {
  "Marketing News": "from-blue-500 to-indigo-600",
  "Social Media News": "from-pink-500 to-rose-600",
  Trends: "from-emerald-500 to-teal-600",
  SEO: "from-violet-500 to-purple-600",
  "AI Marketing": "from-orange-500 to-amber-600",
};

function getTocEntries(article: typeof NEWS_DATA[string]) {
  const entries: { label: string; index: number }[] = [];
  entries.push({ label: "Overview", index: 0 });
  article.paragraphs.forEach((p, i) => {
    if (p.type === "list") entries.push({ label: "Key Updates", index: i });
    if (p.type === "quote") entries.push({ label: "Expert Insight", index: i });
    if (p.type === "callout") entries.push({ label: "Pro Tips", index: i });
  });
  entries.push({ label: "The Bottom Line", index: article.paragraphs.length });
  return entries.filter((e, i, a) => a.findIndex((x) => x.label === e.label) === i);
}

export default function NewsDetail({ id }: { id?: string }) {
  const [activeSection, setActiveSection] = useState("Overview");
  const article = id ? NEWS_DATA[id] : undefined;

  if (!article) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 p-8 text-center">
        <p className="text-[20px] font-extrabold text-slate-900">Article not found</p>
        <button onClick={() => navigate("home")} className="gradient-bg rounded-xl px-6 py-3 text-sm font-bold text-white">
          Back to Home
        </button>
      </div>
    );
  }

  const toc = getTocEntries(article);
  const gradient = CATEGORY_COLORS[article.category] ?? "from-slate-500 to-slate-600";
  const scrollTo = (label: string) => {
    setActiveSection(label);
    const el = document.getElementById(`section-${label.replace(/\s+/g, "-")}`);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-slate-50/50 pb-4">
      <PageHeader
        crumbs={[
          { label: "Home", route: "home" },
          { label: "Blog", route: "blog" },
          { label: article.title },
        ]}
      />

      {/* ═══════════════════════════════════════
         THREE-COLUMN LAYOUT
      ═══════════════════════════════════════ */}
      <div className="mx-auto mt-6 grid max-w-[1440px] items-start gap-8 px-4 sm:px-8 lg:grid-cols-[200px_1fr_300px]">
        {/* ── LEFT: TABLE OF CONTENTS ── */}
        <aside className="lg:sticky lg:top-28">
          <div className="card p-4">
            <p className="text-[10px] font-extrabold tracking-widest text-slate-400">ON THIS PAGE</p>
            <nav className="relative mt-3 space-y-0.5">
              <div className="absolute left-[7px] top-0 h-full w-px bg-slate-100" />
              {toc.map((entry) => {
                const isActive = activeSection === entry.label;
                return (
                  <button
                    key={entry.label}
                    onClick={() => scrollTo(entry.label)}
                    className={`relative flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-[12px] font-semibold transition-all ${
                      isActive ? "text-indigo-600" : "text-slate-500 hover:text-slate-800"
                    }`}
                  >
                    {isActive && <span className="absolute left-[7px] top-0 z-10 h-full w-px bg-indigo-600" />}
                    <span>{entry.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </aside>

        {/* ── CENTER: MAIN CONTENT ── */}
        <article className="min-w-0">
          {/* Category Badge */}
          <Reveal>
            <span className={`inline-block rounded-full bg-gradient-to-r ${gradient} px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-white`}>
              {article.category}
            </span>
          </Reveal>

          {/* Title */}
          <Reveal>
            <h1 className="mt-3 text-[36px] font-extrabold leading-[1.12] tracking-tight text-slate-900 sm:text-[48px] xl:text-[56px]">
              {article.title}
            </h1>
          </Reveal>

          {/* Meta */}
          <Reveal>
            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-slate-400">
              <span className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-slate-200">
                  <User className="h-4 w-4 text-slate-500" />
                </span>
                By <span className="font-semibold text-slate-700">{article.author}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CalendarDays className="h-3.5 w-3.5" /> {article.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" /> {article.readTime}
              </span>
              <div className="ml-auto flex gap-1.5">
                {SHARE.map((s) => (
                  <button
                    key={s}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-[11px] font-extrabold text-slate-500 transition-all hover:border-transparent hover:bg-indigo-600 hover:text-white"
                    aria-label="Share"
                  >
                    {s}
                  </button>
                ))}
                <button className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition-all hover:border-transparent hover:bg-indigo-600 hover:text-white">
                  <Bookmark className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </Reveal>

          {/* Featured Image */}
          <Reveal>
            <div className="mt-6 overflow-hidden rounded-2xl shadow-sm ring-1 ring-slate-100">
              <div className="relative flex h-[280px] items-center justify-center sm:h-[380px]">
                <img
                  src={article.image || "/images/blog.jpg"}
                  alt={article.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
            </div>
          </Reveal>

          {/* Article Body */}
          <Reveal className="prose-none mt-8 space-y-6">
            {article.paragraphs.map((para, pi) => {
              const sectionLabel =
                para.type === "list" ? "Key Updates" :
                para.type === "quote" ? "Expert Insight" :
                para.type === "callout" ? "Pro Tips" :
                pi === 0 ? "Overview" :
                pi === article.paragraphs.length - 1 ? "The Bottom Line" : undefined;

              return (
                <div key={pi} id={sectionLabel ? `section-${sectionLabel.replace(/\s+/g, "-")}` : undefined}>
                  {sectionLabel && para.type === "text" && (
                    <h2 className="mb-4 text-[28px] font-extrabold tracking-tight text-slate-900 sm:text-[34px]">
                      {sectionLabel}
                    </h2>
                  )}

                  {para.type === "text" && para.content.map((text, ti) => (
                    <p key={ti} className="text-[16px] leading-[1.8] text-slate-600 sm:text-[17px]">{text}</p>
                  ))}

                  {para.type === "quote" && (
                    <blockquote className="rounded-2xl bg-sky-50 p-6 pl-8 ring-1 ring-sky-100">
                      <div className="border-l-4 border-sky-300 pl-5">
                        <p className="text-[16px] font-medium italic leading-relaxed text-slate-700 sm:text-[17px]">
                          {para.content[0]}
                        </p>
                        {para.attribution && (
                          <p className="mt-3 text-[12.5px] font-bold text-sky-700">— {para.attribution}</p>
                        )}
                      </div>
                    </blockquote>
                  )}

                  {para.type === "list" && (
                    <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                      <p className="flex items-center gap-2 text-[15px] font-extrabold text-slate-900">
                        <Sparkles className="h-4 w-4 text-violet-500" /> What's New?
                      </p>
                      <ul className="mt-3 space-y-2.5">
                        {para.content.map((item, ci) => (
                          <CheckItem key={ci}>{item}</CheckItem>
                        ))}
                      </ul>
                    </div>
                  )}

                  {para.type === "callout" && (
                    <div className="rounded-2xl border border-amber-200 bg-amber-50/70 p-5">
                      <p className="text-[13.5px] leading-relaxed text-amber-800">{para.content[0]}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </Reveal>

          {/* Tags */}
          <Reveal className="mt-10">
            <div className="flex flex-wrap gap-2">
              {["#GoogleAds", "#DigitalMarketing", "#ArtificialIntelligence", "#PPC", "#MarketingNews"].map((tag) => (
                <span
                  key={tag}
                  className="cursor-pointer rounded-full bg-slate-100 px-3.5 py-1.5 text-[12px] font-semibold text-slate-600 transition-all hover:bg-indigo-100 hover:text-indigo-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>

          {/* Comments */}
          <Reveal className="mt-12">
            <h2 className="flex items-center gap-2 text-[18px] font-extrabold text-slate-900">
              <MessageSquare className="h-5 w-5 text-indigo-500" /> Comments ({article.comments.length})
            </h2>
            <div className="mt-4 space-y-4">
              {article.comments.map((c) => (
                <div key={c.name} className="card p-4">
                  <div className="flex items-center gap-3">
                    <span className="gradient-bg flex h-9 w-9 items-center justify-center rounded-full text-[12px] font-extrabold text-white">
                      {c.name[0]}
                    </span>
                    <div>
                      <p className="text-[13px] font-bold text-slate-900">{c.name}</p>
                      <p className="text-[11px] text-slate-400">{c.time}</p>
                    </div>
                  </div>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-slate-600">{c.text}</p>
                </div>
              ))}
              <div className="card p-4">
                <textarea
                  placeholder="Join the discussion..."
                  rows={3}
                  className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm outline-none transition-all placeholder:text-slate-400 focus:border-indigo-300 focus:bg-white focus:ring-4 focus:ring-indigo-100"
                />
                <button className="btn-ripple gradient-bg mt-3 rounded-xl px-6 py-2.5 text-[13px] font-bold text-white shadow-md shadow-indigo-500/25">
                  Post Comment
                </button>
              </div>
            </div>
          </Reveal>
        </article>

        {/* ── RIGHT: SIDEBAR ── */}
        <aside className="space-y-6 lg:sticky lg:top-28">
          {/* Popular Articles */}
          <Reveal>
            <div className="card p-5">
              <p className="font-heading mb-4 text-[14px] font-extrabold text-slate-900">Popular Articles</p>
              <div className="space-y-4">
                {article.related.map((r) => (
                  <button
                    key={r.title}
                    onClick={() => navigate("news")}
                    className="group flex w-full items-center gap-3 text-left"
                  >
                    <span
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${r.color} text-[11px] font-extrabold text-white`}
                    >
                      {r.tag[0]}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-[13px] font-bold leading-snug text-slate-800 transition-colors group-hover:text-indigo-600 line-clamp-2">
                        {r.title}
                      </p>
                      <p className="mt-0.5 text-[11px] text-slate-400">{r.date}</p>
                    </div>
                  </button>
                ))}
              </div>
              <button
                onClick={() => navigate("blog")}
                className="mt-4 w-full rounded-xl border-2 border-indigo-200 py-2.5 text-[12.5px] font-bold text-indigo-600 transition-all hover:border-indigo-400 hover:bg-indigo-50"
              >
                View All Articles
              </button>
            </div>
          </Reveal>

          {/* Promotional Banner */}
          <Reveal delay={0.1}>
            <div className="rounded-[20px] bg-gradient-to-br from-purple-600 to-indigo-600 p-6 text-center shadow-xl shadow-indigo-500/25">
              <p className="text-[20px] font-extrabold leading-tight text-white">Scale Your Growth</p>
              <p className="mt-2 text-[12.5px] leading-relaxed text-indigo-100">
                Get our exclusive report on the top 100 high-converting keywords.
              </p>
              <button className="btn-ripple mt-4 h-11 w-full rounded-xl bg-white text-[13px] font-extrabold text-indigo-600 shadow-lg transition-transform hover:scale-[1.02]">
                Download Free
              </button>
            </div>
          </Reveal>

          {/* Newsletter Mini */}
          <Reveal delay={0.2}>
            <div className="rounded-[20px] bg-gradient-to-br from-indigo-600 to-violet-600 p-5 text-center shadow-xl shadow-indigo-500/25">
              <p className="text-[14px] font-extrabold text-white">📩 Never Miss Marketing News!</p>
              <p className="mt-1 text-[11.5px] text-indigo-100">
                Get the latest insights and updates weekly.
              </p>
              <input
                type="email"
                placeholder="Enter your email"
                className="mt-3 h-10 w-full rounded-xl border border-white/25 bg-white/15 px-4 text-[12px] text-white outline-none backdrop-blur placeholder:text-indigo-200 focus:border-white/60"
              />
              <button className="btn-ripple mt-2 h-10 w-full rounded-xl bg-white text-[12px] font-extrabold text-indigo-600 transition-transform hover:scale-[1.02]">
                Subscribe
              </button>
              <p className="mt-2 text-[10px] text-indigo-200">No spam. Unsubscribe anytime.</p>
            </div>
          </Reveal>
        </aside>
      </div>

      <div className="mt-12">
        <Newsletter />
      </div>
    </div>
  );
}
