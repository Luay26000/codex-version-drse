import { PageHero, Section, InfoMessage, QuickLinks } from "@/components/SPParts";
import { AudienceContextHeader } from "@/audience/AudienceContextHeader";
import { useAudience } from "@/audience/AudienceContext";
import { getPageConfig } from "@/audience/extras";
import { Search, Mail, MessageSquare, User } from "lucide-react";

const poles = [
  {
    nom: "Pôle Commerce", couleur: "from-secondary to-primary",
    responsable: { nom: "Sophie Bernard", role: "Responsable régional ventes", initiales: "SB" },
    membres: [
      { nom: "Laurent Martin", role: "Animation commerciale", initiales: "LM" },
      { nom: "Claire Garcia", role: "Calendrier opérations", initiales: "CG" },
      { nom: "David Roux", role: "Comptes clés régionaux", initiales: "DR" },
    ],
  },
  {
    nom: "Pôle Expertise", couleur: "from-primary to-[hsl(207,40%,40%)]",
    responsable: { nom: "Patrick Leroy", role: "Responsable expertise DRSE", initiales: "PL" },
    membres: [
      { nom: "Marc Dupont", role: "Expert éclairage", initiales: "MD" },
      { nom: "Anne Vidal", role: "Expert automatisme", initiales: "AV" },
      { nom: "Yann Costa", role: "Expert distribution", initiales: "YC" },
    ],
  },
  {
    nom: "Pôle Support", couleur: "from-[hsl(173,80%,30%)] to-primary",
    responsable: { nom: "Isabelle Faure", role: "Responsable support régional", initiales: "IF" },
    membres: [
      { nom: "Nadia Benali", role: "Assistante de pôle", initiales: "NB" },
      { nom: "Thierry Blanc", role: "Référent IT régional", initiales: "TB" },
      { nom: "Émilie Rey", role: "Référente RH régionale", initiales: "ER" },
    ],
  },
];

const quiContacter = [
  { sujet: "Question opération commerciale", contact: "Pôle Commerce — L. Martin", canal: "Mail / Teams" },
  { sujet: "Support PLV ou kit", contact: "M. Dupont — animation", canal: "Mail" },
  { sujet: "Sujet fournisseur ou disponibilité", contact: "Pôle Expertise — P. Leroy", canal: "Mail / Teams" },
  { sujet: "Procédure / onboarding", contact: "Pôle Support — É. Rey", canal: "Mail" },
  { sujet: "Accès outil bloqué", contact: "Référent IT — T. Blanc", canal: "Ticket IT" },
  { sujet: "Remontée terrain / idée", contact: "Boîte à questions & bonnes idées", canal: "Formulaire portail" },
  { sujet: "Comptes clés stratégiques", contact: "D. Roux — comptes clés", canal: "Mail / Teams" },
  { sujet: "Information RH", contact: "É. Rey — RH régionale", canal: "Mail" },
];

const fichesExpertise = [
  { t: "Éclairage", quand: "Choix LED, audit énergétique", canal: "Mail / Teams" },
  { t: "Génie climatique", quand: "PAC, ventilation, RT2020", canal: "Mail" },
  { t: "Photovoltaïque", quand: "Étude solaire, autoconsommation", canal: "Mail / Teams" },
  { t: "IRVE", quand: "Bornes de recharge, qualif Mobilian", canal: "Mail" },
  { t: "Courant faible", quand: "Réseaux, sûreté, contrôle d'accès", canal: "Mail" },
  { t: "Digital / outils", quand: "Pixel, Yoobic, Rexel GPT", canal: "Teams" },
];

const contactsFavorisBase = [
  { n: "L. Martin", r: "Animation commerciale" },
  { n: "P. Leroy", r: "Expertise" },
  { n: "S. Bernard", r: "Ventes régionales" },
  { n: "T. Blanc", r: "Référent IT" },
  { n: "É. Rey", r: "RH régionale" },
  { n: "M. Dupont", r: "Expert éclairage" },
];

