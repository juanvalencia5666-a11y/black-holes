import { ArrowRight } from "lucide-react";
import { useIntersectionAnimate } from "../hooks/useIntersectionAnimate";

const steps = [
  {
    step: "01",
    title: "Estrella Masiva",
    desc: "Una estrella con más de 20–25 masas solares consume su combustible nuclear durante millones de años.",
  },
  {
    step: "02",
    title: "Supernova",
    desc: "Al agotar el combustible, el núcleo colapsa en microsegundos. La explosión — una supernova — arroja la envoltura exterior al espacio.",
  },
  {
    step: "03",
    title: "Núcleo Residual",
    desc: "Si el núcleo residual supera las 3 masas solares (límite Tolman-Oppenheimer-Volkoff), la gravedad vence toda resistencia.",
  },
  {
    step: "04",
    title: "Agujero Negro",
    desc: "La materia colapsa indefinidamente. Nace un agujero negro estelar con un horizonte de eventos bien definido.",
  },
];

const ANIM = {
  opacity: 0,
  transform: "translateY(20px)",
  transition: "opacity 0.6s ease, transform 0.6s ease",
};

/** SVG illustration of a supernova remnant / nebula */
function SupernovaSVG() {
  return (
    <svg
      viewBox="0 0 500 500"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-label="Ilustración de una nebulosa remanente de supernova"
    >
      <title>Ilustración de nebulosa remanente de supernova</title>
      <defs>
        <radialGradient id="sn-bg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="oklch(0.14 0.06 43)" />
          <stop offset="60%" stopColor="oklch(0.09 0.03 280)" />
          <stop offset="100%" stopColor="oklch(0.06 0 0)" />
        </radialGradient>
        <radialGradient id="sn-core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="oklch(0.95 0.2 60)" />
          <stop offset="30%" stopColor="oklch(0.8 0.28 43)" />
          <stop offset="65%" stopColor="oklch(0.55 0.20 280 / 0.7)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="sn-shock" cx="50%" cy="50%" r="50%">
          <stop offset="70%" stopColor="transparent" />
          <stop offset="85%" stopColor="oklch(0.65 0.22 280 / 0.4)" />
          <stop offset="95%" stopColor="oklch(0.72 0.26 43 / 0.35)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <filter id="sn-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="sn-softblur" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="12" />
        </filter>
      </defs>

      {/* Deep background */}
      <rect width="500" height="500" fill="url(#sn-bg)" rx="16" />

      {/* Shock wave rings (outer remnant) */}
      <circle
        cx="250"
        cy="250"
        r="210"
        fill="none"
        stroke="oklch(0.65 0.22 280 / 0.15)"
        strokeWidth="30"
        filter="url(#sn-softblur)"
      />
      <circle
        cx="250"
        cy="250"
        r="190"
        fill="none"
        stroke="oklch(0.72 0.26 43 / 0.2)"
        strokeWidth="20"
        filter="url(#sn-softblur)"
      />

      {/* Nebula filaments */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        const x1 = 250 + Math.cos(rad) * 80;
        const y1 = 250 + Math.sin(rad) * 80;
        const x2 = 250 + Math.cos(rad) * 185;
        const y2 = 250 + Math.sin(rad) * 185;
        const cx1 = 250 + Math.cos(rad + 0.5) * 130;
        const cy1 = 250 + Math.sin(rad + 0.5) * 130;
        return (
          <path
            key={angle}
            d={`M ${x1} ${y1} Q ${cx1} ${cy1} ${x2} ${y2}`}
            fill="none"
            stroke={
              angle % 90 === 0
                ? "oklch(0.65 0.22 280 / 0.35)"
                : "oklch(0.72 0.26 43 / 0.3)"
            }
            strokeWidth="3"
            filter="url(#sn-glow)"
            strokeLinecap="round"
          />
        );
      })}

      {/* Shock wave */}
      <circle cx="250" cy="250" r="200" fill="url(#sn-shock)" />

      {/* Central glow — the explosion */}
      <circle
        cx="250"
        cy="250"
        r="75"
        fill="url(#sn-core)"
        filter="url(#sn-glow)"
      />
      <circle
        cx="250"
        cy="250"
        r="75"
        fill="none"
        stroke="oklch(0.9 0.2 55 / 0.7)"
        strokeWidth="3"
        filter="url(#sn-glow)"
      >
        <animate
          attributeName="r"
          values="70;80;70"
          dur="4s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke-opacity"
          values="0.5;0.9;0.5"
          dur="4s"
          repeatCount="indefinite"
        />
      </circle>

      {/* Pulsar core */}
      <circle
        cx="250"
        cy="250"
        r="18"
        fill="oklch(0.92 0.1 280 / 0.9)"
        filter="url(#sn-glow)"
      >
        <animate
          attributeName="r"
          values="16;22;16"
          dur="1.2s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="250" cy="250" r="8" fill="oklch(0.98 0.05 280)" />

      {/* Pulsar jets */}
      <line
        x1="250"
        y1="232"
        x2="250"
        y2="140"
        stroke="oklch(0.8 0.22 280 / 0.6)"
        strokeWidth="4"
        strokeLinecap="round"
        filter="url(#sn-glow)"
      >
        <animate
          attributeName="stroke-opacity"
          values="0.4;0.8;0.4"
          dur="1.2s"
          repeatCount="indefinite"
        />
      </line>
      <line
        x1="250"
        y1="268"
        x2="250"
        y2="360"
        stroke="oklch(0.8 0.22 280 / 0.5)"
        strokeWidth="3"
        strokeLinecap="round"
        filter="url(#sn-glow)"
      >
        <animate
          attributeName="stroke-opacity"
          values="0.3;0.7;0.3"
          dur="1.2s"
          repeatCount="indefinite"
        />
      </line>

      {/* Label */}
      <text
        x="250"
        y="470"
        fontFamily="monospace"
        fontSize="11"
        fill="oklch(0.45 0 0)"
        textAnchor="middle"
      >
        Remanente de supernova · Ilustración científica
      </text>
    </svg>
  );
}

