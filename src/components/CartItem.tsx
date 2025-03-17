
import React from "react";
import { CartItem as CartItemType } from "@/context/CartContext";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Trash, Plus, Minus } from "lucide-react";
import { motion } from "framer-motion";

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { removeItem, updateQuantity } = useCart();
  
  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity < 1) return;
    updateQuantity(item.id, newQuantity);
  };

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex items-center gap-4 py-4 border-b border-leaf-100"
    >
      <div className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0 bg-leaf-50">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex justify-between">
          <h3 className="font-medium truncate">{item.name}</h3>
          <p className="font-semibold text-leaf-700">₹{item.price}</p>
        </div>
        <p className="text-sm text-muted-foreground">{item.category}</p>
        <p className="text-xs text-leaf-500 capitalize">{item.type}</p>
        
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center">
            <Button 
              variant="outline" 
              size="icon" 
              className="h-7 w-7 rounded-md border-leaf-200"
              onClick={() => handleQuantityChange(item.quantity - 1)}
            >
              <Minus className="h-3 w-3" />
            </Button>
            <span className="w-8 text-center">{item.quantity}</span>
            <Button 
              variant="outline" 
              size="icon" 
              className="h-7 w-7 rounded-md border-leaf-200"
              onClick={() => handleQuantityChange(item.quantity + 1)}
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>
          
          <Button 
            variant="ghost" 
            size="sm" 
            className="h-7 px-2 text-red-500 hover:text-red-700 hover:bg-red-50"
            onClick={() => removeItem(item.id)}
          >
            <Trash className="h-3 w-3 mr-1" />
            <span className="text-xs">Remove</span>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default CartItem;
