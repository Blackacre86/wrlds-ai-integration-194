
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { ContentProvider } from "@/components/ContentProvider";
import Index from "./pages/Index";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Careers from "./pages/Careers";
import TechDetails from "./pages/TechDetails";
import NotFound from "./pages/NotFound";
import HockeyProject from "./pages/HockeyProject"; 
import PetProject from "./pages/PetProject";
import WorkwearProject from "./pages/WorkwearProject";
import SportRetailProject from "./pages/SportRetailProject";
import FireCatProject from "./pages/FireCatProject";
import ClientAuth from "./pages/ClientAuth";
import ClientPortal from "./pages/ClientPortal";
import Blog from "./pages/Blog";
import BlogPostDetail from "./pages/BlogPostDetail";
import ErrorBoundary from "./components/ErrorBoundary";
import React from "react";

console.log('[App] Initializing application');

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: (failureCount, error) => {
        console.error(`[App] Query failed ${failureCount} times:`, error);
        return failureCount < 2;
      }
    }
  }
});

// Safe TooltipProvider wrapper with error handling
const SafeTooltipProvider = ({ children }: { children: React.ReactNode }) => {
  try {
    return <TooltipProvider>{children}</TooltipProvider>;
  } catch (error) {
    console.error('[App] TooltipProvider error:', error);
    return <>{children}</>;
  }
};

const App = () => {
  console.log('[App] Rendering App component');
  
  return (
    <ErrorBoundary onError={(error, errorInfo) => {
      console.error('[App] Top-level error caught:', { error, errorInfo });
    }}>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <SafeTooltipProvider>
            <ErrorBoundary fallback={
              <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-2xl font-bold mb-4">Content Loading Error</h1>
                  <p className="text-gray-600">Please refresh the page to try again.</p>
                </div>
              </div>
            }>
              <ContentProvider>
                <Toaster />
                <Sonner />
                <ErrorBoundary fallback={
                  <div className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                      <h1 className="text-2xl font-bold mb-4">Navigation Error</h1>
                      <p className="text-gray-600">Please refresh the page to try again.</p>
                    </div>
                  </div>
                }>
                  <BrowserRouter>
                    <Routes>
                      <Route path="/" element={<Index />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/careers" element={<Careers />} />
                      <Route path="/tech-details" element={<TechDetails />} />
                      <Route path="/privacy" element={<PrivacyPolicy />} />
                      <Route path="/blog" element={<Blog />} />
                      <Route path="/blog/:slug" element={<BlogPostDetail />} />
                      <Route path="/projects/hockey" element={<HockeyProject />} />
                      <Route path="/projects/pet" element={<PetProject />} />
                      <Route path="/projects/workwear" element={<WorkwearProject />} />
                      <Route path="/projects/sport-retail" element={<SportRetailProject />} />
                      <Route path="/projects/firecat" element={<FireCatProject />} />
                      <Route path="/client-auth" element={<ClientAuth />} />
                      <Route path="/client-portal" element={<ClientPortal />} />
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </BrowserRouter>
                </ErrorBoundary>
              </ContentProvider>
            </ErrorBoundary>
          </SafeTooltipProvider>
        </HelmetProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default App;
