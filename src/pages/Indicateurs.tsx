import { PageHero, Section, Status, InfoMessage } from "@/components/SPParts";
import { Eye, FileText, MessageSquare, AlertTriangle, TrendingUp } from "lucide-react";

const activite = [
  { label: "Visites du portail (30 j)", value: "820" },
  { label: "Pages vues (30 j)", value: "3 240" },
  { label: "Utilisateurs actifs", value: "126" },
  { label: "Outils ouverts depuis le portail", value: "540" },
];

const topPages = [
  { page: "Accueil", vues: 1040 },
  { page: "Commerce & animations", vues: 640 },
  { page: "Fournisseurs & fabricants", vues: 520 },
  { page: "Onboarding & procédures", vues: 360 },
  { page: "Boîte à questions & bonnes idées", vues: 310 },
  { page: "Expertises & contacts", vues: 270 },
];

const contenus = [
  { label: "Actualités publiées (30 j)", value: "12" },
  { label: "Supports ajoutés", value: "28" },
  { label: "Liens vérifiés", value: "94 %" },
  { label: "Contenus archivés", value: "7" },
];

const remontees = [
  { label: "Questions reçues", value: "38" },
  { label: "Bonnes idées partagées", value: "21" },
  { label: "Irritants signalés", value: "9" },
  { label: "Sujets traités", value: "27" },
];

const alertes = [
  { titre: "3 liens externes inaccessibles", kind: "warn" as const, sujet: "Liens à vérifier" },
  { titre: "5 contenus non mis à jour depuis 6 mois", kind: "warn" as const, sujet: "Contenus anciens" },
  { titre: "2 pages avec faible consultation", kind: "neutral" as const, sujet: "Pages à revoir" },
];

export default function Indicateurs() {
  return (
    <div className="p-6 space-y-6 max-w-[1400px] mx-auto">
      <PageHero
        eyebrow="Vie du portail · V2"
        title="Indicateurs portail"
        subtitle="Suivi d'usage et de fraîcheur des contenus du portail régional. Cette page ne reflète pas la performance commerciale."
      />

      <InfoMessage>
        Ces indicateurs portent uniquement sur la <strong>vie du portail</strong> (usage, contenus, remontées).
        Les indicateurs commerciaux restent dans <strong>Qlik</strong> et le <strong>reporting Power BI — selon accès</strong>.
      </InfoMessage>

      <Section title="Activité du portail" webpart="Indicateur manuel" subtitle="Repères d'usage — 30 derniers jours">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {activite.map((a) => (
            <div key={a.label} className="sp-card">
              <Eye className="h-4 w-4 text-secondary mb-2" />
              <div className="text-2xl font-display font-bold text-primary">{a.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{a.label}</div>
            </div>
          ))}
        </div>
      </Section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Section title="Pages les plus consultées" webpart="Graphique simple">
          <ul className="space-y-2">
            {topPages.map((p) => {
              const max = Math.max(...topPages.map((x) => x.vues));
              const pct = Math.round((p.vues / max) * 100);
              return (
                <li key={p.page}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-foreground">{p.page}</span>
                    <span className="text-muted-foreground font-medium">{p.vues.toLocaleString("fr-FR")}</span>
                  </div>
                  <div className="h-2 bg-muted rounded overflow-hidden">
                    <div className="h-full bg-secondary" style={{ width: `${pct}%` }} />
                  </div>
                </li>
              );
            })}
          </ul>
        </Section>

        <Section title="Contenus publiés" webpart="Indicateur manuel">
          <div className="grid grid-cols-2 gap-3">
            {contenus.map((c) => (
              <div key={c.label} className="sp-card">
                <FileText className="h-4 w-4 text-secondary mb-2" />
                <div className="text-2xl font-display font-bold text-primary">{c.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{c.label}</div>
              </div>
            ))}
          </div>
        </Section>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Section title="Remontées terrain" webpart="Indicateur manuel">
          <div className="grid grid-cols-2 gap-3">
            {remontees.map((r) => (
              <div key={r.label} className="sp-card">
                <MessageSquare className="h-4 w-4 text-secondary mb-2" />
                <div className="text-2xl font-display font-bold text-primary">{r.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{r.label}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Adoption & rubriques" webpart="Indicateur manuel">
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-success" />
              <span className="flex-1">Boîte à questions en forte progression</span>
              <Status label="+38 %" kind="ok" />
            </li>
            <li className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-secondary" />
              <span className="flex-1">Page Fournisseurs : adoption stable</span>
              <Status label="Stable" kind="info" />
            </li>
            <li className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-warning" />
              <span className="flex-1">Rubrique « Modèles de documents » peu utilisée</span>
              <Status label="À relancer" kind="warn" />
            </li>
          </ul>
        </Section>
      </div>

      <Section title="Alertes de maintenance éditoriale" webpart="Liste SharePoint">
        <ul className="space-y-2">
          {alertes.map((a) => (
            <li key={a.titre} className="flex items-center gap-3 p-3 rounded border border-warning/30 bg-warning/5">
              <AlertTriangle className="h-4 w-4 text-warning flex-shrink-0" />
              <div className="flex-1">
                <div className="text-sm font-medium text-foreground">{a.titre}</div>
                <div className="text-[11px] text-muted-foreground">{a.sujet}</div>
              </div>
              <a href="#" className="text-xs text-secondary hover:underline">Voir →</a>
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
}
