import { createFileRoute } from "@tanstack/react-router";
import { ProgramGrid } from "@/components/ProgramGrid";
import { SectionHeader } from "@/components/SectionHeader";
import { APPLY_FORM_URL } from "@/lib/constants";

export const Route = createFileRoute("/internships")({
  head: () => ({
    meta: [
      { title: "VishMerc | Internships & Training" },
      { name: "description", content: "Launch your tech career with industry-focused internships, hands-on projects, and verified certificates." },
      { property: "og:title", content: "VishMerc | Internships & Training" },
      { property: "og:description", content: "Launch your tech career with industry-focused internships, hands-on projects, and verified certificates." },
    ],
    links: [{ rel: "canonical", href: "/internships" }],
  }),
  component: InternshipsPage,
});

function InternshipsPage() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="Internships"
          title={<>Pick the program that <span className="text-gradient">moves you forward</span></>}
          description="All programs include real projects, mentor reviews, and a verified completion certificate."
        />
        <div className="mt-14">
          <ProgramGrid />
        </div>
        <div className="mt-20 rounded-3xl border border-border bg-card p-10 text-center">
          <h3 className="text-2xl md:text-3xl font-bold">Ready to start?</h3>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">Applications take less than 2 minutes. Spots fill quickly.</p>
          <a href={APPLY_FORM_URL} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-(--shadow-glow-sm) hover:brightness-110 transition">
            Apply for Internship
          </a>
        </div>
      </div>
    </section>
  );
}
