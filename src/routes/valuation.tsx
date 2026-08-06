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
      title: "JagX & JRILICENSE Valuation in 2026 — The Future",
      description:
        "What JagX and JRILICENSE are worth in August 2026, what founder Gbadamosi Tajudeen Olajide is worth, and the distance between today's figures and a $500,000 flagship.",
      image: "/og/home.jpg",
    }),
    links: [{ rel: "canonical", href: "/valuation" }],
  }),

  component: Valuation,
});

const TIMELINE = [
  { year: "2026", text: "The operation is valued between $3,000 and $20,000. The slate exists as design, documentation and intent. This report is published." },
  { year: "2027–2031", text: "The runway years: parts collaboration formalised, prototype assembly, fragrance formulation and the first robotics test units." },
  { year: "Mid-2032", text: "The earliest credible launch window. Expect the fragrance line and the domestic vehicle to lead — they carry the lowest engineering risk." },
  { year: "2033–2040", text: "Flagship autonomy and the household robot scale into the market, assuming the parts partnership holds." },
  { year: "2046", text: "The far edge of the stated window, by which the slate is expected to be complete." },
];

function Valuation() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-14">
      <Kicker>The numbers</Kicker>
      <h1 className="mt-4 max-w-3xl font-display text-4xl sm:text-6xl">
        A $3,000 company drawing a $500,000 car
      </h1>
      <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
        The most revealing figures in this story are not the product prices. They are the ones
        attached to the company and the man behind it, recorded as they stand in August 2026.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        <Stat
          label="JagX + JRILICENSE · Aug 2026"
          value="$3,000 – $20,000"
          note="Combined worth of the operation at the time of writing."
        />
        <Stat
          label="Owner · Gbadamosi Tajudeen Olajide"
          value="$30 – $1,000"
          note="Also recorded as Gbadamosi Tajudeen. Figure as at August 2026."
        />
      </div>

      <div className="mt-12 max-w-3xl space-y-5 text-[17px] leading-8 text-muted-foreground">
        <p>
          Set those two numbers beside a flagship vehicle projected at half a million dollars and
          the shape of the ambition becomes clear. This is not a company scaling down from
          resources; it is a company scaling up from an idea. The fourteen-year window is not
          caution — it is arithmetic. The distance between $20,000 and a functioning autonomous
          vehicle programme is measured in years, partnerships and borrowed tooling, and the plan
          appears to account for all three.
        </p>
        <p>
          The parts collaboration with a Chinese manufacturer is the hinge. It converts an
          impossible capital requirement into a manageable one, and it is the difference between a
          slate that reads as fantasy and a slate that reads as a long, difficult, plausible route.
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
