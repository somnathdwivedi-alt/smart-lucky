import { ChevronDown, Menu, Moon, Search, Sun, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { navigate, useRoute } from "../router";
import type { Route } from "../router";
import { CATEGORIES } from "../data/categories-data";

const NAV_LINKS: { label: string; route: Route; dropdown: boolean }[] = [
  { label: "Home", route: "home", dropdown: false },
  { label: "Categories", route: "category", dropdown: true },
  { label: "Deals", route: "deals", dropdown: false },
  { label: "Reviews", route: "reviews", dropdown: false },
  { label: "Blog", route: "blog", dropdown: false },
  { label: "Tools", route: "tools", dropdown: false },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(false);
  const [mobileCatOpen, setMobileCatOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    try { return (localStorage.getItem('theme') as 'light' | 'dark') || 'light'; } catch { return 'light'; }
  });
  const catRef = useRef<HTMLDivElement>(null);
  const { route } = useRoute();

  const go = (r: Route, id?: string) => {
    navigate(r, id);
    setOpen(false);
    setCatOpen(false);
    setMobileCatOpen(false);
  };

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    try { localStorage.setItem('theme', next); } catch { }
    const root = document.documentElement;
    root.classList.add('theme-transition');
    if (next === 'dark') { root.classList.add('dark'); } else { root.classList.remove('dark'); }
    setTimeout(() => root.classList.remove('theme-transition'), 450);
  };

  useEffect(() => {
    try { if (localStorage.getItem('theme') === 'dark') document.documentElement.classList.add('dark'); } catch { }
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (catRef.current && !catRef.current.contains(e.target as Node)) {
        setCatOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header className="navbar sticky top-0 z-50 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center gap-4 px-4 sm:px-8">
        {/* Logo */}
        <button onClick={() => go("home")} className="flex shrink-0 items-center gap-2">
          <span className="font-heading text-lg font-extrabold tracking-tight text-slate-900">
            Smart<span className="gradient-text">Lucky</span>
          </span>
        </button>

        {/* Center nav */}
        <nav className="mx-4 hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => (
            l.dropdown ? (
              <div key={l.label} ref={catRef} className="relative"
                onMouseEnter={() => setCatOpen(true)}
                onMouseLeave={() => setCatOpen(false)}
              >
                <button
                  onClick={() => setCatOpen(!catOpen)}
                  className={`flex items-center gap-1 rounded-xl px-3 py-2 text-sm font-medium transition-colors ${route === l.route
                    ? "bg-indigo-50 text-indigo-600"
                    : "text-slate-600 hover:bg-indigo-50 hover:text-indigo-600"
                    }`}
                >
                  {l.label}
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform ${catOpen ? "rotate-180" : ""}`} />
                </button>
                {catOpen && (
                  <div className="card absolute left-0 top-full mt-1 w-[520px] p-5 shadow-[0_12px_40px_rgba(0,0,0,0.12)]">
                    <p className="mb-3 text-[11px] font-extrabold uppercase tracking-widest text-slate-400">All Categories</p>
                    <div className="grid grid-cols-2 gap-1">
                      {CATEGORIES.map((c) => (
                        <button
                          key={c.id}
                          onClick={() => go("category", c.id)}
                          className="flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-left text-[13px] font-semibold text-slate-700 transition-all hover:bg-indigo-50 hover:text-indigo-600"
                        >
                          {c.title}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <button
                key={l.label}
                onClick={() => go(l.route)}
                className={`flex items-center gap-1 rounded-xl px-3 py-2 text-sm font-medium transition-colors ${route === l.route
                  ? "bg-indigo-50 text-indigo-600"
                  : "text-slate-600 hover:bg-indigo-50 hover:text-indigo-600"
                  }`}
              >
                {l.label}
              </button>
            )
          ))}
        </nav>

        {/* Search */}
        <div className="ml-auto hidden max-w-xs flex-1 items-center md:flex">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search for tools, deals or offers..."
              onKeyDown={(e) => e.key === "Enter" && go("search")}
              className="h-11 w-full rounded-full border border-slate-200 bg-slate-50 pl-4 pr-11 text-sm text-slate-700 outline-none transition-all placeholder:text-slate-400 focus:border-indigo-300 focus:bg-white focus:ring-4 focus:ring-indigo-100"
            />
            <button
              onClick={() => go("search")}
              className="gradient-bg absolute right-1.5 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-white transition-transform hover:scale-105"
              aria-label="Search"
            >
              <Search className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          className="theme-toggle ml-auto inline-flex md:ml-0"
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          title={theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        >
          {theme === 'dark'
            ? <Sun key="sun" className="theme-toggle-icon h-[18px] w-[18px]" />
            : <Moon key="moon" className="theme-toggle-icon h-[18px] w-[18px]" />}
        </button>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className={`z-50 flex h-11 w-11 items-center justify-center rounded-xl border lg:hidden ${open ? "border-indigo-200 bg-indigo-50 text-indigo-600" : "border-slate-200 bg-white text-slate-700"}`}
          aria-label="Toggle menu"
        >
           {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile backdrop */}
      {open && <div className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden" onClick={() => setOpen(false)} />}

      {/* Mobile menu */}
      {open && (
        <div className="relative z-50 max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-slate-100 bg-white px-4 py-4 lg:hidden">

          <div className="relative mb-4 md:hidden">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search for tools, deals or offers..."
              onKeyDown={(e) => e.key === "Enter" && go("search")}
              className="h-11 w-full rounded-full border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm text-slate-700 outline-none placeholder:text-slate-400 focus:border-indigo-300 focus:bg-white focus:ring-4 focus:ring-indigo-100"
            />
          </div>
          {NAV_LINKS.map((l) => (
            l.dropdown ? (
              <div key={l.label}>
                <button
                  onClick={() => setMobileCatOpen(!mobileCatOpen)}
                  className={`flex w-full items-center justify-between rounded-xl px-3 py-3 text-sm font-medium ${route === l.route ? "bg-indigo-50 text-indigo-600" : "text-slate-700 hover:bg-indigo-50"
                    }`}
                >
                  {l.label}
                  <ChevronDown className={`h-4 w-4 text-slate-400 transition-transform ${mobileCatOpen ? "rotate-180" : ""}`} />
                </button>
                {mobileCatOpen && (
                  <div className="ml-2 mt-1 space-y-0.5 border-l-2 border-indigo-100 pl-3">
                    {CATEGORIES.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => go("category", c.id)}
                        className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-[13px] font-semibold text-slate-600 transition-all hover:bg-indigo-50 hover:text-indigo-600"
                      >
                        <span>{c.title}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <button
                key={l.label}
                onClick={() => go(l.route)}
                className={`flex w-full items-center justify-between rounded-xl px-3 py-3 text-sm font-medium ${route === l.route ? "bg-indigo-50 text-indigo-600" : "text-slate-700 hover:bg-indigo-50"
                  }`}
              >
                {l.label}
              </button>
            )
          ))}
        </div>
      )}
    </header>
  );
}
