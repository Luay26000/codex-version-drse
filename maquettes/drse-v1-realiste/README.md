# Maquette V1 realiste - Portail Regional Sud-Est

Cette maquette est volontairement plus simple que la V2 cible.

Elle sert a visualiser une premiere version realiste du portail SharePoint, en tenant compte des retours de Luc Sequier :

- faire beaucoup plus synthetique ;
- commencer par un squelette avant l'alimentation ;
- ne pas refaire Pixel ;
- ne pas refaire Qlik ;
- ne pas refaire CRM ;
- mettre l'animation commerciale au centre ;
- prevoir le calendrier du service de Gregoire ;
- rendre visibles les supports et kits commerciaux ;
- ajouter une boite a questions / bonnes idees ;
- prevoir un pave fournisseurs avec interlocuteurs et vigilances ;
- garder Soon / onboarding comme point d'entree ;
- eviter le trop d'information ;
- ouvrir d'abord au COPIL DP, puis elargir.

## Objectif de cette V1

La V1 doit etre un portail de centralisation et d'orientation.

Elle doit repondre a trois questions simples :

1. Ou est le bon outil ?
2. Ou est le bon support ?
3. Qui contacter ou comment remonter une question ?

## Structure retenue

La page d'accueil est composee comme une page SharePoint moderne en sections flexibles :

| Zone | Disposition | WebParts probables |
|---|---|---|
| Hero | Pleine largeur | Banniere principale |
| Acces prioritaires | 2/3 gauche | Tableau de bord / Lien web |
| A suivre cette semaine | 1/3 droite | Focus / Bouton d'action |
| Actualites utiles | 2/3 gauche | News / Lien web / Actualites avancees |
| Agenda | 1/3 droite | Evenements ou Lien web vers calendrier Gregoire |
| Operation du moment | 2/3 gauche | Carte editoriale / Focus |
| Fournisseurs | 1/3 droite | Liste SharePoint |
| Contribution / contacts / onboarding | 3 colonnes | Boite a idees, Contacts, Bouton d'action |

## Liens accessibles integres

La V1 utilise maintenant les liens fonctionnels transmis, regroupes en niveaux de priorite :

| Niveau | Liens |
|---|---|
| COEUR | CRM Dynamics, Qlik Reporting, Kezako, Operations commerciales |
| P1 - Commerce | GetPaid, Merchandising, Comptoirs Gagnants, Gamme agence |
| P2 - Cadre | Securite Commerce, Securite Logistique, SuccessFactors, Nouveau chef d'agence, Regles d'Or |
| P3 - Specialise | Mercure, Digital |

Cette organisation evite de recreer un catalogue Pixel complet : les liens coeur sont visibles en premier, les autres restent disponibles sans saturer la page.

Dans la maquette, ces niveaux sont presentes sous forme d'onglets. En SharePoint, ils peuvent etre reproduits de deux manieres :

- une seule page avec des sections successives COEUR / P1 / P2 / P3 ;
- plusieurs pages ou volets : Accueil, Commerce, Cadre, Specialise.

## Pages V1 conseillees

- Accueil
- Commerce & animations
- Fournisseurs & fabricants
- Boite a questions / bonnes idees
- Expertises & contacts
- Onboarding & procedures
- Cadrage / gouvernance en discret

## Ce qui reste hors V1

- Dashboard KPI commercial
- Power BI integre comme Qlik bis
- Referentiel fournisseur complet
- Power Apps obligatoire
- Organigramme detaille lourd
- Social feed lourd
- Ticketing
- Contenus commerciaux sensibles

## Comment ouvrir la maquette

Ouvrir le fichier :

`index.html`

dans un navigateur.

## Fichier principal

- `index.html`
