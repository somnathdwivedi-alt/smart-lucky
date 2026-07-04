import { Award, CalendarDays, Mail, MapPin, PencilLine, Star, Trophy, Zap } from "lucide-react";
import { useState } from "react";
import { navigate } from "../router";
import { Tabs } from "../components/shared";
import { BRANDS, LogoBadge, Rating, Reveal } from "../components/ui";

const STATS = [
  { label: "Reviews", value: "24" },
  { label: "Followers", value: "320" },
  { label: "Following", value: "150" },
  { label: "Bookmarks", value: "48" },
];

const REVIEWS = [
  { brand: BRANDS.semrush, title: "Semrush Review", text: "Excellent tool for SEO and competitor research.", date: "May 10, 2024", rating: 4.8, id: "semrush" },
  { brand: BRANDS.ahrefs, title: "Ahrefs Review", text: "The best backlink analysis tool in the market.", date: "Apr 28, 2024", rating: 4.7, id: "ahrefs" },
  { brand: BRANDS.canva, title: "Canva Pro Review", text: "Great for non-designers. Very easy to use!", date: "Apr 15, 2024", rating: 4.6, id: "canva" },
];

const SAVED = [
  { brand: BRANDS.semrush, name: "Semrush Pro – 30% OFF", id: "semrush" },
  { brand: BRANDS.hostinger, name: "Hostinger – 80% OFF", id: "hostinger" },
  { brand: BRANDS.canva, name: "Canva Pro – 50% OFF", id: "canva" },
];

const BADGES = [
  { icon: Trophy, label: "Top Reviewer", color: "bg-amber-50 text-amber-500" },
  { icon: Star, label: "Early Adopter", color: "bg-indigo-50 text-indigo-600" },
  { icon: Zap, label: "Deal Hunter", color: "bg-violet-50 text-violet-600" },
  { icon: Award, label: "Trusted Voice", color: "bg-emerald-50 text-emerald-600" },
];

