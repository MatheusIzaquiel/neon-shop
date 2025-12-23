// app/ClientCartLoader.tsx
"use client";

import { useEffect } from "react";
import { useCartStore } from "@/Store/useCartStore";

export default function ClientCartLoader() {
  useEffect(() => {
    useCartStore.getState().fetchCart();
  }, []);

  return null;
}