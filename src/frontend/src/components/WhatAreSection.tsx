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

          {/* Image */}
          <div
            data-animate
            style={{
              ...ANIM,
              transition: "opacity 0.8s ease, transform 0.8s ease",
            }}
          >
            <div className="relative rounded-2xl overflow-hidden glow-border aspect-square">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Black_Hole_Milky_Way.jpg/1280px-Black_Hole_Milky_Way.jpg"
                alt="Representación artística de un agujero negro supermásivo con disco de acreción luminoso en la Vía Láctea"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              <p className="absolute bottom-3 left-3 text-xs font-mono text-muted-foreground">
                Representación artística · NASA/ESA
              </p>
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
