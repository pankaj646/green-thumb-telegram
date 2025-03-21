
import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/seo/SEOHead";
import { cn } from "@/lib/utils";

// Page metadata for SEO
const pageMetadata: Record<string, { title: string; description: string }> = {
  "/": {
    title: "Green Thumb | Indoor & Outdoor Plants",
    description: "Find beautiful indoor and outdoor plants, seeds, pots, and gardening accessories at Green Thumb. Quality plants delivered to your doorstep."
  },
  "/home": {
    title: "Green Thumb | Home Plants & Gardening",
    description: "Discover our collection of premium indoor and outdoor plants, gardening supplies, and plant care services at Green Thumb."
  },
  "/buy": {
    title: "Buy Plants Online | Green Thumb",
    description: "Shop our wide selection of indoor and outdoor plants including flowering, low-maintenance, and air purifying varieties."
  },
  "/rent": {
    title: "Rent Plants | Green Thumb",
    description: "Rent beautiful plants for your home, office or events. Flexible rental options with maintenance included."
  },
  "/services": {
    title: "Plant Care & Garden Services | Green Thumb",
    description: "Professional plant care and garden services including maintenance, landscaping, and garden design."
  },
  "/seeds": {
    title: "Buy Plant Seeds Online | Green Thumb",
    description: "Quality vegetable, flower and herb seeds for your garden. Organic options available with detailed growing instructions."
  },
  "/pots": {
    title: "Planters & Pots Collection | Green Thumb",
    description: "Explore our stylish collection of plant pots, planters and containers in various sizes, materials and designs."
  },
  "/fertilizers": {
    title: "Plant Fertilizers & Soil | Green Thumb",
    description: "Shop premium plant fertilizers, potting soil, and plant nutrients for healthier and stronger plants."
  },
  "/accessories": {
    title: "Garden Tools & Accessories | Green Thumb",
    description: "Essential gardening tools, accessories and supplies for plant care and garden maintenance."
  },
  "/contact": {
    title: "Contact Us | Green Thumb",
    description: "Get in touch with our plant experts for advice, support, or to place an order. We're here to help with all your gardening needs."
  },
};

const MainLayout = () => {
  const location = useLocation();
  const [isPageTransitioning, setIsPageTransitioning] = useState(false);
  
  // Get metadata for current path
  const metadata = pageMetadata[location.pathname] || {
    title: "Green Thumb | Your Plant Shop",
    description: "Find the perfect plants, seeds, pots and accessories for your home or garden."
  };
  
  useEffect(() => {
    // Scroll to top when location changes
    window.scrollTo(0, 0);
    
    setIsPageTransitioning(true);
    const timer = setTimeout(() => setIsPageTransitioning(false), 100);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SEOHead
        title={metadata.title}
        description={metadata.description}
      />
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
