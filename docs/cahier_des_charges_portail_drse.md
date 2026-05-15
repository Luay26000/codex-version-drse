# Cahier des charges — Portail Régional Sud-Est

Date : 15 mai 2026  
Projet : Portail Régional Sud-Est — SharePoint / Microsoft 365  
Version : V1 réaliste avec trajectoire V2  
Périmètre principal : Direction Régionale Sud-Est / Réseau  

---

## 1. Contexte

La Direction Régionale Sud-Est évolue dans un environnement où l'information utile est dispersée entre Pixel, SharePoint, Teams, les mails, Qlik, CRM, Yoobic, Kezako, Soon, les dossiers documentaires, les supports commerciaux et les personnes-ressources.

Les entretiens menés montrent que le problème principal n'est pas l'absence d'outils, mais la difficulté à retrouver rapidement le bon outil, la bonne information, le bon support ou le bon interlocuteur.

Le portail régional doit donc devenir une porte d'entrée simple, stable et utile. Il ne doit pas remplacer les outils existants. Il doit les rendre plus accessibles.

---

## 2. Objectifs du portail

### Objectif général

Créer un portail SharePoint régional permettant aux utilisateurs de retrouver rapidement les accès, informations, supports, contacts et remontées utiles au fonctionnement quotidien du Réseau Sud-Est.

### Objectifs opérationnels

- Centraliser les accès aux outils clés.
- Stabiliser les informations diffusées par mail.
- Rendre visibles les opérations commerciales en cours et à venir.
- Donner accès aux supports commerciaux utiles.
- Faciliter l'accès aux contenus Sécurité, RH, procédures et modes opératoires.
- Permettre aux responsables d'agence de poser une question, partager une idée ou remonter un irritant.
- Clarifier les contacts utiles et les interlocuteurs par sujet.
- Préparer une évolution progressive vers un portail plus ciblé par profil.

---

## 3. Principes de conception

Le portail doit être :

- simple ;
- lisible ;
- rapide à parcourir ;
- orienté action ;
- maintenable ;
- compatible avec les WebParts SharePoint disponibles chez Rexel ;
- centré sur les besoins les plus fréquents.

Le portail ne doit pas être :

- un Pixel bis ;
- un Qlik bis ;
- un CRM bis ;
- un outil de ticketing ;
- un réseau social lourd ;
- un référentiel fournisseur complet ;
- une application métier custom ;
- un espace documentaire supplémentaire non gouverné.

---

## 4. Cible prioritaire

### Cible V1

La V1 doit viser prioritairement le responsable d'agence.

Justification issue des entretiens :

- le responsable d'agence traite beaucoup de sujets différents ;
- il dispose de peu de temps ;
- il a besoin d'aller directement au bon endroit ;
- il est concerné par la sécurité, les RH, le commerce, les outils, le terrain, les contacts et les questions opérationnelles ;
- les fonctions support, management et transverses sont en grande partie au service de son activité.

### Cibles secondaires V1

- Directeurs de pôle / COPIL DP pour validation et pilotage.
- RRV / chefs des ventes selon accès aux contenus commerce.
- Assistantes de pôle pour les procédures, modèles, contacts et relais.

### Cibles V2

- Direction / COPIL DP.
- Responsable d'agence.
- Commerce / RACOR.
- Assistante de pôle.
- Expertise / IAS.
- Utilisateur standard.

---

## 5. Périmètre fonctionnel V1

La V1 doit rester courte. Elle doit couvrir environ 80 à 90% des besoins les plus fréquents sans chercher l'exhaustivité.

### Pages V1 attendues

1. Accueil.
2. Commerce & animations.
3. Questions / idées / remontées.
4. Contacts utiles.
5. Procédures / onboarding / supports utiles.

Une page de cadrage ou de gouvernance peut exister, mais elle doit rester discrète et non visible comme page métier principale.

### Rubriques prioritaires de l'accueil

- Poste de pilotage RA.
- Sécurité & RH.
- Outils RA.
- Actualités utiles.
- Agenda / événements.
- Opération du moment.
- Alertes utiles.
- Questions, contacts & terrain.

---

## 6. Fonctionnalités attendues V1

### 6.1 Accès rapides / outils RA

Le portail doit proposer une zone d'accès rapide aux outils utiles.

Outils confirmés ou fortement probables :

- Pixel / Annuaire Pixel.
- CRM Rexel UI.
- Qlik / Qliksense.
- Kezako.
- Yoobic.
- Rexel One News.
- Configurateur / démonstrateur digital.
- Pico — variables commerciaux, si usage confirmé.
- Get Paid, si usage RA confirmé.

Règle : les outils sont affichés comme liens d'accès, pas comme contenus recopiés.

