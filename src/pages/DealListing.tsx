import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Clock, Zap, Mail, ArrowRight, Package, Gift } from "lucide-react";
import { navigate } from "../router";
import { PageHeader } from "../components/shared";
import { DEALS_DATA } from "../data/deals-data";

const ALL_DEALS = Object.entries(DEALS_DATA).map(([key, d]) => ({ key, ...d }));
const ENDING_SOON = ALL_DEALS.slice(0, 3);
const RECENTLY_ADDED = ALL_DEALS.slice(3, 7);
const MOST_POPULAR = ALL_DEALS[0];

function useCountdown(initial: number) {
  const [left, setLeft] = useState(initial);
  useEffect(() => {
    const id = setInterval(() => setLeft((s) => (s > 0 ? s - 1 : 24 * 3600)), 1000);
    return () => clearInterval(id);
  }, []);
  const h = Math.floor(left / 3600);
  const m = Math.floor((left % 3600) / 60);
  const s = left % 60;
  return [h, m, s].map((n) => String(n).padStart(2, "0"));
}

function TimerBlock({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex w-[70px] flex-col items-center justify-center rounded-2xl bg-white py-3 shadow-[0_4px_16px_rgba(0,0,0,0.06)]">
      <span className="text-[32px] font-extrabold tabular-nums text-[#5B4CF8] leading-none">{value}</span>
      <span className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-[#707070]">{label}</span>
    </div>
  );
}

/* ═══════════════════════════════════════
   SECTION 1 — Hero Flash Deals Banner
   ═══════════════════════════════════════ */
function HeroFlashBanner() {
  const [h, m, s] = useCountdown(6 * 3600 + 48 * 60 + 6);
  return (
    <section className="mx-auto w-full max-w-[1320px] px-4 sm:px-6">
      <div className="relative flex h-[450px] overflow-hidden rounded-[24px] bg-white px-8 py-10 shadow-[0_10px_30px_rgba(0,0,0,0.06)] sm:px-16 items-center">
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#5B4CF8]/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 left-1/3 h-64 w-64 rounded-full bg-[#5B4CF8]/5 blur-3xl" />
        
        <div className="relative z-10 grid w-full items-center gap-8 lg:grid-cols-[1fr_360px] text-center lg:text-left">
          <div className="flex flex-col items-center gap-5 lg:items-start">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-red-50 px-4 py-1.5 text-[12px] font-bold uppercase tracking-wider text-red-500">
              <Zap className="h-3.5 w-3.5 fill-red-400" />
              LIVE FLASH DEALS
            </span>
            <h1 className="text-[44px] font-extrabold leading-[1.1] tracking-tight text-[#101010] sm:text-[56px] lg:text-[62px]">
              Unmissable. <span className="text-[#5B4CF8]">Urgent.</span> Elite.
            </h1>
            <p className="max-w-lg text-[16px] leading-relaxed text-[#707070] sm:text-[18px]">
              Premium tech and SaaS lifetime deals ending in minutes.
              <br />
              Don't blink.
            </p>
            <div className="flex items-center gap-4">
              <TimerBlock value={h} label="Hours" />
              <TimerBlock value={m} label="Minutes" />
              <TimerBlock value={s} label="Seconds" />
            </div>
          </div>
          <div className="relative hidden h-full items-center justify-center lg:flex">
            <img
              src="/images/deal-hero-woman-removebg-preview.png"
              alt="Flash Deals"
              className="absolute -bottom-20 right-0 h-[460px] w-auto max-w-none object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   SECTION 2 — Upcoming Deal Notification
   ═══════════════════════════════════════ */
function UpcomingNotification() {
  const [email, setEmail] = useState("");
  return (
    <section className="mx-auto w-full max-w-[1320px] px-4 sm:px-6">
      <div className="flex flex-col items-center justify-between gap-4 rounded-[24px] bg-white px-8 py-5 shadow-[0_10px_30px_rgba(0,0,0,0.06)] sm:flex-row">
        <div className="flex items-center gap-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#5B4CF8]/10 text-[#5B4CF8]">
            <Clock className="h-5 w-5" />
          </span>
          <div>
            <p className="text-[16px] font-bold text-[#101010]">Upcoming Deal Drop: AI Creative Suite</p>
            <p className="text-[13px] text-[#707070]">Starts in 45 minutes · Limited to 50 licenses</p>
          </div>
        </div>
        <div className="flex w-full shrink-0 items-center gap-2 sm:w-auto">
          <div className="relative flex-1 sm:flex-initial">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email for notification"
              className="h-11 w-full rounded-full border border-[#ECECF5] bg-[#F8F8FC] px-5 text-[13px] text-[#101010] outline-none transition-all placeholder:text-[#707070] focus:border-[#5B4CF8] focus:bg-white sm:w-[220px]"
            />
          </div>
          <button className="flex h-11 shrink-0 items-center gap-1.5 rounded-full bg-[#5B4CF8] px-6 text-[13px] font-bold text-white transition-all hover:bg-[#4C3DF2]">
            <Mail className="h-4 w-4" /> Remind Me
          </button>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   SECTION 3 — Ending Soon
   ═══════════════════════════════════════ */
function EndingSoonCard({ deal }: { deal: (typeof ALL_DEALS)[number] }) {
  const [h, m, s] = useCountdown(deal.countdownSeconds);
  const timerStr = `${h}:${m}:${s} LEFT`;
  return (
    <div className="flex flex-col overflow-hidden rounded-[18px] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-[220px] overflow-hidden">
        <img src={deal.image} alt={deal.name} className="h-full w-full object-cover" />
        <span className="absolute left-3 top-3 rounded-full bg-red-500 px-3 py-1 text-[11px] font-bold text-white shadow-lg">
          {timerStr}
        </span>
        <span className="absolute bottom-3 left-3 rounded-full bg-[#5B4CF8] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
          {deal.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-[22px] font-bold text-[#101010]">{deal.name}</h3>
        <div className="mt-3 flex items-center gap-3">
          <span className="text-[28px] font-extrabold text-[#5B4CF8]">{deal.currentPrice}</span>
          <span className="text-[15px] text-[#707070] line-through">{deal.originalPrice}</span>
          <span className="rounded-full bg-red-50 px-2.5 py-0.5 text-[12px] font-bold text-red-500">{deal.discountPercent}</span>
        </div>
        <div className="mt-4 flex items-center justify-between text-[13px]">
          <span className="flex items-center gap-1 font-semibold text-red-500">
            <span className="h-2 w-2 rounded-full bg-red-500" />
            {deal.inventoryLabel}
          </span>
          <span className="font-semibold text-[#707070]">{deal.inventory} Left</span>
        </div>
        <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-red-100">
          <div className="h-full rounded-full bg-red-500" style={{ width: `${Math.min(100, (deal.inventory / 50) * 100)}%` }} />
        </div>
        <button
          onClick={() => navigate("deal", deal.key)}
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-full border-2 border-[#5B4CF8] py-3 text-[14px] font-bold text-[#5B4CF8] transition-all hover:bg-[#5B4CF8] hover:text-white"
        >
          CLAIM DEAL →
        </button>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════
   SECTION 4 — Recently Added
   ═══════════════════════════════════════ */
function RecentlyAddedCard({ deal }: { deal: (typeof ALL_DEALS)[number] }) {
  return (
    <div className="flex h-[160px] w-[240px] shrink-0 flex-col overflow-hidden rounded-[16px] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="h-[110px] overflow-hidden">
        <img src={deal.image} alt={deal.name} className="h-full w-full object-cover" />
      </div>
      <div className="flex items-center justify-between px-4 py-3">
        <p className="truncate text-[13px] font-bold text-[#101010]">{deal.name}</p>
        <div className="flex items-center gap-1.5">
          <span className="text-[14px] font-extrabold text-[#5B4CF8]">{deal.currentPrice}</span>
          <span className="text-[11px] text-[#707070] line-through">{deal.originalPrice}</span>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════
   SECTION 5 — Most Popular Deals
   ═══════════════════════════════════════ */
function MostPopularSection() {
  return (
    <section className="mx-auto w-full max-w-[1320px] px-4 sm:px-6">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-[38px] font-extrabold tracking-tight text-[#101010]">Most Popular Deals</h2>
          <p className="mt-2 text-[16px] text-[#707070]">Curated top picks from our community</p>
        </div>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[60%_40%]">
        {/* Feature Card */}
        <div className="relative flex h-[520px] flex-col justify-end overflow-hidden rounded-[22px] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
          <img src={MOST_POPULAR.image} alt={MOST_POPULAR.name} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="relative z-10 flex flex-col gap-4 p-8">
            <span className="inline-flex w-fit rounded-full bg-amber-400/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-black">
              Community Choice
            </span>
            <h3 className="text-[28px] font-extrabold text-white">{MOST_POPULAR.name}</h3>
            <p className="max-w-md text-[15px] leading-relaxed text-white/80">{MOST_POPULAR.description}</p>
            <div className="flex items-center gap-6">
              <button
                onClick={() => navigate("deal", MOST_POPULAR.key)}
                className="rounded-full bg-[#5B4CF8] px-8 py-3 text-[14px] font-bold text-white transition-all hover:bg-[#4C3DF2]"
              >
                GET IT NOW
              </button>
              <span className="text-[22px] font-extrabold text-white">{MOST_POPULAR.currentPrice}</span>
              <span className="text-[15px] text-white/60 line-through">{MOST_POPULAR.originalPrice}</span>
            </div>
          </div>
        </div>

        {/* Right Grid */}
        <div className="flex flex-col gap-6">
          {/* Top Purple Card */}
          <div className="flex h-[170px] flex-col justify-between overflow-hidden rounded-[22px] bg-gradient-to-br from-[#6A5AF9] to-[#4C3DF2] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
            <div>
              <span className="text-[12px] font-bold uppercase tracking-wider text-white/70">Software Spotlight</span>
              <h3 className="mt-1 text-[22px] font-extrabold text-white">AI Image Engine</h3>
              <p className="text-[14px] text-white/80">Lifetime License</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <span key={i} className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-violet-200 to-purple-300 text-[10px] font-bold text-[#5B4CF8]">
                    {["JD", "MK", "AL"][i - 1]}
                  </span>
                ))}
              </div>
              <button className="rounded-full bg-white px-5 py-2 text-[13px] font-bold text-[#5B4CF8] transition-all hover:bg-purple-50">
                Claim for $67
              </button>
            </div>
          </div>

          {/* Bottom Left - Tech Extras */}
          <div className="flex flex-1 flex-col justify-between rounded-[22px] bg-[#F0EEFF] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
            <div>
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#5B4CF8]/10 text-[#5B4CF8]">
                <Package className="h-5 w-5" />
              </span>
              <h3 className="mt-3 text-[20px] font-bold text-[#101010]">Tech Extras</h3>
              <p className="mt-1 text-[14px] text-[#707070]">Cables · Adapters · Accessories</p>
            </div>
            <button
              onClick={() => navigate("deals")}
              className="mt-3 inline-flex items-center gap-1 text-[14px] font-bold text-[#5B4CF8] transition-all hover:gap-2"
            >
              Explore All <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* Bottom Right - Mystery Box */}
          <div className="flex flex-1 cursor-pointer flex-col justify-between rounded-[22px] bg-[#1A1A2E] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all hover:bg-[#252542]" onClick={() => navigate("deals")}>
            <div>
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400/20 text-amber-400">
                <Gift className="h-5 w-5" />
              </span>
              <h3 className="mt-3 text-[20px] font-bold text-white">Mystery Box</h3>
              <p className="mt-1 text-[14px] text-white/60">Guaranteed value · I'm Feeling Lucky</p>
            </div>
            <p className="mt-3 text-[14px] font-bold text-amber-400">Reveal Surprise →</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════ */
export default function DealListing() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amt = 260;
    scrollRef.current.scrollBy({ left: dir === "left" ? -amt : amt, behavior: "smooth" });
  };

  return (
    <div className="bg-[#F8F8FC] pb-16">
      <PageHeader crumbs={[{ label: "Home", route: "home" }, { label: "Deals" }]} />

      <div className="space-y-[64px] pt-6">
        {/* ─────────── SECTION 1 — Hero ─────────── */}
        <HeroFlashBanner />

        {/* ─────────── SECTION 2 — Upcoming ─────────── */}
        <UpcomingNotification />

        {/* ─────────── SECTION 3 — Ending Soon ─────────── */}
        <section className="mx-auto w-full max-w-[1320px] px-4 sm:px-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-[38px] font-extrabold tracking-tight text-[#101010]">Ending Soon</h2>
              <p className="mt-2 text-[16px] text-[#707070]">Final call for these heavy hitters.</p>
            </div>
            <button
              onClick={() => navigate("deals")}
              className="hidden shrink-0 items-center gap-1 text-[14px] font-semibold text-[#5B4CF8] transition-colors hover:text-[#4C3DF2] sm:inline-flex"
            >
              View All <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ENDING_SOON.map((d) => (
              <EndingSoonCard key={d.key} deal={d} />
            ))}
          </div>
        </section>

        {/* ─────────── SECTION 4 — Recently Added ─────────── */}
        <section className="mx-auto w-full max-w-[1320px] px-4 sm:px-6">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-[38px] font-extrabold tracking-tight text-[#101010]">Recently Added</h2>
            <div className="flex gap-2">
              <button onClick={() => scroll("left")} className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ECECF5] bg-white text-[#707070] transition-all hover:border-[#5B4CF8] hover:text-[#5B4CF8]">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button onClick={() => scroll("right")} className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ECECF5] bg-white text-[#707070] transition-all hover:border-[#5B4CF8] hover:text-[#5B4CF8]">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div ref={scrollRef} className="mt-6 flex gap-5 overflow-x-auto pb-2 scrollbar-none">
            {RECENTLY_ADDED.map((d) => (
              <RecentlyAddedCard key={d.key} deal={d} />
            ))}
          </div>
        </section>

        {/* ─────────── SECTION 5 — Most Popular ─────────── */}
        <MostPopularSection />
      </div>
    </div>
  );
}
