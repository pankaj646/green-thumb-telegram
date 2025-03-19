
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star, Info, CheckCheck, Leaf, FlowerIcon, TreePine } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useCart } from "@/context/CartContext";

interface AccessoryCardProps {
  accessory: {
    id: number;
    name: string;
    image: string;
    regularPrice: number;
    salePrice: number | null;
    category: string;
    rating: number;
    reviews: number;
    bestFor: string[];
    bestSeller?: boolean;
  };
}

// Map for plant compatibility icons
const plantIconMap: Record<string, JSX.Element> = {
  "Indoor Plants": <Leaf className="h-4 w-4 text-leaf-500" />,
  "Outdoor Plants": <TreePine className="h-4 w-4 text-leaf-500" />,
  "Herbs": <FlowerIcon className="h-4 w-4 text-leaf-500" />,
  "All Plants": <Leaf className="h-4 w-4 text-leaf-500" />,
  "Hanging Plants": <Leaf className="h-4 w-4 text-leaf-500" />,
  "Climbing Plants": <Leaf className="h-4 w-4 text-leaf-500" />,
  "Seedlings": <Leaf className="h-4 w-4 text-leaf-500" />,
  "Tomatoes": <Leaf className="h-4 w-4 text-leaf-500" />,
  "Tall Plants": <TreePine className="h-4 w-4 text-leaf-500" />,
  "Home Garden": <Leaf className="h-4 w-4 text-leaf-500" />,
  "Balcony Garden": <Leaf className="h-4 w-4 text-leaf-500" />,
  "Vacation Care": <Leaf className="h-4 w-4 text-leaf-500" />,
  "Forgetful Owners": <Leaf className="h-4 w-4 text-leaf-500" />,
  "Apartment Decor": <Leaf className="h-4 w-4 text-leaf-500" />,
  "Small Spaces": <Leaf className="h-4 w-4 text-leaf-500" />,
  "Repotting": <Leaf className="h-4 w-4 text-leaf-500" />,
};

const AccessoryCard = ({ accessory }: AccessoryCardProps) => {
  const [showDetails, setShowDetails] = useState(false);
  const { addItem } = useCart();
  
  const handleAddToCart = () => {
    addItem({
      id: accessory.id,
      name: accessory.name,
      image: accessory.image,
      price: accessory.salePrice || accessory.regularPrice,
      category: accessory.category,
      type: "accessory"
    });
  };
  
  const discount = accessory.salePrice
    ? Math.round(((accessory.regularPrice - accessory.salePrice) / accessory.regularPrice) * 100)
    : 0;

  return (
    <Card className="overflow-hidden border-leaf-100 shadow-soft hover:shadow-medium transition-all duration-300 group bg-white/95 backdrop-blur-sm">
      <CardContent className="p-0">
        <div className="relative overflow-hidden">
          <div className="h-60 overflow-hidden">
            <img 
              src={accessory.image} 
              alt={accessory.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          
          <div className="absolute top-0 left-0 w-full flex justify-between p-3">
            {accessory.bestSeller && (
              <Badge className="bg-leaf-500 hover:bg-leaf-600 text-white font-medium">
                Best Seller
              </Badge>
            )}
            
            {accessory.salePrice && (
              <Badge className="bg-red-500 text-white font-medium ml-auto">
                {discount}% OFF
              </Badge>
            )}
          </div>
        </div>
        
        <div className="p-5">
          <div className="mb-2">
            <Badge variant="outline" className="text-xs px-2.5 py-0.5 border-leaf-200 bg-leaf-50 text-leaf-700">
              {accessory.category}
            </Badge>
          </div>
          
          <h3 className="font-serif text-xl font-semibold mb-2 line-clamp-2 group-hover:text-leaf-600 transition-colors">
            {accessory.name}
          </h3>
          
          <div className="flex items-center gap-2 mb-3">
            {accessory.salePrice ? (
              <>
                <span className="text-lg font-bold text-leaf-700">₹{accessory.salePrice}</span>
                <span className="text-sm text-muted-foreground line-through">₹{accessory.regularPrice}</span>
              </>
            ) : (
              <span className="text-lg font-bold text-leaf-700">₹{accessory.regularPrice}</span>
            )}
          </div>
          
          <div className="flex items-center mb-4">
            <div className="flex items-center bg-amber-50 px-2 py-1 rounded">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400 mr-1" />
              <span className="text-sm font-medium text-amber-700">{accessory.rating}</span>
            </div>
            <span className="text-xs text-muted-foreground ml-2">
              ({accessory.reviews} reviews)
            </span>
          </div>
          
          <div className="mb-4">
            <p className="text-xs font-medium text-muted-foreground mb-1.5">Best For:</p>
            <div className="flex flex-wrap gap-1.5">
              <TooltipProvider delayDuration={300}>
                {accessory.bestFor.map((item, index) => (
                  <Tooltip key={index}>
                    <TooltipTrigger asChild>
                      <div className="cursor-help p-1.5 rounded-full bg-leaf-50 border border-leaf-100">
                        {plantIconMap[item] || <Leaf className="h-4 w-4 text-leaf-500" />}
                      </div>
                    </TooltipTrigger>
                    <TooltipContent side="top" className="bg-white/95 backdrop-blur-sm border-leaf-100">
                      <p className="text-xs">{item}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </TooltipProvider>
            </div>
          </div>
          
          <motion.div
            className="overflow-hidden"
            animate={{ height: showDetails ? "auto" : "0px" }}
            transition={{ duration: 0.3 }}
          >
            <div className="pt-1 pb-3">
              <div>
                <p className="text-xs font-medium text-leaf-700 mb-1">Details:</p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  {accessory.bestFor.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCheck className="h-3 w-3 text-leaf-500 mr-1 mt-0.5" />
                      <span>Perfect for {benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
          
          <div className="flex gap-2 mt-2">
            <Button
              variant="outline"
              size="sm"
              className="flex-1 h-10 border-leaf-200 hover:bg-leaf-50 text-leaf-700"
              onClick={() => setShowDetails(!showDetails)}
            >
              <Info className="h-4 w-4 mr-1.5" />
              {showDetails ? "Less Info" : "More Info"}
            </Button>
            
            <Button 
              size="sm" 
              className="flex-1 h-10 bg-leaf-500 hover:bg-leaf-600 text-white"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="h-4 w-4 mr-1.5" />
              Add to Cart
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AccessoryCard;
