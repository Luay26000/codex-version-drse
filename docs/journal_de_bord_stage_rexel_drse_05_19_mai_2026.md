# JOURNAL DE BORD — STAGE REXEL DRSE

## Période : du mardi 5 mai au mardi 19 mai 2026

**Phase 2 — Conception maquette + POC SharePoint**  
**Stagiaire : Luay Guerbaa**  
**Tutrice : Nathalie Rozier**  
**Directeur : Luc Séquier**

---

# Synthèse de la période

La période du 5 au 19 mai 2026 a été consacrée à la transition entre la phase d'audit et la phase de conception concrète du portail régional DRSE.

Les travaux ont porté sur :

- la finalisation de l'inventaire des WebParts disponibles chez Rexel ;
- la production et l'itération de plusieurs maquettes ;
- la préparation d'une V1 plus réaliste et plus centrée sur les responsables d'agence ;
- la compréhension des limites SharePoint natives ;
- l'exploration de Power Apps, Power Automate et du Tableau de bord Viva Connections ;
- l'entretien avec Fabien Chaves, qui a fortement recentré le besoin sur les usages concrets des responsables d'agence ;
- la rédaction d'un cahier des charges ;
- la formalisation de processus et de scénarios d'usage ;
- la définition progressive des blocs CŒUR / P1 / P2 / P3 ;
- les premières tentatives de paramétrage du site SharePoint réel ;
- la préparation de livrables de présentation et d'un oral de POC.

La période a aussi été marquée par plusieurs limites opérationnelles : jours fériés, ponts, indisponibilités de certains interlocuteurs, difficultés d'accès propriétaire sur le site SharePoint et limites des WebParts natifs par rapport aux maquettes produites.

---

# Mardi 5 mai 2026

## Objectif du jour

Approfondir la faisabilité SharePoint, finaliser l'inventaire des WebParts et poursuivre la construction de la maquette de référence.

## Travaux réalisés

### Visio avec Avanade

Échange avec des experts Microsoft / Avanade pour clarifier les limites techniques de SharePoint Online et de l'environnement Microsoft 365.

Questions préparées et abordées :

- faisabilité native de la maquette ;
- limites des WebParts SharePoint ;
- fonctionnement du Tableau de bord Viva Connections ;
- ciblage d'audience SharePoint ;
- stabilité des sections flexibles ;
- rendu possible des listes avec statuts colorés ;
- intégration Power BI ;
- raccourcis personnalisables ;
- boîte à idées ;
- contacts / organigramme / trombinoscope ;
- recommandations pour une V1 réaliste.

### Inventaire complet des WebParts

Production d'un inventaire exhaustif des WebParts disponibles chez Rexel à partir des captures du catalogue SharePoint.

WebParts identifiés comme utiles pour le portail :

- Bannière principale ;
- Actualités et Actualités avancées ;
- Liens rapides ;
- Liste ;
- Événements ;
- Contacts ;
- Organigramme ;
- Trombinoscope ;
- Microsoft Forms ;
- Boîte à idées ;
- Tableau de bord ;
- Power BI ;
- Carte éditoriale ;
- Focus ;
- Message d'information ;
- Incorporation ;
- Mur de réseaux sociaux / Viva Engage.

### Poursuite des maquettes

Production d'une version avancée de la maquette via Lovable.

Pages travaillées :

- Accueil ;
- Commerce ;
- Fournisseurs ;
- Onboarding ;
- Expertises & contacts ;
- Boîte à idées ;
- pages admin : Cadrage, Gouvernance, Mapping, Périmètre.

Chaque zone de la maquette est annotée avec le WebPart SharePoint le plus proche.

### Tentatives SharePoint

Poursuite des tests directs dans SharePoint Online :

- création de sections ;
- tests de colonnes ;
- essais de WebParts ;
- premières difficultés sur le rendu visuel ;
- constat que la maquette ne peut pas être reproduite à l'identique avec les WebParts natifs.

## Bilan du jour

La maquette cible est riche, mais la transposition SharePoint nécessite des compromis. La priorité devient donc de distinguer :

- ce qui est faisable en natif ;
- ce qui nécessite Power Apps ou Power Platform ;
- ce qui doit rester hors V1.

---

# Mercredi 6 mai 2026

## Objectif du jour

Transformer l'inventaire en choix de conception et comprendre les composants réellement exploitables.

## Travaux réalisés

