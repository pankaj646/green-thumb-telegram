
import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Filter, Leaf, Truck } from "lucide-react";

// Components
import PlantCard from "@/components/PlantCard";
import AnimatedSection from "@/components/AnimatedSection";

// Plant data (mock data)
const plantsData = [
  {
    id: 1,
    name: "Peace Lily",
    image: "https://images.unsplash.com/photo-1616500122272-9ec0b578d239?q=80&w=1000&auto=format&fit=crop",
    price: 249,
    category: "Indoor",
    tags: ["air-purifying", "low-light", "flowering"],
    rating: 4.8,
    bestSeller: false
  },
  {
    id: 2,
    name: "Snake Plant",
    image: "https://images.unsplash.com/photo-1620127807580-990c3ecebd14?q=80&w=1000&auto=format&fit=crop",
    price: 399,
    category: "Indoor",
    tags: ["air-purifying", "low-maintenance", "low-light"],
    rating: 4.9,
    bestSeller: true
  },
  {
    id: 3,
    name: "Monstera Deliciosa",
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=1000&auto=format&fit=crop",
    price: 599,
    category: "Indoor",
    tags: ["decorative", "medium-light", "statement"],
    rating: 4.7,
    bestSeller: false
  },
  {
    id: 4,
    name: "Fiddle Leaf Fig",
    image: "https://images.unsplash.com/photo-1682078573205-89574d1b2027?q=80&w=1000&auto=format&fit=crop",
    price: 799,
    category: "Indoor",
    tags: ["decorative", "bright-light", "statement"],
    rating: 4.6,
    bestSeller: false
  },
  {
    id: 5,
    name: "Pothos",
    image: "https://images.unsplash.com/photo-1614594576054-bf7e0ab87605?q=80&w=1000&auto=format&fit=crop",
    price: 299,
    category: "Indoor",
    tags: ["air-purifying", "low-maintenance", "hanging"],
    rating: 4.8,
    bestSeller: false
  },
  {
    id: 6,
    name: "ZZ Plant",
    image: "https://images.unsplash.com/photo-1637967886160-fd78dc3ce3f5?q=80&w=1000&auto=format&fit=crop",
    price: 349,
    category: "Indoor",
    tags: ["air-purifying", "low-maintenance", "low-light"],
    rating: 4.7,
    bestSeller: false
  },
  {
    id: 7,
    name: "Aloe Vera",
    image: "https://images.unsplash.com/photo-1596547609652-9cf9d149a29f?q=80&w=1000&auto=format&fit=crop",
    price: 199,
    category: "Indoor",
    tags: ["medicinal", "succulent", "medium-light"],
    rating: 4.6,
    bestSeller: false
  },
  {
    id: 8,
    name: "Rubber Plant",
    image: "https://images.unsplash.com/photo-1622557850710-0c69b2aa3b78?q=80&w=1000&auto=format&fit=crop",
    price: 499,
    category: "Indoor",
    tags: ["air-purifying", "medium-maintenance", "statement"],
    rating: 4.5,
    bestSeller: false
  },
  {
    id: 9,
    name: "Rose Bush",
    image: "https://images.unsplash.com/photo-1589828994425-a4a676827fa7?q=80&w=1000&auto=format&fit=crop",
    price: 349,
    category: "Outdoor",
    tags: ["flowering", "fragrant", "full-sun"],
    rating: 4.7,
    bestSeller: true
  },
  {
    id: 10,
    name: "Bonsai Tree",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1000&auto=format&fit=crop",
    price: 1499,
    category: "Indoor",
    tags: ["decorative", "medium-maintenance", "statement"],
    rating: 4.9,
    bestSeller: false
  },
  {
    id: 11,
    name: "Jasmine",
    image: "https://images.unsplash.com/photo-1590762081268-c498309060fb?q=80&w=1000&auto=format&fit=crop",
    price: 299,
    category: "Outdoor",
    tags: ["flowering", "fragrant", "climbing"],
    rating: 4.6,
    bestSeller: false
  },
  {
    id: 12,
    name: "Marigold",
    image: "https://images.unsplash.com/photo-1665099431318-8e8284deafcf?q=80&w=1000&auto=format&fit=crop",
    price: 149,
    category: "Outdoor",
    tags: ["flowering", "full-sun", "low-maintenance"],
    rating: 4.4,
    bestSeller: false
  }
];

