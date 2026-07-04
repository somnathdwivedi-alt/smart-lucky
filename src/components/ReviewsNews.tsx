import { ArrowRight, CalendarDays } from "lucide-react";
import { navigate } from "../router";
import { BRANDS, LogoBadge, Rating, Reveal, SectionHeading } from "./ui";

const REVIEWS = [
  {
    brand: "semrush",
    title: "Semrush Review",
    rating: 4.8,
    desc: "Complete SEO toolkit for professionals.",
    id: "semrush",
  },
  {
    brand: "ahrefs",
    title: "Ahrefs Review",
    rating: 4.7,
    desc: "Best tool for backlink analysis.",
    id: "ahrefs",
  },
  {
    brand: "canva",
    title: "Canva Pro Review",
    rating: 4.8,
    desc: "Amazing design tool for everyone.",
    id: "canva",
  },
];

const NEWS = [
  { date: "May 12, 2024", title: "Google Ads introduces new AI features for advertisers", id: "google-ads-ai", image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=400&h=300&fit=crop" },
  { date: "May 10, 2024", title: "Meta launches new Advantage+ advertising tools", id: "meta-ad-tools", image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&h=300&fit=crop" },
  { date: "May 08, 2024", title: "TikTok Ads update: New targeting options for businesses", id: "tiktok-ad-update", image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&h=300&fit=crop" },
];

export default function ReviewsNews() {
  return (
    <section className="bg-slate-50/70">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-4 py-12 sm:px-8 lg:grid-cols-[1fr_44%] lg:py-16">
        {/* Latest Reviews */}
        <div>
          <SectionHeading title="Latest Reviews" linkLabel="View All Reviews" linkRoute="reviews" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.08}>
                <button onClick={() => navigate("review", r.id)} className="card card-hover group block h-full w-full p-4 text-left">
                  <div className="mb-3 flex h-24 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-indigo-50 via-white to-violet-50">
                    <span className="transition-transform duration-500 group-hover:scale-110">
                      <LogoBadge brand={BRANDS[r.brand]} size={52} />
                    </span>
                  </div>
                  <h3 className="text-[14px] font-bold text-slate-900">{r.title}</h3>
                  <Rating value={r.rating} className="mt-1.5" />
                  <p className="mt-2 text-[13px] leading-relaxed text-slate-500">{r.desc}</p>
                  <span className="mt-2 inline-flex items-center gap-1 text-[13px] font-bold text-indigo-600">
                    Read Review
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Marketing News */}
        <div>
          <SectionHeading title="Marketing News" linkLabel="View All News" linkRoute="blog" />
          <Reveal>
            <div className="card card-hover flex h-auto flex-col gap-6 p-5 sm:flex-row">
              <div className="group h-44 w-full shrink-0 overflow-hidden rounded-2xl sm:h-auto sm:w-40">
                <img
                  src={NEWS[0]?.image || "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=400&h=300&fit=crop"}
                  alt="Marketing news"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col divide-y divide-slate-100">
                {NEWS.map((n) => (
                  <button key={n.title} onClick={() => navigate("news", n.id)} className="group flex-1 py-3 first:pt-0 last:pb-0 text-left">
                    <p className="text-[13px] font-semibold leading-snug text-slate-800 transition-colors group-hover:text-indigo-600">
                      {n.title}
                    </p>
                    <p className="mt-1.5 flex items-center gap-1.5 text-[11px] font-medium text-slate-400">
                      <CalendarDays className="h-3 w-3" />
                      {n.date}
                      <span className="ml-auto inline-flex items-center gap-0.5 font-bold text-indigo-500 opacity-0 transition-opacity group-hover:opacity-100">
                        Read More <ArrowRight className="h-3 w-3" />
                      </span>
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
