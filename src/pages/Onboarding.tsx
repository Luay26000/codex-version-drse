import { PageHero, Section, InfoMessage, Status, WebPartTag, QuickLinks } from "@/components/SPParts";
import { AudienceContextHeader } from "@/audience/AudienceContextHeader";
import { useAudience } from "@/audience/AudienceContext";
import { getPageConfig } from "@/audience/extras";
import { CheckCircle2, Circle, FileSpreadsheet, Download, GraduationCap, UserPlus, ArrowRight } from "lucide-react";

function rank<T>(items: T[], key: (i: T) => string, featured: string[]): T[] {
  const score = (s: string) => {
    const i = featured.findIndex((f) => s.toLowerCase().includes(f.toLowerCase()));
    return i === -1 ? 999 : i;
  };
  return [...items].sort((a, b) => score(key(a)) - score(key(b)));
}

const steps = [
  { period: "Avant arrivée", ordre: 1, desc: "Préparation du poste, accès et matériel", pilote: "RH / IT", resp: "Service RH", statut: "Validée" as const, public: "Tous nouveaux arrivants" },
  { period: "J1", ordre: 2, desc: "Accueil agence, présentation équipe et tour des outils", pilote: "Manager direct", resp: "Manager", statut: "Validée" as const, public: "Tous" },
  { period: "J2-J3", ordre: 3, desc: "Découverte Pixel, CRM, Kezako et navigation portail", pilote: "Manager / référent", resp: "Référent outils", statut: "Validée" as const, public: "Tous" },
  { period: "Semaine 1", ordre: 4, desc: "Modules Soon obligatoires & présentation expertise régionale", pilote: "Référent formation", resp: "L. Martin", statut: "En cours" as const, public: "Tous" },
  { period: "Semaine 2", ordre: 5, desc: "Accompagnement terrain et premières visites clients", pilote: "Manager", resp: "Manager", statut: "À faire" as const, public: "Commerce" },
  { period: "Semaine 3-4", ordre: 6, desc: "Approfondissement métier, modes opératoires et templates", pilote: "Référent métier", resp: "Pôle expertise", statut: "À faire" as const, public: "Tous" },
  { period: "J30", ordre: 7, desc: "Point de suivi 30 jours avec le manager et le RH local", pilote: "Manager + RH", resp: "Manager", statut: "À faire" as const, public: "Tous" },
];

const statusKind: Record<string, "ok" | "info" | "neutral"> = { "Validée": "ok", "En cours": "info", "À faire": "neutral" };

const modesOp = [
  { titre: "Créer une demande client", desc: "Procédure pas à pas — 2 min" },
  { titre: "Accéder à une procédure régionale", desc: "Liens directs vers le bon SharePoint" },
  { titre: "Retrouver un support commerce", desc: "Bibliothèque commerce & PLV" },
  { titre: "Contacter le bon interlocuteur", desc: "Annuaire régional « Qui contacter ? »" },
  { titre: "Utiliser un outil régional", desc: "Tableau de bord & accès rapides" },
  { titre: "Remonter une information terrain", desc: "Boîte à questions & bonnes idées en un clic" },
];

const templates = [
  { name: "Modèle compte rendu réunion", type: "DOCX" },
  { name: "Trame suivi action commerciale", type: "XLSX" },
  { name: "Modèle support agence mensuel", type: "PPTX" },
  { name: "Trame visite client", type: "DOCX" },
  { name: "Reporting opération", type: "XLSX" },
  { name: "Plan d'action 30 jours", type: "DOCX" },
];

const newcomers = [
  { name: "Julie Moreau", role: "Commerciale itinérante", agence: "Lyon", date: "Arrivée 02/05" },
  { name: "Thomas Petit", role: "Conseiller comptoir", agence: "Marseille", date: "Arrivée 28/04" },
  { name: "Aurélie Roche", role: "Assistante de pôle", agence: "Nice", date: "Arrivée 21/04" },
];

