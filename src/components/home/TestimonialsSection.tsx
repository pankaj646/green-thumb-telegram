
import { Badge } from "@/components/ui/badge";
import TestimonialCard from "@/components/TestimonialCard";
import AnimatedSection from "@/components/AnimatedSection";

const TestimonialsSection = () => {
  return (
    <AnimatedSection className="py-20 px-6 md:px-12 bg-gradient-to-b from-background to-leaf-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="px-3 py-1 border-leaf-200 bg-leaf-50 text-leaf-700 rounded-full">
            Testimonials
          </Badge>
          <h2 className="text-3xl md:text-4xl font-serif font-medium mt-4 mb-6">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. See what our satisfied customers have to say about their experience with Das Nursery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialCard 
            name="Priya Sharma"
            image="https://randomuser.me/api/portraits/women/32.jpg"
            quote="The plants from Das Nursery have transformed my apartment! They were delivered in perfect condition and the Telegram updates were super helpful."
            rating={5}
          />
          <TestimonialCard 
            name="Rajiv Mehta"
            image="https://randomuser.me/api/portraits/men/44.jpg"
            quote="Rented plants for my daughter's wedding and the service was exceptional. The team was professional and the plants added the perfect touch to our venue."
            rating={5}
          />
          <TestimonialCard 
            name="Ananya Das"
            image="https://randomuser.me/api/portraits/women/65.jpg"
            quote="Their plant care service is worth every penny! The expert knew exactly what my struggling plants needed and now they're thriving."
            rating={4}
          />
        </div>
      </div>
    </AnimatedSection>
  );
};

export default TestimonialsSection;
