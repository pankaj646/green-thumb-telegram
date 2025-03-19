
import { Badge } from "@/components/ui/badge";
import CategoryCircle from "@/components/CategoryCircle";
import AnimatedSection from "@/components/AnimatedSection";
import { Leaf, TreePine, FlowerIcon, FlameIcon, TreesIcon, Sprout, FolderHeart, Shovel } from "lucide-react";

const CategoriesSection = () => {
  return (
    <AnimatedSection className="py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <Badge variant="outline" className="px-3 py-1 border-leaf-200 bg-leaf-50 text-leaf-700 rounded-full">
            Our Categories
          </Badge>
          <h2 className="text-3xl md:text-4xl font-serif font-medium mt-4 mb-6">
            Explore Plants By Category
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find the perfect plants for your space by browsing through our specialized categories
          </p>
        </div>

        {/* Desktop: Grid layout */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <CategoryCircle 
            name="Indoor Plants" 
            image="https://images.unsplash.com/photo-1614594575601-b1343640d028?q=80&w=800&auto=format&fit=crop" 
            path="/buy?category=indoor"
            icon={<Leaf className="h-4 w-4 text-leaf-500" />}
          />
          <CategoryCircle 
            name="Outdoor Plants" 
            image="https://images.unsplash.com/photo-1599685315891-4c0dae78f093?q=80&w=800&auto=format&fit=crop" 
            path="/buy?category=outdoor"
            icon={<TreePine className="h-4 w-4 text-leaf-500" />}
          />
          <CategoryCircle 
            name="Flowering Plants" 
            image="https://images.unsplash.com/photo-1597826368522-9f4cb5a6ba48?q=80&w=800&auto=format&fit=crop" 
            path="/buy?category=flowering"
            icon={<FlowerIcon className="h-4 w-4 text-leaf-500" />}
          />
          <CategoryCircle 
            name="Succulents & Cactus" 
            image="https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?q=80&w=800&auto=format&fit=crop" 
            path="/buy?category=succulents"
            icon={<FlameIcon className="h-4 w-4 text-leaf-500" />}
          />
          <CategoryCircle 
            name="Bonsai Trees" 
            image="https://images.unsplash.com/photo-1512428813834-c702c7702b78?q=80&w=800&auto=format&fit=crop" 
            path="/buy?category=bonsai"
            icon={<TreesIcon className="h-4 w-4 text-leaf-500" />}
          />
          <CategoryCircle 
            name="Fertilizers & Soil" 
            image="https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?q=80&w=800&auto=format&fit=crop" 
            path="/fertilizers"
            icon={<Sprout className="h-4 w-4 text-leaf-500" />}
          />
          <CategoryCircle 
            name="Pots & Planters" 
            image="https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=800&auto=format&fit=crop" 
            path="/pots"
            icon={<FolderHeart className="h-4 w-4 text-leaf-500" />}
          />
          <CategoryCircle 
            name="Gardening Tools" 
            image="https://images.unsplash.com/photo-1557844352-761f2dfc91d4?q=80&w=800&auto=format&fit=crop" 
            path="/pots?category=tools"
            icon={<Shovel className="h-4 w-4 text-leaf-500" />}
          />
        </div>

        {/* Mobile: Horizontal scroll */}
        <div className="md:hidden overflow-x-auto pb-6 no-scrollbar">
          <div className="flex space-x-6 w-max px-2">
            <CategoryCircle 
              name="Indoor Plants" 
              image="https://images.unsplash.com/photo-1614594575601-b1343640d028?q=80&w=800&auto=format&fit=crop" 
              path="/buy?category=indoor"
              icon={<Leaf className="h-4 w-4 text-leaf-500" />}
            />
            <CategoryCircle 
              name="Outdoor Plants" 
              image="https://images.unsplash.com/photo-1599685315891-4c0dae78f093?q=80&w=800&auto=format&fit=crop" 
              path="/buy?category=outdoor"
              icon={<TreePine className="h-4 w-4 text-leaf-500" />}
            />
            <CategoryCircle 
              name="Flowering Plants" 
              image="https://images.unsplash.com/photo-1597826368522-9f4cb5a6ba48?q=80&w=800&auto=format&fit=crop" 
              path="/buy?category=flowering"
              icon={<FlowerIcon className="h-4 w-4 text-leaf-500" />}
            />
            <CategoryCircle 
              name="Succulents & Cactus" 
              image="https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?q=80&w=800&auto=format&fit=crop" 
              path="/buy?category=succulents"
              icon={<FlameIcon className="h-4 w-4 text-leaf-500" />}
            />
            <CategoryCircle 
              name="Bonsai Trees" 
              image="https://images.unsplash.com/photo-1512428813834-c702c7702b78?q=80&w=800&auto=format&fit=crop" 
              path="/buy?category=bonsai"
              icon={<TreesIcon className="h-4 w-4 text-leaf-500" />}
            />
            <CategoryCircle 
              name="Fertilizers & Soil" 
              image="https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?q=80&w=800&auto=format&fit=crop" 
              path="/fertilizers"
              icon={<Sprout className="h-4 w-4 text-leaf-500" />}
            />
            <CategoryCircle 
              name="Pots & Planters" 
              image="https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=800&auto=format&fit=crop" 
              path="/pots"
              icon={<FolderHeart className="h-4 w-4 text-leaf-500" />}
            />
            <CategoryCircle 
              name="Gardening Tools" 
              image="https://images.unsplash.com/photo-1557844352-761f2dfc91d4?q=80&w=800&auto=format&fit=crop" 
              path="/pots?category=tools"
              icon={<Shovel className="h-4 w-4 text-leaf-500" />}
            />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default CategoriesSection;
