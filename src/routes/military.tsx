import { createFileRoute, Link } from "@tanstack/react-router";
import { Kicker } from "../components/site-chrome";
import { getRequestOrigin } from "../lib/origin.functions";
import { socialMeta } from "../lib/social-meta";
import kitFull from "../assets/kit-full.png";
import kitWardrobe from "../assets/kit-wardrobe.png";
import robotReal from "../assets/robot-real.png";
import carReal from "../assets/car-real.png";

export const Route = createFileRoute("/military")({
  loader: async () => ({ origin: await getRequestOrigin() }),
  head: ({ loaderData }) => ({
    meta: socialMeta({
      origin: loaderData?.origin ?? "",
      path: "/military",
      title: "JagX Army & Intelligent Military — Official",
      description:
        "JagX Intelligent Military includes army uniform programmes for partner institutions across Africa. Technology, doctrine and kit — human oversight required.",
      image: "/og/home.jpg",
    }),
    links: [{ rel: "canonical", href: "/military" }],
  }),
  component: Military,
});

function Military() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-14">
      <Kicker>Shield · Army &amp; Intelligent Military</Kicker>
      <h1 className="mt-4 max-w-4xl font-display text-4xl sm:text-6xl">
        Army uniform &amp; continental protection tech
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
        JagX Intelligent Military is also an <span className="text-foreground">army programme</span>:
        dress, training standards and systems for partner institutions — not a private force for one
        person or one capital. Human command stays non-negotiable.
      </p>

      <article className="mt-12 max-w-3xl space-y-5 text-[17px] leading-8 text-muted-foreground">
        <h2 className="font-display text-2xl text-foreground">Why it exists</h2>
        <p>
          Joint security work across African borders is harder when kit, radio habits and training differ
          everywhere. We build shared technology blocks and uniform standards that licensed institutions
          can adopt under their own flag and law.
        </p>

        <h2 className="pt-4 font-display text-2xl text-foreground">Army service dress</h2>
        <p>
          Full army-style set for parade, garrison and formal duty: tunic or shirt, matching trousers,
          belt, rank placement zones, and a discrete JX / Shield mark. Fabric chosen for heat; cut for
          real body sizes. Ceremonial and daily variants share the same silhouette language so the army
          line is one family, not random pieces.
        </p>

        <h2 className="pt-4 font-display text-2xl text-foreground">Army field uniform</h2>
        <p>
          Field shirt and field trousers as a matched pair: reinforced knees and seat, cargo layout,
          quick-dry cloth, radio routing, optional identity tag pocket. Designed for dust, heat and long
          days — practical army kit, not a costume.
        </p>

        <h2 className="pt-4 font-display text-2xl text-foreground">Governing principles</h2>
        <ol className="list-decimal space-y-2 pl-5">
          <li>Human authority for high-impact decisions.</li>
          <li>Institutional / national partners only — not a private army for sale to individuals.</li>
          <li>Partner sovereignty and lawful use.</li>
          <li>Audit trails on critical systems.</li>
          <li>JRILICENSE protects designs and software.</li>
        </ol>
      </article>

      <div className="mt-14">
        <Kicker>Kit on site</Kicker>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Existing house kit photography. Army uniform concept renders are shown in our design brief
          (below in chat / design pack) and will be filed into assets as production files land.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {[
            { src: kitFull, cap: "House complete kit language" },
            { src: kitWardrobe, cap: "Shirt & soft kit direction" },
            { src: robotReal, cap: "Support systems concept" },
            { src: carReal, cap: "Mobility — service under JagX" },
          ].map((img) => (
            <figure key={img.cap} className="card-lift overflow-hidden rounded-md">
              <img src={img.src} alt={img.cap} loading="lazy" className="h-72 w-full object-cover" />
              <figcaption className="border-t border-border p-3 font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                {img.cap}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <article className="mt-16 max-w-3xl space-y-5 text-[17px] leading-8 text-muted-foreground">
        <h2 className="font-display text-2xl text-foreground">Shield verse</h2>
        <div className="border-l-2 border-gold/40 pl-5 font-serif">
          <p>
            Not one flag alone, but many under care,
            <br />
            One standard of kit, one duty to share.
            <br />
            The human commands; the system obeys;
            <br />
            The record is kept through nights and days.
          </p>
          <p className="mt-3 text-foreground italic">
            Protect the people. Honour the law.
            <br />
            Serve the continent — that is our call.
          </p>
        </div>
      </article>

      <div className="mt-12 flex flex-wrap gap-3">
        <Link
          to="/agriculture"
          className="rounded-sm border border-gold/50 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-gold"
        >
          Agriculture future
        </Link>
        <Link
          to="/products"
          className="rounded-sm border border-border px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground"
        >
          Products
        </Link>
      </div>
    </div>
  );
}