### Analyse des WebParts utiles

Travail de comparaison entre :

- les besoins remontés dans les entretiens ;
- la maquette Lovable ;
- les WebParts réellement disponibles chez Rexel ;
- les limites de SharePoint moderne.

Les WebParts ont été regroupés par usage :

- communication ;
- accès rapides ;
- documents ;
- listes ;
- contacts ;
- événements ;
- contribution ;
- pilotage ;
- intégrations.

### Questions sur les actualités

Analyse du rôle de la section Actualités :

- faut-il reprendre des actualités Rexel France existantes ?
- faut-il créer des actualités uniquement Sud-Est ?
- comment éviter de recréer un flux d'actualités difficile à maintenir ?
- comment filtrer ou rediriger vers les actualités préexistantes ?

Conclusion provisoire :

Le portail régional doit surtout donner accès aux actualités utiles au périmètre Sud-Est, sans recréer un média corporate. Les actualités nationales peuvent rester dans leur source officielle si elles sont déjà publiées ailleurs.

### Exploration Power Apps / Power Automate

Première réflexion sur le rôle possible de Power Apps :

- formulaire de remontée terrain ;
- assistant d'orientation ;
- suivi de statut ;
- interface plus lisible au-dessus d'une liste SharePoint ;
- mini-console d'administration.

Power Automate est identifié comme utile pour :

- notifier un responsable ;
- changer un statut ;
- envoyer un accusé de réception ;
- relancer une revue de contenu ;
- alimenter un suivi simple.

## Difficultés

Les WebParts natifs donnent parfois une impression de rigidité : les possibilités existent, mais le rendu est plus contraint que dans une maquette web classique.

## Bilan du jour

La réflexion se déplace d'une maquette "idéale" vers une logique de faisabilité : quelle expérience minimale peut être vraiment construite, maintenue et alimentée ?

---

# Jeudi 7 mai 2026

## Objectif du jour

Réaliser l'entretien avec Fabien Chaves et exploiter son retour pour recentrer la conception.

## Entretien Fabien Chaves

Entretien réalisé le 7 mai 2026 à 08:02, durée 36 minutes.

### Points importants remontés

Fabien Chaves a confirmé plusieurs éléments structurants :

- le responsable d'agence doit être placé au centre du portail ;
- le portail doit rester simple et rapide ;
- un outil trop complet ou trop complexe risque de ne pas être utilisé ;
- la cible principale doit être le "patron d'agence" ;
- le portail doit éviter d'être une redite de ce qui existe déjà ;
- les liens doivent être concrets et utiles ;
- il faut prévoir des volets ou pavés par besoin plutôt qu'une page trop dense.

### Exemples de contenus ou volets cités

Éléments à intégrer ou à creuser :

- outils ;
- CRM ;
- Qlik ;
- GetPaid ;
- merchandising ;
- Gamme agence ;
- sécurité ;
- animation commerciale ;
- configurateur / digital ;
- accès utiles pour les responsables d'agence.

### Accès propriétaire SharePoint

Point abordé : difficulté liée au statut de membre sur le site SharePoint existant.

Conséquence :

- certaines fonctionnalités semblent restreintes ;
- le paramétrage avancé peut nécessiter un rôle propriétaire ;
- le ciblage d'audience et certaines configurations sont difficiles à tester sans droits suffisants.

## Conséquence sur la conception

L'entretien conduit à recentrer fortement la V1 :

- moins de fonctionnalités ;
- moins de pages ;
- moins de contenu théorique ;
- davantage d'accès directs ;
- une cible prioritaire : responsables d'agence ;
- une logique de volets : outils, commerce, sécurité/RH, merchandising, animation commerciale.

## Bilan du jour

L'entretien Fabien Chaves est un point de bascule : la V1 doit devenir plus réaliste, plus simple et plus orientée terrain.

---

# Vendredi 8 mai 2026

## Contexte

Jour férié en France : Victoire 1945.

## Avancement

Pas d'avancement opérationnel significatif prévu sur le projet.

## Impact sur le planning

La semaine est écourtée, ce qui limite les validations possibles auprès des responsables et interlocuteurs internes.

---

# Lundi 11 mai 2026

## Objectif du jour

Exploiter les retours de Fabien Chaves et poursuivre la transformation des maquettes.

## Travaux réalisés

### Recentrage de la V1

