import {
  Bell,
  Bookmark,
  Heart,
  LayoutDashboard,
  Link2,
  LogOut,
  MessageSquare,
  MousePointerClick,
  Settings,
  Star,
} from "lucide-react";
import { useState } from "react";
import { navigate } from "../router";
import { EXTRA_BRANDS } from "../components/shared";
import { BRANDS, LogoBadge, Rating, Reveal } from "../components/ui";

const NAV = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: Heart, label: "Saved Deals" },
  { icon: Bookmark, label: "Bookmarks" },
  { icon: MessageSquare, label: "My Reviews" },
  { icon: Link2, label: "Affiliate Links" },
  { icon: Bell, label: "Notifications", badge: 2 },
  { icon: Settings, label: "Settings" },
];

const STATS = [
  { icon: Heart, label: "Saved Deals", value: 25, color: "bg-indigo-50 text-indigo-600" },
  { icon: Bookmark, label: "Bookmarks", value: 18, color: "bg-violet-50 text-violet-600" },
  { icon: Star, label: "Reviews", value: 7, color: "bg-rose-50 text-rose-500" },
  { icon: MousePointerClick, label: "Affiliate Clicks", value: 142, color: "bg-emerald-50 text-emerald-600" },
];

const RECENT = [
  { brand: BRANDS.semrush, name: "Semrush", id: "semrush" },
  { brand: BRANDS.ahrefs, name: "Ahrefs", id: "ahrefs" },
  { brand: BRANDS.canva, name: "Canva", id: "canva" },
  { brand: BRANDS.clickfunnels, name: "ClickFunnels", id: "clickfunnels" },
  { brand: BRANDS.hostinger, name: "Hostinger", id: "hostinger" },
];

const RECOMMENDED = [
  { brand: EXTRA_BRANDS.surfer, name: "Surfer SEO", rating: 4.6, id: "surfer" },
  { brand: BRANDS.grammarly, name: "Grammarly", rating: 4.6, id: "grammarly" },
  { brand: EXTRA_BRANDS.spyfu, name: "SpyFu", rating: 4.5, id: "spyfu" },
  { brand: EXTRA_BRANDS.mangools, name: "Mangools", rating: 4.5, id: "mangools" },
];

const OFFERS = [
  { brand: BRANDS.semrush, name: "Semrush Pro Plan – 30% OFF", expires: "Expires in 2 Days", id: "semrush" },
  { brand: BRANDS.canva, name: "Canva Pro – 50% OFF", expires: "Expires in 3 Days", id: "canva" },
  { brand: BRANDS.hostinger, name: "Hostinger – 80% OFF", expires: "Expires in 5 Days", id: "hostinger" },
];