const BuyPlants = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  // Filter plants based on search, category, price, and tags
  const filteredPlants = plantsData.filter((plant) => {
    // Search query filter
    const matchesSearch = plant.name.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Category filter (tab)
    const matchesCategory = activeTab === "all" || plant.category.toLowerCase() === activeTab.toLowerCase();
    
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

  return (
    <div className="pt-28 pb-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <AnimatedSection className="mb-12">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="outline" className="px-3 py-1 border-leaf-200 bg-leaf-50 text-leaf-700 rounded-full">
              Shop Plants
            </Badge>
            <h1 className="text-3xl md:text-5xl font-serif font-medium mt-4 mb-6">
              Shop the Best Plants in Siliguri
            </h1>
            <p className="text-muted-foreground">
              Find the perfect air-purifying, decorative, and flowering plants for your home or office.
              All our plants are fresh, healthy, and affordable.
            </p>
          </div>
        </AnimatedSection>

        {/* Search and Filter Section */}
        <AnimatedSection className="mb-8">
          <div className="bg-white/70 backdrop-blur-sm rounded-xl border border-leaf-100 shadow-soft p-6">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search plants..."
                  className="pl-10 border-muted bg-white/80"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              {/* Filter Toggle Button (Mobile) */}
              <Button
                variant="outline"
                className="md:hidden border-muted"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="h-4 w-4 mr-2" />
                {showFilters ? "Hide Filters" : "Show Filters"}
              </Button>
              
              {/* Price Range (Desktop) */}
              <div className="hidden md:flex flex-1 items-center gap-4">
                <span className="text-sm text-muted-foreground whitespace-nowrap">Price Range:</span>
                <Slider
                  defaultValue={[0, 2000]}
                  max={2000}
                  step={50}
                  value={priceRange}
                  onValueChange={setPriceRange}
                  className="flex-1"
                />
                <span className="text-sm font-medium whitespace-nowrap">
                  ₹{priceRange[0]} - ₹{priceRange[1]}
                </span>
              </div>
            </div>
            
            {/* Mobile Filters */}
            {showFilters && (
              <div className="mt-4 md:hidden">
                <div className="mb-4">
                  <p className="text-sm text-muted-foreground mb-2">Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}</p>
                  <Slider
                    defaultValue={[0, 2000]}
                    max={2000}
                    step={50}
                    value={priceRange}
                    onValueChange={setPriceRange}
                  />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Filter by tags:</p>
                  <div className="flex flex-wrap gap-2">
                    {allTags.map((tag) => (
                      <Badge
                        key={tag}
                        variant={selectedTags.includes(tag) ? "default" : "outline"}
                        className={`cursor-pointer ${
                          selectedTags.includes(tag)
                            ? "bg-leaf-500 hover:bg-leaf-600 text-white"
                            : "border-leaf-200 hover:bg-leaf-50 text-muted-foreground"
                        }`}
                        onClick={() => toggleTag(tag)}
                      >
                        {tag.replace("-", " ")}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            )}
            
            {/* Desktop Tags */}
            <div className="hidden md:block mt-4">
              <div className="flex items-center flex-wrap gap-2">
                <Leaf className="h-4 w-4 text-leaf-500 mr-1" />
                <span className="text-sm text-muted-foreground mr-2">Filter by tags:</span>
                {allTags.map((tag) => (
                  <Badge
                    key={tag}
                    variant={selectedTags.includes(tag) ? "default" : "outline"}
                    className={`cursor-pointer ${
                      selectedTags.includes(tag)
                        ? "bg-leaf-500 hover:bg-leaf-600 text-white"
                        : "border-leaf-200 hover:bg-leaf-50 text-muted-foreground"
                    }`}
                    onClick={() => toggleTag(tag)}
                  >
                    {tag.replace("-", " ")}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Categories and Plants */}
        <AnimatedSection>
          <Tabs defaultValue="all" onValueChange={setActiveTab} className="mb-12">
            <TabsList className="bg-muted/80 backdrop-blur-sm w-full justify-start overflow-x-auto">
              <TabsTrigger value="all">All Plants</TabsTrigger>
              <TabsTrigger value="Indoor">Indoor</TabsTrigger>
              <TabsTrigger value="Outdoor">Outdoor</TabsTrigger>
              <TabsTrigger value="Flowering">Flowering</TabsTrigger>
              <TabsTrigger value="Low Maintenance">Low Maintenance</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-8">
              {filteredPlants.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {filteredPlants.map((plant) => (
                    <PlantCard
                      key={plant.id}
                      name={plant.name}
                      image={plant.image}
                      price={plant.price}
                      category={plant.category}
                      rating={plant.rating}
                      bestSeller={plant.bestSeller}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No plants match your search criteria.</p>
                  <Button 
                    variant="outline" 
                    className="mt-4 border-leaf-200 hover:bg-leaf-50 text-leaf-700"
                    onClick={() => {
                      setSearchQuery("");
                      setPriceRange([0, 2000]);
                      setSelectedTags([]);
                      setActiveTab("all");
                    }}
                  >
                    Reset Filters
                  </Button>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="Indoor" className="mt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredPlants.map((plant) => (
                  <PlantCard
                    key={plant.id}
                    name={plant.name}
                    image={plant.image}
                    price={plant.price}
                    category={plant.category}
                    rating={plant.rating}
                    bestSeller={plant.bestSeller}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="Outdoor" className="mt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredPlants.map((plant) => (
                  <PlantCard
                    key={plant.id}
                    name={plant.name}
                    image={plant.image}
                    price={plant.price}
                    category={plant.category}
                    rating={plant.rating}
                    bestSeller={plant.bestSeller}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="Flowering" className="mt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredPlants
                  .filter((plant) => plant.tags.includes("flowering"))
                  .map((plant) => (
                    <PlantCard
                      key={plant.id}
                      name={plant.name}
                      image={plant.image}
                      price={plant.price}
                      category={plant.category}
                      rating={plant.rating}
                      bestSeller={plant.bestSeller}
                    />
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="Low Maintenance" className="mt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredPlants
                  .filter((plant) => plant.tags.includes("low-maintenance"))
                  .map((plant) => (
                    <PlantCard
                      key={plant.id}
                      name={plant.name}
                      image={plant.image}
                      price={plant.price}
                      category={plant.category}
                      rating={plant.rating}
                      bestSeller={plant.bestSeller}
                    />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
          
          {/* Details Section */}
          <div className="bg-white/70 backdrop-blur-sm rounded-xl border border-leaf-100 shadow-soft p-8 mt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="bg-leaf-50 rounded-full p-4 mb-4">
                  <Truck className="h-8 w-8 text-leaf-600" />
                </div>
                <h3 className="font-serif text-lg font-medium mb-2">Fast Delivery</h3>
                <p className="text-muted-foreground">
                  Doorstep delivery across Siliguri. All plants are carefully packed to ensure they arrive in perfect condition.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="bg-leaf-50 rounded-full p-4 mb-4">
                  <Leaf className="h-8 w-8 text-leaf-600" />
                </div>
                <h3 className="font-serif text-lg font-medium mb-2">Expert Care Guides</h3>
                <p className="text-muted-foreground">
                  Every plant comes with a detailed care guide to help you keep your new plants thriving.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="bg-leaf-50 rounded-full p-4 mb-4">
                  <Search className="h-8 w-8 text-leaf-600" />
                </div>
                <h3 className="font-serif text-lg font-medium mb-2">Quality Guarantee</h3>
                <p className="text-muted-foreground">
                  All our plants are sourced from the best nurseries and undergo quality checks before delivery.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default BuyPlants;
