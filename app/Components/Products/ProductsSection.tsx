"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HeartIcon, ShoppingBagIcon } from "lucide-react";
import { useCategoryStore } from "@/Store/useCategoryStore";
import { useCartStore } from "@/Store/useCartStore";
import { Product } from "@/types/product";
import { getProducts, getProductsByCategory } from "@/lib/dummyjson";

const categoryMap: Record<string, string> = {
  Electronicos: "smartphones",
  Moda: "womens-dresses",
  "Casa & Decoração": "furniture", 
  Acessórios: "fragrances",
};

export default function ProductsSection() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const currentCategory = useCategoryStore((state) => state.currentCategory);
  const addToCart = useCartStore((state) => state.addToCart);

  const fetchProducts = useCallback(async (category: string) => {
    setLoading(true);
    try {
      let data;
      if (category === "all" || !categoryMap[category]) {
        data = await getProducts(30);
      } else {
        data = await getProductsByCategory(categoryMap[category]);
      }
      setProducts(data);
    } catch (error) {
      console.error(error);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts(currentCategory || "all");
  }, [currentCategory, fetchProducts]);

  if (loading) return <p className="text-center text-zinc-400 mt-10">Carregando produtos...</p>;

  return (
    <section className="w-full bg-[#0E0E0E] pt-10">
      <div className="max-w-7xl mx-auto flex flex-col py-5 px-6">
        <h2 className="text-2xl font-bold mb-5 text-[#F5F5F5] tracking-tight">
          Produtos
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-zinc-900 p-4 rounded-2xl border border-zinc-800 relative"
            >
              <button className="absolute right-5 top-5 text-gray-400 hover:text-red-500 transition z-10">
                <HeartIcon size={20} />
              </button>

              <Link href={`/product/${product.id}`}>
                <Image
                  src={product.thumbnail}
                  alt={product.title}
                  className="rounded-lg mb-3 object-cover w-full h-64"
                  width={300}
                  height={300}
                />
                <h3 className="text-white text-lg font-semibold truncate">
                  {product.title}
                </h3>
                <p className="text-zinc-400 text-sm">
                  R$ {product.price.toFixed(2)}
                </p>
              </Link>

              <ShoppingBagIcon
                className="absolute right-5 bottom-5 text-gray-400 cursor-pointer hover:text-[#6EE7B7] transition z-10"
                size={24}
                onClick={() => addToCart(product)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}