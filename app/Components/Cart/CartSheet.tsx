"use client";

import { useCartStore } from "@/Store/useCartStore";
import { Button } from "@/app/Components/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/app/Components/components/ui/sheet";
import { LucideShoppingBag, Trash, Minus, Plus } from "lucide-react";
import Image from "next/image";

export function CartSheet() {

  const items = useCartStore((state) => state.items);
  const addItem = useCartStore((state) => state.addItem);
  const decrementItem = useCartStore((state) => state.decrementItem);
  const removeItem = useCartStore((state) => state.removeItem);

  const total = useCartStore((state) => state.getTotalPrice());

  return (
    <Sheet >
      {/* ÍCONE QUE ABRE O CARRINHO */}
      <SheetTrigger asChild>
        <LucideShoppingBag
          size={22}
          className="cursor-pointer hover:text-[#6EE7B7] transition"
        />
      </SheetTrigger>

      {/* SIDEBAR */}
      <SheetContent className="bg-[#0E0E0E] text-[#F5F5F5] border-gray-700 w-[380px]">
        <SheetHeader>
          <SheetTitle className="text-[#F5F5F5] text-xl font-semibold">
            Seu Carrinho
          </SheetTitle>
        </SheetHeader>

        {/* LISTA DE PRODUTOS */}
        <div className="mt-6 flex flex-col gap-4 max-h-[70vh] overflow-y-auto pr-2">
          {items.length === 0 && (
            <p className="text-zinc-400 text-center mt-10">
              Seu carrinho está vazio.
            </p>
          )}

          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 bg-zinc-900 p-4 mx-3 rounded-xl border border-zinc-800"
            >
              <Image
                src={item.thumbnail}
                width={70}
                height={70}
                alt={item.title}
                className="rounded-lg object-cover"
              />

              <div className="flex-1">
                <h3 className="font-semibold text-sm">{item.title}</h3>
                <p className="text-zinc-400 text-sm">${item.price}</p>

                {/* Quantidade */}
                <div className="flex items-center gap-3 mt-2">
                  <Button
                    size="icon"
                    variant="default"
                    className="h-7 w-7"
                    onClick={() => decrementItem(item.id)}
                  >
                    <Minus size={14} />
                  </Button>

                  <span className="text-white">{item.quantity}</span>

                  <Button
                    size="icon"
                    variant="default"
                    className="h-7 w-7"
                    onClick={() => addItem(item)}
                  >
                    <Plus size={14} />
                  </Button>
                </div>
              </div>

              {/* Remove */}
              <Button
                size="icon"
                variant="ghost"
                className="text-red-400 hover:text-red-600"
                onClick={() => removeItem(item.id)}
              >
                <Trash size={18} />
              </Button>
            </div>
          ))}
        </div>

        {/* TOTAL */}
        {items.length > 0 && (
          <div className="mt-6 border-t border-zinc-800 pt-4 mx-4">
            <p className="flex justify-between text-lg font-semibold">
              <span>Total:</span> <span>${total.toFixed(2)}</span>
            </p>

            <Button className="w-full mt-4 bg-emerald-600 hover:bg-emerald-700 cursor-pointer">
              Finalizar Compra
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
