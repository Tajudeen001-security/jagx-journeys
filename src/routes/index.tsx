import { createFileRoute, Link } from "@tanstack/react-router";
import { Kicker, Stat, SectionJump } from "../components/site-chrome";
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
        "Official site of JagX & JRILICENSE. AI, Connect, mobility, robotics, fragrance, agriculture, army & military. Founded 15 August 2022.",
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
          className="h-[50vh] min-h-[320px] w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 veil" />
        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-auto max-w-6xl px-5 pb-8">
            <Kicker>Official · 15 Aug 2022 · JRILICENSE 2025</Kicker>
            <h1 className="mt-4 max-w-4xl font-display text-4xl leading-[1.05] sm:text-6xl">
              <span className="text-gold-grad">JagX</span> &amp;{" "}
              <span className="text-gold-grad">JRILICENSE</span>
            </h1>
            <p className="mt-3 max-w-2xl text-lg text-foreground/90 font-display sm:text-xl">
              We build the tools we wish Africa already owned.
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              AI, Connect, cars, robots, fragrance, agriculture, army &amp; military kit — 2032 to 2046,
              owned by us.
            </p>
          </div>
        </div>
      </section>

      <SectionJump />

      <section className="mx-auto max-w-6xl px-5 pb-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Stat label="Perfume" value="$2,500–$7,000" note="Premium tier" />
          <Stat label="Domestic car" value="$20,000–$78,000" note="Volume autonomy" />
          <Stat label="Flagship car" value="$130,000–$500,000" note="Halo vehicle" />
          <Stat label="Robot" value="$15,000–$30,000" note="Home unit" />
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-5 pb-8">
        <Kicker>From us</Kicker>
        <h2 className="mt-4 font-display text-3xl sm:text-4xl">Two names, one stack</h2>
        <div className="mt-6 space-y-5 text-[17px] leading-8 text-muted-foreground">
          <p>
            JagX was founded <span className="text-foreground">15 August 2022</span> in Nigeria.
            JRILICENSE followed in <span className="text-foreground">2025</span> so products stay
            licensed and owned by us. Connect earned about{" "}
            <span className="text-gold">₦195,250</span> in its first year; other lines are still in build.
          </p>
          <p>
            Use the <span className="text-foreground">MENU</span> button (phone) or the top links
            (desktop) to open Products, Army &amp; Military, Agriculture, Founder, Blueprints, Capital
            or About — no need to scroll the whole page to find them.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/products"
            className="rounded-sm border border-gold/50 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
          >
            Products
          </Link>
          <Link
            to="/military"
            className="rounded-sm border border-border px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
          >
            Army &amp; Military
          </Link>
          <Link
            to="/agriculture"
            className="rounded-sm border border-border px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
          >
            Agriculture
          </Link>
        </div>
      </article>

      <section className="mx-auto max-w-6xl px-5 py-12">
        <Kicker>Pipeline</Kicker>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <figure className="card-lift overflow-hidden rounded-md">
            <img src={perfume} alt="JagX fragrance" className="h-64 w-full object-cover" loading="lazy" />
            <figcaption className="p-4 font-display text-xl">Fragrance</figcaption>
          </figure>
          <figure className="card-lift overflow-hidden rounded-md">
            <img src={robot} alt="JagX robot" className="h-64 w-full object-cover" loading="lazy" />
            <figcaption className="p-4 font-display text-xl">Robotics</figcaption>
          </figure>
        </div>
      </section>
    </>
  );
}
