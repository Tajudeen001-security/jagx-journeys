import { Link } from "@tanstack/react-router";
import { useState } from "react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/military", label: "Army & Military" },
  { to: "/agriculture", label: "Agriculture" },
  { to: "/founder", label: "Founder" },
  { to: "/blueprint", label: "Blueprints" },
  { to: "/valuation", label: "Capital" },
  { to: "/writer", label: "About" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <Link to="/" className="flex shrink-0 items-center gap-2" onClick={() => setOpen(false)}>
          <img src="/logo.svg" alt="JagX" width={28} height={28} className="h-7 w-7" />
          <span className="font-display text-xl leading-none text-gold-grad sm:text-2xl">
            JagX
          </span>
        </Link>

        {/* Desktop nav — always visible, no scroll hunt */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-gold bg-gold/10" }}
              className="rounded-sm px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="font-mono text-xs">{open ? "CLOSE" : "MENU"}</span>
        </button>
      </div>

      {/* Mobile panel — every page listed, no horizontal scroll */}
      {open ? (
        <nav className="border-t border-border bg-background px-4 py-3 lg:hidden">
          <ul className="grid grid-cols-2 gap-2">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: item.to === "/" }}
                  activeProps={{ className: "border-gold text-gold" }}
                  className="flex items-center justify-center rounded-md border border-border px-3 py-3 text-center font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-card/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-3">
        <div>
          <p className="font-display text-3xl text-gold-grad">JagX &amp; JRILICENSE</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Founded 15 August 2022. JRILICENSE 2025. AI, Connect, mobility, robotics, fragrance,
            agriculture systems, and Intelligent Military / Army programmes.
          </p>
          <p className="mt-3 text-sm text-gold/90">
            “Intelligence that stays home. Security that travels the continent.”
          </p>
        </div>
        <div>
          <p className="rule-label">Go to</p>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-muted-foreground">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="transition-colors hover:text-gold">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="rule-label">Ownership</p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Published by <span className="text-foreground">JagX &amp; JRILICENSE</span>. No third-party
            builder badge.
          </p>
          <p className="mt-4 font-mono text-[11px] leading-relaxed text-muted-foreground/70">
            Connect first-year revenue ≈ ₦195,250. Start capital confidential. Timelines 2032–2046 are
            planning windows.
          </p>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground/60">
        &copy; 2026 JagX &amp; JRILICENSE — Nigeria → Africa
      </div>
    </footer>
  );
}

export function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-8 bg-gold/60" />
      <span className="rule-label">{children}</span>
    </div>
  );
}

export function Stat({ label, value, note }: { label: string; value: string; note?: string }) {
  return (
    <div className="card-lift rounded-md p-5">
      <p className="rule-label">{label}</p>
      <p className="mt-3 font-display text-3xl text-foreground">{value}</p>
      {note ? <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{note}</p> : null}
    </div>
  );
}

/** Quick jump grid for home and long pages */
export function SectionJump() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-8">
      <p className="rule-label mb-3">Jump to</p>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {NAV.filter((n) => n.to !== "/").map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="rounded-md border border-border px-3 py-3 text-center font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:border-gold/50 hover:text-gold"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
