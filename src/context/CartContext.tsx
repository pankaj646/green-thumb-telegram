
import React, { createContext, useContext, useReducer, useEffect } from "react";
import { toast } from "sonner";

// Types
export type CartItem = {
  id: number;
  name: string;
  image: string;
  price: number;
  category: string;
  quantity: number;
  type: "plant" | "fertilizer" | "pot" | "accessory";
};

type CartState = {
  items: CartItem[];
  subtotal: number;
  totalItems: number;
};

type CartAction =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "REMOVE_ITEM"; payload: number }
  | { type: "UPDATE_QUANTITY"; payload: { id: number; quantity: number } }
  | { type: "CLEAR_CART" };

type CartContextType = {
  state: CartState;
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
};

// Initial state
const initialState: CartState = {
  items: [],
  subtotal: 0,
  totalItems: 0,
};

// Load cart from localStorage
const loadCartFromStorage = (): CartState => {
  if (typeof window === "undefined") return initialState;
  
  const savedCart = localStorage.getItem("cart");
  return savedCart ? JSON.parse(savedCart) : initialState;
};

// Cart reducer
const cartReducer = (state: CartState, action: CartAction): CartState => {
  let newState: CartState;

  switch (action.type) {
    case "ADD_ITEM":
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id && item.type === action.payload.type
      );

      if (existingItemIndex > -1) {
        // Item exists, update quantity
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex].quantity += 1;

        newState = {
          ...state,
          items: updatedItems,
        };
      } else {
        // Add new item with quantity 1
        newState = {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
        };
      }
      break;

    case "REMOVE_ITEM":
      newState = {
        ...state,
        items: state.items.filter((item) => !(item.id === action.payload)),
      };
      break;

    case "UPDATE_QUANTITY":
      newState = {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
      break;

    case "CLEAR_CART":
      newState = initialState;
      break;

    default:
      return state;
  }

  // Calculate subtotal and totalItems
  const subtotal = newState.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const totalItems = newState.items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return {
    ...newState,
    subtotal,
    totalItems,
  };
};

// Create context
const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(cartReducer, initialState, loadCartFromStorage);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state));
  }, [state]);

  // Context actions
  const addItem = (item: Omit<CartItem, "quantity">) => {
    dispatch({ type: "ADD_ITEM", payload: { ...item, quantity: 1 } });
    toast.success(`${item.name} added to cart!`);
  };

  const removeItem = (id: number) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
    toast.info("Item removed from cart");
  };

  const updateQuantity = (id: number, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
    toast.info("Cart cleared");
  };

  return (
    <CartContext.Provider
      value={{ state, addItem, removeItem, updateQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
