import heroBg from "@/assets/hero-bg.jpg";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { APPLY_FORM_URL } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface text-surface-foreground">
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover opacity-50"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-surface/40 via-surface/70 to-surface" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-radial)" }} />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-10 h-32 w-32 rounded-full bg-primary/20 blur-3xl animate-[float_6s_ease-in-out_infinite]" />
      <div className="absolute bottom-1/4 right-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl animate-[float_8s_ease-in-out_infinite]" />

      <div className="container-page relative py-28 md:py-40 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary backdrop-blur animate-[fade-in_0.6s_ease-out]">
          <Sparkles size={14} /> Internship Programs · Now Open
        </div>

        <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] animate-[slide-up_0.7s_ease-out]">
          Take Your Career to the
          <br className="hidden sm:block" />{" "}
          <span className="text-gradient">Next Level</span> with VishMerc
        </h1>

        <p className="mt-6 text-base md:text-lg text-white/70 max-w-2xl mx-auto animate-[slide-up_0.9s_ease-out]">
          Join our internship programs and gain real-world experience in AI,
          Web Development, Software Engineering, and modern technologies.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 animate-[slide-up_1.1s_ease-out]">
          <a
            href={APPLY_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] hover:brightness-110 transition"
          >
            Apply for Internship
            <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
          </a>
          <Link
            to="/internships"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10 hover:border-primary/40 transition backdrop-blur"
          >
            Explore Programs
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-3 max-w-2xl mx-auto gap-6 border-t border-white/10 pt-8 animate-[fade-in_1.3s_ease-out]">
          {[
            { k: "Hands-On", v: "Project-Based Learning" },
            { k: "7", v: "Tech Domains" },
            { k: "100%", v: "Verified Certificates" },
          ].map((s) => (
            <div key={s.v}>
              <div className="text-2xl md:text-3xl font-bold text-primary">{s.k}</div>
              <div className="text-xs md:text-sm text-white/60 mt-1">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
