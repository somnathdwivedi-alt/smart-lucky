import { navigate } from "../router";
import {
  BRANDS, GoogleAdsLogo, LogoBadge, Rating, Reveal, SectionHeading,
  MetaLogo, TikTokLogo, LinkedInLogo, MicrosoftLogo, PinterestLogo, SnapchatLogo, YouTubeLogo,
  CanvaLogo, ChatGPTLogo, SemrushLogo, AhrefsLogo, MailchimpLogo, HubSpotLogo, GrammarlyLogo, BufferLogo, NotionLogo,
} from "./ui";

/* ---------------- Popular Advertising Platforms ---------------- */
const PLATFORMS = [
  { brand: "googleads", name: "Google Ads" },
  { brand: "meta", name: "Meta Ads" },
  { brand: "tiktok", name: "TikTok Ads" },
  { brand: "linkedin", name: "LinkedIn Ads" },
  { brand: "microsoft", name: "Microsoft Ads" },
  { brand: "pinterest", name: "Pinterest Ads" },
  { brand: "snapchat", name: "Snapchat Ads" },
  { brand: "youtube", name: "YouTube Ads" },
];

export function AdPlatforms() {
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-[1440px] px-4 py-12 sm:px-8 lg:py-16">
        <SectionHeading title="Popular Advertising Platforms" linkLabel="View All" linkRoute="tools" />
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-8">
          {PLATFORMS.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.05}>
              <button onClick={() => navigate("tool", p.brand)} className="card card-hover flex flex-col items-center gap-3 p-5 w-full">
                {p.brand === "googleads" ? <GoogleAdsLogo size={48} /> :
                 p.brand === "meta" ? <MetaLogo size={48} /> :
                 p.brand === "tiktok" ? <TikTokLogo size={48} /> :
                 p.brand === "linkedin" ? <LinkedInLogo size={48} /> :
                 p.brand === "microsoft" ? <MicrosoftLogo size={48} /> :
                 p.brand === "pinterest" ? <PinterestLogo size={48} /> :
                 p.brand === "snapchat" ? <SnapchatLogo size={48} /> :
                 p.brand === "youtube" ? <YouTubeLogo size={48} /> :
                 <LogoBadge brand={BRANDS[p.brand]} size={48} />}
                <span className="text-center text-[13px] font-semibold text-slate-700">
                  {p.name}
                </span>
              </button>
            </Reveal>
          ))}
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
  return (
    <section className="mx-auto max-w-[1440px] px-4 py-12 sm:px-8 lg:py-16">
        <SectionHeading title="Top Marketing Tools" linkLabel="View All Tools" linkRoute="tools" />
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5 xl:grid-cols-9">
        {TOOLS.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.05}>
            <button onClick={() => navigate("tool", t.brand)} className="card card-hover flex flex-col items-center gap-2.5 p-4">
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
              <span className="text-[13px] font-bold text-slate-800">{t.name}</span>
              <Rating value={t.rating} size={11} />
            </button>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
