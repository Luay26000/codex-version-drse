import { useAudience } from "@/audience/AudienceContext";
import { audienceList } from "@/audience/profiles";
import { UserCog, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function AudienceSwitcher() {
  const { audienceId, audience, setAudienceId } = useAudience();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-2 px-2.5 py-1 text-xs rounded bg-primary-foreground/10 hover:bg-primary-foreground/20 border border-primary-foreground/20 text-primary-foreground"
        title="Vue adaptée à votre activité"
      >
        <UserCog className="h-3.5 w-3.5" />
        <span className="opacity-80">Vue adaptée :</span>
        <span className="font-semibold">{audience.short}</span>
        <ChevronDown className="h-3 w-3" />
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-1 w-72 bg-card border border-border rounded-md shadow-lg z-50 p-2 text-foreground">
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold px-2 pb-1">
            Vue adaptée à votre activité
          </div>
          {audienceList.map((p) => (
            <button
              key={p.id}
              onClick={() => { setAudienceId(p.id); setOpen(false); }}
              className={`w-full text-left px-2 py-1.5 rounded text-sm flex flex-col ${
                p.id === audienceId ? "bg-secondary/15 text-primary" : "hover:bg-muted"
              }`}
            >
              <span className="font-medium">{p.label}</span>
              <span className="text-[11px] text-muted-foreground">{p.description}</span>
            </button>
          ))}
          <div className="text-[10px] text-muted-foreground italic px-2 pt-2 border-t border-border mt-1">
            Les contenus affichés sont adaptés au profil sélectionné.
          </div>
        </div>
      )}
    </div>
  );
}

export function AudienceBanner() {
  const { audience } = useAudience();
  return (
    <div className="text-[11px] text-muted-foreground inline-flex items-center gap-2">
      <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
      Vue adaptée à votre activité — <strong className="text-primary font-medium">{audience.label}</strong>
    </div>
  );
}
