import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import AOS from "aos";
import { Code2, Palette, Brain, Cloud, Sparkles, Megaphone, ArrowUpRight, Smartphone } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { BackToTop } from "../components/BackToTop";

export const Route = createFileRoute("/services/")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services | INFYNUX" },
      { name: "description", content: "Explore the premium, future-ready services offered by INFYNUX - from high-performance web applications to advanced AI integrations." },
    ],
  }),
});

function ServicesPage() {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-out-cubic", once: true, offset: 60 });
    window.scrollTo(0, 0);
  }, []);

  const services = [
    { id: "web-development", icon: Code2, title: "Web Development", desc: "Modern digital applications engineered for speed, precision, and scalability." },
    { id: "ui-ux-design", icon: Palette, title: "UI/UX Design", desc: "Seamless user experiences designed with precision and innovation." },
    { id: "app-development", icon: Smartphone, title: "App Development", desc: "Premium mobile and cross-platform applications engineered for native performance." },
    { id: "ai-integrations", icon: Brain, title: "AI Integrations", desc: "AI-powered solutions crafted to deliver measurable business value." },
    { id: "cloud-solutions", icon: Cloud, title: "Cloud Solutions", desc: "Scalable cloud infrastructure built for speed, security, and reliability." },
    { id: "branding", icon: Sparkles, title: "Branding", desc: "Powerful brand identities crafted for lasting digital impact."},
    { id: "digital-marketing", icon: Megaphone, title: "Digital Marketing", desc: "Strategic digital campaigns engineered for measurable results." },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32">
        <section className="py-28 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h1 data-aos="fade-up" className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 text-white">
                Core <span className="text-gradient-cyan">Services</span>
              </h1>
              <p data-aos="fade-up" data-aos-delay="100" className="text-muted-foreground text-xl">
                Transforming visionary ideas into powerful digital solutions.
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
                  className={`gradient-border rounded-2xl p-8 hover-lift group cursor-pointer block ${
                    i === 6 ? "lg:col-start-2" : ""
                  }`}
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
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
