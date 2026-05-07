// Extensions data-driven du ciblage d'audience.
// Sépare les configurations annexes pour ne pas alourdir profiles.ts.
import { AudienceId } from "./profiles";
import {
  ShoppingBag, Calendar, Factory, Truck, Lightbulb, GraduationCap, Users,
  BarChart3, Box, AlertTriangle, MessagesSquare, FileSpreadsheet, BookOpen,
  Bot, Zap, Activity, FileText, Vote, Megaphone
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Tile = { to: string; label: string; icon: LucideIcon; color: string };

export type CommerceConfig = { message?: string; featuredOps: string[]; pinnedSupports: string[]; pinnedContacts: string[] };
export type FournisseursConfig = { message?: string; featuredCodes: string[]; defaultFilter?: string; pinnedFabricants: string[] };
export type OnboardingConfig = { message?: string; featuredTemplates: string[]; featuredModes: string[]; featuredSoon: string[] };
export type ExpertisesConfig = { message?: string; featuredContacts: string[]; featuredFiches: string[] };
export type IdeesConfig = { message?: string; featuredThemes: string[]; featuredTypes: string[] };
export type MesAccesConfig = { outils: { label: string; desc: string }[]; favoris: { type: string; label: string; to?: string }[]; recents: { kind: string; label: string; date: string }[] };

export type PageConfig = {
  commerce: CommerceConfig;
  fournisseurs: FournisseursConfig;
  onboarding: OnboardingConfig;
  expertises: ExpertisesConfig;
  idees: IdeesConfig;
  mesAcces: MesAccesConfig;
};

const TILES = {
  commerce: { to: "/commerce", label: "Commerce & animations", icon: ShoppingBag, color: "from-primary to-secondary" },
  calendrier: { to: "/commerce#calendrier-operations", label: "Calendrier opérations", icon: Calendar, color: "from-secondary to-[hsl(207,60%,40%)]" },
  fournisseurs: { to: "/fournisseurs", label: "Fournisseurs & fabricants", icon: Factory, color: "from-[hsl(173,80%,30%)] to-[hsl(173,90%,25%)]" },
  fabricants: { to: "/fournisseurs", label: "Infos fabricants", icon: Truck, color: "from-[hsl(207,50%,45%)] to-primary" },
  idees: { to: "/idees", label: "Boîte à questions & bonnes idées", icon: Lightbulb, color: "from-warning to-[hsl(36,90%,40%)]" },
  onboarding: { to: "/onboarding", label: "Onboarding / Soon", icon: GraduationCap, color: "from-[hsl(227,70%,40%)] to-primary" },
  expertises: { to: "/expertises", label: "Expertises & contacts", icon: Users, color: "from-[hsl(290,40%,40%)] to-[hsl(310,50%,35%)]" },
  qlik: { to: "#", label: "Qlik — pilotage", icon: BarChart3, color: "from-primary to-[hsl(207,60%,30%)]" },
  pixel: { to: "#", label: "Pixel — intranet", icon: Box, color: "from-[hsl(207,40%,40%)] to-primary" },
  crm: { to: "#", label: "CRM", icon: Users, color: "from-[hsl(220,50%,40%)] to-primary" },
  yoobic: { to: "#", label: "Yoobic", icon: Activity, color: "from-secondary to-[hsl(173,80%,30%)]" },
  pico: { to: "#", label: "Pico — Variables commerciaux", icon: Zap, color: "from-warning to-[hsl(36,90%,40%)]" },
  vigilances: { to: "/fournisseurs", label: "Fournisseurs en vigilance", icon: AlertTriangle, color: "from-[hsl(0,60%,45%)] to-destructive" },
  remontees: { to: "/idees", label: "Synthèse remontées", icon: MessagesSquare, color: "from-[hsl(290,40%,40%)] to-[hsl(310,50%,35%)]" },
  modeles: { to: "/onboarding", label: "Modèles de documents", icon: FileSpreadsheet, color: "from-[hsl(207,40%,40%)] to-primary" },
  modes: { to: "/onboarding", label: "Modes opératoires", icon: FileText, color: "from-[hsl(173,60%,35%)] to-[hsl(173,80%,30%)]" },
  soon: { to: "/onboarding", label: "Soon", icon: GraduationCap, color: "from-[hsl(227,70%,40%)] to-primary" },
  kezako: { to: "#", label: "Kezako", icon: BookOpen, color: "from-[hsl(207,50%,45%)] to-primary" },
  rexelGpt: { to: "#", label: "Rexel GPT", icon: Bot, color: "from-[hsl(290,40%,40%)] to-secondary" },
  contacts: { to: "/expertises", label: "Contacts & qui contacter", icon: Users, color: "from-[hsl(290,40%,40%)] to-[hsl(310,50%,35%)]" },
  supports: { to: "/commerce#supports-plv", label: "Supports & PLV", icon: BookOpen, color: "from-secondary to-primary" },
  argumentaires: { to: "/commerce#supports-plv", label: "Argumentaires", icon: FileText, color: "from-secondary to-[hsl(173,80%,30%)]" },
  sondage: { to: "/idees", label: "Sondage régional", icon: Vote, color: "from-warning to-[hsl(36,90%,40%)]" },
  vivaEngage: { to: "/idees", label: "Discussions Viva Engage", icon: Megaphone, color: "from-[hsl(220,50%,40%)] to-primary" },
} as const;

export const homeTilesByAudience: Record<AudienceId, Tile[]> = {
  general: [TILES.commerce, TILES.calendrier, TILES.fournisseurs, TILES.fabricants, TILES.idees, TILES.onboarding, TILES.expertises],
  direction: [TILES.qlik, TILES.calendrier, TILES.commerce, TILES.vigilances, TILES.remontees, TILES.contacts, TILES.fournisseurs],
  agence: [TILES.calendrier, TILES.commerce, TILES.supports, TILES.fournisseurs, TILES.crm, TILES.yoobic, TILES.idees],
  commerce: [TILES.calendrier, TILES.qlik, TILES.crm, TILES.yoobic, TILES.pico, TILES.supports, TILES.argumentaires],
  assistante: [TILES.modeles, TILES.modes, TILES.soon, TILES.calendrier, TILES.kezako, TILES.contacts, TILES.idees],
  expertise: [TILES.fournisseurs, TILES.fabricants, TILES.expertises, TILES.crm, TILES.supports, TILES.rexelGpt, TILES.idees],
  standard: [TILES.pixel, TILES.crm, TILES.calendrier, TILES.onboarding, TILES.contacts, TILES.idees, TILES.rexelGpt],
};

const baseOutils = [
  { label: "Pixel", desc: "Intranet et contenus internes" },
  { label: "Qlik", desc: "Pilotage chiffré régional" },
  { label: "CRM", desc: "Comptes & opportunités" },
  { label: "Soon", desc: "Formation & onboarding" },
  { label: "Yoobic", desc: "Visites & animations terrain" },
  { label: "Kezako", desc: "Base de connaissances" },
];

export const pageConfigByAudience: Record<AudienceId, PageConfig> = {
  general: {
    commerce: { featuredOps: ["Printemps Énergie 2026"], pinnedSupports: ["Kit commercial Printemps Énergie"], pinnedContacts: ["Laurent Martin"] },
    fournisseurs: { featuredCodes: ["SCH001", "NEX004"], pinnedFabricants: ["Schneider Electric", "Hager"] },
    onboarding: { featuredTemplates: ["Modèle compte rendu réunion"], featuredModes: ["Créer une demande client"], featuredSoon: ["Soon — Parcours nouveau collaborateur"] },
    expertises: { featuredContacts: ["L. Martin", "P. Leroy"], featuredFiches: ["Éclairage", "Digital / outils"] },
    idees: { featuredThemes: ["Commerce", "Outils"], featuredTypes: ["Question", "Bonne pratique"] },
    mesAcces: {
      outils: baseOutils,
      favoris: [
        { type: "Page", label: "Commerce & animations", to: "/commerce" },
        { type: "Page", label: "Fournisseurs & fabricants", to: "/fournisseurs" },
        { type: "Document", label: "Kit Printemps Énergie 2026" },
        { type: "Contact", label: "L. Martin — Animation commerciale" },
      ],
      recents: [
        { kind: "Actualité", label: "Lancement opération Printemps", date: "Il y a 2 j" },
        { kind: "Page", label: "Onboarding & procédures", date: "Il y a 6 j" },
      ],
    },
  },
  direction: {
    commerce: { message: "Synthèse régionale et points de vigilance.", featuredOps: ["Printemps Énergie 2026", "Animation Schneider Electric"], pinnedSupports: [], pinnedContacts: ["Sophie Bernard"] },
    fournisseurs: { message: "Vigilances fortes et tendance régionale.", featuredCodes: ["NEX004", "ABB005"], defaultFilter: "Vigilance", pinnedFabricants: ["Nexans", "ABB"] },
    onboarding: { message: "Vue manager — ressources et suivi global.", featuredTemplates: ["Plan d'action 30 jours"], featuredModes: ["Contacter le bon interlocuteur"], featuredSoon: ["Viva Learning DRSE"] },
    expertises: { message: "Direction, pôles et support régional.", featuredContacts: ["S. Bernard", "P. Leroy"], featuredFiches: ["Éclairage", "Photovoltaïque"] },
    idees: { message: "Synthèse des sujets récurrents et irritants.", featuredThemes: ["Commerce", "Outils", "Fournisseurs"], featuredTypes: ["Irritant", "Bonne pratique"] },
    mesAcces: {
      outils: [
        { label: "Qlik", desc: "Pilotage chiffré régional" },
        { label: "Synthèse remontées", desc: "Vue agrégée DRSE" },
        { label: "Fournisseurs en vigilance", desc: "Surveillance" },
        { label: "Calendrier régional", desc: "Échéances majeures" },
        { label: "Pixel", desc: "Intranet Rexel" },
        { label: "Rexel GPT", desc: "Assistance IA" },
      ],
      favoris: [
        { type: "Vue", label: "Opérations régionales en cours", to: "/commerce" },
        { type: "Vue", label: "Fournisseurs en vigilance", to: "/fournisseurs" },
        { type: "Vue", label: "Synthèse remontées", to: "/idees" },
        { type: "Contact", label: "S. Bernard — Ventes régionales" },
      ],
      recents: [
        { kind: "Synthèse", label: "Remontées terrain — semaine 18", date: "Hier" },
        { kind: "Vigilance", label: "Tension appro câbles HT", date: "Il y a 2 j" },
      ],
    },
  },
  agence: {
    commerce: { message: "Animation commerciale agence — supports et opérations.", featuredOps: ["Printemps Énergie 2026", "Challenge réseau Éclairage"], pinnedSupports: ["Kit commercial Printemps Énergie", "PLV éclairage industriel — A3"], pinnedContacts: ["Laurent Martin", "Marc Dupont"] },
    fournisseurs: { message: "Disponibilités utiles à votre agence.", featuredCodes: ["SCH001", "LEG002", "HAG003"], defaultFilter: "Disponibilité", pinnedFabricants: ["Schneider Electric", "Hager", "Legrand"] },
    onboarding: { message: "Parcours 30 jours et procédures d'intégration.", featuredTemplates: ["Plan d'action 30 jours", "Trame visite client"], featuredModes: ["Préparer une visite client", "Retrouver un support commerce"], featuredSoon: ["Soon — Parcours nouveau collaborateur"] },
    expertises: { message: "Qui contacter pour vos sujets agence.", featuredContacts: ["L. Martin", "S. Bernard", "P. Leroy"], featuredFiches: ["Éclairage", "Digital / outils"] },
    idees: { message: "Vos remontées terrain et idées agence.", featuredThemes: ["Commerce", "Outils"], featuredTypes: ["Irritant terrain", "Suggestion d'amélioration"] },
    mesAcces: {
      outils: [
        { label: "Calendrier opérations", desc: "Planning commercial" },
        { label: "Supports commerciaux", desc: "Kits & PLV" },
        { label: "Boîte à questions", desc: "Remonter / questionner" },
        { label: "Fournisseurs", desc: "Disponibilités utiles" },
        { label: "CRM", desc: "Suivi commercial" },
        { label: "Yoobic", desc: "Animation terrain" },
      ],
      favoris: [
        { type: "Page", label: "Commerce & animations", to: "/commerce" },
        { type: "Document", label: "Kit Printemps Énergie 2026" },
        { type: "Page", label: "Boîte à questions", to: "/idees" },
        { type: "Contact", label: "L. Martin — Animation commerciale" },
      ],
      recents: [
        { kind: "Support", label: "PLV éclairage industriel", date: "Hier" },
        { kind: "Opération", label: "Printemps Énergie 2026", date: "Il y a 2 j" },
      ],
    },
  },
  commerce: {
    commerce: { message: "Pilotage et planning commercial régional.", featuredOps: ["Printemps Énergie 2026", "Animation Schneider Electric", "Lancement gamme Hager Connect"], pinnedSupports: ["Argumentaire Hager Connect", "Support Schneider Electric Q2"], pinnedContacts: ["Claire Garcia", "Laurent Martin"] },
    fournisseurs: { message: "Fournisseurs actifs et infos fabricants utiles.", featuredCodes: ["SCH001", "HAG003", "LEG002"], defaultFilter: "Famille produit", pinnedFabricants: ["Schneider Electric", "Hager", "Legrand"] },
    onboarding: { message: "Onboarding commercial et outils CRM / Yoobic / Qlik.", featuredTemplates: ["Trame suivi action commerciale", "Reporting opération"], featuredModes: ["Utiliser un outil régional"], featuredSoon: ["Soon — Outils commerce"] },
    expertises: { message: "Contacts commerce, fournisseurs et expertise.", featuredContacts: ["L. Martin", "S. Bernard"], featuredFiches: ["Digital / outils", "Éclairage"] },
    idees: { message: "Remontées commerce et irritants opérations.", featuredThemes: ["Commerce", "Outils"], featuredTypes: ["Irritant terrain", "Question"] },
    mesAcces: {
      outils: [
        { label: "Qlik", desc: "Pilotage chiffré" },
        { label: "CRM", desc: "Suivi commercial" },
        { label: "Yoobic", desc: "Animation terrain" },
        { label: "Pico — Variables commerciaux", desc: "Accès aux variables commerciaux" },
        { label: "Supports commerciaux", desc: "Kits & PLV" },
        { label: "Calendrier Grégoire", desc: "Planning opérations" },
      ],
      favoris: [
        { type: "Page", label: "Commerce & animations", to: "/commerce" },
        { type: "Document", label: "Argumentaire Hager Connect" },
        { type: "Page", label: "Fournisseurs", to: "/fournisseurs" },
        { type: "Contact", label: "C. Garcia — Calendrier opérations" },
      ],
      recents: [
        { kind: "Support", label: "Argumentaire Hager Connect", date: "Hier" },
        { kind: "Opération", label: "Animation Schneider Electric", date: "Il y a 3 j" },
      ],
    },
  },
  assistante: {
    commerce: { message: "Documents et supports à relayer.", featuredOps: ["Printemps Énergie 2026"], pinnedSupports: ["Fiche pratique vente conseil"], pinnedContacts: ["Claire Garcia"] },
    fournisseurs: { message: "Contacts et liens sources utiles.", featuredCodes: ["SCH001", "HAG003"], pinnedFabricants: ["Schneider Electric"] },
    onboarding: { message: "Modèles, procédures et supports d'accompagnement.", featuredTemplates: ["Modèle compte rendu réunion", "Modèle support agence mensuel"], featuredModes: ["Accéder à une procédure régionale"], featuredSoon: ["Soon — Parcours nouveau collaborateur"] },
    expertises: { message: "Contacts utiles et canal recommandé.", featuredContacts: ["É. Rey", "T. Blanc"], featuredFiches: ["Digital / outils"] },
    idees: { message: "Questions procédures et idées d'organisation.", featuredThemes: ["Onboarding", "Outils"], featuredTypes: ["Question", "Suggestion d'amélioration"] },
    mesAcces: {
      outils: [
        { label: "Modèles", desc: "Templates régionaux" },
        { label: "Procédures", desc: "Modes opératoires" },
        { label: "Soon", desc: "Onboarding" },
        { label: "Calendrier", desc: "Échéances et réunions" },
        { label: "Contacts", desc: "Annuaire régional" },
        { label: "Pixel", desc: "Intranet" },
      ],
      favoris: [
        { type: "Document", label: "Modèle compte rendu réunion" },
        { type: "Page", label: "Onboarding & procédures", to: "/onboarding" },
        { type: "Page", label: "Expertises & contacts", to: "/expertises" },
        { type: "Contact", label: "É. Rey — RH régionale" },
      ],
      recents: [
        { kind: "Modèle", label: "Trame compte rendu réunion", date: "Hier" },
        { kind: "Procédure", label: "Coordination pôle", date: "Il y a 3 j" },
      ],
    },
  },
  expertise: {
    commerce: { message: "Opérations concernées par l'expertise.", featuredOps: ["Animation Schneider Electric", "Lancement gamme Hager Connect"], pinnedSupports: ["Support Schneider Electric Q2", "Argumentaire Hager Connect"], pinnedContacts: ["Patrick Leroy"] },
    fournisseurs: { message: "Infos fabricants, contacts et vigilances techniques.", featuredCodes: ["SCH001", "HAG003", "ABB005", "NEX004"], defaultFilter: "Famille produit", pinnedFabricants: ["Schneider Electric", "ABB", "Nexans"] },
    onboarding: { message: "Procédures expertise et ressources fabricants.", featuredTemplates: ["Trame suivi action commerciale"], featuredModes: ["Contacter le bon interlocuteur"], featuredSoon: ["Soon — Outils commerce"] },
    expertises: { message: "Expertises techniques et contacts fabricants.", featuredContacts: ["P. Leroy", "M. Dupont"], featuredFiches: ["Éclairage", "Photovoltaïque", "IRVE"] },
    idees: { message: "Sollicitations expertise et sujets fournisseurs.", featuredThemes: ["Fournisseurs", "Outils"], featuredTypes: ["Question", "Bonne pratique"] },
    mesAcces: {
      outils: [
        { label: "Fournisseurs", desc: "Annuaire régional" },
        { label: "Infos fabricants", desc: "Nouveautés et vigilances" },
        { label: "Contacts expertise", desc: "Interlocuteurs clés" },
        { label: "Supports techniques", desc: "Documents et ressources" },
        { label: "CRM", desc: "Comptes & opportunités" },
        { label: "Rexel GPT", desc: "Assistance IA" },
      ],
      favoris: [
        { type: "Page", label: "Fournisseurs & fabricants", to: "/fournisseurs" },
        { type: "Page", label: "Expertises & contacts", to: "/expertises" },
        { type: "Document", label: "Argumentaire Hager Connect" },
        { type: "Contact", label: "P. Leroy — Expertise" },
      ],
      recents: [
        { kind: "Vigilance", label: "Tension appro câbles HT", date: "Hier" },
        { kind: "Fabricant", label: "PowerLogic — webinaire 15/05", date: "Il y a 2 j" },
      ],
    },
  },
  standard: {
    commerce: { message: "Opérations visibles et supports utiles.", featuredOps: ["Printemps Énergie 2026"], pinnedSupports: ["Brochure campagne efficacité énergétique"], pinnedContacts: ["Laurent Martin"] },
    fournisseurs: { message: "Fournisseurs principaux — informations utiles.", featuredCodes: ["SCH001", "HAG003"], pinnedFabricants: ["Schneider Electric"] },
    onboarding: { message: "Où trouver quoi — modes opératoires essentiels.", featuredTemplates: ["Modèle compte rendu réunion"], featuredModes: ["Accéder à un outil", "Contacter un référent métier"], featuredSoon: ["Soon — Parcours nouveau collaborateur"] },
    expertises: { message: "Contacts utiles et canal recommandé.", featuredContacts: ["L. Martin", "T. Blanc"], featuredFiches: ["Digital / outils"] },
    idees: { message: "Poser une question, suivre le statut.", featuredThemes: ["Outils", "Onboarding"], featuredTypes: ["Question"] },
    mesAcces: {
      outils: baseOutils,
      favoris: [
        { type: "Page", label: "Accueil", to: "/" },
        { type: "Page", label: "Boîte à questions", to: "/idees" },
        { type: "Page", label: "Onboarding", to: "/onboarding" },
      ],
      recents: [
        { kind: "Actualité", label: "Information régionale importante", date: "Hier" },
      ],
    },
  },
};

export function getHomeTiles(id: AudienceId): Tile[] {
  return homeTilesByAudience[id] ?? homeTilesByAudience.general;
}
export function getPageConfig(id: AudienceId): PageConfig {
  return pageConfigByAudience[id] ?? pageConfigByAudience.general;
}
