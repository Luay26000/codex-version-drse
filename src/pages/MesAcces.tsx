import { PageHero, Section, Status, QuickLinks, InfoMessage } from "@/components/SPParts";
import { Star, Clock, Bell, Bookmark, ChevronRight, ListChecks } from "lucide-react";
import { Link } from "react-router-dom";
import { useAudience } from "@/audience/AudienceContext";
import { AudienceBanner } from "@/audience/AudienceSwitcher";
import { getPageConfig } from "@/audience/extras";
import type { AudienceId } from "@/audience/profiles";

const remontees = [
  { titre: "Suggestion : raccourci Yoobic sur l'accueil", type: "Suggestion", statut: "Acceptée", kind: "ok" as const },
  { titre: "Manque d'argumentaires automatisme", type: "Irritant", statut: "En cours", kind: "info" as const },
  { titre: "Procédure retour fournisseur Schneider ?", type: "Question", statut: "En analyse", kind: "info" as const },
];

const echeances = [
  { date: "12 mai", label: "Comité commercial régional" },
  { date: "15 mai", label: "Échéance animation fournisseurs" },
  { date: "21 mai", label: "Point onboarding managers" },
];

const personalFeeds: Record<AudienceId, {
  echeances: typeof echeances;
  remontees: typeof remontees;
  suggestions: string[];
  notifications: { label: string; date: string }[];
}> = {
  general: {
    echeances,
    remontees,
    suggestions: ["Support recommandé : Kit Printemps Énergie", "Procédure utile : retrouver un support commerce", "Contact suggéré : L. Martin — animation commerciale"],
    notifications: [
      { label: "Nouvelle opération : Challenge réseau Éclairage", date: "Aujourd'hui" },
      { label: "Mise à jour support : PLV éclairage industriel", date: "Hier" },
      { label: "Réponse à votre remontée 'Argumentaires automatisme'", date: "Il y a 2 j" },
    ],
  },
  direction: {
    echeances: [
      { date: "10 mai", label: "Comité DRSE" },
      { date: "20 mai", label: "Point fournisseurs en vigilance" },
      { date: "27 mai", label: "Synthèse remontées terrain" },
    ],
    remontees: [
      { titre: "Synthèse semaine 18 : irritants outils", type: "Synthèse", statut: "En analyse", kind: "info" },
      { titre: "Vigilance appro câbles HT", type: "Vigilance", statut: "En cours", kind: "info" },
      { titre: "Bonne idée à diffuser : kit visite client", type: "Bonne pratique", statut: "Traitée", kind: "ok" },
    ],
    suggestions: ["Vue recommandée : fournisseurs en vigilance", "À consulter : synthèse remontées terrain", "Contact suggéré : S. Bernard — ventes régionales"],
    notifications: [
      { label: "Point vigilance Nexans mis à jour", date: "Hier" },
      { label: "Synthèse remontées terrain disponible", date: "Il y a 2 j" },
      { label: "Comité DRSE ajouté à l'agenda", date: "Il y a 4 j" },
    ],
  },
  agence: {
    echeances: [
      { date: "8 mai", label: "Lancement opération commerciale" },
      { date: "15 mai", label: "Échéance supports PLV" },
      { date: "25 mai", label: "Date limite remontées terrain" },
    ],
    remontees,
    suggestions: ["Support recommandé : PLV éclairage industriel", "Procédure utile : préparer une visite client", "Contact suggéré : L. Martin — animation commerciale"],
    notifications: [
      { label: "Kit Printemps Énergie disponible", date: "Aujourd'hui" },
      { label: "PLV éclairage industriel mise à jour", date: "Hier" },
      { label: "Votre remontée Yoobic est acceptée", date: "Il y a 2 j" },
    ],
  },
  commerce: {
    echeances: [
      { date: "9 mai", label: "Comité animation commerciale" },
      { date: "13 mai", label: "Publication kit commercial" },
      { date: "18 mai", label: "Revue calendrier Grégoire" },
    ],
    remontees: [
      { titre: "Manque d'argumentaires automatisme", type: "Irritant", statut: "En cours", kind: "info" },
      { titre: "Retours kit Printemps Énergie", type: "Question", statut: "En analyse", kind: "info" },
      { titre: "Suggestion : raccourci Yoobic sur l'accueil", type: "Suggestion", statut: "Acceptée", kind: "ok" },
    ],
    suggestions: ["Support recommandé : Argumentaire Hager Connect", "Vue utile : calendrier Grégoire", "Contact suggéré : C. Garcia — calendrier opérations"],
    notifications: [
      { label: "Calendrier opérations mai-juin mis à jour", date: "Aujourd'hui" },
      { label: "Argumentaire Hager Connect publié", date: "Hier" },
      { label: "Point Yoobic / CRM planifié", date: "Il y a 3 j" },
    ],
  },
  assistante: {
    echeances: [
      { date: "10 mai", label: "Réunion coordination pôle" },
      { date: "19 mai", label: "Mise à jour modèles de documents" },
      { date: "26 mai", label: "Échéance compte rendu" },
    ],
    remontees: [
      { titre: "Demande de modèle compte rendu pôle", type: "Question", statut: "Acceptée", kind: "ok" },
      { titre: "Clarifier procédure onboarding manager", type: "Suggestion", statut: "En cours", kind: "info" },
      { titre: "Centraliser les documents à relayer", type: "Irritant", statut: "En analyse", kind: "info" },
    ],
    suggestions: ["Modèle recommandé : compte rendu réunion", "Procédure utile : coordination pôle", "Contact suggéré : É. Rey — RH régionale"],
    notifications: [
      { label: "Modèle compte rendu réunion mis à jour", date: "Hier" },
      { label: "Point onboarding managers ajouté", date: "Il y a 2 j" },
      { label: "Nouvelle procédure de coordination disponible", date: "Il y a 5 j" },
    ],
  },
  expertise: {
    echeances: [
      { date: "11 mai", label: "Point expertise fournisseurs" },
      { date: "15 mai", label: "Réunion fabricants" },
      { date: "22 mai", label: "Revue vigilance approvisionnement" },
    ],
    remontees: [
      { titre: "Question : procédure retour fournisseur Schneider", type: "Question", statut: "En analyse", kind: "info" },
      { titre: "Tension appro câbles HT", type: "Vigilance", statut: "En cours", kind: "info" },
      { titre: "Bonne pratique expertise éclairage", type: "Bonne pratique", statut: "Traitée", kind: "ok" },
    ],
    suggestions: ["Info fabricant : PowerLogic", "Support technique : Hager Connect", "Contact suggéré : P. Leroy — expertise"],
    notifications: [
      { label: "Vigilance approvisionnement Nexans actualisée", date: "Hier" },
      { label: "Webinaire Schneider ajouté", date: "Il y a 2 j" },
      { label: "Fiche expertise IRVE mise à jour", date: "Il y a 4 j" },
    ],
  },
  standard: {
    echeances: [
      { date: "12 mai", label: "Événement régional" },
      { date: "15 mai", label: "Opération visible" },
      { date: "28 mai", label: "Point accueil nouvel arrivant" },
    ],
    remontees: [
      { titre: "Question fréquente : accès Yoobic mobile", type: "Question", statut: "Traitée", kind: "ok" },
      { titre: "Où trouver les modes opératoires ?", type: "Question", statut: "En analyse", kind: "info" },
      { titre: "Suggestion : page contacts plus visible", type: "Suggestion", statut: "Acceptée", kind: "ok" },
    ],
    suggestions: ["Page recommandée : onboarding", "Procédure utile : où trouver quoi", "Contact suggéré : T. Blanc — support outils"],
    notifications: [
      { label: "Information régionale importante publiée", date: "Hier" },
      { label: "Nouveau support utile ajouté", date: "Il y a 2 j" },
      { label: "Question fréquente traitée", date: "Il y a 5 j" },
    ],
  },
};

