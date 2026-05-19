# Maquette DRSE carte blanche

Cette maquette est une version idéale du portail régional Sud-Est, volontairement libérée des limites SharePoint.

Objectif : débloquer la vision produit avant de revenir à une version réaliste SharePoint.

## Ce que montre la maquette

- Un bureau du jour directement utile aux responsables d'agence.
- Une recherche globale sur outils, supports, contacts, opérations et procédures.
- Une vue adaptée par profil : RA, commerce, direction, assistante, expertise.
- Un assistant d'orientation qui route vers le bon circuit.
- Des accès intelligents aux outils Rexel.
- Un plan commercial régional avec supports et échéances.
- Une zone contacts / responsabilités.
- Une zone fournisseurs à suivre.
- Un tableau de suivi des questions et remontées terrain.
- Des indicateurs de vie du portail, sans refaire Qlik.

## Correspondance WebParts la plus proche

| Bloc de la maquette idéale | WebPart Rexel / SharePoint le plus proche |
| --- | --- |
| Bureau du jour | Tableau de bord |
| Carte opération prioritaire | Carte éditoriale |
| Carte sécurité / RH | Bibliothèque de documents / Modèles de documents |
| Carte fournisseurs en vigilance | Liste |
| Carte questions terrain | Boîte à idées / Microsoft Forms |
| Assistant d'orientation | Power Apps / Agent link |
| Accès intelligents aux outils | Tableau de bord / Liens rapides / Mes Applications |
| Plan commercial régional | Événements / Liste |
| Dossier du moment | Contenu mis en évidence / Bibliothèque de documents |
| Qui contacter pour ? | Rôle des contacts / Contacts / Trombinoscope |
| Fournisseurs à suivre | Liste |
| Questions et remontées terrain | Boîte à idées / Microsoft Forms / Liste |
| Vie du portail | Indicateur / Activité du site / Graphique rapide |
| Chaîne d'usage | Image Interactive |

## Liens réels intégrés

Les accès ont été regroupés en quatre niveaux pour éviter une page catalogue.

| Niveau | Liens |
| --- | --- |
| CŒUR | CRM Dynamics, Qlik Reporting, Kezako, Opérations commerciales |
| P1 - Commerce | GetPaid, Merchandising, Comptoirs Gagnants, Gamme agence |
| P2 - Cadre | Sécurité Commerce, Sécurité Logistique, SuccessFactors, Nouveau chef d'agence, Règles d'Or |
| P3 - Spécialisé | Mercure, Digital |

Le détail des URL est centralisé dans `liens_accessibles_portail_drse.md`.

Dans la maquette, ces niveaux sont accessibles par onglets. Cela permet de tester deux scénarios :

- une page unique avec des volets filtrables ;
- plusieurs pages SharePoint séparées : Accueil, Commerce, Cadre, Spécialisé.

## Lecture Power Apps

Power Apps devient intéressant quand le besoin n'est plus seulement d'afficher de l'information, mais de guider, filtrer, enregistrer ou suivre une action.

| Bloc | Réalisable via Power Apps ? | Ce que Power Apps peut apporter |
| --- | --- | --- |
| Assistant d'orientation | Oui, très pertinent | Parcours guidé : besoin, rôle, pôle, puis proposition du bon outil, contact, support ou circuit. |
| Remontées terrain | Oui, très pertinent | Formulaire riche, statut, propriétaire, commentaire, pièce jointe, historique, relance possible via Power Automate. |
| Fournisseurs à suivre | Oui | Interface plus propre qu'une liste brute : filtres, fiches fournisseurs, vigilance, lien source, date de mise à jour. |
| Suivi opération agence | Oui | Checklist RA : kit consulté, PLV reçue, question ouverte, difficulté remontée, suivi par opération. |
| Contacts guidés | Partiel | Moteur "qui contacter pour ?" si la logique devient plus complexe qu'un simple annuaire. |
| Procédures guidées | Partiel | Mini parcours d'action pour procédures courtes : choix du cas, étapes, document source final. |
| Vie du portail | Oui côté administration | Console de gestion : contenu à relire, lien cassé, propriétaire de contenu, date de prochaine revue. |
| Accès rapides outils | Non prioritaire | Un Tableau de bord, Mes Applications ou Liens rapides suffisent souvent mieux qu'une app. |
| Actualités | Non prioritaire | Le WebPart Actualités reste plus adapté ; Power Apps n'est utile que pour une modération ou un workflow spécifique. |
| KPI business | À éviter | Ne pas refaire Qlik. Power Apps peut afficher du suivi de portail, pas du pilotage commercial détaillé. |

## Frontière utile

À faire avec Power Apps :
- routage guidé ;
- formulaires terrain ;
- suivi de statut ;
- mini console admin ;
- interfaces propres au-dessus de listes SharePoint ;
- parcours courts orientés action.

À ne pas faire avec Power Apps :
- refaire Pixel ;
- refaire Qlik ;
- refaire le CRM ;
- créer un gros référentiel fournisseurs ;
- exposer des données sensibles ;
- fabriquer un outil de ticketing complet si un circuit existe déjà.

## Fichier à ouvrir

Ouvrir `index.html` dans un navigateur.
