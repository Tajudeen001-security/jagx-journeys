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
        "About JagX & JRILICENSE. Founded 15 August 2022. Slogans, anthem, capital, expansion, and honest progress including JagX Connect first-year revenue.",
      image: "/og/home.jpg",
      type: "website",
    }),
    links: [{ rel: "canonical", href: "/writer" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "JagX & JRILICENSE",
          foundingDate: "2022-08-15",
        }),
      },
    ],
  }),
  component: AboutUs,
});

function AboutUs() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-14">
      <Kicker>About us</Kicker>
      <h1 className="mt-4 font-display text-4xl sm:text-6xl">JagX & JRILICENSE</h1>
      <p className="mt-5 leading-relaxed text-muted-foreground">
        We write and publish this site ourselves. Founded{" "}
        <span className="text-foreground">15 August 2022</span>. JRILICENSE established{" "}
        <span className="text-foreground">2025</span>. No leftover contractor credit. No external
        builder badge.
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

        <h2 className="pt-4 font-display text-2xl text-foreground">Anthem</h2>
        <div className="space-y-3 border-l-2 border-gold/40 pl-5 font-serif text-muted-foreground">
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
            No stranger hand shall write our fate;
            <br />
            We build the shield, we open the gate.
          </p>
          <p className="text-foreground italic">
            Stand, Africa. Stand with the mark of JX.
            <br />
            The future is licensed. The future is ours.
          </p>
        </div>

        <h2 className="pt-4 font-display text-2xl text-foreground">Honest progress</h2>
        <p>
          Most lines are still in build. The one clear commercial signal is{" "}
          <span className="text-foreground">JagX Connect</span> — about{" "}
          <span className="text-gold">₦195,250</span> in its first year. Everything else has not yet
          contributed to revenue.
        </p>
        <p>
          Starting capital for JagX in 2022 was lean (roughly ₦45–85 million). JRILICENSE in 2025
          needed a higher setup floor (about ₦180–350 million) for legal, IP, and compliance.
        </p>

        <h2 className="pt-4 font-display text-2xl text-foreground">Intelligent Military</h2>
        <p>
          JagX Intelligent Military sits under Shield. It is not a private army and not locked to one
          country. We build technology, doctrine, and equipment standards African states can share:
          C4I blocks, secure comms, training, security dress, and operational kit designed for African
          climates. Human oversight stays non-negotiable.
        </p>

        <h2 className="pt-4 font-display text-2xl text-foreground">Expansion</h2>
        <p>
          Nigeria first, then Burkina Faso, Sierra Leone, South Africa, and twelve further priority
          markets — Ghana, Côte d’Ivoire, Senegal, Kenya, Rwanda, Uganda, Tanzania, Ethiopia, Egypt,
          Morocco, Botswana, Namibia — through 2035–2045.
        </p>

        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground/70">
          JagX & JRILICENSE · Official · 2026
        </p>
      </div>
    </div>
  );
}
