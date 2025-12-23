// src/Store/useCartStore.ts
import { create } from "zustand";
import apiFetch from "@/lib/api";

// Tipo exato que o back-end C# retorna no GET /api/cart
interface CartItemFromApi {
  id: number;
  productId: number;
  quantity: number;
  ProductName: string;
  Price: number;
  ImageUrl: string;
}

// Nosso tipo interno usado no front-end
export type CartItem = {
  id: number;
  productId: number;
  quantity: number;
  productName: string;
  price: number;
  imageUrl: string;
};

type CartStore = {
  items: CartItem[];
  fetchCart: () => Promise<void>;
  addToCart: (productId: number, quantity?: number) => Promise<void>;
  updateQuantity: (cartItemId: number, newQuantity: number) => Promise<void>;
  removeFromCart: (cartItemId: number) => Promise<void>;
  clearCart: () => Promise<void>;
  getTotalPrice: () => number;
};

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],

  fetchCart: async () => {
    try {
      const data: CartItemFromApi[] = await apiFetch("/api/cart");

      // Converte do formato do back-end para o formato do front
      const mappedItems: CartItem[] = data.map((item) => ({
        id: item.id,
        productId: item.productId,
        quantity: item.quantity,
        productName: item.ProductName,
        price: item.Price,
        imageUrl: item.ImageUrl,
      }));

      set({ items: mappedItems });
    } catch (err) {
      console.error("Erro ao buscar carrinho:", err);
      set({ items: [] });
    }
  },

  addToCart: async (productId, quantity = 1) => {
    await apiFetch("/api/cart/add", {
      method: "POST",
      body: JSON.stringify({ productId, quantity }),
    });
    await get().fetchCart();
  },

  updateQuantity: async (cartItemId, newQuantity) => {
    if (newQuantity <= 0) {
      await get().removeFromCart(cartItemId);
      return;
    }
    await apiFetch("/api/cart/update", {
      method: "PUT",
      body: JSON.stringify({ cartItemId, quantity: newQuantity }),
    });
    await get().fetchCart();
  },

  removeFromCart: async (cartItemId) => {
    await apiFetch(`/api/cart/remove/${cartItemId}`, {
      method: "DELETE",
    });
    await get().fetchCart();
  },

  clearCart: async () => {
    await apiFetch("/api/cart/clear", { method: "DELETE" });
    set({ items: [] });
  },

  getTotalPrice: () => {
    return get().items.reduce((total, item) => total + item.price * item.quantity, 0);
  },
}));