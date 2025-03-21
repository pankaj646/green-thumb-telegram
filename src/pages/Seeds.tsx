import { useState, useEffect } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import SeedsHeader from "@/components/seeds/SeedsHeader";
import SeedsFilter from "@/components/seeds/SeedsFilter";
import SeedCard from "@/components/seeds/SeedCard";
import SeedsFAQ from "@/components/seeds/SeedsFAQ";
import SeedsPromotionBanner from "@/components/seeds/SeedsPromotionBanner";
import FloatingContactButton from "@/components/home/FloatingContactButton";
import { Leaf } from "lucide-react";

// Seeds product data with enhanced SEO content
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
    bestSeller: true,
    bestFor: "Garden, Balcony",
    growingSeason: "Summer"
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
    bestSeller: false,
    bestFor: "Garden, Outdoor",
    growingSeason: "All-Season"
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
    bestSeller: true,
    bestFor: "Indoor, Kitchen Garden",
    growingSeason: "All-Season"
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
    bestSeller: false,
    bestFor: "Garden, Outdoor",
    growingSeason: "Summer"
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
    bestSeller: false,
    bestFor: "Garden, Raised Beds",
    growingSeason: "Summer"
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
    bestSeller: false,
    bestFor: "Containers, Indoor",
    growingSeason: "All-Season"
  },
  {
    id: 7,
    name: "High-Yield Winter Spinach Seeds",
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=1000&auto=format&fit=crop",
    regularPrice: 169,
    salePrice: 129,
    category: "Vegetable",
    rating: 4.9,
    reviews: 112,
    plantingTime: "Early Fall",
    daysToGerminate: "5-10 days",
    bestSeller: true,
    bestFor: "Garden, Containers",
    growingSeason: "Winter"
  },
  {
    id: 8,
    name: "Strawberry Seeds",
    image: "https://images.unsplash.com/photo-1583083271266-a0cbf45567d7?q=80&w=1000&auto=format&fit=crop",
    regularPrice: 249,
    salePrice: 199,
    category: "Fruit",
    rating: 4.6,
    reviews: 89,
    plantingTime: "Early Spring",
    daysToGerminate: "14-21 days",
    bestSeller: false,
    bestFor: "Garden, Containers, Hanging Baskets",
    growingSeason: "Summer"
  },
  {
    id: 9,
    name: "Winter Cabbage Seeds",
    image: "https://images.unsplash.com/photo-1594282486552-05a9d3e7fbc7?q=80&w=1000&auto=format&fit=crop",
    regularPrice: 189,
    salePrice: 149,
    category: "Vegetable",
    rating: 4.7,
    reviews: 74,
    plantingTime: "Late Summer to Fall",
    daysToGerminate: "7-10 days",
    bestSeller: false,
    bestFor: "Garden, Raised Beds",
    growingSeason: "Winter"
  }
];

const Seeds = () => {
  const [activeType, setActiveType] = useState("all");
  const [activeSeason, setActiveSeason] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredSeeds, setFilteredSeeds] = useState(seedsData);
  
  useEffect(() => {
    let result = seedsData;
    
    if (activeType !== "all") {
      result = result.filter(seed => 
        seed.category.toLowerCase() === activeType.toLowerCase()
      );
    }
    
    if (activeSeason !== "all") {
      result = result.filter(seed => 
        seed.growingSeason?.toLowerCase() === activeSeason.toLowerCase()
      );
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(seed => 
        seed.name.toLowerCase().includes(query) || 
        seed.category.toLowerCase().includes(query) ||
        seed.bestFor?.toLowerCase().includes(query) ||
        seed.plantingTime.toLowerCase().includes(query)
      );
    }
    
    setFilteredSeeds(result);
  }, [activeType, activeSeason, searchQuery]);
  
  const NoResults = () => (
    <div className="col-span-full flex flex-col items-center justify-center py-12 px-4 bg-white/50 backdrop-blur-sm rounded-lg border border-leaf-50">
      <Leaf className="h-12 w-12 text-leaf-300 mb-4" />
      <h3 className="text-xl font-medium mb-2">No Seeds Found</h3>
      <p className="text-muted-foreground text-center max-w-md mb-6">
        We couldn't find any seeds matching your current filters. Try adjusting your search criteria.
      </p>
    </div>
  );
  
  return (
    <div className="pt-28 pb-20 px-6 md:px-12">
      <AnimatedSection className="max-w-7xl mx-auto">
        <SeedsHeader />
        
        <SeedsFilter 
          onTypeChange={setActiveType}
          onSeasonChange={setActiveSeason}
          onSearch={setSearchQuery}
        />
        
        <div id="seed-listings" className="grid grid-cols-2 gap-3 sm:gap-6 mb-8">
          {filteredSeeds.length > 0 ? (
            filteredSeeds.map((seed) => (
              <SeedCard key={seed.id} seed={seed} />
            ))
          ) : (
            <NoResults />
          )}
        </div>
        
        <SeedsFAQ />
        <SeedsPromotionBanner />
      </AnimatedSection>
      
      <FloatingContactButton />
    </div>
  );
};

export default Seeds;
