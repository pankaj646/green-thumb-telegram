
import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Filter, Leaf, ShoppingCart, TrendingUp, MessageCircle,
  Truck, ArrowRight
} from "lucide-react";

// Components
import AnimatedSection from "@/components/AnimatedSection";
import FertilizerCard from "@/components/FertilizerCard";

const Fertilizers = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("all");
  
  // Fertilizer products data
  const fertilizers = [
    {
      id: 1,
      name: "Organic Vermicompost",
      image: "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?q=80&w=2070&auto=format&fit=crop",
      regularPrice: 499,
      salePrice: 399,
      category: "Organic",
      rating: 4.8,
      benefits: ["Enhances soil fertility", "Improves plant health", "100% natural ingredients", "Long-lasting effect"],
      recommendedFor: "All Flowering & Vegetable Plants",
      bestSeller: true
    },
    {
      id: 2,
      name: "Seaweed Extract Liquid Fertilizer",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop",
      regularPrice: 699,
      salePrice: 599,
      category: "Liquid",
      rating: 4.6,
      benefits: ["Provides essential minerals", "Promotes lush greenery", "Boosts root growth", "Quick absorption"],
      recommendedFor: "Flowering Plants, Fruits & Vegetables",
      bestSeller: false
    },
    {
      id: 3,
      name: "All-Purpose Plant Food Granules",
      image: "https://images.unsplash.com/photo-1628696768353-ab396e22437b?q=80&w=2070&auto=format&fit=crop",
      regularPrice: 349,
      salePrice: null,
      category: "Granules",
      rating: 4.5,
      benefits: ["Balanced nutrition", "Easy to apply", "Works for most plants", "Slow release"],
      recommendedFor: "Indoor & Outdoor Plants",
      bestSeller: false
    },
    {
      id: 4,
      name: "Rose Special Organic Fertilizer",
      image: "https://images.unsplash.com/photo-1595228814885-57a8a3bf1af9?q=80&w=2070&auto=format&fit=crop",
      regularPrice: 599,
      salePrice: 499,
      category: "Organic",
      rating: 4.9,
      benefits: ["Promotes vibrant blooms", "Strengthens stems", "Prevents common diseases", "Enhances fragrance"],
      recommendedFor: "Roses and Flowering Plants",
      bestSeller: false
    },
    {
      id: 5,
      name: "Garden Compost Soil Enhancer",
      image: "https://images.unsplash.com/photo-1553530979-212c46e0cb30?q=80&w=2070&auto=format&fit=crop",
      regularPrice: 299,
      salePrice: 249,
      category: "Compost",
      rating: 4.7,
      benefits: ["Improves soil structure", "Adds organic matter", "Increases water retention", "Eco-friendly"],
      recommendedFor: "All Garden Plants",
      bestSeller: false
    },
    {
      id: 6,
      name: "Succulent & Cactus Fertilizer",
      image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?q=80&w=2074&auto=format&fit=crop",
      regularPrice: 449,
      salePrice: 399,
      category: "Granules",
      rating: 4.6,
      benefits: ["Low nitrogen formula", "Prevents over-fertilizing", "Enhances growth", "Perfect for succulents"],
      recommendedFor: "Cacti, Succulents & Desert Plants",
      bestSeller: false
    },
    {
      id: 7,
      name: "Orchid Boost Liquid Feed",
      image: "https://images.unsplash.com/photo-1624799335276-ae135da7a5e0?q=80&w=2070&auto=format&fit=crop",
      regularPrice: 799,
      salePrice: 699,
      category: "Liquid",
      rating: 4.8,
      benefits: ["Promotes flowering", "Strengthens roots", "Balanced nutrients", "Easy to use dropper"],
      recommendedFor: "All Orchid Varieties",
      bestSeller: true
    },
    {
      id: 8,
      name: "Natural Bone Meal",
      image: "https://images.unsplash.com/photo-1575891427851-ddfe881fac5e?q=80&w=2070&auto=format&fit=crop",
      regularPrice: 349,
      salePrice: null,
      category: "Organic",
      rating: 4.5,
      benefits: ["High in phosphorus", "Promotes root development", "Long-lasting", "Natural source"],
      recommendedFor: "Bulbs, Root Vegetables & Perennials",
      bestSeller: false
    }
  ];

  // Filter fertilizers based on active category
  const filteredFertilizers = activeCategory === "all" 
    ? fertilizers 
    : fertilizers.filter(item => item.category.toLowerCase() === activeCategory.toLowerCase());

  // Recommended plants data
  const recommendedPlants = [
    {
      name: "Peace Lily",
      description: "Thrives with Organic Compost",
      image: "https://images.unsplash.com/photo-1593482892490-f3bb6222d742?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "Areca Palm",
      description: "Best with Liquid Fertilizer",
      image: "https://images.unsplash.com/photo-1598880942562-aeafdca54406?q=80&w=1974&auto=format&fit=crop"
    },
    {
      name: "Money Plant",
      description: "Loves Slow-Release Granules",
      image: "https://images.unsplash.com/photo-1614594805320-e6a8ba103e98?q=80&w=1974&auto=format&fit=crop"
    }
  ];

  const handleCategoryChange = (value: string) => {
    setActiveCategory(value);
  };

  return (
    <div className="pt-28 pb-20">
      <AnimatedSection className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium mb-4">
            Get the Best Fertilizers for Thriving Plants
          </h1>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Give your plants the essential nutrients they need for healthy growth, vibrant blooms, and lush greenery. 
            Whether you need organic compost, slow-release fertilizers, or specialized plant boosters, we have it all!
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
      </AnimatedSection>
      
      <AnimatedSection className="px-6 md:px-12 max-w-7xl mx-auto" delay={0.1}>
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-4 sm:mb-0">
            <Filter className="h-5 w-5 mr-2 text-leaf-500" />
            <h2 className="text-xl font-medium">Filter Your Choice</h2>
          </div>
          
          <Tabs 
            defaultValue="all" 
            className="w-full sm:w-auto"
            onValueChange={handleCategoryChange}
          >
            <TabsList className="grid grid-cols-3 sm:grid-cols-6 w-full sm:w-auto bg-muted/50">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="organic">Organic</TabsTrigger>
              <TabsTrigger value="liquid">Liquid</TabsTrigger>
              <TabsTrigger value="granules">Granules</TabsTrigger>
              <TabsTrigger value="compost">Compost</TabsTrigger>
              <TabsTrigger value="speciality">Speciality</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {filteredFertilizers.map((fertilizer) => (
            <FertilizerCard
              key={fertilizer.id}
              name={fertilizer.name}
              image={fertilizer.image}
              regularPrice={fertilizer.regularPrice}
              salePrice={fertilizer.salePrice}
              category={fertilizer.category}
              rating={fertilizer.rating}
              benefits={fertilizer.benefits}
              recommendedFor={fertilizer.recommendedFor}
              bestSeller={fertilizer.bestSeller}
            />
          ))}
        </div>
      </AnimatedSection>
      
      <AnimatedSection className="mt-20 px-6 md:px-12 max-w-7xl mx-auto" delay={0.2}>
        <div className="flex items-center mb-6">
          <TrendingUp className="h-5 w-5 mr-2 text-leaf-500" />
          <h2 className="text-2xl font-serif font-medium">Recommended for These Plants</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recommendedPlants.map((plant, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="relative rounded-lg overflow-hidden h-56 group cursor-pointer"
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
      </AnimatedSection>
      
      <AnimatedSection className="mt-16 px-6 md:px-12" delay={0.3}>
        <div className="max-w-7xl mx-auto bg-leaf-50 border border-leaf-100 rounded-lg p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h2 className="text-2xl font-serif font-medium mb-2">Complete Your Garden Set</h2>
              <p className="text-muted-foreground max-w-xl">
                For the best results, pair our premium fertilizers with quality plants and beautiful pots.
                Enhance your plant care routine with a complete garden set.
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

export default Fertilizers;
