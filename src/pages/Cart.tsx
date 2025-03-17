
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
  CheckCircle2
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";

const Cart = () => {
  const { state, clearCart } = useCart();
  const navigate = useNavigate();
  
  const [step, setStep] = useState<'cart' | 'checkout' | 'success'>('cart');
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    note: ""
  });

  const deliveryCharge = state.subtotal > 0 ? 50 : 0;
  const total = state.subtotal + deliveryCharge;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.phone || !formData.address) {
      toast.error("Please fill all required fields");
      return;
    }
    
    // Normally this would be an API call to create the order
    setTimeout(() => {
      setStep('success');
      clearCart();
    }, 1000);
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
                    <Truck className="h-5 w-5 mr-2 text-leaf-500" />
                    Delivery Information
                  </h2>
                  
                  <form onSubmit={handlePlaceOrder} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Full Name *
                      </label>
                      <Input 
                        id="name" 
                        name="name" 
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        className="border-leaf-200"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-1">
                        Phone Number *
                      </label>
                      <Input 
                        id="phone" 
                        name="phone" 
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 9000000000"
                        className="border-leaf-200"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="address" className="block text-sm font-medium mb-1">
                        Delivery Address *
                      </label>
                      <Textarea 
                        id="address" 
                        name="address" 
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="Complete delivery address with PIN code"
                        className="border-leaf-200 min-h-24"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="note" className="block text-sm font-medium mb-1">
                        Order Note (Optional)
                      </label>
                      <Textarea 
                        id="note" 
                        name="note" 
                        value={formData.note}
                        onChange={handleInputChange}
                        placeholder="Any special instructions for delivery"
                        className="border-leaf-200"
                      />
                    </div>
                    
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
                      >
                        Place Order
                      </Button>
                    </div>
                  </form>
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
