
import React from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const CartIcon: React.FC = () => {
  const { state } = useCart();
  const navigate = useNavigate();

  return (
    <Button
      variant="ghost"
      className="relative"
      onClick={() => navigate("/cart")}
    >
      <ShoppingCart className="h-5 w-5" />
      <AnimatePresence>
        {state.totalItems > 0 && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="absolute -top-1 -right-1 bg-leaf-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
          >
            {state.totalItems}
          </motion.div>
        )}
      </AnimatePresence>
    </Button>
  );
};

export default CartIcon;
