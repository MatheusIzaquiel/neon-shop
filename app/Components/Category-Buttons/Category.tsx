"use client";
import {
  LucideGem,
  LucideHome,
  LucideMonitor,
  LucideShirt,
} from "lucide-react";
import { Card, CardTitle } from "../components/ui/card";
import { useCategoryStore } from "@/Store/useCategoryStore";

const category = [
  { icon: LucideMonitor, name: "Electronicos" },
  { icon: LucideShirt, name: "Moda" },
  { icon: LucideHome, name: "Casa & Decoração" },
  { icon: LucideGem, name: "Acessórios" },
];

export default function Category() {
  const { setCategory } = useCategoryStore();

  return (
    <section className="w-full mt-20 bg-[#0E0E0E]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-5 text-[#F5F5F5] tracking-tight">
          Categorias
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {category.map((item, key) => (
            <Card
              onClick={(e) => {
                e.preventDefault();
                setCategory(item.name);
              }}
              key={key}
              className="
                bg-zinc-900 
                px-8 py-6 
                rounded-3xl 
                cursor-pointer 
                border border-zinc-800 
                hover:border-[#6EE7B7] 
                hover:shadow-[0_0_20px_#6EE7B7]/30 
                transition-all 
                hover:-translate-y-1
              "
            >
              <div className="flex items-start justify-start mb-4">
                <item.icon className="text-[#6EE7B7]" size={48} />
              </div>

              <CardTitle className="text-[#F5F5F5] text-[22px] font-semibold">
                {item.name}
              </CardTitle>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
