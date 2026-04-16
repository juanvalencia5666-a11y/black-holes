import { useIntersectionAnimate } from "../hooks/useIntersectionAnimate";

const events = [
  {
    year: "1783",
    title: "Estrellas Oscuras",
    person: "John Michell",
    desc: 'El geólogo inglés John Michell propone el concepto de "estrellas oscuras": objetos con gravedad tan intensa que ni la luz puede escapar. Pierre-Simon Laplace llega a la misma conclusión en 1796.',
    dotColor: "bg-primary",
    border: "border-primary/30",
  },
  {
    year: "1915",
    title: "Relatividad General",
    person: "Albert Einstein",
    desc: "Einstein publica su Teoría General de la Relatividad, describiendo la gravedad como curvatura del espacio-tiempo. Las ecuaciones contienen implícitamente la posibilidad de singularidades.",
    dotColor: "bg-accent",
    border: "border-accent/30",
  },
  {
    year: "1916",
    title: "Radio de Schwarzschild",
    person: "Karl Schwarzschild",
    desc: "Desde el frente ruso durante la Primera Guerra Mundial, Schwarzschild resuelve las ecuaciones de Einstein y calcula el radio crítico que describe el horizonte de eventos de un agujero negro.",
    dotColor: "bg-primary",
    border: "border-primary/30",
  },
  {
    year: "1974",
    title: "Radiación de Hawking",
    person: "Stephen Hawking",
    desc: "Hawking combina mecánica cuántica y relatividad general para demostrar que los agujeros negros emiten radiación térmica y eventualmente se evaporan — una de las mayores predicciones del siglo XX.",
    dotColor: "bg-accent",
    border: "border-accent/30",
  },
  {
    year: "1994",
    title: "Evidencia en M87",
    person: "Telescopio Hubble",
    desc: "El HST proporciona evidencia sólida de un agujero negro supermásivo en el núcleo de la galaxia M87, midiendo la velocidad orbital del gas y calculando una masa de miles de millones de masas solares.",
    dotColor: "bg-primary",
    border: "border-primary/30",
  },
  {
    year: "2015",
    title: "Ondas Gravitacionales",
    person: "LIGO / Virgo",
    desc: "LIGO detecta por primera vez las ondas gravitacionales producidas por la fusión de dos agujeros negros, confirmando directamente uno de los pilares de la relatividad general de Einstein.",
    dotColor: "bg-accent",
    border: "border-accent/30",
  },
  {
    year: "2019",
    title: "Primera Imagen Real",
    person: "Event Horizon Telescope",
    desc: "Una red global de 8 radiotelescopios captura la primera imagen directa de un agujero negro: M87*, con una masa de 6.5 mil millones de soles, a 55 millones de años luz.",
    dotColor: "bg-primary",
    border: "border-primary/30",
  },
  {
    year: "2022",
    title: "Sagitario A*",
    person: "NASA / EHT",
    desc: "NASA y el EHT revelan la primera imagen directa de Sagitario A*, el agujero negro en el centro de nuestra propia Vía Láctea.",
    dotColor: "bg-accent",
    border: "border-accent/30",
  },
  {
    year: "2024",
    title: "El Más Antiguo: CAPERS-LRD-z9",
    person: "Telescopio James Webb",
    desc: "El JWST descubre el agujero negro más antiguo conocido, activo cuando el universo tenía solo 600 millones de años, con 38 millones de masas solares.",
    dotColor: "bg-primary",
    border: "border-primary/30",
  },
];

const ANIM = {
  opacity: 0,
  transform: "translateY(20px)",
  transition: "opacity 0.6s ease, transform 0.6s ease",
};

