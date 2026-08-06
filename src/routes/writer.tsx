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
      title: "Sandhya Ramesh — The Writer Behind The Future",
      description:
        "Sandhya Ramesh is the writer and publisher of The Future, the first outlet to report the unreleased JagX and JRILICENSE product slate and its 2032–2046 launch window.",
      image: "/og/home.jpg",
      type: "profile",
    }),
    links: [{ rel: "canonical", href: "/writer" }],

    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Sandhya Ramesh",
          jobTitle: "Writer and Publisher",
          worksFor: { "@type": "Organization", name: "The Future" },
        }),
      },
    ],
  }),
  component: Writer,
});

function Writer() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-14">
      <Kicker>The writer</Kicker>
      <h1 className="mt-4 font-display text-4xl sm:text-6xl">Sandhya Ramesh</h1>
      <p className="mt-5 leading-relaxed text-muted-foreground">
        I write and publish <span className="text-foreground">The Future</span>, and I built this
        site to put one story on the record before anyone else did: what JagX and JRILICENSE are
        making, what it will cost, and when it is expected to arrive.
      </p>

      <div className="mt-10 space-y-5 text-[17px] leading-8 text-muted-foreground">
        <h2 className="font-display text-2xl text-foreground">Why this exists</h2>
        <p>
          Most coverage of an unreleased product arrives after the launch date is announced, when
          the story has already been shaped for you. This is the opposite exercise. The slate
          described here does not begin reaching buyers until mid-2032 and may not be finished
          until 2046. Writing it now means writing it while it is still uncertain — which is the
          only time reporting is genuinely useful.
        </p>

        <h2 className="pt-4 font-display text-2xl text-foreground">Method</h2>
        <p>
          This report is assembled from an interview, from market chatter about pricing, and from a
          leaked engineering blueprint that supplied the vehicle's shape. Where a figure is a
          rumour, it is described as a rumour. Where a range is wide, the range is printed in full
          rather than narrowed for effect. Nothing here is presented as confirmed retail pricing,
          because none of it is.
        </p>

        <h2 className="pt-4 font-display text-2xl text-foreground">Standards</h2>
        <ul className="space-y-3">
          {[
            "Ranges are published as ranges. No single number is invented to look authoritative.",
            "Estimates are labelled as estimates, everywhere they appear.",
            "The blueprint is treated as an engineering intention, not a finished car.",
            "Corrections and updates are published on the page they affect.",
          ].map((t) => (
            <li key={t} className="flex gap-3">
              <span className="mt-3 h-px w-5 shrink-0 bg-gold/70" />
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <h2 className="pt-4 font-display text-2xl text-foreground">What comes next</h2>
        <p>
          More material is on its way to me, and this site will grow with it — deeper pieces on the
          fragrance ladder, on the parts collaboration, and on how the autonomy stack is being put
          together. Everything new is published here first.
        </p>
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground/70">
          Sandhya Ramesh · The Future · August 2026
        </p>
      </div>
    </div>
  );
}
