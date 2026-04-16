import { useIntersectionAnimate } from "../hooks/useIntersectionAnimate";

const events = [
  {
    year: "1783",
    title: "Estrellas Oscuras",
    person: "John Michell",
    desc: 'El geólogo inglés John Michell propone el concepto de "estrellas oscuras": objetos con gravedad tan intensa que ni la luz puede escapar. Pierre-Simon Laplace llega a la misma conclusión en 1796.',
    dotColor: "bg-primary",
    border: "border-primary/30",
    image: null as string | null,
  },
  {
    year: "1915",
    title: "Relatividad General",
    person: "Albert Einstein",
    desc: "Einstein publica su Teoría General de la Relatividad, describiendo la gravedad como curvatura del espacio-tiempo. Las ecuaciones contienen implícitamente la posibilidad de singularidades.",
    dotColor: "bg-accent",
    border: "border-accent/30",
    image: null as string | null,
  },
  {
    year: "1916",
    title: "Radio de Schwarzschild",
    person: "Karl Schwarzschild",
    desc: "Desde el frente ruso durante la Primera Guerra Mundial, Schwarzschild resuelve las ecuaciones de Einstein y calcula el radio crítico que describe el horizonte de eventos de un agujero negro.",
    dotColor: "bg-primary",
    border: "border-primary/30",
    image: null as string | null,
  },
  {
    year: "1974",
    title: "Radiación de Hawking",
    person: "Stephen Hawking",
    desc: "Hawking combina mecánica cuántica y relatividad general para demostrar que los agujeros negros emiten radiación térmica y eventualmente se evaporan — una de las mayores predicciones del siglo XX.",
    dotColor: "bg-accent",
    border: "border-accent/30",
    image: null as string | null,
  },
  {
    year: "1994",
    title: "Evidencia en M87",
    person: "Telescopio Hubble",
    desc: "El HST proporciona evidencia sólida de un agujero negro supermásivo en el núcleo de la galaxia M87, midiendo la velocidad orbital del gas y calculando una masa de miles de millones de masas solares.",
    dotColor: "bg-primary",
    border: "border-primary/30",
    image: null as string | null,
  },
  {
    year: "2015",
    title: "Ondas Gravitacionales",
    person: "LIGO / Virgo",
    desc: "LIGO detecta por primera vez las ondas gravitacionales producidas por la fusión de dos agujeros negros, confirmando directamente uno de los pilares de la relatividad general de Einstein.",
    dotColor: "bg-accent",
    border: "border-accent/30",
    image: null as string | null,
  },
  {
    year: "2019",
    title: "Primera Imagen Real",
    person: "Event Horizon Telescope",
    desc: "Una red global de 8 radiotelescopios captura la primera imagen directa de un agujero negro: M87*, con una masa de 6.5 mil millones de soles, a 55 millones de años luz.",
    dotColor: "bg-primary",
    border: "border-primary/30",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4f/Black_hole_-_Messier_87_crop_max_res.jpg",
  },
  {
    year: "2022",
    title: "Sagitario A*",
    person: "NASA / EHT",
    desc: "NASA y el EHT revelan la primera imagen directa de Sagitario A*, el agujero negro en el centro de nuestra propia Vía Láctea.",
    dotColor: "bg-accent",
    border: "border-accent/30",
    image: null as string | null,
  },
  {
    year: "2024",
    title: "El Más Antiguo: CAPERS-LRD-z9",
    person: "Telescopio James Webb",
    desc: "El JWST descubre el agujero negro más antiguo conocido, activo cuando el universo tenía solo 600 millones de años, con 38 millones de masas solares.",
    dotColor: "bg-primary",
    border: "border-primary/30",
    image: null as string | null,
  },
];

const ANIM = {
  opacity: 0,
  transform: "translateY(20px)",
  transition: "opacity 0.6s ease, transform 0.6s ease",
};

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

        {/* LIGO waves image */}
        <div
          className="mb-14 rounded-2xl overflow-hidden glow-border"
          data-animate
          style={{
            ...ANIM,
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/LIGO_measurement_of_gravitational_waves.svg/1280px-LIGO_measurement_of_gravitational_waves.svg.png"
            alt="Medición histórica de ondas gravitacionales por LIGO en 2015 — primera detección directa"
            className="w-full object-contain bg-card p-4"
            loading="lazy"
            style={{ maxHeight: "240px" }}
          />
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
                  {ev.image && (
                    <div
                      className="mt-3 rounded-lg overflow-hidden"
                      style={{ maxHeight: "120px" }}
                    >
                      <img
                        src={ev.image}
                        alt={`Imagen de referencia del evento: ${ev.title}`}
                        className="w-full object-cover object-center"
                        loading="lazy"
                        style={{ maxHeight: "120px" }}
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
