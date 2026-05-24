import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import AOS from "aos";
import { ArrowRight, Heart, Lightbulb, Eye, Check } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { BackToTop } from "../components/BackToTop";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Us | INFYNUX" },
      { name: "description", content: "Learn about the mission, values, and team behind INFYNUX, a global collective building futuristic digital experiences." },
    ],
  }),
});

function AboutPage() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 60,
    });
    const onMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`;
      }
    };
    window.addEventListener("mousemove", onMove);
    window.scrollTo(0, 0);
    return () => {
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white selection:bg-[#00E5FF]/30 selection:text-[#00E5FF]">

      {/* Cursor glow */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed left-0 top-0 z-0 h-[400px] w-[400px] rounded-full opacity-40 blur-3xl transition-transform duration-300 ease-out hidden md:block"
        style={{ background: "radial-gradient(circle, rgba(0,229,255,0.2), rgba(168,85,247,0.1) 50%, transparent 70%)" }}
      />

      {/* Grid Pattern Background */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: "linear-gradient(rgba(0,229,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.05) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10">
        <Navbar />

        <main className="pt-24">
          <section className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

              {/* Vision / Mission / Values Cards */}
              <div className="grid md:grid-cols-3 gap-8 mb-32">
                {[
                  {
                    title: "Our Vision",
                    desc: "To be the global leader in digital transformation, empowering businesses through cutting-edge technology and innovative solutions.",
                    icon: Eye,
                    color: "bg-blue-500",
                  },
                  {
                    title: "Our Mission",
                    desc: "We deliver exceptional software products and strategic digital services that drive growth, efficiency, and scalability for our clients.",
                    icon: Lightbulb,
                    color: "bg-purple-500",
                  },
                  {
                    title: "Our Values",
                    desc: "Integrity, Innovation, and client success are at the core of everything we do. We build lasting partnerships based on trust and excellence.",
                    icon: Heart,
                    color: "bg-pink-500",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    data-aos="fade-up"
                    data-aos-delay={i * 100}
                    className="glass rounded-3xl p-8 hover:border-[#00E5FF]/30 transition-all group"
                  >
                    <div className={`h-12 w-12 rounded-2xl ${item.color} flex items-center justify-center mb-6 shadow-lg`}>
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold font-display mb-4">{item.title}</h3>
                    <p className="text-slate-400 leading-relaxed text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Welcome Section */}
              <div className="max-w-4xl mx-auto mb-32">
                <div data-aos="fade-up" className="text-center">
                  <div className="inline-flex items-center gap-2.5 rounded-full bg-[#00E5FF]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#00E5FF] mb-6">
                    <img src="/INfynux-Logo.png" alt="INFYNUX" className="h-4 w-auto object-contain drop-shadow-[0_0_4px_rgba(212,175,55,0.4)]" />
                    About Company
                  </div>
                  <h1 className="text-4xl sm:text-6xl font-bold font-display leading-tight mb-8">
                    Welcome to <span className="text-gradient-cosmic">INfynux</span>
                  </h1>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-2xl mx-auto">
                    About INFYNUX: We are a software company in Thiruvarur, Tamilnadu and a dynamic Startup founded by young, ambitious minds and college students driven by innovation. We are proud to be an MSME and StartupTN registered enterprise, dedicated to delivering modern IT solutions that drive growth.
                  </p>
                  <div className="flex flex-col items-center mb-10">
                    <ul className="space-y-4 text-left inline-block">
                      {[
                        "INFYNUX is a software company in Thiruvarur, Tamilnadu",
                        "About INFYNUX company leadership",
                        "MSME & StartupTN Registered Enterprise",
                        "Web Development & ERP/CRM Solutions",
                        "Digital Marketing & SEO Optimization",
                        "IT Consulting & Social Media Management",
                        "Creative Graphics Design & Branding",
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                          <div className="h-5 w-5 rounded-full bg-[#00E5FF] flex items-center justify-center shrink-0">
                            <Check className="h-3 w-3 text-[#0A0A0F]" />
                          </div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-slate-400 text-sm italic mb-10 max-w-2xl mx-auto">
                    Founded in <span className="text-[#00E5FF] font-bold">2025</span>, INfynux stands at the forefront of digital transformation &mdash; bringing the fresh perspective and high-energy of student innovation to businesses worldwide with professional IT services.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-cyan px-8 py-4 text-sm font-bold text-[#0A0A0F] hover:scale-105 transition-all shadow-xl shadow-[#00E5FF]/20"
                  >
                    Get Started <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* The Story of INFYNUX */}
              <div className="max-w-4xl mx-auto py-20">
                <div className="text-center mb-16">
                  <h2 data-aos="fade-up" className="text-4xl sm:text-5xl font-bold font-display leading-tight">
                    The Story of <span className="text-[#00E5FF]">INFYNUX</span>: From Student Dreams to Global Digital Agency
                  </h2>
                </div>

                <div className="space-y-16">
                  <div data-aos="fade-up">
                    <h3 className="text-2xl font-bold mb-6 text-[#00E5FF]">Who We Are: A Legacy of Innovation in Thiruvarur</h3>
                    <div className="text-slate-400 text-sm leading-relaxed space-y-4">
                      <p>
                        INFYNUX is not just another software company; we are a testament to the power of youth, ambition, and technical excellence. Founded in 2025 in Thiruvarur, Tamil Nadu, our journey began in the classrooms of local colleges. A group of passionate students, driven by a shared vision of bringing high-end digital solutions to local and global businesses, decided to challenge the status quo. What started as a collective of freelance developers has quickly evolved into an MSME and StartupTN registered enterprise known for its reliability and creative flair.
                      </p>
                      <p>
                        Our identity is deeply rooted in Thiruvarur. We believe that talent knows no geographical boundaries, and our mission is to put Thiruvarur on the global technology map. At INFYNUX, we combine the raw energy of student innovation with the disciplined execution of seasoned professionals. This unique blend allows us to approach problems from fresh angles while ensuring our solutions are robust, scalable, and secure.
                      </p>
                    </div>
                  </div>

                  <div data-aos="fade-up">
                    <h3 className="text-2xl font-bold mb-6 text-[#A855F7]">Our Mission: Empowering Growth Through Technology</h3>
                    <div className="text-slate-400 text-sm leading-relaxed space-y-4">
                      <p>
                        At INFYNUX in Thiruvarur, our mission is simple yet profound: to empower businesses of all sizes to thrive in the digital age. We understand that for many business owners in Tamil Nadu, the digital world can seem overwhelming. We are here to bridge that gap. We don't just provide services; we build strategic partnerships. Whether it's a small local shop in Thiruvarur looking to establish its first website or a large enterprise needing a complex ERP system, we provide the same level of dedication and technical precision.
                      </p>
                      <p>
                        We are committed to transparency, excellence, and social responsibility. As a student-led organization, we also aim to create a fertile ground for tech talent in Thiruvarur, providing opportunities for students to work on real-world projects and gain industry-standard experience right here in their hometown.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>
        </main>

        <Footer />
        <BackToTop />
      </div>
    </div>
  );
}
