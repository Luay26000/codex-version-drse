import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "./components/Layout";
import { AudienceProvider } from "./audience/AudienceContext";
import Accueil from "./pages/Accueil";
import Commerce from "./pages/Commerce";
import Fournisseurs from "./pages/Fournisseurs";
import Onboarding from "./pages/Onboarding";
import Expertises from "./pages/Expertises";
import Idees from "./pages/Idees";
import MesAcces from "./pages/MesAcces";
import Indicateurs from "./pages/Indicateurs";
import Cadrage from "./pages/admin/Cadrage";
import Mapping from "./pages/admin/Mapping";
import Gouvernance from "./pages/admin/Gouvernance";
import Perimetre from "./pages/admin/Perimetre";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
       <AudienceProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/commerce" element={<Commerce />} />
            <Route path="/fournisseurs" element={<Fournisseurs />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/expertises" element={<Expertises />} />
            <Route path="/idees" element={<Idees />} />
            <Route path="/mes-acces" element={<MesAcces />} />
            <Route path="/indicateurs" element={<Indicateurs />} />
            <Route path="/admin/cadrage" element={<Cadrage />} />
            <Route path="/admin/mapping" element={<Mapping />} />
            <Route path="/admin/gouvernance" element={<Gouvernance />} />
            <Route path="/admin/perimetre" element={<Perimetre />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
       </AudienceProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