const CLICKS = [42, 58, 35, 72, 64, 90, 78];
const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function Dashboard() {
  const [active, setActive] = useState("Dashboard");

  return (
    <div className="bg-slate-50/60 pb-16">
      <div className="mx-auto grid max-w-[1440px] items-start gap-8 px-4 py-8 sm:px-8 lg:grid-cols-[260px_1fr]">
        {/* Sidebar */}
        <aside className="card p-4 lg:sticky lg:top-28">
          <div className="mb-3 flex items-center gap-3 rounded-2xl bg-gradient-to-br from-indigo-50 to-violet-50 p-3">
            <img
              src="/images/avatar.png"
              alt="John Doe"
              className="h-11 w-11 rounded-full object-cover ring-2 ring-white"
            />
            <div>
              <p className="text-[13px] font-extrabold text-slate-900">John Doe</p>
              <p className="text-[11px] text-slate-400">Pro Member</p>
            </div>
          </div>
          <nav className="space-y-1">
            {NAV.map((n) => (
              <button
                key={n.label}
                onClick={() => setActive(n.label)}
                className={`flex w-full items-center gap-3 rounded-xl px-3.5 py-2.5 text-[13px] font-semibold transition-all ${
                  active === n.label
                    ? "gradient-bg text-white shadow-lg shadow-indigo-500/25"
                    : "text-slate-600 hover:bg-indigo-50 hover:text-indigo-600"
                }`}
              >
                <n.icon className="h-4 w-4" />
                <span className="flex-1 text-left">{n.label}</span>
                {n.badge && (
                  <span
                    className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-extrabold ${
                      active === n.label ? "bg-white/25 text-white" : "bg-rose-500 text-white"
                    }`}
                  >
                    {n.badge}
                  </span>
                )}
              </button>
            ))}
            <button
              onClick={() => navigate("home")}
              className="flex w-full items-center gap-3 rounded-xl px-3.5 py-2.5 text-[13px] font-semibold text-rose-500 transition-colors hover:bg-rose-50"
            >
              <LogOut className="h-4 w-4" /> Logout
            </button>
          </nav>
          {/* Profile completion */}
          <div className="mt-3 rounded-2xl border border-slate-100 p-4">
            <div className="flex items-center justify-between text-[12px] font-bold">
              <span className="text-slate-700">Profile Completion</span>
              <span className="text-indigo-600">72%</span>
            </div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
              <div className="gradient-bg h-full w-[72%] rounded-full" />
            </div>
            <button
              onClick={() => navigate("profile")}
              className="mt-3 w-full rounded-xl border border-indigo-200 py-2 text-[11.5px] font-bold text-indigo-600 hover:bg-indigo-50"
            >
              Complete Profile
            </button>
          </div>
        </aside>

        {/* Main */}
        <div className="space-y-8">
          {/* Welcome banner */}
          <Reveal>
            <div className="gradient-bg relative overflow-hidden rounded-[20px] p-7 shadow-xl shadow-indigo-500/25 sm:p-8">
              <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
              <h1 className="text-[22px] font-extrabold text-white sm:text-[26px]">
                Welcome back, John! 👋
              </h1>
              <p className="mt-1 text-[13.5px] text-indigo-100">
                Here's what's happening today.
              </p>
            </div>
          </Reveal>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 xl:grid-cols-4">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.06}>
                  <div className="card card-hover p-4">
                    <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${s.color}`}>
                    <s.icon className="h-5 w-5" />
                  </span>
                  <p className="font-heading mt-3 text-[26px] font-extrabold text-slate-900">{s.value}</p>
                  <p className="text-[12.5px] font-semibold text-slate-400">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="grid items-start gap-8 xl:grid-cols-[1fr_360px]">
            <div className="space-y-8">
              {/* Clicks chart */}
              <Reveal>
                <div className="card p-5">
                  <div className="mb-3 flex items-center justify-between">
                    <p className="text-[15px] font-extrabold text-slate-900">
                      Affiliate Clicks This Week
                    </p>
                    <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-extrabold text-emerald-600">
                      +24%
                    </span>
                  </div>
                  <div className="flex h-40 items-end gap-3">
                    {CLICKS.map((c, i) => (
                      <div key={i} className="flex flex-1 flex-col items-center gap-2">
                        <div className="flex w-full flex-1 items-end">
                          <div
                            className={`w-full rounded-t-lg transition-all ${
                              i === 5 ? "gradient-bg" : "bg-indigo-100 hover:bg-indigo-200"
                            }`}
                            style={{ height: `${c}%` }}
                          />
                        </div>
                        <span className="text-[10.5px] font-semibold text-slate-400">{DAYS[i]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* Recent views */}
              <Reveal>
                <div className="card p-5">
                  <p className="font-heading mb-3 text-[15px] font-extrabold text-slate-900">Recent Views</p>
                  <div className="flex flex-wrap gap-5">
                    {RECENT.map((r) => (
                      <button
                        key={r.name}
                        onClick={() => navigate("tool", r.id)}
                        className="group flex flex-col items-center gap-2"
                      >
                        <span className="transition-transform group-hover:scale-110">
                          <LogoBadge brand={r.brand} size={48} />
                        </span>
                        <span className="text-[11.5px] font-semibold text-slate-500">{r.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* Recommended */}
              <Reveal>
                <div className="card p-5">
                  <p className="font-heading mb-3 text-[15px] font-extrabold text-slate-900">
                    Recommended Tools for You
                  </p>
                  <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
                    {RECOMMENDED.map((r) => (
                      <button
                        key={r.name}
                        onClick={() => navigate("tool", r.id)}
                        className="card card-hover flex flex-col items-center gap-2 p-4"
                      >
                        <LogoBadge brand={r.brand} size={42} />
                        <span className="text-[12px] font-bold text-slate-800">{r.name}</span>
                        <Rating value={r.rating} size={10} />
                      </button>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Latest offers */}
            <Reveal>
              <div className="card p-5">
                <p className="font-heading mb-3 text-[15px] font-extrabold text-slate-900">Latest Offers</p>
                <div className="space-y-3">
                  {OFFERS.map((o) => (
                    <div
                      key={o.name}
                      className="flex items-center gap-3 rounded-2xl border border-slate-100 p-3.5 transition-all hover:border-indigo-200 hover:bg-indigo-50/40"
                    >
                      <LogoBadge brand={o.brand} size={40} />
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-[12.5px] font-bold text-slate-900">{o.name}</p>
                        <p className="text-[11px] font-semibold text-rose-500">{o.expires}</p>
                      </div>
                      <button
                        onClick={() => navigate("deal", o.id)}
                        className="shrink-0 rounded-xl border border-indigo-200 px-3.5 py-2 text-[11px] font-bold text-indigo-600 transition-all hover:bg-indigo-600 hover:text-white"
                      >
                        View Deal
                      </button>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => navigate("category")}
                  className="mt-3 w-full rounded-xl bg-indigo-50 py-2.5 text-[12.5px] font-bold text-indigo-600 transition-colors hover:bg-indigo-100"
                >
                  View All Offers →
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}
