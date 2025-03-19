
import { Badge } from "@/components/ui/badge";
import { Truck, Leaf, MessageCircle } from "lucide-react";

const PotsHeader = () => {
  return (
    <div className="text-center mb-8">
      <Badge variant="outline" className="px-3 py-1 border-leaf-200 bg-leaf-50 text-leaf-700 rounded-full">
        Shop Pots
      </Badge>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium mb-4 mt-3">
        Upgrade Your Plant Decor with Stunning Pots
      </h1>
      <p className="text-muted-foreground max-w-3xl mx-auto">
        Give your plants a stylish new home with our premium ceramic, terracotta, hanging, and decorative pots.
        Whether you're looking for a minimalist touch or a bold statement piece, we've got the perfect pot for every plant!
      </p>
      
      <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
        <div className="flex items-center bg-leaf-50 text-leaf-700 rounded-full px-4 py-2">
          <Truck className="h-4 w-4 mr-2" />
          <span className="text-sm">Fast delivery across Siliguri</span>
        </div>
        
        <div className="flex items-center bg-leaf-50 text-leaf-700 rounded-full px-4 py-2">
          <Leaf className="h-4 w-4 mr-2" />
          <span className="text-sm">Bulk orders available outside Siliguri</span>
        </div>
        
        <div className="flex items-center bg-leaf-50 text-leaf-700 rounded-full px-4 py-2">
          <MessageCircle className="h-4 w-4 mr-2" />
          <span className="text-sm">Instant order confirmation via Telegram</span>
        </div>
      </div>
    </div>
  );
};

export default PotsHeader;
