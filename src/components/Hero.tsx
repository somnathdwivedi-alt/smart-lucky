import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Star } from "lucide-react";
import { useState } from "react";

const PARTNERS = ["Semrush", "Ahrefs", "Canva", "ChatGPT", "Mailchimp", "HubSpot"];

export default function Hero() {
  const [slide, setSlide] = useState(0);
  const TOTAL = 3;

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-4 pt-6 sm:px-8">
        <div className="relative overflow-hidden rounded-[32px] shadow-lg" style={{ minHeight: 580 }}>
          {/* Full background image */}
          <img
            src="/images/airoplan.jpg"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/60 to-transparent" />

          <div className="relative flex min-h-[580px] flex-col lg:flex-row">
            {/* ── LEFT CONTENT ── */}
            <div className="flex flex-col justify-center px-8 pb-8 pt-10 sm:px-12 lg:w-[45%] lg:pb-12 lg:pt-12">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
                }}
                className="space-y-5"
              >
                <motion.span
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
                  }}
                  className="inline-block text-[12px] font-semibold tracking-[0.15em] text-slate-500"
                >
                  TOP DIGITAL MARKETING DEALS
                </motion.span>

                <motion.h1
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
                  }}
                  className="text-[42px] font-extrabold leading-[1.08] tracking-tight text-slate-900 sm:text-[54px] xl:text-[66px]"
                >
                  Find The Best
                  <br />
                  Marketing Tools
                  <br />
                  & Exclusive Deals!
                </motion.h1>

                <motion.p
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
                  }}
                  className="max-w-sm text-[17px] leading-relaxed text-slate-500"
                >
                  Discover trusted SEO, advertising, affiliate marketing and AI tools with verified reviews and exclusive offers.
                </motion.p>

                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20, scale: 0.95 },
                    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
                  }}
                >
                  <button className="btn-ripple inline-flex h-[52px] items-center gap-2.5 rounded-full bg-indigo-600 px-8 text-[16px] font-bold text-white shadow-xl shadow-indigo-500/30 transition-all hover:bg-indigo-700 hover:shadow-indigo-500/50">
                    Explore Deals <ArrowRight className="h-4 w-4" />
                  </button>
                </motion.div>

                {/* Slider Controls */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { duration: 0.4, delay: 0.1 } },
                  }}
                  className="flex items-center gap-3 pt-2"
                >
                  {Array.from({ length: TOTAL }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setSlide(i)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        i === slide ? "w-8 bg-indigo-600" : "w-2.5 border border-slate-300 bg-white"
                      }`}
                    />
                  ))}
                  <span className="ml-4 text-[13px] font-semibold text-slate-400">
                    {String(slide + 1).padStart(2, "0")}
                  </span>
                  <button
                    onClick={() => setSlide((slide + 1) % TOTAL)}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition-all hover:border-indigo-300 hover:text-indigo-600"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </motion.div>
              </motion.div>
            </div>

            {/* ── RIGHT SIDE ── */}
            <div className="relative flex-1 lg:block">
              {/* Floating Info Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute bottom-8 right-8 z-10 w-[200px] rounded-[20px] bg-white/95 p-4 shadow-xl shadow-indigo-900/10 backdrop-blur-md"
                whileHover={{ y: -4, boxShadow: "0 24px 48px rgba(79,70,229,0.15)" }}
              >
                <p className="flex items-center gap-1 text-[11px] font-semibold text-indigo-600">
                  Know More <ChevronRight className="h-3 w-3" />
                </p>
                <p className="mt-2 text-[13px] font-bold text-slate-900">Semrush</p>
                <div className="mt-1 flex items-center gap-1 text-[11px] text-amber-500">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className={`h-3 w-3 ${i <= 4 ? "fill-current" : "fill-none stroke-current"}`} />
                  ))}
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {["#FF642D", "#1877F2", "#00C4CC"].map((c, i) => (
                      <span
                        key={i}
                        className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white text-[9px] font-extrabold text-white"
                        style={{ backgroundColor: c }}
                      >
                        {["S", "M", "C"][i]}
                      </span>
                    ))}
                  </div>
                  <span className="text-[10px] font-semibold text-slate-400">10M+ users</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* ── BRAND PARTNERS ── */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.5 } } }}
          className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 pb-6"
        >
          {PARTNERS.map((name) => (
            <motion.span
              key={name}
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
              }}
              className="text-[14px] font-bold tracking-tight text-slate-300 transition-colors duration-300 hover:text-slate-600"
            >
              {name}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
