import { AdminHeader, AdminBlock } from "@/components/AdminParts";
import { CheckCircle2, AlertTriangle, XCircle } from "lucide-react";

export default function Cadrage() {
  return (
    <div className="p-6 space-y-6 max-w-[1400px] mx-auto">
      <AdminHeader
        title="Cadrage & faisabilité SharePoint"
        subtitle="Cette maquette est une traduction SharePoint-compatible, pas une application custom."
      />

      <AdminBlock title="Positionnement du portail">
        <p className="text-sm text-foreground mb-3">
          Le Portail Régional Sud-Est est une <strong>couche de lisibilité et de point d'accès régional</strong> construite
          sur SharePoint moderne. Il s'appuie exclusivement sur les WebParts disponibles dans l'environnement Rexel.
        </p>
        <p className="text-sm text-muted-foreground">
          Il ne remplace aucun outil existant. Il oriente, hiérarchise et simplifie l'accès aux ressources régionales.
        </p>
      </AdminBlock>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <AdminBlock title="Ce que le portail fait">
          <ul className="space-y-2 text-sm">
            {[
              "Centralise les accès aux outils et ressources",
              "Met en avant actualités et opérations régionales",
              "Donne accès aux contacts et expertises",
              "Permet la remontée terrain simple",
              "Affiche les vigilances fournisseurs",
              "Oriente vers les bons SharePoints sources",
            ].map((t) => (
              <li key={t} className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-success flex-shrink-0 mt-0.5" /><span>{t}</span></li>
            ))}
          </ul>
        </AdminBlock>

        <AdminBlock title="Ce que le portail ne fait pas">
          <ul className="space-y-2 text-sm">
            {[
              "Ne remplace pas Pixel, Qlik, CRM, Soon, Kezako, Yoobic",
              "N'est pas un référentiel fournisseur officiel",
              "N'est pas un dépôt documentaire massif",
              "N'affiche pas de KPI dynamiques natifs",
              "Ne propose pas de dashboard métier complexe",
              "N'est pas un intranet corporate global",
            ].map((t) => (
              <li key={t} className="flex gap-2"><XCircle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" /><span>{t}</span></li>
            ))}
          </ul>
        </AdminBlock>

        <AdminBlock title="Limites assumées V1">
          <ul className="space-y-2 text-sm">
            {[
              "Pas d'automatisation Power Automate native",
              "Pas de formulaires PowerApps en V1",
              "Suivi onboarding non personnalisé",
              "Pas de compteurs temps réel",
              "Organigramme dépend des données Entra ID",
              "Indicateurs uniquement éditoriaux / manuels",
            ].map((t) => (
              <li key={t} className="flex gap-2"><AlertTriangle className="h-4 w-4 text-warning flex-shrink-0 mt-0.5" /><span>{t}</span></li>
            ))}
          </ul>
        </AdminBlock>
      </div>

      <AdminBlock title="Architecture — V1 native, V2 Power Platform, hors périmètre">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 border border-success/40 bg-success/5 rounded">
            <div className="font-semibold text-primary mb-2">V1 — Native SharePoint</div>
            <p className="text-xs text-muted-foreground">WebParts standards Rexel uniquement : pages flexibles, listes, bibliothèques, contacts, événements, tableau de bord, liens rapides, message d'information, boîte à idées.</p>
          </div>
          <div className="p-4 border border-secondary/40 bg-secondary/5 rounded">
            <div className="font-semibold text-primary mb-2">V2 — Power Platform</div>
            <p className="text-xs text-muted-foreground">Power Automate (notifications, workflows), PowerApps (formulaires avancés, suivi nominatif onboarding), Power BI intégré, ciblage par audience.</p>
          </div>
          <div className="p-4 border border-border bg-muted rounded">
            <div className="font-semibold text-primary mb-2">Hors périmètre</div>
            <p className="text-xs text-muted-foreground">Tout remplacement d'outil métier, référentiel fournisseur officiel, application custom, base documentaire massive, intranet corporate.</p>
          </div>
        </div>
      </AdminBlock>

      <AdminBlock title="Ciblage d'audience SharePoint — logique retenue">
        <ul className="space-y-2 text-sm">
          <li>• Le ciblage d'audience sert à <strong>prioriser l'affichage</strong>, pas à sécuriser les contenus.</li>
          <li>• Les contenus sensibles restent protégés par <strong>permissions SharePoint</strong> ou dans les outils sources.</li>
          <li>• WebParts les plus compatibles : Navigation, Actualités, Liens rapides, Contenu mis en évidence, Événements, Pages / News, fichiers ou dossiers selon configuration.</li>
        </ul>
        <div className="mt-4">
          <div className="text-xs font-semibold text-primary mb-2">Groupes envisagés</div>
          <div className="flex flex-wrap gap-2">
            {[
              "AT_DRSE_DIR_COPIL",
              "AT_DRSE_RESP_AGENCE",
              "AT_DRSE_COMMERCE_RACOR",
              "AT_DRSE_ASSISTANTES",
              "AT_DRSE_EXPERTISE_IAS",
              "AT_DRSE_UTIL_STANDARD",
            ].map((g) => (
              <span key={g} className="text-[11px] px-2 py-1 bg-muted border border-border rounded font-mono">{g}</span>
            ))}
          </div>
        </div>
        <p className="text-xs text-muted-foreground italic mt-4">
          Les groupes dynamiques Entra ne sont pas considérés comme garantis sans test tenant réel.
          La V1 maquette utilise un sélecteur de profil simulé. En production SharePoint, ce comportement
          serait piloté par les audiences / groupes Microsoft 365 ou groupes de sécurité.
        </p>
      </AdminBlock>
    </div>
  );
}
