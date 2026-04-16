import { ChevronDown } from "lucide-react";
import { useEffect, useRef } from "react";

const STARS = Array.from({ length: 60 }, (_, i) => ({
  id: `s${i}`,
  top: ((i * 37 + 11) % 97) + 1,
  left: ((i * 53 + 17) % 97) + 1,
  opacity: 0.2 + ((i * 23) % 80) / 100,
}));

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    setTimeout(() => {
      el.style.transition = "opacity 1.2s ease, transform 1.2s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 200);
  }, []);

  const handleScroll = () => {
    const el = document.querySelector("#que-son");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      data-ocid="hero.section"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://upload.wikimedia.org/wikipedia/commons/4/4f/Black_hole_-_Messier_87_crop_max_res.jpg')",
        }}
        role="img"
        aria-label="Imagen cinematográfica del agujero negro M87"
      />
      {/* Overlays */}
      <div className="absolute inset-0 bg-background/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-background" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, oklch(0.55 0.18 280 / 0.15) 0%, transparent 70%)",
        }}
      />

      {/* Stars overlay */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        {STARS.map((star) => (
          <div
            key={star.id}
            className="absolute w-px h-px bg-foreground rounded-full"
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              opacity: star.opacity,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        <p className="text-sm font-mono text-accent uppercase tracking-[0.3em] mb-6 opacity-90">
          NASA · ESA · Event Horizon Telescope
        </p>

        <h1
          ref={titleRef}
          className="font-display font-bold text-5xl sm:text-7xl lg:text-8xl leading-tight mb-6"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.95 0 0) 0%, oklch(0.72 0.26 43) 40%, oklch(0.62 0.22 280) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textShadow: "none",
            filter: "drop-shadow(0 0 30px oklch(0.62 0.22 280 / 0.4))",
          }}
        >
          AGUJEROS NEGROS
        </h1>

        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-light text-foreground/80 mb-4">
          Las Fronteras del Universo
        </h2>

        <p className="font-body text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
          Donde el espacio y el tiempo colapsan en un solo punto.{" "}
          <span className="text-accent font-medium">
            Exploramos los misterios más profundos del cosmos
          </span>{" "}
          con ciencia de la NASA, ESA y los telescopios más avanzados de la
          humanidad.
        </p>

        <button
          type="button"
          onClick={handleScroll}
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-display font-semibold text-sm uppercase tracking-wider glow-border text-foreground hover:bg-primary/20 transition-smooth"
          data-ocid="hero.cta_button"
        >
          Comenzar el Viaje
        </button>
      </div>

      {/* Scroll indicator */}
      <button
        type="button"
        onClick={handleScroll}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-accent transition-smooth floating"
        aria-label="Desplazar hacia abajo"
        data-ocid="hero.scroll_button"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
