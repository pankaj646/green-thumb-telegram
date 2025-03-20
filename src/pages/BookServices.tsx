import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon, Star, CheckCircle, Leaf, Clock, User, CreditCard, MapPin, ChevronDown, ChevronRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { sendTelegramNotification, createServiceNotification } from "@/utils/telegramNotifications";

// Components
import AnimatedSection from "@/components/AnimatedSection";

// Services data
const serviceCategories = [
  {
    id: 1,
    title: "Basic Maintenance",
    icon: "🌾",
    description: "Essential care for your garden including mowing, watering, weeding, and basic pruning services.",
    startingPrice: 299,
    image: "https://images.unsplash.com/photo-1589923188651-268a9765e432?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Advanced Garden Care",
    icon: "🌿",
    description: "Comprehensive care including fertilization, pest control, disease management, and seasonal maintenance.",
    startingPrice: 399,
    image: "https://images.unsplash.com/photo-1585444744747-7661b9e0b0ad?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Specialized Services",
    icon: "🎍",
    description: "Expert services for specific plant types including bonsai maintenance, orchid care, and exotic plant management.",
    startingPrice: 499,
    image: "https://images.unsplash.com/photo-1599629954294-14df9f8238da?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Custom & Commercial Care",
    icon: "🏡",
    description: "Tailored maintenance plans for residential gardens, office spaces, and commercial landscape projects.",
    startingPrice: 599,
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2074&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "New Garden Creation",
    icon: "🦋",
    description: "Design and implementation of new gardens, including layout planning, soil preparation, and plant selection.",
    startingPrice: 799,
    image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?q=80&w=2070&auto=format&fit=crop"
  }
];

const pricingTable = [
  { service: "Lawn Mowing", duration: "1-2 hours", hourlyRate: 299 },
  { service: "Weeding & Cleaning", duration: "2-3 hours", hourlyRate: 349 },
  { service: "Plant Pruning", duration: "1-3 hours", hourlyRate: 399 },
  { service: "Garden Design Consultation", duration: "1-2 hours", hourlyRate: 499 },
  { service: "Complete Garden Overhaul", duration: "4-8 hours", hourlyRate: 599 }
];

const testimonials = [
  {
    name: "Priya Sharma",
    rating: 5,
    comment: "The garden expert arrived on time and completely transformed my neglected backyard. Very professional service!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop"
  },
  {
    name: "Amit Patel",
    rating: 5,
    comment: "I've been using their weekly maintenance service for 3 months and my garden has never looked better. Highly recommended!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop"
  },
  {
    name: "Riya Gupta",
    rating: 4,
    comment: "Great service at a reasonable price. The gardener was very knowledgeable about local plants and gave great tips.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop"
  }
];

const faqs = [
  {
    question: "How does hourly pricing work?",
    answer: "Our hourly pricing begins from the time the gardener arrives at your location. You are charged only for the actual time spent working on your garden. There's a minimum booking duration of 1 hour, and after that, we charge in 30-minute increments."
  },
  {
    question: "Do you provide tools & materials?",
    answer: "Yes, our gardeners come fully equipped with all necessary tools for the booked service. If specific materials like fertilizers, seeds, or plants are required, you can either provide them or we can source them for you at an additional cost."
  },
  {
    question: "Can I book a regular gardener for weekly care?",
    answer: "Absolutely! We offer weekly, bi-weekly, and monthly maintenance plans with the same gardener assigned to your property for consistency. Regular bookings receive a 10% discount on our standard hourly rates."
  },
  {
    question: "What areas in Siliguri do you cover?",
    answer: "We provide gardening services throughout Siliguri and surrounding areas including Matigara, Bagdogra, Naxalbari, and up to Sukna. For locations outside these areas, additional travel charges may apply."
  },
  {
    question: "What if I'm not satisfied with the service?",
    answer: "Customer satisfaction is our priority. If you're not completely satisfied with the service provided, please contact us within 24 hours and we'll arrange for the gardener to return and address any issues at no additional cost."
  }
];

