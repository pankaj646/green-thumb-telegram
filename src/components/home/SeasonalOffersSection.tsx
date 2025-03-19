
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Package } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const SeasonalOffersSection = () => {
  return (
    <AnimatedSection className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="px-3 py-1 border-leaf-200 bg-leaf-50 text-leaf-700 rounded-full">
            Limited Time
          </Badge>
          <h2 className="text-3xl md:text-4xl font-serif font-medium mt-4 mb-6">
            Seasonal Offers
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Take advantage of our special seasonal discounts and bundles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-gradient-to-br from-soil-50 to-cream-100 border-leaf-100 shadow-soft overflow-hidden group">
            <CardContent className="p-8 flex flex-col md:flex-row gap-6 items-center">
              <div className="relative w-full md:w-1/3 aspect-square flex-shrink-0">
                <div className="absolute inset-0 bg-white/50 rounded-full"></div>
                <div className="absolute inset-2 bg-white/80 rounded-full"></div>
                <img 
                  src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=1000&auto=format&fit=crop" 
                  alt="Monsoon Plant Bundle" 
                  className="absolute inset-4 w-[calc(100%-32px)] h-[calc(100%-32px)] object-cover rounded-full"
                />
                <div className="absolute -top-3 -right-3 bg-cream-500 rounded-full p-3 shadow-md rotate-12">
                  <Star className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-serif font-medium mb-3">Monsoon Plant Bundle</h3>
                <p className="text-muted-foreground mb-4">
                  Get 3 monsoon-friendly plants with a complimentary ceramic pot and organic fertilizer.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-leaf-100 text-leaf-700 hover:bg-leaf-200">30% OFF</Badge>
                  <Badge className="bg-white/70 text-leaf-700 hover:bg-white">Free Pot</Badge>
                  <Badge className="bg-white/70 text-leaf-700 hover:bg-white">Free Fertilizer</Badge>
                </div>
                <div className="flex items-end gap-2 mb-5">
                  <span className="text-2xl font-bold text-leaf-600">₹1,499</span>
                  <span className="text-lg line-through text-muted-foreground">₹2,199</span>
                </div>
                <Button asChild className="bg-leaf-500 hover:bg-leaf-600 text-white">
                  <Link to="/buy">Shop Now</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-leaf-50 to-cream-100 border-leaf-100 shadow-soft overflow-hidden group">
            <CardContent className="p-8 flex flex-col md:flex-row gap-6 items-center">
              <div className="relative w-full md:w-1/3 aspect-square flex-shrink-0">
                <div className="absolute inset-0 bg-white/50 rounded-full"></div>
                <div className="absolute inset-2 bg-white/80 rounded-full"></div>
                <img 
                  src="https://images.unsplash.com/photo-1603912699214-92627f304eb6?q=80&w=1000&auto=format&fit=crop" 
                  alt="Office Greenery Pack" 
                  className="absolute inset-4 w-[calc(100%-32px)] h-[calc(100%-32px)] object-cover rounded-full"
                />
                <div className="absolute -top-3 -right-3 bg-leaf-500 rounded-full p-3 shadow-md rotate-12">
                  <Package className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-serif font-medium mb-3">Office Greenery Pack</h3>
                <p className="text-muted-foreground mb-4">
                  Transform your workspace with 5 air-purifying plants perfect for office environments.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-leaf-100 text-leaf-700 hover:bg-leaf-200">25% OFF</Badge>
                  <Badge className="bg-white/70 text-leaf-700 hover:bg-white">Free Delivery</Badge>
                  <Badge className="bg-white/70 text-leaf-700 hover:bg-white">Care Guide</Badge>
                </div>
                <div className="flex items-end gap-2 mb-5">
                  <span className="text-2xl font-bold text-leaf-600">₹2,299</span>
                  <span className="text-lg line-through text-muted-foreground">₹2,999</span>
                </div>
                <Button asChild className="bg-leaf-500 hover:bg-leaf-600 text-white">
                  <Link to="/buy">Shop Now</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default SeasonalOffersSection;
