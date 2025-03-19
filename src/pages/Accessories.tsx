
import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import AccessoriesHeader from "@/components/accessories/AccessoriesHeader";
import AccessoriesFilter from "@/components/accessories/AccessoriesFilter";
import AccessoryCard from "@/components/AccessoryCard";
import AccessoriesPromotionBanner from "@/components/accessories/AccessoriesPromotionBanner";
import FloatingContactButton from "@/components/home/FloatingContactButton";

// Accessories product data
const accessoriesData = [
  {
    id: 1,
    name: "Plant Growth LED Light",
    image: "https://images.unsplash.com/photo-1591639588886-1db532651ce5?q=80&w=1000&auto=format&fit=crop",
    regularPrice: 1499,
    salePrice: 1199,
    category: "Lighting",
    rating: 4.8,
    reviews: 86,
    bestFor: ["Indoor Plants", "Herbs", "Seedlings"],
    bestSeller: true
  },
  {
    id: 2,
    name: "Garden Tool Kit (8 pcs)",
    image: "https://images.unsplash.com/photo-1588866353189-85af4f02bc6e?q=80&w=1000&auto=format&fit=crop",
    regularPrice: 899,
    salePrice: 699,
    category: "Tools",
    rating: 4.9,
    reviews: 142,
    bestFor: ["All Plants", "Home Garden", "Balcony Garden"],
    bestSeller: false
  },
  {
    id: 3,
    name: "Self-Watering Plant Spikes",
    image: "https://images.unsplash.com/photo-1611843467160-25afb8df1074?q=80&w=1000&auto=format&fit=crop",
    regularPrice: 399,
    salePrice: null,
    category: "Watering",
    rating: 4.6,
    reviews: 75,
    bestFor: ["Indoor Plants", "Vacation Care", "Forgetful Owners"],
    bestSeller: false
  },
  {
    id: 4,
    name: "Macramé Plant Hanger Set",
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=1000&auto=format&fit=crop",
    regularPrice: 599,
    salePrice: 499,
    category: "Decor",
    rating: 4.7,
    reviews: 93,
    bestFor: ["Hanging Plants", "Apartment Decor", "Small Spaces"],
    bestSeller: true
  },
  {
    id: 5,
    name: "Organic Potting Soil Mix",
    image: "https://images.unsplash.com/photo-1516613835066-91cb1a42cb65?q=80&w=1000&auto=format&fit=crop",
    regularPrice: 299,
    salePrice: 249,
    category: "Soil",
    rating: 4.8,
    reviews: 118,
    bestFor: ["Repotting", "Indoor Plants", "Seedlings"],
    bestSeller: false
  },
  {
    id: 6,
    name: "Plant Support Stakes",
    image: "https://images.unsplash.com/photo-1590519062215-5b5a1a830263?q=80&w=1000&auto=format&fit=crop",
    regularPrice: 349,
    salePrice: null,
    category: "Support",
    rating: 4.5,
    reviews: 62,
    bestFor: ["Climbing Plants", "Tomatoes", "Tall Plants"],
    bestSeller: false
  },
];

const Accessories = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  // Filter accessories based on active category
  const filteredAccessories = activeCategory === "all" 
    ? accessoriesData 
    : accessoriesData.filter(accessory => accessory.category.toLowerCase() === activeCategory.toLowerCase());
  
  return (
    <div className="pt-28 pb-20 px-6 md:px-12">
      <AnimatedSection className="max-w-7xl mx-auto">
        <AccessoriesHeader />
        
        <AccessoriesFilter onFilterChange={setActiveCategory} />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredAccessories.map((accessory) => (
            <AccessoryCard key={accessory.id} accessory={accessory} />
          ))}
        </div>
        
        <AccessoriesPromotionBanner />
      </AnimatedSection>
      
      <FloatingContactButton />
    </div>
  );
};

export default Accessories;
