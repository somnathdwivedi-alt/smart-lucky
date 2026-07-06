import {
  BadgeCheck,
  Banknote,
  Bookmark,
  CalendarClock,
  Flame,
  Globe,
  ImageIcon,
  Link2,
  Package,
  PlugZap,
  Gift,
  Wallet,
  CreditCard,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { navigate } from "../router";
import { FAQAccordion, PageHeader, ProsCons, CheckItem } from "../components/shared";
import { LogoBadge, Rating, Reveal } from "../components/ui";
import { AFFILIATES_DATA } from "../data/affiliates-data";
import { getBrand } from "../data/brand";

const TAG_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Flame, BadgeCheck, Globe, CalendarClock,
};

const RESOURCE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  ImageIcon, Link2, Package, PlugZap, Gift,
};

const PAYOUT_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Banknote, Wallet, CreditCard, Gift,
};

const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "commission", label: "Commission" },
  { id: "resources", label: "Resources" },
  { id: "payout", label: "Payout" },
  { id: "faq", label: "FAQ" },
];

function EarningsCalculator({ visitors: defVis, conversion: defConv, aov: defAov }: { visitors: number; conversion: number; aov: number }) {
  const [visitors, setVisitors] = useState(defVis);
  const [conversion, setConversion] = useState(defConv);
  const [aov, setAov] = useState(defAov);
  const low = Math.round(visitors * (conversion / 100) * aov * 0.03);
  const high = Math.round(visitors * (conversion / 100) * aov * 0.06);

  const Slider = ({
    label, value, setValue, min, max, step, fmt,
  }: {
    label: string; value: number; setValue: (n: number) => void; min: number; max: number; step: number; fmt: (n: number) => string;
  }) => (
    <div>
      <div className="mb-1.5 flex items-center justify-between">
        <span className="text-[13px] font-medium text-slate-500">{label}</span>
        <span className="text-[14px] font-bold text-slate-900">{fmt(value)}</span>
      </div>
      <input
        type="range" min={min} max={max} step={step} value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full accent-indigo-600"
      />
    </div>
  );

  return (
    <div className="card p-6">
      <p className="text-[20px] font-bold text-slate-900">Earnings Calculator</p>
      <div className="mt-5 space-y-5">
        <Slider label="Monthly Visitors" value={visitors} setValue={setVisitors} min={1000} max={100000} step={1000} fmt={(n) => n.toLocaleString()} />
        <Slider label="Conversion Rate" value={conversion} setValue={setConversion} min={1} max={10} step={0.5} fmt={(n) => `${n}%`} />
        <Slider label="Average Order Value" value={aov} setValue={setAov} min={10} max={500} step={10} fmt={(n) => `$${n}`} />
      </div>
      <div className="mt-5 rounded-2xl bg-gradient-to-br from-indigo-50 to-violet-50 p-5 text-center">
        <p className="text-[12px] font-semibold uppercase tracking-wide text-slate-500">
          Estimated Monthly Earnings
        </p>
        <p className="mt-1.5 text-[26px] font-extrabold text-emerald-600">
          ${low.toLocaleString()} – ${high.toLocaleString()}
        </p>
      </div>
    </div>
  );
}

