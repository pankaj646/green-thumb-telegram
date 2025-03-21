
import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/seo/SEOHead";
import { cn } from "@/lib/utils";

// Page metadata for SEO
const pageMetadata: Record<string, { title: string; description: string }> = {
  "/": {
    title: "Das Nursery | Indoor & Outdoor Plants in Siliguri",
    description: "Find beautiful indoor and outdoor plants, seeds, pots, and gardening accessories at Das Nursery. Quality plants delivered to your doorstep in Siliguri and bulk orders for Darjeeling, Sikkim, Nepal, Bhutan, and Assam."
  },
  "/home": {
    title: "Das Nursery | Home Plants & Gardening in Siliguri",
    description: "Discover our collection of premium indoor and outdoor plants, gardening supplies, and plant care services at Das Nursery in Siliguri. Free delivery within Siliguri."
  },
  "/buy": {
    title: "Buy Plants Online in Siliguri | Das Nursery",
    description: "Shop our wide selection of indoor and outdoor plants including flowering, low-maintenance, and air purifying varieties. Located at Mamu More, Siliguri with free local delivery."
  },
  "/rent": {
    title: "Rent Plants in Siliguri | Das Nursery",
    description: "Rent beautiful plants for your home, office or events in Siliguri. Flexible rental options with maintenance included from Das Nursery."
  },
  "/services": {
    title: "Plant Care & Garden Services in Siliguri | Das Nursery",
    description: "Professional plant care and garden services in Siliguri including maintenance, landscaping, and garden design by Das Nursery experts."
  },
  "/seeds": {
    title: "Buy Plant Seeds Online in Siliguri | Das Nursery",
    description: "Quality vegetable, flower and herb seeds for your garden in Siliguri. Organic options available with detailed growing instructions from Das Nursery."
  },
  "/pots": {
    title: "Planters & Pots Collection in Siliguri | Das Nursery",
    description: "Explore our stylish collection of plant pots, planters and containers in various sizes, materials and designs at Das Nursery in Siliguri."
  },
  "/fertilizers": {
    title: "Plant Fertilizers & Soil in Siliguri | Das Nursery",
    description: "Shop premium plant fertilizers, potting soil, and plant nutrients for healthier and stronger plants at Das Nursery in Siliguri, West Bengal."
  },
  "/accessories": {
    title: "Garden Tools & Accessories in Siliguri | Das Nursery",
    description: "Essential gardening tools, accessories and supplies for plant care and garden maintenance at Das Nursery in Siliguri. Visit us at Mamu More or call +91 7319322612."
  },
  "/contact": {
    title: "Contact Das Nursery in Siliguri | Get In Touch",
    description: "Get in touch with Das Nursery plant experts for advice, support, or to place an order. Located at Mamu More, Siliguri. Call us at +91 7319322612 or +91 7583941787."
  },
  "/cart": {
    title: "Your Cart | Das Nursery Siliguri",
    description: "Review and complete your plant order from Das Nursery in Siliguri. We offer free delivery within Siliguri and bulk orders for neighboring regions."
  },
  "/confirmation": {
    title: "Order Confirmation | Das Nursery Siliguri",
    description: "Thank you for your order from Das Nursery in Siliguri. We'll process your order and deliver your plants as soon as possible."
  },
};

const MainLayout = () => {
  const location = useLocation();
  const [isPageTransitioning, setIsPageTransitioning] = useState(false);
  
  // Get metadata for current path
  const metadata = pageMetadata[location.pathname] || {
    title: "Das Nursery | Your Plant Shop in Siliguri",
    description: "Find the perfect plants, seeds, pots and accessories for your home or garden at Das Nursery in Siliguri, West Bengal. Call us at +91 7319322612 for inquiries."
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
