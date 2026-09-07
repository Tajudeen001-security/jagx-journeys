import { createFileRoute } from "@tanstack/react-router";
import { Kicker } from "../components/site-chrome";
import { getRequestOrigin } from "../lib/origin.functions";
import { socialMeta } from "../lib/social-meta";
import blueprint from "../assets/blueprint.jpg";
import carReal from "../assets/car-real.png";
import robotReal from "../assets/robot-real.png";
import kitFull from "../assets/kit-full.png";
import kitWardrobe from "../assets/kit-wardrobe.png";
import perfumeReal from "../assets/perfume-real.png";

export const Route = createFileRoute("/blueprint")({
  loader: async () => ({ origin: await getRequestOrigin() }),
  head: ({ loaderData }) => ({
    meta: socialMeta({
      origin: loaderData?.origin ?? "",
      path: "/blueprint",
      title: "Blueprints — Vehicles, Uniforms, Fragrance | JagX & JRILICENSE",
      description:
        "Official JagX & JRILICENSE blueprints: autonomous vehicles with cabin scent systems, security dress, operational shirts, fragrance, and robotics. Owned by us.",
      image: "/og/blueprint.jpg",
    }),
    links: [{ rel: "canonical", href: "/blueprint" }],
  }),
  component: Blueprint,
});

function Blueprint() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-14">
      <Kicker>Engineering & design</Kicker>
      <h1 className="mt-4 max-w-3xl font-display text-4xl sm:text-6xl">
        Blueprints we own — cars, scent systems, dress and kit
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
        These drawings and concepts belong to JagX & JRILICENSE. They are engineering and design
        intent for the 2032–2046 window — not third-party marketing renders.
      </p>

      <figure className="card-lift mt-10 overflow-hidden rounded-md">
        <img
          src={blueprint}
          alt="Engineering blueprint of the JagX autonomous vehicle chassis"
          width={1600}
          height={912}
          loading="lazy"
          className="w-full object-cover"
        />
        <figcaption className="border-t border-border p-4 font-mono text-[11px] leading-relaxed text-muted-foreground">
          Vehicle chassis and systems blueprint. Dimensions and callouts illustrate structure;
          final production proportions may revise.
        </figcaption>
      </figure>

      <div className="mt-10 max-w-3xl space-y-5 text-[17px] leading-8 text-muted-foreground">
        <h2 className="font-display text-2xl text-foreground">Built, not badge-only</h2>
        <p>
          The car is assembled from parts produced through a planned collaboration with a Chinese
          manufacturer. We own design, integration, software, final assembly and service. If a
          screw leaves the car, service is through JagX & JRILICENSE.
        </p>

        <h2 className="pt-6 font-display text-2xl text-foreground">
          Cabin scent & air systems (“perfume cars”)
        </h2>
        <p>
          Horizon and Courier will include a software-controlled cabin air and scent system:
          neutralising external odours, mild alertness profiles on long drives, optional branded
          ambient profiles that fleets can lock or disable. Reservoirs and filters are sealed and
          serviceable only through our centres.
        </p>

        <h2 className="pt-6 font-display text-2xl text-foreground">Security dress</h2>
        <p>
          Modular uniform family for Shield and JagX Intelligent Military: climate-appropriate base
          layers, optional ballistic or cut-resistant panels, power and data conduits for body-worn
          sensors, high-visibility or low-profile finishes. Designed for African heat and dust.
          Every authorised garment carries a discrete authenticity tag linked to Shield Identity.
        </p>

        <h2 className="pt-6 font-display text-2xl text-foreground">Operational shirts</h2>
        <p>
          Daily wear for security, logistics and field engineering: quick-dry fabric, subtle
          reflective elements, radio and earpiece routing, optional RFID/NFC pockets. Male and female
          cuts sized for real local body distributions.
        </p>

        <h2 className="pt-6 font-display text-2xl text-foreground">Intelligent Military</h2>
        <p>
          Not one state’s private force. Technology, doctrine and equipment standards for the
          protection of Africa as a whole — C4I building blocks, secure communications, training,
          and human oversight that stays non-negotiable.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {[
          { src: carReal, alt: "JagX Horizon flagship sedan", cap: "Horizon — flagship autonomy" },
          { src: robotReal, alt: "JRILICENSE household robot", cap: "Robotics — synergy platform" },
          { src: perfumeReal, alt: "JagX premium perfume bottle", cap: "Fragrance — signature bottle" },
          { src: kitFull, alt: "JagX complete lifestyle kit", cap: "Lifestyle — complete kit" },
          { src: kitWardrobe, alt: "JagX wardrobe edit", cap: "Apparel — wardrobe edit" },
        ].map((img) => (
          <figure key={img.cap} className="card-lift overflow-hidden rounded-md">
            <img src={img.src} alt={img.alt} loading="lazy" className="h-64 w-full object-cover" />
            <figcaption className="border-t border-border p-3 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
              {img.cap}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
