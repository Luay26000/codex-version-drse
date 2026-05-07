# Tutoriel complet A-Z — Reproduire la maquette Portail Régional Sud-Est dans SharePoint / M365

Version : 06/05/2026  
Objectif : reconstruire dans SharePoint moderne la maquette React “Portail Régional Sud-Est”, en restant réaliste avec les WebParts disponibles chez Rexel, les limites connues de SharePoint, et le principe de portail régional unique avec contenus priorisés selon le profil.

Sources de cadrage :
- Maquette React / TypeScript corrigée : `south-east-hub-main-6-review/south-east-hub-main`
- Inventaire WebParts Rexel : `inventaire_complet_webparts_rexel.md`
- Retours utilisateurs, fiches de poste, organisation DRSE / Réseau
- Documentation Microsoft : ciblage d’audience, thème SharePoint, WebParts modernes

---

## 1. Résultat attendu

À la fin, tu dois obtenir un site SharePoint moderne avec :

- Une page d’accueil régionale.
- Des pages métier stables :
  - Accueil
  - Commerce & animations
  - Fournisseurs & fabricants
  - Onboarding & procédures
  - Expertises & contacts
  - Boîte à questions & bonnes idées
  - Mes accès & suivi
  - Indicateurs portail
- Un espace discret :
  - Cadrage & faisabilité
  - Mapping WebParts
  - Gouvernance & alimentation
  - V1 / V2 / hors périmètre
- Une navigation commune pour tous.
- Des contenus mis en avant différemment selon les profils.
- Des listes SharePoint qui alimentent les pages.
- Une logique claire : le portail oriente, il ne remplace pas Pixel, Qlik, CRM, Soon, Yoobic, Kezako ou Rexel GPT.

---

## 1.1 Solution révisée avec l’inventaire WebParts à jour

L’inventaire du 05/05/2026 change un point important : le WebPart **Tableau de bord** est bien le **Viva Connections Dashboard**, avec des cartes disponibles. Il doit donc devenir un composant structurant de la solution, surtout sur l’accueil et sur “Mes accès & suivi”.

Cartes réellement utilisables pour le Tableau de bord dans ton tenant :

| Carte Tableau de bord | Usage recommandé dans le portail DRSE |
|---|---|
| **Lien web** | Accès Pixel, Qlik, CRM, Yoobic, Pico — Variables commerciaux, Rexel GPT |
| **Quicklink / Liens rapides** | Collection de quelques liens si la carte Lien web devient trop répétitive |
| **Dossier** | Accès direct à une bibliothèque ou un dossier SharePoint : kits, PLV, modèles, procédures |
| **Événements** | Prochaines échéances régionales / opérations si les événements SharePoint sont alimentés |
| **Actualité principale / News** | Mettre en avant une actualité SharePoint existante ou boostée |
| **Power Apps** | Module custom : boîte à questions, fournisseurs filtrables, panneau d’actualités redirigées |
| **Viva Pulse** | Mini-feedback ponctuel : prise de température après opération ou sur un irritant |
| **Tâches assignées** | À garder pour Mes accès si Planner / To Do est réellement utilisé |
| **Approvals / Approbations** | Validation de supports / publications si Power Automate est utilisé |
| **Application Teams** | Ouvrir une app Teams disponible : Power BI, Support, News, Approvals selon intérêt |
| **OneDrive** | Accès fichiers personnels récents, utile surtout sur Mes accès |
| **Mes sites** | Sites SharePoint fréquents ou suivis |
| **Shifts** | À ignorer sauf usage terrain confirmé |

Nouvel arbitrage :

- **Accueil** : utiliser prioritairement **Tableau de bord** pour les accès structurés.
- **Mes accès & suivi** : utiliser **Tableau de bord**, **OneDrive**, **Mes sites**, **Tâches assignées**, **Lien web** et **Dossier**.
- **Actualités utiles** : si tu ne veux pas créer d’actualités locales et ne veux pas de Liens rapides, utiliser **Bouton d’action**, **Carte éditoriale**, **Focus**, **Tableau de bord / Lien web**, ou mieux **Power Apps**.
- **Boîte à questions** : utiliser **Boîte à idées** native ou **Power Apps**, pas forcément Microsoft Forms.
- **Onboarding** : utiliser **Soon via Lien web**, **Dossier** et **Modèles de documents**. Ne pas mettre Viva Learning si Soon est la vraie source.
- **Contacts** : utiliser **Contacts**, **Rôle des contacts**, **Trombinoscope**, et **Organigramme** selon la fiabilité des données M365.

WebParts à éviter ou garder en V2 :

- **Power BI** : seulement “selon accès” et jamais comme Qlik bis.
- **Viva Learning** : inutile ici si Soon est déjà la plateforme de formation.
- **Viva Insights** : hors sujet pour le portail régional, éventuellement simple lien dans Mes accès.
- **Mes mails** : plutôt dans “Mes accès”, pas sur l’accueil.
- **Budget du projet** : hors sujet.
- **Ordres de travail Field Service**, **Shifts**, intégrations tierces : uniquement si usage réel confirmé.

---

## 2. Limites importantes à accepter dès le départ

### 2.1 Le ciblage d’audience n’est pas une sécurité

Le ciblage d’audience SharePoint sert à prioriser ou masquer des contenus dans l’expérience utilisateur. Il peut s’appliquer notamment aux liens de navigation, pages, actualités, Liens rapides, Contenu mis en évidence et Événements.

Il ne remplace jamais les permissions SharePoint.

Conséquence :

- Ne jamais écrire “accès refusé”.
- Ne jamais présenter le sélecteur comme un système de droits.
- Les contenus sensibles doivent rester dans les outils sources ou dans des bibliothèques protégées par permissions.
- Le portail montre des accès, des liens, des extraits, des contacts, des statuts simples.

### 2.2 SharePoint ne reproduira pas exactement la maquette React

Ce qui sera différent :

- Pas de vrai sélecteur “Vue adaptée” comme dans React, sauf développement SPFx / PowerApps / Viva Connections.
- Le ciblage réel dépendra des groupes M365 / Entra ID.
- Les tuiles peuvent être ciblées, mais l’ordre dynamique parfait par profil reste limité.
- Les tableaux sont des listes SharePoint avec vues, tris, filtres, mise en forme éventuelle.
- Les “Mes favoris / Mes consultations” seront limités sans développement.
- Les badges et cartes très custom seront approximés avec WebParts SharePoint.

Ce qui doit être conservé :

- La logique fonctionnelle.
- La structure commune.
- Les pages métier.
- Le vocabulaire métier.
- Le principe “liens vers les bons outils”.
- La sobriété visuelle.

---

## 3. Choix du type de site

Créer un site SharePoint moderne de type :

**Site de communication**

Pourquoi :

- Plus adapté à un portail régional.
- Meilleure présentation des actualités, pages, liens et contenus éditoriaux.
- Pas orienté collaboration projet pure comme un site d’équipe.
- Plus proche d’un intranet régional.

Nom conseillé :

**Portail Régional Sud-Est**

URL conseillée :

`/sites/portail-regional-sud-est`

Titre court éventuellement visible dans l’en-tête :

**Portail Régional Sud-Est**

Éviter :

- “Nexus Régional” si le tuteur attend un nom métier clair.
- “Dashboard DRSE”.
- “Pixel régional”.

---

## 4. Préparation des groupes d’audience

Demander à l’IT / admin M365 la création ou l’identification de groupes de sécurité ou groupes M365.

Noms conseillés :

| Profil maquette | Groupe conseillé |
|---|---|
| Direction / COPIL DP | `AT_DRSE_DIR_COPIL` |
| Responsable d’agence | `AT_DRSE_RESP_AGENCE` |
| Commerce / RACOR | `AT_DRSE_COMMERCE_RACOR` |
| Assistantes de pôle | `AT_DRSE_ASSISTANTES` |
| Expertise / IAS | `AT_DRSE_EXPERTISE_IAS` |
| Utilisateur standard | `AT_DRSE_UTIL_STANDARD` |

