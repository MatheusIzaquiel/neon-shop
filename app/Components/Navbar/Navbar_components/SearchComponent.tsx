import { useSearch } from "@/lib/useSearch";
import { LucideSearch, LucideX } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function SearchComponent() {
  const { searchTerm, setSearchTerm, storeProducts, loading, clearSearch } =
    useSearch();
  return (
    <>
      <div className="hidden md:flex items-center w-full max-w-md bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-2 gap-2">
        <LucideSearch size={20} className="text-zinc-400" />
        <input
          type="text"
          placeholder="Buscar produtos..."
          value={searchTerm ?? ""}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-transparent text-sm flex-1 outline-none placeholder:text-zinc-500"
        />
        {searchTerm && (
          <button
            onClick={() => setSearchTerm("")}
            className="text-zinc-400 hover:text-white transition"
          >
            <LucideX size={18} /> {/* importe LucideX */}
          </button>
        )}
      </div>

      {/* Dropdown de sugestões */}
      {searchTerm.trim() !== "" && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-zinc-900 border border-zinc-700 rounded-xl shadow-2xl max-h-96 overflow-y-auto z-50">
          {loading ? (
            <div className="p-4 text-center text-zinc-500">Carregando...</div>
          ) : storeProducts.length === 0 ? (
            <div className="p-4 text-center text-zinc-500">
              Nenhum produto encontrado
            </div>
          ) : (
            storeProducts.slice(0, 12).map(
              (
                product, 
              ) => (
                <Link
                  key={product.id}
                  href={`/Pages/product/${product.id}`} 
                  className="flex items-center gap-3 p-3 hover:bg-zinc-800 transition"
                  onClick={clearSearch} 
                >
                  <Image
                    src={product.thumbnail}
                    alt={product.title}
                    width={300}
                    height={300}
                    className="w-10 h-10 object-cover rounded"
                  />
                  <div>
                    <p className="text-sm font-medium">{product.title}</p>
                    <p className="text-xs text-zinc-400">
                      R$ {product.price.toFixed(2)}
                    </p>
                  </div>
                </Link>
              ),
            )
          )}
        </div>
      )}
    </>
  );
}
