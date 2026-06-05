import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/SectionHeader";
import { Sparkles, Target, Heart } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "VishMerc | Internships & Training" },
      { name: "description", content: "Launch your tech career with industry-focused internships, hands-on projects, and verified certificates." },
      { property: "og:title", content: "VishMerc | Internships & Training" },
      { property: "og:description", content: "Launch your tech career with industry-focused internships, hands-on projects, and verified certificates." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  { icon: Sparkles, t: "Innovation", d: "We choose modern over comfortable. We build for what's next." },
  { icon: Target, t: "Student Growth", d: "Our success is measured by how far our interns go." },
  { icon: Heart, t: "Integrity", d: "Verified certificates, honest mentorship, real outcomes." },
];

function AboutPage() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="About VishMerc"
          title={<>Intelligent solutions for a <span className="text-gradient">limitless future</span></>}
          description="VishMerc Technologies Pvt. Ltd. is an AI and software company dedicated to building intelligent products and shaping technology careers."
        />

        <div className="mt-16 grid md:grid-cols-2 gap-10 items-start max-w-5xl mx-auto">
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Founded with a single mission — to make modern technology accessible
              to every motivated student — VishMerc bridges the gap between
              classroom learning and real industry work.
            </p>
            <p>
              We operate at the intersection of artificial intelligence, software
              engineering, and education. Our internship programs are crafted by
              practitioners who ship code daily.
            </p>
            <p>
              We're MSME-registered, certificate-verified, and committed to a
              transparent, student-first experience from day one.
            </p>
          </div>
          <div className="grid gap-4">
            {values.map(({ icon: Icon, t, d }) => (
              <div key={t} className="rounded-2xl border border-border bg-card p-5 flex gap-4">
                <div className="h-11 w-11 shrink-0 rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20 flex items-center justify-center">
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="font-semibold">{t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