export default function Profile() {
  const [tab, setTab] = useState("Reviews");

  return (
    <div className="bg-slate-50/60 pb-16">
      <div className="mx-auto max-w-[1100px] px-4 py-8 sm:px-8">
        {/* Cover + profile card */}
        <Reveal>
          <div className="card overflow-hidden">
            {/* Cover */}
            <div className="gradient-bg relative h-40 sm:h-52">
              <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
              <div className="pointer-events-none absolute bottom-0 left-1/3 h-32 w-64 rounded-full bg-violet-400/30 blur-3xl" />
              <svg className="absolute inset-0 h-full w-full opacity-20" viewBox="0 0 400 100" preserveAspectRatio="none">
                <path d="M0 80 L80 30 L160 60 L240 15 L320 45 L400 5 L400 100 L0 100 Z" fill="white" />
              </svg>
            </div>
            {/* Info */}
            <div className="relative px-6 pb-7 sm:px-10">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
                <img
                  src="/images/avatar.png"
                  alt="John Doe"
                  className="-mt-14 h-28 w-28 rounded-full border-4 border-white object-cover shadow-xl sm:-mt-16 sm:h-32 sm:w-32"
                />
                <div className="flex-1 pt-1">
                  <h1 className="text-[24px] font-extrabold tracking-tight text-slate-900 sm:text-[28px]">
                    John Doe
                  </h1>
                  <p className="text-[13.5px] font-semibold text-indigo-600">
                    Digital Marketer & Content Creator
                  </p>
                  <div className="mt-2 flex flex-wrap items-center gap-4 text-[12.5px] text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5" /> New York, USA
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Mail className="h-3.5 w-3.5" /> john@doe.com
                    </span>
                    <span className="flex items-center gap-1.5">
                      <CalendarDays className="h-3.5 w-3.5" /> Joined Jan 2023
                    </span>
                  </div>
                </div>
                <button className="btn-ripple flex h-11 items-center gap-2 self-start rounded-xl border border-indigo-200 px-5 text-[13px] font-bold text-indigo-600 transition-all hover:bg-indigo-50 sm:self-end">
                  <PencilLine className="h-4 w-4" /> Edit Profile
                </button>
              </div>

              {/* Stats */}
              <div className="mt-7 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-100 bg-slate-100 sm:grid-cols-4">
                {STATS.map((s) => (
                  <div key={s.label} className="bg-white p-4 text-center">
                    <p className="text-[22px] font-extrabold text-slate-900">{s.value}</p>
                    <p className="text-[12px] font-semibold text-slate-400">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* Badges */}
              <div className="mt-6 flex flex-wrap gap-3">
                {BADGES.map((b) => (
                  <span
                    key={b.label}
                    className={`flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[12px] font-bold ${b.color} ring-1 ring-current/10`}
                  >
                    <b.icon className="h-3.5 w-3.5" /> {b.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Tabs */}
        <Reveal className="mt-6">
          <div className="card p-6 sm:p-8">
            <Tabs
              tabs={["Reviews", "Saved Deals", "Comments", "Followers", "Following"]}
              active={tab}
              onChange={setTab}
            />
            <div className="pt-6">
              {tab === "Reviews" && (
                <div className="space-y-4">
                  {REVIEWS.map((r) => (
                    <button
                      key={r.title}
                      onClick={() => navigate("review", r.id)}
                      className="flex w-full flex-col gap-4 rounded-2xl border border-slate-100 p-5 text-left transition-all hover:border-indigo-200 hover:bg-indigo-50/40 sm:flex-row sm:items-center"
                    >
                      <LogoBadge brand={r.brand} size={46} />
                      <div className="min-w-0 flex-1">
                        <p className="text-[14px] font-bold text-slate-900">{r.title}</p>
                        <p className="mt-0.5 text-[13px] text-slate-500">{r.text}</p>
                      </div>
                      <div className="flex items-center gap-4 sm:flex-col sm:items-end sm:gap-1">
                        <span className="text-[11.5px] text-slate-400">{r.date}</span>
                        <Rating value={r.rating} size={11} />
                      </div>
                    </button>
                  ))}
                  <button
                    onClick={() => navigate("review", REVIEWS[0]?.id)}
                    className="mx-auto block text-[13px] font-bold text-indigo-600 hover:text-violet-600"
                  >
                    View All Reviews →
                  </button>
                </div>
              )}

              {tab === "Saved Deals" && (
                <div className="grid gap-5 sm:grid-cols-3">
                  {SAVED.map((s) => (
                    <button
                      key={s.name}
                      onClick={() => navigate("deal", s.id)}
                      className="card card-hover flex flex-col items-center gap-3 p-5 text-center"
                    >
                      <LogoBadge brand={s.brand} size={46} />
                      <p className="text-[13px] font-bold text-slate-900">{s.name}</p>
                      <span className="rounded-xl bg-indigo-50 px-4 py-1.5 text-[11.5px] font-bold text-indigo-600">
                        View Deal →
                      </span>
                    </button>
                  ))}
                </div>
              )}

              {(tab === "Comments" || tab === "Followers" || tab === "Following") && (
                <div className="flex flex-col items-center py-10 text-center">
                  <img
                    src="/images/search-empty.png"
                    alt="Empty"
                    className="h-28 w-28 rounded-3xl object-cover opacity-90"
                  />
                  <p className="font-heading mt-3 text-[15px] font-extrabold text-slate-900">
                    Nothing here yet
                  </p>
                  <p className="mt-1 max-w-xs text-[13px] text-slate-400">
                    {tab === "Comments"
                      ? "Comments you post on reviews and news will show up here."
                      : `Your ${tab.toLowerCase()} list will show up here once you start connecting.`}
                  </p>
                  <button
                    onClick={() => navigate("home")}
                    className="btn-ripple gradient-bg mt-4 rounded-xl px-6 py-2.5 text-[13px] font-bold text-white shadow-lg shadow-indigo-500/30"
                  >
                    Explore MarketyDeals
                  </button>
                </div>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
