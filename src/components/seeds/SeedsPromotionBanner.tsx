
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Leaf, ArrowRight } from "lucide-react";

const SeedsPromotionBanner = () => {
  const navigate = useNavigate();
  
  return (
    <div className="mt-16 bg-leaf-50 border border-leaf-100 rounded-lg p-8 md:p-12">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="mb-6 md:mb-0 md:mr-8">
          <h2 className="text-2xl font-serif font-medium mb-2">Grow Your Own Garden</h2>
          <p className="text-muted-foreground max-w-xl">
            Complete your gardening experience with quality tools, pots, and plant care products.
            Our seeds pair perfectly with our premium soils and fertilizers for optimal growth.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <Button 
            onClick={() => navigate('/fertilizers')}
            variant="outline" 
            className="border-leaf-200 hover:bg-leaf-50 text-leaf-700"
          >
            <Leaf className="h-4 w-4 mr-2" />
            Shop Fertilizers
          </Button>
          
          <Button 
            onClick={() => navigate('/accessories')}
            className="bg-leaf-500 hover:bg-leaf-600 text-white"
          >
            Explore Accessories
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SeedsPromotionBanner;
