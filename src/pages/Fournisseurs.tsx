import { PageHero, Section, InfoMessage, Status } from "@/components/SPParts";
import { AudienceContextHeader } from "@/audience/AudienceContextHeader";
import { useAudience } from "@/audience/AudienceContext";
import { getPageConfig } from "@/audience/extras";
import { Search, Filter, ExternalLink, AlertTriangle } from "lucide-react";

type FStatus = "OK" | "Partielle" | "Rupture" | "À confirmer";
type Vigilance = "Aucune" | "Faible" | "Moyenne" | "Forte";

const fournisseurs: { nom: string; code: string; famille: string; cFour: string; cInterne: string; dispo: FStatus; vig: Vigilance; comment: string; maj: string }[] = [
  { nom: "Schneider Electric", code: "SCH001", famille: "Distribution électrique", cFour: "j.dubois@se.com", cInterne: "M. Dupont", dispo: "OK", vig: "Aucune", comment: "—", maj: "02/05/2026" },
  { nom: "Legrand", code: "LEG002", famille: "Appareillage", cFour: "contact-pro@legrand.fr", cInterne: "P. Leroy", dispo: "Partielle", vig: "Faible", comment: "Délais allongés sur série Mosaic", maj: "30/04/2026" },
  { nom: "Hager", code: "HAG003", famille: "Tableaux & coffrets", cFour: "support@hager.fr", cInterne: "S. Bernard", dispo: "OK", vig: "Aucune", comment: "—", maj: "01/05/2026" },
  { nom: "Nexans", code: "NEX004", famille: "Câbles & conducteurs", cFour: "pro@nexans.com", cInterne: "C. Garcia", dispo: "Rupture", vig: "Forte", comment: "Câbles HT en rupture jusqu'au 20/05", maj: "03/05/2026" },
  { nom: "ABB", code: "ABB005", famille: "Automatisme", cFour: "fr-pro@abb.com", cInterne: "L. Martin", dispo: "Partielle", vig: "Moyenne", comment: "Tension d'approvisionnement variateurs", maj: "28/04/2026" },
  { nom: "Philips Lighting", code: "PHI006", famille: "Éclairage", cFour: "trade@philips.com", cInterne: "M. Dupont", dispo: "À confirmer", vig: "Faible", comment: "Renouvellement gamme en cours", maj: "27/04/2026" },
];

const statusKind: Record<FStatus, "ok" | "warn" | "danger" | "neutral"> = {
  "OK": "ok", "Partielle": "warn", "Rupture": "danger", "À confirmer": "neutral",
};
const vigKind: Record<Vigilance, "ok" | "warn" | "danger" | "neutral"> = {
  "Aucune": "neutral", "Faible": "neutral", "Moyenne": "warn", "Forte": "danger",
};

