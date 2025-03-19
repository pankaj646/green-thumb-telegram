
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Context
import { CartProvider } from "./context/CartContext";

// Pages
import Home from "./pages/Home";
import BuyPlants from "./pages/BuyPlants";
import RentPlants from "./pages/RentPlants";
import BookServices from "./pages/BookServices";
import Confirmation from "./pages/Confirmation";
import Fertilizers from "./pages/Fertilizers";
import Pots from "./pages/Pots";
import Seeds from "./pages/Seeds";
import Accessories from "./pages/Accessories";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Index from "./pages/Index";

// Layouts
import MainLayout from "./layouts/MainLayout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CartProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Index />} />
              <Route path="/home" element={<Home />} />
              <Route path="/buy" element={<BuyPlants />} />
              <Route path="/rent" element={<RentPlants />} />
              <Route path="/services" element={<BookServices />} />
              <Route path="/fertilizers" element={<Fertilizers />} />
              <Route path="/pots" element={<Pots />} />
              <Route path="/seeds" element={<Seeds />} />
              <Route path="/accessories" element={<Accessories />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/confirmation" element={<Confirmation />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </CartProvider>
  </QueryClientProvider>
);

export default App;