const BookServices = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [date, setDate] = useState<Date | undefined>(undefined);
  
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    service: "",
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
  const handleServiceSelect = (categoryId: number) => {
    setSelectedCategory(categoryId);
    setShowBookingForm(true);
    // Scroll to booking form
    setTimeout(() => {
      const bookingElement = document.getElementById('booking-form');
      bookingElement?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.phone || !formData.address || !formData.service || !date || !formData.time) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    try {
      // Send notification to Telegram
      const serviceDate = date ? format(date, "MMMM d, yyyy") : "";
      
      const notificationMessage = createServiceNotification({
        name: formData.name,
        email: formData.email || "Not provided",
        phone: formData.phone,
        address: formData.address,
        date: serviceDate,
        time: formData.time,
        serviceType: formData.service,
        notes: formData.notes
      });
      
      const notificationSent = await sendTelegramNotification(notificationMessage);
      
      if (notificationSent) {
        // Show success toast
        toast.success("Your gardening service booking has been confirmed!");
        
        // Navigate to confirmation page
        setTimeout(() => {
          navigate("/confirmation", { 
            state: { 
              type: "gardening-service",
              service: selectedCategory 
                ? serviceCategories.find(category => category.id === selectedCategory)?.title 
                : formData.service,
              date: serviceDate,
              time: formData.time,
              formData
            } 
          });
        }, 1000);
      } else {
        // Still navigate but show a different message
        toast.success("Your booking has been received! Our team will contact you soon.");
        
        setTimeout(() => {
          navigate("/confirmation", { 
            state: { 
              type: "gardening-service",
              service: selectedCategory 
                ? serviceCategories.find(category => category.id === selectedCategory)?.title 
                : formData.service,
              date: serviceDate,
              time: formData.time,
              formData
            } 
          });
        }, 1000);
      }
    } catch (error) {
      console.error("Error sending service booking notification:", error);
      toast.success("Your booking has been received! Our team will contact you soon.");
      
      setTimeout(() => {
        navigate("/confirmation", { 
          state: { 
            type: "gardening-service",
            service: selectedCategory 
              ? serviceCategories.find(category => category.id === selectedCategory)?.title 
              : formData.service,
            date: date ? format(date, "MMMM d, yyyy") : "",
            time: formData.time,
            formData
          } 
        });
      }, 1000);
    }
  };

  return (
    <div className="pt-28 pb-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <AnimatedSection className="mb-12">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="outline" className="px-3 py-1 border-leaf-200 bg-leaf-50 text-leaf-700 rounded-full">
              Garden Services
            </Badge>
            <h1 className="text-3xl md:text-5xl font-serif font-medium mt-4 mb-6">
              Expert Garden Care in Siliguri
            </h1>
            <p className="text-muted-foreground">
              Book professional gardeners by the hour for all your garden maintenance needs. 
              From basic lawn mowing to complete garden transformations, our local experts 
              have you covered.
            </p>
          </div>
        </AnimatedSection>

        {/* Service Categories Section */}
        <AnimatedSection>
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-serif font-medium mb-8 text-center">
              🌱 Choose Your Garden Service
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceCategories.map((category) => (
                <Card key={category.id} className="overflow-hidden border-leaf-100 shadow-soft hover:shadow-soft-lg transition-all duration-300">
                  <div className="h-48 relative overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                      <span className="text-4xl">{category.icon}</span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl font-medium mb-2">{category.title}</h3>
                    <p className="text-muted-foreground mb-4">{category.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="text-leaf-700 font-medium">
                        From ₹{category.startingPrice}/hr
                      </div>
                      <Button 
                        onClick={() => handleServiceSelect(category.id)}
                        className="gap-2 border-leaf-200 hover:bg-leaf-50 text-leaf-700"
                        variant="outline"
                      >
                        Book Now <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Pricing Table Section */}
        <AnimatedSection>
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-serif font-medium mb-8 text-center">
              💰 Transparent Hourly Pricing for Every Service
            </h2>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-xl border border-leaf-100 shadow-soft overflow-hidden">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Service Type</TableHead>
                      <TableHead>Duration</TableHead>
                      <TableHead>Hourly Rate</TableHead>
                      <TableHead className="text-right">Book</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pricingTable.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{item.service}</TableCell>
                        <TableCell>{item.duration}</TableCell>
                        <TableCell>₹{item.hourlyRate}/hr</TableCell>
                        <TableCell className="text-right">
                          <Button 
                            onClick={() => {
                              handleSelectChange("service", item.service);
                              setShowBookingForm(true);
                              // Scroll to booking form
                              setTimeout(() => {
                                const bookingElement = document.getElementById('booking-form');
                                bookingElement?.scrollIntoView({ behavior: 'smooth' });
                              }, 100);
                            }}
                            variant="outline" 
                            size="sm"
                            className="border-leaf-200 hover:bg-leaf-50 text-leaf-700"
                          >
                            Book
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <div className="p-4 border-t border-leaf-100 flex justify-center">
                <Button 
                  onClick={() => {
                    setShowBookingForm(true);
                    // Scroll to booking form
                    setTimeout(() => {
                      const bookingElement = document.getElementById('booking-form');
                      bookingElement?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="gap-2 bg-leaf-500 hover:bg-leaf-600 text-white"
                >
                  Get a Custom Quote <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Booking Form Section */}
        <AnimatedSection>
          <div id="booking-form" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-serif font-medium mb-8 text-center">
              📅 Book a Gardening Expert in Siliguri
            </h2>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-xl border border-leaf-100 shadow-soft p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Step 1: Select Service */}
                  <div className="space-y-4">
                    <div className="bg-leaf-50 rounded-full w-10 h-10 flex items-center justify-center mb-2">
                      <span className="font-medium text-leaf-700">1</span>
                    </div>
                    <h3 className="text-xl font-medium">Select a Service</h3>
                    
                    <div className="space-y-2">
                      <Label htmlFor="service">Service Type *</Label>
                      <Select 
                        onValueChange={(value) => handleSelectChange("service", value)}
                        defaultValue={formData.service}
                        value={formData.service}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Choose a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {serviceCategories.map(category => (
                            <SelectItem key={category.id} value={category.title}>
                              {category.icon} {category.title}
                            </SelectItem>
                          ))}
                          {pricingTable.map((item, index) => (
                            <SelectItem key={`service-${index}`} value={item.service}>
                              {item.service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  {/* Step 2: Pick Date & Time */}
                  <div className="space-y-4">
                    <div className="bg-leaf-50 rounded-full w-10 h-10 flex items-center justify-center mb-2">
                      <span className="font-medium text-leaf-700">2</span>
                    </div>
                    <h3 className="text-xl font-medium">Pick Date & Time</h3>
                    
                    <div className="space-y-2">
                      <Label htmlFor="date">Preferred Date *</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !date && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : <span>Select a date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 pointer-events-auto">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                            disabled={(date) => {
                              const today = new Date();
                              today.setHours(0, 0, 0, 0);
                              return date < today;
                            }}
                            className="pointer-events-auto"
                          />
                        </PopoverContent>
                      </Popover>
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
                  </div>
                  
                  {/* Step 3: Contact Details */}
                  <div className="space-y-4">
                    <div className="bg-leaf-50 rounded-full w-10 h-10 flex items-center justify-center mb-2">
                      <span className="font-medium text-leaf-700">3</span>
                    </div>
                    <h3 className="text-xl font-medium">Contact Details</h3>
                    
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
                      <Label htmlFor="email">Email *</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        placeholder="Your email" 
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
                      <Label htmlFor="address">Address in Siliguri *</Label>
                      <Input 
                        id="address" 
                        name="address" 
                        placeholder="Your address" 
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="notes">Special Instructions</Label>
                  <Textarea 
                    id="notes" 
                    name="notes" 
                    placeholder="Any specific requirements or details about your garden" 
                    value={formData.notes}
                    onChange={handleInputChange}
                    className="resize-none h-24"
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full md:w-auto md:px-12 bg-leaf-500 hover:bg-leaf-600 text-white transition-all duration-300 hover:shadow-leaf"
                >
                  Book Garden Service
                </Button>
              </form>
            </div>
          </div>
        </AnimatedSection>

        {/* Why Choose Us Section */}
        <AnimatedSection>
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-serif font-medium mb-8 text-center">
              🌍 Why Book Gardening Services with Us?
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="bg-white/70 backdrop-blur-sm rounded-xl border border-leaf-100 shadow-soft p-6 flex flex-col items-center text-center">
                <div className="bg-leaf-50 rounded-full p-4 mb-4">
                  <User className="h-6 w-6 text-leaf-600" />
                </div>
                <h3 className="font-medium mb-2">Trained & Verified Gardeners</h3>
                <p className="text-sm text-muted-foreground">Every gardener is background checked and skilled in plant care</p>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm rounded-xl border border-leaf-100 shadow-soft p-6 flex flex-col items-center text-center">
                <div className="bg-leaf-50 rounded-full p-4 mb-4">
                  <Clock className="h-6 w-6 text-leaf-600" />
                </div>
                <h3 className="font-medium mb-2">Flexible Hourly Pricing</h3>
                <p className="text-sm text-muted-foreground">Pay only for the time you need, no hidden charges</p>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm rounded-xl border border-leaf-100 shadow-soft p-6 flex flex-col items-center text-center">
                <div className="bg-leaf-50 rounded-full p-4 mb-4">
                  <CreditCard className="h-6 w-6 text-leaf-600" />
                </div>
                <h3 className="font-medium mb-2">Easy Booking & Payment</h3>
                <p className="text-sm text-muted-foreground">Simple booking process with multiple payment options</p>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm rounded-xl border border-leaf-100 shadow-soft p-6 flex flex-col items-center text-center">
                <div className="bg-leaf-50 rounded-full p-4 mb-4">
                  <MapPin className="h-6 w-6 text-leaf-600" />
                </div>
                <h3 className="font-medium mb-2">Local Experts in Siliguri</h3>
                <p className="text-sm text-muted-foreground">Gardeners who understand local climate and plant needs</p>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm rounded-xl border border-leaf-100 shadow-soft p-6 flex flex-col items-center text-center">
                <div className="bg-leaf-50 rounded-full p-4 mb-4">
                  <Leaf className="h-6 w-6 text-leaf-600" />
                </div>
                <h3 className="font-medium mb-2">Eco-Friendly Practices</h3>
                <p className="text-sm text-muted-foreground">Sustainable gardening methods that protect the environment</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Testimonials Section */}
        <AnimatedSection>
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-serif font-medium mb-8 text-center">
              💬 What Our Customers Say
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="bg-white/70 backdrop-blur-sm rounded-xl border border-leaf-100 shadow-soft p-6"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium">{testimonial.name}</h4>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} 
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">"{testimonial.comment}"</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 flex justify-center">
              <div className="bg-muted/30 rounded-full px-6 py-3 flex items-center">
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400 mr-2" />
                <span className="font-medium mr-2">4.8/5</span>
                <span className="text-muted-foreground">based on 120+ reviews</span>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* FAQ Section */}
        <AnimatedSection>
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-serif font-medium mb-8 text-center">
              ❓ Frequently Asked Questions
            </h2>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-xl border border-leaf-100 shadow-soft p-6 md:p-8">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </AnimatedSection>
        
        {/* CTA Section */}
        <AnimatedSection>
          <div className="bg-leaf-50 rounded-xl border border-leaf-100 shadow-soft p-8 text-center">
            <h2 className="text-2xl font-serif font-medium mb-4">Ready to Transform Your Garden?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Book a professional gardener today and enjoy a beautifully maintained garden without the hard work.
              Our experts are just a click away.
            </p>
            <Button 
              onClick={() => {
                setShowBookingForm(true);
                // Scroll to booking form
                setTimeout(() => {
                  const bookingElement = document.getElementById('booking-form');
                  bookingElement?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="bg-leaf-500 hover:bg-leaf-600 text-white px-8"
            >
              Book Now
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default BookServices;