export default function AffiliateDetail({ id }: { id?: string }) {
  const [activeSection, setActiveSection] = useState("overview");
  const [saved, setSaved] = useState(false);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const aff = id ? AFFILIATES_DATA[id] : undefined;
  if (!aff) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 p-8 text-center">
        <p className="text-[20px] font-bold text-slate-900">Program not found</p>
        <button onClick={() => navigate("home")} className="rounded-xl bg-indigo-600 px-6 py-3 text-sm font-bold text-white">
          Back to Home
        </button>
      </div>
    );
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-120px 0px -60% 0px", threshold: 0 }
    );
    for (const ref of Object.values(sectionRefs.current)) {
      if (ref) observer.observe(ref);
    }
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-secondary pb-8">
      <PageHeader
        crumbs={[
          { label: "Home", route: "home" },
          { label: "Categories", route: "category" },
          { label: "Affiliate Programs", route: "category" },
          { label: aff.name },
        ]}
      />

      <div className="mx-auto max-w-[1280px] px-6 pt-6 sm:px-8">
        {/* ─────── HERO ─────── */}
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
            {/* Left — Affiliate Info */}
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <LogoBadge brand={getBrand(aff.brandKey)} size={80} />
              <div className="flex-1">
                <h1 className="text-[24px] font-bold tracking-tight text-slate-900 sm:text-[34px]">
                  {aff.name}
                </h1>
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <Rating value={aff.rating} size={16} />
                  <span className="text-[14px] text-slate-500">({aff.reviewCount})</span>
                </div>
                <p className="mt-4 max-w-[550px] text-[15px] leading-relaxed text-slate-500">
                  {aff.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {aff.tags.map((tag) => {
                    const Icon = TAG_ICONS[tag.iconName] || BadgeCheck;
                    return (
                      <span
                        key={tag.label}
                        className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-[12px] font-bold ${tag.color} ring-1 ${tag.ringColor}`}
                      >
                        <Icon className="h-3.5 w-3.5" /> {tag.label}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right — Summary CTA Card */}
            <div className="card p-7">
              <div className="divide-y divide-slate-200">
                {aff.stats.map((s) => (
                  <div key={s.label} className="flex items-center justify-between py-3 first:pt-0 last:pb-0">
                    <span className="text-[13px] font-medium text-slate-500">{s.label}</span>
                    <span className={`text-[15px] font-bold ${s.accent}`}>{s.value}</span>
                  </div>
                ))}
              </div>
              <button className="mt-5 flex h-[52px] w-full items-center justify-center rounded-xl bg-indigo-600 text-[15px] font-bold text-white shadow-lg shadow-indigo-500/30 transition-all hover:bg-indigo-700">
                Join Now
              </button>
              <button
                onClick={() => setSaved(!saved)}
                className={`mt-3 flex h-[48px] w-full items-center justify-center gap-2 rounded-xl border-2 text-[14px] font-bold transition-all ${
                  saved
                    ? "border-indigo-300 bg-indigo-50 text-indigo-600"
                    : "border-slate-200 bg-white text-slate-500 hover:border-indigo-300 hover:text-indigo-600"
                }`}
              >
                <Bookmark className={`h-4 w-4 ${saved ? "fill-indigo-500 text-indigo-500" : ""}`} />
                {saved ? "Program Saved" : "Save Program"}
              </button>
            </div>
          </div>
        </Reveal>

        {/* ─────── STICKY TABS ─────── */}
        <div className="sticky top-16 z-30 -mx-6 mt-14 border-b border-slate-200 bg-secondary px-6 sm:mx-0 sm:px-0">
          <nav className="flex gap-1 overflow-x-auto scrollbar-none">
            {SECTIONS.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={`relative shrink-0 px-5 py-4 text-[14px] font-semibold transition-colors ${
                  activeSection === s.id
                    ? "text-indigo-600"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                {s.label}
                {activeSection === s.id && (
                  <span className="absolute inset-x-3 -bottom-px h-[3px] rounded-full bg-indigo-600" />
                )}
              </button>
            ))}
          </nav>
        </div>

        {/* ─────── OVERVIEW SECTION ─────── */}
        <section id="overview" ref={(el) => { sectionRefs.current.overview = el; }} className="scroll-mt-28">
          <Reveal>
            <div className="mt-14">
              <h2 className="text-[20px] font-bold text-slate-900 sm:text-[24px]">Overview</h2>
              <p className="mt-3 max-w-[700px] text-[15px] leading-relaxed text-slate-500">
                {aff.description}
              </p>
              <div className="mt-6">
                <h3 className="text-[18px] font-bold text-slate-900">Requirements</h3>
                <ul className="mt-4 space-y-3">
                  {aff.requirements.map((r) => (
                    <CheckItem key={r}>{r}</CheckItem>
                  ))}
                </ul>
              </div>
              <div className="mt-8">
                <ProsCons pros={aff.pros} cons={aff.cons} />
              </div>
            </div>
          </Reveal>
        </section>

        {/* ─────── COMMISSION SECTION ─────── */}
        <section id="commission" ref={(el) => { sectionRefs.current.commission = el; }} className="scroll-mt-28">
          <Reveal>
            <div className="mt-14">
              <h2 className="text-[20px] font-bold text-slate-900 sm:text-[24px]">Commission Structure</h2>
              <div className="mt-6 grid items-start gap-6 lg:grid-cols-[1fr_380px]">
                {/* Table */}
                <div className="overflow-x-auto rounded-[20px] border border-slate-100 bg-white shadow-card">
                  <table className="w-full min-w-[420px] text-left text-[14px]">
                    <thead>
                      <tr className="bg-secondary text-[12px] font-semibold uppercase tracking-wide text-slate-500">
                        <th className="px-6 py-4">Category</th>
                        <th className="px-6 py-4">Commission Rate</th>
                        <th className="px-6 py-4">Cookie Duration</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {aff.commissionTable.map((r) => (
                        <tr key={r.cat} className="transition-colors hover:bg-indigo-50/40">
                          <td className="px-6 py-4 font-semibold text-slate-900">{r.cat}</td>
                          <td className="px-6 py-4 font-bold text-emerald-600">{r.rate}</td>
                          <td className="px-6 py-4 text-slate-500">{r.cookie}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Calculator */}
                <EarningsCalculator visitors={aff.earningsDefault.visitors} conversion={aff.earningsDefault.conversion} aov={aff.earningsDefault.aov} />
              </div>
            </div>
          </Reveal>
        </section>

        {/* ─────── RESOURCES SECTION ─────── */}
        <section id="resources" ref={(el) => { sectionRefs.current.resources = el; }} className="scroll-mt-28">
          <Reveal>
            <div className="mt-14">
              <h2 className="text-[20px] font-bold text-slate-900 sm:text-[24px]">Marketing Resources</h2>
              <div className="mt-6 grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-5">
                {aff.resources.map((r) => {
                  const Icon = RESOURCE_ICONS[r.iconName] || ImageIcon;
                  return (
                    <button key={r.label} className="card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                      <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                        <Icon className="h-6 w-6" />
                      </span>
                      <p className="mt-4 text-center text-[14px] font-bold text-slate-900">{r.label}</p>
                    </button>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </section>

        {/* ─────── PAYOUT SECTION ─────── */}
        <section id="payout" ref={(el) => { sectionRefs.current.payout = el; }} className="scroll-mt-28">
          <Reveal>
            <div className="mt-14">
              <h2 className="text-[20px] font-bold text-slate-900 sm:text-[24px]">Payout Methods</h2>
              <div className="mt-6 grid grid-cols-2 gap-5 md:grid-cols-4">
                {aff.payouts.map((p) => {
                  const Icon = PAYOUT_ICONS[p.iconName] || Banknote;
                  return (
                    <div key={p.label} className="card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                      <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                        <Icon className="h-6 w-6" />
                      </span>
                      <p className="mt-4 text-center text-[14px] font-bold text-slate-900">{p.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </section>



        {/* ─────── FAQ SECTION ─────── */}
        <section id="faq" ref={(el) => { sectionRefs.current.faq = el; }} className="scroll-mt-28">
          <Reveal>
            <div className="mt-14">
              <h2 className="text-[20px] font-bold text-slate-900 sm:text-[24px]">Frequently Asked Questions</h2>
              <div className="mt-6">
                <FAQAccordion items={aff.faqs} />
              </div>
            </div>
          </Reveal>
        </section>

        {/* ─────── SIMILAR PROGRAMS ─────── */}
        <Reveal>
          <div className="mt-14">
            <h2 className="text-[20px] font-bold text-slate-900 sm:text-[24px]">Similar Affiliate Programs</h2>
            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {aff.related.map((r) => (
                <button
                  key={r.name}
                  onClick={() => navigate("affiliate", r.brandKey)}
                  className="card p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-center gap-4">
                    <LogoBadge brand={getBrand(r.brandKey)} size={48} />
                    <div className="min-w-0 flex-1">
                      <p className="text-[15px] font-bold text-slate-900">{r.name}</p>
                      <Rating value={r.rating} size={11} />
                    </div>
                  </div>
                  <p className="mt-3 text-[14px] font-bold text-emerald-600">{r.rate}</p>
                </button>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
