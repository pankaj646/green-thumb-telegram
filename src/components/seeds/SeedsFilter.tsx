
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Filter, Search, Sun, Snowflake, Calendar } from "lucide-react";

interface SeedsFilterProps {
  onTypeChange: (category: string) => void;
  onSeasonChange: (season: string) => void;
  onSearch: (query: string) => void;
}

const SeedsFilter = ({ onTypeChange, onSeasonChange, onSearch }: SeedsFilterProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };
  
  return (
    <div className="mb-10 space-y-6 bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-leaf-50 shadow-sm">
      <div>
        <h2 className="text-xl font-medium flex items-center mb-4">
          <Search className="h-5 w-5 mr-2 text-leaf-500" />
          Search for Seeds by Name or Category...
        </h2>
        
        <form onSubmit={handleSearch} className="flex gap-2">
          <Input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for tomatoes, basil, marigold..."
            className="flex-1"
          />
          <Button type="submit" className="bg-leaf-500 hover:bg-leaf-600 text-white">
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
        </form>
      </div>
      
      <div>
        <h3 className="flex items-center text-lg font-medium mb-4">
          <Filter className="h-5 w-5 mr-2 text-leaf-500" />
          Filter Seeds
        </h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium mb-2 text-muted-foreground">Seed Type:</h4>
            <Tabs 
              defaultValue="all" 
              className="w-full"
              onValueChange={onTypeChange}
            >
              <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full bg-muted/50">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="vegetable">Vegetables</TabsTrigger>
                <TabsTrigger value="fruit">Fruits</TabsTrigger>
                <TabsTrigger value="flower">Flowers</TabsTrigger>
                <TabsTrigger value="herb">Herbs</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          
          <div>
            <h4 className="text-sm font-medium mb-2 text-muted-foreground">Growing Season:</h4>
            <Tabs 
              defaultValue="all" 
              className="w-full"
              onValueChange={onSeasonChange}
            >
              <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full bg-muted/50">
                <TabsTrigger value="all">
                  <Calendar className="h-4 w-4 mr-1.5" />
                  All Seasons
                </TabsTrigger>
                <TabsTrigger value="summer">
                  <Sun className="h-4 w-4 mr-1.5" />
                  Summer
                </TabsTrigger>
                <TabsTrigger value="winter">
                  <Snowflake className="h-4 w-4 mr-1.5" />
                  Winter
                </TabsTrigger>
                <TabsTrigger value="all-season">
                  <Calendar className="h-4 w-4 mr-1.5" />
                  Year-Round
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeedsFilter;
