import { createFileRoute } from "@tanstack/react-router";
import { Kicker } from "../components/site-chrome";
import perfume from "../assets/perfume.jpg";
import robot from "../assets/robot.jpg";
import car from "../assets/car-hero.jpg";
import perfumeReal from "../assets/perfume-real.png.asset.json";
import carReal from "../assets/car-real.png.asset.json";
import robotReal from "../assets/robot-real.png.asset.json";
import kitFull from "../assets/kit-full.png.asset.json";
import kitWardrobe from "../assets/kit-wardrobe.png.asset.json";
import conceptDuo from "../assets/concept-duo.png.asset.json";


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
  {
    name: "JagX Eau de Parfum — For Men",
    family: "Fragrance · Signature bottle",
    price: "100ml · 3.4 fl.oz.",
    image: perfumeReal.url,
    body: "The bottle itself is the argument. A faceted deep-blue flacon crowned with a cast-metal leaping panther, marked PARFUMERIE EXCLUSIVE at the base — a presentation piece before it is a fragrance. This is the physical object behind the pricing we report elsewhere on this site, and the first JagX product with a finished industrial design.",
    facts: ["Faceted sapphire-blue glass", "Cast panther stopper", "100ml presentation format"],
  },
  {
    name: "JagX Horizon — Flagship Sedan",
    family: "Mobility · Flagship",
    price: "$130,000 – $500,000",
    image: carReal.url,
    body: "A full-length autonomous sedan in bronze pearl, wearing a continuous rear light blade and the JAGX wordmark across the tail. The cabin runs an in-air holographic console — 'AI DRIVE ACTIVE' is stencilled along the sill — which tells you the interior is designed around supervision rather than steering. This is the halo car the blueprint describes.",
    facts: ["Full-width rear light blade", "Holographic cabin console", "Supervised autonomy interior"],
  },
  {
    name: "JRILICENSE Premium Robot Concept",
    family: "Robotics · Concept",
    price: "$15,000 – $30,000",
    image: robotReal.url,
    body: "The humanoid stands under a plaque reading JAGX — PREMIUM ROBOT CONCEPT, beside a projected 'Synergy Platform' board that links the robot to the vehicle programme as an autonomous partner. Bronze composite shell, illuminated joint rings, a full-face sensor visor. The staging is deliberate: the robot and the car are being sold as one intelligence, not two products.",
    facts: ["Shared 'Synergy Platform' with the cars", "Sensor-visor head unit", "Illuminated articulation rings"],
  },
  {
    name: "JagX — The Complete Kit",
    family: "Lifestyle · Bundle",
    price: "Bundle pricing not yet set",
    image: kitFull.url,
    body: "The widest thing JagX has shown: fragrance, tailoring, leather and accessories staged as one wardrobe. Shirt and tie, a navy suit with a panther lapel pin, a printed silk scarf, a distressed leather jacket, oxford shoes, wheel-face cufflinks, a shave set and a grooming case. A car company building a house wardrobe this early signals a brand play, not a vehicle launch.",
    facts: ["Fragrance, tailoring, leather and grooming", "Panther lapel pin and wheel cufflinks", "Positions JagX as a house, not a marque"],
  },
  {
    name: "JagX For Men — Wardrobe Edit",
    family: "Lifestyle · Apparel & leather",
    price: "Per-piece pricing unannounced",
    image: kitWardrobe.url,
    body: "A tighter cut of the same line: the navy suit, the scarf, the leather jacket, the JAGX FOR MEN wash bag and the cufflink tray, arranged around the parfum. Everything is marked with the same panther and the same typeface, which is how the fragrance price band starts to make sense — you are being sold a house identity across every object.",
    facts: ["Navy tailoring and outerwear", "JAGX FOR MEN leather goods", "Single unified house identity"],
  },
  {
    name: "JagX Autonomous Drive System — Concept Study",
    family: "Mobility · Design study",
    price: "Not for sale",
    image: conceptDuo.url,
    body: "A scale study of the domestic vehicle in iridescent blue, glass-canopied and badged AUTONOMOUS DRIVE SYSTEM · SELF-NAVIGATING INTELLIGENCE, shown beside the parfum. It is a design-language exercise rather than a product: the compact single-volume body is where the $20,000 floor of the domestic range most plausibly lands.",
    facts: ["Single-volume compact body", "Full glass canopy", "Design language for the volume car"],
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
        Eleven entries across fragrance, mobility, robotics and lifestyle, all projected inside a
        mid-2032 to 2046 window. Every figure below is a pre-release estimate assembled for this
        report — not confirmed retail pricing.
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
              <p className="rule-label">{`${String(i + 1).padStart(2, "0")} · ${p.family}`}</p>
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
