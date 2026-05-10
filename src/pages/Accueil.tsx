import {
  Box, BarChart3, BookOpen, MessagesSquare, Sparkles, Calendar,
  FileText, GraduationCap, Bot, Vote, Users2, Activity, FileSpreadsheet,
  Megaphone, Zap, ScanSearch, ListChecks, ArrowUpRight,
  ShoppingBag, Factory, Lightbulb, Users, Truck, AlertTriangle, Star, Bell,
  ShieldCheck, HeartHandshake, Store
} from "lucide-react";
import { Link } from "react-router-dom";
import { PageHero, Section, Status, WebPartTag, QuickLinks } from "@/components/SPParts";
import { useAudience } from "@/audience/AudienceContext";
import { AudienceBanner } from "@/audience/AudienceSwitcher";
import { getHomeTiles } from "@/audience/extras";
import type { DashboardCard } from "@/audience/profiles";

// Icônes par nom de carte (fallback générique)
const iconForCard = (name: string) => {
  const n = name.toLowerCase();
  if (n.includes("qlik") || n.includes("power bi")) return BarChart3;
  if (n.includes("pixel")) return Box;
  if (n.includes("crm")) return Users2;
  if (n.includes("kezako")) return BookOpen;
  if (n.includes("yoobic")) return ScanSearch;
  if (n.includes("soon") || n.includes("onboarding") || n.includes("parcours")) return GraduationCap;
  if (n.includes("modèle") || n.includes("modeles") || n.includes("modèles")) return FileSpreadsheet;
  if (n.includes("mode") || n.includes("procédure") || n.includes("procedure")) return FileText;
  if (n.includes("calendrier") || n.includes("agenda") || n.includes("événement")) return Calendar;
  if (n.includes("rexel gpt") || n.includes("ia")) return Sparkles;
  if (n.includes("agent")) return Bot;
  if (n.includes("sondage")) return Vote;
  if (n.includes("viva")) return Megaphone;
  if (n.includes("pico")) return Zap;
  if (n.includes("sécurité") || n.includes("securite")) return ShieldCheck;
  if (n.includes("rh agence") || n === "rh") return HeartHandshake;
  if (n.includes("merchandising") || n.includes("game agence")) return Store;
  if (n.includes("contacts") || n.includes("organigramme")) return Users;
  if (n.includes("fournisseur") || n.includes("fabricant")) return Factory;
  if (n.includes("supports") || n.includes("argumentaire") || n.includes("kit")) return BookOpen;
  if (n.includes("opération") || n.includes("operation") || n.includes("commerce") || n.includes("animation")) return ShoppingBag;
  if (n.includes("vigilance") || n.includes("alerte")) return AlertTriangle;
  if (n.includes("remontée") || n.includes("remonté") || n.includes("question") || n.includes("idée") || n.includes("boîte")) return MessagesSquare;
  if (n.includes("indicateur") || n.includes("synthèse") || n.includes("synthese")) return Activity;
  if (n.includes("livraison")) return Truck;
  return ListChecks;
};

const dashboardCardTypeFor = (name: string) => {
  const n = name.toLowerCase();
  if (n.includes("actualit")) return "News";
  if (n.includes("calendrier") || n.includes("agenda") || n.includes("événement") || n.includes("evenement")) return "Événements";
  if (n.includes("support") || n.includes("kit") || n.includes("plv") || n.includes("modèle") || n.includes("mode opératoire")) return "Dossier";
  if (n.includes("sécurité") || n.includes("securite") || n.includes("rh agence") || n.includes("merchandising")) return "Lien web";
  if (n.includes("boîte") || n.includes("question") || n.includes("idée") || n.includes("remontée") || n.includes("synthèse") || n.includes("fournisseurs en vigilance")) return "Power Apps";
  if (n.includes("approbation")) return "Approbations";
  if (n.includes("pulse")) return "Viva Pulse";
  if (n.includes("power bi")) return "Application Teams";
  if (n.includes("onedrive")) return "OneDrive";
  return "Lien web";
};

function CanvasLayoutLabel({ label }: { label: string }) {
  return (
    <div className="mb-2 inline-flex items-center gap-2 rounded border border-dashed border-border bg-muted/40 px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
      <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
      Section flexible SharePoint · {label}
    </div>
  );
}

