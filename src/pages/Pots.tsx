
import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import PotsHeader from "@/components/pots/PotsHeader";
import PotsFilter from "@/components/pots/PotsFilter";
import PotCard from "@/components/PotCard";
import PlantPairings from "@/components/pots/PlantPairings";
import PotsPromotionBanner from "@/components/pots/PotsPromotionBanner";
import FloatingContactButton from "@/components/home/FloatingContactButton";

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
    reviews: 123,
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
    reviews: 86,
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
    reviews: 92,
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
    reviews: 138,
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
    reviews: 75,
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
    reviews: 104,
    bestFor: "Peace Lily, Bird of Paradise",
    size: "Medium",
    bestSeller: true
  },
];

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

const Pots = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  // Filter pots based on active category
  const filteredPots = activeCategory === "all" 
    ? potsData 
    : potsData.filter(pot => pot.category.toLowerCase() === activeCategory.toLowerCase());
  
  return (
    <div className="pt-28 pb-20 px-6 md:px-12">
      <AnimatedSection className="max-w-7xl mx-auto">
        <PotsHeader />
        
        <PotsFilter onFilterChange={setActiveCategory} />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredPots.map((pot) => (
            <PotCard key={pot.id} pot={pot} />
          ))}
        </div>
        
        <PlantPairings pairingPlants={pairingPlants} />
        
        <PotsPromotionBanner />
      </AnimatedSection>
      
      <FloatingContactButton />
    </div>
  );
};

export default Pots;
