
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Gift, Clock, User, ShoppingBag, Calendar, Truck, Heart, Package, Star, Sparkle, TreesIcon, Flower } from "lucide-react";

// Custom components
import AnimatedSection from "@/components/AnimatedSection";
import PlantCard from "@/components/PlantCard";
import TestimonialCard from "@/components/TestimonialCard";

// Create the Home component
const Home = () => {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-leaf-pattern opacity-5 pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="outline" className="px-3 py-1 border-leaf-200 bg-leaf-50 text-leaf-700 rounded-full">
                Siliguri's #1 Online Plant Store
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium tracking-tight leading-tight">
                Your Green Companion in <span className="text-leaf-600">Siliguri</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Bringing Nature to Your Home, Office & Events. We offer fresh, healthy plants with fast delivery and telegram notifications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg" className="bg-leaf-500 hover:bg-leaf-600 text-white transition-all duration-300 hover:shadow-leaf">
                  <Link to="/buy">Buy Plants</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-leaf-200 hover:bg-leaf-50 text-leaf-700 transition-all duration-300">
                  <Link to="/rent">Rent Plants</Link>
                </Button>
              </div>
              <div className="flex flex-wrap gap-6 pt-2">
                <div className="flex items-center gap-2">
                  <Truck className="h-5 w-5 text-leaf-500" />
                  <span className="text-sm text-muted-foreground">Fast Siliguri Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <Leaf className="h-5 w-5 text-leaf-500" />
                  <span className="text-sm text-muted-foreground">Premium Quality Plants</span>
                </div>
                <div className="flex items-center gap-2">
                  <Gift className="h-5 w-5 text-leaf-500" />
                  <span className="text-sm text-muted-foreground">Telegram Updates</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-full bg-leaf-100/50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] animate-gentle-pulse" />
              <img 
                src="https://images.unsplash.com/photo-1545165375-f1c0d3b53388?q=80&w=1000&auto=format&fit=crop" 
                alt="Beautiful plant collection" 
                className="relative z-10 w-full h-auto object-cover rounded-2xl shadow-soft animate-float"
              />
              <div className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-soft z-20 border border-leaf-100 animate-float">
                <div className="flex items-center gap-3">
                  <div className="bg-leaf-500 rounded-full p-2">
                    <Leaf className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">Trusted by</p>
                    <p className="text-leaf-700 font-bold">1000+ Customers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
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

      {/* Featured Plants Section */}
      <AnimatedSection className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <Badge variant="outline" className="px-3 py-1 border-leaf-200 bg-leaf-50 text-leaf-700 rounded-full">
                Featured Plants
              </Badge>
              <h2 className="text-3xl md:text-4xl font-serif font-medium mt-4 mb-2">
                Our Bestsellers
              </h2>
              <p className="text-muted-foreground max-w-xl">
                Discover our most popular plants loved by our customers
              </p>
            </div>
            <Button asChild variant="outline" className="mt-4 md:mt-0 border-leaf-200 hover:bg-leaf-50 text-leaf-700">
              <Link to="/buy">View All Plants</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <PlantCard 
              name="Peace Lily"
              image="https://images.unsplash.com/photo-1616500122272-9ec0b578d239?q=80&w=1000&auto=format&fit=crop"
              price={249}
              category="Indoor"
              rating={4.8}
            />
            <PlantCard 
              name="Snake Plant"
              image="https://images.unsplash.com/photo-1620127807580-990c3ecebd14?q=80&w=1000&auto=format&fit=crop"
              price={399}
              category="Indoor"
              rating={4.9}
              bestSeller
            />
            <PlantCard 
              name="Monstera Deliciosa"
              image="https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=1000&auto=format&fit=crop"
              price={599}
              category="Indoor"
              rating={4.7}
            />
            <PlantCard 
              name="Fiddle Leaf Fig"
              image="https://images.unsplash.com/photo-1682078573205-89574d1b2027?q=80&w=1000&auto=format&fit=crop"
              price={799}
              category="Indoor"
              rating={4.6}
            />
          </div>
        </div>
      </AnimatedSection>

      {/* New Arrivals Section */}
      <AnimatedSection className="py-20 px-6 md:px-12 bg-gradient-to-b from-white to-leaf-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <Badge variant="outline" className="px-3 py-1 border-leaf-200 bg-leaf-50 text-leaf-700 rounded-full">
                Just Arrived
              </Badge>
              <h2 className="text-3xl md:text-4xl font-serif font-medium mt-4 mb-2">
                New Arrivals
              </h2>
              <p className="text-muted-foreground max-w-xl">
                Discover our latest additions to the plant family
              </p>
            </div>
            <Button asChild variant="outline" className="mt-4 md:mt-0 border-leaf-200 hover:bg-leaf-50 text-leaf-700">
              <Link to="/buy">Explore All</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <PlantCard 
              name="Calathea Orbifolia"
              image="https://images.unsplash.com/photo-1637967886160-fd71a17a9d0c?q=80&w=1000&auto=format&fit=crop"
              price={499}
              category="Indoor"
              rating={4.7}
              isNew
            />
            <PlantCard 
              name="String of Pearls"
              image="https://images.unsplash.com/photo-1622576407952-2c1eeac3b1d6?q=80&w=1000&auto=format&fit=crop"
              price={349}
              category="Hanging"
              rating={4.8}
              isNew
            />
            <PlantCard 
              name="Alocasia Polly"
              image="https://images.unsplash.com/photo-1632207538509-cc90944e0388?q=80&w=1000&auto=format&fit=crop"
              price={649}
              category="Indoor"
              rating={4.9}
              isNew
            />
            <PlantCard 
              name="Pink Anthurium"
              image="https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?q=80&w=1000&auto=format&fit=crop"
              price={799}
              category="Flowering"
              rating={4.7}
              isNew
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Plant Care Service Section */}
      <AnimatedSection className="py-20 px-6 md:px-12 bg-cream-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-leaf-pattern opacity-5 pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <img 
                src="https://images.unsplash.com/photo-1623241899289-e9a64204c1e2?q=80&w=1000&auto=format&fit=crop" 
                alt="Plant care expert" 
                className="rounded-2xl shadow-xl object-cover h-[500px] w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-soft z-20 border border-leaf-100 animate-float max-w-[240px]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-leaf-500 rounded-full p-2">
                    <Heart className="h-5 w-5 text-white" />
                  </div>
                  <p className="font-medium text-leaf-700">Plant Care Experts</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Our professionals have 5+ years of experience in plant care and maintenance
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <Badge variant="outline" className="px-3 py-1 border-leaf-200 bg-leaf-50 text-leaf-700 rounded-full">
                Professional Services
              </Badge>
              <h2 className="text-3xl md:text-4xl font-serif font-medium tracking-tight leading-tight">
                Expert Plant Care at Your <span className="text-leaf-600">Doorstep</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Our expert horticulturists visit your home or office to provide professional plant care services, ensuring your green friends thrive.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-leaf-100 rounded-full p-2">
                    <Leaf className="h-5 w-5 text-leaf-600" />
                  </div>
                  <p className="font-medium">Plant Health Assessment</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-leaf-100 rounded-full p-2">
                    <Flower className="h-5 w-5 text-leaf-600" />
                  </div>
                  <p className="font-medium">Disease Treatment</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-leaf-100 rounded-full p-2">
                    <TreesIcon className="h-5 w-5 text-leaf-600" />
                  </div>
                  <p className="font-medium">Pruning & Maintenance</p>
                </div>
              </div>
              <div className="pt-4">
                <Button asChild size="lg" className="bg-leaf-500 hover:bg-leaf-600 text-white transition-all duration-300 hover:shadow-leaf">
                  <Link to="/services">
                    <Heart className="mr-2 h-5 w-5" /> Book Plant Care Service
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Seasonal Offers Section */}
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

      {/* Testimonials Section */}
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

      {/* CTA Section */}
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
    </div>
  );
};

export default Home;
