
import { useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ChevronRight, Clock, Home, Leaf, MapPin, MessageSquare } from "lucide-react";

// Components
import AnimatedSection from "@/components/AnimatedSection";

const Confirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as any;
  
  // Redirect to home if no data is provided
  useEffect(() => {
    if (!state) {
      navigate("/");
    }
  }, [state, navigate]);

  // Handle case when there's no state
  if (!state) {
    return null;
  }

  // Extract data based on confirmation type
  const { type, formData } = state;
  const isPlantPurchase = type === "purchase";
  const isPlantRental = type === "rental";
  const isService = type === "service";
  
  // Generate a random order number
  const orderNumber = `DN${Math.floor(10000 + Math.random() * 90000)}`;

  return (
    <div className="pt-28 pb-20 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection>
          <Card className="border-leaf-100 overflow-hidden">
            <div className="bg-leaf-500 py-6 px-8">
              <div className="flex justify-center mb-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                  <Check className="h-10 w-10 text-white" />
                </div>
              </div>
              <h1 className="text-2xl md:text-3xl font-serif font-medium text-white text-center mb-2">
                Thank You for Your {isPlantPurchase ? "Order" : isPlantRental ? "Rental Request" : "Booking"}!
              </h1>
              <p className="text-white/90 text-center">
                We've received your {isPlantPurchase ? "order" : isPlantRental ? "rental request" : "service booking"} and will process it shortly.
              </p>
            </div>
            
            <CardContent className="p-8">
              <div className="bg-muted/30 border border-leaf-100 rounded-lg p-4 mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <MessageSquare className="h-4 w-4 text-leaf-500" />
                  <h2 className="font-medium">Telegram Confirmation</h2>
                </div>
                <p className="text-sm text-muted-foreground">
                  A confirmation has been sent to your Telegram account.
                  You'll receive status updates and important information about your {isPlantPurchase ? "order" : isPlantRental ? "rental" : "booking"} through Telegram.
                </p>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h2 className="font-serif text-xl font-medium mb-4">
                    {isPlantPurchase ? "Order" : isPlantRental ? "Rental" : "Booking"} Details
                  </h2>
                  <div className="border-t border-leaf-100 pt-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {isPlantPurchase ? "Order" : isPlantRental ? "Rental" : "Booking"} Number
                        </p>
                        <p className="font-medium">{orderNumber}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Date</p>
                        <p className="font-medium">
                          {new Date().toLocaleDateString('en-US', { 
                            year: 'numeric',
                            month: 'long', 
                            day: 'numeric'
                          })}
                        </p>
                      </div>
                      
                      {formData.date && (
                        <div>
                          <p className="text-sm text-muted-foreground">
                            {isPlantPurchase ? "Delivery" : isPlantRental ? "Rental" : "Service"} Date
                          </p>
                          <p className="font-medium">{formData.date}</p>
                        </div>
                      )}
                      
                      {formData.time && (
                        <div>
                          <p className="text-sm text-muted-foreground">
                            {isPlantPurchase ? "Delivery" : isPlantRental ? "Rental" : "Service"} Time
                          </p>
                          <p className="font-medium">{formData.time}</p>
                        </div>
                      )}
                      
                      {formData.duration && (
                        <div>
                          <p className="text-sm text-muted-foreground">Duration</p>
                          <p className="font-medium">{formData.duration}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                <div>
                  <h2 className="font-serif text-xl font-medium mb-4">
                    Customer Information
                  </h2>
                  <div className="border-t border-leaf-100 pt-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Name</p>
                        <p className="font-medium">{formData.name}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p className="font-medium">{formData.email}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Phone</p>
                        <p className="font-medium">{formData.phone}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {isPlantPurchase ? "Delivery" : isPlantRental ? "Delivery" : "Service"} Address
                        </p>
                        <p className="font-medium">{formData.address}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {formData.notes && (
                  <div>
                    <h2 className="font-serif text-xl font-medium mb-4">
                      Additional Information
                    </h2>
                    <div className="border-t border-leaf-100 pt-4">
                      <p className="text-sm text-muted-foreground mb-1">Notes/Special Instructions</p>
                      <p>{formData.notes}</p>
                    </div>
                  </div>
                )}
                
                <div className="pt-4">
                  <div className="bg-leaf-50 rounded-lg border border-leaf-100 p-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-leaf-100 rounded-full p-2 mt-1">
                        <Clock className="h-4 w-4 text-leaf-700" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">What Happens Next?</h3>
                        <p className="text-sm text-muted-foreground">
                          {isPlantPurchase 
                            ? "Our team will prepare your plants and contact you via Telegram to confirm delivery details."
                            : isPlantRental 
                              ? "Our team will review your rental request and confirm availability via Telegram within 2 hours."
                              : "Our plant care specialist will confirm your appointment via Telegram and arrive at the scheduled time."
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button asChild variant="outline" className="flex-1 border-leaf-200 hover:bg-leaf-50 text-leaf-700">
                    <Link to="/">
                      <Home className="h-4 w-4 mr-2" />
                      Back to Home
                    </Link>
                  </Button>
                  
                  <Button asChild className="flex-1 bg-leaf-500 hover:bg-leaf-600 text-white">
                    <Link to={isPlantPurchase ? "/buy" : isPlantRental ? "/rent" : "/services"}>
                      <Leaf className="h-4 w-4 mr-2" />
                      {isPlantPurchase 
                        ? "Shop More Plants" 
                        : isPlantRental 
                          ? "Explore Other Rentals" 
                          : "Browse More Services"
                      }
                      <ChevronRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Confirmation;
