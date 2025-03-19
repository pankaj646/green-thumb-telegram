
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Leaf, ArrowRight } from "lucide-react";

const AccessoriesPromotionBanner = () => {
  const navigate = useNavigate();
  
  return (
    <div className="mt-16 bg-leaf-50 border border-leaf-100 rounded-lg p-8 md:p-12">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="mb-6 md:mb-0 md:mr-8">
          <h2 className="text-2xl font-serif font-medium mb-2">Complete Your Garden Collection</h2>
          <p className="text-muted-foreground max-w-xl">
            Elevate your gardening experience by pairing our premium accessories with quality plants and decorative pots.
            Create a complete garden setup for a thriving indoor or outdoor space.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <Button 
            onClick={() => navigate('/buy')}
            variant="outline" 
            className="border-leaf-200 hover:bg-leaf-50 text-leaf-700"
          >
            <Leaf className="h-4 w-4 mr-2" />
            Shop Plants
          </Button>
          
          <Button 
            onClick={() => navigate('/pots')}
            className="bg-leaf-500 hover:bg-leaf-600 text-white"
          >
            Explore Pots
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AccessoriesPromotionBanner;
