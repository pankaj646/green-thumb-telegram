
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PlantGrid from "./PlantGrid";
import { Button } from "@/components/ui/button";

interface PlantCategoriesProps {
  activeTab: string;
  setActiveTab: (value: string) => void;
  filteredPlants: Array<{
    id: number;
    name: string;
    image: string;
    price: number;
    category: string;
    rating: number;
    bestSeller?: boolean;
    benefits?: string[];
    careLevel?: string;
  }>;
  resetFilters: () => void;
}

const PlantCategories = ({ 
  activeTab, 
  setActiveTab, 
  filteredPlants,
  resetFilters
}: PlantCategoriesProps) => {
  return (
    <Tabs defaultValue="all" onValueChange={setActiveTab} className="mb-12">
      <TabsList className="bg-muted/80 backdrop-blur-sm w-full justify-start overflow-x-auto">
        <TabsTrigger value="all">All Plants</TabsTrigger>
        <TabsTrigger value="Indoor">Indoor</TabsTrigger>
        <TabsTrigger value="Outdoor">Outdoor</TabsTrigger>
        <TabsTrigger value="Succulents & Cactus">Succulents & Cactus</TabsTrigger>
        <TabsTrigger value="Bonsai Plants">Bonsai Plants</TabsTrigger>
        <TabsTrigger value="Flowering">Flowering</TabsTrigger>
        <TabsTrigger value="Low Maintenance">Low Maintenance</TabsTrigger>
      </TabsList>
      
      {/* All Plants Tab */}
      <TabsContent value="all" className="mt-8">
        {filteredPlants.length > 0 ? (
          <PlantGrid plants={filteredPlants} />
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No plants match your search criteria.</p>
            <Button 
              variant="outline" 
              className="mt-4 border-leaf-200 hover:bg-leaf-50 text-leaf-700"
              onClick={resetFilters}
            >
              Reset Filters
            </Button>
          </div>
        )}
      </TabsContent>
      
      {/* Category Tabs */}
      {["Indoor", "Outdoor", "Succulents & Cactus", "Bonsai Plants", "Flowering", "Low Maintenance"].map((category) => (
        <TabsContent key={category} value={category} className="mt-8">
          <PlantGrid plants={filteredPlants} />
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default PlantCategories;
