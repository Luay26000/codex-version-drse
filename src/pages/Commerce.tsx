import { PageHero, Section, InfoMessage, Status, WebPartTag, QuickLinks } from "@/components/SPParts";
import { AudienceContextHeader } from "@/audience/AudienceContextHeader";
import { useAudience } from "@/audience/AudienceContext";
import { getPageConfig } from "@/audience/extras";
import { FileText, Download, Calendar, Mail, Phone, ChevronRight } from "lucide-react";

const operations = [
  { titre: "Printemps Énergie 2026", type: "Opération régionale", debut: "05/05", fin: "30/05", statut: "En cours", perimetre: "DRSE", responsable: "L. Martin", kind: "ok" as const },
  { titre: "Challenge réseau Éclairage", type: "Challenge", debut: "12/05", fin: "15/06", statut: "Planifiée", perimetre: "Pôle Sud", responsable: "S. Bernard", kind: "info" as const },
  { titre: "Animation Schneider Electric", type: "Animation fournisseur", debut: "20/05", fin: "27/05", statut: "Planifiée", perimetre: "DRSE", responsable: "M. Dupont", kind: "info" as const },
  { titre: "Lancement gamme Hager Connect", type: "Lancement produit", debut: "02/06", fin: "30/06", statut: "À venir", perimetre: "DRSE", responsable: "P. Leroy", kind: "neutral" as const },
  { titre: "Promotion régionale câbles industriels", type: "Promotion", debut: "10/06", fin: "30/06", statut: "À venir", perimetre: "Pôle Est", responsable: "C. Garcia", kind: "neutral" as const },
];

const supports = [
  { name: "Kit commercial Printemps Énergie", type: "Kit", maj: "02/05/2026" },
  { name: "PLV éclairage industriel — A3", type: "PLV", maj: "28/04/2026" },
  { name: "Argumentaire Hager Connect", type: "Argumentaire", maj: "25/04/2026" },
  { name: "Fiche pratique vente conseil", type: "Fiche", maj: "20/04/2026" },
  { name: "Support Schneider Electric Q2", type: "Support fournisseur", maj: "15/04/2026" },
  { name: "Brochure campagne efficacité énergétique", type: "Campagne", maj: "10/04/2026" },
];

const contacts = [
  { nom: "Laurent Martin", role: "Responsable animation commerciale", initiales: "LM" },
  { nom: "Sophie Bernard", role: "Responsable ventes régionale", initiales: "SB" },
  { nom: "Marc Dupont", role: "Support PLV régional", initiales: "MD" },
  { nom: "Claire Garcia", role: "Pilote calendrier opérations", initiales: "CG" },
];

function rank<T>(items: T[], key: (i: T) => string, featured: string[]): T[] {
  const score = (s: string) => {
    const i = featured.findIndex((f) => s.toLowerCase().includes(f.toLowerCase()));
    return i === -1 ? 999 : i;
  };
  return [...items].sort((a, b) => score(key(a)) - score(key(b)));
}

