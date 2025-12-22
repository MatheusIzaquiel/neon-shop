// app/product/[id]/loading.tsx
import { Skeleton } from "@/app/Components/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0E0E0E] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <Skeleton className="aspect-square rounded-2xl bg-zinc-900" />

          <div className="space-y-6">
            <div className="space-y-3">
              <Skeleton className="h-12 w-3/4 bg-zinc-800" />
              <Skeleton className="h-8 w-1/3 bg-zinc-800" />
            </div>
            <Skeleton className="h-16 w-32 bg-zinc-800" />
            <div className="space-y-3">
              <Skeleton className="h-5 w-full bg-zinc-800" />
              <Skeleton className="h-5 w-full bg-zinc-800" />
              <Skeleton className="h-5 w-2/3 bg-zinc-800" />
            </div>
            <div className="flex gap-4">
              <Skeleton className="h-14 w-56 bg-zinc-800 rounded-xl" />
              <Skeleton className="h-14 w-14 bg-zinc-800 rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
