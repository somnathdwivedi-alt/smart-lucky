import { ArrowRight } from "lucide-react";
import { navigate } from "../router";
import { Rating, Reveal, SectionHeading } from "./ui";
import { PRODUCTS_DATA } from "../data/products-data";

const PRODUCT_OFFER_IDS = [
  "macbook-pro-14",
  "iphone-16-pro",
  "nike-air-max-2025",
  "dyson-v15-detect",
  "sony-bravia-xr-65",
];

const BADGE_MAP: Record<string, { badge: string; className: string }> = {
  "macbook-pro-14": { badge: "From $1,599", className: "border-indigo-200 bg-indigo-50 text-indigo-600" },
  "iphone-16-pro": { badge: "From $999", className: "border-emerald-200 bg-emerald-50 text-emerald-600" },
  "nike-air-max-2025": { badge: "Just Released", className: "border-orange-200 bg-orange-50 text-orange-600" },
  "dyson-v15-detect": { badge: "Best Seller", className: "border-violet-200 bg-violet-50 text-violet-600" },
  "sony-bravia-xr-65": { badge: "Premium Pick", className: "border-amber-200 bg-amber-50 text-amber-600" },
};

export function ProductOffers() {
  const items = PRODUCT_OFFER_IDS.map((id) => ({ id, data: PRODUCTS_DATA[id] })).filter((x) => x.data);

  return (
    <section className="relative overflow-hidden bg-slate-50/70">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 -top-20 h-72 w-72 animate-float-a rounded-full bg-gradient-to-br from-indigo-200/30 to-purple-200/30 blur-3xl" />
        <div className="absolute -right-32 top-1/4 h-96 w-96 animate-float-b rounded-full bg-gradient-to-br from-amber-200/20 to-pink-200/20 blur-3xl" />
        <div className="absolute -bottom-20 left-1/3 h-64 w-64 animate-float-c rounded-full bg-gradient-to-br from-emerald-200/20 to-cyan-200/20 blur-3xl" />
        <div className="absolute left-1/2 top-1/3 h-48 w-48 animate-float-a rounded-full bg-gradient-to-br from-violet-200/20 to-blue-200/20 blur-3xl" />
        <div className="absolute -left-10 bottom-1/4 h-40 w-40 animate-float-b rounded-full bg-gradient-to-br from-rose-200/20 to-orange-200/20 blur-3xl" />
        <div className="absolute right-1/4 -top-10 h-32 w-32 animate-float-c rounded-full bg-gradient-to-br from-sky-200/20 to-indigo-200/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-4 py-12 sm:px-8 lg:py-16">
        <SectionHeading title="Hot Product Deals" linkLabel="View All Products" linkRoute="category" />

        <div className="grid grid-cols-1 gap-x-5 gap-y-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
          {items.map(({ id, data }, i) => {
            const badge = BADGE_MAP[id];
            const priceText = data.variants?.[0]?.price || "";
            const tags = data.meta?.slice(0, 2) || [];
            const chips = data.features?.slice(0, 2) || [];

            return (
              <Reveal key={id} delay={i * 0.07}>
                <div className="group/card offer-card card flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white/70 backdrop-blur-md shadow-sm transition-all duration-300 hover:border-indigo-200/50">
                  <div className="relative overflow-hidden bg-slate-100" style={{ aspectRatio: "16/10" }}>
                    <div className="offer-card-shine" />
                    <img
                      src={data.image}
                      alt={data.name}
                      className="offer-card-image h-full w-full object-cover transition-transform duration-500 group-hover/card:scale-106"
                    />
                    {data.rating >= 4.7 && (
                      <span className="absolute right-2.5 top-2.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 px-2.5 py-0.5 text-[9px] font-black text-amber-950 shadow-md">
                        ★ Top Rated
                      </span>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-[14px] font-extrabold leading-snug text-slate-900 group-hover/card:text-indigo-600 transition-colors">
                        {data.name}
                      </h3>
                      {badge && (
                        <span
                          className={`inline-block shrink-0 rounded-full border px-2.5 py-0.5 text-[8px] font-bold uppercase tracking-wider ${badge.className}`}
                        >
                          {badge.badge}
                        </span>
                      )}
                    </div>

                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      {tags.map((t) => (
                        <span
                          key={t.label}
                          className="rounded-full bg-slate-50 px-2 py-0.5 text-[9px] font-bold text-slate-500 border border-slate-100/50"
                        >
                          {t.label}
                        </span>
                      ))}
                    </div>

                    <Rating value={data.rating} className="mt-2" />

                    <p className="mt-2 line-clamp-2 text-[12px] leading-relaxed text-slate-500">
                      {data.description}
                    </p>

                    <div className="mt-3.5 flex flex-wrap gap-1.5">
                      {chips.map((f) => (
                        <button
                          key={f.name}
                          className="rounded-full border border-slate-200/80 bg-white px-2.5 py-0.5 text-[10px] font-bold text-slate-600 transition-all hover:border-indigo-300 hover:bg-indigo-50/50 hover:text-indigo-600"
                        >
                          {f.name}
                        </button>
                      ))}
                    </div>

                    <div className="mt-auto pt-4">
                      <div className="mb-3.5 h-px bg-slate-100" />

                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-[17px] font-black tracking-tight text-indigo-650">
                            {priceText}
                          </span>
                          <p className="mt-0.5 text-[9px] font-extrabold uppercase tracking-wide text-emerald-600 flex items-center gap-1">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            Free Delivery
                          </p>
                        </div>
                        <button
                          onClick={() => navigate("product", id)}
                          className="btn-ripple gradient-bg group/btn flex shrink-0 items-center gap-1.5 rounded-full px-4 py-2 text-[11px] font-bold text-white shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/35 transition-all"
                        >
                          View
                          <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover/card:translate-x-0.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
