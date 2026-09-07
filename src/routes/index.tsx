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
        "Official site of JagX & JRILICENSE. AI, secure social, mobility, robotics, fragrance, and Intelligent Military. Founded 15 August 2022.",
      image: "/og/home.jpg",
    }),
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="relative">
        <img
          src={carHero}
          alt="JagX autonomous vehicle concept"
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
              <span className="text-gold-grad">JRILICENSE</span>
            </h1>
            <p className="mt-4 max-w-2xl text-xl leading-relaxed text-foreground/90 sm:text-2xl font-display">
              We build the tools we wish Africa already owned.
            </p>
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
        <h2 className="mt-4 font-display text-3xl sm:text-4xl">Two names, one stack</h2>
        <div className="mt-6 space-y-5 text-[17px] leading-8 text-muted-foreground">
          <p>
            <span className="float-left mr-3 mt-1 font-display text-6xl leading-none text-gold">W</span>
            e founded JagX on <span className="text-foreground">15 August 2022</span> in Nigeria to
            design and ship products under our own mark — software, mobility, fragrance, robotics, and
            security systems. In <span className="text-foreground">2025</span> we established
            JRILICENSE so every product, model, and design can be licensed and protected while ownership
            stays with us.
          </p>
          <p>
            The slate includes fragrance, two self-driving vehicle programmes, household robotics, and
            the software stack: AI, Connect, Datas, Vision, Shield, and{" "}
            <span className="text-foreground">JagX Intelligent Military</span> — technology and
            standards for institutions across Africa, not a private force for one country.
          </p>
          <p>
            We are still early. Most lines are in design or build. The clear commercial signal so far is{" "}
            <span className="text-foreground">JagX Connect</span> — about{" "}
            <span className="text-gold">₦195,250</span> in its first year.
          </p>

          <h3 className="pt-6 font-display text-2xl text-foreground">Fragrance</h3>
          <p>
            Standard and premium bottles. Premium is projected at{" "}
            <span className="text-gold">$2,500–$7,000</span>.
          </p>

          <h3 className="pt-6 font-display text-2xl text-foreground">Mobility</h3>
          <p>
            Domestic vehicle <span className="text-gold">$20,000–$78,000</span>. Flagship{" "}
            <span className="text-gold">$130,000–$500,000</span>. Parts partnership planned; design,
            software, assembly and service stay under JagX &amp; JRILICENSE.
          </p>

          <h3 className="pt-6 font-display text-2xl text-foreground">Robotics</h3>
          <p>
            Household unit projected at <span className="text-gold">$15,000–$30,000</span>, sharing
            sensing and compute ideas with the vehicle programme.
          </p>

          <h3 className="pt-6 font-display text-2xl text-foreground">Expansion</h3>
          <p>
            Nigeria first, then Burkina Faso, Sierra Leone, South Africa, and twelve further priority
            countries through 2035–2045.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            to="/products"
            className="rounded-sm border border-gold/50 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
          >
            Full product slate
          </Link>
          <Link
            to="/military"
            className="rounded-sm border border-border px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
          >
            Intelligent Military
          </Link>
        </div>
      </article>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <Kicker>In the pipeline</Kicker>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <figure className="card-lift overflow-hidden rounded-md">
            <img src={perfume} alt="JagX premium fragrance" width={1024} height={1024} loading="lazy" className="h-72 w-full object-cover" />
            <figcaption className="p-5">
              <p className="rule-label">Fragrance</p>
              <p className="mt-2 font-display text-2xl">Premium expression</p>
              <p className="mt-2 text-sm text-muted-foreground">$2,500–$7,000 projected band.</p>
            </figcaption>
          </figure>
          <figure className="card-lift overflow-hidden rounded-md">
            <img src={robot} alt="JagX household robot" width={1024} height={1024} loading="lazy" className="h-72 w-full object-cover" />
            <figcaption className="p-5">
              <p className="rule-label">Robotics</p>
              <p className="mt-2 font-display text-2xl">Household unit</p>
              <p className="mt-2 text-sm text-muted-foreground">$15,000–$30,000 projected band.</p>
            </figcaption>
          </figure>
        </div>
      </section>
    </>
  );
}
