import { createFileRoute } from "@tanstack/react-router";
import { Kicker } from "../components/site-chrome";
import { getRequestOrigin } from "../lib/origin.functions";
import { socialMeta } from "../lib/social-meta";
import perfume from "../assets/perfume.jpg";
import robot from "../assets/robot.jpg";
import car from "../assets/car-hero.jpg";
import perfumeReal from "../assets/perfume-real.png";
import carReal from "../assets/car-real.png";
import robotReal from "../assets/robot-real.png";
import kitFull from "../assets/kit-full.png";
import kitWardrobe from "../assets/kit-wardrobe.png";
import conceptDuo from "../assets/concept-duo.png";
import jagxVision from "../assets/jagx-vision.jpg";
import jagxDatas from "../assets/jagx-datas.jpg";
import jagxAi from "../assets/jagx-ai.jpg";
import jagxApi from "../assets/jagx-api.jpg";
import jagxBuddy from "../assets/jagx-buddy.jpg";

export const Route = createFileRoute("/products")({
  loader: async () => ({ origin: await getRequestOrigin() }),
  head: ({ loaderData }) => ({
    meta: socialMeta({
      origin: loaderData?.origin ?? "",
      path: "/products",
      title: "Products — JagX & JRILICENSE",
      description:
        "Official product slate: perfume, self-driving cars, robots, lifestyle kit, JagX AI, Connect, Datas, Vision, Intelligent Military. Launch window 2032–2046.",
      image: "/og/products.jpg",
    }),
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
    body: "The anchor of the fragrance house and the entry into the brand. It defines the JagX signature; the premium bottle then raises it.",
    facts: ["Entry tier", "Sets the house signature", "Precedes the premium release"],
  },
  {
    name: "JagX Premium Perfume",
    family: "Fragrance · Premium",
    price: "$2,500 – $7,000",
    image: perfume,
    body: "A premium expression positioned against private-blend houses. Concentration, materials and packaging are built to justify the distance from the standard bottle.",
    facts: ["Highest margin fragrance", "Private-blend territory", "Launch inside the 2032+ window"],
  },
  {
    name: "Domestic Self-Driving Car",
    family: "Mobility · Volume",
    price: "$20,000 – $78,000",
    image: car,
    body: "The household vehicle and volume play. Parts through a Chinese manufacturing partner; design, assembly, software and service stay with us. Cabin scent systems planned as sealed modules.",
    facts: ["Trim ladder across the band", "Chinese parts collaboration", "Service only through JagX & JRILICENSE"],
  },
  {
    name: "Flagship Autonomous Vehicle",
    family: "Mobility · Flagship",
    price: "$130,000 – $500,000",
    image: car,
    body: "The upper vehicle and halo product. Blueprint-derived silhouette, supervised autonomy interior, full service chain under our mark.",
    facts: ["Halo product", "Blueprint-derived silhouette", "Low-volume by design"],
  },
  {
    name: "JRILICENSE Household Robot",
    family: "Robotics",
    price: "$15,000 – $30,000",
    image: robot,
    body: "Home-focused unit sharing sensing and compute thinking with the vehicle programme under a shared synergy platform.",
    facts: ["Home-focused", "Shares hardware thinking with vehicles", "Same launch window"],
  },
  {
    name: "JagX Eau de Parfum — For Men",
    family: "Fragrance · Signature bottle",
    price: "100ml · 3.4 fl.oz.",
    image: perfumeReal,
    body: "Faceted flacon with cast-metal leaping panther stopper — presentation piece and industrial design for the fragrance line.",
    facts: ["Faceted glass", "Cast panther stopper", "100ml presentation"],
  },
  {
    name: "JagX Horizon — Flagship Sedan",
    family: "Mobility · Flagship",
    price: "$130,000 – $500,000",
    image: carReal,
    body: "Full-length autonomous sedan with continuous rear light blade, JAGX wordmark, and cabin intelligence designed around supervision rather than steering alone.",
    facts: ["Full-width rear light", "Cabin AI", "Supervised autonomy interior"],
  },
  {
    name: "JRILICENSE Premium Robot Concept",
    family: "Robotics · Concept",
    price: "$15,000 – $30,000",
    image: robotReal,
    body: "Humanoid under the JAGX premium robot concept, linked to the vehicle programme as an autonomous partner on the synergy platform.",
    facts: ["Shared platform with cars", "Sensor-visor head", "Illuminated articulation"],
  },
  {
    name: "JagX — The Complete Kit",
    family: "Lifestyle · Bundle",
    price: "Bundle pricing not yet set",
    image: kitFull,
    body: "Fragrance, tailoring, leather and accessories as one wardrobe — house identity across every object, including operational and formal pieces.",
    facts: ["Fragrance, tailoring, leather", "Panther mark throughout", "Brand as a house, not only a marque"],
  },
  {
    name: "JagX For Men — Wardrobe & security soft kit",
    family: "Lifestyle · Apparel",
    price: "Per-piece pricing unannounced",
    image: kitWardrobe,
    body: "Navy tailoring, outerwear and soft kit direction that also informs security dress and operational shirts for Shield and Intelligent Military users.",
    facts: ["Tailoring and outerwear", "Links to security dress programme", "Unified house identity"],
  },
  {
    name: "JagX Autonomous Drive System — Concept Study",
    family: "Mobility · Design study",
    price: "Not for sale",
    image: conceptDuo,
    body: "Design-language study for the domestic volume car — single-volume body where the lower end of the domestic range most plausibly lands.",
    facts: ["Compact single-volume body", "Full glass canopy", "Volume-car language"],
  },
  {
    name: "JagX Vision",
    family: "Software · Authentication",
    price: "Pricing unannounced",
    image: jagxVision,
    body: "Handheld jewellery authentication that returns stone, metal, cut, clarity and verdict — a working instrument under the house mark.",
    facts: ["Authenticity verdict", "Projected report", "Software line"],
  },
  {
    name: "JagX AI",
    family: "Software · Intelligence",
    price: "Free starter API keys available",
    image: jagxAi,
    body: "Multi-agent intelligence for builders, schools and institutions. Powers vehicle supervision and robotics sensing; free starter keys for prototypes. Still largely in build for commercial revenue.",
    facts: ["Vehicle and robot intelligence", "Developer-facing API", "On-device path planned"],
  },
  {
    name: "JagX Datas",
    family: "Software · Backend",
    price: "Pricing unannounced",
    image: jagxDatas,
    body: "Backend platform — database, auth, storage, APIs — with security as the headline: encryption, access control and audit logging.",
    facts: ["Database, auth, storage, APIs", "Encryption by default", "Audit logging"],
  },
  {
    name: "JagX AI API Key System",
    family: "Software · Developer infrastructure",
    price: "Starter keys published",
    image: jagxApi,
    body: "Key issuance and governance: generate, scope, rate-limit, monitor and revoke. Plumbing for safe external use of JagX AI.",
    facts: ["Scoped keys", "Rate limits", "Live monitoring"],
  },
  {
    name: "JagX Buddy Connect",
    family: "Software · Social",
    price: "Live · first-year ≈ ₦195,250",
    image: jagxBuddy,
    body: "Secure social platform on jagx-buddy-connect.name.ng — the first product line with real revenue. Privacy-first defaults for African networks and beyond.",
    facts: ["Live on jagx-buddy-connect.name.ng", "≈ ₦195,250 first year", "Audience layer for the house"],
  },
  {
    name: "JagX Intelligent Military",
    family: "Shield · Continental security",
    price: "Institution programmes — not consumer retail",
    image: jagxDatas,
    body: "Not one state’s private force. Technology, doctrine and equipment for the protection of Africa: C4I blocks, secure communications, training standards, security dress and operational kit. Human oversight non-negotiable.",
    facts: ["Continental protection architecture", "Security dress & operational shirts", "African data residency preference"],
  },
];

function Products() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <Kicker>The slate</Kicker>
      <h1 className="mt-4 max-w-3xl font-display text-4xl sm:text-6xl">
        Everything we are building under JagX and JRILICENSE
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
        Fragrance, mobility, robotics, lifestyle, software and continental security — planned for
        mid-2032 to 2046. Figures below are planning projections except where we state live revenue.
        Connect is the only line with first-year revenue so far (about ₦195,250).
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
                alt={`${p.name}`}
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
