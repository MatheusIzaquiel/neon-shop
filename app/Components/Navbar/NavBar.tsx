"use client";
import { LucideHeart, LucideSearch, LucideUser } from "lucide-react";
import Link from "next/link";
import { CartSheet } from "../Cart/CartSheet";
import { useCartStore } from "@/Store/useCartStore";

export default function NavBar() {
  const items = useCartStore((state) => state.items);
  const cartItemCount = items.length;

  return (
    <nav className="w-full bg-[#0E0E0E] text-white border-b border-zinc-800">
      <div className="max-w-7xl mx-auto relative">
        <div className="flex items-center justify-between py-5 px-6">
          {/* Logo */}
          <Link href={"/"}>
            <h1 className="text-2xl font-bold tracking-tight">
              <span className="text-white">Neon</span>
              <span className="text-[#6EE7B7]">Shop</span>
            </h1>
          </Link>
          {/* Search Bar */}
          <div className="hidden md:flex items-center w-full max-w-md bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-2 gap-2">
            <LucideSearch size={20} className="text-zinc-400" />
            <input
              type="text"
              placeholder="Buscar produtos..."
              className="bg-transparent text-sm flex-1 outline-none placeholder:text-zinc-500"
            />
          </div>

          {/* Icons */}
          <div className="flex items-center gap-6">
            <Link href={"/"}>
              <LucideHeart
                size={22}
                className="cursor-pointer hover:text-[#6EE7B7] transition"
              />
            </Link>

            <div className="relative">
              <CartSheet />
              {cartItemCount > 0 && (
                <span className="absolute top-4 -right-1 bg-[#6EE7B7] text-black text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </div>

            <Link href={`/`}>
              <LucideUser
                size={22}
                className="cursor-pointer hover:text-[#6EE7B7] transition"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile search bar */}
      <div className="md:hidden px-6 pb-4">
        <div className="flex items-center bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-2 gap-2">
          <LucideSearch size={20} className="text-zinc-400" />
          <input
            type="text"
            placeholder="Buscar produtos..."
            className="bg-transparent text-sm flex-1 outline-none placeholder:text-zinc-500"
          />
        </div>
      </div>
    </nav>
  );
}
