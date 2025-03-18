
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import AnimatedSection from "@/components/AnimatedSection";

// Components
import PlantsHeader from "@/components/plants/PlantsHeader";
import PlantsFilter from "@/components/plants/PlantsFilter";
import PlantCategories from "@/components/plants/PlantCategories";
import PlantDetailsBanner from "@/components/plants/PlantDetailsBanner";

// Data
import { plantsData } from "@/data/plantsData";

const BuyPlants = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState("all");

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter plants based on search, category, price, and tags
  const filteredPlants = plantsData.filter((plant) => {
    // Search query filter
    const matchesSearch = plant.name.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Category filter (tab)
    const matchesCategory = activeTab === "all" || 
                           (activeTab === "Flowering" && plant.tags.includes("flowering")) ||
                           (activeTab === "Low Maintenance" && plant.tags.includes("low-maintenance")) ||
                           plant.category.toLowerCase() === activeTab.toLowerCase();
    
    // Price range filter
    const matchesPrice = plant.price >= priceRange[0] && plant.price <= priceRange[1];
    
    // Tags filter
    const matchesTags = selectedTags.length === 0 || selectedTags.some(tag => plant.tags.includes(tag));
    
    return matchesSearch && matchesCategory && matchesPrice && matchesTags;
  });

  // Unique tags for filter
  const allTags = Array.from(new Set(plantsData.flatMap(plant => plant.tags)));

  // Toggle tag selection
  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  // Reset all filters
  const resetFilters = () => {
    setSearchQuery("");
    setPriceRange([0, 2000]);
    setSelectedTags([]);
    setActiveTab("all");
  };

  return (
    <div className="pt-28 pb-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <AnimatedSection className="mb-12">
          <PlantsHeader />
        </AnimatedSection>

        {/* Search and Filter Section */}
        <AnimatedSection className="mb-8">
          <PlantsFilter 
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            selectedTags={selectedTags}
            toggleTag={toggleTag}
            allTags={allTags}
          />
        </AnimatedSection>

        {/* Categories and Plants */}
        <AnimatedSection>
          <PlantCategories 
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            filteredPlants={filteredPlants}
            resetFilters={resetFilters}
          />
          
          {/* Details Section */}
          <PlantDetailsBanner />
        </AnimatedSection>
      </div>
    </div>
  );
};

export default BuyPlants;
