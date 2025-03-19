
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Filter } from "lucide-react";

interface PotsFilterProps {
  onFilterChange: (category: string) => void;
}

const PotsFilter = ({ onFilterChange }: PotsFilterProps) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
      <div className="flex items-center mb-4 sm:mb-0">
        <Filter className="h-5 w-5 mr-2 text-leaf-500" />
        <h2 className="text-xl font-medium">Filter Pots</h2>
      </div>
      
      <Tabs 
        defaultValue="all" 
        className="w-full sm:w-auto"
        onValueChange={onFilterChange}
      >
        <TabsList className="grid grid-cols-2 sm:grid-cols-6 w-full sm:w-auto bg-muted/50">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="ceramic">Ceramic</TabsTrigger>
          <TabsTrigger value="terracotta">Terracotta</TabsTrigger>
          <TabsTrigger value="metal">Metal</TabsTrigger>
          <TabsTrigger value="concrete">Concrete</TabsTrigger>
          <TabsTrigger value="woven">Woven</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default PotsFilter;
