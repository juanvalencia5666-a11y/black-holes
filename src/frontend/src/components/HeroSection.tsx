import { ChevronDown } from "lucide-react";
import { useEffect, useRef } from "react";

const STARS = Array.from({ length: 120 }, (_, i) => ({
  id: `s${i}`,
  top: ((i * 37 + 11) % 97) + 1,
  left: ((i * 53 + 17) % 97) + 1,
  opacity: 0.15 + ((i * 23) % 70) / 100,
  size: i % 5 === 0 ? 2 : 1,
}));

/** Inline SVG black hole with animated accretion disk */
function BlackHoleSVG() {
  return (
    <svg
      viewBox="0 0 600 600"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden="true"
    >
      <title>Agujero negro con disco de acreción animado</title>
      <defs>
        {/* Outer cosmic glow */}
        <radialGradient id="outerGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="oklch(0.48 0.22 250 / 0.3)" />
          <stop offset="40%" stopColor="oklch(0.55 0.18 280 / 0.15)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        {/* Accretion disk gradient */}
        <radialGradient id="diskGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="oklch(0.06 0 0)" />
          <stop offset="30%" stopColor="oklch(0.72 0.26 43 / 0.9)" />
          <stop offset="55%" stopColor="oklch(0.62 0.22 280 / 0.7)" />
          <stop offset="75%" stopColor="oklch(0.48 0.22 250 / 0.4)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        {/* Photon ring */}
        <radialGradient id="photonRing" cx="50%" cy="50%" r="50%">
          <stop offset="75%" stopColor="transparent" />
          <stop offset="85%" stopColor="oklch(0.9 0.15 60 / 0.8)" />
          <stop offset="92%" stopColor="oklch(0.95 0.2 50 / 0.95)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        {/* Inner purple glow */}
        <radialGradient id="innerGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="60%" stopColor="transparent" />
          <stop offset="80%" stopColor="oklch(0.62 0.22 280 / 0.5)" />
          <stop offset="100%" stopColor="oklch(0.48 0.22 250 / 0.2)" />
        </radialGradient>
        {/* Event horizon (pure black) */}
        <radialGradient id="horizon" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="oklch(0.02 0 0)" />
          <stop offset="100%" stopColor="oklch(0.04 0 0)" />
        </radialGradient>

        <filter id="blur-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="disk-blur" x="-20%" y="-80%" width="140%" height="260%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
        <filter id="soft-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="12" />
        </filter>
      </defs>

      {/* Deep space background gradient */}
      <circle cx="300" cy="300" r="290" fill="url(#outerGlow)" />

      {/* Animated outer disk glow */}
      <ellipse
        cx="300"
        cy="300"
        rx="240"
        ry="60"
        fill="oklch(0.55 0.18 280 / 0.12)"
        filter="url(#disk-blur)"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 300 300"
          to="360 300 300"
          dur="40s"
          repeatCount="indefinite"
        />
      </ellipse>

      {/* Accretion disk — outer layer */}
      <ellipse
        cx="300"
        cy="300"
        rx="220"
        ry="48"
        fill="none"
        stroke="oklch(0.68 0.24 43 / 0.25)"
        strokeWidth="28"
        filter="url(#disk-blur)"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 300 300"
          to="360 300 300"
          dur="30s"
          repeatCount="indefinite"
        />
      </ellipse>

      {/* Accretion disk — hot inner ring */}
      <ellipse
        cx="300"
        cy="300"
        rx="170"
        ry="36"
        fill="none"
        stroke="oklch(0.78 0.26 43 / 0.55)"
        strokeWidth="18"
        filter="url(#disk-blur)"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 300 300"
          to="-360 300 300"
          dur="18s"
          repeatCount="indefinite"
        />
      </ellipse>

      {/* Bright hotspot on disk */}
      <ellipse
        cx="300"
        cy="300"
        rx="140"
        ry="28"
        fill="none"
        stroke="oklch(0.92 0.22 55 / 0.7)"
        strokeWidth="10"
        filter="url(#disk-blur)"
        strokeDasharray="60 300"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="45 300 300"
          to="405 300 300"
          dur="12s"
          repeatCount="indefinite"
        />
      </ellipse>

      {/* Photon sphere / shadow ring */}
      <circle cx="300" cy="300" r="130" fill="url(#photonRing)" />
      <circle
        cx="300"
        cy="300"
        r="130"
        fill="none"
        stroke="oklch(0.88 0.18 55 / 0.5)"
        strokeWidth="4"
        filter="url(#blur-glow)"
      >
        <animate
          attributeName="stroke-opacity"
          values="0.4;0.8;0.4"
          dur="4s"
          repeatCount="indefinite"
        />
      </circle>

      {/* Purple inner glow ring */}
      <circle cx="300" cy="300" r="110" fill="url(#innerGlow)" />

      {/* Half disk covering the bottom of event horizon (shadow effect) */}
      <ellipse
        cx="300"
        cy="310"
        rx="170"
        ry="42"
        fill="oklch(0.05 0 0 / 0.9)"
      />

      {/* Event horizon — the black circle */}
      <circle cx="300" cy="300" r="100" fill="url(#horizon)" />
      <circle cx="300" cy="300" r="100" fill="oklch(0.02 0 0)" />

      {/* Gravitational lensing arc — top */}
      <ellipse
        cx="300"
        cy="255"
        rx="108"
        ry="18"
        fill="none"
        stroke="oklch(0.9 0.2 52 / 0.45)"
        strokeWidth="5"
        filter="url(#blur-glow)"
      >
        <animate
          attributeName="stroke-opacity"
          values="0.35;0.65;0.35"
          dur="5s"
          repeatCount="indefinite"
        />
      </ellipse>

      {/* Relativistic jet — top */}
      <line
        x1="300"
        y1="200"
        x2="300"
        y2="50"
        stroke="oklch(0.75 0.20 280 / 0.5)"
        strokeWidth="3"
        filter="url(#soft-glow)"
        strokeLinecap="round"
      >
        <animate
          attributeName="stroke-opacity"
          values="0.3;0.7;0.3"
          dur="3s"
          repeatCount="indefinite"
        />
      </line>
      {/* Jet spread top */}
      <ellipse
        cx="300"
        cy="55"
        rx="18"
        ry="8"
        fill="oklch(0.65 0.20 280 / 0.4)"
        filter="url(#soft-glow)"
      />

      {/* Relativistic jet — bottom */}
      <line
        x1="300"
        y1="400"
        x2="300"
        y2="550"
        stroke="oklch(0.75 0.20 280 / 0.4)"
        strokeWidth="2"
        filter="url(#soft-glow)"
        strokeLinecap="round"
      >
        <animate
          attributeName="stroke-opacity"
          values="0.2;0.5;0.2"
          dur="3.5s"
          repeatCount="indefinite"
        />
      </line>
    </svg>
  );
}

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
      {/* Deep space gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 120% 80% at 60% 40%, oklch(0.12 0.06 280) 0%, oklch(0.08 0.02 260) 40%, oklch(0.06 0 0) 100%)",
        }}
      />

      {/* Gradient fade to bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-background" />

      {/* Stars overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {STARS.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-foreground"
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              opacity: star.opacity,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
          />
        ))}
      </div>

      {/* Black hole SVG — positioned right */}
      <div
        className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-[55vw] max-w-[700px] opacity-70 pointer-events-none"
        aria-hidden="true"
      >
        <BlackHoleSVG />
      </div>

      {/* Left gradient fade over the black hole */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, oklch(0.06 0 0) 0%, oklch(0.06 0 0 / 0.85) 30%, transparent 65%)",
        }}
      />

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