La “Vue générale” n’a pas forcément besoin de groupe : ce sont les contenus non ciblés visibles par tous.

Règle :

- Un contenu commun reste sans audience.
- Un contenu prioritaire reçoit une ou plusieurs audiences.
- Un contenu sensible n’est pas protégé par l’audience : il reste dans l’outil source ou une bibliothèque à permissions.

---

## 5. Charte visuelle à appliquer

### 5.1 Palette

Utiliser une base proche Rexel :

| Usage | Couleur |
|---|---|
| Bleu foncé principal | `#0A287D` |
| Bleu secondaire | `#4487BD` |
| Fond clair | `#F5F7FA` |
| Bordures | `#E1E5EA` |
| Texte secondaire | `#5F6B7A` |
| Vert validation | `#009F8C` |
| Vert accent | `#00D7B1` |
| Orange attention | `#FF9D00` |
| Jaune alerte douce | `#FFDD00` |
| Pourpre accent rare | `#75007E` |
| Mauve accent rare | `#A75CCC` |

### 5.2 Application dans SharePoint

Chemin :

1. Ouvrir le site.
2. Cliquer sur la roue dentée.
3. Choisir **Modifier l’apparence** / **Change the look**.
4. Choisir **Thème**.
5. Si un thème Rexel existe, l’utiliser.
6. Sinon choisir un thème bleu ou cobalt comme base.
7. Personnaliser :
   - couleur principale : bleu foncé Rexel ;
   - couleur d’accent : bleu clair ou vert Joule ;
   - éviter un thème trop violet, beige ou sombre.
8. Enregistrer.

Limite :

- Le bouton et certains accents dépendent du thème SharePoint.
- Tu ne peux pas contrôler chaque couleur comme dans React sans thème tenant ou SPFx.

### 5.3 En-tête du site

Réglages conseillés :

- En-tête : compact ou standard.
- Fond : blanc ou bleu très foncé si la charte l’autorise.
- Logo : logo Rexel ou pictogramme portail régional si disponible.
- Nom visible : Portail Régional Sud-Est.
- Navigation : horizontale.

---

## 6. Architecture documentaire à créer

Créer les bibliothèques et listes avant les pages. C’est le squelette du portail.

### 6.1 Bibliothèques de documents

Créer ces bibliothèques :

1. `Supports Commerce`
2. `Modeles Documents`
3. `Procedures Modes Operatoires`
4. `Ressources Onboarding`
5. `Supports Fabricants`
6. `Images Portail`
7. `Documents Cadrage`

### 6.2 Listes SharePoint

Créer ces listes :

1. `DRSE - Outils et liens`
2. `DRSE - Operations commerciales`
3. `DRSE - Fournisseurs fabricants`
4. `DRSE - Infos fabricants`
5. `DRSE - Contacts et roles`
6. `DRSE - Qui contacter pour`
7. `DRSE - Fiches expertises`
8. `DRSE - Remontees terrain`
9. `DRSE - Evenements regionaux`
10. `DRSE - Indicateurs portail`
11. `DRSE - Alertes utiles`
12. `DRSE - Gouvernance contenus`

---

## 7. Colonnes à créer dans les listes

### 7.1 Liste `DRSE - Outils et liens`

Colonnes :

| Colonne | Type | Exemple |
|---|---|---|
| Titre | Texte | Pixel |
| Description | Texte multiligne | Intranet et contenus internes |
| URL | Lien hypertexte | lien Pixel |
| Catégorie | Choix | Outil, Commerce, Onboarding, Fournisseur, Contact, IA |
| Priorité | Nombre | 1 |
| Profil prioritaire | Personne/Groupe ou choix | Commerce / RACOR |
| Audience | Audience targeting si disponible | `AT_DRSE_COMMERCE_RACOR` |
| Actif | Oui/Non | Oui |

Contenus à créer :

- Pixel — Intranet et contenus internes
- Qlik — Pilotage chiffré
- CRM — Suivi commercial et relation client
- Soon — Parcours et contenus d’intégration
- Kezako — Ressources internes
- Yoobic — Suivi terrain et animations
- Rexel GPT — Assistance IA interne
- Pico — Variables commerciaux
- Calendrier opérations — service Grégoire
- Boîte à questions & bonnes idées

Point critique :

- Pico doit toujours être libellé **Pico — Variables commerciaux**.
- Ne jamais écrire “Pico — Recherche IA produits”.

### 7.2 Liste `DRSE - Operations commerciales`

Colonnes :

| Colonne | Type |
|---|---|
| Titre | Texte |
| Type opération | Choix : Opération régionale, Challenge, Animation fournisseur, Lancement produit, Promotion |
| Date début | Date |
| Date fin | Date |
| Statut | Choix : En cours, Planifiée, À venir, Terminée |
| Périmètre | Texte ou choix |
| Responsable | Personne ou texte |
| Lien kit | Lien |
| Lien source | Lien |
| Niveau de sensibilité | Choix : Public interne, Restreint outil source |
| Audience | Audience targeting |
| Ordre | Nombre |

Exemples :

- Printemps Énergie 2026
- Challenge réseau Éclairage
- Animation Schneider Electric
- Lancement gamme Hager Connect
- Promotion régionale câbles industriels

Règle :

- Ne pas mettre les conditions commerciales sensibles en clair.
- Ajouter un lien vers l’outil source si nécessaire.

### 7.3 Bibliothèque `Supports Commerce`

Colonnes :

| Colonne | Type |
|---|---|
| Nom | Nom fichier |
| Type support | Choix : Kit, PLV, Argumentaire, Fiche, Support fournisseur, Campagne |
| Opération liée | Recherche vers `DRSE - Operations commerciales` |
| Date de mise à jour | Date |
| Contact propriétaire | Personne |
| Audience | Audience targeting |
| Statut | Choix : Publié, À vérifier, Archivé |

Exemples :

- Kit commercial Printemps Énergie
- PLV éclairage industriel — A3
- Argumentaire Hager Connect
- Fiche pratique vente conseil
- Support Schneider Electric Q2

### 7.4 Liste `DRSE - Fournisseurs fabricants`

Colonnes :

| Colonne | Type |
|---|---|
| Titre | Texte : nom fournisseur |
| Code fournisseur | Texte |
| Famille produit | Choix |
| Contact fournisseur | Texte ou lien mail |
| Contact interne | Personne ou texte |
| Disponibilité | Choix : OK, Partielle, Rupture, À confirmer |
| Vigilance | Choix : Aucune, Faible, Moyenne, Forte |
| Commentaire court | Texte multiligne |
| Date de mise à jour | Date |
| Lien source | Lien |
| Audience | Audience targeting |
| Ordre Direction | Nombre |
| Ordre Agence | Nombre |
| Ordre Commerce | Nombre |
| Ordre Expertise | Nombre |

Exemples :

- Schneider Electric
- Legrand
- Hager
- Nexans
- ABB
- Philips Lighting

Règle :

- Pas de RFA, BFA, conditions commerciales confidentielles.
- Pas de notation fournisseur officielle.
- Si tu veux les étoiles : les mettre uniquement comme “ressenti terrain indicatif” en V2, avec prudence.

### 7.5 Liste `DRSE - Infos fabricants`

Colonnes :

| Colonne | Type |
|---|---|
| Titre | Texte |
| Fabricant | Recherche ou choix |
| Type info | Choix : Nouveauté, Lancement, Tension appro, À surveiller, Info |
| Message court | Texte multiligne |
| Date publication | Date |
| Lien source | Lien |
| Audience | Audience targeting |
| Statut | Choix : Publié, À vérifier, Archivé |

### 7.6 Liste `DRSE - Contacts et roles`

Colonnes :

| Colonne | Type |
|---|---|
| Nom | Personne ou texte |
| Initiales | Texte |
| Fonction | Texte |
| Pôle | Choix : Commerce, Expertise, Support, Direction, RH, IT |
| Canal recommandé | Choix : Mail, Teams, Ticket IT, Formulaire portail |
| Mail | Texte |
| Téléphone | Texte |
| Audience | Audience targeting |
| Ordre | Nombre |

