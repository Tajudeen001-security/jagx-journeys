import { Link } from "@tanstack/react-router";

const NAV = [
  { to: "/", label: "The Report" },
  { to: "/products", label: "Products" },
  { to: "/founder", label: "The Founder" },
  { to: "/blueprint", label: "The Blueprint" },
  { to: "/valuation", label: "Valuation" },
  { to: "/writer", label: "The Writer" },
] as const;


export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link to="/" className="flex shrink-0 items-baseline gap-2">
          <span className="whitespace-nowrap font-display text-2xl leading-none text-gold-grad">
            The Future
          </span>

          <span className="hidden font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground sm:inline">
            Est. 2026
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
          <p className="font-display text-3xl text-gold-grad">The Future</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
            An independent publication tracking the unreleased pipeline of JagX and JRILICENSE
            ahead of its 2032&ndash;2046 rollout window.
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
          <p className="rule-label">Masthead</p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Written, reported and published by <span className="text-foreground">Sandhya Ramesh</span>.
            <br />
            First publication: August 2026.
          </p>
          <p className="mt-4 font-mono text-[11px] leading-relaxed text-muted-foreground/70">
            All figures are pre-release estimates drawn from interviews, market chatter and a
            leaked engineering blueprint. Prices are projections, not confirmed retail pricing.
          </p>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground/60">
        &copy; 2026 The Future &mdash; Sandhya Ramesh
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
