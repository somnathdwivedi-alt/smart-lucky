import { motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { useEffect, useRef, type ReactNode } from "react";
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

/* ---------- Mouse-follow glow (kinetic) ---------- */
export function MouseGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current) {
        ref.current.style.setProperty("--mx", `${e.clientX}px`);
        ref.current.style.setProperty("--my", `${e.clientY}px`);
      }
    };
    window.addEventListener("mousemove", handler, { passive: true });
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed inset-0 z-50 hidden lg:block"
      style={{
        background:
          "radial-gradient(700px at var(--mx, -1000px) var(--my, -1000px), rgba(109, 76, 255, 0.06), transparent 80%)",
      }}
    />
  );
}

/* ---------- 3D Tilt Card (kinetic) ---------- */
export function TiltCard({
  children,
  className,
  scale = 1.015,
}: {
  children: ReactNode;
  className?: string;
  scale?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    tiltX.set((x - 0.5) * 8);
    tiltY.set((y - 0.5) * -8);
    glowX.set(x * 100);
    glowY.set(y * 100);
  };

  const resetTilt = () => {
    tiltX.set(0);
    tiltY.set(0);
    glowX.set(50);
    glowY.set(50);
  };

  return (
    <motion.div
      ref={ref}
      className={cn("relative group/tilt", className)}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => { }}
      onMouseLeave={resetTilt}
      style={{ perspective: "1200px" }}
    >
      <motion.div
        style={{
          rotateX: tiltY,
          rotateY: tiltX,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        <motion.div
          className="absolute inset-0 pointer-events-none rounded-2xl opacity-0 transition-opacity duration-300 group-hover/tilt:opacity-100"
          style={{
            background: useTransform(
              [glowX, glowY],
              ([x, y]) =>
                `radial-gradient(circle at ${x}% ${y}%, rgba(109, 76, 255, 0.08), transparent 70%)`
            ),
          }}
        />
        <motion.div
          whileHover={{ scale }}
          transition={{ type: "spring", stiffness: 300, damping: 18 }}
        >
          {children}
        </motion.div>
      </motion.div>
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
  tiktok: { bg: "#0f0f0f", label: "TikTok", image: "/images/tiktok-logo.svg" },
  linkedin: { bg: "#0A66C2", label: "in", image: "/images/linkedin_img.jpg" },
  microsoft: { bg: "linear-gradient(135deg,#F25022,#7FBA00)", label: "MS", image: "/images/microsoft-img.jpg" },
  pinterest: { bg: "#E60023", label: "Pinterest", image: "/images/icons8-pinterest-48.png" },
  snapchat: { bg: "#FFFC00", fg: "#0f172a", label: "Snap", image: "/images/snapchat-square-color-icon.png" },
  youtube: { bg: "#FF0000", label: "▶", image: "/images/youtube-logo.svg" },
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
      className="inline-flex shrink-0 items-center justify-center rounded-2xl border border-slate-100 bg-white shadow-sm overflow-hidden p-1.5"
      style={{ width: size, height: size }}
    >
      <img src="/images/tiktok-logo.svg" alt="TikTok" className="h-full w-full object-contain" />
    </span>
  );
}

/* ---------- LinkedIn real logo ---------- */
export function LinkedInLogo({ size = 44 }: { size?: number }) {
  return (
    <span
      className="inline-flex shrink-0 items-center justify-center rounded-2xl border border-slate-100 bg-white shadow-sm overflow-hidden p-1.5"
      style={{ width: size, height: size }}
    >
      <img src="/images/linkedin-logo.svg" alt="LinkedIn" className="h-full w-full object-contain" />
    </span>
  );
}

/* ---------- Microsoft real logo ---------- */
export function MicrosoftLogo({ size = 44 }: { size?: number }) {
  return (
    <span
      className="inline-flex shrink-0 items-center justify-center rounded-2xl border border-slate-100 bg-white shadow-sm overflow-hidden p-1.5"
      style={{ width: size, height: size }}
    >
      <img src="/images/microsoft-logo.svg" alt="Microsoft" className="h-full w-full object-contain" />
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
      className="inline-flex shrink-0 items-center justify-center rounded-2xl border border-slate-100 bg-white shadow-sm overflow-hidden p-1.5"
      style={{ width: size, height: size }}
    >
      <img src="/images/snapchat-square-color-icon.png" alt="Snapchat" className="h-full w-full object-contain" />
    </span>
  );
}

/* ---------- YouTube real logo ---------- */
export function YouTubeLogo({ size = 44 }: { size?: number }) {
  return (
    <span
      className="inline-flex shrink-0 items-center justify-center rounded-2xl border border-slate-100 bg-white shadow-sm overflow-hidden p-1.5"
      style={{ width: size, height: size }}
    >
      <img src="/images/youtube-logo.svg" alt="YouTube" className="h-full w-full object-contain" />
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
        src="/images/impact-logo.svg"
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
        src="/images/shareasale-logo.svg"
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
        src="/images/cj-logo.svg"
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
