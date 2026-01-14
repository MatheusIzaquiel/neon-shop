// src/Store/useProductsStore.ts
import { create } from "zustand";
import apiFetch from "@/lib/api";  

export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  category: string;
  brand?: string;
};

type ProductsStore = {
  products: Product[];
  loading: boolean;
  fetchProducts: () => Promise<void>;
  searchProducts: (query: string) => Promise<void>;
};

export const useProductsStore = create<ProductsStore>((set) => ({
  products: [],
  loading: false,

  fetchProducts: async () => {
    set({ loading: true });
    try {
      const data = await apiFetch("/api/products?limit=30");
      set({ products: data.products as Product[] });
    } catch (err) {
      console.error("Erro ao carregar produtos:", err);
      set({ products: [] });
    } finally {
      set({ loading: false });
    }
  },

  searchProducts: async (query: string) => {
    if (!query.trim()) {
      await useProductsStore.getState().fetchProducts();
      return;
    }
    set({ loading: true });
    try {
      const data = await apiFetch(`/api/products/search?q=${encodeURIComponent(query)}`);
      set({ products: data.products as Product[] });
    } catch (err) {
      console.error("Erro na busca:", err);
    } finally {
      set({ loading: false });
    }
  },
}));
