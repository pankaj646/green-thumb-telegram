
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Filter } from "lucide-react";

interface AccessoriesFilterProps {
  onFilterChange: (category: string) => void;
}

const AccessoriesFilter = ({ onFilterChange }: AccessoriesFilterProps) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
      <div className="flex items-center mb-4 sm:mb-0">
        <Filter className="h-5 w-5 mr-2 text-leaf-500" />
        <h2 className="text-xl font-medium">Filter Accessories</h2>
      </div>
      
      <Tabs 
        defaultValue="all" 
        className="w-full sm:w-auto"
        onValueChange={onFilterChange}
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
  );
};

export default AccessoriesFilter;