WebParts possibles :

- Tableau de bord.
- Liens rapides.
- Lien.
- Bouton d'action.
- Carte éditoriale.

### 6.2 Sécurité & RH

Le portail doit intégrer un bloc visible Sécurité & RH, car ce sont des sujets quotidiens pour les responsables d'agence.

Contenus attendus :

- lien vers le livre sécurité ;
- bonnes pratiques sécurité ;
- guides et questions fréquentes ;
- feuilles de liaison RH ;
- prévoyance ;
- mutuelle ;
- questions RH courantes ;
- lien vers les sources Pixel ou RH existantes.

WebParts possibles :

- Liste.
- Liens rapides.
- Contenu mis en évidence.
- Bouton.
- Message d'information.

### 6.3 Commerce & animations

Le portail doit rendre les opérations commerciales visibles et retrouvables.

Contenus attendus :

- opération du moment ;
- calendrier des opérations ;
- supports PLV ;
- kits commerciaux ;
- argumentaires ;
- dates de validité ;
- lien vers le calendrier du service de Grégoire ;
- liens vers les supports source.

Règle : le portail ne doit pas exposer de données sensibles ou confidentielles sur les opérations.

WebParts possibles :

- Actualités.
- Événements.
- Carte éditoriale.
- Focus.
- Bouton d'action.
- Bibliothèque de documents.
- Liste.

### 6.4 Actualités utiles

Le portail doit afficher des actualités actionnables et utiles, sans créer un journal régional complet.

Sources possibles :

- Rexel One News ;
- publications régionales ;
- informations commerce ;
- rappels sécurité / RH ;
- supports terrain ;
- événements de zone.

Règle : les actualités doivent être datées, courtes et reliées à une action ou une source.

WebParts possibles :

- Actualités.
- Actualités avancées.
- Message d'information.
- Focus.

### 6.5 Agenda

Le portail doit afficher les échéances utiles, sans devenir un calendrier exhaustif.

Événements attendus :

- lancement d'opération commerciale ;
- échéance supports PLV ;
- point opérations commerciales ;
- rappel sécurité / procédure ;
- événement régional utile.

WebParts possibles :

- Événements.
- Calendrier de groupe.
- Bouton d'action vers calendrier source.
- Liste en vue calendrier.

### 6.6 Questions / idées / remontées terrain

Le portail doit permettre aux responsables d'agence de :

- poser une question ;
- partager une bonne idée ;
- remonter un irritant ;
- suivre un statut simple si possible.

Règle : il ne faut pas créer un outil de ticketing lourd.

WebParts possibles :

- Boîte à idées.
- Microsoft Forms.
- Liste SharePoint.
- Power Automate en V2 pour notification ou suivi.

### 6.7 Contacts utiles

Le portail doit permettre de retrouver rapidement le bon interlocuteur.

Contenus attendus :

- qui contacter pour ;
- contacts commerce ;
- contacts sécurité / RH ;
- contacts procédures ;
- contacts expertise ;
- contacts support ;
- contacts par pôle si disponible.

WebParts possibles :

- Contacts.
- Rôle des contacts.
- Trombinoscope.
- Organigramme.
- Liste.

### 6.8 Merchandising / Yoobic / terrain

Le portail doit regrouper les accès utiles aux dispositifs terrain.

Contenus possibles :

- Yoobic ;
- Game Agence ;
- merchandising ;
- immo ;
- gondoles ;
- dispositifs terrain ;
- liens vers supports ou contacts associés.

WebParts possibles :

- Liens rapides.
- Liste.
- Bibliothèque de documents.
- Carte éditoriale.

---

## 7. Périmètre V2

La V2 pourra enrichir la V1 sans changer la logique globale du portail.

Fonctionnalités possibles :

- ciblage d'audience SharePoint par profil ;
- fournisseurs / fabricants plus structurés ;
- informations fabricants périodiques ;
- baromètre fournisseur léger ;
- organigramme régional ou par pôle ;
- Power Apps pour formulaires spécifiques ;
- Power Automate pour notifications et statuts ;
- tableau de bord Viva Connections ;
- indicateurs de vie du portail ;
- page expertise plus complète ;
- espaces différenciés pour direction, commerce, assistantes, expertise.

---

## 8. Hors périmètre

Sont exclus du périmètre V1 :

- création d'un nouvel outil métier ;
- remplacement de Pixel ;
- remplacement de Qlik ;
- remplacement du CRM ;
- remplacement de Yoobic ;
- LMS ou remplacement de Soon ;
- dashboard KPI commercial détaillé ;
- scoring fournisseur contractuel ;
- ticketing complet ;
- référentiel fournisseur exhaustif ;
- stockage de données commerciales sensibles ;
- workflows complexes Power Platform.

