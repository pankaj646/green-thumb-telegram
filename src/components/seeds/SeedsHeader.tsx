
import { Button } from "@/components/ui/button";
import { Sprout, ShoppingCart, Truck, Package } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SeedsHeader = () => {
  const navigate = useNavigate();
  
  return (
    <div className="text-center mb-10">
      <div className="inline-flex items-center justify-center p-2 bg-leaf-50 rounded-full mb-4">
        <Sprout className="h-6 w-6 text-leaf-500" />
      </div>
      
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Shop the Best Seeds for Your Home Garden & Farm – Fast Delivery Available!
      </h1>
      
      <p className="text-muted-foreground max-w-3xl mx-auto text-lg mb-8">
        Discover premium quality vegetable, fruit, herb, and flower seeds for your garden. 
        Whether you're a beginner or an expert gardener, find the perfect seeds for every 
        season and location. Bulk orders available outside Siliguri!
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button 
          size="lg" 
          className="bg-leaf-500 hover:bg-leaf-600 text-white"
          onClick={() => document.getElementById('seed-listings')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <ShoppingCart className="h-5 w-5 mr-2" />
          Shop Seeds Now
        </Button>
        
        <Button 
          size="lg" 
          variant="outline"
          className="border-leaf-200 text-leaf-700 hover:bg-leaf-50"
        >
          <Truck className="h-5 w-5 mr-2" />
          Fast Delivery Across Siliguri
        </Button>
        
        <Button 
          size="lg" 
          variant="outline"
          className="border-leaf-200 text-leaf-700 hover:bg-leaf-50"
        >
          <Package className="h-5 w-5 mr-2" />
          Bulk Orders Available
        </Button>
      </div>
    </div>
  );
};

export default SeedsHeader;
