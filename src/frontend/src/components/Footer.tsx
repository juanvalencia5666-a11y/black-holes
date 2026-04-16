import { ExternalLink, Telescope } from "lucide-react";

const sources = [
  {
    name: "NASA",
    url: "https://www.nasa.gov",
    desc: "National Aeronautics and Space Administration",
  },
  { name: "ESA", url: "https://www.esa.int", desc: "European Space Agency" },
  {
    name: "Event Horizon Telescope",
    url: "https://eventhorizontelescope.org",
    desc: "EHT Collaboration",
  },
  {
    name: "Wikipedia",
    url: "https://es.wikipedia.org/wiki/Agujero_negro",
    desc: "Enciclopedia libre",
  },
  {
    name: "LIGO",
    url: "https://www.ligo.org",
    desc: "Laser Interferometer Gravitational-Wave Observatory",
  },
];

const navLinks: [string, string][] = [
  ["Qué Son", "#que-son"],
  ["Cómo Se Crean", "#como-se-crean"],
  ["El Más Antiguo", "#el-mas-antiguo"],
  ["Longevidad", "#longevidad"],
  ["Datos Curiosos", "#datos-curiosos"],
  ["Historia", "#historia"],
];

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined"
      ? encodeURIComponent(window.location.hostname)
      : "";

  return (
    <footer
      className="border-t border-border py-16 relative overflow-hidden"
      style={{ background: "oklch(0.08 0 0)" }}
      data-ocid="footer"
    >
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-48 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, oklch(0.62 0.22 280 / 0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary/20 glow-border flex items-center justify-center">
                <Telescope className="w-4 h-4 text-primary" />
              </div>
              <span className="font-display font-bold text-lg text-glow-primary tracking-wide">
                HORIZONTE
              </span>
            </div>
            <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-xs">
              Una guía científica sobre los agujeros negros, basada en las
              investigaciones más recientes de la NASA, ESA y la colaboración
              del Event Horizon Telescope.
            </p>
          </div>

          {/* Sections */}
          <div>
            <h4 className="font-display font-semibold text-foreground text-sm uppercase tracking-wider mb-4">
              Secciones
            </h4>
            <nav className="grid grid-cols-2 gap-2">
              {navLinks.map(([label, href]) => (
                <button
                  type="button"
                  key={href}
                  onClick={() => {
                    const el = document.querySelector(href);
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-left font-body text-sm text-muted-foreground hover:text-accent transition-smooth"
                >
                  {label}
                </button>
              ))}
            </nav>
          </div>

          {/* Sources */}
          <div>
            <h4 className="font-display font-semibold text-foreground text-sm uppercase tracking-wider mb-4">
              Fuentes Científicas
            </h4>
            <ul className="space-y-2.5">
              {sources.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 group"
                    data-ocid={`footer.source.${s.name.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <span className="font-body text-sm text-muted-foreground group-hover:text-accent transition-smooth">
                      {s.name}
                    </span>
                    <ExternalLink className="w-3 h-3 text-muted-foreground/40 group-hover:text-accent/60 transition-smooth" />
                  </a>
                  <p className="font-mono text-xs text-muted-foreground/50">
                    {s.desc}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div
          className="h-px mb-6"
          style={{
            background:
              "linear-gradient(to right, transparent, oklch(0.62 0.22 280 / 0.3), transparent)",
          }}
        />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-muted-foreground text-center sm:text-left">
            © {year}. Construido con amor usando{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              caffeine.ai
            </a>
          </p>
          <p className="font-mono text-xs text-muted-foreground/50 text-center sm:text-right">
            Créditos de imágenes: NASA · ESA · EHT Collaboration · Wikimedia
            Commons
          </p>
        </div>
      </div>
    </footer>
  );
}
