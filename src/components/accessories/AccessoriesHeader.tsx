
import { Badge } from "@/components/ui/badge";
import { Truck, Leaf, MessageCircle } from "lucide-react";

const AccessoriesHeader = () => {
  return (
    <div className="text-center mb-8">
      <Badge variant="outline" className="px-3 py-1 border-leaf-200 bg-leaf-50 text-leaf-700 rounded-full">
        Shop Accessories
      </Badge>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium mb-4 mt-3">
        Essential Accessories for Your Plant Family
      </h1>
      <p className="text-muted-foreground max-w-3xl mx-auto">
        Complete your plant care routine with our premium selection of gardening tools, plant supports, 
        watering accessories, grow lights, and decorative items to help your plants thrive.
      </p>
      
      <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
        <div className="flex items-center bg-leaf-50 text-leaf-700 rounded-full px-4 py-2">
          <Truck className="h-4 w-4 mr-2" />
          <span className="text-sm">Fast delivery across Siliguri</span>
        </div>
        
        <div className="flex items-center bg-leaf-50 text-leaf-700 rounded-full px-4 py-2">
          <Leaf className="h-4 w-4 mr-2" />
          <span className="text-sm">Premium quality accessories</span>
        </div>
        
        <div className="flex items-center bg-leaf-50 text-leaf-700 rounded-full px-4 py-2">
          <MessageCircle className="h-4 w-4 mr-2" />
          <span className="text-sm">Expert advice available via Telegram</span>
        </div>
      </div>
    </div>
  );
};

export default AccessoriesHeader;