/** Inline SVG illustration of gravitational wave signal */
function GravitationalWavesSVG() {
  return (
    <svg
      viewBox="0 0 700 260"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full"
      aria-label="Ilustración de la señal de ondas gravitacionales detectada por LIGO en 2015"
    >
      <title>Señal de ondas gravitacionales GW150914 detectada por LIGO</title>
      <defs>
        <linearGradient id="gw-bg" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="oklch(0.06 0 0)" />
          <stop offset="50%" stopColor="oklch(0.10 0.03 280)" />
          <stop offset="100%" stopColor="oklch(0.06 0 0)" />
        </linearGradient>
        <filter id="gw-glow" x="-10%" y="-50%" width="120%" height="200%">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="gw-blur-bg" x="-5%" y="-50%" width="110%" height="200%">
          <feGaussianBlur stdDeviation="8" />
        </filter>
      </defs>

      <rect width="700" height="260" fill="url(#gw-bg)" />

      {/* Grid lines */}
      {[50, 80, 110, 140, 170, 200, 230].map((y) => (
        <line
          key={y}
          x1="40"
          y1={y}
          x2="660"
          y2={y}
          stroke="oklch(0.2 0 0)"
          strokeWidth="0.5"
        />
      ))}
      {[100, 160, 220, 280, 340, 400, 460, 520, 580, 640].map((x) => (
        <line
          key={x}
          x1={x}
          y1="45"
          x2={x}
          y2="235"
          stroke="oklch(0.2 0 0)"
          strokeWidth="0.5"
        />
      ))}

      {/* Axes */}
      <line
        x1="40"
        y1="235"
        x2="660"
        y2="235"
        stroke="oklch(0.35 0 0)"
        strokeWidth="1"
      />
      <line
        x1="40"
        y1="45"
        x2="40"
        y2="235"
        stroke="oklch(0.35 0 0)"
        strokeWidth="1"
      />

      {/* Axis labels */}
      <text
        x="350"
        y="255"
        fontFamily="monospace"
        fontSize="10"
        fill="oklch(0.5 0 0)"
        textAnchor="middle"
      >
        Tiempo (s)
      </text>
      <text
        x="15"
        y="140"
        fontFamily="monospace"
        fontSize="10"
        fill="oklch(0.5 0 0)"
        textAnchor="middle"
        transform="rotate(-90, 15, 140)"
      >
        Tensión
      </text>

      {/* Time axis labels */}
      {["-0.4", "-0.3", "-0.2", "-0.1", "0.0", "0.1", "0.2", "0.3", "0.4"].map(
        (t, i) => (
          <text
            key={t}
            x={100 + i * 62}
            y="248"
            fontFamily="monospace"
            fontSize="8"
            fill="oklch(0.4 0 0)"
            textAnchor="middle"
          >
            {t}
          </text>
        ),
      )}

      {/* Flat baseline (before merger) */}
      <path
        d="M 45 140 L 280 140"
        fill="none"
        stroke="oklch(0.62 0.22 280 / 0.5)"
        strokeWidth="1.5"
      />

      {/* Inspiral phase — growing oscillation */}
      <path
        d={`M 280 140
          C 285 138, 290 136, 295 134
          C 300 132, 305 130, 310 128
          C 315 126, 320 123, 325 120
          C 330 117, 335 114, 340 111
          C 345 108, 350 105, 355 101
          C 360 97, 365 93, 370 89
          C 375 85, 380 80, 385 75
          C 390 70, 395 65, 400 59
        `}
        fill="none"
        stroke="oklch(0.62 0.22 280 / 0.6)"
        strokeWidth="1.5"
        filter="url(#gw-blur-bg)"
      />
      <path
        d={`M 280 140
          C 285 142, 290 144, 295 146
          C 300 148, 305 150, 310 152
          C 315 154, 320 157, 325 160
          C 330 163, 335 166, 340 169
          C 345 172, 350 175, 355 179
          C 360 183, 365 187, 370 191
          C 375 195, 380 200, 385 205
          C 390 210, 395 215, 400 221
        `}
        fill="none"
        stroke="oklch(0.62 0.22 280 / 0.6)"
        strokeWidth="1.5"
        filter="url(#gw-blur-bg)"
      />

      {/* Merger peak — chirp signal (the famous GW150914) */}
      <path
        d={`M 395 80
          C 400 55, 405 45, 408 55
          C 411 65, 413 95, 415 115
          C 417 135, 420 200, 422 215
          C 424 230, 426 215, 428 195
          C 430 175, 432 140, 434 120
          C 436 100, 438 85, 440 78
          C 442 71, 444 75, 446 82
          C 448 89, 450 100, 452 108
          C 454 116, 456 122, 458 126
          C 460 130, 462 134, 464 137
          C 466 140, 468 142, 470 141
          C 472 140, 474 139, 476 140
        `}
        fill="none"
        stroke="oklch(0.78 0.26 43)"
        strokeWidth="2.5"
        filter="url(#gw-glow)"
      />

      {/* Ringdown — damped oscillation */}
      <path
        d={`M 476 140
          C 480 136, 483 133, 486 136
          C 489 139, 492 144, 496 143
          C 500 142, 504 138, 508 139
          C 512 140, 516 142, 520 141
          C 524 140, 528 139, 532 140
          L 660 140
        `}
        fill="none"
        stroke="oklch(0.62 0.22 280 / 0.5)"
        strokeWidth="1.5"
      />

      {/* Glowing merger area */}
      <rect
        x="393"
        y="50"
        width="90"
        height="180"
        fill="oklch(0.72 0.26 43 / 0.04)"
        rx="4"
      />

      {/* Annotation: merger */}
      <line
        x1="438"
        y1="46"
        x2="438"
        y2="58"
        stroke="oklch(0.72 0.26 43 / 0.5)"
        strokeWidth="1"
        strokeDasharray="3 2"
      />
      <text
        x="438"
        y="42"
        fontFamily="monospace"
        fontSize="9"
        fill="oklch(0.72 0.26 43)"
        textAnchor="middle"
      >
        Fusión
      </text>

      {/* Annotation: inspiral */}
      <text
        x="340"
        y="55"
        fontFamily="monospace"
        fontSize="9"
        fill="oklch(0.62 0.22 280)"
        textAnchor="middle"
      >
        Inspiral
      </text>

      {/* Annotation: ringdown */}
      <text
        x="560"
        y="128"
        fontFamily="monospace"
        fontSize="9"
        fill="oklch(0.62 0.22 280)"
        textAnchor="middle"
      >
        Ringdown
      </text>

      {/* Caption */}
      <text
        x="350"
        y="15"
        fontFamily="monospace"
        fontSize="11"
        fill="oklch(0.7 0.22 280)"
        textAnchor="middle"
        fontWeight="bold"
      >
        GW150914 — Primera Detección de Ondas Gravitacionales
      </text>
      <text
        x="350"
        y="28"
        fontFamily="monospace"
        fontSize="9"
        fill="oklch(0.45 0 0)"
        textAnchor="middle"
      >
        LIGO Scientific Collaboration, 14 de septiembre de 2015 · Dominio
        público
      </text>
    </svg>
  );
}

