"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

import { useCategoryStore } from "@/Store/useCategoryStore";
import { Product } from "@/types/product";
import Link from "next/link";
import { Toggle } from "@radix-ui/react-toggle";
import { HeartIcon, ShoppingBagIcon } from "lucide-react";
import { useCartStore } from "@/Store/useCartStore";

const categoryMap: Record<string, string> = {
  Electronicos: "smartphones",
  Moda: "tops",
  "Casa & Decoração": "home-decoration",
  Acessórios: "fragrances",
};

export default function ProductsSection() {
  const addItem = useCartStore((state) => state.addToCart)
  const [products, setProducts] = useState<Product[]>([]);

  const currentCategory = useCategoryStore((state) => state.currentCategory);

  const fetchProducts = useCallback(async (category: string) => {
    try {
      if (category === "all") {
        const res = await axios.get("https://dummyjson.com/products");
        setProducts(res.data.products);
        return;
      }

      const apiCategory = categoryMap[category];

      const res = await axios.get(
        `https://dummyjson.com/products/category/${apiCategory}`
      );

      setProducts(res.data.products);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  }, []); 

  useEffect(() => {
    async function load() {
      await fetchProducts(currentCategory);
    }
    load();
  }, [currentCategory, fetchProducts]);

  return (
    <section className="w-full bg-[#0E0E0E] mt-10">
      <div className="max-w-7xl mx-auto flex flex-col py-5 px-6">
        <h2 className="text-2xl font-bold mb-5 text-[#F5F5F5] tracking-tight">
          Produtos
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 bg-[#0E0E0E]">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-zinc-900 p-4 rounded-2xl border border-zinc-800 relative"
            >
              <Toggle
                className="text-gray-400 data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-red-500 data-[state=on]:*:[svg]:stroke-red-500 absolute right-5"
              >
                <HeartIcon />
              </Toggle>
              <Link href={`/product/${product.id}`}>
                <Image
                  src={product.thumbnail}
                  alt={product.title}
                  className="rounded-lg mb-3 object-cover"
                  width={300}
                  height={300}
                />
                <h3 className="text-white text-lg font-semibold">
                  {product.title}
                </h3>
                <p className="text-zinc-400 text-sm">{product.price} USD</p>
              </Link>
              <ShoppingBagIcon className="absolute right-5 bottom-5 text-gray-400 cursor-pointer" onClick={() => addItem(product.stock)}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