Travail de réduction des fonctionnalités inutiles pour les responsables d'agence.

Éléments conservés en priorité :

- accès outils ;
- opérations commerciales ;
- sécurité / RH ;
- merchandising ;
- contacts utiles ;
- questions terrain ;
- onboarding utile.

Éléments réduits ou repoussés :

- tableaux trop détaillés ;
- fonctions avancées non maintenables ;
- pages trop riches ;
- contenus peu utiles aux responsables d'agence ;
- explications projet visibles dans les pages métier.

### Analyse de l'ancien SharePoint Grand Sud

Observation de l'ancien SharePoint utilisé en 2021-2022 :

- présence d'une logique de portail d'accès ;
- nombreux liens vers outils et rubriques ;
- menu vertical dense ;
- tuiles visuelles par thématique ;
- classement par grands sujets.

Lecture retenue :

L'ancien SharePoint ne doit pas être copié tel quel, car il peut devenir trop dense. En revanche, il confirme l'intérêt d'un portail d'accès simple, organisé par familles de besoins.

### Mise à jour des maquettes

Travail sur :

- la V1 réaliste ;
- la maquette plus avancée ;
- suppression de panneaux explicatifs trop visibles ;
- rapprochement avec une interface réellement utilisable.

## Bilan du jour

Le projet gagne en clarté : il ne s'agit pas de faire une vitrine, mais un point d'accès opérationnel.

---

# Mardi 12 mai 2026

## Objectif du jour

Avancer malgré les difficultés SharePoint et renforcer les connaissances Microsoft 365 / Power Platform.

## Travaux réalisés

### Tests SharePoint

Poursuite des tentatives de paramétrage du site :

- ajout de pages ;
- essais de WebParts ;
- tests de sections ;
- essais de liens ;
- réflexion sur les filtres d'actualités ;
- questionnement sur le meilleur composant pour recréer un panneau d'actualités ou de liens.

### Difficultés rencontrées

Les tests montrent plusieurs limites :

- difficulté à reproduire les maquettes ;
- confusion entre page, liste, bibliothèque, galerie et vue ;
- WebParts parfois trop rigides ;
- accès insuffisants sur certaines fonctionnalités ;
- besoin de mieux comprendre la logique SharePoint avant de finaliser un site propre.

### Auto-formation

Avancement de la préparation à la certification Microsoft PL-300 :

- poursuite de la compréhension Power BI ;
- lien avec la question du pilotage ;
- clarification du fait que Qlik reste l'outil de pilotage existant pour le portail DRSE.

## Bilan du jour

Le travail technique avance lentement, mais permet de mieux cerner les limites réelles de l'environnement. Le besoin d'un tutoriel ou d'un cadrage SharePoint devient évident.

---

# Mercredi 13 mai 2026

## Objectif du jour

Formaliser les livrables de conception pour sécuriser le projet, même si le paramétrage SharePoint reste difficile.

## Travaux réalisés

### Cahier des charges

Rédaction d'un cahier des charges du portail DRSE.

Éléments couverts :

- contexte ;
- problématique ;
- objectifs ;
- périmètre ;
- utilisateurs cibles ;
- besoins fonctionnels ;
- limites ;
- WebParts pressentis ;
- rôle de Power Apps ;
- critères de réussite ;
- risques et points de vigilance.

### Processus et scénarios d'usage

Définition de processus prévus autour de quatre niveaux :

1. Cœur du portail ;
2. Priorité commerce ;
3. Cadre / sécurité / RH ;
4. Spécialisé / approfondissement.

Travail de structuration des usages :

- retrouver un outil ;
- retrouver un support ;
- poser une question ;
- remonter un irritant ;
- identifier un contact ;
- suivre une information ;
- stabiliser un document ou un lien.

### Mise en place GitHub

Travail sur la mise en dépôt des livrables et maquettes.

Objectif :

- conserver les versions ;
- faciliter la consultation ;
- éviter de perdre les fichiers ;
- pouvoir montrer les maquettes et documents de manière propre.

## Bilan du jour

Même si le site SharePoint n'est pas finalisé, les livrables de conception deviennent solides : cahier des charges, processus, maquettes et cadrage.

---

# Jeudi 14 mai 2026

## Contexte

Jeudi de l'Ascension, jour férié en France.

## Avancement

Pas d'avancement opérationnel significatif.

## Impact projet

La disponibilité des interlocuteurs est réduite sur la fin de semaine, ce qui limite les validations métier.

