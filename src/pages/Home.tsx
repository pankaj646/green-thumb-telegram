
import AutoScrollCarousel from "@/components/AutoScrollCarousel";
import PlantCard from "@/components/PlantCard";
import HeroSection from "@/components/home/HeroSection";
import CategoriesSection from "@/components/home/CategoriesSection";
import ServicesSection from "@/components/home/ServicesSection";
import PlantCareSection from "@/components/home/PlantCareSection";
import SeasonalOffersSection from "@/components/home/SeasonalOffersSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CtaSection from "@/components/home/CtaSection";
import FloatingContactButton from "@/components/home/FloatingContactButton";

// Create the Home component
const Home = () => {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero Section */}
      <HeroSection />

      {/* Categories Section */}
      <CategoriesSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Featured Plants Section (Enhanced with Auto-Scroll) */}
      <AutoScrollCarousel
        title="Our Bestsellers"
        subtitle="Featured Plants"
        description="Discover our most popular plants loved by our customers"
        viewAllLink="/buy"
        viewAllText="View All Plants"
        items={[
          {
            name: "Peace Lily",
            image: "https://images.unsplash.com/photo-1616500122272-9ec0b578d239?q=80&w=1000&auto=format&fit=crop",
            price: 249,
            category: "Indoor",
            rating: 4.8,
          },
          {
            name: "Snake Plant",
            image: "https://images.unsplash.com/photo-1620127807580-990c3ecebd14?q=80&w=1000&auto=format&fit=crop",
            price: 399,
            category: "Indoor",
            rating: 4.9,
            bestSeller: true,
          },
          {
            name: "Monstera Deliciosa",
            image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=1000&auto=format&fit=crop",
            price: 599,
            category: "Indoor",
            rating: 4.7,
          },
          {
            name: "Fiddle Leaf Fig",
            image: "https://images.unsplash.com/photo-1682078573205-89574d1b2027?q=80&w=1000&auto=format&fit=crop",
            price: 799,
            category: "Indoor",
            rating: 4.6,
          },
          {
            name: "Rubber Plant",
            image: "https://images.unsplash.com/photo-1637967952747-f0b95f0a5a5f?q=80&w=1000&auto=format&fit=crop",
            price: 499,
            category: "Indoor",
            rating: 4.5,
          },
          {
            name: "ZZ Plant",
            image: "https://images.unsplash.com/photo-1632321931499-e8718f7f5af2?q=80&w=1000&auto=format&fit=crop",
            price: 349,
            category: "Indoor",
            rating: 4.7,
          },
        ]}
        renderItem={(plant, index) => (
          <PlantCard
            name={plant.name}
            image={plant.image}
            price={plant.price}
            category={plant.category}
            rating={plant.rating}
            bestSeller={plant.bestSeller}
          />
        )}
        interval={5000}
      />

      {/* New Arrivals Section (Enhanced with Auto-Scroll) */}
      <AutoScrollCarousel
        title="New Arrivals"
        subtitle="Just Arrived"
        description="Discover our latest additions to the plant family"
        viewAllLink="/buy"
        viewAllText="Explore All"
        items={[
          {
            name: "Calathea Orbifolia",
            image: "https://images.unsplash.com/photo-1637967886160-fd71a17a9d0c?q=80&w=1000&auto=format&fit=crop",
            price: 499,
            category: "Indoor",
            rating: 4.7,
            bestSeller: false,
          },
          {
            name: "String of Pearls",
            image: "https://images.unsplash.com/photo-1622576407952-2c1eeac3b1d6?q=80&w=1000&auto=format&fit=crop",
            price: 349,
            category: "Hanging",
            rating: 4.8,
            bestSeller: false,
          },
          {
            name: "Alocasia Polly",
            image: "https://images.unsplash.com/photo-1632207538509-cc90944e0388?q=80&w=1000&auto=format&fit=crop",
            price: 649,
            category: "Indoor",
            rating: 4.9,
            bestSeller: false,
          },
          {
            name: "Pink Anthurium",
            image: "https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?q=80&w=1000&auto=format&fit=crop",
            price: 799,
            category: "Flowering",
            rating: 4.7,
            bestSeller: false,
          },
          {
            name: "Philodendron Birkin",
            image: "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?q=80&w=1000&auto=format&fit=crop",
            price: 599,
            category: "Indoor",
            rating: 4.8,
            bestSeller: false,
          },
          {
            name: "Money Tree",
            image: "https://images.unsplash.com/photo-1614594576605-11382374e721?q=80&w=1000&auto=format&fit=crop",
            price: 449,
            category: "Indoor",
            rating: 4.6,
            bestSeller: false,
          },
        ]}
        renderItem={(plant, index) => (
          <PlantCard
            name={plant.name}
            image={plant.image}
            price={plant.price}
            category={plant.category}
            rating={plant.rating}
            bestSeller={plant.bestSeller}
          />
        )}
        interval={6000}
        bgClass="bg-gradient-to-b from-white to-leaf-50/30"
      />

      {/* Plant Care Service Section */}
      <PlantCareSection />

      {/* Seasonal Offers Section */}
      <SeasonalOffersSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section */}
      <CtaSection />
      
      {/* Floating Contact Button */}
      <FloatingContactButton />
    </div>
  );
};

export default Home;
