import { useIntersectionAnimate } from "../hooks/useIntersectionAnimate";

const types = [
  {
    name: "Estelares",
    mass: "5–100 M☉",
    desc: "Formados por el colapso de estrellas masivas al final de su ciclo de vida.",
    color: "border-primary/40",
  },
  {
    name: "Intermedios",
    mass: "100–10⁵ M☉",
    desc: "Masa intermedia. Podrían ser el vínculo entre los estelares y los supermásivos.",
    color: "border-accent/40",
  },
  {
    name: "Supermásivos",
    mass: "10⁶–10¹⁰ M☉",
    desc: "Habitan los centros de galaxias. Sus orígenes aún son objeto de investigación activa.",
    color: "border-primary/60",
  },
  {
    name: "Primordiales",
    mass: "Variable",
    desc: "Hipotéticos. Habrían surgido del Big Bang a partir de fluctuaciones de densidad extrema.",
    color: "border-accent/60",
  },
];

const ANIM = {
  opacity: 0,
  transform: "translateY(20px)",
  transition: "opacity 0.6s ease, transform 0.6s ease",
};

/** Scientific diagram of a black hole with labeled zones */
function BlackHoleDiagramSVG() {
  return (
    <svg
      viewBox="0 0 500 500"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-label="Diagrama científico de un agujero negro con horizonte de eventos y disco de acreción"
    >
      <title>Diagrama científico de un agujero negro</title>
      <defs>
        <radialGradient id="bhd-bg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="oklch(0.12 0.05 280)" />
          <stop offset="100%" stopColor="oklch(0.06 0 0)" />
        </radialGradient>
        <radialGradient id="bhd-disk" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="oklch(0.06 0 0)" />
          <stop offset="35%" stopColor="oklch(0.78 0.28 43)" />
          <stop offset="60%" stopColor="oklch(0.62 0.22 280 / 0.8)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="bhd-photon" cx="50%" cy="50%" r="50%">
          <stop offset="72%" stopColor="transparent" />
          <stop offset="82%" stopColor="oklch(0.92 0.22 55 / 0.9)" />
          <stop offset="90%" stopColor="oklch(0.88 0.18 50 / 0.7)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <filter id="bhd-glow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="bhd-blur" x="-20%" y="-80%" width="140%" height="260%">
          <feGaussianBlur stdDeviation="5" />
        </filter>
      </defs>

      {/* Background */}
      <rect width="500" height="500" fill="url(#bhd-bg)" rx="16" />

      {/* Accretion disk glow background */}
      <ellipse
        cx="250"
        cy="250"
        rx="190"
        ry="46"
        fill="oklch(0.68 0.24 43 / 0.18)"
        filter="url(#bhd-blur)"
      />

      {/* Disk — outer */}
      <ellipse
        cx="250"
        cy="250"
        rx="185"
        ry="40"
        fill="none"
        stroke="oklch(0.72 0.26 43 / 0.5)"
        strokeWidth="22"
        filter="url(#bhd-blur)"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 250 250"
          to="360 250 250"
          dur="25s"
          repeatCount="indefinite"
        />
      </ellipse>

      {/* Disk — inner hot */}
      <ellipse
        cx="250"
        cy="250"
        rx="145"
        ry="30"
        fill="none"
        stroke="oklch(0.85 0.26 50 / 0.7)"
        strokeWidth="14"
        filter="url(#bhd-blur)"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 250 250"
          to="-360 250 250"
          dur="15s"
          repeatCount="indefinite"
        />
      </ellipse>

      {/* Photon sphere */}
      <circle cx="250" cy="250" r="112" fill="url(#bhd-photon)" />
      <circle
        cx="250"
        cy="250"
        r="112"
        fill="none"
        stroke="oklch(0.9 0.18 52 / 0.6)"
        strokeWidth="3"
        filter="url(#bhd-glow)"
      >
        <animate
          attributeName="stroke-opacity"
          values="0.4;0.8;0.4"
          dur="4s"
          repeatCount="indefinite"
        />
      </circle>

      {/* Shadow over lower disk */}
      <ellipse
        cx="250"
        cy="260"
        rx="145"
        ry="36"
        fill="oklch(0.05 0 0 / 0.92)"
      />

      {/* Event horizon */}
      <circle cx="250" cy="250" r="88" fill="oklch(0.02 0 0)" />

      {/* Gravitational lensing arc */}
      <ellipse
        cx="250"
        cy="210"
        rx="93"
        ry="15"
        fill="none"
        stroke="oklch(0.88 0.2 52 / 0.5)"
        strokeWidth="4"
        filter="url(#bhd-glow)"
      >
        <animate
          attributeName="stroke-opacity"
          values="0.3;0.6;0.3"
          dur="5s"
          repeatCount="indefinite"
        />
      </ellipse>

      {/* Relativistic jet top */}
      <polygon
        points="250,162 238,100 262,100"
        fill="oklch(0.65 0.22 280 / 0.5)"
        filter="url(#bhd-glow)"
      >
        <animate
          attributeName="fill-opacity"
          values="0.4;0.75;0.4"
          dur="3s"
          repeatCount="indefinite"
        />
      </polygon>

      {/* Relativistic jet bottom */}
      <polygon
        points="250,338 238,400 262,400"
        fill="oklch(0.62 0.20 280 / 0.4)"
        filter="url(#bhd-glow)"
      >
        <animate
          attributeName="fill-opacity"
          values="0.3;0.6;0.3"
          dur="3.5s"
          repeatCount="indefinite"
        />
      </polygon>

      {/* Labels */}
      <text
        x="360"
        y="195"
        fontFamily="monospace"
        fontSize="11"
        fill="oklch(0.72 0.26 43)"
        textAnchor="start"
      >
        Disco de acreción
      </text>
      <line
        x1="358"
        y1="197"
        x2="310"
        y2="232"
        stroke="oklch(0.72 0.26 43 / 0.4)"
        strokeWidth="1"
        strokeDasharray="3 3"
      />

      <text
        x="360"
        y="255"
        fontFamily="monospace"
        fontSize="11"
        fill="oklch(0.9 0.18 52)"
        textAnchor="start"
      >
        Esfera de fotones
      </text>
      <line
        x1="358"
        y1="253"
        x2="340"
        y2="250"
        stroke="oklch(0.9 0.18 52 / 0.4)"
        strokeWidth="1"
        strokeDasharray="3 3"
      />

      <text
        x="130"
        y="295"
        fontFamily="monospace"
        fontSize="11"
        fill="oklch(0.62 0.22 280)"
        textAnchor="end"
      >
        Horizonte de eventos
      </text>
      <line
        x1="133"
        y1="293"
        x2="163"
        y2="270"
        stroke="oklch(0.62 0.22 280 / 0.4)"
        strokeWidth="1"
        strokeDasharray="3 3"
      />

      <text
        x="250"
        y="252"
        fontFamily="monospace"
        fontSize="10"
        fill="oklch(0.5 0 0)"
        textAnchor="middle"
      >
        Singularidad
      </text>

      <text
        x="250"
        y="480"
        fontFamily="monospace"
        fontSize="10"
        fill="oklch(0.45 0 0)"
        textAnchor="middle"
      >
        Representación científica · NASA/ESA
      </text>
    </svg>
  );
}

