
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import AnimatedSection from "@/components/AnimatedSection";
import CartItem from "@/components/CartItem";
import { 
  ShoppingCart, 
  Truck, 
  CreditCard, 
  ArrowRight, 
  Leaf, 
  MessageCircle,
  AlertCircle,
  CheckCircle2,
  MapPin
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { sendTelegramNotification, createOrderNotification } from "@/utils/telegramNotifications";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Validation schema
const checkoutFormSchema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  area: z.string().min(3, { message: "Area is required" }),
  landmark: z.string().optional(),
  pin: z.string().min(6, { message: "Please enter a valid PIN code" }),
  city: z.string().min(2, { message: "City is required" }),
  state: z.string().min(2, { message: "State is required" }),
  note: z.string().optional()
});

type CheckoutFormValues = z.infer<typeof checkoutFormSchema>;

const Cart = () => {
  const { state, clearCart } = useCart();
  const navigate = useNavigate();
  
  const [step, setStep] = useState<'cart' | 'checkout' | 'success'>('cart');
  
  // Initialize form with react-hook-form
  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      area: "",
      landmark: "",
      pin: "",
      city: "Siliguri", // Default city
      state: "West Bengal", // Default state
      note: ""
    }
  });

  const deliveryCharge = state.subtotal > 0 ? 50 : 0;
  const total = state.subtotal + deliveryCharge;

  const handlePlaceOrder = async (values: CheckoutFormValues) => {
    // Show loading toast
    const loadingToast = toast.loading("Processing your order...");
    
    try {
      // Send notification to Telegram
      const notificationMessage = createOrderNotification(
        { ...values },
        { 
          items: state.items,
          subtotal: state.subtotal,
          deliveryCharge,
          total
        }
      );
      
      const notificationSent = await sendTelegramNotification(notificationMessage);
      
      // Clear the loading toast
      toast.dismiss(loadingToast);
      
      if (!notificationSent) {
        // If notification failed, still proceed but show a warning
        toast.warning("Your order has been placed, but there might be a delay in processing.");
      }
      
      // Proceed to success step
      setStep('success');
      clearCart();
      
    } catch (error) {
      // Clear the loading toast
      toast.dismiss(loadingToast);
      
      // Show error toast but still proceed to success (don't block the user)
      toast.error("There was an issue processing your order, but it has been received.");
      setStep('success');
      clearCart();
    }
  };

  return (
    <div className="pt-28 pb-20 px-6 md:px-12">
      <AnimatedSection className="max-w-6xl mx-auto">
        {/* Progress Steps */}
        <div className="flex justify-center items-center mb-8">
          <div className={`flex items-center ${step === 'cart' ? 'text-leaf-600 font-medium' : 'text-muted-foreground'}`}>
            <div className={`h-8 w-8 rounded-full flex items-center justify-center ${step === 'cart' ? 'bg-leaf-500 text-white' : 'bg-muted border'}`}>
              <ShoppingCart className="h-4 w-4" />
            </div>
            <span className="ml-2">Cart</span>
          </div>
          
          <div className={`w-12 h-0.5 mx-2 ${step === 'cart' ? 'bg-muted' : 'bg-leaf-200'}`} />
          
          <div className={`flex items-center ${step === 'checkout' ? 'text-leaf-600 font-medium' : 'text-muted-foreground'}`}>
            <div className={`h-8 w-8 rounded-full flex items-center justify-center ${step === 'checkout' ? 'bg-leaf-500 text-white' : 'bg-muted border'}`}>
              <Truck className="h-4 w-4" />
            </div>
            <span className="ml-2">Delivery</span>
          </div>
          
          <div className={`w-12 h-0.5 mx-2 ${step === 'success' ? 'bg-leaf-200' : 'bg-muted'}`} />
          
          <div className={`flex items-center ${step === 'success' ? 'text-leaf-600 font-medium' : 'text-muted-foreground'}`}>
            <div className={`h-8 w-8 rounded-full flex items-center justify-center ${step === 'success' ? 'bg-leaf-500 text-white' : 'bg-muted border'}`}>
              <CheckCircle2 className="h-4 w-4" />
            </div>
            <span className="ml-2">Complete</span>
          </div>
        </div>

        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-serif font-medium mb-4">
            {step === 'cart' && "Your Plant Cart"}
            {step === 'checkout' && "Delivery Details"}
            {step === 'success' && "Order Placed!"}
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {step === 'cart' && "Review your selections and proceed to checkout."}
            {step === 'checkout' && "Complete your information to place your order."}
            {step === 'success' && "Thank you for your order! We'll send you details via Telegram."}
          </p>
        </div>

        <AnimatePresence mode="wait">
          {step === 'cart' && (
            <motion.div
              key="cart"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {state.items.length > 0 ? (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Cart Items */}
                  <div className="lg:col-span-2 bg-white rounded-xl border border-leaf-100 shadow-soft p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-xl font-medium flex items-center">
                        <ShoppingCart className="h-5 w-5 mr-2 text-leaf-500" />
                        Items ({state.totalItems})
                      </h2>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="text-sm border-leaf-200 hover:bg-leaf-50 text-muted-foreground"
                        onClick={clearCart}
                      >
                        Clear Cart
                      </Button>
                    </div>
                    
                    <div className="max-h-[400px] overflow-y-auto pr-2">
                      <AnimatePresence>
                        {state.items.map((item) => (
                          <CartItem key={`${item.id}-${item.type}`} item={item} />
                        ))}
                      </AnimatePresence>
                    </div>
                  </div>
                  
                  {/* Order Summary */}
                  <div className="bg-white rounded-xl border border-leaf-100 shadow-soft p-6 h-fit">
                    <h2 className="text-xl font-medium mb-4 flex items-center">
                      <CreditCard className="h-5 w-5 mr-2 text-leaf-500" />
                      Order Summary
                    </h2>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span>₹{state.subtotal}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Delivery</span>
                        <span>₹{deliveryCharge}</span>
                      </div>
                      <Separator className="my-2" />
                      <div className="flex justify-between font-medium text-lg">
                        <span>Total</span>
                        <span className="text-leaf-700">₹{total}</span>
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full bg-leaf-500 hover:bg-leaf-600 text-white mt-4"
                      onClick={() => setStep('checkout')}
                    >
                      Proceed to Checkout
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                    
                    <div className="mt-6 flex flex-col gap-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Truck className="h-4 w-4 text-leaf-500" />
                        <span>Delivery across Siliguri</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Leaf className="h-4 w-4 text-leaf-500" />
                        <span>Freshly packaged plants</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MessageCircle className="h-4 w-4 text-leaf-500" />
                        <span>Order updates via Telegram</span>
                      </div>
                    </div>
                    
                    <Button
                      variant="outline"
                      className="w-full mt-6 border-leaf-200 hover:bg-leaf-50 text-leaf-700"
                      onClick={() => navigate('/')}
                    >
                      Continue Shopping
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-16 bg-white rounded-xl border border-leaf-100 shadow-soft">
                  <div className="bg-leaf-50 h-20 w-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShoppingCart className="h-8 w-8 text-leaf-500" />
                  </div>
                  <h2 className="text-xl font-medium mb-2">Your cart is empty</h2>
                  <p className="text-muted-foreground mb-6">
                    Looks like you haven't added any plants to your cart yet.
                  </p>
                  <Button 
                    className="bg-leaf-500 hover:bg-leaf-600 text-white"
                    onClick={() => navigate('/buy')}
                  >
                    Shop Plants
                  </Button>
                </div>
              )}
            </motion.div>
          )}

          {step === 'checkout' && (
            <motion.div
              key="checkout"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Checkout Form */}
                <div className="lg:col-span-2 bg-white rounded-xl border border-leaf-100 shadow-soft p-6">
                  <h2 className="text-xl font-medium mb-6 flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-leaf-500" />
                    Delivery Information
                  </h2>
                  
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(handlePlaceOrder)} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name *</FormLabel>
                              <FormControl>
                                <Input 
                                  {...field} 
                                  placeholder="Your full name"
                                  className="border-leaf-200"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number *</FormLabel>
                              <FormControl>
                                <Input 
                                  {...field} 
                                  placeholder="+91 9000000000"
                                  className="border-leaf-200"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <div>
                        <h3 className="text-sm font-medium mb-2 text-muted-foreground">Delivery Address</h3>
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="area"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Area/Street Address *</FormLabel>
                            <FormControl>
                              <Input 
                                {...field} 
                                placeholder="House/Flat no., Street, Area"
                                className="border-leaf-200"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="landmark"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Landmark (Optional)</FormLabel>
                            <FormControl>
                              <Input 
                                {...field} 
                                placeholder="Nearby landmark for easy navigation"
                                className="border-leaf-200"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <FormField
                          control={form.control}
                          name="pin"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>PIN Code *</FormLabel>
                              <FormControl>
                                <Input 
                                  {...field} 
                                  placeholder="734001"
                                  className="border-leaf-200"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="city"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>City *</FormLabel>
                              <FormControl>
                                <Input 
                                  {...field} 
                                  className="border-leaf-200"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="state"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>State *</FormLabel>
                              <FormControl>
                                <Input 
                                  {...field} 
                                  className="border-leaf-200"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="note"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Order Note (Optional)</FormLabel>
                            <FormControl>
                              <Textarea 
                                {...field} 
                                placeholder="Any special instructions for delivery"
                                className="border-leaf-200 min-h-24"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <div className="flex gap-4 pt-4">
                        <Button
                          type="button"
                          variant="outline"
                          className="flex-1 border-leaf-200 hover:bg-leaf-50 text-leaf-700"
                          onClick={() => setStep('cart')}
                        >
                          Back to Cart
                        </Button>
                        
                        <Button
                          type="submit"
                          className="flex-1 bg-leaf-500 hover:bg-leaf-600 text-white"
                          disabled={state.items.length === 0}
                        >
                          Place Order
                        </Button>
                      </div>
                    </form>
                  </Form>
                </div>
                
                {/* Order Summary */}
                <div className="bg-white rounded-xl border border-leaf-100 shadow-soft p-6 h-fit">
                  <h2 className="text-xl font-medium mb-4 flex items-center">
                    <CreditCard className="h-5 w-5 mr-2 text-leaf-500" />
                    Order Summary
                  </h2>
                  
                  <div className="max-h-[200px] overflow-y-auto pr-2 mb-4">
                    {state.items.map((item) => (
                      <div key={`${item.id}-${item.type}`} className="flex items-center gap-3 py-2 border-b border-leaf-100 last:border-0">
                        <div className="w-10 h-10 rounded-md overflow-hidden bg-leaf-50 flex-shrink-0">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium truncate">{item.name}</p>
                          <div className="flex justify-between text-sm text-muted-foreground">
                            <span>{item.quantity} × ₹{item.price}</span>
                            <span>₹{item.quantity * item.price}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>₹{state.subtotal}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Delivery</span>
                      <span>₹{deliveryCharge}</span>
                    </div>
                    <Separator className="my-2" />
                    <div className="flex justify-between font-medium text-lg">
                      <span>Total</span>
                      <span className="text-leaf-700">₹{total}</span>
                    </div>
                  </div>
                  
                  <div className="bg-orange-50 border border-orange-100 rounded-lg p-3 mt-4">
                    <div className="flex gap-2">
                      <AlertCircle className="h-5 w-5 text-orange-500 flex-shrink-0" />
                      <p className="text-sm text-orange-700">
                        Payment will be collected on delivery (COD). Order confirmation will be sent via Telegram.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {step === 'success' && (
            <motion.div
              key="success"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-16 bg-white rounded-xl border border-leaf-100 shadow-soft"
            >
              <div className="bg-leaf-50 h-20 w-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="h-8 w-8 text-leaf-500" />
              </div>
              <h2 className="text-2xl font-medium mb-2">Order Successfully Placed!</h2>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Thank you for your order! We'll send you the details via Telegram shortly. 
                Your plants are on their way!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="outline"
                  className="border-leaf-200 hover:bg-leaf-50 text-leaf-700"
                  onClick={() => navigate('/')}
                >
                  Return to Home
                </Button>
                <Button 
                  className="bg-leaf-500 hover:bg-leaf-600 text-white"
                  onClick={() => window.open('https://t.me/dasnursery', '_blank')}
                >
                  Contact on Telegram
                  <MessageCircle className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Recommendations Section (only shown on cart page) */}
        {step === 'cart' && state.items.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-serif font-medium mb-6 flex items-center">
              <Leaf className="h-5 w-5 mr-2 text-leaf-500" />
              Complete Your Garden
            </h2>
            
            <div className="bg-leaf-50 border border-leaf-100 rounded-lg p-6">
              <p className="text-center mb-6">
                Looking for more? Enhance your plant collection with our recommendations.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <Button 
                  variant="outline" 
                  className="border-leaf-200 hover:bg-white text-leaf-700"
                  onClick={() => navigate('/buy')}
                >
                  Shop Plants
                </Button>
                <Button 
                  variant="outline" 
                  className="border-leaf-200 hover:bg-white text-leaf-700"
                  onClick={() => navigate('/fertilizers')}
                >
                  Shop Fertilizers
                </Button>
                <Button 
                  variant="outline" 
                  className="border-leaf-200 hover:bg-white text-leaf-700"
                  onClick={() => navigate('/pots')}
                >
                  Shop Pots
                </Button>
              </div>
            </div>
          </div>
        )}
      </AnimatedSection>
      
      <div className="fixed bottom-6 right-6 z-10">
        <Button 
          className="h-14 w-14 rounded-full bg-leaf-500 hover:bg-leaf-600 text-white shadow-md"
          onClick={() => window.open('https://t.me/dasnursery', '_blank')}
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};

export default Cart;
