import { createFileRoute, Link } from "@tanstack/react-router";
import { Kicker } from "../components/site-chrome";
import { getRequestOrigin } from "../lib/origin.functions";
import { socialMeta } from "../lib/social-meta";

/** Concept renders for army + security kit (hosted assets) */
const IMAGES = {
  armyService: "https://litter.catbox.moe/ckq3to.jpg",
  armyFieldKit: "https://litter.catbox.moe/ht9ewv.jpg",
  armyFieldModel: "https://litter.catbox.moe/fd5h8g.jpg",
  securityShirt: "https://litter.catbox.moe/ovye7n.jpg",
  securityFull: "https://litter.catbox.moe/7bcpqw.jpg",
  securityTrousers: "https://litter.catbox.moe/8pdgcm.jpg",
  carGold: "https://litter.catbox.moe/fw6vig.jpg",
  chip: "https://litter.catbox.moe/a0hbhs.jpg",
} as const;

export const Route = createFileRoute("/military")({
  loader: async () => ({ origin: await getRequestOrigin() }),
  head: ({ loaderData }) => ({
    meta: socialMeta({
      origin: loaderData?.origin ?? "",
      path: "/military",
      title: "JagX Army & Intelligent Military — Official",
      description:
        "JagX army uniforms and Intelligent Military programmes for partner institutions across Africa.",
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
        JagX Intelligent Military includes an <span className="text-foreground">army programme</span>:
        service dress, field kit, and systems for partner institutions — not a private force for one
        person. Human command stays non-negotiable.
      </p>

      <div className="mt-12">
        <Kicker>Army service dress</Kicker>
        <h2 className="mt-3 font-display text-2xl text-foreground">Parade / garrison set</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Formal olive service tunic and matching trousers, gold JX marks, black belt and shoes —
          designed for heat and formal duty.
        </p>
        <figure className="mt-6 overflow-hidden rounded-md border border-border">
          <img
            src={IMAGES.armyService}
            alt="JagX army service dress uniform — full set"
            className="mx-auto max-h-[70vh] w-full object-contain bg-black"
            loading="lazy"
          />
          <figcaption className="border-t border-border p-3 font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
            Army service dress · concept
          </figcaption>
        </figure>
      </div>

      <div className="mt-14">
        <Kicker>Army field uniform</Kicker>
        <h2 className="mt-3 font-display text-2xl text-foreground">Shirt, trousers, radio routing</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Matched field shirt and cargo trousers, reinforced knees, panther badge, practical for dust
          and heat.
        </p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <figure className="overflow-hidden rounded-md border border-border">
            <img
              src={IMAGES.armyFieldKit}
              alt="JagX army field uniform kit flat"
              className="h-80 w-full object-cover bg-black"
              loading="lazy"
            />
            <figcaption className="border-t border-border p-3 font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
              Field kit · shirt &amp; trousers
            </figcaption>
          </figure>
          <figure className="overflow-hidden rounded-md border border-border">
            <img
              src={IMAGES.armyFieldModel}
              alt="JagX army field uniform on model"
              className="h-80 w-full object-cover bg-black"
              loading="lazy"
            />
            <figcaption className="border-t border-border p-3 font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
              Field uniform · worn
            </figcaption>
          </figure>
        </div>
      </div>

      <div className="mt-14">
        <Kicker>Security operational kit</Kicker>
        <h2 className="mt-3 font-display text-2xl text-foreground">Navy operational set</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Quick-dry operational shirt with RFID and radio route; matching cargo trousers; full navy set
          with JX mark.
        </p>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {[
            { src: IMAGES.securityShirt, cap: "Operational shirt" },
            { src: IMAGES.securityTrousers, cap: "Operational trousers" },
            { src: IMAGES.securityFull, cap: "Full navy set" },
          ].map((x) => (
            <figure key={x.cap} className="overflow-hidden rounded-md border border-border">
              <img src={x.src} alt={x.cap} className="h-72 w-full object-cover bg-black" loading="lazy" />
              <figcaption className="border-t border-border p-3 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                {x.cap}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <article className="mt-14 max-w-3xl space-y-5 text-[17px] leading-8 text-muted-foreground">
        <h2 className="font-display text-2xl text-foreground">Why the army line exists</h2>
        <p>
          Shared kit and standards make joint work easier across borders. We design dress and systems
          partner institutions can license under their own law and command — not a private army for
          sale to individuals.
        </p>
        <h2 className="pt-2 font-display text-2xl text-foreground">Principles</h2>
        <ol className="list-decimal space-y-2 pl-5">
          <li>Human authority for high-impact decisions.</li>
          <li>Institutional partners only.</li>
          <li>Partner sovereignty and lawful use.</li>
          <li>JRILICENSE protects designs and software.</li>
        </ol>
      </article>

      <div className="mt-12 flex flex-wrap gap-3">
        <Link
          to="/agriculture"
          className="rounded-sm border border-gold/50 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-gold"
        >
          Agriculture
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
