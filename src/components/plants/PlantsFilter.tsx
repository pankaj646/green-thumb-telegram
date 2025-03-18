
import { useState } from "react";
import { Search, Filter, Leaf } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";

interface PlantsFilterProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  priceRange: number[];
  setPriceRange: (range: number[]) => void;
  selectedTags: string[];
  toggleTag: (tag: string) => void;
  allTags: string[];
}

const PlantsFilter = ({
  searchQuery,
  setSearchQuery,
  priceRange,
  setPriceRange,
  selectedTags,
  toggleTag,
  allTags,
}: PlantsFilterProps) => {
  const [showFilters, setShowFilters] = useState(false);

  return (
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
  );
};

export default PlantsFilter;
