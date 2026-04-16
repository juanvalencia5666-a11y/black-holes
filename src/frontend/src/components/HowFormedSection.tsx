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
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Crab_Nebula.jpg/1280px-Crab_Nebula.jpg"
                alt="Nebulosa del Cangrejo, remanente de la supernova SN 1054, fotografiada por el Telescopio Hubble"
                className="w-full object-cover"
                loading="lazy"
                style={{ maxHeight: "500px" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="font-display font-semibold text-foreground text-sm">
                  Nebulosa del Cangrejo
                </p>
                <p className="font-body text-xs text-muted-foreground">
                  Remanente de supernova SN 1054 · NASA/ESA Hubble Space
                  Telescope
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
