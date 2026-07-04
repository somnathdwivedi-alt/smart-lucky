import { Check, ChevronDown, ChevronRight, Copy, ThumbsDown, ThumbsUp, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { cn } from "../utils/cn";
import { navigate, type Route } from "../router";
import { LogoBadge, Rating, type Brand } from "./ui";

/* ---------------- Extra brand logos for subpages ---------------- */
export const EXTRA_BRANDS: Record<string, Brand> = {
  moz: { bg: "#1B58C8", label: "M", image: "https://cdn.simpleicons.org/moz" },
  ubersuggest: { bg: "linear-gradient(135deg,#F97316,#FB923C)", label: "U", image: "https://cdn.simpleicons.org/ubersuggest" },
  screamingfrog: { bg: "linear-gradient(135deg,#65A30D,#84CC16)", label: "🐸", image: "https://cdn.simpleicons.org/screamingfrog" },
  kwfinder: { bg: "linear-gradient(135deg,#E11D48,#FB7185)", label: "KW", image: "https://cdn.simpleicons.org/mangools" },
  mangools: { bg: "linear-gradient(135deg,#FF7043,#FFA270)", label: "M", image: "https://cdn.simpleicons.org/mangools" },
  surfer: { bg: "linear-gradient(135deg,#FF5B49,#FF8A75)", label: "S", image: "https://cdn.simpleicons.org/surferseo" },
  spyfu: { bg: "linear-gradient(135deg,#312E81,#4F46E5)", label: "Sp", image: "https://cdn.simpleicons.org/spyfu" },
  figma: { bg: "linear-gradient(135deg,#0ACF83,#1ABCFE)", label: "F", image: "https://cdn.simpleicons.org/figma" },
  "adobe-express": { bg: "linear-gradient(135deg,#DA1F26,#FF6B6B)", label: "A", image: "https://cdn.simpleicons.org/adobe" },
  visme: { bg: "linear-gradient(135deg,#6C3EBF,#8B5CF6)", label: "V", image: "https://cdn.simpleicons.org/visme" },
  snappa: { bg: "linear-gradient(135deg,#E74C3C,#F1948A)", label: "S", image: "https://cdn.simpleicons.org/snappa" },

  /* ──── Extra product brands ──── */
  razer: { bg: "linear-gradient(135deg,#00FF00,#44FF88)", label: "R", image: "https://cdn.simpleicons.org/razer" },
  logitech: { bg: "linear-gradient(135deg,#00A3E0,#0081BC)", label: "L", image: "https://cdn.simpleicons.org/logitech" },
  jbl: { bg: "linear-gradient(135deg,#FF6600,#E65C00)", label: "JBL", image: "https://cdn.simpleicons.org/jbl" },
  beats: { bg: "linear-gradient(135deg,#E11D48,#BE123C)", label: "b", image: "https://cdn.simpleicons.org/beatsbydre" },
  bose: { bg: "linear-gradient(135deg,#000,#222)", label: "B", image: "https://cdn.simpleicons.org/bose" },
  fossil: { bg: "linear-gradient(135deg,#8B7355,#A0896C)", label: "F", image: "https://cdn.simpleicons.org/fossil" },
  timberland: { bg: "linear-gradient(135deg,#8B4513,#A0522D)", label: "T", image: "https://cdn.simpleicons.org/timberland" },
  "new-balance": { bg: "linear-gradient(135deg,#CF142B,#A00F20)", label: "NB", image: "https://cdn.simpleicons.org/newbalance" },
  underarmour: { bg: "linear-gradient(135deg,#000,#333)", label: "UA", image: "https://cdn.simpleicons.org/underarmour" },
  levis: { bg: "linear-gradient(135deg,#0033A0,#00207C)", label: "L", image: "https://cdn.simpleicons.org/levis" },
  calvinklein: { bg: "linear-gradient(135deg,#000,#222)", label: "CK", image: "https://cdn.simpleicons.org/calvinklein" },
  tommys: { bg: "linear-gradient(135deg,#0033A0,#00227B)", label: "TH", image: "https://cdn.simpleicons.org/tommyhilfiger" },
  samsung_appliances: { bg: "linear-gradient(135deg,#1428A0,#4477DD)", label: "S", image: "https://cdn.simpleicons.org/samsung" },
  kitchenaid: { bg: "linear-gradient(135deg,#CC3333,#AA2222)", label: "K", image: "/images/kitchenaid.png" },
  instantpot: { bg: "linear-gradient(135deg,#E85D26,#CC4A1C)", label: "IP", image: "https://cdn.simpleicons.org/instantpot" },
  roomba: { bg: "linear-gradient(135deg,#00A4E4,#0085C7)", label: "R", image: "https://cdn.simpleicons.org/irobot" },
};

/* ---------------- Breadcrumbs ---------------- */
export function Breadcrumbs({ items }: { items: { label: string; route?: Route }[] }) {
  return (
    <nav className="flex flex-wrap items-center gap-1.5 text-[13px] text-slate-400">
      {items.map((it, i) => (
        <span key={i} className="flex items-center gap-1.5">
          {i > 0 && <ChevronRight className="h-3.5 w-3.5 text-slate-300" />}
          {it.route ? (
            <button
              onClick={() => navigate(it.route!)}
              className="font-medium transition-colors hover:text-indigo-600"
            >
              {it.label}
            </button>
          ) : (
            <span className="font-semibold text-slate-700">{it.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

/* ---------------- Tabs ---------------- */
export function Tabs({
  tabs,
  active,
  onChange,
}: {
  tabs: string[];
  active: string;
  onChange: (t: string) => void;
}) {
  return (
    <div className="scrollbar-none flex gap-1 overflow-x-auto border-b border-slate-100">
      {tabs.map((t) => (
        <button
          key={t}
          onClick={() => onChange(t)}
          className={cn(
            "relative shrink-0 px-3 py-2.5 text-[13.5px] font-semibold transition-colors",
            active === t ? "text-indigo-600" : "text-slate-500 hover:text-slate-800"
          )}
        >
          {t}
          {active === t && (
            <span className="gradient-bg absolute inset-x-3 -bottom-px h-[3px] rounded-full" />
          )}
        </button>
      ))}
    </div>
  );
}

/* ---------------- FAQ Accordion ---------------- */
export function FAQAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="space-y-3">
      {items.map((f, i) => (
        <div key={i} className="card overflow-hidden">
          <button
            onClick={() => setOpen(open === i ? -1 : i)}
            className="flex w-full items-center justify-between gap-4 px-3 py-2.5 text-left"
          >
            <span className="text-[14px] font-bold text-slate-800">{f.q}</span>
            <ChevronDown
              className={cn(
                "h-4 w-4 shrink-0 text-slate-400 transition-transform",
                open === i && "rotate-180 text-indigo-600"
              )}
            />
          </button>
          {open === i && (
            <p className="px-4 pb-4 text-[13.5px] leading-relaxed text-slate-500">{f.a}</p>
          )}
        </div>
      ))}
    </div>
  );
}

/* ---------------- Pagination ---------------- */
export function Pagination({ total = 10 }: { total?: number }) {
  const [page, setPage] = useState(1);
  const pages = [1, 2, 3, 4, 5];
  return (
    <div className="flex items-center justify-center gap-2">
      {pages.map((p) => (
        <button
          key={p}
          onClick={() => setPage(p)}
          className={cn(
            "h-10 w-10 rounded-xl text-[13px] font-bold transition-all",
            page === p
              ? "gradient-bg text-white shadow-lg shadow-indigo-500/30"
              : "border border-slate-200 bg-white text-slate-600 hover:border-indigo-300 hover:text-indigo-600"
          )}
        >
          {p}
        </button>
      ))}
      <span className="px-1 text-slate-400">…</span>
      <button className="h-10 w-10 rounded-xl border border-slate-200 bg-white text-[13px] font-bold text-slate-600 hover:border-indigo-300 hover:text-indigo-600">
        {total}
      </button>
      <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 hover:border-indigo-300 hover:text-indigo-600">
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}

/* ---------------- Pros & Cons ---------------- */
export function ProsCons({ pros, cons }: { pros: string[]; cons: string[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="card p-5">
        <p className="font-heading mb-3 flex items-center gap-2 text-[14px] font-extrabold text-emerald-600">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-50">
            <ThumbsUp className="h-4 w-4" />
          </span>
          Pros
        </p>
        <ul className="space-y-2.5">
          {pros.map((p) => (
            <li key={p} className="flex items-start gap-2.5 text-[13.5px] text-slate-600">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
              {p}
            </li>
          ))}
        </ul>
      </div>
      <div className="card p-5">
        <p className="font-heading mb-3 flex items-center gap-2 text-[14px] font-extrabold text-rose-500">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-rose-50">
            <ThumbsDown className="h-4 w-4" />
          </span>
          Cons
        </p>
        <ul className="space-y-2.5">
          {cons.map((c) => (
            <li key={c} className="flex items-start gap-2.5 text-[13.5px] text-slate-600">
              <X className="mt-0.5 h-4 w-4 shrink-0 text-rose-400" />
              {c}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ---------------- Score bar ---------------- */
export function ScoreBar({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between">
        <span className="text-[13px] font-semibold text-slate-600">{label}</span>
        <span className="text-[13px] font-extrabold text-slate-900">{value.toFixed(1)}</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-slate-100">
        <div className="gradient-bg h-full rounded-full" style={{ width: `${(value / 5) * 100}%` }} />
      </div>
    </div>
  );
}

/* ---------------- Countdown ---------------- */
export function Countdown({ seconds }: { seconds: number }) {
  const [left, setLeft] = useState(seconds);
  useEffect(() => {
    const id = setInterval(() => setLeft((s) => (s > 0 ? s - 1 : 24 * 3600)), 1000);
    return () => clearInterval(id);
  }, []);
  const parts = [
    { v: Math.floor(left / 3600), l: "Hrs" },
    { v: Math.floor((left % 3600) / 60), l: "Mins" },
    { v: left % 60, l: "Secs" },
  ];
  return (
    <div className="grid grid-cols-3 gap-2">
      {parts.map((p) => (
        <div key={p.l} className="rounded-xl bg-indigo-50/80 py-2.5 text-center">
          <p className="text-lg font-extrabold tabular-nums text-indigo-700">
            {String(p.v).padStart(2, "0")}
          </p>
          <p className="text-[10px] font-semibold text-indigo-400">{p.l}</p>
        </div>
      ))}
    </div>
  );
}

/* ---------------- Coupon code ---------------- */
export function CouponCode({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard?.writeText(code).catch(() => {});
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }}
      className="flex w-full items-center justify-between rounded-xl border-2 border-dashed border-indigo-300 bg-indigo-50/60 px-4 py-3 transition-colors hover:bg-indigo-50"
    >
      <span className="text-[15px] font-extrabold tracking-widest text-indigo-700">{code}</span>
      <span className="flex items-center gap-1.5 text-[12px] font-bold text-indigo-500">
        {copied ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
        {copied ? "Copied!" : "Copy"}
      </span>
    </button>
  );
}

/* ---------------- Filter sidebar group ---------------- */
export function FilterGroup({
  title,
  options,
}: {
  title: string;
  options: { label: string; count?: string }[];
}) {
  return (
    <div className="border-b border-slate-100 py-[14px] first:pt-0 last:border-0 last:pb-0">
      <p className="font-heading mb-4 text-[13px] font-extrabold text-slate-900">{title}</p>
      <div className="space-y-3">
        {options.map((o) => (
          <label
            key={o.label}
            className="flex cursor-pointer items-center gap-2.5 text-[13px] text-slate-600 hover:text-slate-900"
          >
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-slate-300 accent-indigo-600"
            />
            <span className="flex-1">{o.label}</span>
            {o.count && <span className="text-[11px] text-slate-400">{o.count}</span>}
          </label>
        ))}
      </div>
    </div>
  );
}

export function RatingFilterGroup() {
  return (
    <div className="border-b border-slate-100 py-[14px]">
      <p className="font-heading mb-4 text-[13px] font-extrabold text-slate-900">Rating</p>
      <div className="space-y-3">
        {[4.5, 4.0, 3.5].map((r) => (
          <label key={r} className="flex cursor-pointer items-center gap-2.5">
            <input type="checkbox" className="h-4 w-4 rounded border-slate-300 accent-indigo-600" />
            <Rating value={r} size={12} />
            <span className="text-[12px] text-slate-400">& up</span>
          </label>
        ))}
      </div>
    </div>
  );
}

/* ---------------- Tool row card (listing pages) ---------------- */
export type ToolRow = {
  brand: Brand;
  name: string;
  desc: string;
  rating: number;
  meta: string;
  badge?: string;
  badgeClass?: string;
  id?: string;
  route?: Route;
};

export function ToolRowCard({ t }: { t: ToolRow }) {
  return (
    <div className="card card-hover flex min-h-[112px] items-center gap-5 p-6 sm:gap-6">
      <LogoBadge brand={t.brand} size={60} />
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-[18px] font-bold text-slate-900">{t.name}</h3>
          {t.badge && (
            <span
              className={cn(
                "rounded-full px-2.5 py-0.5 text-[11px] font-extrabold",
                t.badgeClass ?? "bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200"
              )}
            >
              {t.badge}
            </span>
          )}
        </div>
        <p className="mt-0.5 text-[14px] text-slate-500">{t.desc}</p>
        <Rating value={t.rating} className="mt-1.5" size={14} />
      </div>
      <div className="flex flex-col items-end gap-2">
        <p className="whitespace-nowrap text-[13px] font-semibold text-slate-500">{t.meta}</p>
        <button
          onClick={() => navigate(t.route ?? "tool", t.id)}
          className="btn-ripple rounded-xl border-2 border-indigo-500 bg-white px-5 py-2 text-[13px] font-bold text-indigo-600 transition-all hover:bg-indigo-600 hover:text-white"
          style={{ width: 90 }}
        >
          Visit
        </button>
      </div>
    </div>
  );
}

/* ---------------- Page hero wrapper ---------------- */
export function PageHeader({
  crumbs,
  children,
}: {
  crumbs: { label: string; route?: Route }[];
  children?: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-[1440px] px-4 pt-6 sm:px-8">
      <Breadcrumbs items={crumbs} />
      {children}
    </div>
  );
}

/* ---------------- Feature check item ---------------- */
export function CheckItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-2.5 text-[13.5px] text-slate-600">
      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-50">
        <Check className="h-3 w-3 text-emerald-500" />
      </span>
      {children}
    </li>
  );
}
