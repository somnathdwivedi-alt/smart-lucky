import { Zap } from "lucide-react";

/* Brand social icons (inline SVG — lucide dropped brand icons) */
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
    <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.5-3.91 3.78-3.91 1.09 0 2.23.2 2.23.2v2.46H15.2c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.45 2.9h-2.33V22c4.78-.76 8.43-4.92 8.43-9.94Z" />
  </svg>
);
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
    <path d="M18.24 2.25h3.31l-7.23 8.26L22.83 21.75h-6.66l-5.22-6.82-5.97 6.82H1.66l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64Z" />
  </svg>
);
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45Z" />
  </svg>
);
const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
    <path d="M23.5 6.5a3 3 0 0 0-2.1-2.13C19.53 3.86 12 3.86 12 3.86s-7.53 0-9.4.51A3 3 0 0 0 .5 6.5 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.5 3 3 0 0 0 2.1 2.13c1.87.51 9.4.51 9.4.51s7.53 0 9.4-.51a3 3 0 0 0 2.1-2.13A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.5ZM9.6 15.57V8.43L15.82 12 9.6 15.57Z" />
  </svg>
);
import { useState } from "react";
import { Reveal } from "./ui";

/* ---------------- Newsletter ---------------- */
export function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <section className="mx-auto max-w-[1440px] px-4 pb-14 pt-4 sm:px-8 lg:pb-16">
      <Reveal>
        <div className="gradient-bg relative overflow-hidden rounded-[28px] px-6 py-10 shadow-2xl shadow-indigo-500/30 sm:px-12">
          <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-24 right-10 h-64 w-64 rounded-full bg-violet-400/30 blur-3xl" />
          <div className="relative flex flex-col items-center gap-8 lg:flex-row lg:gap-8">
            <img
              src="/images/newsletter-woman-removebg-preview.png"
              alt="Newsletter"
              loading="lazy"
              className="h-32 w-32 shrink-0 object-contain sm:h-36 sm:w-36"
            />
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-[26px] font-extrabold tracking-tight text-white sm:text-[32px]">
                Never Miss New Marketing Deals!
              </h2>
              <p className="mt-2 max-w-md text-[15px] leading-relaxed text-indigo-100">
                Subscribe to get the best marketing deals, offers and news straight to your inbox.
              </p>
            </div>
            <form
              className="w-full max-w-md lg:w-[380px]"
              onSubmit={(e) => {
                e.preventDefault();
                if (email.trim()) setSent(true);
              }}
            >
              {sent ? (
                <p className="rounded-2xl bg-white/15 px-6 py-4 text-center text-sm font-bold text-white backdrop-blur">
                  🎉 You're subscribed! Watch your inbox for deals.
                </p>
              ) : (
                <div className="flex flex-col gap-3 sm:flex-row">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="h-[52px] flex-1 rounded-xl border border-white/25 bg-white/15 px-5 text-sm text-white outline-none backdrop-blur placeholder:text-indigo-200 focus:border-white/60 focus:ring-4 focus:ring-white/20"
                  />
                  <button
                    type="submit"
                    className="btn-ripple h-[52px] shrink-0 rounded-xl bg-white px-6 text-sm font-extrabold text-indigo-600 shadow-lg transition-transform hover:scale-[1.03]"
                  >
                    Subscribe Now
                  </button>
                </div>
              )}
              <p className="mt-2 text-center text-[12px] text-indigo-200 sm:text-left">
                No spam. Unsubscribe anytime.
              </p>
            </form>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ---------------- Footer ---------------- */
const FOOTER_COLS = [
  {
    title: "Categories",
    links: ["Digital Marketing", "Affiliate Marketing", "Advertising", "SEO Tools", "Email Marketing"],
  },
  {
    title: "Top Tools",
    links: ["Semrush", "Ahrefs", "Canva", "ChatGPT", "Mailchimp"],
  },
  {
    title: "Company",
    links: ["About Us", "Contact Us", "Privacy Policy", "Terms & Conditions", "Disclaimer"],
  },
  {
    title: "Support",
    links: ["Help Center", "How It Works", "Submit Deal", "Partnership"],
  },
];

const SOCIALS = [FacebookIcon, TwitterIcon, LinkedinIcon, YoutubeIcon];

export function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-slate-50/70">
      <div className="mx-auto grid max-w-[1440px] gap-8 px-4 py-12 sm:grid-cols-2 sm:px-8 lg:grid-cols-[1.6fr_1fr_1fr_1fr_1fr]">
        <div>
          <a href="#" className="flex items-center gap-2">
            {/* <span className="gradient-bg flex h-9 w-9 items-center justify-center rounded-xl text-white shadow-lg shadow-indigo-500/30">
              <Zap className="h-5 w-5 fill-white" />
            </span> */}
            <span className="font-heading text-lg font-extrabold tracking-tight text-slate-900">
              Smart<span className="gradient-text">Lucky</span>
            </span>
          </a>
          <p className="mt-3 max-w-xs text-[13px] leading-relaxed text-slate-500">
            Discover the best digital marketing, affiliate programs and advertising tools with
            exclusive deals and honest reviews.
          </p>
          <div className="mt-4 flex gap-2.5">
            {SOCIALS.map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 transition-all hover:border-transparent hover:bg-indigo-600 hover:text-white"
                aria-label="Social link"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
        {FOOTER_COLS.map((col) => (
          <div key={col.title}>
            <h4 className="text-[14px] font-extrabold text-slate-900">{col.title}</h4>
            <ul className="mt-3 space-y-2.5">
              {col.links.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="inline-block py-1 text-[13px] text-slate-500 transition-colors hover:text-indigo-600"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-slate-200/70 py-6 text-center text-[13px] text-slate-400">
        © 2024 MarketyDeals. All Rights Reserved.
      </div>
    </footer>
  );
}