---

# Vendredi 15 mai 2026

## Contexte

Journée de pont / activité réduite après l'Ascension.

## Travaux réalisés

Travail autonome principalement :

- consolidation des notes ;
- revue des maquettes ;
- réflexion sur la formation nécessaire pour être plus autonome sur SharePoint ;
- poursuite des tentatives de compréhension du paramétrage ;
- identification des prochains sujets à valider avec les responsables.

## Difficultés

Indisponibilité partielle des interlocuteurs et difficultés à obtenir des validations immédiates.

## Bilan du jour

Avancement limité sur la mise en œuvre, mais consolidation utile des acquis et des blocages.

---

# Lundi 18 mai 2026

## Objectif du jour

Préparer une alternative de livrable si la réalisation SharePoint complète n'est pas atteignable à court terme.

## Travaux réalisés

### Maquette V1 réaliste

Poursuite de la maquette V1 réaliste :

- centrée responsables d'agence ;
- plus courte ;
- plus proche des contraintes SharePoint ;
- structurée autour des accès importants ;
- moins orientée "portail complet" ;
- plus orientée "centralisation utile".

### Maquette carte blanche

Création d'une maquette idéale hors contraintes SharePoint.

Objectif :

- sortir du syndrome de la page blanche ;
- visualiser une cible fonctionnelle idéale ;
- montrer ce que serait un portail optimisé si les contraintes SharePoint étaient levées ;
- comparer ensuite avec la V1 réaliste.

Cette maquette intègre :

- recherche globale ;
- vue adaptée ;
- assistant d'orientation ;
- accès intelligents ;
- opérations commerciales ;
- contacts ;
- fournisseurs ;
- remontées terrain ;
- indicateurs de vie du portail ;
- correspondance avec les WebParts les plus proches ;
- lecture Power Apps.

### Préparation d'un oral POC

Rédaction d'une trame d'oral autour de la problématique suivante :

> Comment réduire le temps perdu à chercher les bons documents, outils et interlocuteurs, sans créer un nouvel outil métier ni refaire Pixel, Qlik ou le CRM ?

Intégration d'arguments externes :

- temps perdu à chercher l'information ;
- surcharge informationnelle ;
- besoin de trouvabilité ;
- rôle du portail comme couche d'orientation.

## Bilan du jour

Le projet est repositionné : si le livrable SharePoint complet est difficile à finaliser immédiatement, un POC de conception peut rester solide avec maquettes, cahier des charges, processus et oral structuré.

---

# Mardi 19 mai 2026

## Objectif du jour

Consolider les livrables, intégrer les vrais liens accessibles et préparer la suite.

## Travaux réalisés

### Définition des blocs CŒUR / P1 / P2 / P3

À partir des liens accessibles identifiés, les accès sont regroupés en quatre niveaux :

#### CŒUR

- CRM Dynamics ;
- Qlik Reporting ;
- Kezako ;
- Opérations commerciales.

#### P1 — Commerce

- GetPaid ;
- Merchandising ;
- Comptoirs Gagnants ;
- Gamme agence.

#### P2 — Cadre

- Sécurité Commerce ;
- Sécurité Logistique ;
- SuccessFactors ;
- Nouveau chef d'agence ;
- Règles d'Or.

#### P3 — Spécialisé

- Mercure ;
- Digital.

### Mise à jour des maquettes

Les maquettes sont mises à jour pour intégrer :

- les liens accessibles ;
- les niveaux CŒUR / P1 / P2 / P3 ;
- des onglets de navigation ;
- une logique plus proche d'un portail réellement exploitable ;
- la possibilité de transformer ces catégories en pages ou volets SharePoint.

### Notes de stage

Rédaction du journal de bord de la période afin de garder une trace claire de :

- ce qui a été produit ;
- ce qui a été testé ;
- ce qui a bloqué ;
- ce qui reste à valider ;
- la suite logique du projet.

## Bilan du jour

La période se termine avec une base plus structurée :

- un inventaire WebParts ;
- des maquettes ;
- un cahier des charges ;
- des processus ;
- un oral POC ;
- un référentiel de liens ;
- une V1 plus réaliste ;
- une maquette idéale pour ouvrir la réflexion.

---

# Livrables produits ou consolidés sur la période

