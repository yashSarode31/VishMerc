import { useState } from "react";
import { ShieldCheck, Search, CheckCircle2, XCircle } from "lucide-react";

type Status = "idle" | "loading" | "valid" | "invalid";

export function VerificationCard() {
  const [id, setId] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = id.trim();
    if (!trimmed) return;
    setStatus("loading");
    // Placeholder — backend verification will be wired up later.
    setTimeout(() => {
      setStatus(/^VM-[A-Z0-9]{4,}$/i.test(trimmed) ? "valid" : "invalid");
    }, 700);
  };

  return (
    <div className="relative rounded-3xl border border-border bg-card p-8 md:p-10 overflow-hidden">
      <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/15 blur-3xl" />
      <div className="relative">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          <ShieldCheck size={14} /> Trust & Verification
        </div>
        <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">
          Verify your <span className="text-gradient">Offer Letter</span> or Certificate
        </h2>
        <p className="mt-3 text-muted-foreground max-w-xl">
          Enter the unique Offer ID printed on your VishMerc document to confirm
          its authenticity in seconds.
        </p>

        <form onSubmit={onSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-xl">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              value={id}
              onChange={(e) => { setId(e.target.value); setStatus("idle"); }}
              placeholder="e.g. VM-A1B2C3"
              className="w-full h-12 rounded-xl border border-border bg-background pl-10 pr-4 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition"
              aria-label="Offer ID"
              maxLength={64}
            />
          </div>
          <button
            type="submit"
            disabled={status === "loading"}
            className="h-12 rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground hover:brightness-110 hover:shadow-(--shadow-glow-sm) disabled:opacity-60 transition"
          >
            {status === "loading" ? "Verifying…" : "Verify"}
          </button>
        </form>

        {status === "valid" && (
          <p className="mt-4 inline-flex items-center gap-2 text-sm text-primary">
            <CheckCircle2 size={16} /> Valid — this document was issued by VishMerc.
          </p>
        )}
        {status === "invalid" && (
          <p className="mt-4 inline-flex items-center gap-2 text-sm text-destructive">
            <XCircle size={16} /> We couldn't verify this ID. Please re-check or contact us.
          </p>
        )}
      </div>
    </div>
  );
}
