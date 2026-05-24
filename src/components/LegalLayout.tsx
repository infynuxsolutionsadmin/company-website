import { ReactNode, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronRight, Home, Shield, FileText, Cookie } from "lucide-react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { BackToTop } from "./BackToTop";
import AOS from "aos";

interface LegalLayoutProps {
  children: ReactNode;
  title: string;
  lastUpdated: string;
  icon: "privacy" | "terms" | "cookies";
}

export function LegalLayout({ children, title, lastUpdated, icon }: LegalLayoutProps) {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-out-cubic", once: true });
    window.scrollTo(0, 0);
  }, []);

  const IconMap = {
    privacy: Shield,
    terms: FileText,
    cookies: Cookie,
  };

  const Icon = IconMap[icon];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 h-64 w-64 rounded-full bg-[var(--cyan)]/10 blur-3xl animate-float" />
            <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-[var(--purple-glow)]/10 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8" data-aos="fade-down">
              <Link to="/" className="hover:text-[var(--cyan)] transition-colors flex items-center gap-1">
                <Home className="h-3.5 w-3.5" /> Home
              </Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-foreground font-medium">{title}</span>
            </nav>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div data-aos="fade-right">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
                  {title.split(' ').map((word, i) => (
                    i === title.split(' ').length - 1 ? <span key={i} className="text-gradient-cyan"> {word}</span> : <span key={i}>{word} </span>
                  ))}
                </h1>
                <p className="text-muted-foreground flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--cyan)] animate-pulse" />
                  Last Updated: {lastUpdated}
                </p>
              </div>
              
              <div 
                data-aos="zoom-in" 
                className="h-24 w-24 rounded-2xl glass-strong flex items-center justify-center border-[var(--cyan)]/30 shadow-lg shadow-[var(--cyan)]/10"
              >
                <Icon className="h-12 w-12 text-[var(--cyan)]" />
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            data-aos="fade-up" 
            className="gradient-border rounded-3xl p-8 sm:p-12 glass shadow-2xl relative overflow-hidden"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
              <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(var(--cyan) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
            </div>

            <article className="prose prose-invert prose-cyan max-w-none relative z-10">
              {children}
            </article>
          </div>

          {/* Quick Contact CTA */}
          <div data-aos="fade-up" className="mt-12 p-8 rounded-2xl glass-strong border-[var(--cyan)]/20 text-center">
            <h3 className="text-xl font-bold mb-2">Have questions about our legal policies?</h3>
            <p className="text-muted-foreground mb-6">Our team is here to help you understand how we protect your data and rights.</p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 rounded-full bg-gradient-cyan px-6 py-3 text-sm font-semibold text-[#001018] hover:scale-105 transition-transform"
            >
              Contact Support
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
