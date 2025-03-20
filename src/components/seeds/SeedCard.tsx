
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Star, ShoppingCart, Info, Calendar, AreaChart, Flower, Leaf } from "lucide-react";
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
    bestFor?: string;
    bestSeller?: boolean;
    growingSeason?: string;
  };
}

const SeedCard = ({ seed }: SeedCardProps) => {
  const { toast } = useToast();
  const { addItem } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const handleAddToCart = () => {
    addItem({
      id: seed.id,
      name: seed.name,
      price: seed.salePrice || seed.regularPrice,
      image: seed.image,
      category: seed.category,
      type: "seed"
    });
    
    toast({
      title: "Added to cart",
      description: `${seed.name} has been added to your cart.`,
      duration: 3000,
    });
  };

  const discount = seed.salePrice
    ? Math.round(((seed.regularPrice - seed.salePrice) / seed.regularPrice) * 100)
    : 0;

  return (
    <Card 
      className="overflow-hidden border-leaf-100 shadow-soft hover:shadow-medium transition-all duration-300 group bg-white/95 backdrop-blur-sm"
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
            {discount}% OFF
          </Badge>
        )}
        
        {seed.growingSeason && (
          <Badge className="absolute bottom-3 left-3 bg-amber-500/90 hover:bg-amber-600 text-white backdrop-blur-sm">
            {seed.growingSeason} Season
          </Badge>
        )}
      </div>
      
      <CardContent className="p-5">
        <div className="flex justify-between items-start mb-2">
          <Badge variant="outline" className="text-xs px-2.5 py-0.5 border-leaf-200 bg-leaf-50 text-leaf-700">
            {seed.category}
          </Badge>
          
          <div className="flex items-center bg-amber-50 px-2 py-1 rounded">
            <Star className="h-4 w-4 fill-amber-400 text-amber-400 mr-1" />
            <span className="text-sm font-medium text-amber-700">{seed.rating}</span>
            <span className="text-xs text-muted-foreground ml-1">
              ({seed.reviews} reviews)
            </span>
          </div>
        </div>
        
        <h3 className="font-serif text-xl font-semibold mb-2 line-clamp-2 group-hover:text-leaf-600 transition-colors">
          {seed.name}
        </h3>
        
        <div className="flex items-center gap-2 mb-4">
          {seed.salePrice ? (
            <>
              <span className="text-lg font-bold text-leaf-700">₹{seed.salePrice}</span>
              <span className="text-sm text-muted-foreground line-through">₹{seed.regularPrice}</span>
            </>
          ) : (
            <span className="text-lg font-bold text-leaf-700">₹{seed.regularPrice}</span>
          )}
        </div>
        
        <div className="space-y-2 text-sm mb-4">
          <div className="flex items-center text-muted-foreground">
            <Calendar className="h-4 w-4 mr-2 text-leaf-500" />
            <span>Planting Time: <span className="font-medium text-foreground">{seed.plantingTime}</span></span>
          </div>
          
          <div className="flex items-center text-muted-foreground">
            <AreaChart className="h-4 w-4 mr-2 text-leaf-500" />
            <span>Germination: <span className="font-medium text-foreground">{seed.daysToGerminate}</span></span>
          </div>
          
          {seed.bestFor && (
            <div className="flex items-center text-muted-foreground">
              <Flower className="h-4 w-4 mr-2 text-leaf-500" />
              <span>Best For: <span className="font-medium text-foreground">{seed.bestFor}</span></span>
            </div>
          )}
        </div>
        
        {showDetails && (
          <div className="py-3 border-t border-leaf-100 mb-3">
            <p className="text-sm text-muted-foreground">
              These premium quality {seed.category.toLowerCase()} seeds are perfect for {seed.bestFor || "home gardens"}. Plant during {seed.plantingTime.toLowerCase()} for best results. 
              Expect germination within {seed.daysToGerminate.toLowerCase()}.
            </p>
          </div>
        )}
        
        <div className="flex gap-2">
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
      </CardContent>
    </Card>
  );
};

export default SeedCard;