export default function WhatAreSection() {
  const sectionRef = useIntersectionAnimate(120, 0.15);

  return (
    <section
      id="que-son"
      ref={sectionRef}
      className="py-24 bg-background relative overflow-hidden"
      data-ocid="what-are.section"
    >
      {/* Decorative glow */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.62 0.22 280 / 0.08) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p
              className="text-xs font-mono text-accent uppercase tracking-[0.3em] mb-3"
              data-animate
              style={ANIM}
            >
              01 / Definición
            </p>
            <h2
              className="font-display font-bold text-4xl sm:text-5xl text-glow-primary mb-6 leading-tight"
              data-animate
              style={ANIM}
            >
              ¿Qué Son los
              <br />
              Agujeros Negros?
            </h2>

            <p
              className="font-body text-muted-foreground leading-relaxed mb-5"
              data-animate
              style={ANIM}
            >
              Un agujero negro es una{" "}
              <span className="text-foreground font-medium">
                región del espacio-tiempo
              </span>{" "}
              donde la gravedad es tan intensa que nada — ni siquiera la luz —
              puede escapar una vez que cruza el llamado{" "}
              <span className="text-accent font-medium">
                horizonte de eventos
              </span>
              , el punto de no retorno.
            </p>

            <p
              className="font-body text-muted-foreground leading-relaxed mb-5"
              data-animate
              style={ANIM}
            >
              En su centro existe una{" "}
              <span className="text-primary font-medium">singularidad</span>: un
              punto de densidad matemáticamente infinita donde las leyes
              conocidas de la física se rompen. El disco de acreción — materia
              cayendo en espiral hacia el agujero negro — brilla con intensidad
              extrema, generando los objetos más luminosos del universo.
            </p>

            {/* NASA quote */}
            <blockquote
              className="glow-border rounded-lg p-4 bg-card/40 italic text-muted-foreground text-sm"
              data-animate
              style={ANIM}
            >
              <span className="text-accent font-mono text-xs not-italic block mb-2">
                — NASA
              </span>
              "Un agujero negro no es realmente un hoyo en el espacio. Es una
              enorme cantidad de materia comprimida en un espacio muy pequeño."
            </blockquote>
          </div>

          {/* Diagram */}
          <div
            data-animate
            style={{
              ...ANIM,
              transition: "opacity 0.8s ease, transform 0.8s ease",
            }}
          >
            <div className="relative rounded-2xl overflow-hidden glow-border aspect-square">
              <BlackHoleDiagramSVG />
            </div>
          </div>
        </div>

        {/* Types grid */}
        <div className="mt-20">
          <h3
            className="font-display font-semibold text-2xl text-center text-foreground mb-10"
            data-animate
            style={ANIM}
          >
            Tipos de Agujeros Negros
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {types.map((t, i) => (
              <div
                key={t.name}
                className={`rounded-xl p-5 bg-card/50 border ${t.color} hover:bg-card transition-smooth`}
                data-animate
                data-ocid={`what-are.type.${i + 1}`}
                style={ANIM}
              >
                <p className="font-mono text-xs text-accent uppercase tracking-wider mb-2">
                  {t.mass}
                </p>
                <h4 className="font-display font-bold text-foreground text-lg mb-2">
                  {t.name}
                </h4>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
