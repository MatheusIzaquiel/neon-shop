import { Star } from "lucide-react";
import type { Review } from "@/types/review";

interface IProductReviewsProps {
  review: Review[];
}

export default function ProductReviews({ review }: IProductReviewsProps) {
  return (
    <div className="grid grid-cols-1 justify-center items-center mt-10">
      <h2 className="text-3xl font-bold mt-5 mb-5">Reviews</h2>

      {review.map((r: Review, index: number) => (
        <div
          key={index}
          className="border border-zinc-800 rounded-lg p-4 mb-4 flex flex-col gap-2"
        >
          <div className="flex justify-between text-xs text-zinc-500">
            <p className="font-bold">{r.reviewerName}</p>

            <div className="flex gap-1 items-center text-yellow-400">
              <Star className="w-4 h-4 fill-current" />
              {r.rating}/5
            </div>
          </div>

          <p className="text-sm text-zinc-300">{r.comment}</p>
        </div>
      ))}
    </div>
  );
}