import { AdminHeader, AdminBlock } from "@/components/AdminParts";
import { Status } from "@/components/SPParts";

type Row = { page: string; bloc: string; webpart: string; usage: string; natif: boolean; compromis: boolean; pp: boolean; v2: boolean; comment: string };

const rows: Row[] = [
  // Accueil
  { page: "Accueil", bloc: "Hero régional", webpart: "Bannière principale / Focus", usage: "Mise en avant éditoriale régionale", natif: true, compromis: false, pp: false, v2: false, comment: "Carte éditoriale en alternative." },
  { page: "Accueil", bloc: "Tableau de bord régional", webpart: "Tableau de bord", usage: "Accès aux outils et ressources", natif: true, compromis: true, pp: false, v2: false, comment: "À valider dans l'environnement Rexel ; alternative Liens rapides." },
  { page: "Accueil", bloc: "Tuiles prioritaires", webpart: "Liens rapides", usage: "Entrées principales du portail", natif: true, compromis: false, pp: false, v2: false, comment: "Renommé pour éviter la confusion avec le Tableau de bord." },
  { page: "Accueil", bloc: "Actualités régionales", webpart: "Actualités avancé", usage: "Diffusion d'information régionale", natif: true, compromis: false, pp: false, v2: false, comment: "Actualités standard en alternative." },
  { page: "Accueil", bloc: "Agenda régional", webpart: "Événements", usage: "Échéances et événements régionaux", natif: true, compromis: false, pp: false, v2: false, comment: "Calendrier de groupe en alternative." },
  { page: "Accueil", bloc: "Opération du moment", webpart: "Carte éditoriale / Appel à l'action", usage: "Mise en avant opération commerciale", natif: true, compromis: false, pp: false, v2: false, comment: "Focus possible." },
  { page: "Accueil", bloc: "Boîte à questions & bonnes idées (CTA)", webpart: "Boîte à idées / Microsoft Forms", usage: "Remontées terrain", natif: true, compromis: false, pp: false, v2: false, comment: "—" },

  // Commerce
  { page: "Commerce", bloc: "Opération du moment", webpart: "Bannière / Carte éditoriale", usage: "Mise en avant opération", natif: true, compromis: false, pp: false, v2: false, comment: "—" },
  { page: "Commerce", bloc: "CTA opération", webpart: "Bouton d'action", usage: "Accès direct kit / supports", natif: true, compromis: false, pp: false, v2: false, comment: "—" },
  { page: "Commerce", bloc: "Calendrier opérations", webpart: "Liste SharePoint", usage: "Consultation opérations commerciales", natif: true, compromis: false, pp: false, v2: false, comment: "Vue calendrier possible. Source : service de Grégoire." },
  { page: "Commerce", bloc: "Supports & PLV", webpart: "Bibliothèque de documents", usage: "Accès aux supports commerciaux", natif: true, compromis: false, pp: false, v2: false, comment: "—" },
  { page: "Commerce", bloc: "Argumentaires", webpart: "Liens rapides", usage: "Accès aux argumentaires", natif: true, compromis: false, pp: false, v2: false, comment: "Sources éclatées." },
  { page: "Commerce", bloc: "Contacts commerce", webpart: "Contacts / Rôle des contacts", usage: "Orientation interlocuteur commerce", natif: true, compromis: false, pp: false, v2: false, comment: "—" },
  { page: "Commerce", bloc: "KPI commerciaux", webpart: "Qlik / Power BI", usage: "Pilotage chiffré", natif: false, compromis: false, pp: false, v2: true, comment: "Rester dans Qlik. Embed Power BI éventuellement V2." },

  // Fournisseurs
  { page: "Fournisseurs", bloc: "Annuaire fournisseurs régionaux", webpart: "Liste SharePoint", usage: "Recherche fournisseur / vigilance", natif: true, compromis: false, pp: false, v2: false, comment: "Vues filtrées par famille / vigilance." },
  { page: "Fournisseurs", bloc: "Recherche & filtres", webpart: "Filtre de recherche / Barre de recherche", usage: "Filtrage de la liste fournisseurs", natif: true, compromis: false, pp: false, v2: false, comment: "Filtres simples uniquement." },
  { page: "Fournisseurs", bloc: "Vigilances actives", webpart: "Liste SharePoint — vue filtrée", usage: "Alerte vigilance fournisseur", natif: true, compromis: false, pp: false, v2: false, comment: "Contenu mis en évidence en option à valider." },
  { page: "Fournisseurs", bloc: "Infos fabricants utiles", webpart: "Liste SharePoint / Liens", usage: "Accès aux informations fabricants utiles", natif: true, compromis: false, pp: false, v2: false, comment: "Pas de données sensibles." },
  { page: "Fournisseurs", bloc: "Contact expert", webpart: "Contacts", usage: "Orientation expert fournisseur", natif: true, compromis: false, pp: false, v2: false, comment: "—" },
  { page: "Fournisseurs", bloc: "Source officielle", webpart: "Lien", usage: "Renvoi vers référentiel officiel", natif: true, compromis: false, pp: false, v2: false, comment: "—" },
  { page: "Fournisseurs", bloc: "Accès associés", webpart: "Liens rapides", usage: "Accès aux ressources liées", natif: true, compromis: false, pp: false, v2: false, comment: "—" },

  // Onboarding
  { page: "Onboarding", bloc: "Parcours onboarding 30 jours", webpart: "Liste SharePoint", usage: "Accès aux repères d'intégration", natif: true, compromis: false, pp: false, v2: false, comment: "Checklist non personnalisée." },
  { page: "Onboarding", bloc: "Modes opératoires", webpart: "Liens rapides", usage: "Accès procédures essentielles", natif: true, compromis: false, pp: false, v2: false, comment: "—" },
  { page: "Onboarding", bloc: "Modèles de documents", webpart: "Modèles de documents", usage: "Téléchargement de templates", natif: true, compromis: false, pp: false, v2: false, comment: "Bibliothèque en alternative." },
  { page: "Onboarding", bloc: "Formation", webpart: "Viva Learning / Soon (lien)", usage: "Renvoi vers parcours de formation", natif: true, compromis: true, pp: false, v2: false, comment: "Viva Learning sous condition de licence." },
  { page: "Onboarding", bloc: "Nouveaux arrivants", webpart: "Nouveaux arrivants", usage: "Visibilité arrivées récentes", natif: true, compromis: true, pp: false, v2: false, comment: "Optionnel — dépend données RH M365." },
  { page: "Onboarding", bloc: "Parcours interactif personnalisé", webpart: "PowerApps", usage: "Suivi nominatif onboarding", natif: false, compromis: false, pp: true, v2: true, comment: "Suivi nominatif en V2." },

  // Expertises
  { page: "Expertises", bloc: "Trois pôles", webpart: "Trombinoscope / Contacts", usage: "Lecture régionale des pôles", natif: true, compromis: false, pp: false, v2: false, comment: "—" },
  { page: "Expertises", bloc: "Organigramme", webpart: "Organigramme", usage: "Lecture de la structure régionale", natif: true, compromis: true, pp: false, v2: false, comment: "Dépend qualité données Entra ID." },
  { page: "Expertises", bloc: "Qui contacter pour ?", webpart: "Rôle des contacts / Liste SharePoint", usage: "Orientation vers le bon interlocuteur", natif: true, compromis: false, pp: false, v2: false, comment: "—" },

  // Boîte à questions & bonnes idées
  { page: "Boîte à questions & bonnes idées", bloc: "Soumission", webpart: "Boîte à idées / Microsoft Forms", usage: "Remontées terrain", natif: true, compromis: false, pp: false, v2: false, comment: "—" },
  { page: "Boîte à questions & bonnes idées", bloc: "Alternative soumission", webpart: "Microsoft Forms + Liste", usage: "Collecte structurée", natif: true, compromis: false, pp: false, v2: false, comment: "Si Boîte à idées indisponible." },
  { page: "Boîte à questions & bonnes idées", bloc: "Suivi", webpart: "Liste SharePoint", usage: "Suivi des remontées", natif: true, compromis: false, pp: false, v2: false, comment: "—" },
  { page: "Boîte à questions & bonnes idées", bloc: "Discussion", webpart: "Conversations Viva Engage", usage: "Échange régional", natif: true, compromis: true, pp: false, v2: false, comment: "À utiliser sobrement." },
  { page: "Boîte à questions & bonnes idées", bloc: "Vote rapide", webpart: "Sondage", usage: "Recueil d'avis rapide", natif: true, compromis: false, pp: false, v2: false, comment: "—" },
  { page: "Boîte à questions & bonnes idées", bloc: "Indicateurs simples", webpart: "Indicateur (manuel)", usage: "Repères éditoriaux", natif: true, compromis: true, pp: false, v2: false, comment: "Mise à jour manuelle uniquement." },
  { page: "Boîte à questions & bonnes idées", bloc: "Reporting automatisé", webpart: "Power Automate + Power BI", usage: "Reporting consolidé", natif: false, compromis: false, pp: true, v2: true, comment: "V2." },
];

