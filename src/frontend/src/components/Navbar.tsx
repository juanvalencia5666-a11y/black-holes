import { Menu, Telescope, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Qué Son", href: "#que-son" },
  { label: "Cómo Se Crean", href: "#como-se-crean" },
  { label: "El Más Antiguo", href: "#el-mas-antiguo" },
  { label: "Longevidad", href: "#longevidad" },
  { label: "Datos Curiosos", href: "#datos-curiosos" },
  { label: "Historia", href: "#historia" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        scrolled ? "cosmic-backdrop border-b border-border" : "bg-transparent"
      }`}
      data-ocid="navbar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            type="button"
            onClick={() => handleNav("#inicio")}
            className="flex items-center gap-2 group"
            data-ocid="navbar.logo"
            aria-label="Ir al inicio"
          >
            <div className="w-8 h-8 rounded-full bg-primary/20 glow-border flex items-center justify-center">
              <Telescope className="w-4 h-4 text-primary" />
            </div>
            <span className="font-display font-bold text-lg text-glow-primary tracking-wide hidden sm:block">
              HORIZONTE
            </span>
          </button>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="px-3 py-1.5 text-sm font-body text-muted-foreground hover:text-foreground hover:text-glow-primary transition-smooth rounded-md hover:bg-primary/10"
                data-ocid={`navbar.link.${link.label
                  .toLowerCase()
                  .replace(/\s+/g, "-")
                  .replace(/[áé]/g, (m) => (m === "á" ? "a" : "e"))}`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-smooth"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            data-ocid="navbar.mobile_menu_toggle"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="lg:hidden cosmic-backdrop border-t border-border"
          data-ocid="navbar.mobile_menu"
        >
          <div className="px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-left px-4 py-2.5 text-sm font-body text-muted-foreground hover:text-foreground hover:bg-primary/10 rounded-md transition-smooth"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
