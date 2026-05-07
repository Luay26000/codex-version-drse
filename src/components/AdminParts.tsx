import { ReactNode } from "react";
import { ShieldCheck } from "lucide-react";

export function AdminHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="bg-card border border-border rounded-md p-6">
      <div className="flex items-center gap-3 mb-2">
        <div className="h-9 w-9 rounded bg-warning/15 text-warning flex items-center justify-center">
          <ShieldCheck className="h-5 w-5" />
        </div>
        <div>
          <div className="text-[11px] uppercase tracking-widest text-muted-foreground font-semibold">
            Administration / Cadrage — Réservé contributeurs / IT / projet
          </div>
          <h1 className="font-display text-2xl font-bold text-primary mt-0.5">{title}</h1>
        </div>
      </div>
      <p className="text-sm text-muted-foreground ml-12">{subtitle}</p>
    </div>
  );
}

export function AdminBlock({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="sp-section">
      <div className="sp-section-header"><h2 className="sp-section-title">{title}</h2></div>
      <div className="p-5">{children}</div>
    </section>
  );
}
