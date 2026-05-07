import { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

type Cta = { label: string; to?: string; href?: string; onClick?: () => void };

function CtaEl({ cta, variant }: { cta: Cta; variant: "primary" | "secondary" }) {
  const cls = variant === "primary"
    ? "bg-secondary hover:bg-secondary/90 text-secondary-foreground px-5 py-2 rounded text-sm font-medium inline-flex items-center gap-2"
    : "bg-transparent border border-primary-foreground/40 hover:bg-primary-foreground/10 text-primary-foreground px-5 py-2 rounded text-sm font-medium inline-flex items-center gap-2";
  const content = <>{cta.label}{variant === "primary" && <ChevronRight className="h-4 w-4" />}</>;
  if (cta.to) return <Link to={cta.to} className={cls}>{content}</Link>;
  if (cta.href) return <a href={cta.href} className={cls}>{content}</a>;
  return <button onClick={cta.onClick} className={cls}>{content}</button>;
}

export function PageHero({
  eyebrow, title, subtitle, message, ctaPrimary, ctaSecondary,
}: {
  eyebrow?: string; title: string; subtitle?: string; message?: string;
  ctaPrimary?: Cta; ctaSecondary?: Cta;
}) {
  return (
    <section className="relative overflow-hidden rounded-md bg-gradient-to-br from-primary to-[hsl(227,75%,35%)] text-primary-foreground p-8 md:p-10">
      <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-secondary/25" />
      <div className="absolute right-20 bottom-0 h-32 w-32 rounded-full bg-secondary/15" />
      <div className="relative max-w-3xl">
        {eyebrow && <div className="text-xs uppercase tracking-widest text-primary-foreground/70 mb-2">{eyebrow}</div>}
        <h1 className="font-display text-3xl md:text-4xl font-bold mb-3">{title}</h1>
        {subtitle && <p className="text-base md:text-lg text-primary-foreground/90 mb-2">{subtitle}</p>}
        {message && <p className="text-sm text-primary-foreground/80 mb-5 max-w-2xl">{message}</p>}
        {(ctaPrimary || ctaSecondary) && (
          <div className="flex flex-wrap gap-3 mt-4">
            {ctaPrimary && <CtaEl cta={ctaPrimary} variant="primary" />}
            {ctaSecondary && <CtaEl cta={ctaSecondary} variant="secondary" />}
          </div>
        )}
      </div>
    </section>
  );
}

export function WebPartTag({ label }: { label: string }) {
  return (
    <span
      title={`Composant prévu : ${label}`}
      className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider text-muted-foreground/80 border border-border bg-muted/60 px-1.5 py-0.5 rounded font-medium"
    >
      <span className="h-1 w-1 rounded-full bg-secondary" />
      WebPart · {label}
    </span>
  );
}

export function Section({ title, subtitle, webpart, action, children }: { title: string; subtitle?: string; webpart?: string; action?: ReactNode; children: ReactNode }) {
  return (
    <section className="sp-section">
      <div className="sp-section-header">
        <div className="min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h2 className="sp-section-title">{title}</h2>
            {webpart && <WebPartTag label={webpart} />}
          </div>
          {subtitle && <p className="text-xs text-muted-foreground mt-0.5">{subtitle}</p>}
        </div>
        {action}
      </div>
      <div className="p-5">{children}</div>
    </section>
  );
}

export function QuickLinks({ title, items, webpart = "Liens rapides" }: { title?: string; items: { label: string; to?: string; href?: string }[]; webpart?: string }) {
  return (
    <Section title={title || "Accès associés"} webpart={webpart}>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
        {items.map((it) => {
          const cls = "px-3 py-2 text-xs font-medium border border-border rounded bg-muted/40 hover:border-secondary hover:bg-muted text-foreground inline-flex items-center justify-between gap-2 transition";
          const content = <><span className="truncate">{it.label}</span><ChevronRight className="h-3 w-3 text-muted-foreground flex-shrink-0" /></>;
          return it.to
            ? <Link key={it.label} to={it.to} className={cls}>{content}</Link>
            : <a key={it.label} href={it.href || "#"} className={cls}>{content}</a>;
        })}
      </div>
    </Section>
  );
}

export function InfoMessage({ children, tone = "info" }: { children: ReactNode; tone?: "info" | "warning" | "success" }) {
  const tones = {
    info: "bg-secondary/10 border-secondary/40 text-primary",
    warning: "bg-warning/10 border-warning/40 text-foreground",
    success: "bg-success/10 border-success/40 text-foreground",
  };
  return (
    <div className={`border-l-4 px-4 py-3 rounded-sm text-sm ${tones[tone]}`}>
      {children}
    </div>
  );
}

export function Status({ label, kind }: { label: string; kind: "ok" | "warn" | "danger" | "neutral" | "info" }) {
  const map = {
    ok: "bg-success/15 text-success",
    warn: "bg-warning/20 text-[hsl(36,90%,30%)]",
    danger: "bg-destructive/15 text-destructive",
    neutral: "bg-muted text-muted-foreground border border-border",
    info: "bg-secondary/15 text-secondary",
  };
  return <span className={`sp-badge ${map[kind]}`}>{label}</span>;
}
