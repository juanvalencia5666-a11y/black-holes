import type { LucideIcon } from "lucide-react";
import {
  Eye,
  Magnet,
  MapPin,
  RotateCcw,
  Target,
  Waves,
  Zap,
} from "lucide-react";
import { useIntersectionAnimate } from "../hooks/useIntersectionAnimate";

interface Fact {
  icon: LucideIcon;
  title: string;
  value: string;
  desc: string;
  color: string;
  bgColor: string;
}

const facts: Fact[] = [
  {
    icon: MapPin,
    title: "El Más Cercano",
    value: "Gaia BH1",
    desc: "A solo 1,560 años luz de la Tierra. Descubierto en 2022 gracias al satélite Gaia de la ESA.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Target,
    title: "El Más Masivo",
    value: "TON 618",
    desc: "66,000 millones de masas solares. Tan grande que nuestro sistema solar cabría miles de veces en su horizonte.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: RotateCcw,
    title: "El Más Rápido",
    value: "GRS 1915+105",
    desc: "Gira a más de 1,150 revoluciones por segundo. Cerca del límite teórico máximo de rotación.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Waves,
    title: "Espaguetificación",
    value: "Fenómeno real",
    desc: "Las fuerzas de marea de un agujero negro estiran la materia como espagueti antes de cruzar el horizonte.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Zap,
    title: "Sagitario A*",
    value: "4.1 M M☉",
    desc: "En el centro exacto de nuestra Vía Láctea. Primera imagen directa capturada por la humanidad en 2022.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Target,
    title: "Galaxias y AGN",
    value: "~90%",
    desc: "La mayoría de galaxias grandes albergan un agujero negro supermásivo activo o inactivo en su núcleo.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Eye,
    title: "Primera Imagen",
    value: "2019 · M87*",
    desc: "El Event Horizon Telescope capturó la primera imagen directa de un agujero negro usando 8 telescopios globales.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Magnet,
    title: "No Aspiran",
    value: "Mito ≠ Realidad",
    desc: "Los agujeros negros no aspiran materia. Atraen por gravedad igual que cualquier estrella — solo son más compactos.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
];

const ANIM = {
  opacity: 0,
  transform: "translateY(20px) scale(0.97)",
  transition: "opacity 0.5s ease, transform 0.5s ease",
};

export default function CuriositySection() {
  const sectionRef = useIntersectionAnimate(80, 0.1);

  return (
    <section
      id="datos-curiosos"
      ref={sectionRef}
      className="py-24 bg-background relative overflow-hidden"
      data-ocid="curiosity.section"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 30% 50%, oklch(0.62 0.22 280 / 0.05) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 70% 60%, oklch(0.72 0.26 43 / 0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p
            className="text-xs font-mono text-accent uppercase tracking-[0.3em] mb-3"
            data-animate
            style={ANIM}
          >
            05 / Curiosidades
          </p>
          <h2
            className="font-display font-bold text-4xl sm:text-5xl text-glow-primary mb-4"
            data-animate
            style={ANIM}
          >
            Datos Curiosos
          </h2>
          <p
            className="font-body text-muted-foreground max-w-xl mx-auto"
            data-animate
            style={ANIM}
          >
            Los agujeros negros son los objetos más extremos del universo. Estos
            hechos demuestran por qué.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {facts.map((fact, i) => {
            const Icon = fact.icon;
            return (
              <div
                key={fact.title}
                className="rounded-2xl p-5 bg-card/50 border border-border hover:glow-border hover:bg-card transition-smooth flex flex-col gap-3 cursor-default"
                data-animate
                data-ocid={`curiosity.card.${i + 1}`}
                style={ANIM}
              >
                <div
                  className={`w-10 h-10 rounded-xl ${fact.bgColor} flex items-center justify-center`}
                >
                  <Icon className={`w-5 h-5 ${fact.color}`} />
                </div>
                <div>
                  <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-1">
                    {fact.title}
                  </p>
                  <p
                    className={`font-display font-bold text-lg ${fact.color} leading-tight`}
                  >
                    {fact.value}
                  </p>
                </div>
                <p className="font-body text-xs text-muted-foreground leading-relaxed flex-1">
                  {fact.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
