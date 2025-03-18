
import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

const MainLayout = () => {
  const location = useLocation();
  const [isPageTransitioning, setIsPageTransitioning] = useState(false);
  
  useEffect(() => {
    // Scroll to top when location changes
    window.scrollTo(0, 0);
    
    setIsPageTransitioning(true);
    const timer = setTimeout(() => setIsPageTransitioning(false), 100);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className={cn(
        "flex-1 w-full transition-opacity duration-500 ease-in-out",
        isPageTransitioning ? "opacity-0" : "opacity-100 animate-fade-in"
      )}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
