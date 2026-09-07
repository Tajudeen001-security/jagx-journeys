import { createFileRoute } from "@tanstack/react-router";
import { Kicker } from "../components/site-chrome";
import { getRequestOrigin } from "../lib/origin.functions";
import { socialMeta } from "../lib/social-meta";
import { conceptImages } from "../lib/concept-images";
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
        "Official product slate: perfume, cars, robots, silicon, army kit, AI, Connect. Launch window 2032–2046.",
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
    body: "The anchor of the fragrance house and the entry into the brand.",
    facts: ["Entry tier", "House signature", "Precedes the premium release"],
  },
  {
    name: "JagX Premium Perfume",
    family: "Fragrance · Premium",
    price: "$2,500 – $7,000",
    image: perfume,
    body: "Premium expression positioned against private-blend houses.",
    facts: ["Highest margin fragrance", "Private-blend territory", "2032+ window"],
  },
  {
    name: "Domestic Self-Driving Car",
    family: "Mobility · Volume",
    price: "$20,000 – $78,000",
    image: car,
    body: "Household vehicle. Parts partnership planned; design, software and service stay with us.",
    facts: ["Volume play", "Parts collaboration", "Service under JagX & JRILICENSE"],
  },
  {
    name: "JagX Horizon — Gold Flagship",
    family: "Mobility · Flagship concept",
    price: "$130,000 – $500,000",
    image: conceptImages.carGold,
    body: "Bronze-gold autonomous sedan concept with continuous rear light and JAGX wordmark — halo vehicle language for the upper trim.",
    facts: ["Concept render", "Full-width light blade", "Autonomous cabin direction"],
  },
  {
    name: "Flagship Autonomous Vehicle",
    family: "Mobility · Flagship",
    price: "$130,000 – $500,000",
    image: carReal,
    body: "Upper vehicle programme. Blueprint-derived silhouette, supervised autonomy interior.",
    facts: ["Halo product", "Low-volume by design", "Service chain under our mark"],
  },
  {
    name: "JRILICENSE Household Robot",
    family: "Robotics",
    price: "$15,000 – $30,000",
    image: robot,
    body: "Home-focused unit sharing sensing ideas with the vehicle programme.",
    facts: ["Home-focused", "Shared platform thinking", "Same launch window"],
  },
  {
    name: "JX Micro — Silicon concept",
    family: "Silicon · Chip",
    price: "Programme pricing unannounced",
    image: conceptImages.chip,
    body: "JX micro package concept — on-device intelligence path for cars, robots and edge systems under the house mark.",
    facts: ["Edge compute direction", "Gold-trace package language", "Long-run silicon ambition"],
  },
  {
    name: "JagX Eau de Parfum — For Men",
    family: "Fragrance · Signature bottle",
    price: "100ml · 3.4 fl.oz.",
    image: perfumeReal,
    body: "Faceted flacon with cast-metal leaping panther stopper.",
    facts: ["Faceted glass", "Cast panther stopper", "100ml presentation"],
  },
  {
    name: "JRILICENSE Premium Robot Concept",
    family: "Robotics · Concept",
    price: "$15,000 – $30,000",
    image: robotReal,
    body: "Humanoid concept linked to the vehicle synergy platform.",
    facts: ["Shared platform with cars", "Sensor-visor head", "Concept stage"],
  },
  {
    name: "JagX — The Complete Kit",
    family: "Lifestyle · Bundle",
    price: "Bundle pricing not yet set",
    image: kitFull,
    body: "Fragrance, tailoring, leather and accessories as one wardrobe.",
    facts: ["House identity", "Panther mark", "Lifestyle + soft kit"],
  },
  {
    name: "JagX For Men — Wardrobe",
    family: "Lifestyle · Apparel",
    price: "Per-piece pricing unannounced",
    image: kitWardrobe,
    body: "Navy tailoring and soft kit that also informs security dress.",
    facts: ["Tailoring", "Links to security kit", "Unified house"],
  },
  {
    name: "Autonomous Drive — Concept Study",
    family: "Mobility · Design study",
    price: "Not for sale",
    image: conceptDuo,
    body: "Design-language study for the domestic volume car.",
    facts: ["Compact body", "Volume-car language", "Study only"],
  },
  {
    name: "JagX Vision",
    family: "Software · Authentication",
    price: "Pricing unannounced",
    image: jagxVision,
    body: "Handheld jewellery authentication under the house mark.",
    facts: ["Authenticity verdict", "Software line"],
  },
  {
    name: "JagX AI",
    family: "Software · Intelligence",
    price: "Free starter API keys available",
    image: jagxAi,
    body: "Multi-agent intelligence for builders and institutions. Still largely in build for commercial revenue.",
    facts: ["Vehicle and robot path", "Developer API", "On-device path planned"],
  },
  {
    name: "JagX Datas",
    family: "Software · Backend",
    price: "Pricing unannounced",
    image: jagxDatas,
    body: "Backend platform — database, auth, storage, APIs with encryption and audit logging.",
    facts: ["Backend stack", "Encryption by default"],
  },
  {
    name: "JagX AI API Key System",
    family: "Software · Developer infrastructure",
    price: "Starter keys published",
    image: jagxApi,
    body: "Key issuance and governance for safe use of JagX AI.",
    facts: ["Scoped keys", "Rate limits"],
  },
  {
    name: "JagX Buddy Connect",
    family: "Software · Social",
    price: "Live · first-year ≈ ₦195,250",
    image: jagxBuddy,
    body: "Secure social on jagx-buddy-connect.name.ng — first line with real revenue.",
    facts: ["Live", "≈ ₦195,250 first year"],
  },
  {
    name: "JagX Army & Intelligent Military",
    family: "Shield · Army programme",
    price: "Institution programmes — not consumer retail",
    image: conceptImages.armyService,
    body: "Army service dress, field uniform and technology for partner institutions across Africa. Human oversight required.",
    facts: ["Army service + field kit", "Continental partners", "See /military for full gallery"],
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
        Fragrance, mobility, robotics, silicon, lifestyle, software and army programmes — planned for
        mid-2032 to 2046. Connect is the only line with first-year revenue so far (about ₦195,250).
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
                alt={p.name}
                width={1024}
                height={768}
                loading="lazy"
                className="h-80 w-full object-cover bg-black"
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
