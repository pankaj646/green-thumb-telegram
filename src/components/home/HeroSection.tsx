
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Truck, Leaf, Gift } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-leaf-pattern opacity-5 pointer-events-none" />
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge variant="outline" className="px-3 py-1 border-leaf-200 bg-leaf-50 text-leaf-700 rounded-full">
              Siliguri's #1 Online Plant Store
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium tracking-tight leading-tight">
              Your Green Companion in <span className="text-leaf-600">Siliguri</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Bringing Nature to Your Home, Office & Events. We offer fresh, healthy plants with fast delivery and telegram notifications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="bg-leaf-500 hover:bg-leaf-600 text-white transition-all duration-300 hover:shadow-leaf">
                <Link to="/buy">Buy Plants</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-leaf-200 hover:bg-leaf-50 text-leaf-700 transition-all duration-300">
                <Link to="/rent">Rent Plants</Link>
              </Button>
            </div>
            <div className="flex flex-wrap gap-6 pt-2">
              <div className="flex items-center gap-2">
                <Truck className="h-5 w-5 text-leaf-500" />
                <span className="text-sm text-muted-foreground">Fast Siliguri Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="h-5 w-5 text-leaf-500" />
                <span className="text-sm text-muted-foreground">Premium Quality Plants</span>
              </div>
              <div className="flex items-center gap-2">
                <Gift className="h-5 w-5 text-leaf-500" />
                <span className="text-sm text-muted-foreground">Telegram Updates</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-full bg-leaf-100/50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] animate-gentle-pulse" />
            <img 
              src="https://images.unsplash.com/photo-1545165375-f1c0d3b53388?q=80&w=1000&auto=format&fit=crop" 
              alt="Beautiful plant collection" 
              className="relative z-10 w-full h-auto object-cover rounded-2xl shadow-soft animate-float"
            />
            <div className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-soft z-20 border border-leaf-100 animate-float">
              <div className="flex items-center gap-3">
                <div className="bg-leaf-500 rounded-full p-2">
                  <Leaf className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-medium">Trusted by</p>
                  <p className="text-leaf-700 font-bold">1000+ Customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