export default function Commerce() {
  const { audienceId } = useAudience();
  const cfg = getPageConfig(audienceId).commerce;
  const ops = rank(operations, (o) => o.titre, cfg.featuredOps);
  const sups = rank(supports, (s) => s.name, cfg.pinnedSupports);
  const cts = rank(contacts, (c) => c.nom, cfg.pinnedContacts);
  return (
    <div className="p-6 space-y-6 max-w-[1400px] mx-auto">
      <PageHero
        eyebrow="Page commerce"
        title="Commerce & animations"
        subtitle="Retrouvez les opérations régionales, kits commerciaux, supports et échéances utiles."
        ctaPrimary={{
          label: "Voir le calendrier opérations",
          onClick: () => document.getElementById("calendrier-operations")?.scrollIntoView({ behavior: "smooth", block: "start" }),
        }}
        ctaSecondary={{
          label: "Accéder aux supports",
          onClick: () => document.getElementById("supports-plv")?.scrollIntoView({ behavior: "smooth", block: "start" }),
        }}
      />

      <AudienceContextHeader page="commerce" />
      {cfg.message && (
        <div className="text-xs text-muted-foreground italic px-1">{cfg.message}</div>
      )}

      {/* Opération du moment */}
      <div className="sp-section overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="bg-gradient-to-br from-primary to-secondary p-8 text-primary-foreground">
            <div className="flex items-center justify-between mb-2">
              <div className="text-xs uppercase tracking-widest opacity-80">Opération du moment</div>
              <WebPartTag label="Carte éditoriale / Bannière" />
            </div>
            <div className="font-display text-3xl font-bold leading-tight">Printemps Énergie 2026</div>
            <div className="text-sm opacity-90 mt-3">Du 5 mai au 30 mai 2026</div>
            <div className="text-sm opacity-90">Périmètre : Toute la DRSE</div>
            <div className="text-sm opacity-90">Cible : Clients pros bâtiment et industrie</div>
          </div>
          <div className="md:col-span-2 p-8">
            <h2 className="sp-section-title text-xl mb-3">Tout ce qu'il faut pour réussir l'opération</h2>
            <p className="text-sm text-muted-foreground mb-5">
              Mobilisation autour de l'éclairage LED et des solutions d'efficacité énergétique. Le kit complet
              comprend supports clients, argumentaires fournisseurs, conditions tarifaires et plan d'animation agence.
            </p>
            <div className="grid grid-cols-2 gap-3">
              <a href="#" className="border border-border rounded p-3 hover:border-secondary text-sm">
                <div className="font-medium text-primary">Télécharger le kit complet</div>
                <div className="text-xs text-muted-foreground">PDF · 12 Mo</div>
              </a>
              <a href="#" className="border border-border rounded p-3 hover:border-secondary text-sm">
                <div className="font-medium text-primary">Conditions et détails — outil source</div>
                <div className="text-xs text-muted-foreground">Redirection vers l'outil source</div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Encart Grégoire */}
      <div className="sp-section p-5 flex flex-col md:flex-row md:items-center gap-4 border-l-4 border-secondary">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-display text-base font-semibold text-primary">Calendrier opérations — service Grégoire</h3>
            <WebPartTag label="Lien / Bouton d'action" />
          </div>
          <p className="text-xs text-muted-foreground">
            Accès au calendrier opérationnel transmis aux RACOR. Le portail renvoie vers la source, sans dupliquer les informations commerciales sensibles.
          </p>
        </div>
        <a href="#" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-4 py-2 rounded text-sm font-medium inline-flex items-center gap-2 flex-shrink-0">
          Accéder au calendrier opérations <ChevronRight className="h-4 w-4" />
        </a>
      </div>

      {/* Planning */}
      <div id="calendrier-operations" className="scroll-mt-24">
      <Section
        title="Planning opérations commerciales"
        webpart="Liste SharePoint"
        subtitle="Calendrier des animations et opérations régionales en cours et à venir."
        action={<a href="#" className="text-xs text-secondary hover:underline inline-flex items-center gap-1"><Calendar className="h-3 w-3" /> Vue calendrier</a>}
      >
        <div className="overflow-x-auto -mx-5">
          <table className="w-full text-sm">
            <thead className="bg-muted text-xs uppercase text-muted-foreground">
              <tr>
                <th className="text-left px-5 py-2 font-medium">Titre</th>
                <th className="text-left px-3 py-2 font-medium">Type</th>
                <th className="text-left px-3 py-2 font-medium">Début</th>
                <th className="text-left px-3 py-2 font-medium">Fin</th>
                <th className="text-left px-3 py-2 font-medium">Statut</th>
                <th className="text-left px-3 py-2 font-medium">Périmètre</th>
                <th className="text-left px-3 py-2 font-medium">Responsable</th>
                <th className="text-left px-3 py-2 font-medium">Kit</th>
              </tr>
            </thead>
            <tbody>
              {ops.map((op) => (
                <tr key={op.titre} className="border-t border-border hover:bg-muted/40">
                  <td className="px-5 py-3 font-medium text-foreground">{op.titre}</td>
                  <td className="px-3 py-3 text-muted-foreground">{op.type}</td>
                  <td className="px-3 py-3 text-muted-foreground">{op.debut}</td>
                  <td className="px-3 py-3 text-muted-foreground">{op.fin}</td>
                  <td className="px-3 py-3"><Status label={op.statut} kind={op.kind} /></td>
                  <td className="px-3 py-3 text-muted-foreground">{op.perimetre}</td>
                  <td className="px-3 py-3 text-muted-foreground">{op.responsable}</td>
                  <td className="px-3 py-3"><a href="#" className="text-secondary hover:underline text-xs">Ouvrir →</a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2" id="supports-plv">
          <Section title="Supports commerciaux et PLV" webpart="Bibliothèque de documents" subtitle="Bibliothèque régionale — kits, argumentaires, fiches pratiques.">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {sups.map((s) => (
                <a key={s.name} href="#" className="flex items-center gap-3 p-3 border border-border rounded hover:border-secondary group">
                  <div className="h-9 w-9 rounded bg-secondary/10 text-secondary flex items-center justify-center">
                    <FileText className="h-4 w-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-foreground truncate">{s.name}</div>
                    <div className="text-[11px] text-muted-foreground">{s.type} · MAJ {s.maj}</div>
                  </div>
                  <Download className="h-4 w-4 text-muted-foreground group-hover:text-secondary" />
                </a>
              ))}
            </div>
          </Section>
        </div>

        <Section title="Contacts commerce" webpart="Contacts / Rôle des contacts">
          <ul className="space-y-3">
            {cts.map((c) => (
              <li key={c.nom} className="flex items-center gap-3 pb-3 border-b border-border last:border-0 last:pb-0">
                <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-medium text-sm flex-shrink-0">
                  {c.initiales}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-foreground">{c.nom}</div>
                  <div className="text-[11px] text-muted-foreground">{c.role}</div>
                </div>
                <div className="flex gap-1">
                  <a href="#" className="p-1.5 rounded hover:bg-muted"><Mail className="h-3.5 w-3.5 text-muted-foreground" /></a>
                  <a href="#" className="p-1.5 rounded hover:bg-muted"><Phone className="h-3.5 w-3.5 text-muted-foreground" /></a>
                </div>
              </li>
            ))}
          </ul>
        </Section>
      </div>

      <QuickLinks
        items={[
          { label: "Qlik Pilotage", href: "#" },
          { label: "CRM", href: "#" },
          { label: "Yoobic", href: "#" },
          { label: "Calendrier opérations", href: "#calendrier-operations" },
          { label: "Supports PLV", href: "#supports-plv" },
          { label: "Argumentaires", href: "#supports-plv" },
        ]}
      />

      <Section title="Notifications commerciales" webpart="Notifications / Préférences">
        <ul className="space-y-2">
          {[
            "Recevoir les rappels d'échéance opérations",
            "Suivre les mises à jour des supports commerciaux",
            "Être informé des nouvelles opérations régionales",
          ].map((n) => (
            <li key={n} className="flex items-center justify-between p-3 border border-border rounded">
              <span className="text-sm text-foreground">{n}</span>
              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" defaultChecked className="sr-only peer" />
                <div className="w-9 h-5 bg-muted peer-checked:bg-secondary rounded-full relative transition">
                  <div className="absolute top-0.5 left-0.5 w-4 h-4 bg-card rounded-full transition peer-checked:translate-x-4" />
                </div>
              </label>
            </li>
          ))}
        </ul>
        <p className="text-[11px] text-muted-foreground italic mt-3">Préférences simulées dans la maquette.</p>
      </Section>

      <InfoMessage>
        Les KPI commerciaux détaillés restent dans <strong>Qlik</strong> et le <strong>reporting Power BI — selon accès</strong>. Cette page centralise les accès,
        supports et échéances, sans dupliquer les outils de pilotage.
      </InfoMessage>
    </div>
  );
}
