import { AdminHeader, AdminBlock } from "@/components/AdminParts";

const matrix = [
  { rubrique: "Actualités régionales", proprio: "Communication DRSE", contributeurs: "Référents pôles", frequence: "Hebdomadaire", source: "Portail (saisie directe)" },
  { rubrique: "Agenda régional", proprio: "Assistantes de pôle", contributeurs: "Managers", frequence: "Hebdomadaire", source: "Liste SharePoint" },
  { rubrique: "Tableau de bord régional", proprio: "Pilote portail", contributeurs: "—", frequence: "Mensuelle (revue liens)", source: "Portail" },
  { rubrique: "Opérations commerciales", proprio: "Animation commerciale", contributeurs: "Pôle commerce", frequence: "Mensuelle", source: "Liste SharePoint" },
  { rubrique: "Supports & PLV", proprio: "Animation commerciale", contributeurs: "Marketing régional", frequence: "À chaque opération", source: "Bibliothèque SharePoint" },
  { rubrique: "Annuaire fournisseurs", proprio: "Pôle expertise", contributeurs: "Référents fournisseurs", frequence: "Mensuelle + ad hoc", source: "Liste SharePoint" },
  { rubrique: "Vigilances fournisseurs", proprio: "Pôle expertise", contributeurs: "Approvisionnement", frequence: "Hebdomadaire", source: "Vue filtrée" },
  { rubrique: "Parcours onboarding", proprio: "RH régionale", contributeurs: "Managers", frequence: "Trimestrielle", source: "Liste SharePoint" },
  { rubrique: "Modèles de documents", proprio: "Pilote portail", contributeurs: "Pôles métier", frequence: "Trimestrielle", source: "Bibliothèque" },
  { rubrique: "Contacts & expertises", proprio: "Pilote portail", contributeurs: "Pôles", frequence: "Trimestrielle", source: "Contacts SharePoint" },
  { rubrique: "Remontées terrain", proprio: "Pilote portail", contributeurs: "Tous collaborateurs", frequence: "Continu", source: "Liste SharePoint" },
];

export default function Gouvernance() {
  return (
    <div className="p-6 space-y-6 max-w-[1400px] mx-auto">
      <AdminHeader
        title="Gouvernance & alimentation"
        subtitle="Qui alimente quoi, à quelle fréquence, et où vivent réellement les contenus."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AdminBlock title="Ce qui vit dans le portail">
          <ul className="space-y-2 text-sm list-disc pl-5">
            <li>Accès et raccourcis vers les outils existants</li>
            <li>Actualités et opérations régionales</li>
            <li>Vue régionale simplifiée des fournisseurs</li>
            <li>Repères courts d'onboarding</li>
            <li>Annuaire fonctionnel des contacts</li>
            <li>Boîte à questions, bonnes idées et remontées terrain</li>
            <li>Modèles de documents régionaux</li>
          </ul>
        </AdminBlock>

        <AdminBlock title="Ce qui reste dans les outils sources">
          <ul className="space-y-2 text-sm list-disc pl-5">
            <li>Données produits et tarifs : <strong>Pixel</strong></li>
            <li>Pilotage chiffré : <strong>Qlik / Power BI</strong></li>
            <li>Données clients et opportunités : <strong>CRM</strong></li>
            <li>Formations détaillées : <strong>Soon</strong></li>
            <li>Base de connaissances métier : <strong>Kezako</strong></li>
            <li>Visites terrain : <strong>Yoobic</strong></li>
            <li>Référentiels fournisseurs officiels et achats</li>
            <li>SharePoints métier existants et bibliothèques nationales</li>
          </ul>
        </AdminBlock>
      </div>

      <AdminBlock title="Matrice d'alimentation">
        <div className="overflow-x-auto -mx-5">
          <table className="w-full text-sm">
            <thead className="bg-muted text-xs uppercase text-muted-foreground">
              <tr>
                <th className="text-left px-5 py-2 font-medium">Rubrique</th>
                <th className="text-left px-3 py-2 font-medium">Propriétaire</th>
                <th className="text-left px-3 py-2 font-medium">Contributeurs</th>
                <th className="text-left px-3 py-2 font-medium">Fréquence</th>
                <th className="text-left px-3 py-2 font-medium">Source technique</th>
              </tr>
            </thead>
            <tbody>
              {matrix.map((m) => (
                <tr key={m.rubrique} className="border-t border-border hover:bg-muted/40">
                  <td className="px-5 py-3 font-medium text-foreground">{m.rubrique}</td>
                  <td className="px-3 py-3 text-muted-foreground">{m.proprio}</td>
                  <td className="px-3 py-3 text-muted-foreground">{m.contributeurs}</td>
                  <td className="px-3 py-3 text-muted-foreground">{m.frequence}</td>
                  <td className="px-3 py-3 text-muted-foreground">{m.source}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AdminBlock>

      <AdminBlock title="Garde-fous & règles">
        <ul className="space-y-2 text-sm list-disc pl-5">
          <li>Le portail centralise les accès — il n'est pas un référentiel officiel.</li>
          <li>Le portail n'est pas un dépôt documentaire massif : les documents longs restent dans les espaces sources.</li>
          <li>Les KPI restent dans Qlik / Power BI ; aucun KPI dynamique natif dans SharePoint.</li>
          <li>Les mises à jour doivent rester simples et maintenables sans support IT systématique.</li>
          <li>Chaque rubrique a un propriétaire éditorial clairement identifié.</li>
          <li>Tout contenu temporaire (opération, événement) doit avoir une date de fin.</li>
          <li>Les liens sortants doivent être contrôlés régulièrement (revue trimestrielle).</li>
          <li>Le pilote portail est garant de la cohérence éditoriale et de l'absence de surcharge.</li>
        </ul>
      </AdminBlock>

      <AdminBlock title="Déploiement progressif">
        <p className="text-sm text-muted-foreground mb-4">
          Le portail est déployé progressivement afin de tester les usages, stabiliser l'alimentation et éviter un portail trop large dès le départ. Environ 150 utilisateurs potentiels au global.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
          {[
            { phase: "Palier 1 — V1 restreinte", who: "COPIL DP, directeurs de pôle, population de pilotage.", quand: "Mise en service" },
            { phase: "Palier 2 — Élargissement", who: "Responsables d'agence, RRV, assistantes de pôle, contributeurs identifiés.", quand: "≈ 1 mois après" },
            { phase: "Palier 3 — Extension", who: "Élargissement par paliers selon retours, ajustements, priorisation V2.", quand: "Selon adoption" },
          ].map((p) => (
            <div key={p.phase} className="border border-border rounded p-3">
              <div className="text-xs uppercase text-secondary font-semibold">{p.quand}</div>
              <div className="text-sm font-medium text-primary mt-1">{p.phase}</div>
              <div className="text-xs text-muted-foreground mt-1">{p.who}</div>
            </div>
          ))}
        </div>
      </AdminBlock>

      <AdminBlock title="Rôles-types ciblés">
        <div className="flex flex-wrap gap-2 text-xs">
          {[
            "Direction Régionale", "Directeurs de Pôle", "Responsables Régionaux des Ventes",
            "RACOR", "Responsables d'Agence", "Assistant(e)s de Pôle", "Expertise / IAS",
            "Ingénieurs Commerciaux", "Fonctions support / transverses", "Contributeurs portail",
            "Utilisateurs terrain", "IT / SharePoint",
          ].map((r) => (
            <span key={r} className="px-2.5 py-1 bg-muted border border-border rounded text-foreground">{r}</span>
          ))}
        </div>
      </AdminBlock>
    </div>
  );
}
