import { useAudience } from "@/audience/AudienceContext";
import { AudienceBanner } from "@/audience/AudienceSwitcher";
import { Section } from "@/components/SPParts";
import { ChevronRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

type Page = "commerce" | "fournisseurs" | "onboarding" | "expertises" | "idees";

const titles: Record<Page, string> = {
  commerce: "Vos accès prioritaires — Commerce",
  fournisseurs: "Contenus recommandés — Fournisseurs & fabricants",
  onboarding: "Ressources prioritaires — Onboarding",
  expertises: "Contacts recommandés pour votre rôle",
  idees: "Votre sélection — Boîte à questions",
};

export function AudienceContextHeader({ page }: { page: Page }) {
  const { audience } = useAudience();
  const items = audience.priorities[page];
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <AudienceBanner />
      </div>
      <Section title={titles[page]} webpart="Liens rapides ciblés" subtitle="Contenus mis en avant selon votre activité.">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {items.map((it) => {
            const cls = "px-3 py-2 text-xs font-medium border border-secondary/30 rounded bg-secondary/5 hover:bg-secondary/15 text-primary inline-flex items-center justify-between gap-2 transition";
            const content = (
              <>
                <span className="inline-flex items-center gap-1.5 truncate">
                  <Sparkles className="h-3 w-3 text-secondary flex-shrink-0" />
                  <span className="truncate">{it.label}</span>
                </span>
                <ChevronRight className="h-3 w-3 text-muted-foreground flex-shrink-0" />
              </>
            );
            return it.to
              ? <Link key={it.label} to={it.to} className={cls}>{content}</Link>
              : <a key={it.label} href={it.href || "#"} className={cls}>{content}</a>;
          })}
        </div>
      </Section>
    </div>
  );
}
