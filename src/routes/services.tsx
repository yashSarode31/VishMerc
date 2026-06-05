import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/SectionHeader";
import { Code2, Cpu, Cloud, Smartphone, Bot, Layers } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "VishMerc | Internships & Training" },
      { name: "description", content: "Launch your tech career with industry-focused internships, hands-on projects, and verified certificates." },
      { property: "og:title", content: "VishMerc | Internships & Training" },
      { property: "og:description", content: "Launch your tech career with industry-focused internships, hands-on projects, and verified certificates." },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Bot, title: "AI & Machine Learning", desc: "Custom models, LLM integrations and intelligent automation." },
  { icon: Code2, title: "Web Development", desc: "Modern, performant React and Next.js web applications." },
  { icon: Smartphone, title: "Mobile Apps", desc: "Cross-platform apps that feel native, ship fast." },
  { icon: Cloud, title: "Cloud & DevOps", desc: "Scalable infrastructure on AWS, GCP and Cloudflare." },
  { icon: Cpu, title: "Automation", desc: "Streamline workflows with bots, agents and integrations." },
  { icon: Layers, title: "Product Design", desc: "Clean, premium UI/UX systems for digital products." },
];

function ServicesPage() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="What we do"
          title={<>Technology services for the <span className="text-gradient">next era</span></>}
          description="Beyond internships, VishMerc builds intelligent products for startups and enterprises."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-border bg-card p-6 hover:border-primary/40 hover:shadow-(--shadow-glow-sm) transition">
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
  );
}