export default function Fournisseurs() {
  const { audienceId } = useAudience();
  const cfg = getPageConfig(audienceId).fournisseurs;
  const fScore = (code: string) => {
    const i = cfg.featuredCodes.indexOf(code);
    return i === -1 ? 999 : i;
  };
  const sortedFour = [...fournisseurs].sort((a, b) => fScore(a.code) - fScore(b.code));
  const vigilances = sortedFour.filter((f) => f.vig === "Moyenne" || f.vig === "Forte");
  const fabricantScore = (name: string) => {
    const i = cfg.pinnedFabricants.findIndex((f) => name.toLowerCase().includes(f.toLowerCase()));
    return i === -1 ? 999 : i;
  };

  return (
    <div className="p-6 space-y-6 max-w-[1400px] mx-auto">
      <PageHero
        eyebrow="Annuaire régional"
        title="Fournisseurs & fabricants"
        subtitle="Une vue régionale simplifiée pour identifier les interlocuteurs, les informations utiles et les vigilances éventuelles."
      />

      <AudienceContextHeader page="fournisseurs" />
      {cfg.message && <div className="text-xs text-muted-foreground italic px-1">{cfg.message}</div>}


      <InfoMessage>
        Cette page ne remplace pas les <strong>référentiels fournisseurs officiels</strong>. Les informations détaillées
        et sensibles restent dans les outils sources.
      </InfoMessage>

      {/* Recherche / filtres */}
      <Section title="Recherche & filtres" webpart="Filtre de recherche / Barre de recherche">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
          <div className="md:col-span-4 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input className="w-full pl-9 pr-3 py-2 text-sm bg-muted border border-border rounded focus:outline-none focus:border-secondary" placeholder="Rechercher un fournisseur…" />
          </div>
          {[
            { label: "Famille produit", opts: ["Toutes", "Distribution électrique", "Appareillage", "Câbles", "Éclairage", "Automatisme"] },
            { label: "Disponibilité", opts: ["Toutes", "OK", "Partielle", "Rupture", "À confirmer"] },
            { label: "Vigilance", opts: ["Toutes", "Aucune", "Faible", "Moyenne", "Forte"] },
            { label: "Contact interne", opts: ["Tous", "M. Dupont", "P. Leroy", "S. Bernard", "C. Garcia", "L. Martin"] },
          ].map((f) => (
            <select key={f.label} className="md:col-span-2 px-3 py-2 text-sm bg-muted border border-border rounded focus:outline-none focus:border-secondary">
              <option>{f.label}</option>
              {f.opts.map((o) => <option key={o}>{o}</option>)}
            </select>
          ))}
        </div>
        <div className="text-xs text-muted-foreground mt-2 flex items-center gap-1"><Filter className="h-3 w-3" /> Filtres SharePoint — vues filtrées de la liste régionale.</div>
      </Section>

      {/* Tableau */}
      <Section title="Annuaire fournisseurs régionaux" webpart="Liste SharePoint" subtitle="Liste SharePoint — Vue régionale DRSE">
        <div className="overflow-x-auto -mx-5">
          <table className="w-full text-sm">
            <thead className="bg-muted text-xs uppercase text-muted-foreground">
              <tr>
                <th className="text-left px-5 py-2 font-medium">Fournisseur</th>
                <th className="text-left px-3 py-2 font-medium">Code</th>
                <th className="text-left px-3 py-2 font-medium">Famille</th>
                <th className="text-left px-3 py-2 font-medium">Contact fournisseur</th>
                <th className="text-left px-3 py-2 font-medium">Contact interne</th>
                <th className="text-left px-3 py-2 font-medium">Disponibilité</th>
                <th className="text-left px-3 py-2 font-medium">Vigilance</th>
                <th className="text-left px-3 py-2 font-medium">Commentaire</th>
                <th className="text-left px-3 py-2 font-medium">MAJ</th>
                <th className="text-left px-3 py-2 font-medium">Source</th>
              </tr>
            </thead>
            <tbody>
              {sortedFour.map((f) => (
                <tr key={f.code} className="border-t border-border hover:bg-muted/40">
                  <td className="px-5 py-3 font-medium text-foreground">{f.nom}</td>
                  <td className="px-3 py-3 text-muted-foreground text-xs">{f.code}</td>
                  <td className="px-3 py-3 text-muted-foreground">{f.famille}</td>
                  <td className="px-3 py-3 text-muted-foreground text-xs">{f.cFour}</td>
                  <td className="px-3 py-3 text-muted-foreground">{f.cInterne}</td>
                  <td className="px-3 py-3"><Status label={f.dispo} kind={statusKind[f.dispo]} /></td>
                  <td className="px-3 py-3"><Status label={f.vig} kind={vigKind[f.vig]} /></td>
                  <td className="px-3 py-3 text-muted-foreground text-xs max-w-[200px]">{f.comment}</td>
                  <td className="px-3 py-3 text-muted-foreground text-xs">{f.maj}</td>
                  <td className="px-3 py-3"><a href="#" className="text-secondary hover:underline inline-flex items-center gap-1 text-xs">Lien <ExternalLink className="h-3 w-3" /></a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Section
            title="Vigilances actives"
            webpart="Liste SharePoint — vue filtrée"
            subtitle="Vue filtrée — fournisseurs en vigilance moyenne ou forte"
            action={<Status label={`${vigilances.length} actives`} kind="warn" />}
          >
            <ul className="space-y-3">
              {vigilances.map((v) => (
                <li key={v.code} className="flex gap-3 p-3 rounded border border-warning/30 bg-warning/5">
                  <AlertTriangle className="h-5 w-5 text-warning flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-medium text-foreground">{v.nom}</span>
                      <Status label={v.vig} kind={vigKind[v.vig]} />
                      <Status label={v.dispo} kind={statusKind[v.dispo]} />
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{v.comment}</p>
                    <div className="text-[11px] text-muted-foreground mt-1">Mis à jour le {v.maj} · <a href="#" className="text-secondary hover:underline">Lien source</a></div>
                  </div>
                </li>
              ))}
            </ul>
          </Section>
        </div>

        <Section title="Contact expert" webpart="Contacts">
          <ul className="space-y-3 text-sm">
            <li className="pb-3 border-b border-border">
              <div className="font-medium">Sophie Bernard</div>
              <div className="text-xs text-muted-foreground">Responsable expertise régionale</div>
              <a href="#" className="text-xs text-secondary hover:underline">s.bernard@rexel.fr</a>
            </li>
            <li className="pb-3 border-b border-border">
              <div className="font-medium">Patrick Leroy</div>
              <div className="text-xs text-muted-foreground">Contact approvisionnement DRSE</div>
              <a href="#" className="text-xs text-secondary hover:underline">p.leroy@rexel.fr</a>
            </li>
            <li>
              <div className="font-medium">Claire Garcia</div>
              <div className="text-xs text-muted-foreground">Contact régional fournisseurs</div>
              <a href="#" className="text-xs text-secondary hover:underline">c.garcia@rexel.fr</a>
            </li>
          </ul>
        </Section>
      </div>

      {/* Infos fabricants */}
      <Section
        title="Infos fabricants utiles"
        webpart="Liste SharePoint / Liens"
        subtitle="Nouveautés, disponibilités et points d'attention — sans données sensibles ni conditions confidentielles."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            { fab: "Schneider Electric", info: "Nouvelle gamme PowerLogic disponible · webinaire 15/05.", tag: "Nouveauté", kind: "info" as const },
            { fab: "Hager", info: "Lancement Hager Connect — kit fournisseur transmis aux RACOR.", tag: "Lancement", kind: "info" as const },
            { fab: "Nexans", info: "Tension d'approvisionnement câbles HT jusqu'au 20/05.", tag: "Tension appro", kind: "warn" as const },
            { fab: "Legrand", info: "Délais allongés série Mosaic · alternative série Céliane.", tag: "À surveiller", kind: "warn" as const },
            { fab: "ABB", info: "Variateurs : approvisionnement variable selon référence.", tag: "À surveiller", kind: "warn" as const },
            { fab: "Philips Lighting", info: "Renouvellement gamme — point d'étape commerce courant mai.", tag: "Info", kind: "neutral" as const },
          ].sort((a, b) => fabricantScore(a.fab) - fabricantScore(b.fab)).map((m) => (
            <div key={m.fab} className="border border-border rounded p-3 hover:border-secondary">
              <div className="flex items-center justify-between mb-1.5">
                <div className="font-medium text-sm text-primary">{m.fab}</div>
                <Status label={m.tag} kind={m.kind} />
              </div>
              <p className="text-xs text-muted-foreground">{m.info}</p>
              <a href="#" className="text-[11px] text-secondary hover:underline mt-2 inline-block">Source officielle →</a>
            </div>
          ))}
        </div>
        <div className="mt-4 p-3 border border-dashed border-border rounded bg-muted/40 text-xs text-muted-foreground">
          <strong className="text-primary">Système d'étoiles fournisseur :</strong> idée à cadrer.
          Non livré en V1 — un scoring pertinent suppose règles de calcul, gouvernance et données fiables. Reporté en <strong>V2 / à cadrer</strong>.
        </div>
      </Section>

      {/* Tendance fournisseur */}
      <Section title="Tendance fournisseur" webpart="Indicateur manuel" subtitle="Lecture régionale synthétique — pas de scoring contractuel.">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {[
            { f: "Schneider Electric", t: "Stable", k: "ok" as const },
            { f: "Legrand", t: "À surveiller", k: "warn" as const },
            { f: "Hager", t: "Amélioration", k: "ok" as const },
            { f: "Nexans", t: "Tension", k: "danger" as const },
            { f: "ABB", t: "À surveiller", k: "warn" as const },
            { f: "Philips Lighting", t: "Stable", k: "ok" as const },
          ].sort((a, b) => fabricantScore(a.f) - fabricantScore(b.f)).map((x) => (
            <div key={x.f} className="border border-border rounded p-3">
              <div className="text-xs font-semibold text-primary truncate">{x.f}</div>
              <div className="mt-2"><Status label={x.t} kind={x.k} /></div>
            </div>
          ))}
        </div>
      </Section>

      {/* Retour terrain fournisseur */}
      <Section title="Retour terrain fournisseur" webpart="Indicateur manuel" subtitle="Ressenti régional — non contractuel">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          {[
            { l: "Satisfaction relationnelle", v: "Bonne" },
            { l: "Qualité de réponse", v: "Variable" },
            { l: "Fiabilité perçue", v: "Bonne" },
            { l: "Tendance générale", v: "Stable" },
          ].map((r) => (
            <div key={r.l} className="sp-card">
              <div className="text-xs text-muted-foreground">{r.l}</div>
              <div className="text-sm font-semibold text-primary mt-1">{r.v}</div>
              <div className="flex gap-0.5 mt-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span key={i} className={`text-sm ${i <= 4 ? "text-warning" : "text-muted-foreground/30"}`}>★</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="text-[11px] text-muted-foreground italic mt-3">
          Cet espace n'est pas une notation fournisseur officielle. Aucun score financier, RFA ou BFA n'est affiché.
        </p>
      </Section>

      {/* Accès associés */}
      <Section title="Accès associés" webpart="Liens rapides">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 text-sm">
          {[
            "Source officielle fournisseur",
            "Contacts expertise",
            "Vigilances actives",
            "Familles produits",
            "Qlik — pilotage achats",
          ].map((l) => (
            <a key={l} href="#" className="border border-border rounded px-3 py-2 hover:border-secondary text-foreground">{l}</a>
          ))}
        </div>
      </Section>
    </div>
  );
}
