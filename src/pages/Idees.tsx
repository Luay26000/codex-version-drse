import { PageHero, Section, InfoMessage, Status, QuickLinks } from "@/components/SPParts";
import { AudienceContextHeader } from "@/audience/AudienceContextHeader";
import { useAudience } from "@/audience/AudienceContext";
import { getPageConfig } from "@/audience/extras";
import { Lightbulb, Send, MessageSquare, ThumbsUp, HelpCircle, AlertTriangle } from "lucide-react";

const remontees = [
  { titre: "Simplifier l'accès aux fiches techniques sur le portail", type: "Idée", theme: "Outils", statut: "En analyse", resp: "T. Blanc", date: "02/05/2026", reponse: "Étude en cours avec l'équipe IT régionale." },
  { titre: "Manque d'argumentaires pour la gamme automatisme", type: "Irritant", theme: "Commerce", statut: "Acceptée", resp: "L. Martin", date: "30/04/2026", reponse: "Production de supports planifiée pour fin mai." },
  { titre: "Bonne pratique : kit de visite client comptoir", type: "Bonne pratique", theme: "Commerce", statut: "Traitée", resp: "S. Bernard", date: "25/04/2026", reponse: "Diffusée à l'ensemble de la DRSE." },
  { titre: "Question : procédure retour fournisseur Schneider", type: "Question", theme: "Fournisseurs", statut: "En cours", resp: "P. Leroy", date: "20/04/2026", reponse: "Réponse en préparation avec l'expert." },
  { titre: "Suggestion : ajouter un raccourci Yoobic sur l'accueil", type: "Suggestion", theme: "Outils", statut: "Acceptée", resp: "T. Blanc", date: "18/04/2026", reponse: "Intégrée au tableau de bord régional." },
  { titre: "Outil CRM lent en mobilité sur certaines zones", type: "Problème outil", theme: "IT", statut: "Soumise", resp: "—", date: "15/04/2026", reponse: "—" },
];

const statusKind: Record<string, "ok" | "info" | "warn" | "danger" | "neutral"> = {
  "Soumise": "neutral", "En analyse": "info", "Acceptée": "ok", "En cours": "info", "Traitée": "ok", "Refusée": "danger",
};

const types = ["Question", "Bonne idée", "Irritant terrain", "Bonne pratique", "Problème outil", "Suggestion d'amélioration"];
const themes = ["Commerce", "Fournisseurs", "Outils", "RH", "Onboarding", "IT", "Autre"];

