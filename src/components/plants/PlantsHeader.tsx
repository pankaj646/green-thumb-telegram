
import { Badge } from "@/components/ui/badge";

const PlantsHeader = () => {
  return (
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
  );
};

export default PlantsHeader;
