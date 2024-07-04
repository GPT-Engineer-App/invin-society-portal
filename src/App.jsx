import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, Info, Briefcase, Star, Phone, HelpCircle, Users } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/navbar"; // Change to navbar layout
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import SuccessStories from "./pages/SuccessStories.jsx";
import Contact from "./pages/Contact.jsx";
import FAQ from "./pages/FAQ.jsx";
import Careers from "./pages/Careers.jsx";

const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "Über uns",
    to: "/about",
    icon: <Info className="h-4 w-4" />,
  },
  {
    title: "Dienstleistungen",
    to: "/services",
    icon: <Briefcase className="h-4 w-4" />,
  },
  {
    title: "Erfolgsgeschichten",
    to: "/success-stories",
    icon: <Star className="h-4 w-4" />,
  },
  {
    title: "Kontakt",
    to: "/contact",
    icon: <Phone className="h-4 w-4" />,
  },
  {
    title: "FAQ",
    to: "/faq",
    icon: <HelpCircle className="h-4 w-4" />,
  },
  {
    title: "Karriere",
    to: "/careers",
    icon: <Users className="h-4 w-4" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="about" element={<About />} />
              <Route path="services" element={<Services />} />
              <Route path="success-stories" element={<SuccessStories />} />
              <Route path="contact" element={<Contact />} />
              <Route path="faq" element={<FAQ />} />
              <Route path="careers" element={<Careers />} />
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;