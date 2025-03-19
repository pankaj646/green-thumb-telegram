
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";

const CtaSection = () => {
  return (
    <AnimatedSection className="py-20 px-6 md:px-12 relative">
      <div className="absolute inset-0 bg-leaf-pattern opacity-5 pointer-events-none" />
      <div className="max-w-5xl mx-auto bg-white/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-soft border border-leaf-100">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-10 md:p-12 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
              Ready to Add Some Greenery?
            </h2>
            <p className="text-muted-foreground mb-8">
              Whether you want to buy plants, rent them for an event, or need professional plant care services, we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-leaf-500 hover:bg-leaf-600 text-white transition-all duration-300 hover:shadow-leaf">
                <Link to="/buy">Shop Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-leaf-200 hover:bg-leaf-50 text-leaf-700">
                <Link to="/services">Book Services</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-80 md:h-auto">
            <img 
              src="https://images.unsplash.com/photo-1567748157439-651aca2ff064?q=80&w=1000&auto=format&fit=crop" 
              alt="Beautiful plant collection" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default CtaSection;
