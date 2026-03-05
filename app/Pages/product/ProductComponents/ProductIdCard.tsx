import { Badge } from "lucide-react";
import Image from "next/image";
import { Product } from "@/types/product";

interface IProductIdCardProps {
  product: Product;
}

export default function ProductIdCard({ product }: IProductIdCardProps) {
  return (
    <div className="relative aspect-square rounded-2xl overflow-hidden bg-zinc-900">
      <Image
        src={product.thumbnail}
        alt={product.title}
        fill
        priority
        className="object-cover hover:scale-105 transition duration-500"
      />
      {product.discountPercentage > 5 && (
        <Badge className="absolute top-4 left-4 bg-emerald-600">
          -{Math.round(product.discountPercentage)}%
        </Badge>
      )}
    </div>
  );
}
