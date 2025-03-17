
import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar, Check, Clock, Leaf, MapPin } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Components
import AnimatedSection from "@/components/AnimatedSection";
import RentalPackageCard from "@/components/RentalPackageCard";

// Rental packages data
const rentalPackages = [
  {
    id: 1,
    title: "Daily Event",
    description: "Perfect for weddings, parties, and short events",
    price: 1999,
    duration: "1-3 days",
    includedPlants: 15,
    features: [
      "Mixed variety of decorative plants",
      "Custom arrangement options",
      "Free delivery and pickup in Siliguri",
      "Setup assistance available",
      "Telegram confirmation and reminders"
    ],
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000&auto=format&fit=crop",
    popular: false
  },
  {
    id: 2,
    title: "Weekly Package",
    description: "Ideal for exhibitions, extended events, or temporary decoration",
    price: 4999,
    duration: "1-2 weeks",
    includedPlants: 25,
    features: [
      "Wide selection of premium plants",
      "Professional arrangement included",
      "Free delivery and pickup in Siliguri",
      "Mid-week plant health check",
      "Telegram confirmation and updates",
      "Replacement guarantee"
    ],
    image: "https://images.unsplash.com/photo-1575500221017-ea5e7b7d0e34?q=80&w=1000&auto=format&fit=crop",
    popular: true
  },
  {
    id: 3,
    title: "Monthly Office",
    description: "Long-term solution for offices, retail spaces, and businesses",
    price: 9999,
    duration: "1-3 months",
    includedPlants: 40,
    features: [
      "Premium office-friendly plants",
      "Custom planters included",
      "Professional arrangement service",
      "Bi-weekly maintenance included",
      "Plant rotation option",
      "Telegram updates and notifications",
      "Extension discounts available"
    ],
    image: "https://images.unsplash.com/photo-1624042861856-0e93ea39cbf6?q=80&w=1000&auto=format&fit=crop",
    popular: false
  }
];

// Custom plant categories for rentals
const plantCategories = [
  {
    name: "Decorative Foliage",
    description: "Lush green plants to create a vibrant atmosphere",
    image: "https://images.unsplash.com/photo-1632501641568-4905068f74b1?q=80&w=1000&auto=format&fit=crop"
  },
  {
    name: "Flowering Plants",
    description: "Colorful blooms to add a touch of elegance",
    image: "https://images.unsplash.com/photo-1504198322253-cfa87a0ff60f?q=80&w=1000&auto=format&fit=crop"
  },
  {
    name: "Statement Pieces",
    description: "Large, impressive plants for focal points",
    image: "https://images.unsplash.com/photo-1627364588168-643d8ab4b40f?q=80&w=1000&auto=format&fit=crop"
  },
  {
    name: "Themed Collections",
    description: "Curated plant sets for specific aesthetics",
    image: "https://images.unsplash.com/photo-1502394202744-021cfbb17454?q=80&w=1000&auto=format&fit=crop"
  }
];