Contacts exemples :

- Laurent Martin — Animation commerciale
- Sophie Bernard — Responsable ventes régionales
- Patrick Leroy — Responsable expertise DRSE
- Marc Dupont — Expert éclairage
- Claire Garcia — Calendrier opérations
- Thierry Blanc — Référent IT régional
- Émilie Rey — RH régionale

### 7.7 Liste `DRSE - Qui contacter pour`

Colonnes :

| Colonne | Type |
|---|---|
| Sujet | Texte |
| Contact / Pôle | Texte |
| Canal | Choix |
| Lien action | Lien |
| Audience | Audience targeting |
| Ordre | Nombre |

Exemples :

- Question opération commerciale → Pôle Commerce — L. Martin
- Support PLV ou kit → M. Dupont — animation
- Sujet fournisseur ou disponibilité → Pôle Expertise — P. Leroy
- Procédure / onboarding → Pôle Support — É. Rey
- Accès outil bloqué → Référent IT — T. Blanc
- Remontée terrain / idée → Boîte à questions & bonnes idées

### 7.8 Liste `DRSE - Fiches expertises`

Colonnes :

| Colonne | Type |
|---|---|
| Titre | Texte |
| Quand solliciter | Texte multiligne |
| Canal | Choix |
| Contact référent | Personne ou texte |
| Famille | Choix |
| Audience | Audience targeting |
| Ordre | Nombre |

Exemples :

- Éclairage
- Génie climatique
- Photovoltaïque
- IRVE
- Courant faible
- Digital / outils

### 7.9 Liste `DRSE - Remontees terrain`

Colonnes :

| Colonne | Type |
|---|---|
| Titre | Texte |
| Type remontée | Choix : Question, Bonne idée, Irritant terrain, Bonne pratique, Problème outil, Suggestion d’amélioration |
| Thème | Choix : Commerce, Fournisseurs, Outils, RH, Onboarding, IT, Autre |
| Description | Texte multiligne |
| Agence / service | Texte |
| Priorité | Choix : Faible, Normale, Élevée |
| Auteur | Personne |
| Responsable | Personne ou texte |
| Statut | Choix : Soumise, En analyse, Acceptée, En cours, Traitée, Refusée |
| Réponse / décision | Texte multiligne |
| Date | Date |
| Audience | Audience targeting |

Règle :

- Ce n’est pas un outil de ticketing.
- Les urgences doivent partir vers les outils ou circuits existants.

### 7.10 Liste `DRSE - Evenements regionaux`

Colonnes :

| Colonne | Type |
|---|---|
| Titre | Texte |
| Date début | Date |
| Date fin | Date |
| Lieu | Texte |
| Type | Choix : Réunion, Échéance, Webinaire, Comité, Point, Info |
| Lien | Lien |
| Audience | Audience targeting |

### 7.11 Liste `DRSE - Indicateurs portail`

Colonnes :

| Colonne | Type |
|---|---|
| Titre | Texte |
| Valeur | Texte |
| Catégorie | Choix : Usage, Contenu, Remontées, Maintenance |
| Période | Texte |
| Date mise à jour | Date |
| Commentaire | Texte |

Indicateurs autorisés :

- Visites portail
- Pages vues
- Utilisateurs actifs
- Outils ouverts depuis le portail
- Actualités publiées
- Supports ajoutés
- Liens vérifiés
- Remontées reçues
- Sujets traités
- Contenus anciens à revoir

Interdit :

- Chiffre d’affaires
- Marge
- Objectifs commerciaux détaillés
- Performance agence
- KPI Qlik recopiés

---

## 8. Créer les vues SharePoint

Créer plusieurs vues dans les listes importantes.

### 8.1 Fournisseurs

Vues :

- `Vue générale`
  - tri par Titre
- `Vigilances actives`
  - filtre : Vigilance = Moyenne ou Forte
  - tri : Vigilance descendante puis Date mise à jour descendante
- `Vue Direction`
  - tri par Ordre Direction
- `Vue Agence`
  - tri par Ordre Agence
- `Vue Commerce`
  - tri par Ordre Commerce
- `Vue Expertise`
  - tri par Ordre Expertise

### 8.2 Opérations commerciales

Vues :

- `En cours et à venir`
- `Vue calendrier`
- `Vue Commerce / RACOR`
- `Vue Responsable agence`
- `Archives`

### 8.3 Remontées terrain

Vues :

- `Toutes les remontées`
- `À analyser`
- `Irritants terrain`
- `Bonnes idées`
- `Mes remontées`
- `Synthèse Direction`

### 8.4 Contacts

Vues :

- `Tous les contacts`
- `Contacts commerce`
- `Contacts expertise`
- `Contacts support`
- `Contacts direction`
- `Qui contacter pour`

---

## 9. Navigation principale

La navigation doit rester stable pour tous.

Liens à créer dans la navigation haute :

1. Accueil
2. Commerce & animations
3. Fournisseurs & fabricants
4. Onboarding & procédures
5. Expertises & contacts
6. Boîte à questions & bonnes idées
7. Mes accès & suivi
8. Indicateurs portail

Créer ensuite un menu discret :

**Cadrage**

Sous-liens :

- Cadrage & faisabilité
- Mapping WebParts
- Gouvernance & alimentation
- V1 / V2 / hors périmètre

Si la navigation devient trop longue :

- Garder les 6 pages métier principales.
- Mettre `Mes accès & suivi`, `Indicateurs portail` et `Cadrage` en liens secondaires ou footer.

---

## 10. Ciblage d’audience dans SharePoint

### 10.1 Activer le ciblage sur la bibliothèque de pages

Chemin :

1. Aller dans **Contenu du site**.
2. Ouvrir **Pages du site** / **Site Pages**.
3. Cliquer sur paramètres de la bibliothèque.
4. Ouvrir **Paramètres de ciblage d’audience**.
5. Activer le ciblage.
6. Vérifier qu’une colonne Audience apparaît.

### 10.2 Activer le ciblage dans les WebParts

À activer selon les blocs :

- Actualités
- Liens rapides
- Événements
- Contenu mis en évidence
- Navigation

Dans chaque WebPart :

1. Modifier la page.
2. Modifier le WebPart.
3. Activer l’option de ciblage d’audience si disponible.
4. Définir les audiences sur les items ou contenus sources.
5. Republier la page.

### 10.3 Règles d’utilisation

Contenus sans audience :

- visibles par tous.

Contenus avec audience :

- mis en avant pour les groupes ciblés.

Ne pas créer six portails.

Le portail doit rester unique.

### 10.4 Utiliser les sections flexibles SharePoint

Point important : une page SharePoint moderne n’est pas forcément une pile verticale de WebParts. Tu peux composer une page comme un canvas, avec des sections et plusieurs WebParts sur la même ligne.

Dans la page :

1. Cliquer sur **Modifier**.
2. Cliquer sur le **+** entre deux zones.
3. Ajouter une **section**.
4. Choisir la disposition :
   - **Pleine largeur** pour une bannière ou un hero.
   - **Une colonne** pour un bloc très important.
   - **Deux colonnes** pour deux blocs de même poids.
   - **Trois colonnes** pour des cartes compactes.
   - **Un tiers à droite** pour un bloc principal à gauche et un rail d’infos à droite.
   - **Un tiers à gauche** si le rail doit guider avant le bloc principal.
   - **Section flexible** si Rexel l’affiche dans l’éditeur : tu peux ajuster plus librement la largeur des colonnes.
5. Ajouter les WebParts dans chaque colonne.
6. Régler les marges avec **Espacement**, **Séparateur avec titre** ou **Designer** si disponible.

Règle de conception :

- Le bloc principal va dans la zone large.
- Les infos courtes, alertes, CTA, agenda et contacts vont dans le rail.
- Éviter de mettre deux gros tableaux côte à côte.
- Sur mobile, les colonnes se mettent l’une sous l’autre : chaque WebPart doit rester compréhensible seul.

---

## 11. Page Accueil

Créer une page :

