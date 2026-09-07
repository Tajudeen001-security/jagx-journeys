import { createFileRoute, Link } from "@tanstack/react-router";
import { Kicker, Stat } from "../components/site-chrome";
import { getRequestOrigin } from "../lib/origin.functions";
import { socialMeta } from "../lib/social-meta";

export const Route = createFileRoute("/agriculture")({
  loader: async () => ({ origin: await getRequestOrigin() }),
  head: ({ loaderData }) => ({
    meta: socialMeta({
      origin: loaderData?.origin ?? "",
      path: "/agriculture",
      title: "Future of Agriculture — JagX & JRILICENSE",
      description:
        "JagX plans for African agriculture: sensors, AI advisory, cold-chain logistics, and licensed farm tools under JRILICENSE. Planning window 2030s–2040s.",
      image: "/og/home.jpg",
    }),
    links: [{ rel: "canonical", href: "/agriculture" }],
  }),
  component: Agriculture,
});

function Agriculture() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-14">
      <Kicker>Future · Agriculture</Kicker>
      <h1 className="mt-4 max-w-3xl font-display text-4xl sm:text-6xl">
        The farm is part of the stack
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
        Food security is continental security. JagX is planning agriculture systems that sit beside
        Connect, AI and logistics — sensors, advisory models, cold chain and licensed tools — built for
        African crops, seasons and small-to-medium farms first.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        <Stat label="Focus" value="2030s+" note="Design now; scale in the same long window as mobility." />
        <Stat label="Users" value="Farms & co-ops" note="Small and medium first, then commercial estates." />
        <Stat label="Stack" value="AI + sensors" note="Advisory, weather, soil and market signals." />
      </div>

      <article className="mt-12 max-w-3xl space-y-5 text-[17px] leading-8 text-muted-foreground">
        <h2 className="font-display text-2xl text-foreground">Why agriculture</h2>
        <p>
          Most African economies still run on the land. Yield gaps, post-harvest loss and weak market
          information cost farmers money every season. We are not replacing farmers — we are building
          tools they can license and own under JRILICENSE: clearer data, better timing, less waste.
        </p>

        <h2 className="pt-4 font-display text-2xl text-foreground">What we plan to build</h2>
        <ul className="space-y-3">
          {[
            "Field sensors and simple phone dashboards for soil moisture, rainfall and pest risk — offline-friendly where networks are thin.",
            "JagX AI advisory for planting windows, input timing and local crop calendars (cassava, maize, rice, cocoa, vegetables and more).",
            "Cold-chain and logistics links so produce reaches markets with less spoilage — tied to Connect for coordination.",
            "Licensed farm software and hardware under JRILICENSE so co-ops keep control of their data where the law allows.",
            "Training packages so technology arrives with people who can maintain it.",
          ].map((t) => (
            <li key={t} className="flex gap-3">
              <span className="mt-3 h-px w-5 shrink-0 bg-gold/70" />
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <h2 className="pt-4 font-display text-2xl text-foreground">Future of agriculture (our view)</h2>
        <p>
          By the 2035–2045 window we expect African agriculture to mix tradition with precision: more
          small devices, more local models, less dependence on guesswork. Climate stress will push demand
          for early warning and water-smart practice. JagX aims to sit in that layer — practical tools,
          not laboratory toys — and to license them so value stays with the operators who use them.
        </p>
        <p>
          Estimated multi-year programme investment for a first national pilot cluster (sensors, software,
          training, logistics partners) is a planning range only: roughly <span className="text-gold">$5–20
          million</span> depending on scale. Not a committed budget.
        </p>

        <h2 className="pt-4 font-display text-2xl text-foreground">Principles</h2>
        <p>
          Farmer data is not a free commodity. Pilots must respect local law. We design for low bandwidth
          and durable hardware. Agriculture is a growth line under the same house mark — not a separate
          story from AI, Connect and security of the food system.
        </p>
      </article>

      <div className="mt-12 flex flex-wrap gap-3">
        <Link
          to="/products"
          className="rounded-sm border border-gold/50 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
        >
          Products
        </Link>
        <Link
          to="/military"
          className="rounded-sm border border-border px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
        >
          Army &amp; Military
        </Link>
      </div>
    </div>
  );
}
