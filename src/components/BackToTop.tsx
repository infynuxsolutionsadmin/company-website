import { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 600);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-gradient-cyan flex items-center justify-center text-[#001018] shadow-2xl shadow-[var(--cyan)]/40 hover:scale-110 transition-all duration-300 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
    >
      <ArrowUpRight className="h-6 w-6" />
    </button>
  );
}
