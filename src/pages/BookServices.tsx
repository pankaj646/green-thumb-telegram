
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Leaf, Clock, Settings, User } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

// Components
import AnimatedSection from "@/components/AnimatedSection";

// Services data
const services = [
  {
    id: 1,
    title: "Plant Health Check",
    description: "Complete inspection of your plants, diagnosis of issues, and treatment recommendations",
    price: 499,
    duration: "1 hour",
    image: "https://images.unsplash.com/photo-1585444744747-7661b9e0b0ad?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Garden Maintenance",
    description: "Regular pruning, watering, fertilizing, and pest control for your outdoor plants",
    price: 799,
    duration: "2 hours",
    image: "https://images.unsplash.com/photo-1589923188651-268a9765e432?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Plant Repotting",
    description: "Professional repotting service including soil assessment and replacement",
    price: 599,
    duration: "1 hour",
    image: "https://images.unsplash.com/photo-1563906267088-b029e7101114?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Indoor Plant Styling",
    description: "Expert arrangement and styling of your indoor plants for aesthetic appeal",
    price: 1299,
    duration: "3 hours",
    image: "https://images.unsplash.com/photo-1545165375-f1c0d3b53388?q=80&w=1000&auto=format&fit=crop"
  }
];

const BookServices = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [showForm, setShowForm] = useState(false);
  
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    date: "",
    time: "",
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

  // Handle service selection
  const handleServiceSelect = (serviceId: number) => {
    setSelectedService(serviceId);
    setShowForm(true);
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.phone || !formData.address || !formData.date || !formData.time) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    // Show success toast
    toast.success("Your service booking request has been received!");
    
    // Navigate to confirmation page
    setTimeout(() => {
      navigate("/confirmation", { 
        state: { 
          type: "service",
          service: selectedService ? services.find(service => service.id === selectedService) : null,
          formData
        } 
      });
    }, 1000);
  };

  // Handle back button
  const handleBack = () => {
    setShowForm(false);
    setSelectedService(null);
  };

  return (
    <div className="pt-28 pb-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <AnimatedSection className="mb-12">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="outline" className="px-3 py-1 border-leaf-200 bg-leaf-50 text-leaf-700 rounded-full">
              Plant Services
            </Badge>
            <h1 className="text-3xl md:text-5xl font-serif font-medium mt-4 mb-6">
              Your Plants, Our Care
            </h1>
            <p className="text-muted-foreground">
              Professional plant maintenance at your doorstep. Book a plant care expert for watering, 
              pruning, repotting, or pest control on an hourly basis.
            </p>
          </div>
        </AnimatedSection>

        {/* Services Section */}
        {!showForm && (
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service) => (
                <Card key={service.id} className="overflow-hidden border-leaf-100 shadow-soft">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      <div className="h-48 md:h-auto">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6 flex flex-col justify-center">
                        <h3 className="font-serif text-xl font-medium mb-2">{service.title}</h3>
                        <p className="text-muted-foreground mb-3">{service.description}</p>
                        <div className="flex items-center mb-4">
                          <Clock className="h-4 w-4 text-leaf-500 mr-2" />
                          <span className="text-sm text-muted-foreground">{service.duration}</span>
                          <span className="mx-2 text-muted-foreground">•</span>
                          <span className="text-sm font-medium">₹{service.price}</span>
                        </div>
                        <Button 
                          onClick={() => handleServiceSelect(service.id)}
                          className="mt-auto border-leaf-200 hover:bg-leaf-50 text-leaf-700"
                          variant="outline"
                        >
                          Book This Service
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-12 bg-white/70 backdrop-blur-sm rounded-xl border border-leaf-100 shadow-soft p-8">
              <h3 className="font-serif text-2xl font-medium mb-6 text-center">
                Why Choose Our Plant Services?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-leaf-50 rounded-full p-4 mb-4">
                    <User className="h-6 w-6 text-leaf-600" />
                  </div>
                  <h4 className="font-medium mb-2">Expert Specialists</h4>
                  <p className="text-muted-foreground">Trained plant care professionals with years of experience</p>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="bg-leaf-50 rounded-full p-4 mb-4">
                    <Settings className="h-6 w-6 text-leaf-600" />
                  </div>
                  <h4 className="font-medium mb-2">Professional Tools</h4>
                  <p className="text-muted-foreground">We bring all necessary equipment and supplies</p>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="bg-leaf-50 rounded-full p-4 mb-4">
                    <Leaf className="h-6 w-6 text-leaf-600" />
                  </div>
                  <h4 className="font-medium mb-2">Plant Health Guarantee</h4>
                  <p className="text-muted-foreground">Follow-up visits to ensure your plants are thriving</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        )}

        {/* Booking Form */}
        {showForm && selectedService && (
          <AnimatedSection>
            <div className="bg-white/70 backdrop-blur-sm rounded-xl border border-leaf-100 shadow-soft p-8">
              <div className="mb-6">
                <Button 
                  variant="ghost" 
                  className="text-muted-foreground mb-4"
                  onClick={handleBack}
                >
                  ← Back to services
                </Button>
                <h3 className="font-serif text-2xl font-medium mb-2">
                  Book {services.find(service => service.id === selectedService)?.title}
                </h3>
                <p className="text-muted-foreground">
                  {services.find(service => service.id === selectedService)?.description}
                </p>
                <div className="flex items-center mt-2">
                  <Clock className="h-4 w-4 text-leaf-500 mr-2" />
                  <span className="text-sm text-muted-foreground">
                    {services.find(service => service.id === selectedService)?.duration}
                  </span>
                  <span className="mx-2 text-muted-foreground">•</span>
                  <span className="text-sm font-medium">
                    ₹{services.find(service => service.id === selectedService)?.price}
                  </span>
                </div>
              </div>
              
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
                      <Label htmlFor="address">Service Address *</Label>
                      <Input 
                        id="address" 
                        name="address" 
                        placeholder="Where should we provide the service?" 
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  
                  {/* Service Details */}
                  <div className="space-y-4">
                    <h4 className="font-medium text-lg mb-4">Service Details</h4>
                    
                    <div className="space-y-2">
                      <Label htmlFor="date">Preferred Date *</Label>
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
                      <Label htmlFor="time">Preferred Time *</Label>
                      <Select 
                        onValueChange={(value) => handleSelectChange("time", value)}
                        defaultValue={formData.time}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="9:00 AM - 11:00 AM">9:00 AM - 11:00 AM</SelectItem>
                          <SelectItem value="11:00 AM - 1:00 PM">11:00 AM - 1:00 PM</SelectItem>
                          <SelectItem value="2:00 PM - 4:00 PM">2:00 PM - 4:00 PM</SelectItem>
                          <SelectItem value="4:00 PM - 6:00 PM">4:00 PM - 6:00 PM</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="notes">Special Instructions</Label>
                      <Textarea 
                        id="notes" 
                        name="notes" 
                        placeholder="Any specific requirements or details about your plants" 
                        value={formData.notes}
                        onChange={handleInputChange}
                        className="resize-none"
                        rows={4}
                      />
                    </div>
                  </div>
                </div>
                
                <Button 
                  type="submit"
                  className="w-full mt-6 bg-leaf-500 hover:bg-leaf-600 text-white transition-all duration-300 hover:shadow-leaf"
                >
                  Book Service
                </Button>
              </form>
            </div>
          </AnimatedSection>
        )}
        
        {/* Additional Information */}
        <AnimatedSection className="mt-16">
          <div className="bg-muted/50 rounded-xl p-8 text-center">
            <h3 className="font-serif text-xl font-medium mb-4">Need a Custom Plant Care Solution?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We also offer custom plant care packages for homes, offices, and commercial spaces.
              Contact us to discuss your specific requirements.
            </p>
            <Button className="bg-leaf-500 hover:bg-leaf-600 text-white">
              Contact for Custom Services
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default BookServices;