---

## 9. Contraintes SharePoint / M365

### Contraintes générales

- Le portail doit être réalisable avec les WebParts disponibles dans l'environnement Rexel.
- Les pages doivent rester proches d'une page SharePoint moderne réelle.
- Les contenus doivent être courts, visuels et maintenables.
- Les liens doivent pointer vers les sources officielles quand elles existent.
- Les données sensibles restent protégées dans les outils sources.

### Ciblage d'audience

Le ciblage d'audience sert à prioriser ou afficher certains contenus selon un profil.

Il ne remplace pas les permissions.

Dans la maquette, le ciblage peut être simulé. Dans SharePoint, il devra être configuré via groupes ou audiences disponibles.

Audiences envisagées en V2 :

- Direction / COPIL DP.
- Responsables d'agence.
- Commerce / RACOR.
- Assistantes de pôle.
- Expertise / IAS.
- Utilisateurs standard.

---

## 10. WebParts retenues

### WebParts prioritaires V1

| Besoin | WebPart principal | Alternative |
|---|---|---|
| Accès rapides | Tableau de bord / Liens rapides | Lien, Bouton d'action |
| Actualités | Actualités | Actualités avancées, Message d'information |
| Agenda | Événements | Calendrier de groupe, Liste calendrier |
| Opération du moment | Carte éditoriale | Focus, Bouton d'action |
| Sécurité / RH | Liste | Liens rapides, Contenu mis en évidence |
| Outils RA | Liens rapides | Tableau de bord, Mes Applications |
| Questions / idées | Boîte à idées | Microsoft Forms, Liste |
| Contacts | Contacts | Rôle des contacts, Trombinoscope |
| Documents supports | Bibliothèque de documents | Documents, Contenu mis en évidence |

### WebParts V2 possibles

- PowerApps.
- Power BI, uniquement selon accès et sans refaire Qlik.
- Power Automate, via listes ou formulaires.
- Viva Engage / Conversations.
- Tableau de bord Viva Connections.
- Organigramme.
- Image interactive.
- Agent link.
- Viva Pulse, pour feedback ponctuel.

### WebParts non prioritaires

- Viva Learning, sauf si l'organisation décide de relier explicitement des parcours de formation.
- Viva Insights, non prioritaire pour ce portail.
- Météo, horloge internationale, Kindle, YouTube, sauf besoin ponctuel non identifié.

---

## 11. Données et listes à créer

### Liste Accès utiles

Colonnes proposées :

- Titre.
- Catégorie.
- Description courte.
- URL.
- Source.
- Profil prioritaire.
- Propriétaire du lien.
- Statut : actif / à valider / obsolète.
- Dernière vérification.

### Liste Opérations commerciales

Colonnes proposées :

- Nom de l'opération.
- Date de début.
- Date de fin.
- Statut.
- Pôle ou périmètre.
- Support PLV.
- Kit commercial.
- Argumentaire.
- Contact référent.
- Sensibilité.
- Lien source.

### Liste Alertes utiles

Colonnes proposées :

- Sujet.
- Type : sécurité, RH, appro, commerce, support.
- Impact agence.
- Statut.
- Contact.
- Date de mise à jour.
- Lien source.

### Liste Questions / idées

Colonnes proposées :

- Type : question, idée, irritant.
- Sujet.
- Description.
- Pôle / agence.
- Auteur.
- Date.
- Statut : reçu, en cours, répondu, clôturé.
- Référent.
- Réponse ou suite donnée.

### Liste Contacts utiles

Colonnes proposées :

- Nom.
- Rôle.
- Sujet.
- Pôle.
- Canal recommandé.
- Mail.
- Téléphone si autorisé.
- Commentaire court.

---

## 12. Gouvernance

### Rôles

- Sponsor métier : Direction Régionale / Luc Séquier.
- Référent conception : stagiaire / porteur du projet.
- Référents contenus : commerce, RH, sécurité, expertise, assistantes, contrôle de gestion selon les rubriques.
- Administrateur SharePoint : personne disposant des droits propriétaire.

### Règles d'alimentation

- Chaque bloc doit avoir un propriétaire identifié.
- Les liens doivent être vérifiés régulièrement.
- Les actualités doivent être datées.
- Les contenus obsolètes doivent être retirés ou archivés.
- Les opérations commerciales doivent avoir une date de validité.
- Les documents sensibles doivent rester dans les espaces sources protégés.

### Fréquence recommandée

- Actualités : selon besoin, maximum quelques éléments visibles.
- Opérations commerciales : mise à jour à chaque opération.
- Liens utiles : vérification mensuelle ou trimestrielle.
- Contacts : vérification trimestrielle.
- Questions / idées : suivi hebdomadaire si la boîte est ouverte.

