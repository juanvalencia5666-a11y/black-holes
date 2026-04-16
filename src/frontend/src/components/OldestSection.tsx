import { Star } from "lucide-react";
import { useIntersectionAnimate } from "../hooks/useIntersectionAnimate";

const blackHoles = [
  {
    name: "CAPERS-LRD-z9",
    age: "13,300 millones de años",
    mass: "38 millones M☉",
    discovery: "Telescopio James Webb, 2024",
    desc: "El agujero negro más antiguo conocido. Existía cuando el universo tenía apenas 600 millones de años. Descubierto en 2024 por el JWST.",
    highlight: true,
    badge: "EL MÁS ANTIGUO",
  },
  {
    name: "Quásar J0313-1806",
    age: "13,030 millones de años",
    mass: "1,600 millones M☉",
    discovery: "Magellan Baade Telescope, 2021",
    desc: "Anteriormente el más antiguo conocido. Existía cuando el universo tenía solo 670 millones de años, un enigma para los modelos de formación.",
    highlight: false,
    badge: "ANTES EL CAMPEÓN",
  },
  {
    name: "Sagitario A*",
    age: "~13,000 millones de años",
    mass: "4.1 millones M☉",
    discovery: "NASA, Event Horizon Telescope, 2022",
    desc: "El agujero negro supermásivo en el centro exacto de nuestra Vía Láctea. Primera imagen directa capturada en 2022.",
    highlight: false,
    badge: "NUESTRO CENTRO",
  },
];

const ANIM = {
  opacity: 0,
  transform: "translateY(20px)",
  transition: "opacity 0.6s ease, transform 0.6s ease",
};