const soonCards = [
  { title: "Soon — Parcours nouveau collaborateur", meta: "8 modules · ~3 h" },
  { title: "Soon — Outils commerce", meta: "5 modules · ~2 h" },
  { title: "Viva Learning DRSE", meta: "Sélection régionale" },
];

export default function Onboarding() {
  const { audienceId } = useAudience();
  const cfg = getPageConfig(audienceId).onboarding;
  const tpl = rank(templates, (t) => t.name, cfg.featuredTemplates);
  const mop = rank(modesOp, (m) => m.titre, cfg.featuredModes);
  const soon = rank(soonCards, (s) => s.title, cfg.featuredSoon);
  return (
    <div className="p-6 space-y-6 max-w-[1400px] mx-auto">
      <PageHero
        eyebrow="Intégration & ressources"
        title="Onboarding & procédures"
        subtitle="Les repères essentiels pour démarrer, accompagner et retrouver les modes opératoires utiles."
      />

      <AudienceContextHeader page="onboarding" />
      {cfg.message && <div className="text-xs text-muted-foreground italic px-1">{cfg.message}</div>}

      {/* Soon featured */}
      <div className="sp-section overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="bg-gradient-to-br from-primary to-secondary p-6 text-primary-foreground flex flex-col justify-center">
            <div className="flex items-center justify-between mb-1">
              <div className="text-xs uppercase tracking-widest opacity-80">Plateforme d'intégration</div>
              <WebPartTag label="Carte éditoriale / Bannière" />
            </div>
            <div className="font-display text-2xl font-bold">Soon</div>
            <div className="text-sm opacity-90 mt-1">Parcours et contenus d'intégration officiels Rexel.</div>
          </div>
          <div className="md:col-span-2 p-6">
            <p className="text-sm text-muted-foreground mb-4">
              Le portail régional <strong>n'est pas un LMS</strong>. Il oriente vers Soon pour les parcours et formations,
              et regroupe localement les repères courts utiles à la prise de poste.
            </p>
            <div className="flex flex-wrap gap-2">
              <a href="#" className="bg-secondary text-secondary-foreground px-4 py-1.5 rounded text-sm font-medium hover:bg-secondary/90">Accéder à Soon</a>
              <a href="#" className="border border-border text-primary px-4 py-1.5 rounded text-sm font-medium hover:bg-muted">Voir les modules recommandés</a>
            </div>
          </div>
        </div>
      </div>

      <Section title="Parcours onboarding 30 jours" webpart="Liste SharePoint" subtitle="Checklist régionale — étapes principales d'intégration.">
        <ol className="space-y-2">
          {steps.map((s) => {
            const Icon = s.statut === "Validée" ? CheckCircle2 : Circle;
            const iconColor = s.statut === "Validée" ? "text-success" : s.statut === "En cours" ? "text-secondary" : "text-muted-foreground";
            return (
              <li key={s.ordre} className="flex gap-4 p-3 border border-border rounded hover:border-secondary">
                <Icon className={`h-5 w-5 flex-shrink-0 mt-0.5 ${iconColor}`} />
                <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-2 items-center">
                  <div className="md:col-span-2 text-xs font-semibold text-secondary uppercase">{s.period}</div>
                  <div className="md:col-span-5">
                    <div className="text-sm font-medium text-foreground">{s.desc}</div>
                    <div className="text-[11px] text-muted-foreground">Public : {s.public}</div>
                  </div>
                  <div className="md:col-span-2 text-xs text-muted-foreground">Pilote : {s.pilote}</div>
                  <div className="md:col-span-2 text-xs text-muted-foreground">{s.resp}</div>
                  <div className="md:col-span-1"><Status label={s.statut} kind={statusKind[s.statut]} /></div>
                </div>
              </li>
            );
          })}
        </ol>
        <p className="text-xs text-muted-foreground mt-3 italic">
          Le suivi nominatif personnalisé (cases à cocher individuelles) relève d'un développement PowerApps prévu en V2.
        </p>
      </Section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Section title="Modes opératoires essentiels" webpart="Liens rapides">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {mop.map((m) => (
              <a key={m.titre} href="#" className="p-3 border border-border rounded hover:border-secondary group">
                <div className="text-sm font-medium text-foreground flex items-center justify-between">
                  {m.titre}
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-secondary" />
                </div>
                <div className="text-xs text-muted-foreground mt-1">{m.desc}</div>
              </a>
            ))}
          </div>
        </Section>

        <Section title="Modèles de documents" webpart="Modèles de documents">
          <ul className="space-y-2">
            {tpl.map((t) => (
              <li key={t.name} className="flex items-center gap-3 p-2 rounded hover:bg-muted">
                <div className="h-8 w-8 rounded bg-secondary/10 text-secondary flex items-center justify-center">
                  <FileSpreadsheet className="h-4 w-4" />
                </div>
                <div className="flex-1 text-sm text-foreground">{t.name}</div>
                <span className="text-[10px] text-muted-foreground bg-muted px-2 py-0.5 rounded border border-border">{t.type}</span>
                <Download className="h-4 w-4 text-muted-foreground" />
              </li>
            ))}
          </ul>
        </Section>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 sp-section p-6">
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 rounded bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0">
              <GraduationCap className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="sp-section-title">Formations & ressources Soon</h3>
                <WebPartTag label="Viva Learning / Lien Soon" />
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Accès direct aux modules de formation Soon recommandés et à la bibliothèque Viva Learning régionale.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {soon.map((s) => (
                  <a key={s.title} href="#" className="border border-border rounded p-3 hover:border-secondary">
                    <div className="text-sm font-medium text-primary">{s.title}</div>
                    <div className="text-xs text-muted-foreground mt-1">{s.meta}</div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Section title="Nouveaux arrivants" webpart="Nouveaux arrivants" subtitle="Bloc optionnel — dépend des données RH M365">
          <ul className="space-y-3">
            {newcomers.map((n) => (
              <li key={n.name} className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-secondary/15 text-secondary flex items-center justify-center"><UserPlus className="h-4 w-4" /></div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-foreground">{n.name}</div>
                  <div className="text-[11px] text-muted-foreground">{n.role} · {n.agence}</div>
                </div>
                <div className="text-[11px] text-muted-foreground">{n.date}</div>
              </li>
            ))}
          </ul>
        </Section>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Section title="Je cherche une procédure pour…" webpart="Recherche guidée">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              "Créer une demande client",
              "Accéder à un outil",
              "Retrouver un support commerce",
              "Contacter un référent métier",
              "Remonter une information terrain",
              "Préparer une visite client",
            ].map((q) => (
              <a key={q} href="#" className="text-sm p-2.5 border border-border rounded hover:border-secondary flex items-center justify-between">
                <span>{q}</span><ArrowRight className="h-3.5 w-3.5 text-muted-foreground" />
              </a>
            ))}
          </div>
        </Section>

        <Section title="Suggestions cette semaine" webpart="Recommandations">
          <ul className="space-y-2 text-sm">
            {[
              "Procédure la plus consultée : Créer une demande client",
              "Template recommandé : Plan d'action 30 jours",
              "À lire : Guide Hager Connect",
              "Module Soon recommandé : Outils commerce",
            ].map((s) => (
              <li key={s} className="p-2.5 border border-border rounded hover:border-secondary">{s}</li>
            ))}
          </ul>
        </Section>
      </div>

      <QuickLinks
        items={[
          { label: "Soon", href: "#" },
          { label: "Modèles de documents", href: "#" },
          { label: "Modes opératoires", href: "#" },
          { label: "Kezako", href: "#" },
          { label: "Rexel GPT", href: "#" },
        ]}
      />

      <InfoMessage>
        Le portail donne accès aux <strong>repères courts et ressources utiles</strong>. Les contenus longs restent
        dans les SharePoints ou outils sources.
      </InfoMessage>
    </div>
  );
}
