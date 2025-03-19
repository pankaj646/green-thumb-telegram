
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Calendar, User } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const ServicesSection = () => {
  return (
    <AnimatedSection className="py-20 px-6 md:px-12 bg-gradient-to-b from-background to-leaf-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="px-3 py-1 border-leaf-200 bg-leaf-50 text-leaf-700 rounded-full">
            Our Services
          </Badge>
          <h2 className="text-3xl md:text-4xl font-serif font-medium mt-4 mb-6">
            What We Offer
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From selling fresh plants to renting decorative greenery for events, we provide complete plant solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Buy Plants Card */}
          <Card className="bg-white/70 backdrop-blur-sm border border-leaf-100 shadow-soft overflow-hidden group">
            <CardContent className="p-0">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1000&auto=format&fit=crop" 
                  alt="Buy Plants" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-serif font-medium">Buy Plants</h3>
                  <ShoppingBag className="h-5 w-5 text-leaf-500" />
                </div>
                <p className="text-muted-foreground mb-6">
                  Shop the best air-purifying, decorative, and flowering plants for your space.
                </p>
                <Button asChild variant="outline" className="w-full border-leaf-200 hover:bg-leaf-50 text-leaf-700">
                  <Link to="/buy">Shop Now</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Rent Plants Card */}
          <Card className="bg-white/70 backdrop-blur-sm border border-leaf-100 shadow-soft overflow-hidden group">
            <CardContent className="p-0">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1602737922099-a0a34076049f?q=80&w=1000&auto=format&fit=crop" 
                  alt="Rent Plants" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-serif font-medium">Rent Plants</h3>
                  <Calendar className="h-5 w-5 text-leaf-500" />
                </div>
                <p className="text-muted-foreground mb-6">
                  Make your events & spaces eco-friendly with our beautiful plant rentals.
                </p>
                <Button asChild variant="outline" className="w-full border-leaf-200 hover:bg-leaf-50 text-leaf-700">
                  <Link to="/rent">Rent Now</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Plant Services Card */}
          <Card className="bg-white/70 backdrop-blur-sm border border-leaf-100 shadow-soft overflow-hidden group">
            <CardContent className="p-0">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1466692476655-ab0c26c69cbf?q=80&w=1000&auto=format&fit=crop" 
                  alt="Plant Services" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-serif font-medium">Plant Services</h3>
                  <User className="h-5 w-5 text-leaf-500" />
                </div>
                <p className="text-muted-foreground mb-6">
                  Professional plant maintenance at your doorstep with expert care.
                </p>
                <Button asChild variant="outline" className="w-full border-leaf-200 hover:bg-leaf-50 text-leaf-700">
                  <Link to="/services">Book Now</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ServicesSection;
