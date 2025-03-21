
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import { ShoppingCart, CheckCircle2, AlertCircle } from "lucide-react";
import { useCart } from "@/context/CartContext";
import CartItem from "@/components/CartItem";
import { sendOrderToTelegram } from "@/utils/telegramNotifications";

// Fix for the TypeScript error in Cart.tsx
// Define the address form data type
const formDataToTelegram = (formData: {
  name: string;
  phone: string;
  area: string;
  landmark: string;
  pin: string;
  city: string;
  state: string;
  note?: string;
}) => {
  return {
    name: formData.name,
    phone: formData.phone,
    area: formData.area,
    landmark: formData.landmark,
    pin: formData.pin,
    city: formData.city,
    state: formData.state,
    note: formData.note || ""
  };
};

const Cart = () => {
  const { state, removeItem, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    area: "",
    landmark: "",
    pin: "",
    city: "",
    state: "",
    note: ""
  });
  const { toast } = useToast();
  const navigate = useNavigate();

  const totalPrice = state.items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.name || !formData.phone || !formData.area || !formData.landmark || !formData.pin || !formData.city || !formData.state) {
      toast({
        variant: "destructive",
        title: "Error submitting order.",
        description: "Please fill in all required fields."
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Send order to Telegram
      await sendOrderToTelegram(state.items, formDataToTelegram(formData));

      // Clear the cart
      clearCart();

      // Show success message
      toast({
        title: "Order submitted!",
        description: "Your order has been successfully submitted.",
        action: <CheckCircle2 className="h-4 w-4 text-green-500" />
      });

      setIsOrderConfirmed(true);
      setTimeout(() => {
        setIsOrderConfirmed(false);
        navigate('/confirmation');
      }, 3000);
    } catch (error) {
      console.error("Error submitting order:", error);
      toast({
        variant: "destructive",
        title: "Error submitting order.",
        description: "There was an error submitting your order. Please try again.",
        action: <AlertCircle className="h-4 w-4 text-red-500" />
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (state.items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <ShoppingCart className="h-16 w-16 text-gray-400 mb-4" />
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Your cart is empty</h2>
        <p className="text-gray-500 mb-4">Add items to your cart to proceed.</p>
        <Button onClick={() => navigate('/buy')}>Shop Now</Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-20 p-4">
      <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
      {state.items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <Separator className="my-4" />
      <div className="flex justify-between items-center mb-4">
        <span className="text-lg font-semibold">Total: ₹{totalPrice}</span>
        <Button onClick={() => clearCart()}>Clear Cart</Button>
      </div>
      <Separator className="my-4" />

      <form onSubmit={handleSubmit} className="max-w-md">
        <h2 className="text-xl font-semibold mb-4">Delivery Details</h2>
        <div className="grid gap-4">
          <div>
            <Input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Input
              type="text"
              name="area"
              placeholder="Area/Street"
              value={formData.area}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Input
              type="text"
              name="landmark"
              placeholder="Nearest Landmark"
              value={formData.landmark}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Input
              type="number"
              name="pin"
              placeholder="PIN Code"
              value={formData.pin}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Input
              type="text"
              name="state"
              placeholder="State"
              value={formData.state}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Textarea
              name="note"
              placeholder="Additional Note (optional)"
              value={formData.note}
              onChange={handleChange}
            />
          </div>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Order"}
          </Button>
        </div>
      </form>

      {isOrderConfirmed && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-md shadow-lg">
            <CheckCircle2 className="h-10 w-10 text-green-500 mx-auto mb-2" />
            <h2 className="text-lg font-semibold text-center">Order Confirmed!</h2>
            <p className="text-gray-600 text-center">Redirecting to confirmation page...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
