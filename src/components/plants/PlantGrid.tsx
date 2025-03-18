
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
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
