import { createFileRoute, Link } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { ProgramGrid, PROGRAMS } from "@/components/ProgramGrid";
import { VerificationCard } from "@/components/VerificationCard";
import { SectionHeader } from "@/components/SectionHeader";
import { Briefcase, Award, Users, Clock, Sparkles, TrendingUp, ArrowRight, Quote } from "lucide-react";
import { APPLY_FORM_URL } from "@/lib/constants";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VishMerc | Internships & Training" },
      { name: "description", content: "Launch your tech career with industry-focused internships, hands-on projects, and verified certificates." },
      { property: "og:title", content: "VishMerc | Internships & Training" },
      { property: "og:description", content: "Launch your tech career with industry-focused internships, hands-on projects, and verified certificates." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const features = [
  { icon: Briefcase, title: "Real-world Projects", desc: "Ship work that ends up in your portfolio — not throwaway exercises." },
  { icon: Award, title: "Internship Certificates", desc: "Verified, shareable certificates recognized by recruiters." },
  { icon: Users, title: "Industry Mentorship", desc: "Get direct guidance from engineers building production systems." },
  { icon: Clock, title: "Flexible Learning", desc: "Self-paced tracks that fit around your college schedule." },
  { icon: Sparkles, title: "Skill Development", desc: "Modern stacks, modern tools — exactly what hiring teams expect." },
  { icon: TrendingUp, title: "Career Growth", desc: "From first project to first offer — we help you keep moving." },
];

const steps = [
  { n: "01", t: "Apply", d: "Submit your application in under 2 minutes." },
  { n: "02", t: "Selection", d: "We review and confirm your spot in the cohort." },
  { n: "03", t: "Internship", d: "Build real projects with guidance and structure." },
  { n: "04", t: "Certificate", d: "Earn a verified VishMerc internship certificate." },
];

const testimonials = [
  { name: "Aarav Sharma", role: "AI Intern", quote: "The mentorship and project pace pushed me well beyond my comfort zone. Best 8 weeks of my college life." },
  { name: "Priya Patel", role: "Web Dev Intern", quote: "I shipped a full React app to production. My portfolio finally looks like a real developer's." },
  { name: "Rohan Iyer", role: "Data Science Intern", quote: "Clean structure, great mentors. The certificate actually opened doors during placements." },
];

function Home() {
  return (
    <>
      <Hero />

      {/* Programs */}
      <section id="programs" className="py-24 md:py-32">
        <div className="container-page">
          <SectionHeader
            eyebrow="Internship Tracks"
            title={<>Choose your <span className="text-gradient">domain</span></>}
            description="Seven curated internship tracks across the most in-demand technologies in 2026."
          />
          <div className="mt-14">
            <ProgramGrid />
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="bg-muted/40 py-24 md:py-32 border-y border-border">
        <div className="container-page">
          <SectionHeader
            eyebrow="Why VishMerc"
            title={<>Built for serious <span className="text-gradient">student growth</span></>}
            description="Everything we ship is designed to make you genuinely employable."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl bg-card border border-border p-6 hover:border-primary/40 hover:shadow-(--shadow-glow-sm) transition">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
                  <Icon size={20} />
                </div>
                <h3 className="mt-5 font-semibold text-lg">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 md:py-32">
        <div className="container-page">
          <SectionHeader
            eyebrow="How it works"
            title={<>Four steps to your <span className="text-gradient">certificate</span></>}
          />
          <div className="mt-16 relative">
            <div className="hidden md:block absolute top-8 left-[8%] right-[8%] h-px bg-linear-to-r from-transparent via-primary/40 to-transparent" />
            <div className="grid gap-10 md:grid-cols-4">
              {steps.map((s) => (
                <div key={s.n} className="text-center">
                  <div className="relative mx-auto h-16 w-16 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shadow-(--shadow-glow-sm)">
                    {s.n}
                  </div>
                  <h3 className="mt-5 font-semibold text-lg">{s.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Verification */}
      <section className="py-24 md:py-32 bg-muted/40 border-y border-border">
        <div className="container-page">
          <VerificationCard />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32">
        <div className="container-page">
          <SectionHeader
            eyebrow="Student stories"
            title={<>Real interns. <span className="text-gradient">Real outcomes.</span></>}
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-2xl border border-border bg-card p-6 hover:border-primary/40 transition">
                <Quote size={20} className="text-primary" />
                <blockquote className="mt-4 text-sm leading-relaxed text-foreground">"{t.quote}"</blockquote>
                <figcaption className="mt-6 flex items-center gap-3 pt-4 border-t border-border">
                  <div className="h-10 w-10 rounded-full bg-primary/15 text-primary flex items-center justify-center font-semibold">{t.name.charAt(0)}</div>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* About preview + CTA */}
      <section className="bg-surface text-surface-foreground py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--gradient-radial)" }} />
        <div className="container-page relative grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">About VishMerc</div>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight">
              Intelligent solutions for a <span className="text-gradient">limitless future</span>.
            </h2>
            <p className="mt-4 text-white/70">
              VishMerc Technologies builds AI-driven products and trains the next
              generation of engineers. Our internships are designed to close the
              gap between college and industry — through real projects, real
              mentors, and real outcomes.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/about" className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold hover:bg-white/10 transition">
                Learn more <ArrowRight size={14} />
              </Link>
              <a href={APPLY_FORM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-(--shadow-glow-sm) hover:brightness-110 transition">
                Apply Now <ArrowRight size={14} />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {PROGRAMS.slice(0, 4).map(({ slug, title, icon: Icon }) => (
              <div key={slug} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5">
                <Icon size={22} className="text-primary" />
                <div className="mt-3 text-sm font-semibold">{title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
