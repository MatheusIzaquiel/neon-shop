import type { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";

interface IProductLinkProps {
  product: Product;
  fetchReviews: (id: string | number) => Promise<void>;
}

export default function ProductLink({
  product,
  fetchReviews,
}: IProductLinkProps) {
  return (
    <>
      <Link
        href={`/Pages/product/${product.id}`}
        onClick={() => fetchReviews(product.id)}
      >
        <Image
          src={product.thumbnail}
          alt={product.title}
          className="rounded-lg mb-3 object-cover w-full h-64"
          width={300}
          height={300}
        />
        <h3 className="text-white text-[16px] font-semibold truncate">
          {product.title}
        </h3>
        <p className="text-zinc-400 text-sm">R$ {product.price.toFixed(2)}</p>
      </Link>
    </>
  );
}
