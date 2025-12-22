import { create } from "zustand";
import { Product } from "@/types/product";

interface CartItem extends Product {
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (product: Product) => void;
  decrementItem: (productId: number) => void; 
  removeItem: (productId: number) => void; 
  clearCart: () => void; 
  getTotalQuantity: () => number; 
  getTotalPrice: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],

  addItem: (product) => {
    const { items } = get();
    const exists = items.find((item) => item.id === product.id);

    if (exists) {
      set({
        items: items.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      });
      return;
    }

    set({
      items: [...items, { ...product, quantity: 1 }],
    });
  },

  decrementItem: (productId) => {
    const { items } = get();
    const exists = items.find((i) => i.id === productId);
    if (!exists) return;

    if (exists.quantity > 1) {
      set({
        items: items.map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        ),
      });
    } else {
      set({
        items: items.filter((item) => item.id !== productId),
      });
    }
  },

  removeItem: (productId) => {
    const { items } = get();
    set({
      items: items.filter((item) => item.id !== productId),
    });
  },

  clearCart: () => set({ items: [] }),

  getTotalQuantity: () =>
    get().items.reduce((sum, item) => sum + item.quantity, 0),

  getTotalPrice: () =>
    get().items.reduce((sum, item) => sum + item.quantity * (item.price || 0), 0),
}));
