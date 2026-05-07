import { NavLink, useLocation, Link } from "react-router-dom";
import {
  Home, ShoppingBag, Factory, GraduationCap, Users, Lightbulb,
  Settings, FileCog, Map, ShieldCheck, Layers,
  Search, Bell, HelpCircle, Grid3x3, ChevronDown, AppWindow,
  Star, Activity
} from "lucide-react";
import { ReactNode, useState, useRef, useEffect } from "react";
import { useAudience } from "@/audience/AudienceContext";
import { AudienceSwitcher } from "@/audience/AudienceSwitcher";

const userNav = [
  { to: "/", label: "Accueil", icon: Home },
  { to: "/commerce", label: "Commerce & animations", icon: ShoppingBag },
  { to: "/fournisseurs", label: "Fournisseurs & fabricants", icon: Factory },
  { to: "/onboarding", label: "Onboarding & procédures", icon: GraduationCap },
  { to: "/expertises", label: "Expertises & contacts", icon: Users },
  { to: "/idees", label: "Boîte à questions & bonnes idées", icon: Lightbulb },
  { to: "/mes-acces", label: "Mes accès & suivi", icon: Star },
  { to: "/indicateurs", label: "Indicateurs portail", icon: Activity },
];

// Outils sont fournis par le profil d'audience actif

const adminNav = [
  { to: "/admin/cadrage", label: "Cadrage & faisabilité", icon: ShieldCheck },
  { to: "/admin/mapping", label: "Mapping WebParts", icon: Map },
  { to: "/admin/gouvernance", label: "Gouvernance & alimentation", icon: FileCog },
  { to: "/admin/perimetre", label: "V1 / V2 / hors périmètre", icon: Layers },
];

export default function Layout({ children }: { children: ReactNode }) {
  const { audience } = useAudience();
  const tools = audience.tools;
  const { pathname } = useLocation();
  const [toolsOpen, setToolsOpen] = useState(false);
  const [adminOpen, setAdminOpen] = useState(false);
  const toolsRef = useRef<HTMLDivElement>(null);
  const adminRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (toolsRef.current && !toolsRef.current.contains(e.target as Node)) setToolsOpen(false);
      if (adminRef.current && !adminRef.current.contains(e.target as Node)) setAdminOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-muted">
      {/* Top suite bar */}
      <div className="h-10 bg-primary text-primary-foreground flex items-center px-4 gap-3 text-xs flex-shrink-0">
        <Grid3x3 className="h-4 w-4" />
        <span className="font-semibold">SharePoint</span>
        <span className="opacity-60">·</span>
        <span className="opacity-90">Direction Régionale Sud-Est</span>
        <div className="flex-1" />
        <AudienceSwitcher />
        <div className="hidden md:flex items-center gap-2 opacity-90 ml-2">
          <span>Marie Dupont</span>
          <div className="h-6 w-6 rounded-full bg-secondary flex items-center justify-center text-[10px] font-semibold">MD</div>
        </div>
      </div>

      {/* Site header */}
      <header className="bg-card border-b border-border flex-shrink-0">
        <div className="px-6 py-3 flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="h-9 w-9 bg-primary rounded flex items-center justify-center font-bold text-sm text-primary-foreground">N</div>
            <div>
              <div className="font-display font-semibold text-base leading-tight text-primary">Nexus Régional</div>
              <div className="text-[11px] text-muted-foreground">Portail Régional Sud-Est</div>
            </div>
          </Link>

          <div className="flex-1 max-w-xl ml-8 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Rechercher dans le portail régional…"
              className="w-full pl-9 pr-3 py-2 text-sm bg-muted border border-border rounded focus:outline-none focus:border-secondary"
            />
          </div>

          <button className="p-2 hover:bg-muted rounded" title="Aide"><HelpCircle className="h-4 w-4 text-muted-foreground" /></button>
          <button className="p-2 hover:bg-muted rounded relative" title="Notifications">
            <Bell className="h-4 w-4 text-muted-foreground" />
            <span className="absolute top-1.5 right-1.5 h-1.5 w-1.5 bg-warning rounded-full" />
          </button>

          {/* Outils menu */}
          <div ref={toolsRef} className="relative">
            <button
              onClick={() => { setToolsOpen(!toolsOpen); setAdminOpen(false); }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm border border-border rounded hover:bg-muted text-foreground"
            >
              <AppWindow className="h-4 w-4 text-secondary" /> Outils <ChevronDown className="h-3 w-3" />
            </button>
            {toolsOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-card border border-border rounded-md shadow-lg z-50 p-3">
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold px-2 mb-2">Outils existants — accès direct</div>
                <div className="grid grid-cols-2 gap-1">
                  {tools.map((t) => (
                    <a key={t.label} href="#" className="flex flex-col p-2 rounded hover:bg-muted">
                      <span className="text-sm font-medium text-primary">{t.label}</span>
                      <span className="text-[10px] text-muted-foreground leading-tight">{t.desc}</span>
                    </a>
                  ))}
                </div>
                <div className="text-[10px] text-muted-foreground italic mt-2 px-2">Le portail ne remplace pas ces outils — il y donne accès.</div>
              </div>
            )}
          </div>
        </div>

        {/* Main nav */}
        <nav className="px-6 flex items-center gap-1 border-t border-border bg-card overflow-x-auto">
          {userNav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2.5 text-sm whitespace-nowrap border-b-2 transition-colors ${
                  isActive
                    ? "border-secondary text-primary font-medium"
                    : "border-transparent text-muted-foreground hover:text-primary hover:border-border"
                }`
              }
            >
              <item.icon className="h-4 w-4" />
              <span>{item.label}</span>
            </NavLink>
          ))}

          <div className="flex-1" />

          <div ref={adminRef} className="relative">
            <button
              onClick={() => { setAdminOpen(!adminOpen); setToolsOpen(false); }}
              className={`flex items-center gap-2 px-3 py-2.5 text-xs whitespace-nowrap border-b-2 ${
                pathname.startsWith("/admin")
                  ? "border-warning text-primary font-medium"
                  : "border-transparent text-muted-foreground hover:text-primary"
              }`}
            >
              <Settings className="h-3.5 w-3.5" /> Cadrage <ChevronDown className="h-3 w-3" />
            </button>
            {adminOpen && (
              <div className="absolute right-0 mt-1 w-72 bg-card border border-border rounded-md shadow-lg z-50 p-2">
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold px-2 py-1.5">
                  Réservé contributeurs / IT / projet
                </div>
                {adminNav.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setAdminOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-2 px-3 py-2 text-xs rounded ${
                        isActive ? "bg-muted text-primary font-medium" : "text-foreground hover:bg-muted"
                      }`
                    }
                  >
                    <item.icon className="h-3.5 w-3.5 text-warning" />
                    <span>{item.label}</span>
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        </nav>
      </header>

      {/* Main */}
      <main className="flex-1 overflow-y-auto">{children}</main>

      <footer className="bg-card border-t border-border px-6 py-3 text-[11px] text-muted-foreground flex justify-between flex-shrink-0">
        <span>Portail Régional Sud-Est · Maquette V2 cible SharePoint / M365</span>
        <span className="text-muted-foreground/70">Direction Régionale Sud-Est · Rexel</span>
      </footer>
    </div>
  );
}
