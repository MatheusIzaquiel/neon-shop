import { Button } from "@/app/Components/components/ui/button";
import { Separator } from "@/app/Components/components/ui/separator";
import AddToCartButton from "./AddToCartButton";
import { Heart, Star } from "lucide-react";
import type { Product } from "@/types/product";
interface IProductIdContent {
  product: Product;
}

export default function ProductIdContent({ product }: IProductIdContent) {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          {product.title}
        </h1>
        {product.brand && (
          <p className="text-xl text-zinc-400 mt-2">{product.brand}</p>
        )}
      </div>

      <div className="flex items-center gap-4">
        <span className="text-5xl font-bold text-emerald-400">
          R$ {product.price.toFixed(2)}
        </span>
        {product.discountPercentage > 0 && (
          <span className="text-2xl text-zinc-500 line-through">
            R${" "}
            {(
              (product.price * 100) /
              (100 - product.discountPercentage)
            ).toFixed(0)}
          </span>
        )}
      </div>

      <p className="text-zinc-300 text-lg leading-relaxed">
        {product.description}
      </p>

      <div className="flex gap-4">
        <AddToCartButton product={product} />
        <button className="cursor-pointer bg-gray-900 px-4 rounded-md">
          <Heart className="w-5 h-5 text-gray-400 hover:text-red-500 hover:fill-red-500 transition"/>
        </button>
      </div>

      <Separator className="bg-zinc-800" />

      <div className="grid grid-cols-2 gap-6 text-sm">
        <div>
          <p className="text-zinc-500">Categoria</p>
          <p className="font-medium capitalize">
            {product.category.replace("-", " ")}
          </p>
        </div>
        <div>
          <p className="text-zinc-500">Estoque</p>
          <p
            className={
              product.stock > 10 ? "text-emerald-400" : "text-orange-400"
            }
          >
            {product.stock} unid.
          </p>
        </div>
        <div>
          <p className="text-zinc-500">Avaliação</p>
          <p className="text-yellow-400 flex items-center gap-1">
            <Star className="w-4 h-4 fill-current" />
            {product.rating.toFixed(1)}
          </p>
        </div>
        <div>
          <p className="text-zinc-500">Frete</p>
          <p className="text-emerald-400">Grátis</p>
        </div>
      </div>
    </div>
  );
}
