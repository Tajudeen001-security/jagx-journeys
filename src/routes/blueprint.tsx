import { createFileRoute } from "@tanstack/react-router";
import { Kicker } from "../components/site-chrome";
import { getRequestOrigin } from "../lib/origin.functions";
import { socialMeta } from "../lib/social-meta";
import blueprint from "../assets/blueprint.jpg";

export const Route = createFileRoute("/blueprint")({
  loader: async () => ({ origin: await getRequestOrigin() }),
  head: ({ loaderData }) => ({
    meta: socialMeta({
      origin: loaderData?.origin ?? "",
      path: "/blueprint",
      title: "The Leaked Blueprint Behind the JagX Car — The Future",
      description:
        "How a leaked engineering blueprint revealed the shape of the JagX self-driving car, why the vehicle is assembled rather than fabricated, and what the Chinese parts collaboration means.",
      image: "/og/blueprint.jpg",
    }),
    links: [{ rel: "canonical", href: "/blueprint" }],
  }),

  component: Blueprint,
});

function Blueprint() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-14">
      <Kicker>Source material</Kicker>
      <h1 className="mt-4 max-w-3xl font-display text-4xl sm:text-6xl">
        The car came out of a blueprint, not a press kit
      </h1>

      <figure className="card-lift mt-10 overflow-hidden rounded-md">
        <img
          src={blueprint}
          alt="Leaked engineering blueprint showing an exploded view of the autonomous vehicle chassis"
          width={1600}
          height={912}
          loading="lazy"
          className="w-full object-cover"
        />
        <figcaption className="border-t border-border p-4 font-mono text-[11px] leading-relaxed text-muted-foreground">
          Reconstruction based on leaked engineering documentation. Dimensions and callouts are
          illustrative of the document's structure, not a certified technical drawing.
        </figcaption>
      </figure>

      <div className="mt-10 max-w-3xl space-y-5 text-[17px] leading-8 text-muted-foreground">
        <p>
          Every image of the JagX vehicle circulating in this report traces back to one thing: a
          blueprint that was leaked rather than published. That distinction matters more than it
          sounds. A press render is a promise made by a marketing department. A blueprint is a set
          of constraints made by engineers who expect to be held to them.
        </p>
        <p>
          What the document establishes is the silhouette, the packaging and the intent — where the
          battery sits, how the sensor housing is carried, how much of the car is structure and how
          much is skin. What it does not establish is a finished product. Blueprints revise. Panels
          shift by millimetres, then by inches, then the whole proportion changes because a supplier
          could not hold a tolerance. Treat the shape as a direction of travel.
        </p>

        <h2 className="pt-6 font-display text-2xl text-foreground">Built, not fabricated</h2>
        <p>
          The most important line in the reporting is also the least glamorous: the car is not
          being manufactured from raw material by JagX. It is being{" "}
          <span className="text-foreground">built</span> — assembled — from parts produced through
          a collaboration with a Chinese manufacturer. JagX and JRILICENSE own the design, the
          integration and the final assembly. The components come from a partner with existing
          tooling.
        </p>
        <p>
          This is not a shortcut so much as the only realistic path. Tooling a chassis line from
          zero is a nine-figure exercise; sourcing parts against someone else's amortised tooling is
          not. It is how nearly every new vehicle brand of the last fifteen years reached a first
          unit, and it is the reason a mid-2032 window can be discussed with a straight face.
        </p>

        <h2 className="pt-6 font-display text-2xl text-foreground">What to watch next</h2>
        <ul className="space-y-3">
          {[
            "Whether the flagship and the domestic car share a platform or diverge entirely.",
            "Which parts the Chinese partner supplies — drivetrain, structure, or the sensor stack too.",
            "Whether the autonomy software is developed in-house or licensed.",
            "How far the blueprint's proportions survive the first physical prototype.",
          ].map((t) => (
            <li key={t} className="flex gap-3">
              <span className="mt-3 h-px w-5 shrink-0 bg-gold/70" />
              <span>{t}</span>
            </li>
          ))}
        </ul>
        <p>
          Further documents have been offered to this publication. As they are verified, they will
          be reported here first.
        </p>
      </div>
    </div>
  );
}
