"use client";
import { LucideHeart, LucideUser } from "lucide-react";
import Link from "next/link";
import { useCartStore } from "@/Store/useCartStore";
import SearchComponent from "./Navbar_components/SearchComponent";
import MobileSearchComponent from "./Navbar_components/MobileSerachComponent";
import { CartSheet } from "./Cart/CartSheet";

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
          <SearchComponent />
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
      <MobileSearchComponent />
    </nav>
  );
}
