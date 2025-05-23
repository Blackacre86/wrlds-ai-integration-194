
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProsecutorAdvantage from "./pages/ProsecutorAdvantage";
import OurApproach from "./pages/OurApproach";
import PracticeAreas from "./pages/PracticeAreas";
import CaseResults from "./pages/CaseResults";
import NotFound from "./pages/NotFound";

// Practice Area Detail Pages
import OuiDui from "./pages/practice-areas/OuiDui";
import DomesticViolence from "./pages/practice-areas/DomesticViolence";
import DrugCrimes from "./pages/practice-areas/DrugCrimes";
import ViolentCrimes from "./pages/practice-areas/ViolentCrimes";
import SexOffenses from "./pages/practice-areas/SexOffenses";
import Theft from "./pages/practice-areas/Theft";
import MagistrateHearings from "./pages/practice-areas/MagistrateHearings";
import MotorVehicle from "./pages/practice-areas/MotorVehicle";
import Hearings209a from "./pages/practice-areas/Hearings209a";
import StudentDefense from "./pages/practice-areas/StudentDefense";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/prosecutor-advantage" element={<ProsecutorAdvantage />} />
            <Route path="/our-approach" element={<OurApproach />} />
            <Route path="/practice-areas" element={<PracticeAreas />} />
            <Route path="/case-results" element={<CaseResults />} />
            
            {/* Practice Area Detail Routes */}
            <Route path="/practice-areas/oui-dui" element={<OuiDui />} />
            <Route path="/practice-areas/domestic-violence" element={<DomesticViolence />} />
            <Route path="/practice-areas/drug-crimes" element={<DrugCrimes />} />
            <Route path="/practice-areas/violent-crimes" element={<ViolentCrimes />} />
            <Route path="/practice-areas/sex-offenses" element={<SexOffenses />} />
            <Route path="/practice-areas/theft" element={<Theft />} />
            <Route path="/practice-areas/magistrate-hearings" element={<MagistrateHearings />} />
            <Route path="/practice-areas/motor-vehicle" element={<MotorVehicle />} />
            <Route path="/practice-areas/209a-hearings" element={<Hearings209a />} />
            <Route path="/practice-areas/student-defense" element={<StudentDefense />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
