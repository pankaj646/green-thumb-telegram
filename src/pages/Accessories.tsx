
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Filter, MessageCircle, ArrowRight, 
  ShoppingCart, Truck, Leaf, Star
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";

// Components
import AnimatedSection from "@/components/AnimatedSection";
import AccessoryCard from "@/components/AccessoryCard";

// Accessories product data
const accessoriesData = [
  {
    id: 1,
    name: "Plant Growth LED Light",
    image: "https://images.unsplash.com/photo-1591639588886-1db532651ce5?q=80&w=1000&auto=format&fit=crop",
    regularPrice: 1499,
    salePrice: 1199,
    category: "Lighting",
    rating: 4.8,
    reviews: 86,
    bestFor: ["Indoor Plants", "Herbs", "Seedlings"],
    bestSeller: true
  },
  {
    id: 2,
    name: "Garden Tool Kit (8 pcs)",
    image: "https://images.unsplash.com/photo-1588866353189-85af4f02bc6e?q=80&w=1000&auto=format&fit=crop",
    regularPrice: 899,
    salePrice: 699,
    category: "Tools",
    rating: 4.9,
    reviews: 142,
    bestFor: ["All Plants", "Home Garden", "Balcony Garden"],
    bestSeller: false
  },
  {
    id: 3,
    name: "Self-Watering Plant Spikes",
    image: "https://images.unsplash.com/photo-1611843467160-25afb8df1074?q=80&w=1000&auto=format&fit=crop",
    regularPrice: 399,
    salePrice: null,
    category: "Watering",
    rating: 4.6,
    reviews: 75,
    bestFor: ["Indoor Plants", "Vacation Care", "Forgetful Owners"],
    bestSeller: false
  },
  {
    id: 4,
    name: "Macramé Plant Hanger Set",
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=1000&auto=format&fit=crop",
    regularPrice: 599,
    salePrice: 499,
    category: "Decor",
    rating: 4.7,
    reviews: 93,
    bestFor: ["Hanging Plants", "Apartment Decor", "Small Spaces"],
    bestSeller: true
  },
  {
    id: 5,
    name: "Organic Potting Soil Mix",
    image: "https://images.unsplash.com/photo-1516613835066-91cb1a42cb65?q=80&w=1000&auto=format&fit=crop",
    regularPrice: 299,
    salePrice: 249,
    category: "Soil",
    rating: 4.8,
    reviews: 118,
    bestFor: ["Repotting", "Indoor Plants", "Seedlings"],
    bestSeller: false
  },
  {
    id: 6,
    name: "Plant Support Stakes",
    image: "https://images.unsplash.com/photo-1590519062215-5b5a1a830263?q=80&w=1000&auto=format&fit=crop",
    regularPrice: 349,
    salePrice: null,
    category: "Support",
    rating: 4.5,
    reviews: 62,
    bestFor: ["Climbing Plants", "Tomatoes", "Tall Plants"],
    bestSeller: false
  },
];

const Accessories = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("all");
  
  // Filter accessories based on active category
  const filteredAccessories = activeCategory === "all" 
    ? accessoriesData 
    : accessoriesData.filter(accessory => accessory.category.toLowerCase() === activeCategory.toLowerCase());
  
  return (
    <div className="pt-28 pb-20 px-6 md:px-12">
      <AnimatedSection className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <Badge variant="outline" className="px-3 py-1 border-leaf-200 bg-leaf-50 text-leaf-700 rounded-full">
            Shop Accessories
          </Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium mb-4 mt-3">
            Essential Accessories for Your Plant Family
          </h1>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Complete your plant care routine with our premium selection of gardening tools, plant supports, 
            watering accessories, grow lights, and decorative items to help your plants thrive.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            <div className="flex items-center bg-leaf-50 text-leaf-700 rounded-full px-4 py-2">
              <Truck className="h-4 w-4 mr-2" />
              <span className="text-sm">Fast delivery across Siliguri</span>
            </div>
            
            <div className="flex items-center bg-leaf-50 text-leaf-700 rounded-full px-4 py-2">
              <Leaf className="h-4 w-4 mr-2" />
              <span className="text-sm">Premium quality accessories</span>
            </div>
            
            <div className="flex items-center bg-leaf-50 text-leaf-700 rounded-full px-4 py-2">
              <MessageCircle className="h-4 w-4 mr-2" />
              <span className="text-sm">Expert advice available via Telegram</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-4 sm:mb-0">
            <Filter className="h-5 w-5 mr-2 text-leaf-500" />
            <h2 className="text-xl font-medium">Filter Accessories</h2>
          </div>
          
          <Tabs 
            defaultValue="all" 
            className="w-full sm:w-auto"
            onValueChange={setActiveCategory}
          >
            <TabsList className="grid grid-cols-2 sm:grid-cols-6 w-full sm:w-auto bg-muted/50">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="tools">Tools</TabsTrigger>
              <TabsTrigger value="watering">Watering</TabsTrigger>
              <TabsTrigger value="lighting">Lighting</TabsTrigger>
              <TabsTrigger value="decor">Decor</TabsTrigger>
              <TabsTrigger value="soil">Soil & Support</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredAccessories.map((accessory) => (
            <AccessoryCard key={accessory.id} accessory={accessory} />
          ))}
        </div>
        
        <div className="mt-16 bg-leaf-50 border border-leaf-100 rounded-lg p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h2 className="text-2xl font-serif font-medium mb-2">Complete Your Garden Collection</h2>
              <p className="text-muted-foreground max-w-xl">
                Elevate your gardening experience by pairing our premium accessories with quality plants and decorative pots.
                Create a complete garden setup for a thriving indoor or outdoor space.
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
                onClick={() => navigate('/pots')}
                className="bg-leaf-500 hover:bg-leaf-600 text-white"
              >
                Explore Pots
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

export default Accessories;
