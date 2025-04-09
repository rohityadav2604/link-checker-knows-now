
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import VSCodeLayout from "./components/VSCodeLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import AboutBio from "./pages/AboutBio";
import AboutInterests from "./pages/AboutInterests";
import AboutEducation from "./pages/AboutEducation";
import Experience from "./pages/Experience";
import Publications from "./pages/Publications";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<VSCodeLayout />}>
            <Route path="/" element={<Home />} />
            
            <Route path="/about" element={<About />}>
              <Route index element={<AboutBio />} />
              <Route path="bio" element={<AboutBio />} />
              <Route path="interests" element={<AboutInterests />} />
              <Route path="education" element={<AboutEducation />} />
              <Route path="education/:type" element={<AboutEducation />} />
            </Route>
            
            <Route path="/experience" element={<Experience />} />
            <Route path="/publications" element={<Publications />} />
            
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:projectId" element={<ProjectDetail />} />
            
            <Route path="/contact" element={<Contact />} />
            
            {/* Redirects */}
            <Route path="/hello" element={<Navigate to="/" replace />} />
            <Route path="/about-me" element={<Navigate to="/about" replace />} />
            <Route path="/contact-me" element={<Navigate to="/contact" replace />} />
            
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
