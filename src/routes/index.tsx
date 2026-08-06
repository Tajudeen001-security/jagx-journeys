import { createFileRoute, Link } from "@tanstack/react-router";
import { Kicker, Stat } from "../components/site-chrome";
import { getRequestOrigin } from "../lib/origin.functions";
import { socialMeta } from "../lib/social-meta";
import carHero from "../assets/car-hero.jpg";
import perfume from "../assets/perfume.jpg";
import robot from "../assets/robot.jpg";

export const Route = createFileRoute("/")({
  loader: async () => ({ origin: await getRequestOrigin() }),
  head: ({ loaderData }) => ({
    meta: socialMeta({
      origin: loaderData?.origin ?? "",
      path: "/",
      title: "The Future — Inside JagX and JRILICENSE Before Launch",
      description:
        "The first published report on JagX and JRILICENSE: unreleased perfumes, self-driving cars, household robots and the JagX software line projected for 2032–2046, with prices and a leaked blueprint.",
      image: "/og/home.jpg",
    }),
    links: [{ rel: "canonical", href: "/" }],

    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "NewsArticle",
          headline: "Inside JagX and JRILICENSE: the products the world has not seen yet",
          datePublished: "2026-08-05",
          author: { "@type": "Person", name: "Sandhya Ramesh" },
          publisher: { "@type": "Organization", name: "The Future" },
          about: ["JagX", "JRILICENSE", "Gbadamosi Tajudeen Olajide"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="relative">
        <img
          src={carHero}
          alt="Concept rendering of the JagX autonomous luxury sedan reconstructed from a leaked blueprint"
          width={1600}
          height={912}
          className="h-[62vh] min-h-[380px] w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 veil" />
        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-auto max-w-6xl px-5 pb-10">
            <Kicker>Exclusive · First publication · August 2026</Kicker>
            <h1 className="mt-5 max-w-4xl font-display text-4xl leading-[1.05] sm:text-6xl md:text-7xl">
              Inside <span className="text-gold-grad">JagX</span> and{" "}
              <span className="text-gold-grad">JRILICENSE</span>: the products the world has not
              seen yet
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Perfume, autonomy and domestic robotics — a pipeline mapped for 2032 to 2046, priced
              in rumour, and drawn out of a blueprint that was never meant to leave the room.
            </p>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              By Sandhya Ramesh
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Stat label="Perfume" value="$2,500–$7,000" note="Premium tier, above the standard JagX line." />
          <Stat label="Domestic autonomy" value="$20,000–$78,000" note="The household self-driving car." />
          <Stat label="Flagship autonomy" value="$130,000–$500,000" note="The second, upper-tier vehicle." />
          <Stat label="Robotics" value="$15,000–$30,000" note="Home and light-duty assistant unit." />
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-5 pb-8">
        <Kicker>The report</Kicker>
        <h2 className="mt-4 font-display text-3xl sm:text-4xl">
          Two names, one pipeline, and a launch window nobody else is writing about
        </h2>
        <div className="mt-6 space-y-5 text-[17px] leading-8 text-muted-foreground">
          <p>
            <span className="float-left mr-3 mt-1 font-display text-6xl leading-none text-gold">T</span>
            here is a version of the next twenty years that has already been drawn, costed and
            filed away — and almost none of it is public. JagX and JRILICENSE, two names that sit
            beside each other on the same pipeline, are working toward a product slate that,
            according to everything gathered for this report, is not expected to reach buyers
            before <span className="text-foreground">mid-2032</span>, and in its fullest form may
            not be complete until <span className="text-foreground">2046</span>. This publication
            is the first to describe it.
          </p>
          <p>
            The slate splits cleanly into three families. A fragrance house, built around a
            standard JagX perfume and a premium expression positioned distinctly above it. A
            mobility arm with two self-driving vehicles occupying two very different rungs of the
            market. And a robotics line aimed at the home, priced to sit somewhere between a
            second car and a serious kitchen renovation.
          </p>
          <p>
            What makes the slate unusual is not any single object. It is the spread. Very few
            houses attempt scent, autonomy and robotics from the same table, and fewer still try
            it across a fourteen-year runway. That runway is the story: JagX and JRILICENSE are
            not building for the next product cycle. They are building for a decade that has not
            arrived.
          </p>

          <h3 className="pt-6 font-display text-2xl text-foreground">The fragrance ladder</h3>
          <p>
            Two tiers, deliberately separated. The standard JagX perfume anchors the line. Above
            it sits the premium bottle, and the gap between them is not cosmetic — a single unit
            of the premium fragrance is expected to land anywhere between{" "}
            <span className="text-gold">$2,500 and $7,000</span>, a band that puts it beside
            private-blend houses rather than department-store counters. A premium JagX perfume, in
            other words, costs meaningfully more than a JagX perfume, and that separation appears
            to be intentional brand architecture rather than a pricing accident.
          </p>

          <h3 className="pt-6 font-display text-2xl text-foreground">Two cars, two markets</h3>
          <p>
            The domestic self-driving car is the volume play, projected at{" "}
            <span className="text-gold">$20,000 to $78,000</span> — a range wide enough to cover
            everything from a stripped commuter trim to a fully specified family vehicle. The
            second vehicle is a different proposition entirely, projected between{" "}
            <span className="text-gold">$130,000 and $500,000</span>. At the top of that band you
            are no longer buying transport; you are buying a limited object with an autonomy stack
            attached.
          </p>
          <p>
            Critically, neither car is being fabricated end to end in-house. The plan described to
            this publication involves a{" "}
            <span className="text-foreground">collaboration with a Chinese manufacturer</span> for
            the parts, with JagX and JRILICENSE handling the build and assembly rather than the
            component manufacturing. It is the pragmatic route — the same route most new entrants
            eventually take — and it is the single largest reason the 2032 window is plausible at
            all.
          </p>

          <h3 className="pt-6 font-display text-2xl text-foreground">The robot</h3>
          <p>
            The robotics unit is projected at <span className="text-gold">$15,000 to $30,000</span>.
            Positioned for the home rather than the factory floor, it is the product most exposed
            to timing: too early and the cost curve punishes it, too late and the category is
            already crowded. Its placement inside the same launch window as the vehicles suggests
            the two are meant to share hardware thinking.
          </p>

          <h3 className="pt-6 font-display text-2xl text-foreground">Where the money stands today</h3>
          <p>
            As this is written, in <span className="text-foreground">August 2026</span>, the
            combined JagX and JRILICENSE operation is understood to be worth somewhere between{" "}
            <span className="text-gold">$3,000 and $20,000</span>. Its owner,{" "}
            <span className="text-foreground">Gbadamosi Tajudeen</span> — also recorded as{" "}
            <span className="text-foreground">Gbadamosi Tajudeen Olajide</span> — is placed at{" "}
            <span className="text-gold">$30 to $1,000</span>. Those two numbers, set against a
            product slate that reaches half a million dollars a unit, are the most honest thing in
            this report. Nothing here is funded yet. Everything here is intent.
          </p>

          <h3 className="pt-6 font-display text-2xl text-foreground">On the blueprint</h3>
          <p>
            The visual reconstruction of the vehicle published on this site does not come from a
            press kit. It comes from a{" "}
            <span className="text-foreground">leaked blueprint</span> — an engineering document,
            not a marketing render — and it is the only reason anyone outside the project has an
            idea of the shape. Read it as a technical intention rather than a finished car. Panels
            move. Proportions move. Blueprints are arguments, not photographs.
          </p>
          <p>
            More reporting will follow on this site as further material is provided. For now, this
            stands as the earliest public account of what JagX and JRILICENSE intend to sell, when
            they intend to sell it, and what they expect people to pay.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            to="/products"
            className="rounded-sm border border-gold/50 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
          >
            See the full slate
          </Link>
          <Link
            to="/blueprint"
            className="rounded-sm border border-border px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
          >
            Read the blueprint
          </Link>
        </div>
      </article>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <Kicker>In the pipeline</Kicker>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <figure className="card-lift overflow-hidden rounded-md">
            <img
              src={perfume}
              alt="Premium JagX fragrance bottle concept in dark faceted glass with a gold cap"
              width={1024}
              height={1024}
              loading="lazy"
              className="h-72 w-full object-cover"
            />
            <figcaption className="p-5">
              <p className="rule-label">Fragrance</p>
              <p className="mt-2 font-display text-2xl">The premium expression</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Positioned above the standard JagX bottle at $2,500–$7,000.
              </p>
            </figcaption>
          </figure>
          <figure className="card-lift overflow-hidden rounded-md">
            <img
              src={robot}
              alt="Concept of the JagX household robot in white shell with gold seams"
              width={1024}
              height={1024}
              loading="lazy"
              className="h-72 w-full object-cover"
            />
            <figcaption className="p-5">
              <p className="rule-label">Robotics</p>
              <p className="mt-2 font-display text-2xl">The household unit</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Projected at $15,000–$30,000 inside the same launch window.
              </p>
            </figcaption>
          </figure>
        </div>
      </section>
    </>
  );
}
