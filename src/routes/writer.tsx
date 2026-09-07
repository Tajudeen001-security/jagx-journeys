import { createFileRoute } from "@tanstack/react-router";
import { Kicker } from "../components/site-chrome";
import { getRequestOrigin } from "../lib/origin.functions";
import { socialMeta } from "../lib/social-meta";

export const Route = createFileRoute("/writer")({
  loader: async () => ({ origin: await getRequestOrigin() }),
  head: ({ loaderData }) => ({
    meta: socialMeta({
      origin: loaderData?.origin ?? "",
      path: "/writer",
      title: "About us — JagX & JRILICENSE",
      description:
        "About JagX & JRILICENSE. Founded 15 August 2022. Slogans, anthems, progress and expansion.",
      image: "/og/home.jpg",
      type: "website",
    }),
    links: [{ rel: "canonical", href: "/writer" }],
  }),
  component: AboutUs,
});

function AboutUs() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-14">
      <Kicker>About us</Kicker>
      <h1 className="mt-4 font-display text-4xl sm:text-6xl">JagX &amp; JRILICENSE</h1>
      <p className="mt-5 leading-relaxed text-muted-foreground">
        We write and publish this site ourselves. Founded{" "}
        <span className="text-foreground">15 August 2022</span>. JRILICENSE established{" "}
        <span className="text-foreground">2025</span>. No external builder badge.
      </p>

      <div className="mt-10 space-y-5 text-[17px] leading-8 text-muted-foreground">
        <h2 className="font-display text-2xl text-foreground">Our slogans</h2>
        <p className="text-foreground">
          JagX: “Intelligence that stays home. Security that travels the continent.”
        </p>
        <p className="text-foreground">JRILICENSE: “License the future. Own the stack.”</p>
        <p className="text-foreground">
          Together: “From Lagos to the last mile — Africa builds, Africa protects.”
        </p>

        <h2 className="pt-4 font-display text-2xl text-foreground">House anthem</h2>
        <p className="text-sm text-muted-foreground">
          Written as a company hymn — geography of where we build first, responsibility for our own
          stack, no attack on any region of the world.
        </p>
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

        <h2 className="pt-4 font-display text-2xl text-foreground">Shield verse</h2>
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

        <h2 className="pt-4 font-display text-2xl text-foreground">JRILICENSE verse</h2>
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

        <h2 className="pt-4 font-display text-2xl text-foreground">Honest progress</h2>
        <p>
          Most lines are still in build. The one clear commercial signal is{" "}
          <span className="text-foreground">JagX Connect</span> — about{" "}
          <span className="text-gold">₦195,250</span> in its first year. Opening capital for the
          companies is confidential and is not listed on this site.
        </p>

        <h2 className="pt-4 font-display text-2xl text-foreground">Expansion</h2>
        <p>
          Nigeria first, then Burkina Faso, Sierra Leone, South Africa, and twelve further priority
          markets — Ghana, Côte d’Ivoire, Senegal, Kenya, Rwanda, Uganda, Tanzania, Ethiopia, Egypt,
          Morocco, Botswana, Namibia — through 2035–2045.
        </p>

        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground/70">
          JagX &amp; JRILICENSE · Official · 2026
        </p>
      </div>
    </div>
  );
}
