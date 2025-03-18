
import { Truck, Leaf, Search } from "lucide-react";

const PlantDetailsBanner = () => {
  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-xl border border-leaf-100 shadow-soft p-8 mt-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center text-center">
          <div className="bg-leaf-50 rounded-full p-4 mb-4">
            <Truck className="h-8 w-8 text-leaf-600" />
          </div>
          <h3 className="font-serif text-lg font-medium mb-2">Fast Delivery</h3>
          <p className="text-muted-foreground">
            Doorstep delivery across Siliguri. All plants are carefully packed to ensure they arrive in perfect condition.
          </p>
        </div>
        
        <div className="flex flex-col items-center text-center">
          <div className="bg-leaf-50 rounded-full p-4 mb-4">
            <Leaf className="h-8 w-8 text-leaf-600" />
          </div>
          <h3 className="font-serif text-lg font-medium mb-2">Expert Care Guides</h3>
          <p className="text-muted-foreground">
            Every plant comes with a detailed care guide to help you keep your new plants thriving.
          </p>
        </div>
        
        <div className="flex flex-col items-center text-center">
          <div className="bg-leaf-50 rounded-full p-4 mb-4">
            <Search className="h-8 w-8 text-leaf-600" />
          </div>
          <h3 className="font-serif text-lg font-medium mb-2">Quality Guarantee</h3>
          <p className="text-muted-foreground">
            All our plants are sourced from the best nurseries and undergo quality checks before delivery.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlantDetailsBanner;
