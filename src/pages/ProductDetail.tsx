import {
  ArrowRight,
  Bookmark,
  GitCompareArrows,
  Star,
  Shield,
  Truck,
  RotateCcw,
  Package,
  Award,
  Cpu,
  Monitor,
  Battery,
  Fingerprint,
  Wifi,
  Usb,
  Camera,
  Pen,
  Music,
  Mic,
  Palette,
  Compass,
  Heart,
  Siren,
  Leaf,
  Footprints,
  Gamepad,
  Shirt,
  Tv,
  Headphones,
  Watch,
  Smartphone,
  Laptop,
  ShoppingBag,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { navigate } from "../router";
import { FAQAccordion, PageHeader } from "../components/shared";
import { LogoBadge, Rating, Reveal } from "../components/ui";
import { PRODUCTS_DATA } from "../data/products-data";
import { getBrand } from "../data/brand";

const FEATURE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Cpu, Monitor, Battery, Fingerprint, Wifi, Usb, Camera, Pen, Music, Mic, Palette,
  Compass, Heart, Siren, Leaf, Footprints, Gamepad, Shirt, Tv,
  Headphones, Watch, Smartphone, Laptop, ShoppingBag, Star, Shield, Truck,
  RotateCcw, Package, Award,
};

const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "features", label: "Features" },
  { id: "pricing", label: "Pricing" },
  { id: "reviews", label: "Reviews" },
  { id: "alternatives", label: "Alternatives" },
  { id: "faq", label: "FAQ" },
];

function ImageViewer({ src, onClose }: { src: string; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", handler); document.body.style.overflow = ""; };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" onClick={onClose}>
      <button onClick={onClose} className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur transition-colors hover:bg-white/40">
        <X className="h-6 w-6" />
      </button>
      <img src={src} alt="" className="max-h-[90vh] max-w-full rounded-2xl object-contain shadow-2xl" onClick={(e) => e.stopPropagation()} />
    </div>
  );
}