- Inventaire complet des WebParts disponibles chez Rexel ;
- Mapping WebParts vers besoins du portail ;
- Maquette Lovable / version avancée ;
- Maquette V1 réaliste ;
- Maquette carte blanche hors contraintes SharePoint ;
- Cahier des charges du portail DRSE ;
- Processus et scénarios d'usage ;
- Référentiel des liens accessibles ;
- Notes pour un oral POC ;
- Premières bases GitHub ;
- Premières tentatives de construction SharePoint.

---

# Difficultés et limites rencontrées

## Limites SharePoint

- difficulté à reproduire les maquettes à l'identique ;
- WebParts parfois rigides ;
- rendu visuel limité ;
- confusion entre listes, bibliothèques, pages, vues et galeries ;
- sections flexibles moins libres qu'une maquette web.

## Accès et droits

- statut membre insuffisant sur certains aspects ;
- besoin probable d'un accès propriétaire pour tester toutes les fonctionnalités ;
- ciblage d'audience difficile à paramétrer sans droits adaptés.

## Disponibilités

- semaine du 8 mai écourtée ;
- Ascension le 14 mai ;
- pont du 15 mai ;
- interlocuteurs parfois indisponibles ;
- validations métier ralenties.

## Données métier

- certains liens restent à confirmer ;
- certains contenus réels ne sont pas encore accessibles ;
- difficulté à savoir quels documents sont effectivement mis à jour par les équipes métier ;
- risque de créer une maquette trop théorique si elle n'est pas branchée sur les vrais usages.

---

# Suite prévue et logique

## 1. Valider le périmètre V1

Faire valider par Luc Séquier et Nathalie Rozier :

- cible prioritaire : responsables d'agence ;
- structure CŒUR / P1 / P2 / P3 ;
- pages ou volets à créer ;
- niveau de détail attendu ;
- contenus à intégrer en priorité.

## 2. Obtenir les droits nécessaires

Demander ou confirmer l'accès propriétaire sur le site SharePoint afin de pouvoir tester :

- navigation ;
- ciblage d'audience ;
- WebParts avancés ;
- paramètres de pages ;
- listes et bibliothèques ;
- éventuelles connexions entre composants.

## 3. Construire une V1 SharePoint courte

Priorité de construction :

1. Accueil avec liens CŒUR ;
2. volet Commerce / P1 ;
3. volet Cadre / P2 ;
4. volet Spécialisé / P3 ;
5. boîte à questions ou formulaire simple ;
6. contacts utiles ;
7. page de cadrage discrète.

## 4. Tester avec des utilisateurs

Tests simples à prévoir :

- retrouver CRM ;
- retrouver Qlik ;
- retrouver une opération commerciale ;
- retrouver une information sécurité ;
- retrouver un contact ;
- poser une question ;
- identifier ce qui manque.

## 5. Décider du rôle de Power Apps

Power Apps pourrait être utile pour :

- assistant d'orientation ;
- formulaire de remontée terrain ;
- suivi de statut ;
- interface fournisseur simplifiée ;
- console de gestion des contenus.

À éviter :

- refaire Pixel ;
- refaire Qlik ;
- refaire le CRM ;
- créer un outil trop lourd.

## 6. Finaliser les livrables de conception

À consolider :

- cahier des charges ;
- journal de bord ;
- maquettes ;
- processus AS-IS / TO-BE ;
- mapping WebParts ;
- analyse des limites SharePoint ;
- support oral du POC.

## 7. Continuer la montée en compétence

Axes de formation :

- SharePoint moderne ;
- listes SharePoint ;
- WebParts ;
- ciblage d'audience ;
- Power Apps ;
- Power Automate ;
- Power BI / préparation PL-300.

---

# Conclusion de la période

Entre le 5 et le 19 mai 2026, l'avancement opérationnel sur SharePoint a été freiné par les contraintes techniques, les droits d'accès, les ponts et les disponibilités des interlocuteurs.

Cependant, la phase de conception a fortement progressé.

Le projet dispose désormais :

- d'un cadrage plus clair ;
- d'une cible utilisateur prioritaire ;
- de maquettes comparables ;
- d'un référentiel de liens réels ;
- de catégories fonctionnelles ;
- d'un cahier des charges ;
- de processus ;
- d'une trajectoire réaliste pour une V1.

La suite logique est de transformer cette base de conception en une première version SharePoint courte, centrée sur les responsables d'agence et limitée aux accès réellement utiles.

