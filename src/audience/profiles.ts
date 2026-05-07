// Données par profil pour le ciblage d'audience simulé.
// Pas de logique sécurité — seulement de la priorisation de contenu.

export type AudienceId =
  | "general"
  | "direction"
  | "agence"
  | "commerce"
  | "assistante"
  | "expertise"
  | "standard";

export type DashboardCard = { name: string; desc: string; action?: string; to?: string };
export type DashboardGroup = { title: string; cards: DashboardCard[] };
export type NewsItem = { tag: string; date: string; title: string; excerpt: string };
export type EventItem = { date: string; title: string; location: string; kind: string };
export type Tool = { label: string; desc: string };
export type PriorityItem = { label: string; desc?: string; to?: string; href?: string };

export type AudienceProfile = {
  id: AudienceId;
  label: string;
  short: string;
  description: string;
  tools: Tool[];
  dashboard: DashboardGroup[];
  news: NewsItem[];
  events: EventItem[];
  priorities: {
    accueilMessage?: string;
    commerce: PriorityItem[];
    fournisseurs: PriorityItem[];
    onboarding: PriorityItem[];
    expertises: PriorityItem[];
    idees: PriorityItem[];
  };
};

const baseTools: Tool[] = [
  { label: "Pixel", desc: "Intranet et contenus internes" },
  { label: "Qlik", desc: "Pilotage chiffré régional" },
  { label: "CRM", desc: "Comptes, opportunités, clients" },
  { label: "Soon", desc: "Formation & onboarding" },
  { label: "Kezako", desc: "Base de connaissances" },
  { label: "Yoobic", desc: "Visites & animations terrain" },
  { label: "Rexel GPT", desc: "Assistant conversationnel" },
  { label: "Pico — Variables commerciaux", desc: "Accès aux variables commerciaux" },
];

