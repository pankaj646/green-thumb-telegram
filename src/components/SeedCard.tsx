
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Star, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

interface SeedCardProps {
  seed: {
    id: number;
    name: string;
    image: string;
    regularPrice: number;
    salePrice: number | null;
    category: string;
    rating: number;
    reviews: number;
    plantingTime: string;
    daysToGerminate: string;
    bestSeller?: boolean;
  };
}

const SeedCard = ({ seed }: SeedCardProps) => {
  const { toast } = useToast();
  const { addItem } = useCart();
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = () => {
    addItem({
      id: seed.id,
      name: seed.name,
      price: seed.salePrice || seed.regularPrice,
      image: seed.image,
      type: "seed"
    });
    
    toast({
      title: "Added to cart",
      description: `${seed.name} has been added to your cart.`,
      duration: 3000,
    });
  };

  return (
    <Card 
      className="overflow-hidden transition-all duration-300 hover:shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-60 overflow-hidden">
        <img 
          src={seed.image} 
          alt={seed.name}
          className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        
        {seed.bestSeller && (
          <Badge className="absolute top-3 left-3 bg-leaf-500 hover:bg-leaf-600 text-white">
            Best Seller
          </Badge>
        )}
        
        {seed.salePrice && (
          <Badge className="absolute top-3 right-3 bg-red-500 hover:bg-red-600 text-white">
            Sale
          </Badge>
        )}
      </div>
      
      <CardContent className="p-5">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-medium text-lg">{seed.name}</h3>
        </div>
        
        <div className="flex items-center text-amber-500 mb-3">
          <Star className="fill-current h-4 w-4" />
          <span className="ml-1 text-sm">{seed.rating}</span>
          <span className="text-muted-foreground text-xs ml-1">({seed.reviews} reviews)</span>
        </div>
        
        <div className="text-sm text-muted-foreground mb-3">
          <div className="flex justify-between mb-1">
            <span>Category:</span>
            <span className="font-medium text-foreground">{seed.category}</span>
          </div>
          <div className="flex justify-between mb-1">
            <span>Planting Time:</span>
            <span className="font-medium text-foreground">{seed.plantingTime}</span>
          </div>
          <div className="flex justify-between">
            <span>Germination:</span>
            <span className="font-medium text-foreground">{seed.daysToGerminate}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between mt-4">
          <div>
            {seed.salePrice ? (
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-leaf-600">₹{seed.salePrice}</span>
                <span className="text-sm text-muted-foreground line-through">₹{seed.regularPrice}</span>
              </div>
            ) : (
              <span className="text-lg font-bold text-leaf-600">₹{seed.regularPrice}</span>
            )}
          </div>
          
          <Button 
            onClick={handleAddToCart} 
            size="sm" 
            className="bg-leaf-500 hover:bg-leaf-600 text-white"
          >
            <ShoppingCart className="h-4 w-4 mr-1" />
            Add
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SeedCard;
