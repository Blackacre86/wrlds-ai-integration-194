
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { ContentProvider } from "@/components/ContentProvider";
import Index from "./pages/Index";
import AdminAI from "./pages/AdminAI";
import AIServiceMatcher from "./pages/AIServiceMatcher";
import AISearch from "./pages/AISearch";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogPostDetail from "./pages/BlogPostDetail";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Careers from "./pages/Careers";
import TechDetails from "./pages/TechDetails";
import AIServices from "./pages/AIServices";
import NotFound from "./pages/NotFound";
import HockeyProject from "./pages/HockeyProject"; 
import PetProject from "./pages/PetProject";
import WorkwearProject from "./pages/WorkwearProject";
import SportRetailProject from "./pages/SportRetailProject";
import FireCatProject from "./pages/FireCatProject";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <ContentProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/admin/ai" element={<AdminAI />} />
              <Route path="/ai/service-matcher" element={<AIServiceMatcher />} />
              <Route path="/ai/search" element={<AISearch />} />
              <Route path="/about" element={<About />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/tech-details" element={<TechDetails />} />
              <Route path="/ai-services" element={<AIServices />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPostDetail />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/projects/hockey" element={<HockeyProject />} />
              <Route path="/projects/pet" element={<PetProject />} />
              <Route path="/projects/workwear" element={<WorkwearProject />} />
              <Route path="/projects/sport-retail" element={<SportRetailProject />} />
              <Route path="/projects/firecat" element={<FireCatProject />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ContentProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
