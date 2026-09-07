import { createFileRoute, Link } from "@tanstack/react-router";
import { Kicker } from "../components/site-chrome";
import { getRequestOrigin } from "../lib/origin.functions";
import { socialMeta } from "../lib/social-meta";
import kitFull from "../assets/kit-full.png";
import kitWardrobe from "../assets/kit-wardrobe.png";
import robotReal from "../assets/robot-real.png";
import carReal from "../assets/car-real.png";
import blueprint from "../assets/blueprint.jpg";

export const Route = createFileRoute("/military")({
  loader: async () => ({ origin: await getRequestOrigin() }),
  head: ({ loaderData }) => ({
    meta: socialMeta({
      origin: loaderData?.origin ?? "",
      path: "/military",
      title: "JagX Intelligent Military — Protection for Africa | JagX & JRILICENSE",
      description:
        "JagX Intelligent Military is not one state's private force. C4I, secure communications, security dress, operational kit and doctrine for continental protection across Africa.",
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
        Not one state&apos;s force — technology for the protection of Africa
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
        JagX Intelligent Military sits under Shield. We build systems, standards and equipment African
        institutions can share: command-and-control building blocks, secure links, training paths,
        security dress and operational kit designed for African climates. Human oversight is
        non-negotiable.
      </p>

      <figure className="card-lift mt-10 overflow-hidden rounded-md">
        <img
          src={blueprint}
          alt="Systems blueprint related to mobility and security programmes"
          className="w-full object-cover"
          loading="lazy"
        />
        <figcaption className="border-t border-border p-4 font-mono text-[11px] text-muted-foreground">
          Engineering intent across mobility, sensing and field systems — owned by JagX &amp; JRILICENSE.
        </figcaption>
      </figure>

      <article className="mt-12 max-w-3xl space-y-5 text-[17px] leading-8 text-muted-foreground">
        <h2 className="font-display text-2xl text-foreground">What it is</h2>
        <p>
          Intelligent Military is a technology and doctrine programme, not a private army and not locked
          to a single capital. The goal is interoperable capability: countries and regional bodies can
          adopt modules without surrendering sovereignty or data residency preferences.
        </p>

        <h2 className="pt-4 font-display text-2xl text-foreground">C4I building blocks</h2>
        <p>
          Command, control, communications, computers and intelligence — delivered as modular software
          and hardware interfaces. Secure messaging, situational awareness layers, and audit trails so
          every significant action can be reviewed. African data residency is preferred wherever law and
          infrastructure allow.
        </p>

        <h2 className="pt-4 font-display text-2xl text-foreground">Security dress</h2>
        <p>
          Modular uniform family for heat and dust: base layers, optional ballistic or cut-resistant
          panels, power and data conduits for body-worn sensors, high-visibility or low-profile finishes.
          Every authorised garment carries a discrete authenticity tag linked to Shield Identity so fakes
          are harder to pass in the field.
        </p>

        <h2 className="pt-4 font-display text-2xl text-foreground">Operational shirts &amp; soft kit</h2>
        <p>
          Daily wear for security, logistics and field engineering — quick-dry fabric, subtle reflective
          elements, radio and earpiece routing, optional RFID/NFC pockets. Cuts for real local body
          distributions, male and female.
        </p>

        <h2 className="pt-4 font-display text-2xl text-foreground">Robotics &amp; mobility support</h2>
        <p>
          Household and light-duty robotics share sensing ideas with field support concepts. Vehicle
          programmes (Horizon and domestic autonomy) remain civilian products first; any security use is
          institutional, supervised, and licensed under JRILICENSE rules.
        </p>

        <h2 className="pt-4 font-display text-2xl text-foreground">Human oversight</h2>
        <p>
          Autonomous or assisted systems in this programme require clear human authority for force and for
          high-impact decisions. We do not market unsupervised lethal autonomy. Training and doctrine are
          part of the package, not an afterthought.
        </p>

        <h2 className="pt-4 font-display text-2xl text-foreground">Continental path</h2>
        <p>
          Nigeria first, then partners across Burkina Faso, Sierra Leone, South Africa and twelve further
          priority countries through 2035–2045. Expansion is institutional and legal — not a parade of
          hardware without policy.
        </p>
      </article>

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {[
          { src: kitFull, cap: "Complete kit direction — formal & field" },
          { src: kitWardrobe, cap: "Wardrobe & soft kit language" },
          { src: robotReal, cap: "Robotics concept under house mark" },
          { src: carReal, cap: "Mobility platform — service stays with us" },
        ].map((img) => (
          <figure key={img.cap} className="card-lift overflow-hidden rounded-md">
            <img src={img.src} alt={img.cap} loading="lazy" className="h-64 w-full object-cover" />
            <figcaption className="border-t border-border p-3 font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
              {img.cap}
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Inline blueprint SVGs */}
      <div className="mt-16">
        <Kicker>Schematic blueprints</Kicker>
        <h2 className="mt-4 font-display text-3xl text-foreground">Dress, shirt, robot, scent module</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <BlueprintCard title="Security dress — modular layers">
            <svg viewBox="0 0 320 200" className="h-auto w-full" aria-label="Security dress blueprint">
              <rect width="320" height="200" fill="#0c0c0c" />
              <g stroke="#c9a227" strokeWidth="1" fill="none">
                <path d="M120 40 L160 30 L200 40 L210 90 L200 160 L120 160 L110 90 Z" />
                <path d="M130 70 L190 70" />
                <path d="M125 100 L195 100" />
                <circle cx="160" cy="55" r="8" />
                <text x="16" y="24" fill="#c9a227" fontSize="10" fontFamily="monospace">JX-SD-01</text>
                <text x="16" y="188" fill="#888" fontSize="8" fontFamily="monospace">BASE · PANEL · SENSOR CONDUIT</text>
              </g>
            </svg>
          </BlueprintCard>
          <BlueprintCard title="Operational shirt — routing">
            <svg viewBox="0 0 320 200" className="h-auto w-full" aria-label="Operational shirt blueprint">
              <rect width="320" height="200" fill="#0c0c0c" />
              <g stroke="#c9a227" strokeWidth="1" fill="none">
                <path d="M110 35 L160 28 L210 35 L220 50 L210 150 L110 150 L100 50 Z" />
                <path d="M140 50 L140 140" strokeDasharray="4 3" />
                <path d="M180 50 L180 140" strokeDasharray="4 3" />
                <rect x="145" y="85" width="30" height="20" />
                <text x="16" y="24" fill="#c9a227" fontSize="10" fontFamily="monospace">JX-OS-02</text>
                <text x="16" y="188" fill="#888" fontSize="8" fontFamily="monospace">RADIO ROUTE · RFID POCKET · Q-DRY</text>
              </g>
            </svg>
          </BlueprintCard>
          <BlueprintCard title="Field support robot — joints">
            <svg viewBox="0 0 320 200" className="h-auto w-full" aria-label="Robot blueprint">
              <rect width="320" height="200" fill="#0c0c0c" />
              <g stroke="#c9a227" strokeWidth="1" fill="none">
                <circle cx="160" cy="40" r="18" />
                <rect x="145" y="58" width="30" height="50" />
                <line x1="145" y1="70" x2="110" y2="100" />
                <line x1="175" y1="70" x2="210" y2="100" />
                <line x1="150" y1="108" x2="130" y2="160" />
                <line x1="170" y1="108" x2="190" y2="160" />
                <circle cx="110" cy="100" r="6" />
                <circle cx="210" cy="100" r="6" />
                <text x="16" y="24" fill="#c9a227" fontSize="10" fontFamily="monospace">JX-RB-03</text>
                <text x="16" y="188" fill="#888" fontSize="8" fontFamily="monospace">SENSOR HEAD · LIMB RINGS · SUPERVISED</text>
              </g>
            </svg>
          </BlueprintCard>
          <BlueprintCard title="Cabin scent module">
            <svg viewBox="0 0 320 200" className="h-auto w-full" aria-label="Scent module blueprint">
              <rect width="320" height="200" fill="#0c0c0c" />
              <g stroke="#c9a227" strokeWidth="1" fill="none">
                <rect x="80" y="60" width="160" height="80" rx="6" />
                <circle cx="120" cy="100" r="20" />
                <path d="M140 100 L200 100" />
                <rect x="200" y="85" width="30" height="30" />
                <text x="16" y="24" fill="#c9a227" fontSize="10" fontFamily="monospace">JX-SC-04</text>
                <text x="16" y="188" fill="#888" fontSize="8" fontFamily="monospace">SEALED RESERVOIR · FILTER · SERVICE LOCK</text>
              </g>
            </svg>
          </BlueprintCard>
        </div>
      </div>

      <div className="mt-12 flex flex-wrap gap-3">
        <Link
          to="/blueprint"
          className="rounded-sm border border-gold/50 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
        >
          All blueprints
        </Link>
        <Link
          to="/products"
          className="rounded-sm border border-border px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
        >
          Product slate
        </Link>
      </div>
    </div>
  );
}

function BlueprintCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="card-lift overflow-hidden rounded-md border border-border/60">
      <div className="border-b border-border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.15em] text-gold">
        {title}
      </div>
      {children}
    </div>
  );
}
