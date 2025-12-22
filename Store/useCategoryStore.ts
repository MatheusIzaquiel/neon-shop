import { create } from "zustand";

interface CategoryProp {
  currentCategory: string;
  setCategory: (cat: string) => void;
}

export const useCategoryStore = create<CategoryProp>((set) => ({
  currentCategory: "all",
  setCategory: (cat: string) => set({ currentCategory: cat }),
}));