export const audienceProfiles: Record<AudienceId, AudienceProfile> = {
  general: {
    id: "general",
    label: "Vue générale",
    short: "Général",
    description: "Vue socle commune — tous les outils et contenus régionaux.",
    tools: baseTools,
    dashboard: [
      {
        title: "Outils essentiels",
        cards: [
          { name: "Pixel", desc: "Accès intranet et contenus internes", action: "Ouvrir" },
          { name: "Qlik", desc: "Pilotage chiffré existant", action: "Ouvrir" },
          { name: "CRM", desc: "Suivi commercial et relation client", action: "Ouvrir" },
          { name: "Pico — Variables commerciaux", desc: "Accès aux variables commerciaux", action: "Ouvrir" },
        ],
      },
      {
        title: "Commerce",
        cards: [
          { name: "Calendrier opérations", desc: "Échéances commerciales régionales", action: "Voir", to: "/commerce" },
          { name: "Yoobic", desc: "Suivi terrain et animations", action: "Accéder" },
        ],
      },
      {
        title: "Onboarding & ressources",
        cards: [
          { name: "Soon", desc: "Parcours et ressources d'intégration", action: "Démarrer", to: "/onboarding" },
          { name: "Kezako", desc: "Informations internes", action: "Consulter" },
        ],
      },
      {
        title: "Remontées",
        cards: [
          { name: "Boîte à questions", desc: "Poser une question ou partager une idée", action: "Contribuer", to: "/idees" },
        ],
      },
      {
        title: "IA / assistance",
        cards: [{ name: "Rexel GPT", desc: "Assistance IA interne", action: "Utiliser" }],
      },
    ],
    news: [
      { tag: "Régional", date: "5 mai 2026", title: "Opération commerciale en cours", excerpt: "L'opération Printemps Énergie démarre sur l'ensemble de la DRSE." },
      { tag: "Commerce", date: "3 mai 2026", title: "Nouveaux supports disponibles", excerpt: "PLV éclairage industriel disponibles dans la bibliothèque commerce." },
      { tag: "Organisation", date: "29 avril 2026", title: "Information régionale importante", excerpt: "Mise à jour des contacts expertise pôle automatisme." },
    ],
    events: [
      { date: "12 mai", title: "Comité commercial régional", location: "Lyon · 9h00", kind: "Réunion" },
      { date: "15 mai", title: "Échéance animation fournisseurs", location: "Toutes agences", kind: "Échéance" },
      { date: "21 mai", title: "Point onboarding managers", location: "Teams · 14h00", kind: "Webinaire" },
      { date: "28 mai", title: "Réunion coordination DRSE", location: "Marseille · 10h00", kind: "Réunion" },
    ],
    priorities: {
      commerce: [
        { label: "Opération du moment", to: "/commerce" },
        { label: "Calendrier opérations", to: "/commerce" },
        { label: "Supports PLV", to: "/commerce" },
        { label: "Contacts commerce", to: "/expertises" },
      ],
      fournisseurs: [
        { label: "Annuaire fournisseurs", to: "/fournisseurs" },
        { label: "Vigilances actives", to: "/fournisseurs" },
        { label: "Contact expert", to: "/expertises" },
      ],
      onboarding: [
        { label: "Soon", href: "#" },
        { label: "Parcours 30 jours", to: "/onboarding" },
        { label: "Modèles de documents", to: "/onboarding" },
        { label: "Modes opératoires", to: "/onboarding" },
      ],
      expertises: [
        { label: "Qui contacter ?", to: "/expertises" },
        { label: "Contacts par pôle", to: "/expertises" },
        { label: "Organigramme", to: "/expertises" },
      ],
      idees: [
        { label: "Poser une question", to: "/idees" },
        { label: "Partager une idée", to: "/idees" },
        { label: "Suivre le statut", to: "/idees" },
      ],
    },
  },

  direction: {
    id: "direction",
    label: "Direction / COPIL DP",
    short: "Direction",
    description: "Pilotage régional, vigilances et synthèses.",
    tools: [
      { label: "Qlik", desc: "Pilotage chiffré régional" },
      { label: "Pixel", desc: "Intranet et contenus internes" },
      { label: "Calendrier opérations", desc: "Planning commercial régional" },
      { label: "Fournisseurs en vigilance", desc: "Vue surveillance" },
      { label: "Synthèse remontées terrain", desc: "Vue agrégée" },
      { label: "Rexel GPT", desc: "Assistance IA interne" },
    ],
    dashboard: [
      {
        title: "Pilotage régional",
        cards: [
          { name: "Qlik", desc: "Accéder au pilotage chiffré existant", action: "Ouvrir" },
          { name: "Calendrier régional", desc: "Voir les échéances principales", action: "Voir", to: "/commerce" },
          { name: "Opérations en cours", desc: "Suivre les opérations régionales majeures", action: "Suivre", to: "/commerce" },
        ],
      },
      {
        title: "Points de vigilance",
        cards: [
          { name: "Fournisseurs en vigilance", desc: "Voir les sujets à surveiller", action: "Consulter", to: "/fournisseurs" },
          { name: "Synthèse remontées terrain", desc: "Suivre les questions et irritants récurrents", action: "Voir", to: "/idees" },
        ],
      },
      {
        title: "Commerce régional",
        cards: [
          { name: "Actualités régionales", desc: "Informations prioritaires DRSE", action: "Lire" },
          { name: "Supports régionaux", desc: "Kits et campagnes en cours", action: "Voir", to: "/commerce" },
        ],
      },
      {
        title: "Remontées terrain",
        cards: [
          { name: "Boîte à questions", desc: "Voir les remontées à traiter", action: "Voir", to: "/idees" },
        ],
      },
      {
        title: "Contacts clés",
        cards: [
          { name: "Direction & pôles", desc: "Direction, pôles, support régional", action: "Voir", to: "/expertises" },
        ],
      },
    ],
    news: [
      { tag: "Pilotage", date: "5 mai 2026", title: "Synthèse des opérations régionales", excerpt: "Vue agrégée des opérations en cours sur la DRSE — 3 chantiers majeurs." },
      { tag: "Vigilance", date: "3 mai 2026", title: "Points de vigilance fournisseurs", excerpt: "Tension appro câbles HT Nexans jusqu'au 20/05 — alternatives identifiées." },
      { tag: "Remontées", date: "29 avril 2026", title: "Remontées terrain à suivre", excerpt: "Sujets récurrents : argumentaires automatisme, accès mobiles CRM." },
    ],
    events: [
      { date: "10 mai", title: "Comité DRSE", location: "Lyon · 9h00", kind: "COPIL" },
      { date: "14 mai", title: "Revue opérations régionales", location: "Teams · 10h00", kind: "Revue" },
      { date: "20 mai", title: "Point fournisseurs en vigilance", location: "Teams · 14h00", kind: "Vigilance" },
      { date: "27 mai", title: "Synthèse remontées terrain", location: "Marseille · 10h00", kind: "Synthèse" },
    ],
    priorities: {
      accueilMessage: "Vue adaptée à votre activité — pilotage et synthèses régionales.",
      commerce: [
        { label: "Opérations régionales principales", to: "/commerce" },
        { label: "Calendrier régional", to: "/commerce" },
        { label: "Points de vigilance", to: "/fournisseurs" },
        { label: "Qlik", href: "#" },
        { label: "Contacts commerce", to: "/expertises" },
      ],
      fournisseurs: [
        { label: "Vigilances fortes", to: "/fournisseurs" },
        { label: "Tendances globales", to: "/fournisseurs" },
        { label: "Fournisseurs à surveiller", to: "/fournisseurs" },
        { label: "Dernière mise à jour", to: "/fournisseurs" },
        { label: "Contact expert", to: "/expertises" },
      ],
      onboarding: [
        { label: "Vue manager", to: "/onboarding" },
        { label: "Ressources d'intégration", to: "/onboarding" },
        { label: "Suivi global simplifié", to: "/indicateurs" },
        { label: "Soon", href: "#" },
      ],
      expertises: [
        { label: "Contacts clés régionaux", to: "/expertises" },
        { label: "Pôles", to: "/expertises" },
        { label: "Direction / support", to: "/expertises" },
      ],
      idees: [
        { label: "Synthèse des remontées", to: "/idees" },
        { label: "Sujets récurrents", to: "/idees" },
        { label: "Bonnes idées à partager", to: "/idees" },
        { label: "Irritants à suivre", to: "/idees" },
      ],
    },
  },

  agence: {
    id: "agence",
    label: "Responsable d'agence",
    short: "Resp. agence",
    description: "Responsable d'agence : commerce, sécurité, RH, outils et remontées terrain.",
    tools: [
      { label: "Sécurité agence", desc: "Livre sécurité, réflexes et bonnes pratiques" },
      { label: "RH agence", desc: "Mutuelle, prévoyance, liaisons RH" },
      { label: "Commerce & animations", desc: "Opérations, calendrier, kits et PLV" },
      { label: "Yoobic", desc: "Animations terrain et exécution agence" },
      { label: "Merchandising / Game Agence", desc: "Immo, gondoles, dispositifs agence" },
      { label: "CRM", desc: "Suivi commercial et relation client" },
      { label: "Qlik", desc: "Pilotage chiffré existant" },
      { label: "Kezako", desc: "Procédures et repères internes" },
      { label: "Boîte à questions", desc: "Remonter un irritant ou poser une question" },
      { label: "Rexel GPT", desc: "Assistance IA interne" },
    ],
    dashboard: [
      {
        title: "Poste de pilotage RA",
        cards: [
          { name: "Sécurité agence", desc: "Livre sécurité, bonnes pratiques et réflexes essentiels", action: "Consulter" },
          { name: "RH agence", desc: "Accès rapides mutuelle, prévoyance et liaisons RH", action: "Ouvrir" },
          { name: "Commerce & animations", desc: "Opérations, calendrier Grégoire, kits et PLV", action: "Voir", to: "/commerce" },
        ],
      },
      {
        title: "Outils terrain",
        cards: [
          { name: "Yoobic", desc: "Suivi des animations et actions terrain", action: "Accéder" },
          { name: "Merchandising / Game Agence", desc: "Immo, gondoles, dispositifs et animation point de vente", action: "Ouvrir" },
          { name: "CRM", desc: "Suivi commercial et relation client", action: "Ouvrir" },
          { name: "Qlik", desc: "Pilotage chiffré existant, sans doublon dans le portail", action: "Ouvrir" },
          { name: "Kezako", desc: "Retrouver les procédures et repères utiles", action: "Consulter" },
        ],
      },
      {
        title: "Fournisseurs / fabricants",
        cards: [
          { name: "Fournisseurs & fabricants", desc: "Disponibilités et vigilances utiles", action: "Voir", to: "/fournisseurs" },
        ],
      },
      {
        title: "Remontées terrain",
        cards: [
          { name: "Boîte à questions", desc: "Poser une question ou remonter un irritant", action: "Contribuer", to: "/idees" },
          { name: "Bonnes idées terrain", desc: "Partager ce qui fonctionne en agence", action: "Lire", to: "/idees" },
        ],
      },
      {
        title: "Contacts rapides",
        cards: [
          { name: "Contacts utiles", desc: "Trouver le bon interlocuteur", action: "Voir", to: "/expertises" },
        ],
      },
    ],
    news: [
      { tag: "Sécurité", date: "6 mai 2026", title: "Rappel sécurité agence", excerpt: "Livre sécurité et réflexes essentiels remis en avant pour les responsables d'agence." },
      { tag: "RH", date: "5 mai 2026", title: "Liens RH utiles à jour", excerpt: "Mutuelle, prévoyance et contacts RH regroupés dans les accès rapides agence." },
      { tag: "Commerce", date: "3 mai 2026", title: "Kit Printemps Énergie disponible", excerpt: "Supports PLV, argumentaires et lien Yoobic disponibles pour l'animation terrain." },
    ],
    events: [
      { date: "8 mai", title: "Point sécurité agence", location: "Toutes agences", kind: "Rappel" },
      { date: "13 mai", title: "Mise à jour RH / procédures", location: "Kezako", kind: "Info" },
      { date: "15 mai", title: "Échéance supports PLV", location: "DRSE", kind: "Échéance" },
      { date: "22 mai", title: "Animation Yoobic / merchandising", location: "Agences", kind: "Terrain" },
    ],
    priorities: {
      accueilMessage: "Vue adaptée responsable d'agence — aller droit au but sur sécurité, RH, commerce et outils terrain.",
      commerce: [
        { label: "Opération du moment", to: "/commerce" },
        { label: "Accéder au kit", to: "/commerce" },
        { label: "Supports PLV", to: "/commerce" },
        { label: "Calendrier opérations", to: "/commerce" },
        { label: "Yoobic", href: "#" },
        { label: "Merchandising / Game Agence", href: "#" },
        { label: "Argumentaires", to: "/commerce" },
        { label: "Boîte à questions commerce", to: "/idees" },
      ],
      fournisseurs: [
        { label: "Disponibilité", to: "/fournisseurs" },
        { label: "Vigilance", to: "/fournisseurs" },
        { label: "Contact interne", to: "/expertises" },
        { label: "Lien source", to: "/fournisseurs" },
        { label: "Infos fabricants", to: "/fournisseurs" },
      ],
      onboarding: [
        { label: "Livre sécurité", href: "#" },
        { label: "Liens RH agence", href: "#" },
        { label: "Kezako", href: "#" },
        { label: "Soon", href: "#" },
        { label: "Modes opératoires", to: "/onboarding" },
        { label: "Parcours 30 jours", to: "/onboarding" },
        { label: "Contacts onboarding", to: "/expertises" },
      ],
      expertises: [
        { label: "Qui contacter pour…", to: "/expertises" },
        { label: "Contacts commerce", to: "/expertises" },
        { label: "Contacts expertise", to: "/expertises" },
        { label: "Support régional", to: "/expertises" },
        { label: "Contacts fournisseurs", to: "/fournisseurs" },
      ],
      idees: [
        { label: "Poser une question", to: "/idees" },
        { label: "Partager une bonne idée", to: "/idees" },
        { label: "Remonter un irritant", to: "/idees" },
        { label: "Dernières idées terrain", to: "/idees" },
      ],
    },
  },

  commerce: {
    id: "commerce",
    label: "Commerce / RACOR",
    short: "Commerce / RACOR",
    description: "Animation commerciale, pilotage et supports.",
    tools: [
      { label: "Qlik", desc: "Pilotage chiffré" },
      { label: "CRM", desc: "Suivi commercial" },
      { label: "Yoobic", desc: "Animation terrain" },
      { label: "Pixel", desc: "Intranet et contenus internes" },
      { label: "Calendrier opérations", desc: "Planning commercial" },
      { label: "Supports commerciaux", desc: "Kits, PLV, argumentaires" },
      { label: "Pico — Variables commerciaux", desc: "Accès aux variables commerciaux" },
      { label: "Rexel GPT", desc: "Assistance IA interne" },
    ],
    dashboard: [
      {
        title: "Animation commerciale",
        cards: [
          { name: "Calendrier opérations", desc: "Planning commercial", action: "Voir", to: "/commerce" },
          { name: "Yoobic", desc: "Animation et suivi terrain", action: "Accéder" },
        ],
      },
      {
        title: "Pilotage & outils",
        cards: [
          { name: "Qlik", desc: "Pilotage chiffré existant", action: "Ouvrir" },
          { name: "CRM", desc: "Suivi commercial", action: "Ouvrir" },
          { name: "Pico — Variables commerciaux", desc: "Accès aux variables commerciaux", action: "Ouvrir" },
        ],
      },
      {
        title: "Supports",
        cards: [
          { name: "Supports commerciaux", desc: "Kits, PLV, argumentaires", action: "Télécharger", to: "/commerce" },
          { name: "Argumentaires", desc: "Supports de vente", action: "Voir", to: "/commerce" },
        ],
      },
      {
        title: "Fournisseurs",
        cards: [
          { name: "Fournisseurs & fabricants", desc: "Informations utiles commerce", action: "Voir", to: "/fournisseurs" },
        ],
      },
      {
        title: "Remontées commerce",
        cards: [
          { name: "Remontées commerce", desc: "Irritants et questions terrain", action: "Voir", to: "/idees" },
        ],
      },
    ],
    news: [
      { tag: "Calendrier", date: "5 mai 2026", title: "Mise à jour du calendrier opérations", excerpt: "Le service de Grégoire a publié le calendrier mai-juin." },
      { tag: "Kit", date: "3 mai 2026", title: "Kit commercial publié", excerpt: "Kit Printemps Énergie complet disponible — argumentaires fournisseurs inclus." },
      { tag: "Animation", date: "29 avril 2026", title: "Animation fournisseur à venir", excerpt: "Animation Schneider Electric programmée du 20 au 27 mai." },
    ],
    events: [
      { date: "9 mai", title: "Comité animation commerciale", location: "Lyon · 9h00", kind: "Comité" },
      { date: "13 mai", title: "Publication kit commercial", location: "Bibliothèque commerce", kind: "Publication" },
      { date: "18 mai", title: "Revue calendrier Grégoire", location: "Teams · 14h00", kind: "Revue" },
      { date: "24 mai", title: "Point Yoobic / CRM", location: "Teams · 10h00", kind: "Outils" },
    ],
    priorities: {
      accueilMessage: "Vue adaptée à votre activité — pilotage et animation commerciale.",
      commerce: [
        { label: "Planning opérations", to: "/commerce" },
        { label: "Calendrier Grégoire", to: "/commerce" },
        { label: "Supports à publier", to: "/commerce" },
        { label: "Argumentaires", to: "/commerce" },
        { label: "Qlik / CRM / Yoobic / Pico — Variables commerciaux", href: "#" },
        { label: "Remontées commerce", to: "/idees" },
      ],
      fournisseurs: [
        { label: "Fournisseurs actifs", to: "/fournisseurs" },
        { label: "Familles produit", to: "/fournisseurs" },
        { label: "Disponibilité", to: "/fournisseurs" },
        { label: "Infos fabricants", to: "/fournisseurs" },
        { label: "Vigilance", to: "/fournisseurs" },
        { label: "Supports associés", to: "/commerce" },
      ],
      onboarding: [
        { label: "Onboarding commercial", to: "/onboarding" },
        { label: "Outils CRM / Yoobic / Qlik", href: "#" },
        { label: "Procédures commerce", to: "/onboarding" },
        { label: "Supports commerciaux", to: "/commerce" },
      ],
      expertises: [
        { label: "Contacts commerce", to: "/expertises" },
        { label: "Contacts fournisseurs", to: "/fournisseurs" },
        { label: "Expertise", to: "/expertises" },
        { label: "Support opérationnel", to: "/expertises" },
        { label: "CRM / Yoobic", href: "#" },
      ],
      idees: [
        { label: "Remontées commerce", to: "/idees" },
        { label: "Irritants opérations", to: "/idees" },
        { label: "Questions supports", to: "/idees" },
        { label: "Idées terrain", to: "/idees" },
      ],
    },
  },

  assistante: {
    id: "assistante",
    label: "Assistante de pôle",
    short: "Assistante",
    description: "Coordination, modèles, procédures.",
    tools: [
      { label: "Pixel", desc: "Intranet et contenus internes" },
      { label: "Soon", desc: "Formation & onboarding" },
      { label: "Kezako", desc: "Base de connaissances" },
      { label: "Modèles de documents", desc: "Templates régionaux" },
      { label: "Modes opératoires", desc: "Procédures courtes" },
      { label: "Calendrier", desc: "Échéances et réunions" },
      { label: "Rexel GPT", desc: "Assistance IA interne" },
    ],
    dashboard: [
      {
        title: "Coordination",
        cards: [
          { name: "Calendrier", desc: "Échéances et réunions", action: "Voir", to: "/commerce" },
          { name: "Contacts utiles", desc: "Trouver le bon interlocuteur", action: "Voir", to: "/expertises" },
        ],
      },
      {
        title: "Documents & modèles",
        cards: [
          { name: "Modèles de documents", desc: "Templates utiles", action: "Télécharger", to: "/onboarding" },
          { name: "Modes opératoires", desc: "Procédures courtes", action: "Consulter", to: "/onboarding" },
        ],
      },
      {
        title: "Onboarding",
        cards: [
          { name: "Soon", desc: "Parcours d'intégration", action: "Démarrer", to: "/onboarding" },
          { name: "Kezako", desc: "Ressources internes", action: "Consulter" },
        ],
      },
      {
        title: "Contacts",
        cards: [
          { name: "Contacts utiles", desc: "Annuaire régional", action: "Voir", to: "/expertises" },
          { name: "Pixel", desc: "Accès intranet", action: "Ouvrir" },
        ],
      },
      {
        title: "Remontées",
        cards: [
          { name: "Boîte à questions", desc: "Questions procédures / organisation", action: "Contribuer", to: "/idees" },
        ],
      },
    ],
    news: [
      { tag: "Modèles", date: "5 mai 2026", title: "Nouveau modèle de document disponible", excerpt: "Trame compte rendu réunion mise à jour." },
      { tag: "Procédure", date: "3 mai 2026", title: "Mise à jour procédure", excerpt: "Procédure de coordination pôle mise à jour." },
      { tag: "Onboarding", date: "29 avril 2026", title: "Point onboarding managers", excerpt: "Nouvelle session prévue le 21 mai." },
    ],
    events: [
      { date: "10 mai", title: "Réunion coordination pôle", location: "Lyon · 9h00", kind: "Réunion" },
      { date: "14 mai", title: "Point onboarding", location: "Teams · 10h00", kind: "Point" },
      { date: "19 mai", title: "Mise à jour modèles de documents", location: "Bibliothèque", kind: "Échéance" },
      { date: "26 mai", title: "Échéance compte rendu", location: "DRSE", kind: "Échéance" },
    ],
    priorities: {
      accueilMessage: "Vue adaptée à votre activité — coordination et procédures.",
      commerce: [
        { label: "Calendrier opérations", to: "/commerce" },
        { label: "Documents et supports à relayer", to: "/commerce" },
        { label: "Modèles associés", to: "/onboarding" },
        { label: "Contacts commerce", to: "/expertises" },
        { label: "Rappels pratiques", to: "/onboarding" },
      ],
      fournisseurs: [
        { label: "Contacts", to: "/expertises" },
        { label: "Liens sources", to: "/fournisseurs" },
        { label: "Informations pratiques", to: "/fournisseurs" },
        { label: "Dernière mise à jour", to: "/fournisseurs" },
        { label: "Qui contacter ?", to: "/expertises" },
      ],
      onboarding: [
        { label: "Modèles de documents", to: "/onboarding" },
        { label: "Parcours onboarding", to: "/onboarding" },
        { label: "Procédures", to: "/onboarding" },
        { label: "Supports d'accompagnement", to: "/onboarding" },
        { label: "Documents à relayer", to: "/onboarding" },
      ],
      expertises: [
        { label: "Contacts utiles", to: "/expertises" },
        { label: "Canal recommandé", to: "/expertises" },
        { label: "Support administratif", to: "/expertises" },
        { label: "Modèles / procédures", to: "/onboarding" },
      ],
      idees: [
        { label: "Questions procédures", to: "/idees" },
        { label: "Idées organisation", to: "/idees" },
        { label: "Irritants coordination", to: "/idees" },
        { label: "Modèles ou supports demandés", to: "/idees" },
      ],
    },
  },

  expertise: {
    id: "expertise",
    label: "Expertise / IAS",
    short: "Expertise / IAS",
    description: "Fournisseurs, fabricants, contacts techniques.",
    tools: [
      { label: "Fournisseurs & fabricants", desc: "Annuaire régional" },
      { label: "Infos fabricants", desc: "Nouveautés et vigilances" },
      { label: "CRM", desc: "Comptes, opportunités" },
      { label: "Pixel", desc: "Intranet et contenus internes" },
      { label: "Contacts expertise", desc: "Interlocuteurs clés" },
      { label: "Supports techniques", desc: "Documents et ressources" },
      { label: "Rexel GPT", desc: "Assistance IA interne" },
    ],
    dashboard: [
      {
        title: "Fournisseurs & fabricants",
        cards: [
          { name: "Fournisseurs & fabricants", desc: "Informations et vigilances", action: "Voir", to: "/fournisseurs" },
          { name: "Infos fabricants", desc: "Nouveautés et points d'attention", action: "Lire", to: "/fournisseurs" },
        ],
      },
      {
        title: "Expertise technique",
        cards: [
          { name: "Supports techniques", desc: "Documents et ressources utiles", action: "Consulter", to: "/onboarding" },
          { name: "CRM", desc: "Informations client si pertinent", action: "Ouvrir" },
        ],
      },
      {
        title: "Contacts",
        cards: [
          { name: "Contacts expertise", desc: "Interlocuteurs clés", action: "Voir", to: "/expertises" },
          { name: "Qui contacter pour ?", desc: "Orientation des demandes", action: "Voir", to: "/expertises" },
        ],
      },
      {
        title: "Supports",
        cards: [
          { name: "Rexel GPT", desc: "Assistance IA interne", action: "Utiliser" },
        ],
      },
      {
        title: "Remontées expertise",
        cards: [
          { name: "Sollicitations expertise", desc: "Questions et irritants associés", action: "Voir", to: "/idees" },
        ],
      },
    ],
    news: [
      { tag: "Fabricant", date: "5 mai 2026", title: "Info fabricant importante", excerpt: "Schneider — nouvelle gamme PowerLogic disponible, webinaire 15/05." },
      { tag: "Vigilance", date: "3 mai 2026", title: "Vigilance approvisionnement", excerpt: "Tension appro câbles HT Nexans jusqu'au 20/05." },
      { tag: "Expertise", date: "29 avril 2026", title: "Mise à jour contact expertise", excerpt: "Référent automatisme actualisé sur l'annuaire." },
    ],
    events: [
      { date: "11 mai", title: "Point expertise fournisseurs", location: "Teams · 9h00", kind: "Point" },
      { date: "15 mai", title: "Réunion fabricants", location: "Lyon · 14h00", kind: "Réunion" },
      { date: "22 mai", title: "Revue vigilance approvisionnement", location: "Teams · 10h00", kind: "Revue" },
      { date: "28 mai", title: "Mise à jour supports techniques", location: "Bibliothèque", kind: "Échéance" },
    ],
    priorities: {
      accueilMessage: "Vue adaptée à votre activité — expertise et fournisseurs.",
      commerce: [
        { label: "Supports liés aux fabricants", to: "/commerce" },
        { label: "Informations fabricants", to: "/fournisseurs" },
        { label: "Opérations concernées par expertise", to: "/commerce" },
        { label: "Contacts commerce / expertise", to: "/expertises" },
        { label: "CRM si pertinent", href: "#" },
      ],
      fournisseurs: [
        { label: "Infos fabricants", to: "/fournisseurs" },
        { label: "Contacts fabricants", to: "/fournisseurs" },
        { label: "Familles produits", to: "/fournisseurs" },
        { label: "Sujets techniques", to: "/fournisseurs" },
        { label: "Vigilances", to: "/fournisseurs" },
        { label: "Supports techniques", to: "/onboarding" },
      ],
      onboarding: [
        { label: "Procédures expertise", to: "/onboarding" },
        { label: "Supports techniques", to: "/onboarding" },
        { label: "Contacts", to: "/expertises" },
        { label: "Ressources fabricants", to: "/fournisseurs" },
      ],
      expertises: [
        { label: "Expertises techniques", to: "/expertises" },
        { label: "Fournisseurs", to: "/fournisseurs" },
        { label: "Contacts fabricants", to: "/fournisseurs" },
        { label: "CRM", href: "#" },
        { label: "Fiches expertise", to: "/expertises" },
      ],
      idees: [
        { label: "Sollicitations expertise", to: "/idees" },
        { label: "Questions techniques", to: "/idees" },
        { label: "Sujets fournisseurs", to: "/idees" },
        { label: "Bonnes pratiques expertise", to: "/idees" },
      ],
    },
  },

  standard: {
    id: "standard",
    label: "Utilisateur standard",
    short: "Utilisateur",
    description: "Vue simple — outils essentiels et accès courants.",
    tools: [
      { label: "Pixel", desc: "Intranet et contenus internes" },
      { label: "CRM", desc: "Suivi commercial" },
      { label: "Soon", desc: "Formation & onboarding" },
      { label: "Kezako", desc: "Base de connaissances" },
      { label: "Yoobic", desc: "Visites & animations terrain" },
      { label: "Rexel GPT", desc: "Assistance IA interne" },
    ],
    dashboard: [
      {
        title: "Outils essentiels",
        cards: [
          { name: "Pixel", desc: "Accès intranet", action: "Ouvrir" },
          { name: "CRM", desc: "Suivi commercial si concerné", action: "Ouvrir" },
        ],
      },
      {
        title: "Actualités",
        cards: [
          { name: "Actualités régionales", desc: "Informations utiles", action: "Lire" },
          { name: "Calendrier opérations", desc: "Voir les échéances visibles", action: "Voir", to: "/commerce" },
        ],
      },
      {
        title: "Commerce visible",
        cards: [
          { name: "Opérations en cours", desc: "Informations commerciales", action: "Voir", to: "/commerce" },
        ],
      },
      {
        title: "Ressources utiles",
        cards: [
          { name: "Onboarding", desc: "Ressources d'intégration", action: "Voir", to: "/onboarding" },
          { name: "Contacts", desc: "Trouver le bon interlocuteur", action: "Voir", to: "/expertises" },
        ],
      },
      {
        title: "Questions",
        cards: [
          { name: "Boîte à questions", desc: "Poser une question", action: "Contribuer", to: "/idees" },
          { name: "Rexel GPT", desc: "Assistance IA interne", action: "Utiliser" },
        ],
      },
    ],
    news: [
      { tag: "Régional", date: "5 mai 2026", title: "Information régionale importante", excerpt: "Communication DRSE — point d'étape mai." },
      { tag: "Support", date: "3 mai 2026", title: "Nouveau support utile", excerpt: "Mise à jour des modes opératoires courants." },
      { tag: "FAQ", date: "29 avril 2026", title: "Question fréquente traitée", excerpt: "Réponse publiée à propos des accès Yoobic mobiles." },
    ],
    events: [
      { date: "12 mai", title: "Événement régional", location: "Lyon · 9h00", kind: "Événement" },
      { date: "15 mai", title: "Opération visible", location: "DRSE", kind: "Info" },
      { date: "21 mai", title: "Information pratique", location: "Portail", kind: "Info" },
      { date: "28 mai", title: "Point d'accueil nouvel arrivant", location: "Teams · 14h00", kind: "Accueil" },
    ],
    priorities: {
      accueilMessage: "Vue adaptée à votre activité — accès essentiels.",
      commerce: [
        { label: "Opérations visibles", to: "/commerce" },
        { label: "Supports utiles", to: "/commerce" },
        { label: "Calendrier simplifié", to: "/commerce" },
        { label: "Contacts", to: "/expertises" },
        { label: "Questions fréquentes", to: "/idees" },
      ],
      fournisseurs: [
        { label: "Fournisseurs principaux", to: "/fournisseurs" },
        { label: "Informations utiles", to: "/fournisseurs" },
        { label: "Contact interne", to: "/expertises" },
        { label: "Lien source", to: "/fournisseurs" },
      ],
      onboarding: [
        { label: "Soon", href: "#" },
        { label: "Où trouver quoi", to: "/onboarding" },
        { label: "Modes opératoires essentiels", to: "/onboarding" },
        { label: "Contacts utiles", to: "/expertises" },
      ],
      expertises: [
        { label: "Contacts utiles", to: "/expertises" },
        { label: "Qui contacter ?", to: "/expertises" },
        { label: "Canal recommandé", to: "/expertises" },
        { label: "Contacts support", to: "/expertises" },
      ],
      idees: [
        { label: "Poser une question", to: "/idees" },
        { label: "Partager une idée", to: "/idees" },
        { label: "Suivre le statut", to: "/idees" },
      ],
    },
  },
};

export const audienceList: AudienceProfile[] = [
  audienceProfiles.general,
  audienceProfiles.direction,
  audienceProfiles.agence,
  audienceProfiles.commerce,
  audienceProfiles.assistante,
  audienceProfiles.expertise,
  audienceProfiles.standard,
];
