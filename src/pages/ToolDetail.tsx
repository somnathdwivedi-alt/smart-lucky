import {
  ArrowRight,
  Check,
  X,
  Star,
  Users,
  Calculator,
  DollarSign,
  Percent,
  ExternalLink,
} from "lucide-react";
import { useState } from "react";
import { navigate } from "../router";
import { PageHeader, FAQAccordion } from "../components/shared";
import { LogoBadge, Rating } from "../components/ui";
import { TOOLS_DATA } from "../data/tools-data";
import { getBrand } from "../data/brand";

/* ═════════════════════════════════════════════
   SECTION 1 — Hero
   ═════════════════════════════════════════════ */
function HeroSection({ tool }: { tool: (typeof TOOLS_DATA)[string] }) {
  const pricing = tool.meta.find((m) => m.label === "Pricing");
  return (
    <div className="grid gap-8 lg:grid-cols-[70%_30%]">
      {/* LEFT — Product Info */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <LogoBadge brand={getBrand(tool.brandKey)} size={48} className="rounded-[12px] shadow-[0_4px_12px_rgba(0,0,0,0.06)]" />
          <h1 className="text-[48px] font-extrabold tracking-tight text-[#111111] leading-none">
            {tool.name}
          </h1>
          <span className="flex h-6 shrink-0 items-center gap-1 rounded-full bg-emerald-50 px-3 text-[11px] font-bold text-emerald-600 ring-1 ring-emerald-200">
            Verified
          </span>
        </div>
        <p className="max-w-2xl text-[17px] leading-relaxed text-[#666666]">
          {tool.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tool.tags.map((t) => (
            <span key={t} className="rounded-full border border-[#5B4CF8]/20 bg-[#5B4CF8]/5 px-3.5 py-1 text-[12px] font-semibold uppercase tracking-wide text-[#5B4CF8]">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* RIGHT — Pricing CTA Card */}
      <div className="flex flex-col gap-5 rounded-[20px] bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-widest text-[#666666]">Starting from</p>
          <p className="mt-1 text-[36px] font-extrabold text-[#111111] leading-none">
            {pricing?.value ?? "$0"}
          </p>
          {tool.plans.find((p) => p.popular) && (
            <span className="mt-2 inline-block rounded-full bg-[#5B4CF8]/10 px-3 py-0.5 text-[11px] font-bold text-[#5B4CF8]">
              15% Annual
            </span>
          )}
        </div>
        <button className="flex h-[48px] w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#5B4CF8] to-[#4736F2] text-[14px] font-bold text-white shadow-lg shadow-[#5B4CF8]/30 transition-all hover:shadow-xl hover:shadow-[#5B4CF8]/40">
          Visit Official Website <ExternalLink className="h-4 w-4" />
        </button>
        <p className="text-center text-[12px] text-[#666666]">
          Trusted by <span className="font-semibold text-[#111111]">{tool.userCount}</span> marketing professionals worldwide.
        </p>
      </div>
    </div>
  );
}

/* ═════════════════════════════════════════════
   SECTION 2 — Gallery
   ═════════════════════════════════════════════ */
function GallerySection({ tool }: { tool: (typeof TOOLS_DATA)[string] }) {
  const [viewerSrc, setViewerSrc] = useState<string | null>(null);
  const allImages = [tool.image, ...(tool.gallery ?? [])];

  return (
    <>
      <div className="grid gap-4 lg:grid-cols-[70%_30%]">
        <div
          className="h-[380px] cursor-pointer overflow-hidden rounded-[20px] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
          onClick={() => setViewerSrc(allImages[0])}
        >
          <img src={tool.image} alt={tool.name} className="h-full w-full object-cover" />
        </div>
        <div className="flex flex-col gap-4 lg:flex-col">
          {(tool.gallery ?? []).slice(0, 2).map((src, i) => (
            <div
              key={i}
              className="relative h-full min-h-[100px] cursor-pointer overflow-hidden rounded-[20px] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)] lg:flex-1"
              onClick={() => setViewerSrc(src)}
            >
              <img src={src} alt="" className="h-full w-full object-cover" />
              {i === 1 && (tool.gallery?.length ?? 0) > 2 && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                  <span className="rounded-full bg-white px-5 py-2 text-[13px] font-bold text-[#111111] shadow-lg">
                    +{(tool.gallery?.length ?? 0) - 1} More
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {viewerSrc && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" onClick={() => setViewerSrc(null)}>
          <img src={viewerSrc} alt="" className="max-h-[90vh] max-w-full rounded-2xl object-contain shadow-2xl" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </>
  );
}

/* ═════════════════════════════════════════════
   SECTION 3 — Product Information
   ═════════════════════════════════════════════ */
function RelatedToolRow({ name, desc, brandKey }: { name: string; desc: string; brandKey: string }) {
  return (
    <button
      onClick={() => navigate("tool", brandKey)}
      className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 transition-all hover:bg-[#F7F7FC]"
    >
      <LogoBadge brand={getBrand(brandKey)} size={36} />
      <div className="min-w-0 flex-1 text-left">
        <p className="text-[13px] font-bold text-[#111111] truncate">{name}</p>
        <p className="text-[12px] text-[#666666] truncate">{desc}</p>
      </div>
      <ArrowRight className="h-4 w-4 shrink-0 text-[#666666]" />
    </button>
  );
}

function InformationSection({ tool }: { tool: (typeof TOOLS_DATA)[string] }) {
  const relatedTools = [
    { brandKey: "ahrefs", name: "Ahrefs Explorer", desc: "Backlink Intelligence" },
    { brandKey: "moz", name: "Moz Pro", desc: "SEO Suite" },
    { brandKey: "ubersuggest", name: "Ubersuggest", desc: "Keyword Research" },
    { brandKey: "spyfu", name: "SpyFu", desc: "Competitive Intel" },
  ];

  return (
    <div className="grid gap-8 lg:grid-cols-[30%_70%]">
      {/* LEFT — Sidebar */}
      <div className="flex flex-col gap-6">
        {/* Related Tools */}
        <div className="rounded-[20px] bg-white p-5 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
          <p className="mb-2 text-[14px] font-bold text-[#111111]">Related Marketing Tools</p>
          <div className="space-y-0.5">
            {relatedTools.map((rt) => (
              <RelatedToolRow key={rt.brandKey} {...rt} brandKey={rt.brandKey} />
            ))}
          </div>
          <button
            onClick={() => navigate("tools")}
            className="mt-3 w-full text-center text-[13px] font-semibold text-[#5B4CF8] hover:text-[#4736F2]"
          >
            Compare All Tools →
          </button>
        </div>

        {/* Editor's Choice */}
        <div className="relative overflow-hidden rounded-[20px] bg-gradient-to-br from-[#6A5AF9] to-[#4C3DF2] p-6 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
          <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
          <div className="relative z-10">
            <p className="text-[11px] font-bold uppercase tracking-widest text-white/70">Editor's Choice 2024</p>
            <p className="mt-2 text-[16px] font-bold text-white leading-snug">Top Rated Enterprise SEO Performance</p>
            <div className="mt-4 flex items-center gap-1 text-amber-300">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className={`h-4 w-4 ${i <= Math.round(tool.rating) ? "fill-amber-300" : "fill-white/20"}`} />
              ))}
              <span className="ml-2 text-[15px] font-bold text-white">{tool.rating.toFixed(1)}/5</span>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT — Content */}
      <div className="flex flex-col gap-8">
        {/* Overview */}
        <div>
          <h2 className="text-[34px] font-extrabold tracking-tight text-[#111111]">In-Depth Platform Overview</h2>
          {tool.overview?.map((p, i) => (
            <p key={i} className={`text-[17px] leading-relaxed text-[#666666] ${i > 0 ? "mt-[18px]" : "mt-4"}`}>{p}</p>
          ))}
        </div>

        {/* Strengths & Considerations */}
        <div className="grid gap-6 sm:grid-cols-2">
          {/* Strengths */}
          <div className="rounded-[20px] bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-500">
              <Check className="h-5 w-5" />
            </span>
            <h3 className="mt-4 text-[20px] font-bold text-[#111111]">Key Strengths</h3>
            <ul className="mt-3 space-y-3">
              {tool.strengths.map((s) => (
                <li key={s} className="flex items-start gap-2.5 text-[14px] text-[#666666]">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Considerations */}
          <div className="rounded-[20px] bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-red-50 text-red-400">
              <X className="h-5 w-5" />
            </span>
            <h3 className="mt-4 text-[20px] font-bold text-[#111111]">Considerations</h3>
            <ul className="mt-3 space-y-3">
              {tool.considerations.map((c) => (
                <li key={c} className="flex items-start gap-2.5 text-[14px] text-[#666666]">
                  <span className="mt-0.5 h-4 w-4 shrink-0 rounded-full bg-red-50 text-center text-[10px] font-bold leading-4 text-red-400">!</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═════════════════════════════════════════════
   SECTION 4 — Plan Comparison Table
   ═════════════════════════════════════════════ */
function PlanComparisonSection({ plans }: { plans: (typeof TOOLS_DATA)[string]["plans"] }) {
  const rows = [
    { feature: "Monthly Price", values: plans.map((p) => p.price) },
    { feature: "Projects", values: ["1", "5", "Unlimited", "Unlimited"] },
    { feature: "Keywords", values: ["100", "500", "5,000", "Unlimited"] },
    { feature: "Historical Data", values: ["30 days", "1 year", "3 years", "5 years"] },
  ];

  return (
    <div>
      <h2 className="text-[34px] font-extrabold tracking-tight text-[#111111]">Plan Comparison</h2>
      <div className="mt-6 overflow-x-auto rounded-[20px] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
        <table className="w-full min-w-[500px]">
          <thead>
            <tr className="border-b border-[#ECECF5]">
              <th className="p-5 text-left text-[13px] font-bold uppercase tracking-wider text-[#666666]">Feature</th>
              {plans.map((p) => (
                <th key={p.name} className="p-5 text-center text-[14px] font-bold text-[#111111]">
                  {p.name}
                  {p.popular && <span className="ml-2 rounded-full bg-[#5B4CF8]/10 px-2 py-0.5 text-[10px] font-bold text-[#5B4CF8]">Popular</span>}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr key={row.feature} className={ri % 2 === 0 ? "bg-[#F7F7FC]" : ""}>
                <td className="p-5 text-[14px] font-semibold text-[#111111]">{row.feature}</td>
                {row.values.map((v, vi) => (
                  <td key={vi} className="p-5 text-center text-[14px] text-[#666666]">
                    {v === "✓" ? <Check className="mx-auto h-5 w-5 text-[#3BB273]" /> :
                     v === "✗" ? <X className="mx-auto h-5 w-5 text-[#F04C4C]" /> :
                     v}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ═════════════════════════════════════════════
   SECTION 5 — Affiliate Program
   ═════════════════════════════════════════════ */
function AffiliateSection() {
  const [referrals, setReferrals] = useState(10);
  const monthly = referrals * 52;
  return (
    <div className="rounded-[20px] bg-gradient-to-br from-[#F7F7FC] to-white p-8 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
      <div className="grid gap-8 lg:grid-cols-2">
        {/* LEFT — Calculator */}
        <div>
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#5B4CF8]/10 text-[#5B4CF8]">
            <Calculator className="h-5 w-5" />
          </span>
          <h3 className="mt-4 text-[24px] font-bold text-[#111111]">Affiliate Program</h3>
          <p className="text-[15px] text-[#666666]">Earn 40% recurring commission</p>
          <div className="mt-6">
            <div className="flex items-center justify-between text-[14px]">
              <span className="font-semibold text-[#111111]">Monthly Referrals</span>
              <span className="font-bold text-[#5B4CF8]">{referrals}</span>
            </div>
            <input
              type="range"
              min={1}
              max={100}
              value={referrals}
              onChange={(e) => setReferrals(Number(e.target.value))}
              className="mt-2 h-2 w-full cursor-pointer appearance-none rounded-full bg-[#ECECF5] accent-[#5B4CF8] [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#5B4CF8] [&::-webkit-slider-thumb]:shadow-md"
            />
            <div className="mt-1 flex justify-between text-[12px] text-[#666666]">
              <span>1</span><span>10</span><span>100</span>
            </div>
          </div>
          <div className="mt-4 rounded-[16px] bg-white p-5 shadow-[0_4px_16px_rgba(0,0,0,0.06)]">
            <p className="text-[13px] font-semibold text-[#666666]">Estimated Monthly Payout</p>
            <p className="mt-1 text-[36px] font-extrabold text-[#5B4CF8]">${monthly.toFixed(0)}</p>
          </div>
        </div>

        {/* RIGHT — Benefits */}
        <div className="rounded-[20px] bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
          <h3 className="text-[20px] font-bold text-[#111111]">Why partner with us?</h3>
          <ul className="mt-4 space-y-4">
            {[
              { icon: Users, text: "Last click attribution — you earn on every sale" },
              { icon: Percent, text: "120-day cookie duration for maximum conversions" },
              { icon: DollarSign, text: "Dedicated partner support & real-time dashboard" },
            ].map((item) => (
              <li key={item.text} className="flex items-start gap-3 text-[14px] text-[#666666]">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#5B4CF8]/10 text-[#5B4CF8]">
                  <item.icon className="h-4 w-4" />
                </span>
                {item.text}
              </li>
            ))}
          </ul>
          <button className="mt-6 flex h-[48px] w-full items-center justify-center gap-2 rounded-full bg-[#111111] text-[14px] font-bold text-white transition-all hover:bg-[#222222]">
            Join Program <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ═════════════════════════════════════════════
   MAIN PAGE
   ═════════════════════════════════════════════ */
export default function ToolDetail({ id }: { id?: string }) {
  const tool = id ? TOOLS_DATA[id] : undefined;
  if (!tool) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 p-8 text-center">
        <p className="text-[20px] font-bold text-[#111111]">Tool not found</p>
        <button onClick={() => navigate("home")} className="rounded-full bg-[#5B4CF8] px-6 py-3 text-sm font-bold text-white">
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#F7F7FC] pb-16">
      <PageHeader crumbs={[{ label: "Home", route: "home" }, { label: "Tools", route: "tools" }, { label: tool.name }]} />

      <div className="mx-auto max-w-[1320px] space-y-[64px] px-4 pt-6 sm:px-6">
        {/* SECTION 1 — Hero */}
        <HeroSection tool={tool} />

        {/* SECTION 2 — Gallery */}
        <GallerySection tool={tool} />

        {/* SECTION 3 — Product Information */}
        <InformationSection tool={tool} />

        {/* SECTION 4 — Plan Comparison */}
        <PlanComparisonSection plans={tool.plans} />

        {/* SECTION 5 — Affiliate Program */}
        <AffiliateSection />

        {/* Reviews */}
        <div>
          <h2 className="text-[34px] font-extrabold tracking-tight text-[#111111]">User Reviews</h2>
          <div className="mt-6 space-y-4">
            {tool.reviews.map((rv) => (
              <div key={rv.n} className="rounded-[20px] bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <p className="text-[15px] font-bold text-[#111111]">{rv.n}</p>
                    <p className="text-[13px] text-[#666666]">{rv.role}</p>
                  </div>
                  <Rating value={rv.r} size={14} />
                </div>
                <p className="mt-3 text-[14px] leading-relaxed text-[#666666]">{rv.t}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="text-[34px] font-extrabold tracking-tight text-[#111111]">Frequently Asked Questions</h2>
          <div className="mt-6">
            <FAQAccordion items={tool.faqs} />
          </div>
        </div>
      </div>
    </div>
  );
}