function normalize(s: string) {
  return s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function featuredScore(text: string, featured: string[]) {
  const haystack = normalize(text);
  const index = featured.findIndex((item) => {
    const needle = normalize(item);
    const parts = needle.split(/[^a-z0-9]+/).filter((part) => part.length > 2);
    return haystack.includes(needle) || parts.some((part) => haystack.includes(part));
  });
  return index === -1 ? 999 : index;
}

function rankByFeatured<T>(items: T[], key: (item: T) => string, featured: string[]) {
  return [...items].sort((a, b) => featuredScore(key(a), featured) - featuredScore(key(b), featured));
}

export default function Expertises() {
  const { audienceId } = useAudience();
  const cfg = getPageConfig(audienceId).expertises;
  const polesPriorises = poles.map((p) => ({
    ...p,
    membres: rankByFeatured(p.membres, (m) => `${m.nom} ${m.role} ${m.initiales}`, cfg.featuredContacts),
  }));
  const quiContacterPriorise = rankByFeatured(quiContacter, (q) => `${q.sujet} ${q.contact}`, cfg.featuredContacts);
  const fichesPriorisees = rankByFeatured(fichesExpertise, (f) => f.t, cfg.featuredFiches);
  const contactsFavoris = rankByFeatured(contactsFavorisBase, (c) => `${c.n} ${c.r}`, cfg.featuredContacts).slice(0, 4);
  return (
    <div className="p-6 space-y-6 max-w-[1400px] mx-auto">
      <PageHero
        eyebrow="Annuaire régional"
        title="Expertises & contacts"
        subtitle="Identifiez rapidement les bons interlocuteurs régionaux."
      />

      <AudienceContextHeader page="expertises" />
      {cfg.message && <div className="text-xs text-muted-foreground italic px-1">{cfg.message}</div>}

      <Section title="Recherche contact / expertise" webpart="Barre de recherche">
        <div className="relative max-w-xl">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input className="w-full pl-9 pr-3 py-2 text-sm bg-muted border border-border rounded focus:outline-none focus:border-secondary" placeholder="Nom, rôle, expertise, agence…" />
        </div>
      </Section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {polesPriorises.map((p) => (
          <div key={p.nom} className="sp-section overflow-hidden flex flex-col">
            <div className={`bg-gradient-to-br ${p.couleur} text-primary-foreground p-5`}>
              <div className="text-[11px] uppercase tracking-widest opacity-80">{p.nom}</div>
              <div className="font-display text-lg font-bold mt-1">{p.responsable.nom}</div>
              <div className="text-xs opacity-90">{p.responsable.role}</div>
              <div className="flex gap-2 mt-3">
                <a href="#" className="text-xs bg-primary-foreground/15 hover:bg-primary-foreground/25 px-2 py-1 rounded inline-flex items-center gap-1"><Mail className="h-3 w-3" /> Mail</a>
                <a href="#" className="text-xs bg-primary-foreground/15 hover:bg-primary-foreground/25 px-2 py-1 rounded inline-flex items-center gap-1"><MessageSquare className="h-3 w-3" /> Teams</a>
              </div>
            </div>
            <div className="p-4 flex-1">
              <div className="text-xs uppercase text-muted-foreground font-semibold mb-2">Membres clés</div>
              <ul className="space-y-2">
                {p.membres.map((m) => (
                  <li key={m.nom} className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-muted text-muted-foreground flex items-center justify-center text-xs font-medium border border-border">{m.initiales}</div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-foreground">{m.nom}</div>
                      <div className="text-[11px] text-muted-foreground">{m.role}</div>
                    </div>
                    <a href="#" className="text-muted-foreground hover:text-secondary"><User className="h-4 w-4" /></a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <Section title="Qui contacter pour ?" webpart="Rôle des contacts / Liste SharePoint" subtitle="Liste régionale — Rôle des contacts">
        <div className="overflow-x-auto -mx-5">
          <table className="w-full text-sm">
            <thead className="bg-muted text-xs uppercase text-muted-foreground">
              <tr>
                <th className="text-left px-5 py-2 font-medium">Sujet</th>
                <th className="text-left px-3 py-2 font-medium">Contact / Pôle</th>
                <th className="text-left px-3 py-2 font-medium">Canal</th>
                <th className="text-left px-3 py-2 font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              {quiContacterPriorise.map((q) => (
                <tr key={q.sujet} className="border-t border-border hover:bg-muted/40">
                  <td className="px-5 py-3 font-medium text-foreground">{q.sujet}</td>
                  <td className="px-3 py-3 text-muted-foreground">{q.contact}</td>
                  <td className="px-3 py-3 text-muted-foreground text-xs">{q.canal}</td>
                  <td className="px-3 py-3"><a href="#" className="text-secondary hover:underline text-xs">Contacter →</a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="Organigramme régional" webpart="Organigramme" subtitle="Vue simplifiée DRSE">
        <div className="flex flex-col items-center gap-4 py-4">
          <div className="bg-primary text-primary-foreground px-6 py-3 rounded font-semibold text-sm">
            Direction Régionale Sud-Est
          </div>
          <div className="w-px h-6 bg-border" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl">
            {poles.map((p) => (
              <div key={p.nom} className="flex flex-col items-center gap-3">
                <div className="bg-secondary text-secondary-foreground px-4 py-2 rounded text-sm font-medium text-center">{p.nom}</div>
                <div className="w-px h-4 bg-border" />
                <div className="text-xs text-center">
                  <div className="font-medium">{p.responsable.nom}</div>
                  <div className="text-muted-foreground">{p.responsable.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="text-xs text-muted-foreground italic mt-4">
          L'organigramme dépend de la qualité des données Microsoft 365 / Entra ID. Si les données ne sont pas
          fiables, une alternative Trombinoscope ou Liste « Qui contacter ? » est utilisée.
        </p>
      </Section>

      <Section title="Fiches expertises" webpart="Liste SharePoint" subtitle="Pour identifier rapidement quand solliciter chaque expertise.">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {fichesPriorisees.map((f) => (
            <div key={f.t} className="border border-border rounded p-3 hover:border-secondary">
              <div className="text-sm font-semibold text-primary">{f.t}</div>
              <div className="text-[11px] text-muted-foreground mt-2">Quand solliciter</div>
              <div className="text-xs text-foreground">{f.quand}</div>
              <div className="text-[11px] text-muted-foreground mt-2">Canal</div>
              <div className="text-xs text-foreground">{f.canal}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Contacts favoris" webpart="Contacts personnels">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {contactsFavoris.map((c) => (
            <div key={c.n} className="sp-card text-center">
              <div className="h-10 w-10 mx-auto rounded-full bg-secondary/15 text-secondary flex items-center justify-center font-semibold text-sm">{c.n.split(" ").map(s => s[0]).join("")}</div>
              <div className="text-sm font-medium text-foreground mt-2">{c.n}</div>
              <div className="text-[11px] text-muted-foreground">{c.r}</div>
            </div>
          ))}
        </div>
      </Section>

      <QuickLinks
        items={[
          { label: "Organigramme", href: "#" },
          { label: "Qui contacter ?", href: "#" },
          { label: "Contacts par pôle", href: "#" },
          { label: "CRM", href: "#" },
          { label: "Teams / mail", href: "#" },
        ]}
      />

      <InfoMessage>
        Cette page ne remplace pas l'<strong>annuaire corporate</strong>. Elle donne une lecture régionale
        fonctionnelle des rôles et contacts clés.
      </InfoMessage>
    </div>
  );
}
