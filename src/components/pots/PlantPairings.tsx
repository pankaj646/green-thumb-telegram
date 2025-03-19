
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Leaf } from "lucide-react";

interface PlantPairingProps {
  pairingPlants: Array<{
    name: string;
    description: string;
    image: string;
  }>;
}

const PlantPairings = ({ pairingPlants }: PlantPairingProps) => {
  const navigate = useNavigate();
  
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-serif font-medium mb-6 flex items-center">
        <Leaf className="h-5 w-5 mr-2 text-leaf-500" />
        Best Plants for These Pots
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pairingPlants.map((plant, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5 }}
            className="relative rounded-lg overflow-hidden h-56 group cursor-pointer"
            onClick={() => navigate('/buy')}
          >
            <img 
              src={plant.image} 
              alt={plant.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-4">
              <h3 className="text-white font-medium text-lg">{plant.name}</h3>
              <p className="text-white/80 text-sm">{plant.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PlantPairings;