export default function Accueil() {
  const { audience, audienceId } = useAudience();
  const { dashboard, news, events, priorities } = audience;
  const tuiles = getHomeTiles(audienceId);
  return (
    <div className="p-6 space-y-6 max-w-[1400px] mx-auto">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <AudienceBanner />
        {priorities.accueilMessage && <span className="text-[11px] text-muted-foreground italic">{priorities.accueilMessage}</span>}
      </div>
      <PageHero
        eyebrow="Direction Régionale Sud-Est · V2 cible"
        title="Portail Régional Sud-Est"
        subtitle="Vos accès, opérations, contacts et ressources régionales au même endroit."
        message="Un point d'entrée régional pour retrouver rapidement les bons outils, les bons contenus et les bons interlocuteurs."
        ctaPrimary={{
          label: "Accéder à mes outils",
          to: "/mes-acces",
        }}
        ctaSecondary={{ label: "Voir les opérations en cours", to: "/commerce" }}
      />

      <div>
        <CanvasLayoutLabel label="2/3 Tableau de bord + 1/3 focus" />
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
          {/* Tableau de bord régional */}
          <div id="tableau-de-bord" className="xl:col-span-8 scroll-mt-24">
            <Section
              title="Tableau de bord régional"
              webpart="Tableau de bord"
              subtitle="Cartes réalistes : Lien web, Dossier, Événements, Power Apps, News, App Teams, Approbations et Viva Pulse."
            >
              <div className="space-y-6">
                {dashboard.map((group) => (
                  <div key={group.title}>
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-primary">{group.title}</h3>
                      <div className="flex-1 h-px bg-border" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
                      {group.cards.map((c: DashboardCard) => {
                        const Icon = iconForCard(c.name);
                        const className = "group sp-card flex flex-col gap-2 hover:border-secondary";
                        const content = (
                          <>
                            <div className="flex items-start justify-between">
                              <div className="h-9 w-9 rounded bg-primary/5 text-primary flex items-center justify-center group-hover:bg-secondary/15 group-hover:text-secondary transition">
                                <Icon className="h-5 w-5" />
                              </div>
                              <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-secondary" />
                            </div>
                            <div>
                              <div className="font-medium text-sm text-foreground">{c.name}</div>
                              <div className="text-xs text-muted-foreground mt-0.5 line-clamp-2">{c.desc}</div>
                            </div>
                            <div className="inline-flex w-fit rounded bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                              Carte · {dashboardCardTypeFor(c.name)}
                            </div>
                            <div className="text-[11px] text-secondary font-medium mt-1">{c.action || "Ouvrir"} →</div>
                          </>
                        );
                        if (c.to) return <Link key={c.name} to={c.to} className={className}>{content}</Link>;
                        return (
                          <a key={c.name} href="#" className={className}>
                            {content}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </Section>
          </div>

          <div className="xl:col-span-4 space-y-6">
            <Section title="Focus régional" webpart="Focus">
              <div className="space-y-3">
                <div className="rounded border border-secondary/30 bg-secondary/10 p-3">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-secondary">Priorité de la vue</div>
                  <div className="mt-1 text-sm font-medium text-primary">
                    {priorities.accueilMessage || "Retrouver rapidement les accès et contenus régionaux utiles."}
                  </div>
                </div>
                {audienceId === "agence" && (
                  <div className="rounded border border-primary/20 bg-primary/5 p-3">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-primary">Choix V1 réaliste</div>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Responsable d'agence d'abord : sécurité, RH, commerce, Yoobic, merchandising et questions terrain.
                    </p>
                    <div className="mt-3 grid grid-cols-3 gap-2">
                      {[
                        { icon: ShieldCheck, label: "Sécurité" },
                        { icon: HeartHandshake, label: "RH" },
                        { icon: Store, label: "Terrain" },
                      ].map((item) => (
                        <div key={item.label} className="rounded bg-background p-2 text-center">
                          <item.icon className="mx-auto h-4 w-4 text-secondary" />
                          <span className="mt-1 block text-[10px] font-medium text-primary">{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                <Link to="/commerce" className="flex items-center gap-3 rounded border border-border p-3 hover:border-secondary">
                  <Calendar className="h-5 w-5 text-secondary" />
                  <span className="text-sm font-medium text-foreground">Calendrier opérations</span>
                  <ArrowUpRight className="ml-auto h-4 w-4 text-muted-foreground" />
                </Link>
                <Link to="/idees" className="flex items-center gap-3 rounded border border-border p-3 hover:border-secondary">
                  <MessagesSquare className="h-5 w-5 text-secondary" />
                  <span className="text-sm font-medium text-foreground">Questions & bonnes idées</span>
                  <ArrowUpRight className="ml-auto h-4 w-4 text-muted-foreground" />
                </Link>
              </div>
            </Section>

            <Section title="Assistance rapide" webpart="Lien web / Application Teams">
              <div className="space-y-3">
                {(audienceId === "agence"
                  ? [
                      { icon: Users2, label: "CRM", sub: "Clients, opportunités et suivi commercial" },
                      { icon: BookOpen, label: "Kezako", sub: "Procédures et repères internes" },
                      { icon: Users, label: "Qui contacter ?", sub: "Contacts utiles par sujet" },
                    ]
                  : [
                      { icon: Sparkles, label: "Rexel GPT", sub: "Aide à la recherche et à la formulation" },
                      { icon: Box, label: "Mes sites", sub: "Sites SharePoint suivis ou fréquents" },
                      { icon: Users, label: "Qui contacter ?", sub: "Contacts clés et expertises" },
                    ]).map((item) => (
                  <a key={item.label} href="#" className="flex items-start gap-3 rounded border border-border p-3 hover:border-secondary">
                    <item.icon className="mt-0.5 h-4 w-4 text-secondary" />
                    <span className="min-w-0">
                      <span className="block text-sm font-medium text-foreground">{item.label}</span>
                      <span className="block text-[11px] text-muted-foreground">{item.sub}</span>
                    </span>
                  </a>
                ))}
              </div>
            </Section>
          </div>
        </div>
      </div>

      <div>
        <CanvasLayoutLabel label="2/3 actualités + 1/3 agenda" />
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
          {/* Actualités carrousel */}
          <div className="xl:col-span-8">
            <Section
              title="Actualités régionales"
              webpart="Actualités avancé"
              action={<a href="#" className="text-xs text-secondary hover:underline">Toutes les actualités →</a>}
            >
              <div className="flex flex-wrap gap-2 mb-4">
                {["Tous", "Commerce", "Fournisseurs", "Onboarding", "Organisation"].map((f, i) => (
                  <button key={f} className={`text-xs px-3 py-1 rounded-full border ${i === 0 ? "bg-primary text-primary-foreground border-primary" : "border-border text-muted-foreground hover:border-secondary hover:text-secondary"}`}>{f}</button>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {news.map((n) => (
                  <article key={n.title} className="border border-border rounded overflow-hidden hover:border-secondary transition">
                    <div className="h-24 bg-gradient-to-br from-primary/80 to-secondary flex items-end p-3">
                      <Status label={n.tag} kind="info" />
                    </div>
                    <div className="p-3">
                      <div className="text-[11px] text-muted-foreground">{n.date}</div>
                      <h3 className="font-semibold text-sm text-primary mt-1 leading-snug">{n.title}</h3>
                      <p className="text-xs text-muted-foreground mt-2 line-clamp-3">{n.excerpt}</p>
                      <a href="#" className="text-[11px] text-secondary hover:underline mt-2 inline-block">Lire →</a>
                    </div>
                  </article>
                ))}
              </div>
            </Section>
          </div>

          {/* Agenda */}
          <div className="xl:col-span-4">
            <Section title="Agenda régional" webpart="Événements" action={<Link to="/commerce#calendrier-operations" className="text-xs text-secondary hover:underline">Calendrier →</Link>}>
              <ul className="space-y-3">
                {events.map((e) => (
                  <li key={e.title} className="flex gap-3 pb-3 border-b border-border last:border-0 last:pb-0">
                    <div className="flex-shrink-0 w-12 text-center">
                      <div className="text-[10px] uppercase text-secondary font-semibold">{e.date.split(" ")[1]}</div>
                      <div className="text-lg font-bold text-primary leading-none">{e.date.split(" ")[0]}</div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-foreground leading-tight">{e.title}</div>
                      <div className="text-[11px] text-muted-foreground mt-0.5">{e.location}</div>
                      <Status label={e.kind} kind="neutral" />
                    </div>
                  </li>
                ))}
              </ul>
            </Section>
          </div>
        </div>
      </div>

      <div>
        <CanvasLayoutLabel label="2/3 opération + 1/3 tuiles ciblées" />
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
          {/* Opération du moment */}
          <div className="xl:col-span-8 sp-section overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-5">
            <div className="md:col-span-2 bg-gradient-to-br from-secondary to-primary p-6 text-primary-foreground flex flex-col justify-center">
              <div className="text-xs uppercase tracking-widest opacity-80">Opération du moment</div>
              <div className="font-display text-2xl font-bold mt-2">Printemps Énergie 2026</div>
              <div className="text-sm opacity-90 mt-1">Du 5 au 30 mai · Toute la DRSE</div>
              <WebPartTag label="Carte éditoriale" />
            </div>
            <div className="md:col-span-3 p-6">
              <h3 className="sp-section-title mb-2">Mobilisation régionale autour de l'éclairage et de l'efficacité énergétique</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Kit commercial, supports PLV et argumentaires fournisseurs disponibles pour accompagner vos rendez-vous clients.
              </p>
              <div className="flex flex-wrap gap-2">
                <Link to="/commerce" className="bg-primary text-primary-foreground px-4 py-1.5 rounded text-sm font-medium hover:bg-primary/90">
                  Voir l'opération
                </Link>
                <Link to="/commerce" className="border border-border text-primary px-4 py-1.5 rounded text-sm font-medium hover:bg-muted">
                  Calendrier opérations
                </Link>
              </div>
            </div>
          </div>
          </div>

          {/* Tuiles prioritaires */}
          <section className="xl:col-span-4">
            <div className="flex items-center gap-2 mb-3">
              <h2 className="sp-section-title">Tuiles prioritaires</h2>
              <WebPartTag label="Bouton d'action / Carte éditoriale" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              {tuiles.slice(0, 6).map((t) => (
                <Link
                  key={t.label}
                  to={t.to}
                  className={`group relative overflow-hidden rounded-md bg-gradient-to-br ${t.color} text-primary-foreground p-4 aspect-square flex flex-col justify-between hover:shadow-lg transition-shadow`}
                >
                  <t.icon className="h-6 w-6 opacity-90" />
                  <div className="text-xs font-semibold leading-tight">{t.label}</div>
                  <ArrowUpRight className="absolute top-2 right-2 h-3.5 w-3.5 opacity-60 group-hover:opacity-100" />
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Alertes utiles + Mes raccourcis */}
      <div>
        <CanvasLayoutLabel label="50/50 alertes + raccourcis" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Section title="Alertes utiles" webpart="Liste SharePoint">
          <ul className="space-y-2">
            {[
              { label: "Tension appro câbles HT — Nexans", kind: "warn" as const, sub: "Jusqu'au 20/05" },
              { label: "Support PLV éclairage industriel mis à jour", kind: "ok" as const, sub: "28/04/2026" },
              { label: "Échéance animation fournisseurs proche", kind: "warn" as const, sub: "15/05" },
              { label: "Opération Challenge réseau Éclairage à venir", kind: "info" as const, sub: "12/05" },
            ].map((a) => (
              <li key={a.label} className="flex items-center gap-3 p-2.5 border border-border rounded">
                <AlertTriangle className="h-4 w-4 text-warning flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="text-sm text-foreground leading-tight">{a.label}</div>
                  <div className="text-[11px] text-muted-foreground">{a.sub}</div>
                </div>
                <Status label={a.kind === "ok" ? "OK" : a.kind === "warn" ? "À surveiller" : "À venir"} kind={a.kind} />
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Mes raccourcis" webpart="OneDrive / Mes sites" action={<Link to="/mes-acces" className="text-xs text-secondary hover:underline">Personnaliser →</Link>}>
          <div className="grid grid-cols-2 gap-2">
            {[
              { icon: Star, label: "Pixel" },
              { icon: Star, label: "Qlik" },
              { icon: Bell, label: "Mes notifications" },
              { icon: BookOpen, label: "Kit Printemps Énergie" },
              { icon: Users2, label: "L. Martin" },
              { icon: ListChecks, label: "Suivi de mes remontées" },
            ].map((r) => (
              <a key={r.label} href="#" className="flex items-center gap-2 p-2 border border-border rounded hover:border-secondary text-sm">
                <r.icon className="h-4 w-4 text-secondary" />
                <span className="truncate">{r.label}</span>
              </a>
            ))}
          </div>
        </Section>
        </div>
      </div>

      <QuickLinks
        webpart="Bouton d'action"
        items={[
          { label: "Mes accès & suivi", to: "/mes-acces" },
          { label: "Indicateurs portail", to: "/indicateurs" },
          { label: "Boîte à questions", to: "/idees" },
          { label: "Commerce", to: "/commerce" },
          { label: "Fournisseurs", to: "/fournisseurs" },
          { label: "Onboarding", to: "/onboarding" },
        ]}
      />
    </div>
  );
}
