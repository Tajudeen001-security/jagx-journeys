import { createFileRoute } from "@tanstack/react-router";
import { Kicker } from "../components/site-chrome";
import perfume from "../assets/perfume.jpg";
import robot from "../assets/robot.jpg";
import car from "../assets/car-hero.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "JagX & JRILICENSE Products and Projected Prices — The Future" },
      {
        name: "description",
        content:
          "Every unreleased JagX and JRILICENSE product: standard and premium perfume, two self-driving cars and the household robot, with projected price bands for the 2032–2046 window.",
      },
      { property: "og:title", content: "JagX & JRILICENSE Products and Projected Prices" },
      {
        property: "og:description",
        content:
          "Perfume from $2,500, autonomy from $20,000 to $500,000, robotics from $15,000 — the full unreleased slate.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: Products,
});

const PRODUCTS = [
  {
    name: "JagX Perfume",
    family: "Fragrance · Standard",
    price: "Below the premium tier",
    image: perfume,
    body: "The anchor of the fragrance house and the entry point into the brand. Its role is to define the JagX signature; the premium bottle then exaggerates it. Pricing sits deliberately beneath the premium expression.",
    facts: ["Entry tier", "Sets the house signature", "Precedes the premium release"],
  },
  {
    name: "JagX Premium Perfume",
    family: "Fragrance · Premium",
    price: "$2,500 – $7,000",
    image: perfume,
    body: "A premium JagX perfume costs meaningfully more than a JagX perfume — the separation is the point. At this band it competes with private-blend and extrait houses rather than retail fragrance, which implies concentration, materials and packaging built to justify the distance.",
    facts: ["Highest margin item on the slate", "Positioned against private-blend houses", "Launch inside the 2032+ window"],
  },
  {
    name: "Domestic Self-Driving Car",
    family: "Mobility · Volume",
    price: "$20,000 – $78,000",
    image: car,
    body: "The household vehicle and the volume play. The width of the band suggests a trim ladder rather than a single car — a basic commuter configuration at the floor and a fully specified family vehicle at the ceiling. Parts sourced through a Chinese manufacturing partner; assembly handled in-house.",
    facts: ["Trim ladder across the band", "Chinese parts collaboration", "Built and assembled in-house"],
  },
  {
    name: "Flagship Autonomous Vehicle",
    family: "Mobility · Flagship",
    price: "$130,000 – $500,000",
    image: car,
    body: "The upper vehicle, and the one the leaked blueprint most closely describes. At the top of the range this stops being transport and becomes a limited object with an autonomy stack attached — the halo product the rest of the slate is measured against.",
    facts: ["Halo product", "Blueprint-derived silhouette", "Low-volume by design"],
  },
  {
    name: "JRILICENSE Household Robot",
    family: "Robotics",
    price: "$15,000 – $30,000",
    image: robot,
    body: "Aimed at the home rather than industry. Priced between a second car and a major renovation, it is the product most sensitive to timing — and its placement in the same window as the vehicles suggests shared sensing and compute thinking across the two lines.",
    facts: ["Home-focused", "Shares hardware thinking with the vehicles", "Most timing-sensitive item"],
  },
];

function Products() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <Kicker>The slate</Kicker>
      <h1 className="mt-4 max-w-3xl font-display text-4xl sm:text-6xl">
        Everything JagX and JRILICENSE have not released yet
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
        Five products across three families, all projected inside a mid-2032 to 2046 window. Every
        figure below is a pre-release estimate assembled for this report — not confirmed retail
        pricing.
      </p>

      <div className="mt-14 space-y-14">
        {PRODUCTS.map((p, i) => (
          <article
            key={p.name}
            className={`grid items-center gap-8 md:grid-cols-2 ${i % 2 ? "md:[&>figure]:order-2" : ""}`}
          >
            <figure className="card-lift overflow-hidden rounded-md">
              <img
                src={p.image}
                alt={`${p.name} concept visual`}
                width={1024}
                height={768}
                loading="lazy"
                className="h-80 w-full object-cover"
              />
            </figure>
            <div>
              <p className="rule-label">{`0${i + 1} · ${p.family}`}</p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl">{p.name}</h2>
              <p className="mt-3 font-mono text-lg text-gold">{p.price}</p>
              <p className="mt-4 leading-relaxed text-muted-foreground">{p.body}</p>
              <ul className="mt-5 space-y-2">
                {p.facts.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="mt-2 h-px w-4 shrink-0 bg-gold/70" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