export default function ProductDetail({ id }: { id?: string }) {
  const [activeSection, setActiveSection] = useState("overview");
  const [saved, setSaved] = useState(false);
  const [viewerSrc, setViewerSrc] = useState<string | null>(null);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const product = id ? PRODUCTS_DATA[id] : undefined;
  if (!product) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 p-8 text-center">
        <p className="text-[20px] font-bold text-[#111827]">Product not found</p>
        <button onClick={() => navigate("home")} className="rounded-xl bg-indigo-600 px-6 py-3 text-sm font-bold text-white">
          Back to Home
        </button>
      </div>
    );
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        }
      },
      { rootMargin: "-120px 0px -60% 0px", threshold: 0 }
    );
    for (const ref of Object.values(sectionRefs.current)) {
      if (ref) observer.observe(ref);
    }
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="bg-[#F8FAFC] pb-8">
      <PageHeader
        crumbs={[
          { label: "Home", route: "home" },
          { label: "Products", route: "category" },
          { label: product.name },
        ]}
      />

      <div className="mx-auto max-w-[1280px] px-6 pt-6 sm:px-8">
        {/* ─────── HERO ─────── */}
        <Reveal>
          <div className="rounded-[20px] border border-[#EEF2F7] bg-white p-6 shadow-[0_8px_24px_rgba(0,0,0,0.05)] sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
              {/* Left — Product Info */}
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                <LogoBadge brand={getBrand(product.brandKey)} size={90} className="rounded-[20px]" />
                <div className="flex-1">
                  <h1 className="text-[34px] font-bold tracking-tight text-[#111827] sm:text-[40px]">
                    {product.name}
                  </h1>
                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <Rating value={product.rating} size={16} />
                    <span className="text-[15px] font-bold text-[#111827]">{product.rating.toFixed(1)}</span>
                    <span className="text-[14px] text-[#6B7280]">({product.reviewCount})</span>
                  </div>
                  <p className="mt-3 max-w-[600px] text-[16px] leading-relaxed text-[#6B7280]">
                    {product.description}
                  </p>
                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    <button className="flex h-[52px] w-[220px] items-center justify-center gap-2 rounded-xl bg-indigo-600 text-[15px] font-bold text-white shadow-lg shadow-indigo-500/30 transition-all hover:bg-indigo-700 hover:shadow-xl">
                      Buy Now
                      <ArrowRight className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => navigate("compare")}
                      className="flex h-[52px] items-center gap-2 rounded-xl border-2 border-[#E5E7EB] bg-white px-6 text-[14px] font-bold text-[#111827] transition-all hover:border-indigo-300 hover:text-indigo-600"
                    >
                      <GitCompareArrows className="h-4 w-4" /> Compare
                    </button>
                    <button
                      onClick={() => setSaved(!saved)}
                      className={`flex h-[52px] w-[52px] items-center justify-center rounded-xl border-2 transition-all ${
                        saved
                          ? "border-indigo-300 bg-indigo-50 text-indigo-600"
                          : "border-[#E5E7EB] bg-white text-[#6B7280] hover:border-indigo-300 hover:text-indigo-600"
                      }`}
                      aria-label="Bookmark"
                    >
                      <Bookmark className={`h-5 w-5 ${saved ? "fill-indigo-500" : ""}`} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Right — Quick Info Cards */}
              <div className="grid grid-cols-2 gap-3">
                {product.meta.map((m) => (
                  <div key={m.label} className="flex flex-col items-center justify-center rounded-xl border border-[#EEF2F7] bg-white p-4 text-center shadow-[0_8px_24px_rgba(0,0,0,0.05)]">
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-[#6B7280]">{m.label}</p>
                    <p className="mt-1 text-[14px] font-bold text-[#111827]">{m.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* ─────── STICKY TABS ─────── */}
        <div className="sticky top-16 z-30 -mx-6 mt-10 border-b border-[#E5E7EB] bg-[#F8FAFC] px-6 sm:mx-0 sm:px-0">
          <nav className="flex gap-1 overflow-x-auto scrollbar-none">
            {SECTIONS.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={`relative shrink-0 px-5 py-4 text-[14px] font-semibold transition-colors ${
                  activeSection === s.id
                    ? "text-indigo-600"
                    : "text-[#6B7280] hover:text-[#111827]"
                }`}
              >
                {s.label}
                {activeSection === s.id && (
                  <span className="absolute inset-x-3 -bottom-px h-[3px] rounded-full bg-indigo-600" />
                )}
              </button>
            ))}
          </nav>
        </div>

        {/* ─────── OVERVIEW ─────── */}
        <section id="overview" ref={(el) => { sectionRefs.current.overview = el; }} className="scroll-mt-28">
          <Reveal>
            <div className="mt-12 grid items-start gap-8 lg:grid-cols-[55%_45%]">
              <div>
                <h2 className="text-[24px] font-bold text-[#111827]">Overview</h2>
                {product.overview?.length ? (
                  product.overview.map((p, i) => (
                    <p key={i} className="mt-4 text-[15px] leading-relaxed text-[#6B7280]">{p}</p>
                  ))
                ) : (
                  <>
                    <p className="mt-4 text-[15px] leading-relaxed text-[#6B7280]">
                      {product.name} delivers exceptional quality and performance.
                    </p>
                    <p className="mt-4 text-[15px] leading-relaxed text-[#6B7280]">
                      Explore the features, pricing, and reviews to see why {product.name} is trusted by thousands of users worldwide.
                    </p>
                  </>
                )}
              </div>
              <div className="space-y-3">
                <img
                  src={product.image}
                  alt={product.name}
                  onClick={() => setViewerSrc(product.image)}
                  className="w-full cursor-pointer rounded-[20px] border border-[#EEF2F7] object-cover shadow-[0_8px_24px_rgba(0,0,0,0.05)] transition-all hover:opacity-95"
                  style={{ aspectRatio: "16/10" }}
                />
                {product.gallery && product.gallery.length > 0 && (
                  <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none">
                    {product.gallery.map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt=""
                        onClick={() => setViewerSrc(src)}
                        className="h-20 w-20 shrink-0 cursor-pointer rounded-xl border border-[#EEF2F7] object-cover shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-all hover:border-indigo-300 hover:shadow-md"
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        </section>

        {/* ─────── FEATURES ─────── */}
        <section id="features" ref={(el) => { sectionRefs.current.features = el; }} className="scroll-mt-28">
          <Reveal>
            <div className="mt-14">
              <h2 className="text-[24px] font-bold text-[#111827]">Key Features</h2>
              <div className="mt-6 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
                {product.features.map((f) => {
                  const Icon = FEATURE_ICONS[f.iconName] || Star;
                  return (
                    <div
                      key={f.name}
                      className="rounded-[16px] border border-[#EEF2F7] bg-white p-5 shadow-[0_8px_24px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                      style={{ minHeight: 90 }}
                    >
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
                        <Icon className="h-5 w-5" />
                      </span>
                      <p className="mt-3 text-[15px] font-bold text-[#111827]">{f.name}</p>
                      <p className="mt-1 text-[13px] text-[#6B7280]">{f.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </section>

        {/* ─────── PRICING / VARIANTS ─────── */}
        <section id="pricing" ref={(el) => { sectionRefs.current.pricing = el; }} className="scroll-mt-28">
          <Reveal>
            <div className="mt-14">
              <h2 className="text-[24px] font-bold text-[#111827]">Models &amp; Pricing</h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {product.variants.map((v) => (
                  <div
                    key={v.name}
                    className={`relative rounded-[20px] border bg-white p-6 shadow-[0_8px_24px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                      v.popular ? "border-indigo-500 ring-2 ring-indigo-500" : "border-[#EEF2F7]"
                    }`}
                  >
                    {v.popular && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-4 py-1 text-[11px] font-bold uppercase tracking-wide text-white shadow-lg">
                        Popular
                      </span>
                    )}
                    <p className="text-[16px] font-bold text-[#111827]">{v.name}</p>
                    <p className="mt-3 text-[28px] font-extrabold text-[#111827]">
                      {v.price}
                    </p>
                    <p className="mt-3 text-[14px] leading-relaxed text-[#6B7280]">{v.desc}</p>
                    <button
                      className={`mt-5 w-full rounded-xl py-3 text-[14px] font-bold transition-all ${
                        v.popular
                          ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30 hover:bg-indigo-700"
                          : "border-2 border-[#E5E7EB] bg-white text-[#111827] hover:border-indigo-300 hover:text-indigo-600"
                      }`}
                    >
                      {v.cta}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* ─────── REVIEWS ─────── */}
        <section id="reviews" ref={(el) => { sectionRefs.current.reviews = el; }} className="scroll-mt-28">
          <Reveal>
            <div className="mt-14">
              <h2 className="text-[24px] font-bold text-[#111827]">User Reviews</h2>
              <div className="mt-6 space-y-5">
                {product.reviews.map((rv) => (
                  <div key={rv.n} className="rounded-[20px] border border-[#EEF2F7] bg-white p-6 shadow-[0_8px_24px_rgba(0,0,0,0.05)]">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <p className="text-[16px] font-bold text-[#111827]">{rv.n}</p>
                        <p className="text-[13px] text-[#6B7280]">{rv.role}</p>
                      </div>
                      <Rating value={rv.r} size={14} />
                    </div>
                    <p className="mt-3 text-[14px] leading-relaxed text-[#6B7280]">{rv.t}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* ─────── ALTERNATIVES ─────── */}
        <section id="alternatives" ref={(el) => { sectionRefs.current.alternatives = el; }} className="scroll-mt-28">
          <Reveal>
            <div className="mt-14">
              <h2 className="text-[24px] font-bold text-[#111827]">Alternatives</h2>
              <div className="mt-6 grid grid-cols-2 gap-5 md:grid-cols-4">
                {product.alternatives.map((a) => (
                  <div
                    key={a.name}
                    className="rounded-[20px] border border-[#EEF2F7] bg-white p-6 shadow-[0_8px_24px_rgba(0,0,0,0.05)] text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <LogoBadge brand={getBrand(a.brandKey)} size={52} />
                    <p className="mt-3 text-[15px] font-bold text-[#111827]">{a.name}</p>
                    <Rating value={a.rating} size={12} className="mt-1.5 justify-center" />
                    <button
                      onClick={() => navigate("product", a.brandKey)}
                      className="mt-4 w-full rounded-xl border-2 border-[#E5E7EB] bg-white py-2.5 text-[13px] font-bold text-[#111827] transition-all hover:border-indigo-300 hover:text-indigo-600"
                    >
                      View Product
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* ─────── FAQ ─────── */}
        <section id="faq" ref={(el) => { sectionRefs.current.faq = el; }} className="scroll-mt-28">
          <Reveal>
            <div className="mt-14">
              <h2 className="text-[24px] font-bold text-[#111827]">Frequently Asked Questions</h2>
              <div className="mt-6">
                <FAQAccordion items={product.faqs} />
              </div>
            </div>
          </Reveal>
        </section>
      </div>

      {viewerSrc && <ImageViewer src={viewerSrc} onClose={() => setViewerSrc(null)} />}
    </div>
  );
}
