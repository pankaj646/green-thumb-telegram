
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Leaf, Flower, TreesIcon } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const PlantCareSection = () => {
  return (
    <AnimatedSection className="py-20 px-6 md:px-12 bg-cream-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-leaf-pattern opacity-5 pointer-events-none" />
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative">
            <img 
              src="https://images.unsplash.com/photo-1623241899289-e9a64204c1e2?q=80&w=1000&auto=format&fit=crop" 
              alt="Plant care expert" 
              className="rounded-2xl shadow-xl object-cover h-[500px] w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-soft z-20 border border-leaf-100 animate-float max-w-[240px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-leaf-500 rounded-full p-2">
                  <Heart className="h-5 w-5 text-white" />
                </div>
                <p className="font-medium text-leaf-700">Plant Care Experts</p>
              </div>
              <p className="text-sm text-muted-foreground">
                Our professionals have 5+ years of experience in plant care and maintenance
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <Badge variant="outline" className="px-3 py-1 border-leaf-200 bg-leaf-50 text-leaf-700 rounded-full">
              Professional Services
            </Badge>
            <h2 className="text-3xl md:text-4xl font-serif font-medium tracking-tight leading-tight">
              Expert Plant Care at Your <span className="text-leaf-600">Doorstep</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Our expert horticulturists visit your home or office to provide professional plant care services, ensuring your green friends thrive.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-leaf-100 rounded-full p-2">
                  <Leaf className="h-5 w-5 text-leaf-600" />
                </div>
                <p className="font-medium">Plant Health Assessment</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-leaf-100 rounded-full p-2">
                  <Flower className="h-5 w-5 text-leaf-600" />
                </div>
                <p className="font-medium">Disease Treatment</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-leaf-100 rounded-full p-2">
                  <TreesIcon className="h-5 w-5 text-leaf-600" />
                </div>
                <p className="font-medium">Pruning & Maintenance</p>
              </div>
            </div>
            <div className="pt-4">
              <Button asChild size="lg" className="bg-leaf-500 hover:bg-leaf-600 text-white transition-all duration-300 hover:shadow-leaf">
                <Link to="/services">
                  <Heart className="mr-2 h-5 w-5" /> Book Plant Care Service
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default PlantCareSection;
