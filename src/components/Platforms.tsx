import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { navigate } from "../router";
import {
  BRANDS, GoogleAdsLogo, LogoBadge, Rating, Reveal, SectionHeading, TiltCard,
  MetaLogo, TikTokLogo, LinkedInLogo, MicrosoftLogo, PinterestLogo, SnapchatLogo, YouTubeLogo,
  CanvaLogo, ChatGPTLogo, SemrushLogo, AhrefsLogo, MailchimpLogo, HubSpotLogo, GrammarlyLogo, BufferLogo, NotionLogo,
} from "./ui";

/* ---------------- Popular Advertising Platforms ---------------- */
const PLATFORMS = [
  { brand: "googleads", name: "Google Ads", desc: "Reach high-intent customers actively searching for your products and services.", color: "#4285F4", circleBg: "rgba(66,133,244,0.08)" },
  { brand: "meta", name: "Meta Ads", desc: "Target audiences across Facebook and Instagram with advanced segmentation tools.", color: "#0668E1", circleBg: "rgba(6,104,225,0.08)" },
  { brand: "tiktok", name: "TikTok Ads", desc: "Engage younger audiences with short-form video content and viral campaigns.", color: "#0f0f0f", circleBg: "rgba(15,15,15,0.06)" },
  { brand: "linkedin", name: "LinkedIn Ads", desc: "Connect with B2B professionals and decision-makers through precision targeting.", color: "#0A66C2", circleBg: "rgba(10,102,194,0.08)" },
  { brand: "microsoft", name: "Microsoft Ads", desc: "Capture demand on the Bing Network with intent-driven search advertising.", color: "#F25022", circleBg: "rgba(242,80,34,0.08)" },
  { brand: "pinterest", name: "Pinterest Ads", desc: "Inspire purchase intent with visually rich pins and shopping ad formats.", color: "#E60023", circleBg: "rgba(230,0,35,0.08)" },
  { brand: "snapchat", name: "Snapchat Ads", desc: "Reach Gen Z with immersive AR lenses, filters, and vertical video ads.", color: "#FFFC00", circleBg: "rgba(255,252,0,0.12)" },
  { brand: "youtube", name: "YouTube Ads", desc: "Tell your story through video across the world's largest streaming platform.", color: "#FF0000", circleBg: "rgba(255,0,0,0.08)" },
];

const LOGO_MAP: Record<string, (size?: number) => React.ReactNode> = {
  googleads: (s) => <GoogleAdsLogo size={s} />,
  meta: (s) => <MetaLogo size={s} />,
  tiktok: (s) => <TikTokLogo size={s} />,
  linkedin: (s) => <LinkedInLogo size={s} />,
  microsoft: (s) => <MicrosoftLogo size={s} />,
  pinterest: (s) => <PinterestLogo size={s} />,
  snapchat: (s) => <SnapchatLogo size={s} />,
  youtube: (s) => <YouTubeLogo size={s} />,
};

export function AdPlatforms() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  };

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "left" ? -el.clientWidth * 0.6 : el.clientWidth * 0.6, behavior: "smooth" });
    setTimeout(updateScrollState, 350);
  };

  return (
    <section className="bg-[#FCFCFD]">
      <div className="mx-auto max-w-[1440px] px-4 py-8 sm:px-8 lg:py-10">
        <SectionHeading title="Popular Advertising Platforms" linkLabel="View All" linkRoute="tools" />
        <div className="relative">
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute -left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#EEF2F6] bg-white shadow-lg transition-all hover:border-indigo-200 hover:text-indigo-600 sm:-left-4 sm:h-11 sm:w-11"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          )}
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute -right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#EEF2F6] bg-white shadow-lg transition-all hover:border-indigo-200 hover:text-indigo-600 sm:-right-4 sm:h-11 sm:w-11"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          )}
          <div
            ref={scrollRef}
            onScroll={updateScrollState}
            className="flex gap-4 overflow-x-auto scroll-smooth xl:gap-5 py-6 -my-6"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {PLATFORMS.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.05}>
                <TiltCard>
                  <button
                    onClick={() => navigate("tool", p.brand)}
                    className="group/btn card card-hover flex w-[230px] shrink-0 flex-col items-center rounded-3xl border border-slate-100 bg-white/70 backdrop-blur-md px-5 pb-6 pt-8 text-center shadow-sm transition-all duration-300 hover:border-indigo-200/50 sm:w-[245px] xl:w-[260px]"
                    style={{ minHeight: 350 }}
                  >
                    <div className="flex h-16 w-16 items-center justify-center transition-transform duration-300 group-hover/btn:scale-110">
                      <img
                        src={BRANDS[p.brand].image}
                        alt={p.name}
                        className="h-full w-full object-contain"
                      />
                    </div>

                    <span className="mt-5 text-[16px] font-extrabold sm:text-[17px] xl:text-[18px] text-slate-800 transition-colors group-hover/btn:text-indigo-600">
                      {p.name}
                    </span>

                    <span
                      className="mt-3.5 block h-[3px] rounded-full transition-all duration-300 group-hover/btn:w-[35px]"
                      style={{ width: 16, backgroundColor: p.color }}
                    />

                    <p className="mt-4 text-[13px] leading-relaxed sm:text-[14px] text-slate-500 h-[68px] sm:h-[72px] line-clamp-3">
                      {p.desc}
                    </p>

                    <div className="mt-auto flex flex-col items-center pt-5">
                      <span
                        className="inline-flex h-[44px] w-[150px] items-center justify-center gap-2 rounded-full border text-[13px] font-extrabold transition-all duration-300 group-hover/btn:shadow-sm xl:h-[46px] xl:w-[160px] xl:text-[14px]"
                        style={{
                          borderColor: p.color,
                          color: p.color,
                          backgroundColor: `${p.color}0c`,
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = `${p.color}18`; }}
                        onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = `${p.color}0c`; }}
                      >
                        Explore
                        <ChevronRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5" style={{ stroke: p.color, strokeWidth: 2.5 }} />
                      </span>
                    </div>
                  </button>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Top Marketing Tools ---------------- */