---

## 13. Sécurité et confidentialité

- Le portail ne doit pas afficher d'informations commerciales sensibles en clair.
- Les données fournisseur sensibles sont exclues : RFA, BFA, conditions commerciales, prix confidentiels, contrats.
- Le ciblage d'audience ne remplace pas les permissions.
- Les liens vers documents sensibles doivent pointer vers les espaces sources avec permissions adaptées.
- Les pages métier ne doivent pas afficher de message d'accès refusé comme mécanisme fonctionnel.

---

## 14. Exigences ergonomiques

- Page courte.
- Navigation claire.
- Tuiles lisibles.
- Peu de texte.
- Accès en deux clics maximum aux contenus prioritaires.
- Pas de menu latéral interminable.
- Pas de page par outil.
- Pas de contenu explicatif de projet sur les pages métier.
- Les libellés doivent parler métier : Sécurité, RH, Outils RA, Commerce, Contacts.

---

## 15. Critères d'acceptation V1

La V1 sera considérée satisfaisante si :

1. La page d'accueil est compréhensible sans explication.
2. Les responsables d'agence trouvent rapidement les blocs principaux.
3. Les accès vers Pixel, CRM, Qlik, Kezako, Yoobic et les sources utiles sont présents ou identifiés.
4. La partie commerce affiche une opération du moment et des liens vers supports.
5. Les échéances importantes sont visibles.
6. La boîte à questions / idées existe ou son emplacement est prévu.
7. Les contacts utiles sont accessibles.
8. Les contenus sensibles ne sont pas exposés.
9. Les WebParts utilisées existent dans l'environnement Rexel.
10. La maquette ne ressemble pas à un rapport ou à une page de cadrage.
11. La solution reste maintenable par les équipes métier.
12. Le portail ne devient pas un doublon de Pixel.

---

## 16. Indicateurs de réussite

Les indicateurs doivent mesurer la vie du portail, pas la performance commerciale.

Indicateurs possibles :

- nombre de visites ;
- clics sur les accès principaux ;
- nombre de questions / idées déposées ;
- nombre de contenus publiés ;
- nombre de liens vérifiés ;
- taux de contenus obsolètes ;
- retours qualitatifs des RA pilotes.

Sont exclus :

- chiffre d'affaires ;
- marge ;
- performance commerciale détaillée ;
- KPI déjà suivis dans Qlik.

---

## 17. Plan de déploiement proposé

### Étape 1 — Cadrage

- Valider la cible prioritaire RA.
- Valider les rubriques V1.
- Obtenir les droits propriétaire ou un site bac à sable.
- Identifier les propriétaires de contenus.

### Étape 2 — Construction du squelette

- Créer la page d'accueil.
- Créer les listes principales.
- Ajouter les WebParts.
- Paramétrer les liens.
- Appliquer la charte visuelle.

### Étape 3 — Alimentation minimale

- Ajouter les accès outils.
- Ajouter les premières opérations commerciales.
- Ajouter les contacts prioritaires.
- Ajouter les premières alertes utiles.
- Ajouter le formulaire ou la boîte à idées.

### Étape 4 — Validation pilote

- Présenter au COPIL DP.
- Tester avec quelques responsables d'agence.
- Tester avec un RA récent ou moins autonome.
- Corriger l'arborescence et les libellés.

### Étape 5 — Ouverture progressive

- Ouvrir à un périmètre limité.
- Communiquer par mail.
- Observer les usages.
- Ajuster les contenus.
- Élargir progressivement.

---

## 18. Points à valider métier

- Liste exacte des liens outils à intégrer.
- Lien officiel Yoobic.
- Lien configurateur / démonstrateur digital.
- Présence ou non de Get Paid en V1.
- Source des supports PLV et kits commerciaux.
- Source du calendrier Grégoire.
- Propriétaire des actualités régionales.
- Circuit de traitement des questions / idées.
- Contacts RH / sécurité / commerce à afficher.
- Niveau de visibilité des contenus fournisseurs.
- Rôle exact du Business Analyst dans l'alimentation éventuelle d'un bloc activité.

---

## 19. Synthèse finale

Le portail DRSE doit être une page d'accès et d'orientation, centrée sur les besoins quotidiens des responsables d'agence. La V1 doit rester courte, concrète et actionnable. Les outils existants restent les sources de vérité : Pixel, Qlik, CRM, Yoobic, Kezako, Soon et les espaces documentaires métier ne sont pas remplacés.

La réussite du projet dépend moins de la quantité de contenus que de la clarté du squelette, de la qualité des liens, de la gouvernance d'alimentation et de la capacité à maintenir le portail vivant.
