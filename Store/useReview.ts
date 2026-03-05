import { getReviews } from "@/lib/dummyjson";
import type { Review } from "@/types/review";
import { create } from "zustand";

interface IReviewProps {
  reviews: Review[];
  fetchReviews: (id: string | number) => Promise<void>;
}

export const useReview = create<IReviewProps>((set) => ({
  reviews: [],
  fetchReviews: async (id) => {
    const reviews = await getReviews(id);
    set({ reviews });
  },
}));