/** SVG: M87* first real image recreation (ring of light around dark center) */
function M87SVG() {
  return (
    <svg
      viewBox="0 0 700 380"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-label="Recreación artística de M87* — primera imagen real de un agujero negro capturada por el Event Horizon Telescope en 2019"
    >
      <title>
        Recreación artística de M87 primera imagen real de un agujero negro
      </title>
      <defs>
        <radialGradient id="m87-bg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="oklch(0.1 0.04 280)" />
          <stop offset="100%" stopColor="oklch(0.06 0 0)" />
        </radialGradient>
        {/* The famous asymmetric bright ring */}
        <radialGradient id="m87-ring" cx="50%" cy="35%" r="60%">
          <stop offset="0%" stopColor="oklch(0.95 0.25 55)" />
          <stop offset="30%" stopColor="oklch(0.82 0.28 43)" />
          <stop offset="60%" stopColor="oklch(0.62 0.22 25 / 0.6)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="m87-shadow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="oklch(0.02 0 0)" />
          <stop offset="80%" stopColor="oklch(0.03 0 0)" />
          <stop offset="100%" stopColor="oklch(0.06 0 0 / 0)" />
        </radialGradient>
        <filter id="m87-blur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="14" />
        </filter>
        <filter id="m87-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="6" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect width="700" height="380" fill="url(#m87-bg)" />

      {/* Outer cosmic haze */}
      <circle
        cx="350"
        cy="190"
        r="160"
        fill="oklch(0.55 0.18 43 / 0.08)"
        filter="url(#m87-blur)"
      />

      {/* The bright ring — asymmetric (brighter bottom-left, dimmer top-right like EHT) */}
      <circle
        cx="350"
        cy="190"
        r="100"
        fill="none"
        stroke="oklch(0.88 0.26 52)"
        strokeWidth="30"
        filter="url(#m87-blur)"
      />
      {/* Brightest region — bottom-left quadrant (as in real EHT image) */}
      <path
        d="M 350 190 m -100 0 a 100 100 0 0 0 70 71"
        fill="none"
        stroke="oklch(0.95 0.28 55)"
        strokeWidth="40"
        filter="url(#m87-blur)"
        strokeLinecap="round"
      />

      {/* Secondary glow ring */}
      <circle
        cx="350"
        cy="190"
        r="100"
        fill="none"
        stroke="oklch(0.75 0.24 43 / 0.5)"
        strokeWidth="8"
        filter="url(#m87-glow)"
      >
        <animate
          attributeName="stroke-opacity"
          values="0.35;0.65;0.35"
          dur="5s"
          repeatCount="indefinite"
        />
      </circle>

      {/* Black shadow (event horizon silhouette) */}
      <circle cx="350" cy="190" r="82" fill="url(#m87-shadow)" />
      <circle cx="350" cy="190" r="70" fill="oklch(0.02 0 0)" />

      {/* Caption */}
      <text
        x="350"
        y="355"
        fontFamily="monospace"
        fontSize="12"
        fill="oklch(0.55 0 0)"
        textAnchor="middle"
      >
        M87* — Primera Imagen Real · Event Horizon Telescope Collaboration, 2019
      </text>
      <text
        x="350"
        y="370"
        fontFamily="monospace"
        fontSize="10"
        fill="oklch(0.4 0 0)"
        textAnchor="middle"
      >
        Recreación artística · CC BY 4.0
      </text>
    </svg>
  );
}

export default function OldestSection() {
  const sectionRef = useIntersectionAnimate(140, 0.12);

  return (
    <section
      id="el-mas-antiguo"
      ref={sectionRef}
      className="py-24 bg-background relative overflow-hidden"
      data-ocid="oldest.section"
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.62 0.22 280 / 0.05) 0%, transparent 65%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p
            className="text-xs font-mono text-accent uppercase tracking-[0.3em] mb-3"
            data-animate
            style={ANIM}
          >
            03 / Antigüedad
          </p>
          <h2
            className="font-display font-bold text-4xl sm:text-5xl text-glow-primary mb-4"
            data-animate
            style={ANIM}
          >
            El Más Antiguo
          </h2>
          <p
            className="font-body text-muted-foreground max-w-2xl mx-auto"
            data-animate
            style={ANIM}
          >
            El universo tiene 13,800 millones de años. Estos agujeros negros
            existían cuando todo era joven.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {blackHoles.map((bh, i) => (
            <div
              key={bh.name}
              className={`relative rounded-2xl p-6 flex flex-col gap-4 transition-smooth ${
                bh.highlight
                  ? "bg-card glow-border"
                  : "bg-card/60 border border-border hover:border-primary/40"
              }`}
              data-animate
              data-ocid={`oldest.card.${i + 1}`}
              style={ANIM}
            >
              {bh.highlight && (
                <div className="absolute -top-3 left-4">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-accent text-xs font-mono font-bold text-background uppercase tracking-wider">
                    <Star className="w-3 h-3" />
                    {bh.badge}
                  </span>
                </div>
              )}
              {!bh.highlight && (
                <span className="inline-block px-2 py-0.5 rounded text-xs font-mono text-muted-foreground border border-border w-fit">
                  {bh.badge}
                </span>
              )}
              <h3
                className={`font-display font-bold text-xl ${bh.highlight ? "text-glow-accent" : "text-foreground"}`}
              >
                {bh.name}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-lg bg-background/60 p-3">
                  <p className="font-mono text-xs text-muted-foreground mb-1">
                    Antigüedad
                  </p>
                  <p className="font-mono text-sm text-accent font-bold">
                    {bh.age}
                  </p>
                </div>
                <div className="rounded-lg bg-background/60 p-3">
                  <p className="font-mono text-xs text-muted-foreground mb-1">
                    Masa
                  </p>
                  <p className="font-mono text-sm text-primary font-bold">
                    {bh.mass}
                  </p>
                </div>
              </div>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {bh.desc}
              </p>
              <p className="font-mono text-xs text-muted-foreground/60 mt-auto">
                Descubierto: {bh.discovery}
              </p>
            </div>
          ))}
        </div>

        <div
          className="grid lg:grid-cols-2 gap-10 items-center"
          data-animate
          style={{
            ...ANIM,
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <div className="relative rounded-2xl overflow-hidden glow-border">
            <M87SVG />
          </div>
          <div>
            <h3 className="font-display font-bold text-2xl text-glow-accent mb-4">
              La Primera Fotografía de la Historia
            </h3>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              El 10 de abril de 2019, el{" "}
              <span className="text-foreground font-medium">
                Event Horizon Telescope (EHT)
              </span>{" "}
              publicó la primera imagen real de un agujero negro: M87*, ubicado
              a 55 millones de años luz.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              Para lograrlo, se sincronizaron{" "}
              <span className="text-accent font-medium">
                ocho radiotelescopios
              </span>{" "}
              distribuidos por todo el planeta, creando efectivamente un
              telescopio del tamaño de la Tierra.
            </p>
            <div className="flex gap-4 flex-wrap">
              <div className="rounded-lg glow-border bg-card/50 px-4 py-3 text-center">
                <p className="font-mono text-xl font-bold text-primary">
                  6.5×10⁹
                </p>
                <p className="font-mono text-xs text-muted-foreground mt-1">
                  masas solares M87*
                </p>
              </div>
              <div className="rounded-lg glow-accent bg-card/50 px-4 py-3 text-center">
                <p className="font-mono text-xl font-bold text-accent">
                  55 MLA
                </p>
                <p className="font-mono text-xs text-muted-foreground mt-1">
                  años luz de distancia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
