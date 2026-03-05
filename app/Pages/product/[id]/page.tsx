import { notFound } from "next/navigation";
import { ArrowLeft, Star } from "lucide-react";
import Link from "next/link";
import { getProductById, getReviews } from "@/lib/dummyjson";
import ProductIdCard from "../ProductComponents/ProductIdCard";
import ProductIdContent from "../ProductComponents/ProductIdContent";
import ProductReviews from "../ProductComponents/ProductReviews";
import { Suspense } from "react";


async function getProduct(id: string) {
  return await getProductById(id);
}

async function getReview(id: string) {
  return await getReviews(id);
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  let product;
  let review;
  try {
    product = await getProduct(id);
    review = await getReview(id);
  } catch {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#0E0E0E] text-white py-8 px-6">
       <div className="max-w-7xl mx-auto">
      <Link
          href="/"
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition mb-8 text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar
        </Link>
        <Suspense fallback={<div className="grid ... animate-pulse"> {/* skeletons aqui */} </div>}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <ProductIdCard product={product} />
            <ProductIdContent product={product} />
          </div>
        </Suspense>

        <Suspense fallback={<div className="mt-12 animate-pulse"> {/* skeleton de reviews */} </div>}>
          <ProductReviews review={review} />
        </Suspense>
      </div>
    </div>
  );
}
