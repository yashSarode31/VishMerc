import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/SectionHeader";
import { Mail, Globe, Linkedin, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { COMPANY } from "@/lib/constants";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "VishMerc | Internships & Training" },
      { name: "description", content: "Launch your tech career with industry-focused internships, hands-on projects, and verified certificates." },
      { property: "og:title", content: "VishMerc | Internships & Training" },
      { property: "og:description", content: "Launch your tech career with industry-focused internships, hands-on projects, and verified certificates." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(5, "Message is too short").max(1000),
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const map: Record<string, string> = {};
      for (const issue of result.error.issues) map[issue.path[0] as string] = issue.message;
      setErrors(map);
      return;
    }
    setErrors({});
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-24 md:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="Contact"
          title={<>Let's <span className="text-gradient">talk</span></>}
          description="Questions about internships, partnerships, or services? We'd love to hear from you."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-2 max-w-5xl mx-auto">
          <div className="space-y-4">
            <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 hover:border-primary/40 transition">
              <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20 flex items-center justify-center"><Mail size={18} /></div>
              <div><div className="text-xs text-muted-foreground">Email</div><div className="font-semibold">{COMPANY.email}</div></div>
            </a>
            <a href={`https://${COMPANY.website}`} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 hover:border-primary/40 transition">
              <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20 flex items-center justify-center"><Globe size={18} /></div>
              <div><div className="text-xs text-muted-foreground">Website</div><div className="font-semibold">{COMPANY.website}</div></div>
            </a>
            <a href={COMPANY.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 hover:border-primary/40 transition">
              <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20 flex items-center justify-center"><Linkedin size={18} /></div>
              <div><div className="text-xs text-muted-foreground">LinkedIn</div><div className="font-semibold">@vishmerc</div></div>
            </a>
            <a href={COMPANY.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 hover:border-primary/40 transition">
              <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20 flex items-center justify-center"><MessageCircle size={18} /></div>
              <div><div className="text-xs text-muted-foreground">WhatsApp</div><div className="font-semibold">Message us</div></div>
            </a>
          </div>

          <form onSubmit={onSubmit} className="rounded-3xl border border-border bg-card p-7 space-y-5">
            <div>
              <label className="text-xs font-semibold text-muted-foreground">Name</label>
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-1 w-full h-11 rounded-lg border border-border bg-background px-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
                maxLength={100}
              />
              {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
            </div>
            <div>
              <label className="text-xs font-semibold text-muted-foreground">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-1 w-full h-11 rounded-lg border border-border bg-background px-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
                maxLength={255}
              />
              {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
            </div>
            <div>
              <label className="text-xs font-semibold text-muted-foreground">Message</label>
              <textarea
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 resize-none"
                maxLength={1000}
              />
              {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-(--shadow-glow-sm) hover:brightness-110 transition"
            >
              <Send size={15} /> Send message
            </button>
            {sent && (
              <p className="inline-flex items-center gap-2 text-sm text-primary">
                <CheckCircle2 size={16} /> Thanks — we'll be in touch shortly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
