// app/product/[id]/page.tsx
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Heart, Star } from "lucide-react";

import { Button } from "@/app/Components/components/ui/button";
import { Card } from "@/app/Components/components/ui/card";
import { Badge } from "@/app/Components/components/ui/badge";
import { Separator } from "@/app/Components/components/ui/separator";
import Link from "next/link";

import { Product } from "@/types/product";
import AddToCartButton from "./AddToCartButton";

async function getProduct(id: string): Promise<Product> {
  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    cache: "force-cache",
    next: { revalidate: 3600 },
  });

  if (!res.ok) notFound();
  return res.json();
}

export default async function ProductPage(props: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await props.params;
  const product = await getProduct(id);
  

  return (
    <div className="min-h-screen bg-[#0E0E0E] text-white py-8 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Botão voltar */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition mb-8 text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {/* Imagem */}
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

          {/* Infos */}
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
                ${product.price}
              </span>
              {product.discountPercentage > 0 && (
                <span className="text-2xl text-zinc-500 line-through">
                  $
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
              <Button size="lg" variant="default">
                <Heart className="w-5 h-5" />
              </Button>
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
        </div>

        {/* Galeria */}
        {product.images && product.images.length > 1 && (
          <div className="mt-20">
            <h2 className="text-2xl font-bold mb-6">Mais imagens</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {product.images.slice(0, 8).map((img, i) => (
                <Card
                  key={i}
                  className="bg-zinc-900 border-zinc-800 overflow-hidden"
                >
                  <div className="relative aspect-square">
                    <Image
                      src={img}
                      alt={`Foto ${i + 1}`}
                      fill
                      className="object-cover hover:scale-110 transition"
                    />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// SEO
export async function generateMetadata({ params }: { params: { id: string } }) {
  try {
    const product = await getProduct(params.id);
    return {
      title: `${product.title} • Neon Shop`,
      description: product.description.slice(0, 160),
    };
  } catch {
    return { title: "Produto não encontrado" };
  }
}
