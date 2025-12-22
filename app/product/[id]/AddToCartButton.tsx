"use client";

import { Button } from "@/app/Components/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useCartStore } from "@/Store/useCartStore";
import { Product } from "@/types/product";

export default function AddToCartButton({ product }: { product: Product }) {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <Button
      size="lg"
      className="bg-emerald-600 hover:bg-emerald-700"
      onClick={() => addItem(product)}
    >
      <ShoppingCart className="mr-2" />
      Adicionar ao Carrinho
    </Button>
  );
}