**Accueil**

Définir comme page d’accueil du site.

Plan de page recommandé en mode canvas SharePoint :

| Rangée | Disposition SharePoint | Zone principale | Rail / zone secondaire |
|---|---|---|---|
| 1 | Pleine largeur | Bannière principale | Aucun |
| 2 | Section flexible ou **un tiers à droite** | Tableau de bord régional | Focus régional + Lien web Rexel GPT / Mes sites |
| 3 | Section flexible ou **un tiers à droite** | Actualités régionales | Agenda régional |
| 4 | Section flexible ou **un tiers à droite** | Opération du moment | Tuiles prioritaires ciblées |
| 5 | Deux colonnes 50/50 | Alertes utiles | Mes raccourcis |

Raison : le portail est d’abord une porte d’entrée vers les bons outils, supports et contacts. Le Tableau de bord doit donc arriver immédiatement après la bannière, mais il ne doit pas forcément occuper toute la ligne. Le rail droit permet d’ajouter un Focus, un lien Rexel GPT, un agenda ou des accès personnels sans allonger la page.

### 11.1 Bandeau haut

WebPart :

- Bannière principale

Contenu :

- Eyebrow : Direction Régionale Sud-Est
- Titre : Portail Régional Sud-Est
- Texte : Vos accès, opérations, contacts et ressources régionales au même endroit.
- Message : Un point d’entrée régional pour retrouver rapidement les bons outils, les bons contenus et les bons interlocuteurs.
- Bouton 1 : Mes accès & suivi
- Bouton 2 : Voir les opérations en cours

Image :

- Utiliser une image sobre : agence / région / visuel corporate Rexel.
- Éviter image trop décorative.

### 11.2 Tableau de bord régional

WebPart :

- **Tableau de bord** en priorité.
- Carte **Lien web** pour les outils.
- Carte **Dossier** pour les bibliothèques de supports.
- Carte **Événements** pour les échéances si la source est alimentée.
- Carte **Actualité principale / News** pour une actu SharePoint importante.
- Carte **Power Apps** si un module custom existe.
- Carte **Viva Pulse** pour une prise de température courte.
- Carte **Approvals / Approbations** si un circuit de validation existe.
- Carte **Application Teams** pour ouvrir une app Teams utile.
- Carte **OneDrive**, **Mes sites** ou **Tâches assignées** surtout dans Mes accès.
- **Quicklink / Liens rapides** seulement si tu dois regrouper plusieurs liens dans une même carte.

Mode :

- Cartes Viva Connections Dashboard.
- 6 à 8 cartes maximum visibles au premier niveau.
- Éviter une mosaïque trop longue.

Position :

- Rangée 2 de l’accueil.
- Créer une section **un tiers à droite** ou une **section flexible**.
- Colonne large gauche : **Tableau de bord régional**.
- Colonne droite : **Focus régional**, **Lien web Rexel GPT**, **Mes sites** ou un petit bloc de contacts.

Important :

- Ce n’est pas un dashboard KPI.
- C’est un tableau d’accès vers les outils, ressources, dossiers, contacts et pages utiles.
- Dans SharePoint, c’est le composant le plus proche du panneau d’accès placé haut dans la maquette React.
- Ne pas prévoir de carte custom libre si elle n’apparaît pas dans ton tenant.
- Les contacts, organigrammes, trombinoscopes et rôles de contacts restent plutôt des WebParts de page, pas des cartes Dashboard.

Cartes recommandées :

| Carte | Type de carte | Usage |
|---|---|---|
| Pixel | Lien web | Accès intranet et contenus internes |
| Qlik | Lien web | Pilotage chiffré existant |
| CRM | Lien web | Suivi commercial |
| Yoobic | Lien web | Suivi terrain / animations |
| Pico — Variables commerciaux | Lien web | Accès variables commerciaux |
| Rexel GPT | Lien web | Assistance IA interne |
| Calendrier opérations | Événements si alimenté, sinon Lien web | Calendrier Grégoire |
| Supports Commerce | Dossier | Dossier SharePoint des supports |
| Fournisseurs en vigilance | Power Apps ou Lien web | Vue fournisseurs / vigilances |
| Qui contacter ? | Lien web | Page Expertises & contacts |
| Soon | Lien web | Onboarding / formation source Soon |
| Boîte à questions | Power Apps, Boîte à idées ou Lien web | Remontées terrain |
| Feedback opération | Viva Pulse | Sondage court après opération |
| Validation supports | Approbations | Circuit de publication si Power Automate existe |
| Actualité importante | News | Actualité principale SharePoint |

Cartes de base :

- Commerce & animations
- Calendrier opérations
- Fournisseurs & fabricants
- Infos fabricants
- Boîte à questions & bonnes idées
- Onboarding / Soon
- Expertises & contacts

Cartes ciblées par profil :

Direction :

- Qlik
- Calendrier régional
- Fournisseurs en vigilance
- Synthèse remontées
- Contacts clés

Responsable agence :

- Calendrier opérations
- Supports & PLV
- CRM
- Yoobic
- Fournisseurs
- Boîte à questions

Commerce / RACOR :

- Calendrier opérations
- Qlik
- CRM
- Yoobic
- Pico — Variables commerciaux
- Supports
- Argumentaires

Assistante :

- Modèles de documents
- Modes opératoires
- Soon
- Calendrier
- Kezako
- Contacts

Expertise / IAS :

- Fournisseurs
- Infos fabricants
- Contacts expertise
- CRM
- Supports techniques
- Rexel GPT

Utilisateur standard :

- Pixel
- CRM si pertinent
- Actualités
- Onboarding
- Contacts
- Boîte à questions
- Rexel GPT

Rail droit de la même rangée :

- WebPart **Focus** : priorité régionale ou message du moment.
- **Lien web** vers Rexel GPT ou WebPart **Agent link** si tu l’utilises hors Tableau de bord.
- Carte **Mes sites** si tu veux afficher des sites SharePoint utiles.
- WebPart **Contacts** : contact régional ou support clé.

### 11.3 Tuiles prioritaires / accès ciblés complémentaires

Rôle :

- Reprendre le bloc de tuiles colorées de la maquette React.
- Mettre en avant 4 à 6 priorités immédiates selon le profil.
- Ne pas remplacer le Tableau de bord : il reste le vrai panneau d’accès SharePoint.

Position :

- Rangée 4 de l’accueil.
- Dans la colonne droite de la section **un tiers à droite**.
- La colonne gauche contient l’**Opération du moment**.
- Les tuiles sont donc visibles sur la même ligne que l’opération, comme dans une composition canvas.

WebParts possibles :

- **Bouton d’action** pour des accès directs très visibles.
- **Carte éditoriale** pour une tuile avec titre, texte court et bouton.
- **Focus** pour une priorité unique.
- **Image Interactive** si tu veux une navigation visuelle en V2.
- **Designer** pour ajuster le rendu de section.
- **Liens rapides** seulement en secours si les autres composants ne suffisent pas.

Contenus à afficher :

- Pour Direction : Qlik, opérations régionales, fournisseurs en vigilance, synthèse remontées.
- Pour Responsable d’agence : calendrier opérations, supports PLV, fournisseurs, boîte à questions.
- Pour Commerce / RACOR : calendrier Grégoire, Qlik, CRM, Yoobic, Pico — Variables commerciaux.
- Pour Assistante : modèles, procédures, Soon, Kezako, contacts.
- Pour Expertise / IAS : fournisseurs, infos fabricants, contacts expertise, supports techniques.
- Pour Utilisateur standard : Pixel, onboarding, contacts, boîte à questions, Rexel GPT.

Arbitrage :

- Si SharePoint ne permet pas un rendu propre, tu peux supprimer ce bloc dans la version réelle.
- La maquette React le garde pour rendre la priorisation visible en démonstration.
- Dans SharePoint, le Tableau de bord suffit déjà à porter la majorité des accès prioritaires.

### 11.4 Actualités utiles à la région Sud-Est

WebPart :

