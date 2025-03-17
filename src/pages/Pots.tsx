
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Filter, MessageCircle, ArrowRight, 
  ShoppingCart, Truck, Leaf, Star
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";

// Components
import AnimatedSection from "@/components/AnimatedSection";

// Pot product data
const potsData = [
  {
    id: 1,
    name: "White Ceramic Minimalist Pot",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=1000&auto=format&fit=crop",
    regularPrice: 899,
    salePrice: 699,
    category: "Ceramic",
    rating: 4.9,
    bestFor: "Snake Plant, Succulents, Aloe Vera",
    size: "Medium",
    bestSeller: true
  },
  {
    id: 2,
    name: "Terracotta Clay Pot",
    image: "https://images.unsplash.com/photo-1622644843729-0d15385d4353?q=80&w=1000&auto=format&fit=crop",
    regularPrice: 399,
    salePrice: null,
    category: "Terracotta",
    rating: 4.7,
    bestFor: "Herbs, Cactus, Succulents",
    size: "Small",
    bestSeller: false
  },
  {
    id: 3,
    name: "Hanging Metal Planter",
    image: "https://images.unsplash.com/photo-1622021142947-da7dedc7c39a?q=80&w=1000&auto=format&fit=crop",
    regularPrice: 599,
    salePrice: 499,
    category: "Metal",
    rating: 4.8,
    bestFor: "Money Plant, Spider Plant, Ivy",
    size: "Medium",
    bestSeller: false
  },
  {
    id: 4,
    name: "Large Decorative Clay Pot",
    image: "https://images.unsplash.com/photo-1602080518389-67e05a564023?q=80&w=1000&auto=format&fit=crop",
    regularPrice: 1299,
    salePrice: 999,
    category: "Ceramic",
    rating: 4.9,
    bestFor: "Fiddle Leaf Fig, Monstera, Palm",
    size: "Large",
    bestSeller: false
  },
  {
    id: 5,
    name: "Concrete Geometric Planter",
    image: "https://images.unsplash.com/photo-1497644083578-611b798c60f3?q=80&w=1000&auto=format&fit=crop",
    regularPrice: 799,
    salePrice: 649,
    category: "Concrete",
    rating: 4.6,
    bestFor: "Succulents, Cacti",
    size: "Small",
    bestSeller: false
  },
  {
    id: 6,
    name: "Woven Basket Planter",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?q=80&w=1000&auto=format&fit=crop",
    regularPrice: 699,
    salePrice: 599,
    category: "Woven",
    rating: 4.8,
    bestFor: "Peace Lily, Bird of Paradise",
    size: "Medium",
    bestSeller: true
  },
];