const RentPlants = () => {
  const navigate = useNavigate();
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState("packages");
  
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    date: "",
    duration: "",
    notes: ""
  });

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle select changes
  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle package selection
  const handlePackageSelect = (packageId: number) => {
    setSelectedPackage(packageId);
    setActiveTab("custom"); // Move to customization tab
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.phone || !formData.date || !formData.duration) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    // Show success toast
    toast.success("Your plant rental request has been received!");
    
    // Navigate to confirmation page
    setTimeout(() => {
      navigate("/confirmation", { 
        state: { 
          type: "rental",
          package: selectedPackage ? rentalPackages.find(pkg => pkg.id === selectedPackage) : null,
          formData
        } 
      });
    }, 1000);
  };

  return (
    <div className="pt-28 pb-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <AnimatedSection className="mb-12">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="outline" className="px-3 py-1 border-leaf-200 bg-leaf-50 text-leaf-700 rounded-full">
              Rent Plants
            </Badge>
            <h1 className="text-3xl md:text-5xl font-serif font-medium mt-4 mb-6">
              Green Up Your Events & Spaces
            </h1>
            <p className="text-muted-foreground">
              Make your wedding, office, or event venue eco-friendly with our beautiful plant rentals.
              We offer flexible rental plans with quick delivery and hassle-free pickup.
            </p>
          </div>
        </AnimatedSection>

        {/* Main Content */}
        <Tabs defaultValue="packages" value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="bg-muted/80 backdrop-blur-sm w-full justify-center">
            <TabsTrigger value="packages">Rental Packages</TabsTrigger>
            <TabsTrigger value="plants">Plant Types</TabsTrigger>
            <TabsTrigger value="custom">Customize & Book</TabsTrigger>
          </TabsList>
          
          {/* Packages Tab */}
          <TabsContent value="packages">
            <AnimatedSection>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {rentalPackages.map((pkg) => (
                  <RentalPackageCard
                    key={pkg.id}
                    title={pkg.title}
                    description={pkg.description}
                    price={pkg.price}
                    duration={pkg.duration}
                    includedPlants={pkg.includedPlants}
                    features={pkg.features}
                    image={pkg.image}
                    popular={pkg.popular}
                    onSelect={() => handlePackageSelect(pkg.id)}
                  />
                ))}
              </div>
              
              <div className="mt-12 bg-white/70 backdrop-blur-sm rounded-xl border border-leaf-100 shadow-soft p-8">
                <h3 className="font-serif text-2xl font-medium mb-6 text-center">
                  Why Rent Plants From Us?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-leaf-50 rounded-full p-4 mb-4">
                      <Leaf className="h-6 w-6 text-leaf-600" />
                    </div>
                    <h4 className="font-medium mb-2">Premium Quality</h4>
                    <p className="text-muted-foreground">Healthy, vibrant plants that create the perfect atmosphere</p>
                  </div>
                  
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-leaf-50 rounded-full p-4 mb-4">
                      <Clock className="h-6 w-6 text-leaf-600" />
                    </div>
                    <h4 className="font-medium mb-2">Flexible Duration</h4>
                    <p className="text-muted-foreground">From one-day events to long-term office rentals</p>
                  </div>
                  
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-leaf-50 rounded-full p-4 mb-4">
                      <MapPin className="h-6 w-6 text-leaf-600" />
                    </div>
                    <h4 className="font-medium mb-2">Hassle-Free Service</h4>
                    <p className="text-muted-foreground">We handle delivery, setup, and pickup for your convenience</p>
                  </div>
                  
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-leaf-50 rounded-full p-4 mb-4">
                      <Calendar className="h-6 w-6 text-leaf-600" />
                    </div>
                    <h4 className="font-medium mb-2">Easy Booking</h4>
                    <p className="text-muted-foreground">Simple booking process with Telegram confirmations</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </TabsContent>
          
          {/* Plants Tab */}
          <TabsContent value="plants">
            <AnimatedSection>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {plantCategories.map((category, index) => (
                  <Card key={index} className="overflow-hidden border-leaf-100 shadow-soft">
                    <CardContent className="p-0">
                      <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="h-48 md:h-full">
                          <img
                            src={category.image}
                            alt={category.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-6 flex flex-col justify-center">
                          <h3 className="font-serif text-xl font-medium mb-2">{category.name}</h3>
                          <p className="text-muted-foreground mb-4">{category.description}</p>
                          <Button variant="outline" className="mt-auto border-leaf-200 hover:bg-leaf-50 text-leaf-700">
                            Explore Category
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mt-12 bg-white/70 backdrop-blur-sm rounded-xl border border-leaf-100 shadow-soft p-8">
                <h3 className="font-serif text-2xl font-medium mb-4 text-center">
                  Custom Plant Rentals
                </h3>
                <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-6">
                  Looking for something specific? We offer fully customizable plant rental options
                  to meet your exact needs for any event or space.
                </p>
                <div className="flex justify-center">
                  <Button 
                    onClick={() => setActiveTab("custom")}
                    className="bg-leaf-500 hover:bg-leaf-600 text-white transition-all duration-300 hover:shadow-leaf"
                  >
                    Customize Your Rental
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </TabsContent>
          
          {/* Customize Tab */}
          <TabsContent value="custom">
            <AnimatedSection>
              <div className="bg-white/70 backdrop-blur-sm rounded-xl border border-leaf-100 shadow-soft p-8">
                <h3 className="font-serif text-2xl font-medium mb-6 text-center">
                  {selectedPackage 
                    ? `Customize Your ${rentalPackages.find(pkg => pkg.id === selectedPackage)?.title} Package` 
                    : "Customize Your Plant Rental"}
                </h3>
                
                {selectedPackage && (
                  <div className="mb-8 p-4 bg-leaf-50 rounded-lg border border-leaf-100">
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-leaf-600" />
                      <p className="font-medium">
                        Selected: {rentalPackages.find(pkg => pkg.id === selectedPackage)?.title} (₹{rentalPackages.find(pkg => pkg.id === selectedPackage)?.price})
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2 ml-8">
                      {rentalPackages.find(pkg => pkg.id === selectedPackage)?.includedPlants} plants included • {rentalPackages.find(pkg => pkg.id === selectedPackage)?.duration} rental
                    </p>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Personal Information */}
                    <div className="space-y-4">
                      <h4 className="font-medium text-lg mb-4">Personal Information</h4>
                      
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input 
                          id="name" 
                          name="name" 
                          placeholder="Your full name" 
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input 
                          id="email" 
                          name="email" 
                          type="email" 
                          placeholder="Your email address" 
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input 
                          id="phone" 
                          name="phone" 
                          placeholder="Your phone number" 
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="address">Delivery Address *</Label>
                        <Input 
                          id="address" 
                          name="address" 
                          placeholder="Delivery location" 
                          value={formData.address}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    
                    {/* Rental Details */}
                    <div className="space-y-4">
                      <h4 className="font-medium text-lg mb-4">Rental Details</h4>
                      
                      <div className="space-y-2">
                        <Label htmlFor="date">Delivery Date *</Label>
                        <Input 
                          id="date" 
                          name="date" 
                          type="date" 
                          value={formData.date}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="duration">Rental Duration *</Label>
                        <Select 
                          onValueChange={(value) => handleSelectChange("duration", value)}
                          defaultValue={formData.duration}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select duration" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1 day">1 day</SelectItem>
                            <SelectItem value="2-3 days">2-3 days</SelectItem>
                            <SelectItem value="1 week">1 week</SelectItem>
                            <SelectItem value="2 weeks">2 weeks</SelectItem>
                            <SelectItem value="1 month">1 month</SelectItem>
                            <SelectItem value="3 months">3 months</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="notes">Special Requirements</Label>
                        <Input 
                          id="notes" 
                          name="notes" 
                          placeholder="Any specific requirements or preferences" 
                          value={formData.notes}
                          onChange={handleInputChange}
                        />
                      </div>
                      
                      {!selectedPackage && (
                        <div className="space-y-2">
                          <Label htmlFor="package">Package Type</Label>
                          <Select 
                            onValueChange={(value) => setSelectedPackage(Number(value))}
                            defaultValue={selectedPackage?.toString() || ""}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select a package (optional)" />
                            </SelectTrigger>
                            <SelectContent>
                              {rentalPackages.map((pkg) => (
                                <SelectItem key={pkg.id} value={pkg.id.toString()}>
                                  {pkg.title} - ₹{pkg.price}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      type="button"
                      variant="outline"
                      className="border-leaf-200 hover:bg-leaf-50 text-leaf-700"
                      onClick={() => setActiveTab("packages")}
                    >
                      Back to Packages
                    </Button>
                    <Button 
                      type="submit"
                      className="bg-leaf-500 hover:bg-leaf-600 text-white transition-all duration-300 hover:shadow-leaf"
                    >
                      Submit Rental Request
                    </Button>
                  </div>
                </form>
              </div>
              
              <div className="mt-12 p-6 bg-muted/50 rounded-xl text-center">
                <h4 className="font-serif text-lg font-medium mb-2">Need Help Planning Your Event?</h4>
                <p className="text-muted-foreground mb-4">
                  Our plant styling experts can help you choose the perfect plants for your space.
                  Contact us for a consultation.
                </p>
                <Button variant="outline" className="border-leaf-200 hover:bg-leaf-50 text-leaf-700">
                  Contact an Expert
                </Button>
              </div>
            </AnimatedSection>
          </TabsContent>
        </Tabs>
        
        {/* Testimonials Section */}
        <AnimatedSection className="mt-16">
          <div className="bg-white/70 backdrop-blur-sm rounded-xl border border-leaf-100 shadow-soft p-8">
            <h3 className="font-serif text-2xl font-medium mb-6 text-center">
              What Our Rental Customers Say
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-leaf-100 bg-white/50 shadow-sm">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <p className="italic text-muted-foreground">
                      "The plants from Das Nursery transformed our wedding venue! They were delivered on time, looked amazing, and were picked up promptly afterward. Excellent service!"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden">
                        <img 
                          src="https://randomuser.me/api/portraits/women/42.jpg" 
                          alt="Customer" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium">Anjali Sharma</p>
                        <p className="text-sm text-muted-foreground">Wedding Event</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-leaf-100 bg-white/50 shadow-sm">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <p className="italic text-muted-foreground">
                      "We've been renting plants for our office for 3 months and the difference in atmosphere is remarkable. The bi-weekly maintenance keeps everything looking fresh."
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden">
                        <img 
                          src="https://randomuser.me/api/portraits/men/32.jpg" 
                          alt="Customer" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium">Rajiv Mehta</p>
                        <p className="text-sm text-muted-foreground">Office Manager</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-leaf-100 bg-white/50 shadow-sm">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <p className="italic text-muted-foreground">
                      "The custom plant arrangement for our product launch event exceeded our expectations. The Telegram updates kept us informed every step of the way."
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden">
                        <img 
                          src="https://randomuser.me/api/portraits/women/68.jpg" 
                          alt="Customer" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium">Priya Dutta</p>
                        <p className="text-sm text-muted-foreground">Event Planner</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default RentPlants;
