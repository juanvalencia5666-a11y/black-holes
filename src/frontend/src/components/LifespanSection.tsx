import { Clock } from "lucide-react";
import { useIntersectionAnimate } from "../hooks/useIntersectionAnimate";

const timescales = [
  {
    label: "Universo actual",
    value: "1.38 × 10¹⁰",
    unit: "años",
    desc: "13,800 millones de años desde el Big Bang",
    color: "text-foreground",
    bar: "bg-foreground/20",
    width: "w-1/6",
  },
  {
    label: "Agujero negro estelar (1 M☉)",
    value: "~10⁶⁷",
    unit: "años",
    desc: "Literalmente inconcebible en términos humanos",
    color: "text-primary",
    bar: "bg-primary/40",
    width: "w-2/5",
  },
  {
    label: "Sagitario A* (4.1 M☉ × 10⁶)",
    value: "~10⁸⁷",
    unit: "años",
    desc: "El agujero negro del centro de nuestra galaxia",
    color: "text-accent",
    bar: "bg-accent/40",
    width: "w-3/5",
  },
  {
    label: "TON 618 (6.6 × 10¹⁰ M☉)",
    value: "~10¹⁰⁰",
    unit: "años",
    desc: "Un googol de años — el número tiene 100 dígitos",
    color: "text-accent",
    bar: "bg-accent/60",
    width: "w-full",
  },
];

const ANIM = {
  opacity: 0,
  transform: "translateY(20px)",
  transition: "opacity 0.6s ease, transform 0.6s ease",
};

export default function LifespanSection() {
  const sectionRef = useIntersectionAnimate(130, 0.12);

  return (
    <section
      id="longevidad"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
      style={{ background: "oklch(0.09 0 0)" }}
      data-ocid="lifespan.section"
    >
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.72 0.26 43 / 0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p
            className="text-xs font-mono text-accent uppercase tracking-[0.3em] mb-3"
            data-animate
            style={ANIM}
          >
            04 / Longevidad
          </p>
          <h2
            className="font-display font-bold text-4xl sm:text-5xl text-glow-primary mb-4"
            data-animate
            style={ANIM}
          >
            ¿Cuánto Viven?
          </h2>
          <p
            className="font-body text-muted-foreground max-w-xl mx-auto"
            data-animate
            style={ANIM}
          >
            La respuesta corta: casi para siempre. La respuesta larga es más
            interesante.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div
              className="rounded-2xl glow-border bg-card/50 p-6 mb-6"
              data-animate
              style={ANIM}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 glow-border flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground text-lg">
                    Radiación de Hawking
                  </h3>
                  <p className="font-mono text-xs text-accent">
                    Stephen Hawking, 1974
                  </p>
                </div>
              </div>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                En 1974, Stephen Hawking predijo que los agujeros negros emiten
                una radiación térmica muy débil — la{" "}
                <span className="text-foreground font-medium">
                  radiación de Hawking
                </span>{" "}
                — producida por efectos cuánticos cerca del horizonte de
                eventos. Con el tiempo, el agujero negro pierde masa y
                eventualmente se{" "}
                <span className="text-primary font-medium">evapora</span>.
              </p>
            </div>

            <div
              className="rounded-2xl bg-card/40 border border-border p-6"
              data-animate
              style={ANIM}
            >
              <h4 className="font-display font-semibold text-foreground mb-3">
                Para Contexto
              </h4>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                El universo actual tiene{" "}
                <span className="font-mono text-accent">
                  4.36 × 10¹⁷ segundos
                </span>{" "}
                de edad. Un agujero negro de masa solar tardará{" "}
                <span className="font-mono text-primary">10⁶⁷ años</span> en
                evaporarse — prácticamente eternos en cualquier escala de tiempo
                humana.
              </p>
            </div>
          </div>

          <div className="space-y-5">
            <h3
              className="font-display font-semibold text-foreground mb-6"
              data-animate
              style={ANIM}
            >
              Escala de Tiempo de Evaporación
            </h3>
            {timescales.map((t, i) => (
              <div
                key={t.label}
                data-animate
                data-ocid={`lifespan.timescale.${i + 1}`}
                style={ANIM}
              >
                <div className="flex items-baseline justify-between mb-1.5">
                  <p className="font-body text-sm text-muted-foreground truncate pr-2">
                    {t.label}
                  </p>
                  <span
                    className={`font-mono text-sm font-bold ${t.color} flex-shrink-0`}
                  >
                    {t.value}{" "}
                    <span className="text-xs font-normal text-muted-foreground">
                      {t.unit}
                    </span>
                  </span>
                </div>
                <div className="h-2 bg-card rounded-full overflow-hidden">
                  <div
                    className={`h-full ${t.bar} ${t.width} rounded-full transition-smooth`}
                  />
                </div>
                <p className="font-body text-xs text-muted-foreground/70 mt-1">
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