- Actualités
- **Actualités avancé** si disponible.
- **Tableau de bord / carte Actualités** si tu veux l’intégrer dans le dashboard.
- **Power Apps** si tu veux un vrai panneau filtrable sans créer d’actualités locales.

Position :

- Rangée 3 de l’accueil.
- Colonne large gauche d’une section **un tiers à droite**.
- Colonne droite de la même rangée : **Agenda régional**.

Réglages :

- Source : ce site
- Nombre : 3 à 5
- Mise en page : cartes ou carrousel
- Activer ciblage d’audience

Arbitrage important :

- Si tu crées des actualités Sud-Est : utiliser **Actualités avancé**.
- Si tu veux seulement rediriger vers des actualités Rexel France existantes et futures : ne crée pas de pages d’actualité locales. Utilise plutôt **Bouton d’action**, **Carte éditoriale**, **Focus**, **Lien web dans le Tableau de bord**, ou une petite **Power Apps** de redirection/filtrage.
- Si tu ne veux pas utiliser **Liens rapides**, la meilleure alternative native est **Bouton d’action** ou **Tableau de bord / Lien web**.

Actualités types :

- Opération commerciale en cours
- Supports PLV disponibles
- Info fabricant importante
- Point de vigilance fournisseur
- Nouveau modèle de document
- Question fréquente traitée

### 11.5 Opération du moment

WebPart :

- Carte éditoriale
- ou Focus
- ou Bannière secondaire

Position :

- Rangée 4 de l’accueil.
- Colonne large gauche d’une section **un tiers à droite**.
- Colonne droite de la même rangée : **Tuiles prioritaires / accès ciblés complémentaires**.

Contenu :

- Printemps Énergie 2026
- Dates
- Périmètre
- Bouton vers page Commerce
- Bouton vers supports

Ne pas mettre :

- conditions commerciales sensibles ;
- chiffres confidentiels ;
- marges ;
- objectifs détaillés.

### 11.6 Agenda régional

WebPart :

- Événements

Position :

- Rangée 3 de l’accueil.
- Colonne droite de la section **Actualités + Agenda**.
- Garder le bloc court : 3 à 4 événements maximum.

Source :

- liste `DRSE - Evenements regionaux`

Comment alimenter les événements :

1. Ouvrir la page où tu veux gérer l’agenda, par exemple **Commerce & animations** ou **Accueil**.
2. Ajouter le WebPart **Événements**.
3. Cliquer sur **Ajouter un événement**.
4. Renseigner :
   - titre ;
   - date ;
   - heure ;
   - lieu ou lien Teams ;
   - catégorie ;
   - description courte ;
   - image si utile.
5. SharePoint crée ou utilise une liste d’événements derrière le WebPart.
6. Dans la carte **Événements** du Tableau de bord, choisir la source :
   - événements de ce site ;
   - liste d’événements de ce site ;
   - sites sélectionnés ;
   - hub si disponible.
7. Régler la période :
   - prochains événements ;
   - cette semaine ;
   - ce mois ;
   - ce trimestre.
8. Limiter l’affichage à 3 ou 4 événements sur l’accueil.

Attention :

- Si le vrai calendrier de Grégoire est ailleurs et que tu ne peux pas l’alimenter dans SharePoint, ne force pas.
- Dans ce cas, mets une carte **Lien web** dans le Tableau de bord : “Calendrier Grégoire”.
- Garde le WebPart **Événements** seulement pour quelques échéances régionales que tu peux maintenir.
- Les événements récurrents sont souvent mal gérés : créer une ligne par occurrence importante.

Réglages :

- 4 prochains événements
- ciblage activé

### 11.7 Alertes utiles

WebPart :

- Liste SharePoint
- vue filtrée `Alertes actives`

Position :

- Rangée 5 de l’accueil.
- Section **deux colonnes 50/50**.
- Colonne gauche : **Alertes utiles**.
- Colonne droite : **Mes raccourcis**.

Exemples :

- Tension appro câbles HT — Nexans
- Support PLV mis à jour
- Échéance animation fournisseurs proche

### 11.8 Mes raccourcis

WebParts possibles :

- OneDrive
- Mes sites
- Tâches assignées
- Enregistré pour plus tard
- Tableau de bord en petit format si disponible
- Lien web
- Dossier

Position :

- Rangée 5 de l’accueil.
- Colonne droite de la section **deux colonnes 50/50**.

Contenu recommandé :

- Pixel
- Qlik
- Kit commercial du moment
- Suivi de mes remontées
- Contacts fréquents
- Documents récents

---

## 12. Page Commerce & animations

Créer page :

**Commerce & animations**

### 12.1 Bandeau

WebPart :

- Bannière principale

Titre :

Commerce & animations

Sous-titre :

Retrouvez les opérations régionales, kits commerciaux, supports et échéances utiles.

Boutons :

- Voir le calendrier opérations
- Accéder aux supports

### 12.2 Message de prudence

WebPart :

- Message d’information

Texte :

Cette page centralise les accès, supports et échéances. Les informations commerciales sensibles restent dans les outils sources.

### 12.3 Opération du moment

WebPart :

- Carte éditoriale
- Focus

Contenu :

- Titre opération
- Dates
- Périmètre
- Cible générale
- Bouton vers kit
- Bouton vers outil source

### 12.4 Calendrier opérations — service Grégoire

WebPart :

- Bouton d’action
- ou Lien

Texte :

Accéder au calendrier opérations

Lien :

- calendrier SharePoint / Outlook / fichier source / outil utilisé par le service de Grégoire

### 12.5 Planning opérations commerciales

WebPart :

- Liste SharePoint

Liste :

- `DRSE - Operations commerciales`

Vue :

- `En cours et à venir`

Colonnes visibles :

- Titre
- Type opération
- Date début
- Date fin
- Statut
- Périmètre
- Responsable
- Kit

### 12.6 Supports commerciaux et PLV

WebPart :

- Bibliothèque de documents

Bibliothèque :

- `Supports Commerce`

Vue :

- supports publiés

Colonnes visibles :

- Nom
- Type support
- Date de mise à jour
- Opération liée

### 12.7 Contacts commerce

WebPart :

- Contacts
- ou Rôle des contacts

Contacts :

- Laurent Martin
- Sophie Bernard
- Marc Dupont
- Claire Garcia

### 12.8 Accès associés

WebPart :

- Tableau de bord en petit format si possible.
- Cartes **Lien web** pour Qlik, CRM, Yoobic, Pico.
- Carte **Dossier** pour les supports commerce.
- Carte **Événements** pour le calendrier opérations.
- Carte **Approbations** si un circuit de validation des supports est mis en place.
- Carte **Viva Pulse** seulement pour un feedback court après une opération.
- Bouton d’action si tu veux un rendu plus simple.

Liens :

- Qlik
- CRM
- Yoobic
- Calendrier opérations
- Supports PLV
- Argumentaires
- Pico — Variables commerciaux

---

## 13. Page Fournisseurs & fabricants

Créer page :

**Fournisseurs & fabricants**

### 13.1 Bandeau

Titre :

Fournisseurs & fabricants

Sous-titre :

Une vue régionale simplifiée pour identifier les interlocuteurs, les informations utiles et les vigilances éventuelles.

### 13.2 Message de cadrage

WebPart :

- Message d’information

Texte :

Cette page ne remplace pas les référentiels fournisseurs officiels. Les informations détaillées et sensibles restent dans les outils sources.

### 13.3 Recherche & filtres

WebParts :

- Barre de recherche
- Filtre de recherche si disponible

Filtres à proposer :

- Famille produit
- Disponibilité
- Vigilance
- Contact interne

Si les filtres dynamiques ne fonctionnent pas bien :

- créer plusieurs vues de liste ;
- afficher un bloc “Vues rapides” avec liens vers ces vues.

### 13.4 Annuaire fournisseurs régionaux

WebPart :

- Liste SharePoint

Liste :

- `DRSE - Fournisseurs fabricants`

Vue :

- Vue générale ou vue ciblée selon page / audience

Colonnes :

