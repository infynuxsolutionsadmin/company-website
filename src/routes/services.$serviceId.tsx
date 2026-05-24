import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import AOS from "aos";
import { 
  Code2, Palette, Brain, Cloud, Sparkles, Megaphone, 
  ArrowRight, Check, Rocket, Globe, Database, ShieldCheck, Zap,
  Search, BarChart, Smartphone, Layers, Cpu, HeartHandshake
} from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { BackToTop } from "../components/BackToTop";

// Service Data Mapping
const SERVICES_DATA: Record<string, any> = {
  "web-development": {
    title: "Web Development",
    icon: Code2,
    heading: "Crafting Digital Experiences That Drive Growth",
    intro: "Website development is the comprehensive process of building, creating, and maintaining websites. At INFYNUX, we view a website as the digital cornerstone of your brand. It's not just about aesthetics; it's about engineering a high-performance platform that works for your business 24/7.",
    why: "In today's 'Search-First' economy, your website is your most valuable salesperson. It is the first place potential clients go to verify your credibility. For businesses in Thiruvarur and beyond, a professional website is the key to tapping into the global digital economy.",
    process: [
      { name: "Discovery & Planning", desc: "We start by understanding your business logic, target audience, and key performance indicators (KPIs)." },
      { name: "Information Architecture", desc: "We map out the user journey and site structure, ensuring that your most important information is always one click away." },
      { name: "UI/UX Design", desc: "Our designers create 'Human-Centric' interfaces that are visually stunning and highly intuitive." },
      { name: "Full-Stack Development", desc: "Our engineers write clean, efficient, and well-documented code using the latest industry-standard stacks." },
      { name: "Quality Assurance & Testing", desc: "We perform exhaustive testing across all browsers and devices to ensure a bug-free experience." },
    ],
    features: [
      { icon: Zap, title: "Blazing Fast Performance", desc: "Optimized for Core Web Vitals to ensure sub-second load times." },
      { icon: ShieldCheck, title: "Enterprise-Grade Security", desc: "Advanced protection against threats with robust encryption and best practices." },
      { icon: Globe, title: "Global Scalability", desc: "Architected to handle millions of users with cloud-native infrastructure." },
      { icon: Smartphone, title: "Responsive Perfection", desc: "Seamless experiences across mobile, tablet, and desktop viewports." }
    ],
    tech: ["React.js", "Node.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "AWS"],
    // pricing: "Custom quotes based on project complexity. Starts from $2,500.",
    faqs: [
      { q: "How long does a typical project take?", a: "Most projects launch within 6-12 weeks depending on scope." },
      { q: "Do you provide maintenance?", a: "Yes, we offer monthly maintenance and security update packages." },
      { q: "What platform do you use for development?", a: "We primarily use modern stacks like React, Node.js, and Next.js, but we also work with WordPress and Shopify for specific e-commerce needs." },
      { q: "Is the website SEO-friendly?", a: "Absolutely. We build with SEO best practices from the ground up, ensuring fast load times, semantic HTML, and proper meta tags." },
      { q: "Can I update the content myself?", a: "Yes, we typically integrate a Content Management System (CMS) like Sanity or a custom admin dashboard so you can easily manage your site." }
    ]
  },
  "ui-ux-design": {
    title: "UI/UX Design",
    icon: Palette,
    heading: "Designing Interfaces That Feel Inevitable",
    intro: "UI/UX design is about more than just colors and fonts-it's about understanding human behavior and creating frictionless paths for your users to achieve their goals.",
    why: "A great design reduces churn, increases conversion, and builds deep emotional trust with your audience. We specialize in 'Antigravity' design-interfaces that feel light, fast, and futuristic.",
    process: [
      { name: "User Research", desc: "Deep diving into user personas and competitor landscapes." },
      { name: "Wireframing", desc: "Low-fidelity blueprints to map out functionality and flow." },
      { name: "Prototyping", desc: "High-fidelity interactive mockups in Figma." },
      { name: "Design System", desc: "Creating a scalable visual language for your brand." }
    ],
    features: [
      { icon: Layers, title: "Design Systems", desc: "Reusable components for consistent brand identity." },
      { icon: HeartHandshake, title: "User-Centricity", desc: "Every pixel is placed with intent based on research." },
      { icon: Sparkles, title: "Modern Aesthetics", desc: "Glassmorphism, gradients, and micro-animations." },
      { icon: Smartphone, title: "Mobile-First Design", desc: "Ensuring seamless experiences across all device types and sizes." }
    ],
    tech: ["Figma", "Adobe Creative Suite", "Spline (3D)", "Framer Motion"],
    // pricing: "Design-only projects start at $1,500.",
    faqs: [
      { q: "Do you provide developer handoff?", a: "Yes, we provide complete Figma files with documentation for your dev team." },
      { q: "How many revisions do you offer?", a: "We include 3 major rounds of revisions to ensure the final design perfectly aligns with your vision and business goals." },
      { q: "Do you design for mobile first?", a: "Yes, we follow a mobile-first approach to ensure your application looks and functions perfectly on all screen sizes." },
      { q: "What is your design process?", a: "Our process involves deep research, wireframing, high-fidelity UI design, and interactive prototyping to validate ideas before development." },
      { q: "Can you work with our existing brand?", a: "Definitely. We can either follow your established brand guidelines or help you evolve them for a more modern digital presence." }
    ]
  },
  "app-development": {
    title: "App Development",
    icon: Smartphone,
    heading: "Creating Exceptional Native & Cross-Platform Applications",
    intro: "Mobile application development is the art and science of building software designed specifically for handheld devices. At INFYNUX, we design high-performance, responsive iOS and Android applications that engage users, simplify workflows, and scale effortlessly.",
    why: "In a mobile-first society, a custom application is the most direct channel to your target audience. It provides a personalized, deeply integrated workspace for your customers, driving unparalleled loyalty and active daily engagement.",
    process: [
      { name: "Strategic Discovery", desc: "We define user journeys, map feature priorities, and draft the product roadmap." },
      { name: "UI/UX Prototyping", desc: "We build intuitive, fluid screen transitions and touch-optimized interfaces." },
      { name: "Cross-Platform Build", desc: "We engineer performant app builds using modern frameworks like Flutter or React Native." },
      { name: "API & Backend Integration", desc: "We connect the app securely with real-time cloud datastores and server APIs." },
      { name: "Store Deployment", desc: "We manage the deployment and approval process for the Apple App Store and Google Play Store." }
    ],
    features: [
      { icon: Zap, title: "Native-Speed Engine", desc: "Highly optimized rendering engine ensuring buttery-smooth 60fps scrolling." },
      { icon: ShieldCheck, title: "Biometric Protection", desc: "Secure FaceID/TouchID logins and encrypted local storage protocols." },
      { icon: Layers, title: "Offline Sync Mode", desc: "Allows users to interact seamlessly even with limited network connectivity." },
      { icon: Smartphone, title: "Device-Level Access", desc: "Direct hardware integrations (Camera, GPS, Bluetooth, Push Notifications)." }
    ],
    tech: ["React Native", "Flutter", "TypeScript", "Node.js", "Firebase", "AWS"],
    // pricing: "Custom quotes based on product scope. Starts from $4,000.",
    faqs: [
      { q: "Do you build for both iOS and Android?", a: "Yes, we utilize modern cross-platform frameworks to build highly performant apps for both iOS and Android from a single shared codebase." },
      { q: "Can you help publish the app to the app stores?", a: "Absolutely. We handle the entire deployment process, including preparing metadata, setting up developer accounts, and clearing the approval pipelines." },
      { q: "Does the app work offline?", a: "We can design the app to cache critical database layers locally, allowing users to browse and execute actions that sync back once online." },
      { q: "How do you handle updates?", a: "We build modular app components that support Over-The-Air (OTA) updates for quick bug fixes, and deliver standard store bundles for major features." },
      { q: "Do you offer post-launch support?", a: "Yes, we provide ongoing maintenance packages that cover OS updates, platform compliance, analytics tracking, and performance tuning." }
    ]
  },
  "ai-integrations": {
    title: "AI Integrations",
    icon: Brain,
    heading: "Intelligent Platforms for the Modern Era",
    intro: "AI is no longer a luxury; it's a necessity. We help you integrate LLMs, computer vision, and predictive analytics into your existing workflows.",
    why: "Automation scales your team's output. We focus on deploying AI where it creates the most immediate business value.",
    process: [
      { name: "Data Audit", desc: "Identifying the data assets available for AI training or inference." },
      { name: "Model Selection", desc: "Choosing between OpenAI, Anthropic, or open-source solutions like Llama." },
      { name: "API Development", desc: "Building secure gateways between your apps and the AI models." }
    ],
    features: [
      { icon: Cpu, title: "LLM Fine-Tuning", desc: "Adapting AI to your specific brand voice and data." },
      { icon: Zap, title: "Autonomous Agents", desc: "AI that takes action, not just provides answers." },
      { icon: Database, title: "Vector Database Setup", desc: "Implementing efficient data retrieval for RAG-based AI applications." },
      { icon: ShieldCheck, title: "Ethics & Compliance", desc: "Ensuring AI models are unbiased and data usage is fully compliant." }
    ],
    tech: ["Python", "PyTorch", "OpenAI API", "Pinecone (Vector DB)", "LangChain"],
    // pricing: "Consultation and POCs starting at $3,000.",
    faqs: [
      { q: "Is our data secure?", a: "Yes, we use enterprise-grade privacy layers to ensure your data stays yours." },
      { q: "How long does it take to integrate AI?", a: "A basic integration can take 2-4 weeks, while custom-trained models or complex agents may take 2-3 months." },
      { q: "Do we need a massive dataset for AI?", a: "Not necessarily. Many powerful applications can be built using Retrieval-Augmented Generation (RAG) with your existing documents and data." },
      { q: "Can AI replace my customer support team?", a: "AI acts as a powerful co-pilot, handling routine queries and freeing up your human team to focus on complex interactions." },
      { q: "What are the ongoing costs of AI?", a: "Ongoing costs typically include API usage fees and infrastructure maintenance, which we optimize for cost-efficiency." }
    ]
  },
  "cloud-solutions": {
    title: "Cloud Solutions",
    icon: Cloud,
    heading: "Scalable Infrastructure for Global Reach",
    intro: "Cloud solutions provide the agility to scale up or down based on demand, ensuring cost-efficiency and high availability.",
    why: "Moving to the cloud reduces hardware costs and provides superior disaster recovery and global low-latency performance.",
    process: [
      { name: "Migration Planning", desc: "Analyzing current infrastructure and planning the shift." },
      { name: "Cloud Architecture", desc: "Designing serverless or containerized environments." },
      { name: "Deployment & Monitoring", desc: "Setting up CI/CD pipelines and real-time alerts." }
    ],
    features: [
      { icon: ShieldCheck, title: "Disaster Recovery", desc: "Automated backups and geo-redundancy." },
      { icon: Globe, title: "Edge Computing", desc: "Delivering content from the node closest to the user." },
      { icon: Database, title: "Auto-Scaling Architecture", desc: "Systems that automatically grow with your traffic demand." },
      { icon: Zap, title: "Serverless Optimization", desc: "Reducing overhead costs with efficient event-driven functions." }
    ],
    tech: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Terraform"],
    // pricing: "Monthly infrastructure management starts at $500.",
    faqs: [
      { q: "Which cloud provider do you recommend?", a: "It depends on your needs, but we specialize in AWS and Google Cloud." },
      { q: "Will there be downtime during migration?", a: "We use zero-downtime migration strategies, ensuring your services stay live while we transition your data." },
      { q: "How do you handle data backups?", a: "We implement automated, encrypted daily backups with multi-region redundancy to ensure your data is always safe." },
      { q: "Do you offer 24/7 monitoring?", a: "Yes, our cloud management includes real-time monitoring and automated alerts to detect issues before they impact users." },
      { q: "Can you help reduce our current cloud costs?", a: "Definitely. We perform cloud audits to identify underutilized resources and optimize your architecture for cost savings." }
    ]
  },
  "branding": {
    title: "Branding",
    icon: Sparkles,
    heading: "Identity Systems for Authority",
    intro: "Branding is the promise you make to your customers. We help you define that promise through visual and verbal identity.",
    why: "A strong brand justifies premium pricing and builds long-term loyalty. We signal authority through design.",
    process: [
      { name: "Brand Strategy", desc: "Defining your mission, vision, and unique value proposition." },
      { name: "Visual Identity", desc: "Logo, typography, and color systems." },
      { name: "Voice & Tone", desc: "How your brand speaks across all channels." }
    ],
    features: [
      { icon: Palette, title: "Logo Design", desc: "Memorable icons that reflect your brand's essence." },
      { icon: Megaphone, title: "Brand Voice", desc: "Consistent messaging that resonates with your audience." },
      { icon: Globe, title: "Brand Guidelines", desc: "Comprehensive rules for color, type, and imagery usage." },
      { icon: HeartHandshake, title: "Market Positioning", desc: "Defining where your brand sits in the competitive landscape." }
    ],
    tech: ["Adobe Illustrator", "InDesign", "Photoshop", "After Effects"],
    // pricing: "Brand identity packages start at $2,000.",
    faqs: [
      { q: "Do you provide brand guidelines?", a: "Yes, we provide a complete Brand Bible for your internal team." },
      { q: "How long does the branding process take?", a: "A comprehensive brand identity project typically takes 4-6 weeks from research to final delivery." },
      { q: "What deliverables will I receive?", a: "You'll receive a logo suite, color palette, typography system, brand guidelines, and assets for social media and print." },
      { q: "Can you help with naming our business?", a: "Yes, we offer strategic naming services that include competitive analysis and domain availability checks." },
      { q: "Do you handle print design as well?", a: "We provide print-ready files for business cards, stationery, and marketing materials as part of our packages." }
    ]
  },
  "digital-marketing": {
    title: "Digital Marketing",
    icon: Megaphone,
    heading: "Performance Campaigns That Compound",
    intro: "Marketing is about finding your audience where they live and giving them a reason to choose you.",
    why: "We focus on ROI. Every dollar spent should be measured and optimized for maximum growth.",
    process: [
      { name: "Market Research", desc: "Identifying where your potential customers spend their time." },
      { name: "Content Strategy", desc: "Creating high-value content that attracts and converts." },
      { name: "Paid Acquisition", desc: "Managing Google Ads, Meta Ads, and LinkedIn Ads." }
    ],
    features: [
      { icon: Search, title: "SEO Optimization", desc: "Ranking for the terms that matter most to your bottom line." },
      { icon: BarChart, title: "Performance Tracking", desc: "Real-time dashboards showing your growth." },
      { icon: Megaphone, title: "Social Media Ads", desc: "Targeted campaigns on Instagram, Facebook, and LinkedIn." },
      { icon: Sparkles, title: "Content Strategy", desc: "High-value blog posts and copy that drives organic growth." }
    ],
    tech: ["Google Ads", "Meta Ads", "Ahrefs", "Google Analytics 4", "Mailchimp"],
    // pricing: "Monthly management starts at $1,000 + ad spend.",
    faqs: [
      { q: "How soon will I see results?", a: "SEO takes months, but paid ads can show results within days." },
      { q: "Do you guarantee a specific ROI?", a: "While we can't guarantee exact sales, we provide detailed projections and focus on continuous optimization." },
      { q: "Which platforms are best for my business?", a: "We analyze your audience to determine whether Google Search, Instagram, LinkedIn, or YouTube will yield the highest conversion." },
      { q: "Do you handle content creation?", a: "Yes, we have a dedicated team for copywriting, graphic design, and video production to fuel your campaigns." },
      { q: "How often do I get reports?", a: "We provide comprehensive monthly reports and have real-time dashboards so you can track performance 24/7." }
    ]
  }
};

export const Route = createFileRoute("/services/$serviceId")({
  component: ServiceDetailsPage,
  head: () => ({
    meta: [
      { title: "Services | INFYNUX" },
      { name: "description", content: "Explore details about premium INFYNUX services and innovative tech solutions." },
    ],
  }),
});

function ServiceDetailsPage() {
  const { serviceId } = Route.useParams();
  const data = SERVICES_DATA[serviceId];

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-out-cubic", once: true, offset: 60 });
    window.scrollTo(0, 0);
  }, [serviceId]);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Link to="/services" className="text-[var(--cyan)] hover:underline">Back to Services</Link>
        </div>
      </div>
    );
  }

  const Icon = data.icon;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-32">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 right-[10%] h-96 w-96 rounded-full bg-[var(--cyan)]/10 blur-[120px] animate-pulse" />
            <div className="absolute bottom-10 left-[5%] h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[150px] animate-float" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div data-aos="fade-right">
                <div className="inline-flex items-center gap-2 rounded-full bg-[var(--cyan)]/10 border border-[var(--cyan)]/20 px-4 py-2 text-xs font-bold uppercase tracking-widest text-[var(--cyan)] mb-8">
                  <Icon className="h-4 w-4" /> {data.title}
                </div>
                <h1 className="text-4xl sm:text-6xl font-bold font-display leading-tight mb-8 text-white">
                  {data.heading}
                </h1>
                <p className="text-xl text-slate-400 leading-relaxed mb-10">
                  {data.intro}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-cyan px-8 py-4 text-sm font-bold text-[#0A0A0F] hover:scale-105 transition-all shadow-xl shadow-[#00E5FF]/20">
                    Get Started <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a href="#process" className="inline-flex items-center gap-2 rounded-full glass border border-white/15 px-8 py-4 text-sm font-bold text-white hover:border-[var(--cyan)] transition-all">
                    Our Process
                  </a>
                </div>
              </div>
              <div data-aos="fade-left" className="relative group hidden lg:block">
                <div className="absolute inset-0 bg-[var(--cyan)]/10 blur-[80px] rounded-full group-hover:bg-[var(--cyan)]/20 transition-all" />
                <div className="relative glass rounded-[40px] p-12 border border-white/10 shadow-2xl flex items-center justify-center">
                  <Icon className="h-48 w-48 text-[var(--cyan)] animate-pulse-glow" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why This Matters */}
        <section className="py-24 border-y border-white/5 bg-slate-900/20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 data-aos="fade-up" className="text-3xl font-bold mb-8 text-white font-display">Why It Matters</h2>
            <p data-aos="fade-up" data-aos-delay="100" className="text-slate-400 text-lg leading-relaxed italic">
              "{data.why}"
            </p>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 data-aos="fade-up" className="text-4xl font-bold font-display text-white">Core Features</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {data.features.map((f: any, i: number) => (
                <div key={i} data-aos="fade-up" data-aos-delay={i * 100} className="glass rounded-2xl p-8 hover:border-[var(--cyan)]/30 transition-all">
                  <div className="h-12 w-12 rounded-xl bg-[var(--cyan)]/10 flex items-center justify-center mb-6">
                    <f.icon className="h-6 w-6 text-[var(--cyan)]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Workflow/Process */}
        <section id="process" className="py-28 bg-[#0D0D15]/50 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div data-aos="fade-right">
                <h2 className="text-4xl font-bold font-display text-white mb-10">Our Strategic Workflow</h2>
                <div className="space-y-8">
                  {data.process.map((p: any, i: number) => (
                    <div key={i} className="flex gap-6 relative">
                      <div className="flex flex-col items-center">
                        <div className="h-10 w-10 rounded-full bg-gradient-cosmic flex items-center justify-center text-white font-bold text-sm shrink-0 z-10">
                          {i + 1}
                        </div>
                        {i < data.process.length - 1 && <div className="w-px h-full bg-white/10 absolute top-10" />}
                      </div>
                      <div className="pb-8">
                        <h3 className="text-xl font-bold text-white mb-2">{p.name}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div data-aos="fade-left" className="bg-[#0A0A0F] rounded-3xl border border-white/5 p-8 lg:p-12">
                <h3 className="text-2xl font-bold text-white mb-8">Technologies Used</h3>
                <div className="grid grid-cols-2 gap-4">
                  {data.tech.map((t: string) => (
                    <div key={t} className="flex items-center gap-3 glass px-4 py-3 rounded-xl border-white/5">
                      <div className="h-2 w-2 rounded-full bg-[var(--cyan)]" />
                      <span className="text-sm font-medium text-slate-300">{t}</span>
                    </div>
                  ))}
                </div>
                {/* <div className="mt-12 p-6 rounded-2xl bg-[var(--cyan)]/5 border border-[var(--cyan)]/20">
                  <div className="text-xs uppercase tracking-widest text-slate-500 mb-2 font-bold">Pricing Highlight</div>
                  <div className="text-xl font-bold text-white">{data.pricing}</div>
                </div> */}
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 data-aos="fade-up" className="text-4xl font-bold font-display text-white">Common Questions</h2>
            </div>
            <div className="space-y-6">
              {data.faqs.map((faq: any, i: number) => (
                <div key={i} data-aos="fade-up" data-aos-delay={i * 100} className="glass rounded-2xl p-8 border border-white/5">
                  <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-3">
                    <Check className="h-5 w-5 text-[var(--cyan)]" /> {faq.q}
                  </h3>
                  <p className="text-slate-400 leading-relaxed text-sm ml-8">
                    {faq.a}
                  </p>
                </div>
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
