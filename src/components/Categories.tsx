import {
  ArrowRight,
  BrainCircuit,
  Megaphone,
  Monitor,
  PenLine,
  Mail,
  Search,
  Server,
  ShoppingCart,
  ThumbsUp,
  Users,
} from "lucide-react";
import { Reveal, SectionHeading } from "./ui";
import { navigate } from "../router";

const CATEGORIES = [
  { icon: Monitor, id: "digital-marketing", title: "Digital Marketing", count: "200+ Offers", bg: "bg-blue-500", image: "/images/digital.png" },
  { icon: Users, id: "affiliate-marketing", title: "Affiliate Marketing", count: "150+ Programs", bg: "bg-violet-500", image: "/images/affiliate.png" },
  { icon: Megaphone, id: "advertising", title: "Advertising", count: "120+ Campaigns", bg: "bg-orange-500", image: "/images/business-communication-icon.png" },
  { icon: Search, id: "seo-tools", title: "SEO Tools", count: "180+ Tools", bg: "bg-indigo-600", image: "/images/chart-arrow-up-icon.png" },
  { icon: Mail, id: "email-marketing", title: "Email Marketing", count: "90+ Tools", bg: "bg-pink-500", image: "/images/email.png" },
  { icon: BrainCircuit, id: "ai-marketing", title: "AI Marketing", count: "100+ Tools", bg: "bg-slate-900", image: "/images/aimarketing.png" },
  { icon: Server, id: "web-hosting", title: "Web Hosting", count: "80+ Offers", bg: "bg-blue-600", image: "/images/webhosting.png" },
  { icon: ShoppingCart, id: "ecommerce", title: "Ecommerce", count: "70+ Platforms", bg: "bg-amber-500", image: "/images/ecommerce.png" },
  { icon: ThumbsUp, id: "social-media-tools", title: "Social Media Tools", count: "60+ Tools", bg: "bg-sky-500", image: "/images/socials.png" },
  { icon: PenLine, id: "content-marketing", title: "Content Marketing", count: "50+ Tools", bg: "bg-emerald-500", image: "/images/content.png" },
];

export default function Categories() {
  return (
    <section className="mx-auto max-w-[1440px] px-4 py-12 sm:px-8 lg:py-16">
      <SectionHeading title="Explore Categories" linkLabel="View All Categories" />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
        {CATEGORIES.map((c, i) => (
          <Reveal key={c.title} delay={(i % 5) * 0.07}>
            <button onClick={() => navigate("category", c.id)} className="card card-hover group block p-5 w-full text-left">
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-2xl ${c.image ? "bg-white border border-slate-100 p-1.5" : c.bg} text-white shadow-lg transition-transform duration-300 group-hover:scale-110 overflow-hidden`}
              >
                {c.image ? (
                  <img src={c.image} alt={c.title} className="h-full w-full object-contain" />
                ) : (
                  <c.icon className="h-6 w-6" />
                )}
              </span>
              <h3 className="mt-3 text-[15px] font-bold text-slate-900">{c.title}</h3>
              <p className="mt-1 text-[13px] text-slate-400">{c.count}</p>
              <span className="mt-2 inline-flex items-center gap-1 text-[13px] font-bold text-indigo-600">
                Explore
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
