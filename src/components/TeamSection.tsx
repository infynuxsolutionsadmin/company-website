import { motion } from "framer-motion";
import { Twitter, Linkedin, Github, ExternalLink } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
  socials: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

const team: TeamMember[] = [
  {
    name: "YogeshWaran",
    role: "Founder",
    description: "Visionary leader driving innovation, business growth, strategic excellence, and future-ready digital transformation.",
    image: "/Yogesh.png",
    socials: { twitter: "", linkedin: "", github: "" }
  },
  {
    name: "Govindarajan",
    role: "Managing Director",
    description: "Crafting impactful brand identities, strategic campaigns, customer engagement, and long-term business growth.",
    image: "/Govind.png",
    socials: { twitter: "", linkedin: "", github: "" }
  },
  {
    name: "Shathis Kumar",
    role: "Lead Developer",
    description: "Building scalable, secure, high-performance applications using modern technologies and advanced development architecture.",
    image: "/shathis.png",
    socials: { twitter: "", linkedin: "", github: "" }
  },
  {
    name: "Rajesh",
    role: "Designer & Video Editor",
    description: "Designing intuitive, visually stunning, user-centered interfaces with seamless experiences and modern creative aesthetics.",
    image: "/Rajesh.png",
    socials: { twitter: "", linkedin: "", github: "" }
  }
];

export function TeamSection() {
  return (
    <section className="py-28 relative overflow-hidden bg-background">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--cyan)]/20 blur-[120px] rounded-full animate-float" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--purple-glow)]/20 blur-[120px] rounded-full animate-float" style={{ animationDelay: "3s" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs uppercase tracking-widest text-[var(--cyan)] mb-6">
              <span className="h-2 w-2 rounded-full bg-[var(--cyan)] animate-pulse" />
              Our Collective Intelligence
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Meet Our <span className="text-gradient-cyan">Experts</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The creative minds and technical experts driving innovation at INfynux.
            </p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <TeamMemberCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamMemberCard({ member, index }: { member: TeamMember; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group"
    >
      <div className="relative rounded-3xl gradient-border p-8 text-center h-full flex flex-col items-center transition-all duration-500 hover:shadow-2xl hover:shadow-[var(--cyan)]/10">
        {/* Profile Image with Gradient Border */}
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-gradient-cosmic rounded-xl blur-sm opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
          <div className="relative h-32 w-32 rounded-xl p-1 bg-gradient-cosmic">
            <div className="h-full w-full rounded-xl overflow-hidden border-0 border-background">
              <img 
                src={member.image} 
                alt={member.name} 
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>
          {/* Status Dot */}
          <div className="absolute bottom-1 right-2 h-5 w-5 rounded-full bg-background p-1">
            <div className="h-full w-full rounded-full bg-green-500 animate-pulse" />
          </div>
        </div>

        <h3 className="font-display text-xl font-bold mb-1 group-hover:text-[var(--cyan)] transition-colors">
          {member.name}
        </h3>
        <p className="text-[var(--cyan)] text-xs font-bold uppercase tracking-widest mb-4">
          {member.role}
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-8 flex-1">
          {member.description}
        </p>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-4">
          {member.socials.linkedin && (
            <a 
              href={member.socials.linkedin} 
              className="h-9 w-9 rounded-lg glass flex items-center justify-center hover:bg-[var(--cyan)] hover:text-[#001018] hover:shadow-[0_0_15px_rgba(0,229,255,0.5)] transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          )}
          {member.socials.twitter && (
            <a 
              href={member.socials.twitter} 
              className="h-9 w-9 rounded-lg glass flex items-center justify-center hover:bg-[var(--cyan)] hover:text-[#001018] hover:shadow-[0_0_15px_rgba(0,229,255,0.5)] transition-all duration-300"
              aria-label="Twitter"
            >
              <Twitter className="h-4 w-4" />
            </a>
          )}
          {member.socials.github && (
            <a 
              href={member.socials.github} 
              className="h-9 w-9 rounded-lg glass flex items-center justify-center hover:bg-[var(--cyan)] hover:text-[#001018] hover:shadow-[0_0_15px_rgba(0,229,255,0.5)] transition-all duration-300"
              aria-label="Github"
            >
              <Github className="h-4 w-4" />
            </a>
          )}
        </div>

        {/* Hover Accent */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-40 transition-opacity">
          <ExternalLink className="h-4 w-4 text-[var(--cyan)]" />
        </div>
      </div>
    </motion.div>
  );
}
