
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { toast } from "sonner";

// Pages
import Home from "./pages/Home";
import BuyPlants from "./pages/BuyPlants";
import RentPlants from "./pages/RentPlants";
import BookServices from "./pages/BookServices";
import Confirmation from "./pages/Confirmation";
import Fertilizers from "./pages/Fertilizers";
import Pots from "./pages/Pots";
import NotFound from "./pages/NotFound";

// Layouts
import MainLayout from "./layouts/MainLayout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/buy" element={<BuyPlants />} />
            <Route path="/rent" element={<RentPlants />} />
            <Route path="/services" element={<BookServices />} />
            <Route path="/fertilizers" element={<Fertilizers />} />
            <Route path="/pots" element={<Pots />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
