import { AdminHeader, AdminBlock } from "@/components/AdminParts";
import { CheckCircle2, ArrowUpCircle, XCircle } from "lucide-react";

const v1 = [
  "Page d'accueil régionale",
  "Tableau de bord régional (cartes d'accès)",
  "Tuiles prioritaires (entrées principales)",
  "Actualités régionales",
  "Agenda régional",
  "Page Commerce & animations",
  "Lien vers calendrier opérations du service de Grégoire",
  "Annuaire fournisseurs simplifié",
  "Vigilances fournisseurs (vue filtrée)",
  "Infos fabricants simples",
  "Parcours onboarding 30 jours (checklist)",
  "Modes opératoires & modèles de documents",
  "Trois pôles + organigramme simple + qui contacter",
  "Boîte à questions & bonnes idées",
  "Liens vers tous les outils sources",
  "Gouvernance basique et matrice d'alimentation",
  "Prudence sur l'exposition des opérations commerciales sensibles",
];

const v2 = [
  "Automatisations Power Automate (notifications, workflows)",
  "Notifications Outlook / Teams intégrées",
  "Formulaires avancés PowerApps",
  "Suivi onboarding personnalisé par utilisateur",
  "Dashboard Power BI intégré dans le portail",
  "Compteurs dynamiques (remontées, opérations)",
  "Météo fournisseur",
  "Système d'étoiles fournisseur cadré",
  "Espace métier assistantes",
  "Statistiques de consultation",
  "Suivi d'adoption",
  "Ciblage par audience plus fin",
  "Amélioration de l'organigramme (données Entra ID consolidées)",
  "Intégration iframe Qlik / Power BI si validée",
  "Reporting automatisé des remontées terrain",
];

const horsPerimetre = [
  "Remplacement de Pixel",
  "Remplacement de Qlik",
  "Remplacement du CRM",
  "Remplacement de Soon",
  "Remplacement de Kezako",
  "Remplacement de Yoobic",
  "Remplacement de Teams",
  "Référentiel fournisseur complet",
  "Outil de pilotage commercial complet",
  "Application métier custom",
  "Gestion RH complète",
  "Base documentaire massive",
  "Intranet corporate global",
];

export default function Perimetre() {
  return (
    <div className="p-6 space-y-6 max-w-[1400px] mx-auto">
      <AdminHeader
        title="V1 / V2 / hors périmètre"
        subtitle="Cadrage clair de ce qui est livré en V1, projeté en V2, et explicitement exclu."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <AdminBlock title="V1 — Native SharePoint">
          <ul className="space-y-2 text-sm">
            {v1.map((t) => (
              <li key={t} className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-success flex-shrink-0 mt-0.5" /><span>{t}</span></li>
            ))}
          </ul>
        </AdminBlock>

        <AdminBlock title="V2 — Power Platform">
          <ul className="space-y-2 text-sm">
            {v2.map((t) => (
              <li key={t} className="flex gap-2"><ArrowUpCircle className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" /><span>{t}</span></li>
            ))}
          </ul>
        </AdminBlock>

        <AdminBlock title="Hors périmètre — Définitif">
          <ul className="space-y-2 text-sm">
            {horsPerimetre.map((t) => (
              <li key={t} className="flex gap-2"><XCircle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" /><span>{t}</span></li>
            ))}
          </ul>
        </AdminBlock>
      </div>

      <AdminBlock title="Critères de réussite V1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
          {[
            "La solution est réaliste dans SharePoint",
            "La V1 est faisable sans développement spécifique",
            "Le portail ne remplace pas les outils existants",
            "Le portail améliore l'accès, la lisibilité et la trouvabilité",
            "Le Tableau de bord est utilisé comme grille de cartes d'accès",
            "Qlik et Power BI restent les outils de pilotage chiffré",
            "Les listes SharePoint servent aux vues simples et maintenables",
            "Les pages utilisateur sont propres et non techniques",
            "Les pages de cadrage sont séparées de l'expérience utilisateur",
            "Les limites SharePoint sont assumées",
            "Les besoins avancés sont clairement repoussés en V2",
            "Le risque de « Pixel bis » est évité",
          ].map((c) => (
            <div key={c} className="flex gap-2 p-2 border border-border rounded">
              <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
              <span>{c}</span>
            </div>
          ))}
        </div>
      </AdminBlock>
    </div>
  );
}
