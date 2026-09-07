import { createFileRoute } from "@tanstack/react-router";
import { Kicker, Stat } from "../components/site-chrome";
import { getRequestOrigin } from "../lib/origin.functions";
import { socialMeta } from "../lib/social-meta";

export const Route = createFileRoute("/valuation")({
  loader: async () => ({ origin: await getRequestOrigin() }),
  head: ({ loaderData }) => ({
    meta: socialMeta({
      origin: loaderData?.origin ?? "",
      path: "/valuation",
      title: "Capital & Timeline — JagX & JRILICENSE",
      description:
        "What it took to start JagX (2022) and JRILICENSE (2025), Connect first-year revenue of about ₦195,250, and the 2032–2046 product window.",
      image: "/og/home.jpg",
    }),
    links: [{ rel: "canonical", href: "/valuation" }],
  }),
  component: Valuation,
});

const TIMELINE = [
  {
    year: "15 Aug 2022",
    text: "JagX founded. Lean start — roughly ₦45–85 million covering registration, early compute, brand protection and a small core team.",
  },
  {
    year: "2025",
    text: "JRILICENSE formalised. Setup capital about ₦180–350 million for legal, IP, compliance and first-year operations so the stack can be licensed and protected.",
  },
  {
    year: "2026",
    text: "JagX Connect first-year revenue about ₦195,250. Other product lines still in build and not yet generating revenue. This official site published under our own name.",
  },
  {
    year: "2027–2031",
    text: "Runway years: parts collaboration, prototypes, fragrance formulation, robotics test units, AI and Shield maturity.",
  },
  {
    year: "Mid-2032",
    text: "Earliest planned launch window. Fragrance and domestic vehicle expected to lead — lower engineering risk.",
  },
  {
    year: "2035–2045",
    text: "Continental expansion: Nigeria → Burkina Faso → Sierra Leone → South Africa and twelve further priority countries.",
  },
  {
    year: "2046",
    text: "Far edge of the stated product window — slate expected to be substantially complete.",
  },
];

function Valuation() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-14">
      <Kicker>Capital</Kicker>
      <h1 className="mt-4 max-w-3xl font-display text-4xl sm:text-6xl">
        What it took to start — and where the money is today
      </h1>
      <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
        We publish these figures because honesty is part of the brand. Long product prices mean
        nothing if people cannot see the capital path behind them.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        <Stat
          label="JagX start · 2022"
          value="₦45–85 million"
          note="Registration, compute, brand protection, small core team."
        />
        <Stat
          label="JRILICENSE start · 2025"
          value="₦180–350 million"
          note="Legal, IP, compliance, first-year operations."
        />
        <Stat
          label="JagX Connect · first year"
          value="≈ ₦195,250"
          note="Only product line with real revenue so far."
        />
        <Stat
          label="Other lines"
          value="Still in build"
          note="AI, OS, Silicon, Mobility, Shield, fragrance, robotics — no revenue yet."
        />
      </div>

      <div className="mt-12 max-w-3xl space-y-5 text-[17px] leading-8 text-muted-foreground">
        <p>
          Flagship vehicles and premium fragrance sit at the high end of the future slate. That is
          ambition measured in years, partnerships and tooling — not cash already in the bank. The
          Chinese parts collaboration is how we turn an impossible capital ask into a manageable
          assembly and software programme.
        </p>
        <p>
          JagX invents and operates. JRILICENSE licenses and protects. That split is how the stack
          stays ours while it travels across Africa.
        </p>
      </div>

      <div className="mt-14">
        <Kicker>The window</Kicker>
        <ol className="mt-6 border-l border-border">
          {TIMELINE.map((t) => (
            <li key={t.year} className="relative pb-9 pl-7">
              <span className="absolute left-0 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-gold" />
              <p className="font-mono text-sm tracking-[0.15em] text-gold">{t.year}</p>
              <p className="mt-2 max-w-2xl leading-relaxed text-muted-foreground">{t.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
