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
    <section className="bg-slate-50/70">
      <div className="mx-auto max-w-[1440px] px-4 py-12 sm:px-8 lg:py-16">
        <SectionHeading title="Hot Product Deals" linkLabel="View All Products" linkRoute="category" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
          {items.map(({ id, data }, i) => {
            const badge = BADGE_MAP[id];
            return (
              <Reveal key={id} delay={i * 0.07}>
                <div className="card card-hover flex h-full flex-col p-4">
                  <div className="relative -mx-4 -mt-4 mb-3 overflow-hidden rounded-t-2xl bg-slate-100" style={{ aspectRatio: "16/9" }}>
                    <img
                      src={data.image}
                      alt={data.name}
                      className="h-full w-full object-cover"
                    />
                    {data.rating >= 4.7 && (
                      <span className="absolute right-2 top-2 rounded-full bg-amber-400/90 px-2.5 py-1 text-[10px] font-bold text-amber-900 shadow-lg backdrop-blur-sm">
                        Top Rated
                      </span>
                    )}
                  </div>
                  <h3 className="text-[16px] font-bold text-slate-900">{data.name}</h3>
                  <Rating value={data.rating} className="mt-1" />
                  <p className="mt-2 flex-1 text-[13px] leading-relaxed text-slate-500">{data.description}</p>
                  {badge && (
                    <span
                      className={`mt-3 block rounded-xl border border-dashed py-2 text-center text-[13px] font-extrabold ${badge.className}`}
                    >
                      {badge.badge}
                    </span>
                  )}
                  <button
                    onClick={() => navigate("product", id)}
                    className="btn-ripple gradient-bg group mt-2 flex w-full items-center justify-center gap-1.5 rounded-xl py-2.5 text-[13px] font-bold text-white shadow-md shadow-indigo-500/25 transition-shadow hover:shadow-indigo-500/45"
                  >
                    View Product
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
