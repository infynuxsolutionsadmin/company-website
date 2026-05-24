import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import AOS from "aos";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2 } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { BackToTop } from "../components/BackToTop";
import { TeamSection } from "../components/TeamSection";
import { submitContactForm, contactSchema, type ContactInput } from "../lib/contact.server";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact | INFYNUX" },
      { name: "description", content: "Get in touch with INFYNUX. We respond within one earth-day." },
    ],
  }),
});

function ContactPage() {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-out-cubic", once: true, offset: 60 });
    window.scrollTo(0, 0);
  }, []);

  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactInput) => {
    try {
      await submitContactForm({ data });
      setSubmitted(true);
      toast.success("Message transmitted!", {
        description: "We'll respond within one earth-day.",
        duration: 5000,
      });
      reset();
      setTimeout(() => setSubmitted(false), 4000);
    } catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.";
      toast.error("Transmission failed", {
        description: message,
        duration: 6000,
      });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32">
        <section className="py-28 relative">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">

              {/* ── Left column - info ───────────────────────────────── */}
              <div data-aos="fade-up">
                <h1 className="text-4xl sm:text-6xl font-bold mb-6">
                  Let's <span className="text-gradient-cyan">connect</span>.
                </h1>
                <p className="text-muted-foreground text-xl mb-12">
                  Tell us about your mission. We respond within one earth-day to help you defy digital gravity.
                </p>
                <ul className="space-y-6 text-base">
                  <li className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl glass flex items-center justify-center text-[var(--cyan)]">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Email Us</div>
                      <div className="font-medium">infynuxsolutions@gmail.com</div>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl glass flex items-center justify-center text-[var(--cyan)]">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Call Us</div>
                      <div className="font-medium">+91 7010850923</div>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl glass flex items-center justify-center text-[var(--cyan)]">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Visit Us</div>
                      <div className="font-medium">Thiruvarur, Tamilnadu</div>
                    </div>
                  </li>
                </ul>
              </div>

              {/* ── Right column - form ──────────────────────────────── */}
              <form
                data-aos="fade-up"
                data-aos-delay="120"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="gradient-border rounded-2xl p-8 sm:p-12 space-y-6"
              >
                {/* Name */}
                <div>
                  <label htmlFor="name" className="text-xs uppercase tracking-widest text-muted-foreground">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your name"
                    disabled={isSubmitting}
                    {...register("name")}
                    className={`mt-2 w-full rounded-lg bg-white/5 border px-4 py-3 outline-none transition-colors disabled:opacity-50 ${
                      errors.name
                        ? "border-red-500/70 focus:border-red-400"
                        : "border-white/10 focus:border-[var(--cyan)]"
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-red-400">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="text-xs uppercase tracking-widest text-muted-foreground">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@galaxy.com"
                    disabled={isSubmitting}
                    {...register("email")}
                    className={`mt-2 w-full rounded-lg bg-white/5 border px-4 py-3 outline-none transition-colors disabled:opacity-50 ${
                      errors.email
                        ? "border-red-500/70 focus:border-red-400"
                        : "border-white/10 focus:border-[var(--cyan)]"
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-400">{errors.email.message}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="text-xs uppercase tracking-widest text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell us about the mission..."
                    disabled={isSubmitting}
                    {...register("message")}
                    className={`mt-2 w-full rounded-lg bg-white/5 border px-4 py-3 outline-none transition-colors resize-none disabled:opacity-50 ${
                      errors.message
                        ? "border-red-500/70 focus:border-red-400"
                        : "border-white/10 focus:border-[var(--cyan)]"
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-red-400">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-cyan px-6 py-4 font-semibold text-[#001018] hover:scale-[1.02] transition-all shadow-xl shadow-[var(--cyan)]/20 disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Transmitting...
                    </>
                  ) : submitted ? (
                    <>
                      <CheckCircle2 className="h-4 w-4" />
                      Transmitted &#10003;
                    </>
                  ) : (
                    <>
                      Send Message <Send className="h-4 w-4" />
                    </>
                  )}
                </button>

                {/* Fine print */}
                <p className="text-center text-[11px] text-muted-foreground/50 leading-relaxed">
                  Your data is stored securely and never shared. We respond within one earth-day.
                </p>
              </form>

            </div>
          </div>
        </section>

        <TeamSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
