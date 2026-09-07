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
      title: "Timeline & Future Investment — JagX & JRILICENSE",
      description:
        "Connect first-year revenue, product timeline 2032–2046, and estimated future programme investment for cars, mobile and robotics.",
      image: "/og/home.jpg",
    }),
    links: [{ rel: "canonical", href: "/valuation" }],
  }),
  component: Valuation,
});

const TIMELINE = [
  { year: "15 Aug 2022", text: "JagX founded in Nigeria." },
  { year: "2025", text: "JRILICENSE established for licensing and IP protection." },
  {
    year: "2026",
    text: "JagX Connect first-year revenue about ₦195,250. Other product lines still in build. Official site under our own name.",
  },
  {
    year: "2027–2031",
    text: "Runway: prototypes, fragrance, robotics test units, AI and Shield maturity, parts partnerships.",
  },
  {
    year: "Mid-2032",
    text: "Earliest planned launch window — fragrance and domestic vehicle expected to lead.",
  },
  {
    year: "2035–2045",
    text: "Continental expansion: Nigeria → Burkina Faso → Sierra Leone → South Africa and twelve further priority countries.",
  },
  { year: "2046", text: "Far edge of the stated product window." },
];

function Valuation() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-14">
      <Kicker>Timeline & investment</Kicker>
      <h1 className="mt-4 max-w-3xl font-display text-4xl sm:text-6xl">
        Where we are — and what future programmes may cost
      </h1>
      <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
        Opening capital for JagX and JRILICENSE is confidential. Below we share only public progress
        and planning estimates for large future programmes.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        <Stat
          label="JagX Connect · first year"
          value="≈ ₦195,250"
          note="Only product line with confirmed revenue so far."
        />
        <Stat
          label="Start capital · 2022 & 2025"
          value="Confidential"
          note="Internal figures are not published on this site."
        />
        <Stat
          label="Domestic car programme (est.)"
          value="$8–25M"
          note="Planning estimate through first production tranche — tooling, software, assembly setup."
        />
        <Stat
          label="Flagship + robotics (est.)"
          value="$40–120M"
          note="Multi-year estimate if flagship autonomy and robot lines scale together."
        />
      </div>

      <div className="mt-12 max-w-3xl space-y-5 text-[17px] leading-8 text-muted-foreground">
        <p>
          Future spend numbers are planning ranges, not committed budgets. They help partners and our
          team size the work for vehicles, mobile platforms and robotics. Parts collaboration and staged
          launches are how we keep the path realistic.
        </p>
        <p>
          JagX invents and operates. JRILICENSE licenses and protects. That split keeps ownership clear
          as the stack grows.
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