export default function Idees() {
  const { audienceId } = useAudience();
  const cfg = getPageConfig(audienceId).idees;
  const remonteesSorted = [...remontees].sort((a, b) => {
    const sa = cfg.featuredThemes.indexOf(a.theme);
    const sb = cfg.featuredThemes.indexOf(b.theme);
    const ta = cfg.featuredTypes.indexOf(a.type);
    const tb = cfg.featuredTypes.indexOf(b.type);
    return ((sa === -1 ? 999 : sa) - (sb === -1 ? 999 : sb)) || ((ta === -1 ? 999 : ta) - (tb === -1 ? 999 : tb));
  });
  const sortedTypes = [...types].sort((a, b) => {
    const ia = cfg.featuredTypes.findIndex((t) => a.toLowerCase().includes(t.toLowerCase()));
    const ib = cfg.featuredTypes.findIndex((t) => b.toLowerCase().includes(t.toLowerCase()));
    return (ia === -1 ? 999 : ia) - (ib === -1 ? 999 : ib);
  });
  const sortedThemes = [...themes].sort((a, b) => {
    const ia = cfg.featuredThemes.indexOf(a);
    const ib = cfg.featuredThemes.indexOf(b);
    return (ia === -1 ? 999 : ia) - (ib === -1 ? 999 : ib);
  });
  return (
    <div className="p-6 space-y-6 max-w-[1400px] mx-auto">
      <PageHero
        eyebrow="Espace contributif"
        title="Boîte à questions & bonnes idées"
        subtitle="Un espace simple pour poser une question, partager une idée ou remonter un irritant terrain."
      />

      <AudienceContextHeader page="idees" />
      {cfg.message && <div className="text-xs text-muted-foreground italic px-1">{cfg.message}</div>}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { icon: HelpCircle, title: "Poser une question", desc: "Une interrogation métier, outil ou procédure.", color: "from-secondary to-primary" },
          { icon: Lightbulb, title: "Partager une bonne idée", desc: "Une suggestion utile pour la région.", color: "from-warning to-[hsl(36,90%,40%)]" },
          { icon: AlertTriangle, title: "Remonter un irritant", desc: "Un blocage récurrent rencontré sur le terrain.", color: "from-[hsl(0,60%,45%)] to-destructive" },
        ].map((c) => (
          <button key={c.title} className={`group text-left rounded-md p-5 bg-gradient-to-br ${c.color} text-primary-foreground hover:shadow-lg transition-shadow`}>
            <c.icon className="h-6 w-6 opacity-90" />
            <div className="font-display text-lg font-semibold mt-3">{c.title}</div>
            <div className="text-xs opacity-90 mt-1">{c.desc}</div>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Section title="Déposer une remontée" webpart="Boîte à idées / Microsoft Forms" subtitle="Formulaire — Boîte à idées SharePoint">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium text-foreground block mb-1">Type de remontée</label>
                <select className="w-full px-3 py-2 text-sm bg-muted border border-border rounded focus:outline-none focus:border-secondary">
                  {sortedTypes.map((t) => <option key={t}>{t}</option>)}
                </select>
              </div>
              <div>
                <label className="text-xs font-medium text-foreground block mb-1">Thème</label>
                <select className="w-full px-3 py-2 text-sm bg-muted border border-border rounded focus:outline-none focus:border-secondary">
                  {sortedThemes.map((t) => <option key={t}>{t}</option>)}
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="text-xs font-medium text-foreground block mb-1">Titre</label>
                <input className="w-full px-3 py-2 text-sm bg-muted border border-border rounded focus:outline-none focus:border-secondary" placeholder="Résumé en une phrase" />
              </div>
              <div className="md:col-span-2">
                <label className="text-xs font-medium text-foreground block mb-1">Description</label>
                <textarea rows={4} className="w-full px-3 py-2 text-sm bg-muted border border-border rounded focus:outline-none focus:border-secondary" placeholder="Décrivez le contexte, l'enjeu et la suggestion." />
              </div>
              <div>
                <label className="text-xs font-medium text-foreground block mb-1">Agence / service concerné</label>
                <input className="w-full px-3 py-2 text-sm bg-muted border border-border rounded focus:outline-none focus:border-secondary" placeholder="Ex. Agence Lyon Part-Dieu" />
              </div>
              <div>
                <label className="text-xs font-medium text-foreground block mb-1">Priorité</label>
                <select className="w-full px-3 py-2 text-sm bg-muted border border-border rounded focus:outline-none focus:border-secondary">
                  <option>Faible</option><option>Normale</option><option>Élevée</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-medium text-foreground block mb-1">Auteur</label>
                <input className="w-full px-3 py-2 text-sm bg-muted border border-border rounded" defaultValue="Marie Dupont" readOnly />
              </div>
              <div>
                <label className="text-xs font-medium text-foreground block mb-1">Pièce jointe / lien</label>
                <input className="w-full px-3 py-2 text-sm bg-muted border border-border rounded focus:outline-none focus:border-secondary" placeholder="Optionnel" />
              </div>
              <div className="md:col-span-2 flex gap-3 pt-2">
                <button type="button" className="bg-secondary text-secondary-foreground px-5 py-2 rounded text-sm font-medium hover:bg-secondary/90 inline-flex items-center gap-2">
                  <Send className="h-4 w-4" /> Envoyer la remontée
                </button>
                <button type="button" className="border border-border text-primary px-5 py-2 rounded text-sm font-medium hover:bg-muted">Annuler</button>
              </div>
            </form>
          </Section>
        </div>

        <Section title="Indicateurs simples" webpart="Indicateur manuel" subtitle="Repères éditoriaux manuels">
          <div className="space-y-4">
            {[
              { label: "Remontées reçues ce mois", value: "24" },
              { label: "Remontées traitées", value: "18" },
              { label: "Sujets en cours", value: "6" },
            ].map((kpi) => (
              <div key={kpi.label} className="flex items-center justify-between p-3 bg-muted rounded">
                <div className="text-xs text-muted-foreground">{kpi.label}</div>
                <div className="text-2xl font-display font-bold text-primary">{kpi.value}</div>
              </div>
            ))}
            <p className="text-[11px] text-muted-foreground italic">
              Ces indicateurs sont des repères éditoriaux. Ils ne constituent pas un reporting temps réel.
            </p>
          </div>
        </Section>
      </div>

      <Section title="Suivi des remontées" webpart="Liste SharePoint" subtitle="Liste SharePoint — Remontées terrain DRSE">
        <div className="overflow-x-auto -mx-5">
          <table className="w-full text-sm">
            <thead className="bg-muted text-xs uppercase text-muted-foreground">
              <tr>
                <th className="text-left px-5 py-2 font-medium">Titre</th>
                <th className="text-left px-3 py-2 font-medium">Type</th>
                <th className="text-left px-3 py-2 font-medium">Thème</th>
                <th className="text-left px-3 py-2 font-medium">Statut</th>
                <th className="text-left px-3 py-2 font-medium">Responsable</th>
                <th className="text-left px-3 py-2 font-medium">Date</th>
                <th className="text-left px-3 py-2 font-medium">Réponse / décision</th>
              </tr>
            </thead>
            <tbody>
              {remonteesSorted.map((r) => (
                <tr key={r.titre} className="border-t border-border hover:bg-muted/40">
                  <td className="px-5 py-3 font-medium text-foreground">{r.titre}</td>
                  <td className="px-3 py-3 text-muted-foreground">{r.type}</td>
                  <td className="px-3 py-3 text-muted-foreground">{r.theme}</td>
                  <td className="px-3 py-3"><Status label={r.statut} kind={statusKind[r.statut]} /></td>
                  <td className="px-3 py-3 text-muted-foreground">{r.resp}</td>
                  <td className="px-3 py-3 text-muted-foreground text-xs">{r.date}</td>
                  <td className="px-3 py-3 text-muted-foreground text-xs max-w-[300px]">{r.reponse}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Section title="Idées récentes par catégorie" webpart="Liste SharePoint / Boîte à idées">
          <div className="grid grid-cols-2 gap-3">
            {[
              { theme: "Commerce", count: 8, icon: Lightbulb },
              { theme: "Outils", count: 6, icon: MessageSquare },
              { theme: "Fournisseurs", count: 4, icon: ThumbsUp },
              { theme: "Onboarding", count: 3, icon: Lightbulb },
            ].map((c) => (
              <div key={c.theme} className="p-4 border border-border rounded">
                <c.icon className="h-5 w-5 text-secondary mb-2" />
                <div className="text-2xl font-display font-bold text-primary">{c.count}</div>
                <div className="text-xs text-muted-foreground">{c.theme}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Sondage régional rapide" webpart="Sondage">
          <div className="p-4 bg-muted rounded">
            <div className="text-sm font-medium text-foreground mb-3">
              Quel sujet souhaitez-vous voir traité en priorité dans la prochaine version du portail ?
            </div>
            <div className="space-y-2">
              {[
                { label: "Améliorer la recherche fournisseur", pct: 42 },
                { label: "Ajouter un suivi onboarding personnalisé", pct: 28 },
                { label: "Étendre les indicateurs commerce", pct: 18 },
                { label: "Notifications Teams intégrées", pct: 12 },
              ].map((o) => (
                <div key={o.label}>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{o.label}</span><span className="font-medium">{o.pct}%</span>
                  </div>
                  <div className="h-2 bg-card rounded overflow-hidden">
                    <div className="h-full bg-secondary" style={{ width: `${o.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Section title="Mes remontées" webpart="Liste SharePoint — vue par auteur">
          <ul className="space-y-2">
            {[
              { t: "Suggestion : raccourci Yoobic", s: "Acceptée", k: "ok" as const },
              { t: "Argumentaires automatisme", s: "En cours", k: "info" as const },
              { t: "Procédure retour Schneider ?", s: "En analyse", k: "info" as const },
            ].map((r) => (
              <li key={r.t} className="flex items-center justify-between p-3 border border-border rounded">
                <span className="text-sm text-foreground truncate">{r.t}</span>
                <Status label={r.s} kind={r.k} />
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Discussions ciblées" webpart="Viva Engage / Liens">
          <ul className="space-y-2">
            {[
              "Bonnes pratiques agence comptoir",
              "Retours kit Printemps Énergie",
              "Difficultés appro câbles HT",
              "Outils mobiles : retours terrain",
            ].map((d) => (
              <li key={d}>
                <a href="#" className="flex items-center justify-between p-3 border border-border rounded hover:border-secondary">
                  <span className="text-sm text-foreground">{d}</span>
                  <span className="text-xs text-secondary">Rejoindre →</span>
                </a>
              </li>
            ))}
          </ul>
        </Section>
      </div>

      <QuickLinks
        items={[
          { label: "Poser une question", href: "#" },
          { label: "Partager une bonne idée", href: "#" },
          { label: "Suivi des remontées", href: "#" },
          { label: "Viva Engage", href: "#" },
          { label: "Sondage régional", href: "#" },
        ]}
      />

      <InfoMessage>
        Les remontées sont analysées et orientées vers les bons interlocuteurs. Les sujets nécessitant un
        traitement opérationnel restent suivis dans les outils adaptés.
      </InfoMessage>
    </div>
  );
}
