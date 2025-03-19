
import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import SeedsHeader from "@/components/seeds/SeedsHeader";
import SeedsFilter from "@/components/seeds/SeedsFilter";
import FloatingContactButton from "@/components/home/FloatingContactButton";

// Seeds product data
const seedsData = [
  {
    id: 1,
    name: "Organic Tomato Seeds",
    image: "https://images.unsplash.com/photo-1582515073490-39981397c445?q=80&w=1000&auto=format&fit=crop",
    regularPrice: 199,
    salePrice: 149,
    category: "Vegetable",
    rating: 4.8,
    reviews: 86,
    plantingTime: "Spring",
    daysToGerminate: "7-10 days",
    bestSeller: true
  },
  {
    id: 2,
    name: "Marigold Flower Seeds",
    image: "https://images.unsplash.com/photo-1636804158923-31363b390016?q=80&w=1000&auto=format&fit=crop",
    regularPrice: 159,
    salePrice: null,
    category: "Flower",
    rating: 4.7,
    reviews: 64,
    plantingTime: "Spring to Summer",
    daysToGerminate: "5-7 days",
    bestSeller: false
  },
  {
    id: 3,
    name: "Basil Herb Seeds",
    image: "https://images.unsplash.com/photo-1618588507085-c79565432917?q=80&w=1000&auto=format&fit=crop",
    regularPrice: 129,
    salePrice: 99,
    category: "Herb",
    rating: 4.9,
    reviews: 102,
    plantingTime: "Spring to Fall",
    daysToGerminate: "5-10 days",
    bestSeller: true
  },
  {
    id: 4,
    name: "Sunflower Seeds",
    image: "https://images.unsplash.com/photo-1597916829826-02e5bb4a54e0?q=80&w=1000&auto=format&fit=crop",
    regularPrice: 179,
    salePrice: 149,
    category: "Flower",
    rating: 4.8,
    reviews: 92,
    plantingTime: "Spring",
    daysToGerminate: "7-14 days",
    bestSeller: false
  },
  {
    id: 5,
    name: "Cucumber Seeds",
    image: "https://images.unsplash.com/photo-1604155473472-63cd228cc40d?q=80&w=1000&auto=format&fit=crop",
    regularPrice: 149,
    salePrice: null,
    category: "Vegetable",
    rating: 4.6,
    reviews: 78,
    plantingTime: "Late Spring to Early Summer",
    daysToGerminate: "3-7 days",
    bestSeller: false
  },
  {
    id: 6,
    name: "Mint Seeds",
    image: "https://images.unsplash.com/photo-1628556270448-4d4e4148e1a1?q=80&w=1000&auto=format&fit=crop",
    regularPrice: 139,
    salePrice: 99,
    category: "Herb",
    rating: 4.7,
    reviews: 55,
    plantingTime: "Spring to Summer",
    daysToGerminate: "10-15 days",
    bestSeller: false
  },
];

const Seeds = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  // Filter seeds based on active category
  const filteredSeeds = activeCategory === "all" 
    ? seedsData 
    : seedsData.filter(seed => seed.category.toLowerCase() === activeCategory.toLowerCase());
  
  return (
    <div className="pt-28 pb-20 px-6 md:px-12">
      <AnimatedSection className="max-w-7xl mx-auto">
        <SeedsHeader />
        
        <SeedsFilter onFilterChange={setActiveCategory} />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredSeeds.map((seed) => (
            <SeedCard key={seed.id} seed={seed} />
          ))}
        </div>
        
        <SeedsPromotionBanner />
      </AnimatedSection>
      
      <FloatingContactButton />
    </div>
  );
};

export default Seeds;