- Fournisseur
- Code
- Famille
- Contact fournisseur
- Contact interne
- Disponibilité
- Vigilance
- Commentaire
- Mise à jour
- Source

Mise en forme conseillée :

- Statut OK en vert.
- Partielle en orange.
- Rupture en rouge.
- Vigilance forte en rouge.
- Vigilance moyenne en orange.

### 13.5 Vigilances actives

WebPart :

- Liste SharePoint

Vue :

- `Vigilances actives`

Filtre :

- Vigilance = Moyenne ou Forte

### 13.6 Contact expert

WebPart :

- Contacts

Contacts :

- Sophie Bernard
- Patrick Leroy
- Claire Garcia

### 13.7 Infos fabricants utiles

WebPart :

- Liste SharePoint
- ou Contenu mis en évidence
- ou Carte éditoriale / Focus pour une info fabricant prioritaire
- ou Power Apps si tu veux une interface filtrable propre

Liste :

- `DRSE - Infos fabricants`

Cartes :

- Schneider Electric — Nouvelle gamme PowerLogic
- Hager — Hager Connect
- Nexans — tension appro
- Legrand — délais Mosaic
- ABB — variateurs

### 13.8 Tendance fournisseur

WebPart :

- Indicateur
- ou Liste mise en forme

Important :

- Appeler cela “Tendance fournisseur”.
- Ne pas appeler cela “notation fournisseur”.
- Mentionner : lecture régionale synthétique, pas scoring contractuel.

### 13.9 Retour terrain fournisseur

À mettre en V2 seulement.

Si tu le montres :

- utiliser “ressenti indicatif”
- pas de score officiel
- pas de RFA/BFA
- pas de conditions commerciales
- pas de décision fournisseur automatisée

---

## 14. Page Onboarding & procédures

Créer page :

**Onboarding & procédures**

### 14.1 Bandeau

Titre :

Onboarding & procédures

Sous-titre :

Les repères essentiels pour démarrer, accompagner et retrouver les modes opératoires utiles.

### 14.2 Carte Soon

WebPart :

- Carte éditoriale
- Bannière
- Bouton d’action
- Lien web vers Soon
- Dossier ou bibliothèque de documents si tu as des supports d’intégration
- Carte **Lien web** vers Soon dans le Tableau de bord

Contenu :

- Soon
- Parcours et contenus d’intégration officiels Rexel.
- Bouton : Accéder à Soon
- Bouton : Voir les modules recommandés

Message :

Le portail régional n’est pas un LMS. Il oriente vers Soon pour les parcours et formations.

Arbitrage :

- Ne pas utiliser Viva Learning si l’entreprise utilise déjà Soon comme plateforme officielle.
- Viva Learning ajouterait une porte d’entrée de plus sans résoudre le problème principal.

### 14.3 Parcours onboarding 30 jours

WebPart :

- Liste SharePoint

Liste :

- `DRSE - Onboarding 30 jours` si tu la crées
- sinon section texte/liste simple

Colonnes :

- Période
- Ordre
- Étape
- Pilote
- Responsable
- Statut
- Public

Étapes :

- Avant arrivée
- J1
- J2-J3
- Semaine 1
- Semaine 2
- Semaine 3-4
- J30

### 14.4 Modes opératoires essentiels

WebPart :

- Liens rapides

Liens :

- Créer une demande client
- Accéder à une procédure régionale
- Retrouver un support commerce
- Contacter le bon interlocuteur
- Utiliser un outil régional
- Remonter une information terrain

### 14.5 Modèles de documents

WebPart :

- Modèles de documents
- ou Bibliothèque de documents

Bibliothèque :

- `Modeles Documents`

Exemples :

- Modèle compte rendu réunion
- Trame suivi action commerciale
- Modèle support agence mensuel
- Trame visite client
- Reporting opération
- Plan d’action 30 jours

### 14.6 Formations & ressources Soon

WebPart :

- Bouton d’action
- Carte éditoriale
- Dossier
- Lien web

Liens :

- Soon — Parcours nouveau collaborateur
- Soon — Outils commerce
- Soon — Ressources managers / agences si disponible

### 14.7 Nouveaux arrivants

WebPart :

- Nouveaux arrivants

À utiliser seulement si les données RH M365 sont fiables et si c’est validé.

Sinon :

- ne pas afficher ce bloc.

---

## 15. Page Expertises & contacts

Créer page :

**Expertises & contacts**

### 15.1 Bandeau

Titre :

Expertises & contacts

Sous-titre :

Identifiez rapidement les bons interlocuteurs régionaux.

### 15.2 Recherche contact / expertise

WebPart :

- Barre de recherche
- Contacts
- Trombinoscope
- Rôle des contacts
- Power Apps si tu veux un moteur “qui contacter ?” plus propre

Si possible :

- connecter à l’annuaire ou au trombinoscope.

Sinon :

- simple champ de recherche de liste.

### 15.3 Contacts par pôle fonctionnel

WebPart :

- Contacts
- Rôle des contacts
- Trombinoscope

Groupes à afficher :

- Pôle Commerce
- Pôle Expertise
- Pôle Support

### 15.4 Qui contacter pour ?

WebPart :

- Liste SharePoint

Liste :

- `DRSE - Qui contacter pour`

Colonnes :

- Sujet
- Contact / Pôle
- Canal
- Action

C’est un bloc central du portail.

### 15.5 Organigramme régional

WebPart :

- Organigramme
- Organigramme 2e version si le rendu est meilleur

Règle :

- Vue synthétique seulement.
- Ne pas chercher à reproduire toute l’organisation.
- Si les données M365 ne sont pas fiables, utiliser Trombinoscope ou Liste.

Structure simple :

- Direction Régionale Sud-Est
- Pôle Commerce
- Pôle Expertise
- Pôle Support

Ou, si tu veux coller davantage au terrain :

- Direction Régionale Sud-Est
- Gard – Vallée du Rhône
- Provence
- Côte d’Azur
- Languedoc-Roussillon
- Rhône
- Auvergne
- Alpes Savoie
- Loire / Haute-Loire / Lozère

Mais attention : cela peut devenir lourd visuellement.

### 15.6 Fiches expertises

WebPart :

- Liste SharePoint

Liste :

- `DRSE - Fiches expertises`

Fiches :

- Éclairage
- Génie climatique
- Photovoltaïque
- IRVE
- Courant faible
- Digital / outils

---

## 16. Page Boîte à questions & bonnes idées

Créer page :

**Boîte à questions & bonnes idées**

### 16.1 Bandeau

Titre :

Boîte à questions & bonnes idées

Sous-titre :

Un espace simple pour poser une question, partager une idée ou remonter un irritant terrain.

### 16.2 Trois entrées principales

WebParts :

- Bouton d’action
- Carte éditoriale
- Liens rapides

Entrées :

1. Poser une question
2. Partager une bonne idée
3. Remonter un irritant

### 16.3 Formulaire

Option 1 :

- Boîte à idées native SharePoint

Option 2 :

- Microsoft Forms

Option 3 :

- Power Apps

Option 4 :

- Liste SharePoint avec formulaire personnalisé simple

Champs :

- Type de remontée
- Thème
- Titre
- Description
- Agence / service concerné
- Priorité
- Auteur
- Pièce jointe / lien

### 16.4 Suivi des remontées

WebPart :

- Liste SharePoint

Liste :

- `DRSE - Remontees terrain`

Vue :

- `Toutes les remontées`
- ou `Remontées visibles`

Colonnes :

- Titre
- Type
- Thème
- Statut
- Responsable
- Date
- Réponse / décision

### 16.5 Indicateurs simples

WebPart :

- Indicateur

Indicateurs :

- Remontées reçues ce mois
- Remontées traitées
- Sujets en cours

### 16.6 Sondage rapide

WebPart :

- Sondage

Question exemple :

Quel sujet souhaitez-vous voir traité en priorité dans la prochaine version du portail ?

Options :

- Améliorer la recherche fournisseur
- Ajouter un suivi onboarding personnalisé
- Améliorer les accès commerce
- Notifications Teams intégrées

### 16.7 Viva Engage

