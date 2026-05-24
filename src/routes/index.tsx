import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import {
  Rocket, Code2, Palette,
  ArrowRight, ArrowUpRight, Star, Send, Check, Smartphone,
} from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { BackToTop } from "../components/BackToTop";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "INFYNUX" },
      { name: "description", content: "Premium digital agency crafting futuristic brands, AI-driven platforms, and immersive experiences that defy gravity." },
      { property: "og:title", content: "INFYNUX" },
      { property: "og:description", content: "Premium digital agency crafting futuristic brands, AI-driven platforms, and immersive experiences." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  const [loaded, setLoaded] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-out-cubic", once: true, offset: 60 });
    const t = setTimeout(() => setLoaded(true), 1200);
    const onMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`;
      }
    };
    window.addEventListener("mousemove", onMove);
    return () => {
      clearTimeout(t);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Loader */}
      <div
        className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black transition-all duration-1000 ${loaded ? "opacity-0 pointer-events-none scale-105" : "opacity-100"}`}
      >
        <div className="flex flex-col items-center gap-6 animate-fade-in" style={{ animationDuration: "3s" }}>
          <div className="relative">
            <div className="absolute -inset-4 rounded-full opacity-25 blur-2xl animate-pulse" />
            <img
              src="/INfynux-Logo-Splash Screen.png"
              alt="INFYNUX"
              className="h-80 w-auto relative z-10 object-contain drop-shadow-[0_0_20px_rgba(212,175,55,0.5)] transition-all duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* Cursor glow */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed left-0 top-0 z-0 h-[400px] w-[400px] rounded-full opacity-40 blur-3xl transition-transform duration-300 ease-out hidden md:block"
        style={{ background: "radial-gradient(circle, rgba(0,229,255,0.25), transparent 70%)" }}
      />

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <ServicesSummary />
          <PortfolioSummary />
          <Stats />
          <WhyChooseUs />
          <Testimonials />
          <ContactSummary />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </div>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* floating orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-[var(--cyan)]/20 blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-[var(--purple-glow)]/20 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--pink-glow)]/10 blur-3xl animate-float" style={{ animationDelay: "4s" }} />
        {[...Array(20)].map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-[var(--cyan)] animate-float"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 4 + 4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div data-aos="fade-up" className="inline-flex items-center gap-2.5 rounded-full glass px-4 py-2 text-xs uppercase tracking-widest text-[var(--cyan)] mb-8">
          <img src="/INfynux-Logo.png" alt="INFYNUX" className="h-4 w-auto object-contain drop-shadow-[0_0_4px_rgba(212,175,55,0.4)]" />
          Powering Smart Solutions
        </div>
        <h1 data-aos="fade-up" data-aos-delay="100" className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] mb-6">
          Crafting <span className="text-gradient-cosmic">Powerful</span>
          <br />
          Digital Solution.
        </h1>
        <p data-aos="fade-up" data-aos-delay="200" className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          INfynux transforms ideas into high-performance websites, intelligent applications, and next-generation digital products.
        </p>
        <div data-aos="fade-up" data-aos-delay="300" className="flex flex-col items-center justify-center gap-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#work" className="group inline-flex items-center gap-2 rounded-full bg-gradient-cyan px-8 py-4 text-base font-semibold text-[#001018] hover:scale-105 transition-all shadow-2xl shadow-[var(--cyan)]/40">
              <Rocket className="h-5 w-5" /> Launch Project
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#services" className="inline-flex items-center gap-2 rounded-full glass border border-white/15 px-8 py-4 text-base font-semibold hover:border-[var(--cyan)] hover:text-[var(--cyan)] transition-all">
              Explore Universe
            </a>
          </div>

          <a
            href="https://wa.me/917010850923"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 text-sm font-bold tracking-widest uppercase text-[#25D366] hover:text-[#128C7E] transition-all"
          >
            <span className="h-px w-8 bg-[#25D366]/30 group-hover:w-12 transition-all" />
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Chat with us
            <span className="h-px w-8 bg-[#25D366]/30 group-hover:w-12 transition-all" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- SERVICES SUMMARY ---------- */
function ServicesSummary() {
  const services = [
    { id: "web-development", icon: Code2, title: "Web Development", desc: "Modern digital applications engineered for speed, precision, and scalability." },
    { id: "ui-ux-design", icon: Palette, title: "UI/UX Design", desc: "Seamless user experiences designed with precision and innovation." },
    { id: "app-development", icon: Smartphone, title: "App Development", desc: "Premium mobile and cross-platform applications engineered for native performance." },
  ];
  return (
    <section id="services" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 data-aos="fade-up" className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            We Transform Ideas Into <span className="text-gradient-cyan">Digital Success</span>
          </h2>
          <p data-aos="fade-up" data-aos-delay="100" className="text-muted-foreground text-lg">
            We deliver innovative websites, intelligent applications, and scalable technology solutions tailored for modern businesses.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Link
              key={s.title}
              to="/services/$serviceId"
              params={{ serviceId: s.id }}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="gradient-border rounded-2xl p-8 hover-lift group cursor-pointer block"
            >
              <div className="h-14 w-14 rounded-xl bg-gradient-cyan/10 border border-[var(--cyan)]/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                <s.icon className="h-7 w-7 text-[var(--cyan)]" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{s.desc}</p>
              <div className="inline-flex items-center gap-2 text-sm text-[var(--cyan)] group-hover:gap-3 transition-all">
                Learn more <ArrowUpRight className="h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--cyan)] hover:gap-3 transition-all">
            Explore all services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------- PORTFOLIO SUMMARY ---------- */
function PortfolioSummary() {
  const projects: Array<{ cat: string; title: string; img: string; url?: string }> = [
    {
      cat: "Web App",
      title: "Learning knights",
      img: "/Learning knights.png",
      url: "https://learning-knights.vercel.app/",
    },
    {
      cat: "WebSite",
      title: "Virtual Study",
      img: "/Virtual study.png",
      url: "https://virtual-study-finder.netlify.app/home",
    },
    {
      cat: "Web App",
      title: "Rajesh Portfolio",
      img: "/Rajesh Portfolio.png",
      url: "https://rajeshv2004.github.io/RAJESHV-PORTFOLIO/",
    },
  ];
  return (
    <section id="work" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 data-aos="fade-up" className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Signature <span className="text-gradient-cosmic">Projects</span>
            </h2>
            <p data-aos="fade-up" data-aos-delay="100" className="text-muted-foreground text-lg max-w-xl">
              Showcasing our finest work built with passion and precision.
            </p>
          </div>
          <a data-aos="fade-up" href="/work" className="inline-flex items-center gap-2 text-sm text-[var(--cyan)] hover:gap-3 transition-all">
            View all projects <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div
              key={p.title}
              data-aos="fade-up"
              data-aos-delay={i * 120}
              className="group relative overflow-hidden rounded-2xl gradient-border hover-lift"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block rounded-full glass px-3 py-1 text-[10px] uppercase tracking-widest text-[var(--cyan)] mb-3">
                  {p.cat}
                </span>
                <h3 className="text-2xl font-semibold mb-2">{p.title}</h3>
                <div className="mt-2">
                  <a
                    href={p.url || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#00E5FF]/30 hover:bg-[#00E5FF]/10 px-4 py-2.5 text-xs font-semibold text-slate-300 hover:text-[#00E5FF] hover:scale-105 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-[#00E5FF]/15"
                  >
                    Explore Project <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- STATS ---------- */
function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const dur = 1800;
            const start = performance.now();
            const tick = (t: number) => {
              const p = Math.min((t - start) / dur, 1);
              setN(Math.floor(end * (1 - Math.pow(1 - p, 3))));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [end]);

  return <span ref={ref}>{n}{suffix}</span>;
}

function Stats() {
  const stats = [
    { v: 2, suf: "+", label: "Successful Projects" },
    { v: 80, suf: "%", label: "Rating" },
    { v: 2, suf: "+", label: "Years Of Experience" },
    { v: 24, suf: "/7", label: "Client Support" },
  ];
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-aos="fade-up" className="rounded-3xl glass-strong p-10 sm:p-14 glow-cosmic">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
            {stats.map((s, i) => (
              <div key={s.label} data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="text-5xl sm:text-6xl font-display font-bold text-gradient-cosmic mb-2">
                  <Counter end={s.v} suffix={s.suf} />
                </div>
                <div className="text-sm uppercase tracking-widest text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- WHY CHOOSE US ---------- */
function WhyChooseUs() {
  const features = [
    { title: "Fast Delivery", desc: "We prioritize meeting deadlines and ensuring your project is delivered on time, every time." },
    { title: "Scalable Solutions", desc: "Our architectures are built to grow with your business, handling increasing loads seamlessly." },
    { title: "24/7 Support", desc: "Our dedicated support team is always available to assist you with any technical needs." },
    { title: "Affordable Pricing", desc: "We offer premium IT services at competitive rates, ensuring maximum value for your investment." },
    { title: "Modern Technology", desc: "We utilize the latest stacks to ensure your products are future-proof and performant." },
    { title: "Client Satisfaction", desc: "Our client-centric approach ensures that your vision is realized exactly as you imagined." },
  ];

  return (
    <section className="py-28 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-aos="fade-up" className="text-center mb-16">
          <div className="inline-block rounded-full bg-[#00E5FF]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#00E5FF] mb-6">
            Why Choose Us
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold font-display leading-tight mb-6">
            Our Strategy for <span className="text-gradient-cosmic">Your Success</span> with INfynux
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            We combine technical expertise with a client-centric approach to deliver high-performance websites and digital products that make a real impact.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="flex flex-col items-center text-center p-8 rounded-3xl glass border border-white/5 hover:border-[#00E5FF]/30 transition-all group"
            >
              <div className="h-14 w-14 rounded-2xl bg-[#00E5FF]/10 border border-[#00E5FF]/20 flex items-center justify-center mb-6 group-hover:bg-[#00E5FF] group-hover:text-[#0A0A0F] transition-all">
                <Check className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00E5FF] transition-colors">{f.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        <div data-aos="fade-up" className="mt-16 text-center">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-cyan px-10 py-5 text-sm font-bold text-[#0A0A0F] hover:scale-105 transition-all shadow-xl shadow-[#00E5FF]/20">
            Start a Conversation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------- TESTIMONIALS ---------- */
function Testimonials() {
  const items = [
    { name: "Rajan", role: "Learning Knights", text: "Creative and modern digital ideas tailored for business growth." },
    { name: "Kumar", role: "Portfolio", text: "High-quality development with clean design and smooth performance." },
    { name: "Durga", role: "Virtual Study, Orbit Finance", text: "Reliable communication and continuous support throughout the project." },
  ];
  return (
    <section className="py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 data-aos="fade-up" className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Client <span className="text-gradient-cyan">Testimonials</span>
          </h2>
          <p data-aos="fade-up" data-aos-delay="100" className="text-muted-foreground text-lg">
            Trusted by businesses for delivering impactful digital solutions.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <div
              key={t.name}
              data-aos="fade-up"
              data-aos-delay={i * 120}
              className="gradient-border rounded-2xl p-8 hover-lift flex flex-col"
            >
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-[var(--cyan)] text-[var(--cyan)]" />
                ))}
              </div>
              <p className="text-foreground/90 leading-relaxed mb-6 flex-1">"{t.text}"</p>
              <div className="flex items-center gap-3 pt-5 border-t border-white/10">
                <div className="h-11 w-11 rounded-full bg-gradient-cosmic flex items-center justify-center font-display font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CONTACT SUMMARY ---------- */
function ContactSummary() {
  return (
    <section id="contact" className="py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 data-aos="fade-up" className="text-4xl sm:text-5xl font-bold mb-6">
          Let's <span className="text-gradient-cyan">connect</span>.
        </h2>
        <p data-aos="fade-up" data-aos-delay="100" className="text-muted-foreground text-xl mb-10 max-w-2xl mx-auto">
          Tell us about your mission. We respond within one earth-day to help you defy digital gravity.
        </p>
        <a
          href="/contact"
          data-aos="fade-up"
          data-aos-delay="200"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-cyan px-10 py-5 font-semibold text-[#001018] hover:scale-105 transition-transform shadow-xl shadow-[var(--cyan)]/30"
        >
          Send a Message <Send className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
