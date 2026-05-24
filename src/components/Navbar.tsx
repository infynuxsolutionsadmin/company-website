import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ArrowRight, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Projects", to: "/work" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-strong py-3.5 shadow-lg shadow-black/10"
          : "glass py-5.5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src="/INfynux-Logo.png"
              alt="INFYNUX Logo"
              className="h-10 w-auto object-contain drop-shadow-[0_0_8px_rgba(212,175,55,0.45)] group-hover:scale-110 transition-transform duration-300"
            />
            <span className="font-display text-xl font-black tracking-[0.15em] uppercase" style={{ background: "linear-gradient(135deg, #D4AF37 0%, #F5E07A 40%, #D4AF37 70%, #A0793D 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", letterSpacing: "0.18em" }}>
              INFYNUX
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link 
                key={l.to} 
                to={l.to} 
                className="text-sm text-muted-foreground hover:text-[var(--cyan)] transition-colors relative group"
                activeProps={{ className: "text-[var(--cyan)]" }}
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-cyan group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-3">
            {/* <button
              onClick={toggleTheme}
              className="p-2 rounded-full glass hover:text-[var(--cyan)] transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </button> */}
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-cyan px-5 py-2.5 text-sm font-semibold text-[#001018] hover:scale-105 transition-transform shadow-lg shadow-[var(--cyan)]/30"
            >
              Get in Touch <ArrowRight className="h-4 w-4" />
            </Link>
            <button
              className="md:hidden rounded-lg glass p-2 text-foreground"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
        {menuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-white/10 flex flex-col gap-3">
            {links.map((l) => (
              <Link 
                key={l.to} 
                to={l.to} 
                onClick={() => setMenuOpen(false)} 
                className="px-2 py-2 text-foreground hover:text-[var(--cyan)] transition-colors"
                activeProps={{ className: "text-[var(--cyan)]" }}
              >
                {l.label}
              </Link>
            ))}
            <Link 
              to="/contact" 
              onClick={() => setMenuOpen(false)} 
              className="rounded-full bg-gradient-cyan px-5 py-2.5 text-sm font-semibold text-[#001018] text-center"
            >
              Get in Touch
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
