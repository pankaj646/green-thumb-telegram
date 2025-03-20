
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Leaf, ArrowRight, Truck, ShoppingBag } from "lucide-react";

const SeedsPromotionBanner = () => {
  const navigate = useNavigate();
  
  return (
    <div className="mt-16 bg-gradient-to-r from-leaf-50 to-amber-50 border border-leaf-100 rounded-lg p-8 md:p-12">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="mb-6 md:mb-0 md:mr-8">
          <h2 className="text-2xl font-serif font-medium mb-2">Complete Your Garden Essentials</h2>
          <p className="text-muted-foreground max-w-xl">
            Get everything you need for successful growing. Our seeds pair perfectly with our premium 
            soils, fertilizers, and gardening tools for optimal plant health and growth.
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
      
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 flex items-center">
          <div className="bg-leaf-50 p-3 rounded-full mr-4">
            <Truck className="h-5 w-5 text-leaf-600" />
          </div>
          <div>
            <h3 className="font-medium mb-1">Fast Delivery</h3>
            <p className="text-sm text-muted-foreground">Across Siliguri</p>
          </div>
        </div>
        
        <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 flex items-center">
          <div className="bg-leaf-50 p-3 rounded-full mr-4">
            <ShoppingBag className="h-5 w-5 text-leaf-600" />
          </div>
          <div>
            <h3 className="font-medium mb-1">Bulk Orders</h3>
            <p className="text-sm text-muted-foreground">Available outside Siliguri</p>
          </div>
        </div>
        
        <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 flex items-center">
          <div className="bg-leaf-50 p-3 rounded-full mr-4">
            <Leaf className="h-5 w-5 text-leaf-600" />
          </div>
          <div>
            <h3 className="font-medium mb-1">Quality Guaranteed</h3>
            <p className="text-sm text-muted-foreground">High germination rate</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeedsPromotionBanner;
