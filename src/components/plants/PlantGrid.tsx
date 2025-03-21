
import { useIsMobile } from "@/hooks/use-mobile";
import PlantCard from "@/components/PlantCard";

interface PlantGridProps {
  plants: Array<{
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
}

const PlantGrid = ({ plants }: PlantGridProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div className={`grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6`}>
      {plants.map((plant) => (
        <PlantCard
          key={plant.id}
          id={plant.id}
          name={plant.name}
          image={plant.image}
          price={plant.price}
          category={plant.category}
          rating={plant.rating}
          bestSeller={plant.bestSeller}
          benefits={plant.benefits}
          careLevel={plant.careLevel}
        />
      ))}
    </div>
  );
};

export default PlantGrid;
