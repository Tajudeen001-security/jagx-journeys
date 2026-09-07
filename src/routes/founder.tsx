import { createFileRoute } from "@tanstack/react-router";
import { Kicker } from "../components/site-chrome";
import { getRequestOrigin } from "../lib/origin.functions";
import { socialMeta } from "../lib/social-meta";
import jagxVision from "../assets/jagx-vision.jpg";
import jagxDatas from "../assets/jagx-datas.jpg";
import jagxAi from "../assets/jagx-ai.jpg";
import jagxApi from "../assets/jagx-api.jpg";
import jagxBuddy from "../assets/jagx-buddy.jpg";

export const Route = createFileRoute("/founder")({
  loader: async () => ({ origin: await getRequestOrigin() }),
  head: ({ loaderData }) => ({
    meta: socialMeta({
      origin: loaderData?.origin ?? "",
      path: "/founder",
      title: "Founder — Gbadamosi Tajudeen (JagwaX) | JagX & JRILICENSE",
      description:
        "Gbadamosi Tajudeen Olajide, known as JagwaX, founded JagX on 15 August 2022 and JRILICENSE in 2025.",
      image: "/og/home.jpg",
      type: "profile",
    }),
    links: [{ rel: "canonical", href: "/founder" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Gbadamosi Tajudeen Olajide",
          alternateName: "JagwaX",
          jobTitle: "Founder",
          worksFor: { "@type": "Organization", name: "JagX & JRILICENSE" },
        }),
      },
    ],
  }),
  component: Founder,
});

const VENTURES = [
  {
    name: "JagX",
    line: "House · founded 15 August 2022",
    image: jagxAi,
    body: "Fragrance, mobility, lifestyle and the wider stack. Everything on this site begins under the JagX mark.",
  },
  {
    name: "JRILICENSE",
    line: "Licensing & robotics · 2025",
    image: jagxDatas,
    body: "Licensing arm and robotics programme — sibling to JagX so products can be protected and commercialised without losing ownership.",
  },
  {
    name: "JagX Vision",
    line: "Jewellery authentication",
    image: jagxVision,
    body: "Scanning system that returns authenticity reports on stones and settings — a working instrument under the house mark.",
  },
  {
    name: "JagX AI",
    line: "Artificial intelligence",
    image: jagxAi,
    body: "Multi-agent intelligence for builders and institutions; free starter API keys; path to on-device models. Still largely in build for commercial scale.",
  },
  {
    name: "JagX Datas",
    line: "Backend platform",
    image: jagxDatas,
    body: "Database, auth, storage and APIs with security as the headline claim.",
  },
  {
    name: "JagX AI API Key System",
    line: "Developer infrastructure",
    image: jagxApi,
    body: "Key issuance, scope, rate limits, monitoring and revocation for safe external use of JagX AI.",
  },
  {
    name: "JagX Buddy Connect",
    line: "Social · live",
    image: jagxBuddy,
    body: "Secure social on jagx-buddy-connect.name.ng — first product line with real revenue (about ₦195,250 in year one).",
  },
];

function Founder() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <Kicker>The founder</Kicker>
      <div className="mt-6 max-w-3xl">
        <h1 className="font-display text-4xl leading-[1.05] sm:text-6xl">
          Gbadamosi Tajudeen, known as{" "}
          <span className="text-gold-grad">JagwaX</span>
        </h1>
        <p className="mt-5 text-[17px] leading-8 text-muted-foreground">
          Founder of JagX (15 August 2022) and JRILICENSE (2025). The work is meant to arrive with a
          clear mark — intelligence that stays home, security that travels the continent — from
          Nigeria outward across Africa.
        </p>
        <div className="mt-8 flex items-center gap-4 rounded-md border border-border bg-card/40 p-5">
          <img src="/logo.svg" alt="JagX" width={48} height={48} className="h-12 w-12" />
          <div>
            <p className="font-display text-xl text-gold-grad">JagX &amp; JRILICENSE</p>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Official founder page · no stock portraits
            </p>
          </div>
        </div>
      </div>

      <div className="mt-14 max-w-3xl space-y-5 text-[17px] leading-8 text-muted-foreground">
        <h2 className="font-display text-3xl text-foreground">Why the work comes first</h2>
        <p>
          The public face of the house is the panther mark and the product stack — AI, Connect,
          mobility, fragrance, robotics, Shield and Intelligent Military. Expansion is planned from
          Nigeria to Burkina Faso, Sierra Leone, South Africa and twelve further priority countries
          through 2035–2045.
        </p>
        <p>
          We invent under JagX. We license and protect under JRILICENSE. That is how the stack stays
          ours.
        </p>
        <p className="text-sm text-muted-foreground/80">
          Personal photographs will appear here only when you supply them. AI or stock faces are not
          used as the founder’s portrait.
        </p>
      </div>

      <div className="mt-20">
        <Kicker>The portfolio</Kicker>
        <h2 className="mt-4 max-w-3xl font-display text-3xl sm:text-5xl">Ventures under one mark</h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
          Perfume and cars are the visible half. Infrastructure — AI, backend, API keys, Connect — is
          how the rest gets delivered.
        </p>

        <div className="mt-12 space-y-14">
          {VENTURES.map((v, i) => (
            <article
              key={v.name}
              className={`grid items-center gap-8 md:grid-cols-2 ${i % 2 ? "md:[&>figure]:order-2" : ""}`}
            >
              <figure className="card-lift overflow-hidden rounded-md">
                <img
                  src={v.image}
                  alt={v.name}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="h-72 w-full object-cover"
                />
              </figure>
              <div>
                <p className="rule-label">{`${String(i + 1).padStart(2, "0")} · ${v.line}`}</p>
                <h3 className="mt-3 font-display text-3xl">{v.name}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">{v.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <p className="mt-16 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground/60">
        JagX &amp; JRILICENSE · Official · Founded 15 August 2022
      </p>
    </div>
  );
}
