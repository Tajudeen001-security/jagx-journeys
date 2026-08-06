import { createFileRoute } from "@tanstack/react-router";
import { Kicker } from "../components/site-chrome";
import { getRequestOrigin } from "../lib/origin.functions";
import { socialMeta } from "../lib/social-meta";
import founder1 from "../assets/founder-1.png";
import founder2 from "../assets/founder-2.png";
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
      title: "Gbadamosi Tajudeen — JagwaX, the Founder of JagX and JRILICENSE",
      description:
        "Gbadamosi Tajudeen Olajide, known as JagwaX, is the founder of JagX and JRILICENSE, JagX Vision, JagX AI, JagX Datas, the JagX AI API key system and jagx-buddy-connect.name.ng. He does not show his face.",
      image: "/og/founder.jpg",
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
          founder: true,
          worksFor: { "@type": "Organization", name: "JagX" },
        }),
      },
    ],
  }),
  component: Founder,
});

const VENTURES = [
  {
    name: "JagX",
    line: "Fragrance, mobility and lifestyle",
    image: jagxAi,
    body: "The house itself. Perfume at the entry, two autonomous vehicles above it, and an entire wardrobe of tailoring, leather and grooming carrying the same panther mark. Everything on the slate reported elsewhere on this site begins here.",
  },
  {
    name: "JRILICENSE",
    line: "Robotics",
    image: jagxDatas,
    body: "The robotics arm, responsible for the household humanoid staged under the 'Synergy Platform' board beside the cars. JagwaX runs it as a sibling of JagX rather than a subsidiary — one intelligence, two bodies.",
  },
  {
    name: "JagX Vision",
    line: "Jewellery authentication",
    image: jagxVision,
    body: "A scanning system for jewellery that tells you whether a stone or a setting is real or fake. It reads the piece and returns an authenticity report — the kind of verification that normally requires a lab and a week of waiting.",
  },
  {
    name: "JagX AI",
    line: "Artificial intelligence",
    image: jagxAi,
    body: "The intelligence layer underneath the rest of the portfolio. It is the same thinking that shows up in the vehicles' supervision interface and in the robot's sensing, exposed as a product in its own right.",
  },
  {
    name: "JagX Datas",
    line: "Backend platform",
    image: jagxDatas,
    body: "A backend system in the mould of Supabase — database, auth, storage and APIs in one place — built with security as the headline rather than the footnote. End-to-end encryption, hardened access control and audit logging are the pitch, not an add-on tier.",
  },
  {
    name: "JagX AI API Key System",
    line: "Developer infrastructure",
    image: jagxApi,
    body: "The key issuance and governance layer for JagX AI: generate keys, scope them, rate-limit them, watch usage in real time and revoke them instantly. It is the piece that turns the model into something other developers can safely build on.",
  },
  {
    name: "jagx-buddy-connect.name.ng",
    line: "Social platform",
    image: jagxBuddy,
    body: "A connection platform running on his own domain, and the most public-facing thing he has shipped so far. It is also the clearest signal of how he works: build the network, then build the products the network will buy.",
  },
];

function Founder() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <Kicker>The founder</Kicker>
      <div className="mt-6 grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <h1 className="font-display text-4xl leading-[1.05] sm:text-6xl">
            Gbadamosi Tajudeen, the man they call{" "}
            <span className="text-gold-grad">JagwaX</span>
          </h1>
          <p className="mt-5 text-[17px] leading-8 text-muted-foreground">
            He founded JagX and JRILICENSE, and he does not show his face. Every image of him that
            exists is the same arrangement: the head covered, the lower face covered, and only the
            eyes left in the light. It is deliberate, and for now it is not up for negotiation — the
            work is meant to arrive before the man does.
          </p>
        </div>
        <figure className="card-lift overflow-hidden rounded-md">
          <img
            src={founder1}
            alt="Gbadamosi Tajudeen, known as JagwaX, photographed with his head and face covered so only his eyes are visible"
            width={896}
            height={1152}
            className="h-[28rem] w-full object-cover object-top"
          />
          <figcaption className="border-t border-border px-4 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground/70">
            JagwaX · Portrait I · Navy tailoring, panther pin
          </figcaption>
        </figure>
      </div>

      <div className="mt-16 grid gap-10 md:grid-cols-2 md:items-center">
        <figure className="card-lift order-2 overflow-hidden rounded-md md:order-1">
          <img
            src={founder2}
            alt="Second concealed portrait of JagwaX in a black high-collar technical overcoat"
            width={896}
            height={1152}
            loading="lazy"
            className="h-[28rem] w-full object-cover object-top"
          />
          <figcaption className="border-t border-border px-4 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground/70">
            JagwaX · Portrait II · Black technical overcoat
          </figcaption>
        </figure>
        <div className="order-1 space-y-5 text-[17px] leading-8 text-muted-foreground md:order-2">
          <h2 className="font-display text-3xl text-foreground">Why the face stays hidden</h2>
          <p>
            Anonymity is a strategy as much as a preference. A founder who is not a face cannot be
            the story, and JagwaX would rather the panther mark be recognised before he is. When he
            is photographed the clothes change — a navy suit with a silver panther on the lapel in
            one frame, a black high-collar overcoat with bronze stitching in the next — but the
            covering does not. Only the eyes.
          </p>
          <p>
            He has said nothing publicly about when that ends. Reading the release schedule, the
            reasonable guess is that the reveal is being kept as an asset for the launch window
            rather than spent early.
          </p>
        </div>
      </div>

      <div className="mt-20">
        <Kicker>The portfolio</Kicker>
        <h2 className="mt-4 max-w-3xl font-display text-3xl sm:text-5xl">
          Seven ventures under one mark
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
          The perfume and the cars are the visible half. The other half is infrastructure — AI,
          a backend platform, an API key system and an authentication scanner — and it is the half
          that explains how one person expects to deliver the rest.
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
                  alt={`${v.name} brand visual`}
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
        Reported by Sandhya Ramesh · The Future · August 2026
      </p>
    </div>
  );
}