const suggestionIcons = [Star, ListChecks, Bell];

export default function MesAcces() {
  const { audienceId } = useAudience();
  const cfg = getPageConfig(audienceId).mesAcces;
  const outils = cfg.outils;
  const favoris = cfg.favoris;
  const recents = cfg.recents;
  const personal = personalFeeds[audienceId] ?? personalFeeds.general;
  return (
    <div className="p-6 space-y-6 max-w-[1400px] mx-auto">
      <PageHero
        eyebrow="Espace personnalisé · V2"
        title="Mes accès & suivi"
        subtitle="Vos outils fréquents, favoris, dernières consultations, remontées et échéances en un seul endroit."
      />
      <div className="flex items-center gap-2"><AudienceBanner /></div>

      <Section title="Mes outils fréquents" webpart="Liens rapides personnalisés">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {outils.map((o) => (
            <a key={o.label} href="#" className="sp-card hover:border-secondary group">
              <div className="text-sm font-semibold text-primary">{o.label}</div>
              <div className="text-[11px] text-muted-foreground mt-1">{o.desc}</div>
              <div className="text-[11px] text-secondary font-medium mt-2 group-hover:underline">Ouvrir →</div>
            </a>
          ))}
        </div>
      </Section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Section title="Mes favoris" webpart="Liste SharePoint personnelle">
          <ul className="space-y-2">
            {favoris.map((f) => {
              const inner = (
                <>
                  <Bookmark className="h-4 w-4 text-secondary flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-foreground truncate">{f.label}</div>
                    <div className="text-[11px] text-muted-foreground">{f.type}</div>
                  </div>
                  <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />
                </>
              );
              const cls = "flex items-center gap-3 p-2 border border-border rounded hover:border-secondary";
              return (
                <li key={f.label}>
                  {f.to ? <Link to={f.to} className={cls}>{inner}</Link> : <a href="#" className={cls}>{inner}</a>}
                </li>
              );
            })}
          </ul>
        </Section>

        <Section title="Mes dernières consultations" webpart="Activité personnelle">
          <ul className="space-y-2">
            {recents.map((r) => (
              <li key={r.label} className="flex items-start gap-3 p-2 rounded hover:bg-muted">
                <Clock className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-foreground leading-tight">{r.label}</div>
                  <div className="text-[11px] text-muted-foreground">{r.kind} · {r.date}</div>
                </div>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Mes échéances" webpart="Événements personnels">
          <ul className="space-y-3">
            {personal.echeances.map((e) => (
              <li key={e.label} className="flex gap-3 items-center pb-3 border-b border-border last:border-0 last:pb-0">
                <div className="flex-shrink-0 w-12 text-center">
                  <div className="text-[10px] uppercase text-secondary font-semibold">{e.date.split(" ")[1]}</div>
                  <div className="text-lg font-bold text-primary leading-none">{e.date.split(" ")[0]}</div>
                </div>
                <div className="text-sm text-foreground">{e.label}</div>
              </li>
            ))}
          </ul>
        </Section>
      </div>

      <Section title="Mes remontées" webpart="Liste SharePoint — vue filtrée par auteur">
        <div className="overflow-x-auto -mx-5">
          <table className="w-full text-sm">
            <thead className="bg-muted text-xs uppercase text-muted-foreground">
              <tr>
                <th className="text-left px-5 py-2 font-medium">Titre</th>
                <th className="text-left px-3 py-2 font-medium">Type</th>
                <th className="text-left px-3 py-2 font-medium">Statut</th>
                <th className="text-left px-3 py-2 font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              {personal.remontees.map((r) => (
                <tr key={r.titre} className="border-t border-border hover:bg-muted/40">
                  <td className="px-5 py-3 font-medium text-foreground">{r.titre}</td>
                  <td className="px-3 py-3 text-muted-foreground">{r.type}</td>
                  <td className="px-3 py-3"><Status label={r.statut} kind={r.kind} /></td>
                  <td className="px-3 py-3"><Link to="/idees" className="text-secondary hover:underline text-xs">Voir le suivi →</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Section title="Suggestions pour vous" webpart="Recommandations">
          <ul className="space-y-2">
            {personal.suggestions.map((label, index) => {
              const Icon = suggestionIcons[index % suggestionIcons.length];
              return (
              <li key={label} className="flex items-center gap-3 p-3 border border-border rounded hover:border-secondary">
                <Icon className="h-4 w-4 text-secondary flex-shrink-0" />
                <div className="text-sm text-foreground flex-1">{label}</div>
                <a href="#" className="text-xs text-secondary hover:underline">Ouvrir →</a>
              </li>
              );
            })}
          </ul>
        </Section>

        <Section title="Notifications" webpart="Notifications">
          <ul className="space-y-2">
            {personal.notifications.map((n) => (
              <li key={n.label} className="flex items-start gap-3 p-3 border border-border rounded">
                <Bell className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <div className="text-sm text-foreground">{n.label}</div>
                  <div className="text-[11px] text-muted-foreground">{n.date}</div>
                </div>
              </li>
            ))}
          </ul>
        </Section>
      </div>

      <QuickLinks
        items={[
          { label: "Pixel", href: "#" },
          { label: "Qlik", href: "#" },
          { label: "CRM", href: "#" },
          { label: "Soon", href: "#" },
          { label: "Boîte à questions", to: "/idees" },
          { label: "Indicateurs portail", to: "/indicateurs" },
        ]}
      />

      <InfoMessage>
        Cet espace est <strong>personnel</strong> : favoris, suivis et raccourcis dépendent de votre usage du portail.
        Aucune donnée commerciale sensible n'y est stockée.
      </InfoMessage>
    </div>
  );
}
