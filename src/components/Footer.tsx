import { Link } from "@tanstack/react-router";
import { Facebook, Youtube, Linkedin, Instagram, MapPin, Mail, Phone } from "lucide-react";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export function Footer() {
  return (
    <footer className="dark bg-[#020617] border-t border-white/5 pt-20 pb-10 mt-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2.5 group">
              <img
                src="/INfynux-Logo.png"
                alt="INFYNUX Logo"
                className="h-11 w-auto object-contain drop-shadow-[0_0_10px_rgba(212,175,55,0.5)] group-hover:scale-110 transition-transform duration-300"
              />
              <span className="font-display text-2xl font-black uppercase tracking-[0.18em]" style={{ background: "linear-gradient(135deg, #D4AF37 0%, #F5E07A 40%, #D4AF37 70%, #A0793D 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                INFYNUX
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              INFYNUX stands at the intersection of technology and creativity, delivering robust digital platforms that empower businesses worldwide.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Youtube, href: "#" },
                { Icon: Linkedin, href: "#" },
                { Icon: Instagram, href: "#" },
                { Icon: WhatsAppIcon, href: "https://wa.me/917010850923" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label="social"
                  className="h-10 w-10 rounded-lg glass flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all duration-300"
                >
                  <social.Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            {/* <div className="flex items-center gap-4 pt-4 opacity-70 grayscale hover:grayscale-0 transition-all">
              <div className="h-8 w-16 bg-muted rounded flex items-center justify-center text-[10px] font-bold">MSME</div>
              <div className="h-8 w-20 bg-muted rounded flex items-center justify-center text-[10px] font-bold">StartupTN</div>
              <div className="h-8 w-8 bg-muted rounded-full flex items-center justify-center text-[10px] font-bold">L</div>
            </div> */}
          </div>

          <FooterCol 
            title="Company" 
            items={[
              {label: "Home", to: "/"},
              {label: "About", to: "/about"},  
              {label: "Services", to: "/services"}, 
              {label: "Projects", to: "/work"}, 
              {label: "Contact", to: "/contact"}
            ]} 
          />
          
          <FooterCol 
            title="Services" 
            items={[
              {label: "Web Development", to: "/services/web-development"}, 
              {label: "UI/UX Design", to: "/services/ui-ux-design"}, 
              {label: "App Development", to: "/services/app-development"},
              {label: "AI Integration", to: "/services/ai-integrations"}, 
              {label: "Cloud Solutions", to: "/services/cloud-solutions"}, 
              {label: "Branding", to: "/services/branding"},
              {label: "Digital Marketing", to: "/services/digital-marketing"}
            ]} 
          />

          <div className="space-y-6">
            <div className="relative inline-block">
              <h4 className="font-display text-xl font-bold tracking-tight">Connect</h4>
              <div className="absolute -bottom-2 left-0 w-8 h-1 bg-[var(--cyan)] rounded-full" />
            </div>
            <ul className="space-y-4 pt-4">
              <li className="flex items-start gap-4 group">
                <div className="h-10 w-10 rounded-lg glass flex items-center justify-center shrink-0 group-hover:bg-gradient-cyan/10 transition-colors">
                  <MapPin className="h-5 w-5 text-[var(--cyan)]" />
                </div>
                <span className="text-sm text-muted-foreground pt-2">Thiruvarur, Tamilnadu</span>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="h-10 w-10 rounded-lg glass flex items-center justify-center shrink-0 group-hover:bg-gradient-cyan/10 transition-colors">
                  <Mail className="h-5 w-5 text-[var(--cyan)]" />
                </div>
                <span className="text-sm text-muted-foreground pt-2">infynuxsolutions@gmail.com</span>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="h-10 w-10 rounded-lg glass flex items-center justify-center shrink-0 group-hover:bg-gradient-cyan/10 transition-colors">
                  <WhatsAppIcon className="h-5 w-5 text-[var(--cyan)]" />
                </div>
                <span className="text-sm text-muted-foreground pt-2">+91 7010850923</span>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="h-10 w-10 rounded-lg glass flex items-center justify-center shrink-0 group-hover:bg-gradient-cyan/10 transition-colors">
                  <Phone className="h-5 w-5 text-[var(--cyan)]" />
                </div>
                <span className="text-sm text-muted-foreground pt-2">+91 7010850923</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-6 text-[10px] uppercase tracking-widest text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} INFYNUX. PRECISION ENGINEERED.</p>
          <div className="flex gap-8">
            <Link to="/privacy" className="hover:text-[var(--cyan)] transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-[var(--cyan)] transition-colors">Terms</Link>
            <Link to="/cookies" className="hover:text-[var(--cyan)] transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: {label: string, to: string}[] }) {
  return (
    <div className="space-y-6">
      <div className="relative inline-block">
        <h4 className="font-display text-xl font-bold tracking-tight">{title}</h4>
        <div className="absolute -bottom-2 left-0 w-8 h-1 bg-[var(--cyan)] rounded-full" />
      </div>
      <ul className="space-y-4 pt-4">
        {items.map((i) => (
          <li key={i.label} className="group">
            <Link to={i.to} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-[var(--cyan)] transition-all">
              <span className="text-[var(--cyan)] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300">&rarr;</span>
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