export default function HistorySection() {
  const sectionRef = useIntersectionAnimate(100, 0.08);

  return (
    <section
      id="historia"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
      style={{ background: "oklch(0.09 0 0)" }}
      data-ocid="history.section"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p
            className="text-xs font-mono text-accent uppercase tracking-[0.3em] mb-3"
            data-animate
            style={ANIM}
          >
            06 / Historia
          </p>
          <h2
            className="font-display font-bold text-4xl sm:text-5xl text-glow-primary mb-4"
            data-animate
            style={ANIM}
          >
            Historia de los Descubrimientos
          </h2>
          <p
            className="font-body text-muted-foreground max-w-xl mx-auto"
            data-animate
            style={ANIM}
          >
            Desde una idea teórica en 1783 hasta fotografías reales en 2022 — un
            viaje de 240 años.
          </p>
        </div>

        {/* LIGO waves SVG illustration */}
        <div
          className="mb-14 rounded-2xl overflow-hidden glow-border"
          data-animate
          style={{
            ...ANIM,
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <div className="bg-card p-4">
            <GravitationalWavesSVG />
          </div>
          <div className="bg-card/80 px-5 py-3">
            <p className="font-body text-xs text-muted-foreground">
              Primera detección de ondas gravitacionales · LIGO Scientific
              Collaboration, 2015 · Dominio público
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div
            className="absolute left-[22px] top-0 bottom-0 w-px"
            style={{
              background:
                "linear-gradient(to bottom, transparent, oklch(0.62 0.22 280 / 0.4) 10%, oklch(0.62 0.22 280 / 0.4) 90%, transparent)",
            }}
            aria-hidden
          />

          <div className="space-y-8 pl-14">
            {events.map((ev, i) => (
              <div
                key={ev.year}
                className="relative"
                data-animate
                data-ocid={`history.event.${i + 1}`}
                style={ANIM}
              >
                <div
                  className={`absolute -left-[48px] top-1 w-4 h-4 rounded-full ${ev.dotColor} border-2 border-background`}
                  style={{
                    boxShadow:
                      ev.dotColor === "bg-primary"
                        ? "0 0 10px oklch(0.62 0.22 280 / 0.6)"
                        : "0 0 10px oklch(0.72 0.26 43 / 0.6)",
                  }}
                  aria-hidden
                />
                <div
                  className={`rounded-xl bg-card/50 border ${ev.border} p-5 hover:bg-card transition-smooth`}
                >
                  <div className="flex items-start justify-between gap-4 flex-wrap mb-2">
                    <div>
                      <span className="font-mono text-sm font-bold text-accent">
                        {ev.year}
                      </span>
                      <h3 className="font-display font-bold text-foreground text-lg leading-tight mt-0.5">
                        {ev.title}
                      </h3>
                    </div>
                    <span className="font-mono text-xs text-muted-foreground bg-background/60 px-2 py-1 rounded flex-shrink-0">
                      {ev.person}
                    </span>
                  </div>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {ev.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