WebPart :

- Conversations
- Mur de réseaux sociaux

À utiliser seulement si une communauté Viva Engage existe.

Sinon :

- remplacer par des liens vers Teams / communauté existante.

---

## 17. Page Mes accès & suivi

Créer page :

**Mes accès & suivi**

### 17.1 Limite importante

Dans SharePoint standard, cette page ne pourra pas reproduire parfaitement :

- favoris personnels custom ;
- dernières consultations de la maquette React ;
- notifications personnalisées ;
- échéances totalement adaptées sans développement.

Approche réaliste :

- utiliser des WebParts M365 personnalisés quand disponibles ;
- compléter avec des cartes **Lien web**, **Dossier**, **OneDrive**, **Mes sites** et **Tâches assignées**.

### 17.2 Mes outils fréquents

WebPart :

- Tableau de bord
- OneDrive
- Mes sites
- Mon Résumé
- Mes documents
- Documents récents
- Mes réunions
- Tâches assignées
- Enregistré pour plus tard
- Lien web seulement en secours

Liens ciblés :

Direction :

- Qlik
- Opérations régionales
- Fournisseurs en vigilance
- Synthèse remontées

Responsable agence :

- Calendrier opérations
- Supports commerciaux
- Boîte à questions
- Fournisseurs
- CRM
- Yoobic

Commerce :

- Qlik
- CRM
- Yoobic
- Pico — Variables commerciaux
- Supports commerciaux
- Calendrier Grégoire

Assistante :

- Modèles
- Procédures
- Soon
- Calendrier
- Contacts
- Pixel

Expertise :

- Fournisseurs
- Infos fabricants
- Contacts expertise
- Supports techniques
- CRM
- Rexel GPT

Standard :

- Pixel
- Actualités
- Onboarding
- Contacts
- Boîte à questions

### 17.3 Mes documents / documents récents

WebParts disponibles :

- Mes documents
- Documents récents
- Enregistré pour plus tard

À utiliser si autorisé.

### 17.4 Mes réunions / tâches / mails

WebParts disponibles :

- Mes mails
- Mes réunions
- Mes tâches

À utiliser avec prudence.

Conseil :

- Pour une V1, éviter Mes mails sur le portail régional si ça surcharge.
- Pour démontrer que le mail reste central, tu peux mettre un petit bloc “Mes réunions” ou “Mes tâches” seulement dans Mes accès.

### 17.5 Suggestions pour vous

WebPart :

- Recommandations
- Liens rapides ciblés

Créer des liens ciblés selon audience.

---

## 18. Page Indicateurs portail

Créer page :

**Indicateurs portail**

### 18.1 Bandeau

Titre :

Indicateurs portail

Sous-titre :

Suivi d’usage et de fraîcheur des contenus du portail régional. Cette page ne reflète pas la performance commerciale.

### 18.2 Message de cadrage

WebPart :

- Message d’information

Texte :

Ces indicateurs portent uniquement sur la vie du portail : usage, contenus, remontées, maintenance éditoriale. Les indicateurs commerciaux restent dans Qlik et le reporting Power BI — selon accès.

### 18.3 Activité du portail

WebPart :

- Indicateur
- ou Graphique rapide
- Activité du site

Indicateurs :

- Visites du portail
- Pages vues
- Utilisateurs actifs
- Outils ouverts depuis le portail

Échelle réaliste :

- environ 150 utilisateurs potentiels.

Ne pas afficher 600 utilisateurs actifs si le périmètre réel est 150.

### 18.4 Pages les plus consultées

WebPart :

- Graphique rapide
- ou Liste
- Activité du site si le WebPart fournit déjà les données utiles

Pages :

- Accueil
- Commerce & animations
- Fournisseurs & fabricants
- Onboarding & procédures
- Boîte à questions & bonnes idées
- Expertises & contacts

### 18.5 Contenus publiés

Indicateurs :

- Actualités publiées
- Supports ajoutés
- Liens vérifiés
- Contenus archivés

### 18.6 Remontées terrain

Indicateurs :

- Questions reçues
- Bonnes idées partagées
- Irritants signalés
- Sujets traités

### 18.7 Alertes maintenance éditoriale

WebPart :

- Liste SharePoint

Exemples :

- 3 liens externes inaccessibles
- 5 contenus non mis à jour depuis 6 mois
- 2 pages avec faible consultation

---

## 19. Pages Cadrage / Administration

Ces pages ne doivent pas polluer le métier.

Créer une page :

**Cadrage & faisabilité**

Contenu :

- Objectif du portail
- Ce que le portail est
- Ce que le portail n’est pas
- Limites SharePoint
- Logique de ciblage
- V1 / V2

Créer une page :

**Mapping WebParts**

Contenu :

Tableau :

| Besoin | WebPart SharePoint | Limite |
|---|---|---|
| Tuiles outils | Tableau de bord / Lien web | Tester le ciblage des cartes dans le tenant |
| Actualités | Actualités avancé / Actualités / Tableau de bord Actualités | Dépend de la source et de la publication |
| Opérations | Liste / Événements | Pas de données sensibles |
| Fournisseurs | Liste SharePoint | Pas référentiel complet |
| Boîte à idées | Boîte à idées / Forms / Power Apps | Pas ticketing |
| Onboarding | Soon / Lien web / Dossier / Modèles de documents | Pas LMS |
| Contacts | Contacts / Rôle des contacts / Trombinoscope | Données M365 à vérifier |
| Organigramme | Organigramme | Fiabilité annuaire |
| Indicateurs | Activité du site / Indicateur / Graphique rapide | Pas Qlik bis |
| Accès applications | Tableau de bord / Lien web / Mes sites / Application Teams | Dépend des apps réellement disponibles |
| Automatisations | Approbations / Power Automate | Gouvernance nécessaire |
| Module custom | Power Apps | Licence et maintenance |

Créer une page :

**Gouvernance & alimentation**

Contenu :

- Qui publie quoi
- Fréquence de mise à jour
- Circuit de validation
- Archivage
- Règles de nommage
- Responsables par rubrique

Créer une page :

**V1 / V2 / hors périmètre**

Contenu :

V1 :

- Accueil
- Commerce
- Fournisseurs simple
- Boîte à questions
- Onboarding simple
- Contacts

V2 :

- Mes accès avancés
- Viva Engage
- PowerApps
- Power Automate
- Dashboard Power BI selon accès
- Notation / ressenti fournisseur cadré

Hors périmètre :

- Remplacer Pixel
- Remplacer Qlik
- Remplacer CRM
- Remplacer Soon
- Créer un ticketing
- Créer un référentiel fournisseur complet

---

## 20. Ordre exact de construction

### Jour 1 — Fondation

1. Créer le site de communication.
2. Appliquer thème / logo / en-tête.
3. Créer les groupes d’audience ou demander leur création.
4. Créer les bibliothèques de documents.
5. Créer les listes SharePoint.
6. Créer les colonnes.
7. Créer les vues principales.

### Jour 2 — Pages métier prioritaires

1. Créer Accueil.
2. Créer Commerce & animations.
3. Créer Fournisseurs & fabricants.
4. Créer Boîte à questions & bonnes idées.

### Jour 3 — Pages support

1. Créer Onboarding & procédures.
2. Créer Expertises & contacts.
3. Créer Mes accès & suivi.
4. Créer Indicateurs portail.

### Jour 4 — Cadrage / gouvernance

1. Créer les pages admin.
2. Ajouter le mapping WebParts.
3. Ajouter la gouvernance.
4. Ajouter V1 / V2 / hors périmètre.

### Jour 5 — Ciblage et recette

1. Activer le ciblage sur pages, actualités, événements, liens rapides.
2. Rattacher les audiences aux contenus.
3. Tester avec chaque groupe.
4. Corriger l’ordre des liens et vues.
5. Publier.

---

## 21. Recette par profil

### Direction / COPIL DP

Doit voir en priorité :

- Qlik
- opérations régionales
- fournisseurs en vigilance
- synthèse remontées
- contacts clés
- indicateurs de vie du portail