export default function HowFormedSection() {
  const sectionRef = useIntersectionAnimate(130, 0.15);

  return (
    <section
      id="como-se-crean"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
      style={{ background: "oklch(0.09 0 0)" }}
      data-ocid="how-formed.section"
    >
      <div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.68 0.24 43 / 0.07) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p
            className="text-xs font-mono text-accent uppercase tracking-[0.3em] mb-3"
            data-animate
            style={ANIM}
          >
            02 / Formación
          </p>
          <h2
            className="font-display font-bold text-4xl sm:text-5xl text-glow-primary"
            data-animate
            style={ANIM}
          >
            ¿Cómo Se Crean?
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            {steps.map((s, i) => (
              <div
                key={s.step}
                className="flex gap-4 items-start"
                data-animate
                data-ocid={`how-formed.step.${i + 1}`}
                style={ANIM}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full glow-border flex items-center justify-center bg-card/60">
                  <span className="font-mono text-sm text-primary font-bold">
                    {s.step}
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-display font-bold text-foreground text-lg mb-1 flex items-center gap-2">
                    {s.title}
                    {i < steps.length - 1 && (
                      <ArrowRight className="w-4 h-4 text-primary/40" />
                    )}
                  </h4>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}

            <div
              className="mt-8 rounded-xl p-5 glow-accent bg-card/40"
              data-animate
              style={ANIM}
            >
              <h4 className="font-display font-bold text-accent mb-2">
                Agujeros Negros Supermásivos
              </h4>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Su origen aún es debatido: podrían formarse por la{" "}
                <span className="text-foreground">
                  fusión sucesiva de agujeros negros menores
                </span>
                , por el colapso directo de nubes de gas masivas en el universo
                temprano, o por la acumulación acelerada de masa en agujeros
                negros primordiales.
              </p>
            </div>

            <div
              className="rounded-xl p-5 bg-card/40 border border-border"
              data-animate
              style={ANIM}
            >
              <h4 className="font-display font-bold text-foreground mb-2">
                Agujeros Negros Primordiales
              </h4>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Hipotéticos agujeros negros formados fracciones de segundo
                después del Big Bang, donde fluctuaciones extremas de densidad
                habrían creado regiones lo suficientemente compactas para
                colapsar. Podrían constituir parte de la materia oscura del
                universo.
              </p>
            </div>
          </div>

          <div
            data-animate
            style={{
              ...ANIM,
              transition: "opacity 0.8s ease, transform 0.8s ease",
            }}
          >
            <div className="relative rounded-2xl overflow-hidden glow-border">
              <SupernovaSVG />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="font-display font-semibold text-foreground text-sm">
                  Nebulosa del Cangrejo
                </p>
                <p className="font-body text-xs text-muted-foreground">
                  Remanente de supernova SN 1054 · Ilustración científica
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