const PotCard = ({ pot }: { pot: typeof potsData[0] }) => {
  const [isHovered, setIsHovered] = useState(false);
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
    
  return (
    <Card className="overflow-hidden border-leaf-100 shadow-soft group bg-white/80 backdrop-blur-sm hover:shadow-medium transition-all duration-300">
      <CardContent className="p-0">
        <div 
          className="relative h-60 overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img 
            src={pot.image} 
            alt={pot.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {pot.bestSeller && (
            <Badge className="absolute top-2 right-2 bg-leaf-500 hover:bg-leaf-600 text-white">
              Best Seller
            </Badge>
          )}
          {pot.salePrice && (
            <Badge className="absolute top-2 left-2 bg-red-500 text-white">
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
        <div className="p-4">
          <div className="flex justify-between items-start mb-1">
            <Badge variant="outline" className="text-xs border-leaf-200 bg-leaf-50 text-leaf-700">
              {pot.size} • {pot.category}
            </Badge>
            <div className="flex items-center">
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
              <span className="text-xs font-medium">{pot.rating}</span>
            </div>
          </div>
          <h3 className="font-serif text-lg font-medium mt-1 mb-1">{pot.name}</h3>
          <div className="flex items-center gap-2 mb-1">
            {pot.salePrice ? (
              <>
                <span className="font-medium text-leaf-700">₹{pot.salePrice}</span>
                <span className="text-sm text-muted-foreground line-through">₹{pot.regularPrice}</span>
              </>
            ) : (
              <span className="font-medium text-leaf-700">₹{pot.regularPrice}</span>
            )}
          </div>
          <p className="text-xs text-muted-foreground">Best for: {pot.bestFor}</p>
        </div>
      </CardContent>
    </Card>
  );
};

const Pots = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("all");
  
  // Filter pots based on active category
  const filteredPots = activeCategory === "all" 
    ? potsData 
    : potsData.filter(pot => pot.category.toLowerCase() === activeCategory.toLowerCase());
  
  // Plants that pair well with pots
  const pairingPlants = [
    {
      name: "Areca Palm",
      description: "Perfect with Large Terracotta Pots",
      image: "https://images.unsplash.com/photo-1598880942562-aeafdca54406?q=80&w=1974&auto=format&fit=crop"
    },
    {
      name: "Peace Lily",
      description: "Goes well with Decorative Ceramic Pots",
      image: "https://images.unsplash.com/photo-1593482892490-f3bb6222d742?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "Snake Plant",
      description: "Best in Minimalist Metal Planters",
      image: "https://images.unsplash.com/photo-1620127807580-990c3ecebd14?q=80&w=1000&auto=format&fit=crop"
    }
  ];
  
  return (
    <div className="pt-28 pb-20 px-6 md:px-12">
      <AnimatedSection className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium mb-4">
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
        
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-4 sm:mb-0">
            <Filter className="h-5 w-5 mr-2 text-leaf-500" />
            <h2 className="text-xl font-medium">Filter Pots</h2>
          </div>
          
          <Tabs 
            defaultValue="all" 
            className="w-full sm:w-auto"
            onValueChange={setActiveCategory}
          >
            <TabsList className="grid grid-cols-2 sm:grid-cols-6 w-full sm:w-auto bg-muted/50">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="ceramic">Ceramic</TabsTrigger>
              <TabsTrigger value="terracotta">Terracotta</TabsTrigger>
              <TabsTrigger value="metal">Metal</TabsTrigger>
              <TabsTrigger value="concrete">Concrete</TabsTrigger>
              <TabsTrigger value="woven">Woven</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredPots.map((pot) => (
            <PotCard key={pot.id} pot={pot} />
          ))}
        </div>
        
        <div className="mt-16">
          <h2 className="text-2xl font-serif font-medium mb-6 flex items-center">
            <Leaf className="h-5 w-5 mr-2 text-leaf-500" />
            Best Plants for These Pots
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pairingPlants.map((plant, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="relative rounded-lg overflow-hidden h-56 group cursor-pointer"
                onClick={() => navigate('/buy')}
              >
                <img 
                  src={plant.image} 
                  alt={plant.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-4">
                  <h3 className="text-white font-medium text-lg">{plant.name}</h3>
                  <p className="text-white/80 text-sm">{plant.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 bg-leaf-50 border border-leaf-100 rounded-lg p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h2 className="text-2xl font-serif font-medium mb-2">Complete Your Garden Set</h2>
              <p className="text-muted-foreground max-w-xl">
                For the best results, pair our premium pots with quality plants and nourishing fertilizers.
                Create a complete garden set for a thriving indoor or outdoor space.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                onClick={() => navigate('/buy')}
                variant="outline" 
                className="border-leaf-200 hover:bg-leaf-50 text-leaf-700"
              >
                <Leaf className="h-4 w-4 mr-2" />
                Shop Plants
              </Button>
              
              <Button 
                onClick={() => navigate('/fertilizers')}
                className="bg-leaf-500 hover:bg-leaf-600 text-white"
              >
                Explore Fertilizers
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </AnimatedSection>
      
      <div className="fixed bottom-6 right-6 z-10">
        <Button 
          className="h-14 w-14 rounded-full bg-leaf-500 hover:bg-leaf-600 text-white shadow-md"
          onClick={() => window.open('https://t.me/dasnursery', '_blank')}
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};

export default Pots;
