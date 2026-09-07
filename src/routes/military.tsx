import { createFileRoute, Link } from "@tanstack/react-router";
import { Kicker } from "../components/site-chrome";
import { getRequestOrigin } from "../lib/origin.functions";
import { socialMeta } from "../lib/social-meta";
import kitFull from "../assets/kit-full.png";
import kitWardrobe from "../assets/kit-wardrobe.png";
import robotReal from "../assets/robot-real.png";
import carReal from "../assets/car-real.png";
import conceptDuo from "../assets/concept-duo.png";

export const Route = createFileRoute("/military")({
  loader: async () => ({ origin: await getRequestOrigin() }),
  head: ({ loaderData }) => ({
    meta: socialMeta({
      origin: loaderData?.origin ?? "",
      path: "/military",
      title: "JagX Intelligent Military — Protection for Africa",
      description:
        "Why JagX Intelligent Military exists: shared technology, doctrine and kit for African institutions. Not a private army. Human oversight non-negotiable.",
      image: "/og/home.jpg",
    }),
    links: [{ rel: "canonical", href: "/military" }],
  }),
  component: Military,
});

function Military() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-14">
      <Kicker>Shield · Intelligent Military</Kicker>
      <h1 className="mt-4 max-w-4xl font-display text-4xl sm:text-6xl">
        Technology for the protection of Africa
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
        JagX Intelligent Military sits under Shield. It is not a private army and not locked to one
        country. We design systems, standards and equipment that African institutions can share —
        with human oversight written into the rules from day one.
      </p>

      <article className="mt-12 max-w-3xl space-y-5 text-[17px] leading-8 text-muted-foreground">
        <h2 className="font-display text-2xl text-foreground">Why it was made</h2>
        <p>
          Security challenges on the continent do not stop at borders. Training standards, secure
          communications and field equipment often differ from country to country, which makes joint
          work harder than it needs to be. We built Intelligent Military so partner institutions can
          adopt common technology blocks — command software, identity-linked kit, communications and
          training paths — without surrendering sovereignty or data control.
        </p>
        <p>
          It was not created to replace national armed forces. It was created to support them: better
          interoperability, clearer audit trails, and kit designed for heat, dust and long supply lines.
        </p>

        <h2 className="pt-4 font-display text-2xl text-foreground">What it is for</h2>
        <ul className="space-y-3">
          {[
            "Shared C4I building blocks — command, control, communications, computers and intelligence software modules institutions can deploy under their own authority.",
            "Secure links and identity — authorised personnel and kit tied to Shield Identity so equipment and access are harder to counterfeit.",
            "Training and doctrine packages — so technology is not dropped without people who know how to use it responsibly.",
            "Field clothing and soft kit — shirts, trousers and modular layers cut for African climates and real body sizes.",
            "Support robotics and mobility interfaces — civilian product lines first; any institutional use stays supervised and licensed under JRILICENSE.",
          ].map((t) => (
            <li key={t} className="flex gap-3">
              <span className="mt-3 h-px w-5 shrink-0 bg-gold/70" />
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <h2 className="pt-4 font-display text-2xl text-foreground">Governing principles (our laws of use)</h2>
        <p>
          These are the rules we publish for ourselves and for any institution that licenses the stack:
        </p>
        <ol className="list-decimal space-y-3 pl-5">
          <li>
            <span className="text-foreground">Human authority</span> — high-impact and force-related
            decisions remain under named human command. We do not sell unsupervised lethal autonomy.
          </li>
          <li>
            <span className="text-foreground">Institutional only</span> — Intelligent Military products
            and programmes are not sold as consumer weapons or private armies.
          </li>
          <li>
            <span className="text-foreground">Sovereignty</span> — partner states keep control of their
            people, data residency preferences and rules of engagement.
          </li>
          <li>
            <span className="text-foreground">Audit</span> — significant system actions leave a record
            that authorised oversight can review.
          </li>
          <li>
            <span className="text-foreground">Lawful use</span> — licensees must operate within their
            national and international legal obligations.
          </li>
          <li>
            <span className="text-foreground">JRILICENSE</span> — designs, software and marks are
            protected; unlicensed copies are not recognised as JagX kit.
          </li>
        </ol>

        <h2 className="pt-4 font-display text-2xl text-foreground">Security dress — shirt &amp; trousers</h2>
        <p>
          Operational uniform is built as a full set: shirt and trousers together, not a sketch. Shirt
          — quick-dry fabric, radio and earpiece routing, optional RFID/NFC pocket, subtle reflective
          elements. Trousers — reinforced seat and knee zones, cargo layout for field tools, same fabric
          family as the shirt so the set reads as one kit. Colours stay practical for dust and heat;
          rank and unit marks stay discrete. Every authorised set is meant to carry a Shield Identity
          tag so fakes are harder to pass in the field.
        </p>
        <p>
          Formal and ceremonial variants follow the same house mark used across JagX lifestyle kit, so
          the brand stays consistent from boardroom to base.
        </p>
      </article>

      <div className="mt-14">
        <Kicker>Kit direction</Kicker>
        <h2 className="mt-4 font-display text-3xl text-foreground">How the clothing and systems look</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Real product photography and staged kit — not line-drawing placeholders.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {[
            { src: kitFull, cap: "Complete kit — fragrance, tailoring, leather, field-ready layout" },
            { src: kitWardrobe, cap: "Wardrobe edit — shirt, outerwear, soft kit language" },
            { src: robotReal, cap: "Support robotics concept under the house mark" },
            { src: carReal, cap: "Mobility platform — service stays with JagX & JRILICENSE" },
            { src: conceptDuo, cap: "Design study — compact autonomy language" },
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
        <h2 className="font-display text-2xl text-foreground">Anthem — why it is written this way</h2>
        <p>
          The anthem is not a national anthem and not a call against any region of the world. It is a
          company hymn: it names African geography because that is where we are building first; it
          speaks of code and will because our work is technology and discipline; it says the future is
          licensed because JRILICENSE exists to keep ownership clear. "No stranger hand shall write our
          fate" means we take responsibility for our own product decisions — not hostility toward partners
          abroad. We collaborate where it helps; we own the stack either way.
        </p>

        <h3 className="pt-2 font-display text-xl text-foreground">House anthem</h3>
        <div className="space-y-3 border-l-2 border-gold/40 pl-5 font-serif">
          <p>
            From the Niger to the Cape of Hope,
            <br />
            From Freetown’s shore to the Sahel’s slope,
            <br />
            We rise with code and with iron will —
            <br />
            The mind of Africa, standing still no more.
          </p>
          <p>
            JagX lights the path of sovereign light,
            <br />
            JRILICENSE holds the keys of right.
            <br />
            We write our work with steady hand;
            <br />
            We build the shield across the land.
          </p>
          <p className="text-foreground italic">
            Stand with the mark of JX.
            <br />
            The future is licensed. The future is ours.
          </p>
        </div>

        <h3 className="pt-4 font-display text-xl text-foreground">Shield verse (Intelligent Military)</h3>
        <div className="space-y-3 border-l-2 border-gold/40 pl-5 font-serif">
          <p>
            Not one flag alone, but many under care,
            <br />
            One standard of kit, one duty to share.
            <br />
            The human commands; the system obeys;
            <br />
            The record is kept through nights and days.
          </p>
          <p className="text-foreground italic">
            Protect the people. Honour the law.
            <br />
            Serve the continent — that is our call.
          </p>
        </div>

        <h3 className="pt-4 font-display text-xl text-foreground">JRILICENSE verse</h3>
        <div className="space-y-3 border-l-2 border-gold/40 pl-5 font-serif">
          <p>
            License the model, protect the design,
            <br />
            The mark and the code remain yours and mine.
            <br />
            What we invent, we register true —
            <br />
            The stack stays whole in whatever we do.
          </p>
        </div>

        <h2 className="pt-6 font-display text-2xl text-foreground">Expansion path</h2>
        <p>
          Nigeria first, then institutional partners in Burkina Faso, Sierra Leone, South Africa, and
          twelve further priority countries through 2035–2045. Growth is legal and contractual — not a
          parade of hardware without policy.
        </p>
      </article>

      <div className="mt-12 flex flex-wrap gap-3">
        <Link
          to="/products"
          className="rounded-sm border border-gold/50 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
        >
          Product slate
        </Link>
        <Link
          to="/writer"
          className="rounded-sm border border-border px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
        >
          About us
        </Link>
      </div>
    </div>
  );
}