const TOOLS = [
  { brand: "canva", name: "Canva", rating: 4.8 },
  { brand: "chatgpt", name: "ChatGPT", rating: 4.7 },
  { brand: "semrush", name: "Semrush", rating: 4.6 },
  { brand: "ahrefs", name: "Ahrefs", rating: 4.6 },
  { brand: "mailchimp", name: "Mailchimp", rating: 4.5 },
  { brand: "hubspot", name: "HubSpot", rating: 4.5 },
  { brand: "grammarly", name: "Grammarly", rating: 4.6 },
  { brand: "buffer", name: "Buffer", rating: 4.5 },
  { brand: "notion", name: "Notion", rating: 4.6 },
];

export function MarketingTools() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let active = true;
    const speed = 0.5; // slow, smooth pixel scroll speed per frame

    const step = () => {
      if (!active || !el) return;

      el.scrollLeft += speed;

      // Wrap around seamlessly when the first full set of tools has scrolled completely out of view
      const halfWidth = el.scrollWidth / 2;
      if (el.scrollLeft >= halfWidth) {
        el.scrollLeft -= halfWidth;
      }

      requestAnimationFrame(step);
    };

    requestAnimationFrame(step);

    // Pause scrolling when hovered so user can interact and click cards
    const handleMouseEnter = () => {
      active = false;
    };
    const handleMouseLeave = () => {
      active = true;
      step();
    };

    el.addEventListener("mouseenter", handleMouseEnter);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      active = false;
      if (el) {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <section className="mx-auto max-w-[1440px] px-4 py-12 sm:px-8 lg:py-16">
      <SectionHeading title="Top Marketing Tools" linkLabel="View All Tools" linkRoute="tools" />
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto scrollbar-none py-6 -my-6"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {[...TOOLS, ...TOOLS].map((t, i) => (
          <Reveal key={`${t.name}-${i}`} delay={(i % TOOLS.length) * 0.05}>
            <TiltCard>
              <button
                onClick={() => navigate("tool", t.brand)}
                className="group/tool card card-hover flex w-[130px] sm:w-[140px] xl:w-[150px] shrink-0 flex-col items-center gap-2.5 rounded-2xl border border-slate-100 bg-white/70 backdrop-blur-md p-4 text-center transition-all duration-300 hover:border-indigo-200/50"
              >
                <div className="transition-transform duration-300 group-hover/tool:scale-108">
                  {t.brand === "canva" ? <CanvaLogo size={46} /> :
                   t.brand === "chatgpt" ? <ChatGPTLogo size={46} /> :
                   t.brand === "semrush" ? <SemrushLogo size={46} /> :
                   t.brand === "ahrefs" ? <AhrefsLogo size={46} /> :
                   t.brand === "mailchimp" ? <MailchimpLogo size={46} /> :
                   t.brand === "hubspot" ? <HubSpotLogo size={46} /> :
                   t.brand === "grammarly" ? <GrammarlyLogo size={46} /> :
                   t.brand === "buffer" ? <BufferLogo size={46} /> :
                   t.brand === "notion" ? <NotionLogo size={46} /> :
                   <LogoBadge brand={BRANDS[t.brand]} size={46} />}
                </div>
                <span className="text-[13px] font-extrabold text-slate-800 transition-colors group-hover/tool:text-indigo-600">{t.name}</span>
                <Rating value={t.rating} size={11} />
              </button>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}