
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star } from "lucide-react";
import { toast } from "sonner";

interface PlantCardProps {
  name: string;
  image: string;
  price: number;
  category: string;
  rating: number;
  bestSeller?: boolean;
}

const PlantCard = ({ 
  name, 
  image, 
  price, 
  category, 
  rating, 
  bestSeller = false 
}: PlantCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = () => {
    toast.success(`${name} added to cart!`);
  };

  return (
    <Card 
      className="overflow-hidden border-leaf-100 shadow-soft group bg-white/80 backdrop-blur-sm hover:shadow-medium transition-all duration-300"
    >
      <CardContent className="p-0">
        <div 
          className="relative h-60 overflow-hidden"
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
        <div className="p-4">
          <div className="flex justify-between items-start mb-1">
            <Badge variant="outline" className="text-xs border-leaf-200 bg-leaf-50 text-leaf-700">
              {category}
            </Badge>
            <div className="flex items-center">
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
              <span className="text-xs font-medium">{rating}</span>
            </div>
          </div>
          <h3 className="font-serif text-lg font-medium mt-1 mb-1">{name}</h3>
          <p className="font-medium text-leaf-700">₹{price}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default PlantCard;
