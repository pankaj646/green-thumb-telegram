
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star, Plus, CheckCheck } from "lucide-react";
import { useCart } from "@/context/CartContext";

interface FertilizerCardProps {
  id?: number;
  name: string;
  image: string;
  regularPrice: number;
  salePrice: number | null;
  category: string;
  rating: number;
  benefits: string[];
  recommendedFor: string;
  bestSeller?: boolean;
}

const FertilizerCard = ({
  id = Math.floor(Math.random() * 1000), // Use a proper ID in production
  name,
  image,
  regularPrice,
  salePrice,
  category,
  rating,
  benefits,
  recommendedFor,
  bestSeller = false,
}: FertilizerCardProps) => {
  const [showDetails, setShowDetails] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      id,
      name,
      image,
      price: salePrice || regularPrice,
      category,
      type: "fertilizer"
    });
  };

  const discount = salePrice
    ? Math.round(((regularPrice - salePrice) / regularPrice) * 100)
    : 0;

  return (
    <Card className="overflow-hidden border-leaf-100 shadow-soft group bg-white/80 backdrop-blur-sm hover:shadow-medium transition-all duration-300">
      <CardContent className="p-0">
        <div 
          className="relative h-48 overflow-hidden cursor-pointer"
          onClick={() => setShowDetails(!showDetails)}
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
            <Badge className="absolute top-2 left-2 bg-red-500 text-white">
              {discount}% OFF
            </Badge>
          )}
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
          
          <div className="flex items-center gap-2 mb-2">
            {salePrice ? (
              <>
                <span className="font-medium text-leaf-700">₹{salePrice}</span>
                <span className="text-sm text-muted-foreground line-through">₹{regularPrice}</span>
              </>
            ) : (
              <span className="font-medium text-leaf-700">₹{regularPrice}</span>
            )}
          </div>
          
          <motion.div
            className="overflow-hidden"
            animate={{ height: showDetails ? "auto" : "0px" }}
            transition={{ duration: 0.3 }}
          >
            <div className="pt-2 pb-3 space-y-2">
              <div>
                <p className="text-xs font-medium text-leaf-700 mb-1">Benefits:</p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCheck className="h-3 w-3 text-leaf-500 mr-1 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <p className="text-xs font-medium text-leaf-700 mb-1">Recommended for:</p>
                <p className="text-xs text-muted-foreground">{recommendedFor}</p>
              </div>
            </div>
          </motion.div>
          
          <div className="flex gap-2 mt-2">
            <Button
              variant="outline"
              size="sm"
              className="flex-1 text-xs h-8 border-leaf-200 hover:bg-leaf-50 text-leaf-700"
              onClick={() => setShowDetails(!showDetails)}
            >
              {showDetails ? "Less Info" : "More Info"}
            </Button>
            
            <Button 
              size="sm" 
              className="flex-1 text-xs h-8 bg-leaf-500 hover:bg-leaf-600 text-white"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="h-3 w-3 mr-1" />
              Add to Cart
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FertilizerCard;
