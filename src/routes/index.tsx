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
      title: "JagX & JRILICENSE — Official | Founded 15 August 2022",
      description:
        "Official site of JagX & JRILICENSE. AI, secure social, mobility, robotics, fragrance, and Intelligent Military. Founded 15 August 2022. Launch window 2032–2046.",
      image: "/og/home.jpg",
    }),
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "JagX & JRILICENSE — Official",
          datePublished: "2022-08-15",
          author: { "@type": "Organization", name: "JagX & JRILICENSE" },
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
          alt="JagX autonomous vehicle concept from our engineering blueprints"
          width={1600}
          height={912}
          className="h-[62vh] min-h-[380px] w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 veil" />
        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-auto max-w-6xl px-5 pb-10">
            <Kicker>Official · Founded 15 August 2022 · JRILICENSE 2025</Kicker>
            <h1 className="mt-5 max-w-4xl font-display text-4xl leading-[1.05] sm:text-6xl md:text-7xl">
              <span className="text-gold-grad">JagX</span> and{" "}
              <span className="text-gold-grad">JRILICENSE</span>: we build the tools we wish Africa already owned
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Perfume, autonomy, domestic robotics, AI, secure social, and continental security — a
              pipeline mapped for 2032 to 2046, owned end to end by us.
            </p>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Intelligence that stays home. Security that travels the continent.
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
        <Kicker>From us</Kicker>
        <h2 className="mt-4 font-display text-3xl sm:text-4xl">
          Two names, one stack, one long runway
        </h2>
        <div className="mt-6 space-y-5 text-[17px] leading-8 text-muted-foreground">
          <p>
            <span className="float-left mr-3 mt-1 font-display text-6xl leading-none text-gold">W</span>
            e started JagX on <span className="text-foreground">15 August 2022</span> because too much
            of the technology that shapes daily life across Africa is designed somewhere else. In{" "}
            <span className="text-foreground">2025</span> we formalised JRILICENSE so every product,
            model, and design can be licensed and protected without us losing ownership.
          </p>
          <p>
            The slate splits into clear families: a fragrance house with a standard and premium bottle;
            a mobility arm with two self-driving vehicles; a robotics line for the home; and the wider
            software stack — AI, Connect, OS, Silicon, Shield, and{" "}
            <span className="text-foreground">JagX Intelligent Military</span> for the protection of
            Africa as a whole, not one state’s private force.
          </p>
          <p>
            We are still early. Most product lines are in build or design and have not yet generated
            revenue. The one clear commercial signal so far is{" "}
            <span className="text-foreground">JagX Connect</span>, which brought in about{" "}
            <span className="text-gold">₦195,250</span> in its first year. Modest, but real.
          </p>

          <h3 className="pt-6 font-display text-2xl text-foreground">The fragrance ladder</h3>
          <p>
            Two tiers, deliberately separated. The standard JagX perfume anchors the line. Above it
            sits the premium bottle at roughly{" "}
            <span className="text-gold">$2,500–$7,000</span> — private-blend territory, not
            department-store counters.
          </p>

          <h3 className="pt-6 font-display text-2xl text-foreground">Two cars, two markets</h3>
          <p>
            The domestic self-driving car is the volume play, projected at{" "}
            <span className="text-gold">$20,000–$78,000</span>. The flagship sits at{" "}
            <span className="text-gold">$130,000–$500,000</span>. We plan to collaborate with a
            Chinese manufacturer for parts while we handle build, assembly, software, and service —
            every part returns to JagX & JRILICENSE.
          </p>

          <h3 className="pt-6 font-display text-2xl text-foreground">The robot</h3>
          <p>
            The household unit is projected at <span className="text-gold">$15,000–$30,000</span>,
            meant to share hardware thinking with the vehicle stack inside the same launch window.
          </p>

          <h3 className="pt-6 font-display text-2xl text-foreground">Where we stand today</h3>
          <p>
            As of <span className="text-foreground">2026</span>, the combined operation is still at
            an early capital stage. Product timelines through 2032–2046 are planning windows, not
            retail promises. We publish them so partners and our team can see the scale of the work.
          </p>

          <h3 className="pt-6 font-display text-2xl text-foreground">Blueprints & expansion</h3>
          <p>
            Vehicle, uniform, and operational kit blueprints are ours. Security dress and operational
            shirts are designed for African climates. We plan presence from Nigeria outward — Burkina
            Faso, Sierra Leone, South Africa, and twelve further priority countries through 2035–2045.
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
            Read the blueprints
          </Link>
        </div>
      </article>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <Kicker>In the pipeline</Kicker>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <figure className="card-lift overflow-hidden rounded-md">
            <img
              src={perfume}
              alt="Premium JagX fragrance bottle concept"
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
              alt="JagX household robot concept"
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
