import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";

const CART_STORAGE_KEY = "kicks-cart";

const getStoredCart = () => {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getStoredCart);

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = useCallback((item) => {
    const {
      productId,
      name,
      category,
      color,
      price,
      size,
      quantity = 1,
      image,
    } = item;
    const lineId = `${productId}-${size}-${color}`;

    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === lineId);
      if (existing) {
        return prev.map((i) =>
          i.id === lineId ? { ...i, quantity: i.quantity + quantity } : i,
        );
      }
      return [
        ...prev,
        {
          id: lineId,
          productId,
          name,
          category: category || "Product",
          color,
          price,
          size,
          quantity,
          image: image || "",
        },
      ];
    });
    toast.success("Added to cart");
  }, []);

  const updateQuantity = useCallback((id, newQty) => {
    if (newQty < 1) return;
    setCartItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, quantity: newQty } : i)),
    );
  }, []);

  const updateSize = useCallback((id, newSize) => {
    setCartItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, size: newSize } : i)),
    );
  }, []);

  const removeItem = useCallback((id) => {
    setCartItems((prev) => prev.filter((i) => i.id !== id));
    toast.error("Item removed from cart");
  }, []);

  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const value = {
    cartItems,
    addToCart,
    updateQuantity,
    updateSize,
    removeItem,
    itemCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return ctx;
};
