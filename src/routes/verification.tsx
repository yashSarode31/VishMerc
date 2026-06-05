import { createFileRoute } from "@tanstack/react-router";
import { VerificationCard } from "@/components/VerificationCard";
import { SectionHeader } from "@/components/SectionHeader";

export const Route = createFileRoute("/verification")({
  head: () => ({
    meta: [
      { title: "VishMerc | Internships & Training" },
      { name: "description", content: "Launch your tech career with industry-focused internships, hands-on projects, and verified certificates." },
      { property: "og:title", content: "VishMerc | Internships & Training" },
      { property: "og:description", content: "Launch your tech career with industry-focused internships, hands-on projects, and verified certificates." },
    ],
    links: [{ rel: "canonical", href: "/verification" }],
  }),
  component: VerificationPage,
});

function VerificationPage() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="Verification"
          title={<>Trust, <span className="text-gradient">verified</span></>}
          description="Every VishMerc document carries a unique Offer ID you can confirm right here."
        />
        <div className="mt-14">
          <VerificationCard />
        </div>
      </div>
    </section>
  );
}
