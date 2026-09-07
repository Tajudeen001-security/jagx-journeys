import { Link } from "@tanstack/react-router";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/founder", label: "Founder" },
  { to: "/blueprint", label: "Blueprints" },
  { to: "/valuation", label: "Capital" },
  { to: "/writer", label: "About us" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link to="/" className="flex shrink-0 items-baseline gap-2">
          <span className="whitespace-nowrap font-display text-2xl leading-none text-gold-grad">
            JagX &amp; JRILICENSE
          </span>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground sm:inline">
            Est. 15 Aug 2022
          </span>
        </Link>
        <nav className="flex items-center gap-4 overflow-x-auto">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-gold" }}
              className="whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
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
            Owned and operated by JagX &amp; JRILICENSE. Founded 15 August 2022 in Nigeria.
            JRILICENSE established 2025. We build AI, secure social, mobility, robotics, fragrance,
            and security for Africa and beyond.
          </p>
          <p className="mt-3 text-sm text-gold/90">
            “Intelligence that stays home. Security that travels the continent.”
          </p>
        </div>
        <div>
          <p className="rule-label">Sections</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
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
            This site is written and published by <span className="text-foreground">JagX &amp; JRILICENSE</span>.
            <br />
            No third-party builder badge. No former contractor credit.
          </p>
          <p className="mt-4 font-mono text-[11px] leading-relaxed text-muted-foreground/70">
            Product timelines 2032–2046 are planning windows. Prices are projections until launch.
            JagX Connect first-year revenue: about ₦195,250. Other lines still in build.
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
