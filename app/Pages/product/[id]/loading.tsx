import { ArrowLeft } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0E0E0E] text-white py-8 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Mesma estrutura visual da página real, mas com skeletons */}
        <div className="inline-flex items-center gap-2 text-zinc-700 mb-8 text-sm">
          <ArrowLeft className="w-4 h-4" />
          Voltar
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 animate-pulse">
          {/* Card esquerdo skeleton */}
          <div className="bg-zinc-900 rounded-xl h-[500px]" />

          {/* Conteúdo direito skeleton */}
          <div className="space-y-6">
            <div className="h-10 bg-zinc-800 rounded w-3/4" />
            <div className="h-8 bg-zinc-800 rounded w-1/2" />
            <div className="h-32 bg-zinc-800 rounded" />
            <div className="h-6 bg-zinc-800 rounded w-1/3" />
          </div>
        </div>

        {/* Reviews skeleton */}
        <div className="mt-12 space-y-6">
          <div className="h-8 bg-zinc-800 rounded w-48" />
          <div className="space-y-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="bg-zinc-900 p-6 rounded-xl">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-zinc-800 rounded-full" />
                  <div className="flex-1 space-y-2">
                    <div className="h-5 bg-zinc-800 rounded w-1/3" />
                    <div className="h-4 bg-zinc-800 rounded w-1/4" />
                  </div>
                </div>
                <div className="mt-4 h-20 bg-zinc-800 rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