### Responsable d’agence

Doit voir en priorité :

- calendrier opérations
- opération du moment
- supports PLV
- CRM
- Yoobic
- fournisseurs
- boîte à questions
- bonnes idées terrain

### Commerce / RACOR

Doit voir en priorité :

- calendrier Grégoire
- Qlik
- CRM
- Yoobic
- Pico — Variables commerciaux
- supports à publier
- argumentaires
- remontées commerce

### Assistante de pôle

Doit voir en priorité :

- modèles de documents
- modes opératoires
- Soon
- Kezako
- calendrier
- contacts utiles
- questions procédures

### Expertise / IAS

Doit voir en priorité :

- fournisseurs
- infos fabricants
- contacts expertise
- fiches expertise
- supports techniques
- CRM si pertinent
- Rexel GPT

### Utilisateur standard

Doit voir en priorité :

- Pixel
- actualités
- calendrier visible
- onboarding
- contacts
- boîte à questions
- Rexel GPT

---

## 22. Règles éditoriales

### À faire

- Titres courts.
- Cartes et listes simples.
- Liens vers les sources.
- Dates de mise à jour visibles.
- Contacts clairs.
- Statuts simples.
- Pages métier sobres.

### À éviter

- Longs paragraphes.
- Jargon SharePoint sur les pages métier.
- “Audience targeting”, “Entra ID”, “permissions” dans les pages métier.
- KPI commerciaux.
- Informations confidentielles fournisseur.
- Promesse de workflow ou ticketing.
- “Pixel bis”.
- Trop de WebParts sur la même page.

---

## 23. Règles de nommage

Pages :

- `Accueil`
- `Commerce & animations`
- `Fournisseurs & fabricants`
- `Onboarding & procédures`
- `Expertises & contacts`
- `Boîte à questions & bonnes idées`
- `Mes accès & suivi`
- `Indicateurs portail`

Listes :

- préfixer par `DRSE -`

Documents :

Format conseillé :

`AAAA-MM - Rubrique - Nom du support - v1`

Exemple :

`2026-05 - Commerce - Kit Printemps Energie - v1.pdf`

---

## 24. Gouvernance d’alimentation

### Commerce

Responsable :

- RACOR / animation commerciale

Fréquence :

- hebdomadaire pendant opérations
- mensuelle hors période forte

Contenus :

- opérations
- supports
- calendrier
- liens source

### Fournisseurs

Responsable :

- expertise / commerce selon organisation

Fréquence :

- toutes les 2 semaines
- immédiat si vigilance forte

Contenus :

- disponibilité simple
- vigilance
- info fabricant
- contact

### Onboarding

Responsable :

- RH / assistantes / managers

Fréquence :

- mensuelle
- à chaque évolution de procédure

### Contacts

Responsable :

- support régional / direction / assistantes

Fréquence :

- mensuelle

### Boîte à questions

Responsable :

- propriétaire portail + relais métier

Fréquence :

- revue hebdomadaire

Statuts :

- Soumise
- En analyse
- Acceptée
- En cours
- Traitée
- Refusée

---

## 25. Check-list avant ouverture COPIL DP

Avant de montrer au COPIL :

- Le site s’ouvre correctement.
- La navigation est stable.
- Les pages ne sont pas vides.
- Les liens principaux fonctionnent.
- Les listes ont au moins 5 à 10 lignes de démonstration.
- Les contacts sont crédibles.
- Les données sensibles sont absentes.
- Qlik reste la source du pilotage.
- Pixel reste la source intranet.
- Pico est bien “Pico — Variables commerciaux”.
- La boîte à questions est claire.
- Le calendrier opérations est visible.
- Les fournisseurs ont statuts et dates.
- Les pages admin sont discrètes.
- Le ciblage est activé sur les contenus nécessaires.
- Les audiences sont testées.

---

## 26. Plan d’ouverture

### Phase 1 — COPIL DP

Public :

- Direction
- Directeurs de pôle
- quelques relais commerce / expertise

Objectif :

- valider structure
- valider rubriques
- valider gouvernance
- valider niveau d’information

Durée :

- 2 à 4 semaines

### Phase 2 — responsables d’agence

Objectif :

- tester commerce
- tester boîte à questions
- tester fournisseurs
- vérifier contacts

### Phase 3 — élargissement

Public :

- utilisateurs standards
- assistantes
- expertise
- commerce élargi

---

## 27. Sources Microsoft utiles

- Ciblage d’audience SharePoint : https://support.microsoft.com/en-us/office/target-content-to-a-specific-audience-on-a-sharepoint-site-68113d1b-be99-4d4c-a61c-73b087f48a81
- Modifier l’apparence d’un site SharePoint : https://support.microsoft.com/en-us/office/change-the-look-of-your-sharepoint-site-06bbadc3-6b04-4a60-9d14-894f6a170818
- Thèmes SharePoint modernes : https://learn.microsoft.com/en-us/sharepoint/dev/declarative-customization/site-theming/sharepoint-site-theming-overview

---

## 28. Version finale recommandée pour ton discours

## 28.1 Architecture finale recommandée après inventaire à jour

Version la plus réaliste avec les WebParts Rexel disponibles :

| Zone | Choix prioritaire | Secours |
|---|---|---|
| Hero accueil | Bannière principale | Bannière / Focus |
| Rangée 2 gauche | Tableau de bord | Bouton d’action si le composant est limité |
| Rangée 2 droite | Focus + Lien web Rexel GPT + Mes sites | Contacts / Message d’information |
| Rangée 3 gauche | Actualités avancé si source maîtrisée | Bouton d’action, Focus, Tableau de bord Lien web, Power Apps |
| Rangée 3 droite | Événements | Calendrier de groupe |
| Rangée 4 gauche | Carte éditoriale | Focus |
| Rangée 4 droite | Bouton d’action / Carte éditoriale / Focus | Liens rapides seulement si imposé |
| Rangée 5 50/50 | Alertes utiles + Mes raccourcis | Liste + OneDrive / Mes sites |
| Supports commerce | Bibliothèque de documents / Dossier dans Tableau de bord | Documents |
| Fournisseurs | Liste SharePoint | Power Apps si besoin d’UX filtrable |
| Infos fabricants | Liste / Contenu mis en évidence / Focus | Carte éditoriale |
| Boîte à questions | Boîte à idées native | Forms / Power Apps |
| Contacts | Contacts + Rôle des contacts | Trombinoscope |
| Organigramme | Organigramme | Trombinoscope ou Liste |
| Onboarding | Soon via Lien web + Modèles de documents + Dossier | Bouton d’action / Bibliothèque |
| Mes accès | Tableau de bord + OneDrive + Mes sites + Tâches assignées + Dossier | Lien web |
| Indicateurs portail | Activité du site + Indicateur + Graphique rapide | Power BI selon accès, V2 |
| IA | Lien web Rexel GPT | Agent link si disponible hors Dashboard |

Décision clé :

- Le **Tableau de bord** est maintenant le meilleur candidat pour la zone d’accès centrale.
- **Power Apps** est à réserver aux modules où les WebParts natives deviennent pénibles : actualités filtrables, fournisseurs, boîte à questions, qui contacter.
- **Power Automate** intervient derrière : notifications, statuts, validations, relances, archivage.
- **Liens rapides** n’est plus obligatoire dans la solution ; il reste seulement un plan B.

Phrase simple :

“Le portail régional n’ajoute pas un nouvel outil métier. Il sert de point d’entrée régional pour rendre l’information plus lisible, retrouver les bons liens, les bons supports, les bons contacts et stabiliser ce qui circule aujourd’hui par mail, Teams ou dossiers dispersés.”

Phrase sur le ciblage :

“Le ciblage ne crée pas plusieurs portails. Il garde une structure commune, mais met en avant les contenus les plus utiles selon le profil.”

Phrase sur les limites :

“Les outils sources restent les outils sources : Qlik pour le pilotage, CRM pour la relation client, Soon pour la formation, Pixel pour l’intranet corporate. Le portail sert à orienter, pas à remplacer.”
