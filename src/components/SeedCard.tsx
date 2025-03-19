
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ShoppingCart, Minus, Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

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
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  
  const handleAddToCart = () => {
    addToCart({
      id: seed.id,
      name: seed.name,
      price: seed.salePrice || seed.regularPrice,
      image: seed.image,
      quantity,
      type: 'seed'
    });
    
    toast.success("Added to cart!", {
      description: `${quantity} × ${seed.name}`
    });
  };
  
  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };
  
  const decrementQuantity = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md group">
      <div className="relative overflow-hidden h-48 sm:h-52">
        <img 
          src={seed.image} 
          alt={seed.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {seed.bestSeller && (
          <Badge variant="default" className="absolute top-2 left-2 bg-leaf-500 text-white">
            Bestseller
          </Badge>
        )}
        {seed.salePrice && (
          <Badge variant="outline" className="absolute top-2 right-2 bg-white text-leaf-600 border-leaf-600">
            Sale
          </Badge>
        )}
      </div>
      
      <CardContent className="pt-4">
        <h3 className="font-medium text-lg mb-1 text-foreground/90">{seed.name}</h3>
        
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="bg-leaf-50 text-leaf-700 px-2 py-0.5 rounded-full text-xs font-medium">
            {seed.category}
          </span>
          <div className="flex items-center">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400 mr-1" />
            <span>{seed.rating} ({seed.reviews})</span>
          </div>
        </div>
        
        <div className="mt-2 space-y-1.5 text-sm">
          <p><span className="font-medium">Planting Time:</span> {seed.plantingTime}</p>
          <p><span className="font-medium">Germination:</span> {seed.daysToGerminate}</p>
        </div>
        
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-baseline gap-1.5">
            {seed.salePrice ? (
              <>
                <span className="text-lg font-medium">₹{seed.salePrice}</span>
                <span className="text-sm text-muted-foreground line-through">₹{seed.regularPrice}</span>
              </>
            ) : (
              <span className="text-lg font-medium">₹{seed.regularPrice}</span>
            )}
          </div>
          
          <div className="flex items-center">
            <Button 
              variant="outline" 
              size="icon" 
              className="h-8 w-8 rounded-r-none border-r-0"
              onClick={decrementQuantity}
            >
              <Minus className="h-3 w-3" />
            </Button>
            <div className="h-8 px-3 flex items-center justify-center border border-input">
              {quantity}
            </div>
            <Button 
              variant="outline" 
              size="icon" 
              className="h-8 w-8 rounded-l-none border-l-0"
              onClick={incrementQuantity}
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>
        </div>
        
        <Button 
          className={cn(
            "w-full mt-4 bg-leaf-500 hover:bg-leaf-600 text-white",
          )}
          onClick={handleAddToCart}
        >
          <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default SeedCard;
