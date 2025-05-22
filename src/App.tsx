
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import AIInnovation from "./pages/AIInnovation";
import Contact from "./pages/Contact";
import ProsecutorAdvantage from "./pages/ProsecutorAdvantage";
import OurApproach from "./pages/OurApproach";
import PracticeAreas from "./pages/PracticeAreas";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/ai-innovation" element={<AIInnovation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/prosecutor-advantage" element={<ProsecutorAdvantage />} />
          <Route path="/our-approach" element={<OurApproach />} />
          <Route path="/practice-areas" element={<PracticeAreas />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