const Tick = ({ on }: { on: boolean }) => on ? <span className="text-success">●</span> : <span className="text-border">○</span>;

export default function Mapping() {
  return (
    <div className="p-6 space-y-6 max-w-[1400px] mx-auto">
      <AdminHeader
        title="Mapping WebParts"
        subtitle="Correspondance maquette ↔ WebParts SharePoint disponibles dans l'environnement Rexel."
      />

      <AdminBlock title="Légende">
        <div className="flex flex-wrap gap-4 text-xs">
          <span><Tick on={true} /> Faisable / disponible</span>
          <span><Tick on={false} /> Non concerné</span>
          <Status label="Natif" kind="ok" />
          <Status label="Compromis" kind="warn" />
          <Status label="Power Platform" kind="info" />
          <Status label="V2" kind="neutral" />
        </div>
      </AdminBlock>

      <AdminBlock title="Tableau de mapping">
        <div className="overflow-x-auto -mx-5">
          <table className="w-full text-xs">
            <thead className="bg-muted text-[10px] uppercase text-muted-foreground">
              <tr>
                <th className="text-left px-3 py-2 font-medium">Page</th>
                <th className="text-left px-3 py-2 font-medium">Bloc</th>
                <th className="text-left px-3 py-2 font-medium">WebPart cible</th>
                <th className="text-left px-3 py-2 font-medium">Usage couvert</th>
                <th className="text-center px-2 py-2 font-medium">Natif</th>
                <th className="text-center px-2 py-2 font-medium">Compromis</th>
                <th className="text-center px-2 py-2 font-medium">Power Platform</th>
                <th className="text-center px-2 py-2 font-medium">V2</th>
                <th className="text-left px-3 py-2 font-medium">Commentaire</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className="border-t border-border hover:bg-muted/40">
                  <td className="px-3 py-2 font-medium text-primary whitespace-nowrap">{r.page}</td>
                  <td className="px-3 py-2 text-foreground">{r.bloc}</td>
                  <td className="px-3 py-2 text-muted-foreground">{r.webpart}</td>
                  <td className="px-3 py-2 text-foreground">{r.usage}</td>
                  <td className="px-2 py-2 text-center"><Tick on={r.natif} /></td>
                  <td className="px-2 py-2 text-center"><Tick on={r.compromis} /></td>
                  <td className="px-2 py-2 text-center"><Tick on={r.pp} /></td>
                  <td className="px-2 py-2 text-center"><Tick on={r.v2} /></td>
                  <td className="px-3 py-2 text-muted-foreground max-w-[260px]">{r.comment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AdminBlock>
    </div>
  );
}
