
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star, Info, Zap, Leaf } from "lucide-react";
import { toast } from "sonner";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";

interface FertilizerCardProps {
  name: string;
  image: string;
  regularPrice: number;
  salePrice?: number;
  category: string;
  rating: number;
  benefits: string[];
  recommendedFor: string;
  bestSeller?: boolean;
}

const FertilizerCard = ({ 
  name, 
  image, 
  regularPrice, 
  salePrice, 
  category, 
  rating, 
  benefits,
  recommendedFor,
  bestSeller = false 
}: FertilizerCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const discount = salePrice ? Math.round(((regularPrice - salePrice) / regularPrice) * 100) : 0;

  const handleAddToCart = () => {
    toast.success(`${name} added to cart!`);
  };

  return (
    <Card 
      className="overflow-hidden border-leaf-100 shadow-soft group bg-white/80 backdrop-blur-sm hover:shadow-medium transition-all duration-300 h-full"
    >
      <CardContent className="p-0 flex flex-col h-full">
        <div 
          className="relative h-52 overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {bestSeller && (
            <Badge className="absolute top-2 right-2 bg-leaf-500 hover:bg-leaf-600 text-white">
              Best Seller
            </Badge>
          )}
          {salePrice && (
            <Badge className="absolute top-2 left-2 bg-soil-500 hover:bg-soil-600 text-white">
              {discount}% OFF
            </Badge>
          )}
          <motion.div 
            className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/50 to-black/0 p-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: isHovered ? 1 : 0, 
              y: isHovered ? 0 : 20 
            }}
            transition={{ duration: 0.2 }}
          >
            <Button 
              onClick={handleAddToCart}
              size="sm" 
              className="w-full bg-white text-leaf-700 hover:bg-leaf-50 border border-leaf-100"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
          </motion.div>
        </div>
        <div className="p-4 flex flex-col flex-grow">
          <div className="flex justify-between items-start mb-1">
            <Badge variant="outline" className="text-xs border-leaf-200 bg-leaf-50 text-leaf-700">
              {category}
            </Badge>
            <div className="flex items-center">
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
              <span className="text-xs font-medium">{rating}</span>
            </div>
          </div>
          <h3 className="font-serif text-lg font-medium mt-2 mb-1">{name}</h3>
          
          <div className="flex items-center gap-2 mt-1 mb-2">
            {salePrice ? (
              <>
                <span className="font-medium text-leaf-700">₹{salePrice}</span>
                <span className="text-sm text-muted-foreground line-through">₹{regularPrice}</span>
              </>
            ) : (
              <span className="font-medium text-leaf-700">₹{regularPrice}</span>
            )}
          </div>
          
          {benefits.length > 0 && (
            <div className="mt-2 mb-3">
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-7 px-2 text-xs flex gap-1 text-muted-foreground hover:text-leaf-600 -ml-2">
                    <Info className="h-3.5 w-3.5" />
                    Benefits
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-72">
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Key Benefits:</h4>
                    <ul className="text-sm space-y-1">
                      {benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Zap className="h-3.5 w-3.5 text-soil-500 mt-0.5 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          )}
          
          <div className="mt-auto pt-2 border-t border-leaf-100">
            <div className="flex items-center">
              <Leaf className="h-4 w-4 text-leaf-500 mr-2 flex-shrink-0" />
              <span className="text-xs text-muted-foreground">Recommended for: {recommendedFor}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FertilizerCard;
