import { Code2, Coffee, Brain, Palette, BarChart3, Shield, Terminal, ArrowRight } from "lucide-react";
import { APPLY_FORM_URL } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const AVAILABLE_INTERNSHIP_SLUG = "web" as const;

export const PROGRAMS = [
  { slug: "web", title: "Web Development", icon: Code2, desc: "Build responsive, modern web apps with React, Next.js, and Tailwind.", duration: "1–6 months" },
  { slug: "java", title: "Java Development", icon: Coffee, desc: "Master core Java, OOP, and Spring Boot through real projects.", duration: "1–6 months" },
  { slug: "python", title: "Python Development", icon: Terminal, desc: "From scripting to backend APIs — Python end to end.", duration: "1–6 months" },
  { slug: "ai", title: "AI & Machine Learning", icon: Brain, desc: "Train models, work with LLMs, ship intelligent features.", duration: "1–6 months" },
  { slug: "uiux", title: "UI / UX Design", icon: Palette, desc: "Design polished interfaces with Figma and modern UX systems.", duration: "1–6 months" },
  { slug: "data", title: "Data Science", icon: BarChart3, desc: "Explore data, build dashboards, surface real insight.", duration: "1–6 months" },
  { slug: "cyber", title: "Cyber Security", icon: Shield, desc: "Learn the offense and defense of modern systems.", duration: "1–6 months" },
] as const;

export function ProgramGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {PROGRAMS.map(({ slug, title, icon: Icon, desc, duration }) => {
        const isAvailable = slug === AVAILABLE_INTERNSHIP_SLUG;

        return (
          <article
            key={slug}
            className={cn(
              "group relative rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-(--shadow-glow-sm)",
              isAvailable && "border-primary/40 ring-1 ring-primary/25",
            )}
          >
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition pointer-events-none" style={{ background: "var(--gradient-radial)" }} />
          {!isAvailable && (
            <Badge variant="secondary" className="absolute right-4 top-4">
              Coming Soon
            </Badge>
          )}
          <div className="relative">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
              <Icon size={20} />
            </div>
            <h3 className="mt-5 text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            <div className="mt-5 flex items-center justify-between pt-4 border-t border-border">
              <span className="text-xs font-medium text-muted-foreground">{duration}</span>
              {isAvailable ? (
                <a
                  href={APPLY_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all"
                >
                  Apply <ArrowRight size={14} />
                </a>
              ) : (
                <span
                  aria-disabled="true"
                  className="inline-flex items-center gap-1 text-sm font-semibold bg-[#f3f4f6] text-[#9ca3af] cursor-not-allowed opacity-70"
                >
                  Coming Soon
                </span>
              )}
            </div>
          </div>
          </article>
        );
      })}
    </div>
  );
}
