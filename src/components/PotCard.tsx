
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star, Info, Leaf, FlowerIcon, TreePine } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useCart } from "@/context/CartContext";

interface PotCardProps {
  pot: {
    id: number;
    name: string;
    image: string;
    regularPrice: number;
    salePrice: number | null;
    category: string;
    rating: number;
    reviews?: number;
    bestFor: string;
    size: string;
    bestSeller?: boolean;
  };
}

// Map for plant compatibility icons
const plantIconMap: Record<string, JSX.Element> = {
  "Snake Plant": <Leaf className="h-4 w-4 text-leaf-500" />,
  "Succulents": <Leaf className="h-4 w-4 text-leaf-500" />,
  "Aloe Vera": <Leaf className="h-4 w-4 text-leaf-500" />,
  "Herbs": <FlowerIcon className="h-4 w-4 text-leaf-500" />,
  "Cactus": <TreePine className="h-4 w-4 text-leaf-500" />,
  "Money Plant": <Leaf className="h-4 w-4 text-leaf-500" />,
  "Spider Plant": <Leaf className="h-4 w-4 text-leaf-500" />,
  "Ivy": <Leaf className="h-4 w-4 text-leaf-500" />,
  "Fiddle Leaf Fig": <TreePine className="h-4 w-4 text-leaf-500" />,
  "Monstera": <Leaf className="h-4 w-4 text-leaf-500" />,
  "Palm": <TreePine className="h-4 w-4 text-leaf-500" />,
  "Peace Lily": <FlowerIcon className="h-4 w-4 text-leaf-500" />,
  "Bird of Paradise": <FlowerIcon className="h-4 w-4 text-leaf-500" />,
};

const PotCard = ({ pot }: PotCardProps) => {
  const [showDetails, setShowDetails] = useState(false);
  const { addItem } = useCart();
  
  const handleAddToCart = () => {
    addItem({
      id: pot.id,
      name: pot.name,
      image: pot.image,
      price: pot.salePrice || pot.regularPrice,
      category: pot.category,
      type: "pot"
    });
  };
  
  const discount = pot.salePrice
    ? Math.round(((pot.regularPrice - pot.salePrice) / pot.regularPrice) * 100)
    : 0;
    
  // Split the bestFor string to get individual plants
  const bestForPlants = pot.bestFor.split(', ');

  return (
    <Card className="overflow-hidden border-leaf-100 shadow-soft hover:shadow-medium transition-all duration-300 group bg-white/95 backdrop-blur-sm">
      <CardContent className="p-0">
        <div className="relative overflow-hidden">
          <div className="h-60 overflow-hidden">
            <img 
              src={pot.image} 
              alt={pot.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          
          <div className="absolute top-0 left-0 w-full flex justify-between p-3">
            {pot.bestSeller && (
              <Badge className="bg-leaf-500 hover:bg-leaf-600 text-white font-medium">
                Best Seller
              </Badge>
            )}
            
            {pot.salePrice && (
              <Badge className="bg-red-500 text-white font-medium ml-auto">
                {discount}% OFF
              </Badge>
            )}
          </div>
        </div>
        
        <div className="p-5">
          <div className="flex justify-between items-start mb-2">
            <Badge variant="outline" className="text-xs px-2.5 py-0.5 border-leaf-200 bg-leaf-50 text-leaf-700">
              {pot.size} • {pot.category}
            </Badge>
            
            <div className="flex items-center bg-amber-50 px-2 py-1 rounded">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400 mr-1" />
              <span className="text-sm font-medium text-amber-700">{pot.rating}</span>
              <span className="text-xs text-muted-foreground ml-1">
                ({pot.reviews || '42'} reviews)
              </span>
            </div>
          </div>
          
          <h3 className="font-serif text-xl font-semibold mb-2 line-clamp-2 group-hover:text-leaf-600 transition-colors">
            {pot.name}
          </h3>
          
          <div className="flex items-center gap-2 mb-4">
            {pot.salePrice ? (
              <>
                <span className="text-lg font-bold text-leaf-700">₹{pot.salePrice}</span>
                <span className="text-sm text-muted-foreground line-through">₹{pot.regularPrice}</span>
              </>
            ) : (
              <span className="text-lg font-bold text-leaf-700">₹{pot.regularPrice}</span>
            )}
          </div>
          
          <div className="mb-4">
            <p className="text-xs font-medium text-muted-foreground mb-1.5">Best For:</p>
            <div className="flex flex-wrap gap-1.5">
              <TooltipProvider delayDuration={300}>
                {bestForPlants.map((plant, index) => (
                  <Tooltip key={index}>
                    <TooltipTrigger asChild>
                      <div className="cursor-help p-1.5 rounded-full bg-leaf-50 border border-leaf-100">
                        {plantIconMap[plant.trim()] || <Leaf className="h-4 w-4 text-leaf-500" />}
                      </div>
                    </TooltipTrigger>
                    <TooltipContent side="top" className="bg-white/95 backdrop-blur-sm border-leaf-100">
                      <p className="text-xs">{plant.trim()}</p>
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
              <p className="text-xs text-muted-foreground">
                This {pot.size.toLowerCase()} {pot.category.toLowerCase()} pot is perfect for {pot.bestFor.toLowerCase()}. 
                It features a beautiful design that complements any home decor while providing the ideal environment for your plants to thrive.
              </p>
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

export default PotCard;
