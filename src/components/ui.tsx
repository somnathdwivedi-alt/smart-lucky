import { motion, useInView } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { useRef, type ReactNode } from "react";
import { cn } from "../utils/cn";
import { navigate, type Route } from "../router";

/* ---------- Scroll reveal (fade + up) ---------- */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Fade in (no movement) ---------- */
export function FadeIn({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Scale reveal ---------- */
export function ScaleReveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Slide from left ---------- */
export function SlideLeft({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Slide from right ---------- */
export function SlideRight({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Stagger container ---------- */
export function StaggerContainer({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Stagger item ---------- */
export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
      }}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Animated counter ---------- */
export function Counter({
  to,
  suffix = "",
  className,
}: {
  to: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 12 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <motion.span
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
      >
        {to.toLocaleString()}{suffix}
      </motion.span>
    </motion.span>
  );
}

/* ---------- Shimmer loading placeholder ---------- */
export function Shimmer({ className, w, h, rounded = "xl" }: { className?: string; w?: string; h?: string; rounded?: string }) {
  return (
    <motion.div
      className={cn(
        `rounded-${rounded} bg-slate-200`,
        w ?? "w-full",
        h ?? "h-4",
        className
      )}
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

/* ---------- Hover scale wrapper ---------- */
export function HoverScale({
  children,
  scale = 1.03,
  className,
}: {
  children: ReactNode;
  scale?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      whileHover={{ scale }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Section heading ---------- */
export function SectionHeading({
  title,
  linkLabel,
  linkRoute,
  center,
  subtitle,
}: {
  title: string;
  linkLabel?: string;
  linkRoute?: Route;
  center?: boolean;
  subtitle?: string;
}) {
  return (
    <Reveal
      className={cn(
        "mb-8 flex items-end justify-between gap-4",
        center && "flex-col items-center text-center"
      )}
    >
      <div>
        <h2 className="text-[26px] font-extrabold tracking-tight text-slate-900 sm:text-[34px]">
          {title}
        </h2>
        {subtitle && <p className="mt-2 text-slate-500">{subtitle}</p>}
      </div>
      {linkLabel && (
        <button
          onClick={() => linkRoute ? navigate(linkRoute) : window.history.back()}
          className="group hidden shrink-0 items-center gap-1.5 text-sm font-semibold text-indigo-600 transition-colors hover:text-violet-600 sm:inline-flex"
        >
          {linkLabel}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
      )}
    </Reveal>
  );
}

/* ---------- Star rating ---------- */
export function Rating({
  value,
  size = 13,
  className,
}: {
  value: number;
  size?: number;
  className?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-1.5", className)}>
      <span className="inline-flex gap-[2px]">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star
            key={i}
            style={{ width: size, height: size }}
            className={
              i <= Math.round(value)
                ? "fill-amber-400 text-amber-400"
                : "fill-slate-200 text-slate-200"
            }
          />
        ))}
      </span>
      <span className="text-xs font-semibold text-slate-500">{value.toFixed(1)}</span>
    </span>
  );
}

/* ---------- Brand logo badge ---------- */
export type Brand = {
  bg: string;
  fg?: string;
  label: string; // letter/glyph shown
  gradient?: boolean;
  image?: string;
};

export function LogoBadge({
  brand,
  size = 44,
  className,
}: {
  brand: Brand;
  size?: number;
  className?: string;
}) {
  if (brand.image) {
    return (
      <span
        className={cn(
          "inline-flex shrink-0 items-center justify-center rounded-2xl overflow-hidden shadow-sm bg-white border border-slate-100 p-1.5",
          className
        )}
        style={{
          width: size,
          height: size,
        }}
      >
        <img
          src={brand.image}
          alt={brand.label}
          className="h-full w-full object-contain"
        />
      </span>
    );
  }
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-2xl font-extrabold shadow-sm",
        className
      )}
      style={{
        width: size,
        height: size,
        background: brand.bg,
        color: brand.fg ?? "#fff",
        fontSize: size * 0.42,
      }}
    >
      {brand.label}
    </span>
  );
}

/* ---------- Brand definitions ---------- */
export const BRANDS: Record<string, Brand> = {
  googleads: { bg: "linear-gradient(135deg,#fff,#f1f5f9)", fg: "#4285F4", label: "Google Ads", image: "/images/icons8-google-ads-48.png" },
  meta: { bg: "linear-gradient(135deg,#0668E1,#0080FB)", label: "Meta", image: "/images/icons8-meta-48.png" },
  tiktok: { bg: "#0f0f0f", label: "TikTok", image: "https://cdn.simpleicons.org/tiktok" },
  linkedin: { bg: "#0A66C2", label: "in", image: "https://cdn.simpleicons.org/linkedin" },
  microsoft: { bg: "linear-gradient(135deg,#F25022,#7FBA00)", label: "MS", image: "https://cdn.simpleicons.org/microsoft" },
  pinterest: { bg: "#E60023", label: "Pinterest", image: "/images/icons8-pinterest-48.png" },
  snapchat: { bg: "#FFFC00", fg: "#0f172a", label: "Snap", image: "/images/snapchat-square-color-icon.png" },
  youtube: { bg: "#FF0000", label: "▶", image: "https://cdn.simpleicons.org/youtube" },
  facebook: { bg: "#1877F2", label: "Facebook", image: "/images/icons8-facebook-48.png" },
  canva: { bg: "linear-gradient(135deg,#00C4CC,#7D2AE8)", label: "Canva", image: "/images/canva-seeklogo.png" },
  semrush: { bg: "linear-gradient(135deg,#FF642D,#FF8A47)", label: "Semrush", image: "/images/semrush.png" },
  clickfunnels: { bg: "linear-gradient(135deg,#1E40AF,#3B82F6)", label: "CF", image: "/images/click-funnels-seeklogo.png" },
  hostinger: { bg: "linear-gradient(135deg,#673DE6,#8C6CF0)", label: "Hostinger", image: "/images/hostinger-icon.png" },
  envato: { bg: "linear-gradient(135deg,#81B441,#5A9E2F)", label: "Envato", image: "/images/envato.png" },
  chatgpt: { bg: "#0FA47F", label: "ChatGPT", image: "/images/chatgpt-icon.png" },
  ahrefs: { bg: "#054ADA", label: "ahrefs", image: "https://cdn.simpleicons.org/ahrefs" },
  mailchimp: { bg: "#FFE01B", fg: "#241C15", label: "Mailchimp", image: "/images/mailchimp-icon.png" },
  hubspot: { bg: "#FF7A59", label: "HubSpot", image: "/images/hubspot-icon.png" },
  grammarly: { bg: "#15C39A", label: "Grammarly", image: "/images/grammarly-icon.png" },
  buffer: { bg: "#231F20", label: "Buffer", image: "/images/buffer.png" },
  notion: { bg: "#0f172a", label: "Notion", image: "/images/notion-icon.png" },
  amazon: { bg: "#232F3E", fg: "#FF9900", label: "Amazon", image: "/images/icons8-amazon-48.png" },
  clickbank: { bg: "linear-gradient(135deg,#E4353F,#B91C1C)", label: "CB", image: "/images/clickbank.png" },
  impact: { bg: "linear-gradient(135deg,#E11D48,#F43F5E)", label: "◉" },
  shareasale: { bg: "linear-gradient(135deg,#F59E0B,#FBBF24)", label: "★" },
  cj: { bg: "linear-gradient(135deg,#0F766E,#14B8A6)", label: "CJ" },

  /* ──── Product brands ──── */
  apple: { bg: "linear-gradient(135deg,#555,#000)", label: "Apple", image: "/images/apple.png" },
  samsung: { bg: "linear-gradient(135deg,#1428A0,#4477DD)", label: "Samsung", image: "/images/samsung.png" },
  sony: { bg: "linear-gradient(135deg,#000,#444)", label: "Sony", image: "/images/sony.png" },
  dell: { bg: "linear-gradient(135deg,#007DB8,#009EE0)", label: "Dell", image: "/images/dell.png" },
  hp: { bg: "linear-gradient(135deg,#0096D6,#00AEEF)", label: "HP", image: "https://cdn.simpleicons.org/hp" },
  lenovo: { bg: "linear-gradient(135deg,#E2231A,#C8102E)", label: "Lenovo", image: "/images/lenovo.png" },
  asus: { bg: "linear-gradient(135deg,#000,#333)", label: "ASUS", image: "/images/asus.png" },
  acer: { bg: "linear-gradient(135deg,#83B81A,#A3D820)", label: "ACER", image: "https://cdn.simpleicons.org/acer" },
  google: { bg: "linear-gradient(135deg,#4285F4,#34A853)", label: "Google", image: "https://cdn.simpleicons.org/google" },
  oneplus: { bg: "linear-gradient(135deg,#EB0029,#C30023)", label: "OnePlus", image: "/images/oneplus.png" },
  xiaomi: { bg: "linear-gradient(135deg,#FF6700,#FF8C38)", label: "Xiaomi", image: "/images/xiaomi.png" },
  nike: { bg: "linear-gradient(135deg,#000,#222)", label: "Nike", image: "/images/nike.png" },
  adidas: { bg: "linear-gradient(135deg,#000,#333)", label: "adidas", image: "/images/adidas.png" },
  puma: { bg: "linear-gradient(135deg,#000,#444)", label: "PUMA", image: "/images/puma.png" },
  zara: { bg: "linear-gradient(135deg,#0F0F0F,#333)", label: "ZARA", image: "/images/zara.png" },
  hnm: { bg: "linear-gradient(135deg,#E50010,#C1000D)", label: "H&M", image: "/images/hm.png" },
  gucci: { bg: "linear-gradient(135deg,#2E8B57,#3CB371)", label: "G", image: "https://cdn.simpleicons.org/gucci" },
  louisvuitton: { bg: "linear-gradient(135deg,#B8860B,#DAA520)", label: "LV", image: "https://cdn.simpleicons.org/louisvuitton" },
  rolex: { bg: "linear-gradient(135deg,#006039,#008B4A)", label: "◈", image: "https://cdn.simpleicons.org/rolex" },
  bosch: { bg: "linear-gradient(135deg,#E60000,#CC0000)", label: "B", image: "https://cdn.simpleicons.org/bosch" },
  philips: { bg: "linear-gradient(135deg,#0E5FD0,#1A7AE0)", label: "Philips", image: "/images/philips.png" },
  dyson: { bg: "linear-gradient(135deg,#002A5C,#004A8C)", label: "Dyson", image: "/images/dyson.png" },
  lg: { bg: "linear-gradient(135deg,#A50034,#C40048)", label: "LG", image: "https://cdn.simpleicons.org/lg" },
  whirlpool: { bg: "linear-gradient(135deg,#003D7A,#005AA0)", label: "W", image: "https://cdn.simpleicons.org/whirlpool" },
  kitchenaid: { bg: "linear-gradient(135deg,#C41E3A,#A61830)", label: "KitchenAid", image: "/images/kitchenaid.png" },
  anker: { bg: "linear-gradient(135deg,#0070C0,#005A9C)", label: "Anker", image: "/images/anker.png" },
  boat: { bg: "linear-gradient(135deg,#1a1a1a,#333)", label: "boAt", image: "/images/boat.png" },
  bose: { bg: "linear-gradient(135deg,#1a1a1a,#333)", label: "Bose", image: "/images/bose.png" },
  jbl: { bg: "linear-gradient(135deg,#ff6900,#e55a00)", label: "JBL", image: "/images/jbl.png" },
  logitech: { bg: "linear-gradient(135deg,#00B3FF,#0082BA)", label: "Logi", image: "/images/logitech.png" },
  razer: { bg: "linear-gradient(135deg,#00D454,#009940)", label: "RAZER", image: "/images/razer.png" },
  beats: { bg: "linear-gradient(135deg,#e30b25,#b5001e)", label: "beats", image: "https://cdn.simpleicons.org/beatsbydre" },
  intel: { bg: "linear-gradient(135deg,#0071C5,#005A9C)", label: "Intel", image: "/images/intel.png" },
  nikon: { bg: "linear-gradient(135deg,#FFD700,#FFC300)", label: "Nikon", image: "/images/nikon.png" },
  canon: { bg: "linear-gradient(135deg,#CC0000,#AA0000)", label: "Canon", image: "/images/canon.png" },
  garmin: { bg: "linear-gradient(135deg,#007DC5,#005F9A)", label: "Garmin", image: "/images/garmin.png" },
  panasonic: { bg: "linear-gradient(135deg,#003087,#00256A)", label: "Pana", image: "/images/panasonic.png" },
  toshiba: { bg: "linear-gradient(135deg,#e60012,#c00010)", label: "Toshiba", image: "/images/toshiba.png" },
};

/* ---------- Google Ads real logo ---------- */
export function GoogleAdsLogo({ size = 44 }: { size?: number }) {
  return (
    <span
      className="inline-flex shrink-0 items-center justify-center rounded-2xl border border-slate-100 bg-white shadow-sm overflow-hidden p-1.5"
      style={{ width: size, height: size }}
    >
      <img
        src="/images/icons8-google-ads-48.png"
        alt="Google Ads"
        className="h-full w-full object-contain"
      />
    </span>
  );
}

/* ---------- Meta (Facebook) real logo ---------- */
export function MetaLogo({ size = 44 }: { size?: number }) {
  return (
    <span
      className="inline-flex shrink-0 items-center justify-center rounded-2xl border border-slate-100 bg-white shadow-sm overflow-hidden p-1.5"
      style={{ width: size, height: size }}
    >
      <img
        src="/images/icons8-meta-48.png"
        alt="Meta"
        className="h-full w-full object-contain"
      />
    </span>
  );
}

/* ---------- TikTok real logo ---------- */
export function TikTokLogo({ size = 44 }: { size?: number }) {
  return (
    <span
      className="inline-flex shrink-0 items-center justify-center rounded-2xl bg-[#0f0f0f] shadow-sm"
      style={{ width: size, height: size }}
    >
      <svg width={size * 0.5} height={size * 0.5} viewBox="0 0 48 48">
        <path fill="#25F4EE" d="M34.1 4.6H24v26.8c0 3.9-3.2 7-7.1 7s-7.1-3.1-7.1-7 3.2-7 7.1-7c.7 0 1.4.1 2 .3v-9.9c-.7-.1-1.3-.2-2-.2C8.6 14.6 2 21.2 2 29.4s6.6 14.8 14.9 14.8S31.7 37.6 31.7 29.4V16.8c3.1 2.2 6.9 3.5 11 3.5V10.4c-3.2 0-6.1-1.1-8.6-2.9v-2.9z" />
        <path fill="#fff" d="M34.1 4.6H24v26.8c0 3.9-3.2 7-7.1 7s-7.1-3.1-7.1-7 3.2-7 7.1-7c.7 0 1.4.1 2 .3v-9.9c-.7-.1-1.3-.2-2-.2C8.6 14.6 2 21.2 2 29.4s6.6 14.8 14.9 14.8S31.7 37.6 31.7 29.4V16.8c3.1 2.2 6.9 3.5 11 3.5V10.4c-3.2 0-6.1-1.1-8.6-2.9v-2.9z" opacity="0" />
      </svg>
    </span>
  );
}

/* ---------- LinkedIn real logo ---------- */
export function LinkedInLogo({ size = 44 }: { size?: number }) {
  return (
    <span
      className="inline-flex shrink-0 items-center justify-center rounded-2xl bg-[#0A66C2] shadow-sm"
      style={{ width: size, height: size }}
    >
      <svg width={size * 0.5} height={size * 0.5} viewBox="0 0 48 48">
        <path fill="#fff" d="M44 4H4v40h40V4zM16.5 35h-5V18h5v17zm-2.5-19.3c-1.6 0-2.9-1.3-2.9-2.9s1.3-2.9 2.9-2.9 2.9 1.3 2.9 2.9-1.3 2.9-2.9 2.9zM36 35h-5v-9.3c0-2.2-.8-3.7-2.8-3.7-1.5 0-2.4 1-2.8 2-.1.3-.2.8-.2 1.3V35h-5V18h5v2.3c.7-1 1.9-2.5 4.6-2.5 3.4 0 6 2.2 6 6.9V35z" />
      </svg>
    </span>
  );
}

/* ---------- Microsoft real logo ---------- */
export function MicrosoftLogo({ size = 44 }: { size?: number }) {
  return (
    <span
      className="inline-flex shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-slate-200"
      style={{ width: size, height: size }}
    >
      <svg width={size * 0.5} height={size * 0.5} viewBox="0 0 48 48">
        <rect x="6" y="6" width="16" height="16" fill="#F25022" rx="1.5" />
        <rect x="26" y="6" width="16" height="16" fill="#7FBA00" rx="1.5" />
        <rect x="6" y="26" width="16" height="16" fill="#00A4EF" rx="1.5" />
        <rect x="26" y="26" width="16" height="16" fill="#FFB900" rx="1.5" />
      </svg>
    </span>
  );
}

/* ---------- Pinterest real logo ---------- */
export function PinterestLogo({ size = 44 }: { size?: number }) {
  return (
    <span
      className="inline-flex shrink-0 items-center justify-center rounded-2xl border border-slate-100 bg-white shadow-sm overflow-hidden p-1.5"
      style={{ width: size, height: size }}
    >
      <img
        src="/images/icons8-pinterest-48.png"
        alt="Pinterest"
        className="h-full w-full object-contain"
      />
    </span>
  );
}

/* ---------- Snapchat real logo ---------- */
export function SnapchatLogo({ size = 44 }: { size?: number }) {
  return (
    <span
      className="inline-flex shrink-0 items-center justify-center rounded-2xl bg-[#FFFC00] shadow-sm"
      style={{ width: size, height: size }}
    >
      <svg width={size * 0.5} height={size * 0.5} viewBox="0 0 48 48">
        <path fill="#0f172a" d="M39.4 30.5c-.6-.5-2.3-1.4-3.3-1.8l-.3-.2c-.3-.2-.6-.5-.5-1 .1-.7.4-1.4.6-2.1.6-1.8 1.2-3.9 1.1-5.4-.2-3.2-2-5.9-4.6-7.3-1.1-.6-2.3-.9-3.6-1-2.5-.1-5.1.5-5.2.5-2.4-.5-4.8-.6-7.1-.1-2.4.5-4.4 1.9-5.7 4.1-1.7 2.7-1.8 6.1-.9 9.1.2.7.5 1.4.7 2.1.1.5.1.9-.3 1.2-.3.2-.6.4-.9.6-1.1.6-2.8 1.5-3.5 2-.2.2-.3.5-.2.8.2.7.8 1.2 1.7 1.5.5.2 1.1.3 1.7.5.7.2 1.5.5 1.9 1.2.4.7.4 1.7 1.2 2.6.9 1 2.8 1.4 5 1.4 1.5 0 3.1-.2 4.7-.2 1.6 0 3.2.2 4.7.2 2.2 0 4.1-.4 5-1.4.8-.9.8-1.9 1.2-2.6.4-.7 1.2-1 1.9-1.2.6-.2 1.2-.3 1.7-.5.9-.3 1.5-.8 1.7-1.5.1-.3 0-.6-.2-.8z" />
      </svg>
    </span>
  );
}

/* ---------- YouTube real logo ---------- */
export function YouTubeLogo({ size = 44 }: { size?: number }) {
  return (
    <span
      className="inline-flex shrink-0 items-center justify-center rounded-2xl bg-[#FF0000] shadow-sm"
      style={{ width: size, height: size }}
    >
      <svg width={size * 0.55} height={size * 0.55} viewBox="0 0 48 48">
        <path fill="#fff" d="M41.5 15.2c-.5-1.8-1.9-3.2-3.7-3.7C34.4 10.5 24 10.5 24 10.5s-10.4 0-13.8 1c-1.8.5-3.2 1.9-3.7 3.7C6 18.5 6 24 6 24s0 5.5 1 8.8c.5 1.8 1.9 3.2 3.7 3.7 3.4 1 13.8 1 13.8 1s10.4 0 13.8-1c1.8-.5 3.2-1.9 3.7-3.7 1-3.3 1-8.8 1-8.8s0-5.5-1-8.8zM20.5 29.5V18.5L31 24l-10.5 5.5z" />
      </svg>
    </span>
  );
}

/* ---------- Amazon Associates real logo ---------- */
export function AmazonLogo({ size = 44 }: { size?: number }) {
  return (
    <span
      className="inline-flex shrink-0 items-center justify-center rounded-2xl border border-slate-100 bg-white shadow-sm overflow-hidden p-1.5"
      style={{ width: size, height: size }}
    >
      <img
        src="/images/icons8-amazon-48.png"
        alt="Amazon"
        className="h-full w-full object-contain"
      />
    </span>
  );
}

/* ---------- ClickBank real logo ---------- */
export function ClickBankLogo({ size = 44 }: { size?: number }) {
  return (
    <span
      className="inline-flex shrink-0 items-center justify-center rounded-2xl bg-[#E4353F] shadow-sm"
      style={{ width: size, height: size }}
    >
      <svg width={size * 0.5} height={size * 0.5} viewBox="0 0 48 48">
        <path fill="#fff" d="M12 14h6.5l4.5 8.5L27.5 14H34l-8.5 13.5V34h-3V27.5L14 14zm17 0h3.5l4.5 20h-3.5L31 20.5l-2.5 13.5H25l4.5-20z" />
      </svg>
    </span>
  );
}

/* ---------- Impact real logo ---------- */
export function ImpactLogo({ size = 44 }: { size?: number }) {
  return (
    <span
      className="inline-flex shrink-0 items-center justify-center rounded-2xl border border-slate-100 bg-white shadow-sm overflow-hidden p-1.5"
      style={{ width: size, height: size }}
    >
      <img
        src="/images/impact-logo.png"
        alt="Impact"
        className="h-full w-full object-contain"
      />
    </span>
  );
}

/* ---------- ShareASale real logo ---------- */
export function ShareASaleLogo({ size = 44 }: { size?: number }) {
  return (
    <span
      className="inline-flex shrink-0 items-center justify-center rounded-2xl border border-slate-100 bg-white shadow-sm overflow-hidden p-1.5"
      style={{ width: size, height: size }}
    >
      <img
        src="/images/shareasale-logo.png"
        alt="ShareASale"
        className="h-full w-full object-contain"
      />
    </span>
  );
}

/* ---------- CJ Affiliate real logo ---------- */
export function CJLogo({ size = 44 }: { size?: number }) {
  return (
    <span
      className="inline-flex shrink-0 items-center justify-center rounded-2xl border border-slate-100 bg-white shadow-sm overflow-hidden p-1.5"
      style={{ width: size, height: size }}
    >
      <img
        src="/images/cj-logo.png"
        alt="CJ Affiliate"
        className="h-full w-full object-contain"
      />
    </span>
  );
}

/* ---------- Semrush real logo ---------- */
export function SemrushLogo({ size = 44 }: { size?: number }) {
  return (
    <span
      className="inline-flex shrink-0 items-center justify-center rounded-2xl border border-slate-100 bg-white shadow-sm overflow-hidden p-1.5"
      style={{ width: size, height: size }}
    >
      <img
        src="/images/semrush.png"
        alt="Semrush"
        className="h-full w-full object-contain"
      />
    </span>
  );
}

/* ---------- Canva real logo ---------- */
export function CanvaLogo({ size = 44 }: { size?: number }) {
  return (
    <span
      className="inline-flex shrink-0 items-center justify-center rounded-2xl border border-slate-100 bg-white shadow-sm overflow-hidden p-1.5"
      style={{ width: size, height: size }}
    >
      <img
        src="/images/canva-seeklogo.png"
        alt="Canva"
        className="h-full w-full object-contain"
      />
    </span>
  );
}

/* ---------- ClickFunnels real logo ---------- */
export function ClickFunnelsLogo({ size = 44 }: { size?: number }) {
  return (
    <span
      className="inline-flex shrink-0 items-center justify-center rounded-2xl border border-slate-100 bg-white shadow-sm overflow-hidden p-1.5"
      style={{ width: size, height: size }}
    >
      <img
        src="/images/click-funnels-seeklogo.png"
        alt="ClickFunnels"
        className="h-full w-full object-contain"
      />
    </span>
  );
}

/* ---------- Hostinger real logo ---------- */
export function HostingerLogo({ size = 44 }: { size?: number }) {
  return (
    <span
      className="inline-flex shrink-0 items-center justify-center rounded-2xl border border-slate-100 bg-white shadow-sm overflow-hidden p-1.5"
      style={{ width: size, height: size }}
    >
      <img src="/images/hostinger-icon.png" alt="Hostinger" className="h-full w-full object-contain" />
    </span>
  );
}

/* ---------- Envato real logo ---------- */
export function EnvatoLogo({ size = 44 }: { size?: number }) {
  return (
    <span
      className="inline-flex shrink-0 items-center justify-center rounded-2xl border border-slate-100 bg-white shadow-sm overflow-hidden p-1.5"
      style={{ width: size, height: size }}
    >
      <img src="/images/envato.png" alt="Envato" className="h-full w-full object-contain" />
    </span>
  );
}

/* ---------- ChatGPT real logo ---------- */
export function ChatGPTLogo({ size = 44 }: { size?: number }) {
  return (
    <span
      className="inline-flex shrink-0 items-center justify-center rounded-2xl border border-slate-100 bg-white shadow-sm overflow-hidden p-1.5"
      style={{ width: size, height: size }}
    >
      <img src="/images/chatgpt-icon.png" alt="ChatGPT" className="h-full w-full object-contain" />
    </span>
  );
}

/* ---------- Ahrefs real logo ---------- */
export function AhrefsLogo({ size = 44 }: { size?: number }) {
  return (
    <span
      className="inline-flex shrink-0 items-center justify-center rounded-2xl bg-[#054ADA] shadow-sm"
      style={{ width: size, height: size }}
    >
      <svg width={size * 0.48} height={size * 0.48} viewBox="0 0 48 48">
        <path fill="#fff" d="M15 10v28h6V26h6v12h6V10h-6v12h-6V10h-6z" />
      </svg>
    </span>
  );
}

/* ---------- Mailchimp real logo ---------- */
export function MailchimpLogo({ size = 44 }: { size?: number }) {
  return (
    <span
      className="inline-flex shrink-0 items-center justify-center rounded-2xl border border-slate-100 bg-white shadow-sm overflow-hidden p-1.5"
      style={{ width: size, height: size }}
    >
      <img src="/images/mailchimp-icon.png" alt="Mailchimp" className="h-full w-full object-contain" />
    </span>
  );
}

/* ---------- HubSpot real logo ---------- */
export function HubSpotLogo({ size = 44 }: { size?: number }) {
  return (
    <span
      className="inline-flex shrink-0 items-center justify-center rounded-2xl border border-slate-100 bg-white shadow-sm overflow-hidden p-1.5"
      style={{ width: size, height: size }}
    >
      <img src="/images/hubspot-icon.png" alt="HubSpot" className="h-full w-full object-contain" />
    </span>
  );
}

/* ---------- Grammarly real logo ---------- */
export function GrammarlyLogo({ size = 44 }: { size?: number }) {
  return (
    <span
      className="inline-flex shrink-0 items-center justify-center rounded-2xl border border-slate-100 bg-white shadow-sm overflow-hidden p-1.5"
      style={{ width: size, height: size }}
    >
      <img src="/images/grammarly-icon.png" alt="Grammarly" className="h-full w-full object-contain" />
    </span>
  );
}

/* ---------- Buffer real logo ---------- */
export function BufferLogo({ size = 44 }: { size?: number }) {
  return (
    <span
      className="inline-flex shrink-0 items-center justify-center rounded-2xl border border-slate-100 bg-white shadow-sm overflow-hidden p-1.5"
      style={{ width: size, height: size }}
    >
      <img src="/images/buffer.png" alt="Buffer" className="h-full w-full object-contain" />
    </span>
  );
}

/* ---------- Notion real logo ---------- */
export function NotionLogo({ size = 44 }: { size?: number }) {
  return (
    <span
      className="inline-flex shrink-0 items-center justify-center rounded-2xl border border-slate-100 bg-white shadow-sm overflow-hidden p-1.5"
      style={{ width: size, height: size }}
    >
      <img src="/images/notion-icon.png" alt="Notion" className="h-full w-full object-contain" />
    </span>
  );
}

/* ---------- ClickBank real logo (PNG) ---------- */
export function ClickBankLogoImg({ size = 44 }: { size?: number }) {
  return (
    <span
      className="inline-flex shrink-0 items-center justify-center rounded-2xl border border-slate-100 bg-white shadow-sm overflow-hidden p-1.5"
      style={{ width: size, height: size }}
    >
      <img src="/images/clickbank.png" alt="ClickBank" className="h-full w-full object-contain" />
    </span>
  );
}
