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
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Black_hole_-_Messier_87_crop_max_res.jpg"
              alt="Primera imagen real de un agujero negro: M87, capturada por el Event Horizon Telescope en 2019"
              className="w-full object-cover"
              loading="lazy"
              style={{ maxHeight: "380px" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="font-display font-semibold text-foreground text-sm">
                M87 — Primera Imagen Real
              </p>
              <p className="font-body text-xs text-muted-foreground">
                Event Horizon Telescope Collaboration, 2019 · CC BY 4.0
              </p>
            </div>
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
