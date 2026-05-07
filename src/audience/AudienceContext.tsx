import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { audienceProfiles, AudienceId, AudienceProfile } from "./profiles";

type Ctx = {
  audienceId: AudienceId;
  audience: AudienceProfile;
  setAudienceId: (id: AudienceId) => void;
};

const AudienceCtx = createContext<Ctx | null>(null);

export function AudienceProvider({ children }: { children: ReactNode }) {
  const [audienceId, setAudienceIdState] = useState<AudienceId>(() => {
    const saved = typeof window !== "undefined" ? (localStorage.getItem("nexus.audience") as AudienceId | null) : null;
    return saved && audienceProfiles[saved] ? saved : "general";
  });

  useEffect(() => {
    try {
      localStorage.setItem("nexus.audience", audienceId);
    } catch {
      // Some embedded/demo contexts can block localStorage writes.
    }
  }, [audienceId]);

  return (
    <AudienceCtx.Provider value={{ audienceId, audience: audienceProfiles[audienceId], setAudienceId: setAudienceIdState }}>
      {children}
    </AudienceCtx.Provider>
  );
}

export function useAudience() {
  const ctx = useContext(AudienceCtx);
  if (!ctx) throw new Error("useAudience must be used inside AudienceProvider");
  return ctx;
}
