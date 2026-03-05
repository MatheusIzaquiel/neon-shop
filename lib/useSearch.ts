
import { useDebounce } from "@/lib/useDebounce";
import { useProductsStore } from "@/Store/useProductStore"; 
import { useEffect, useState } from "react";

export function useSearch() {
  const {
    products: storeProducts,
    searchProducts,
    fetchProducts,
    loading,
  } = useProductsStore();

  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm.trim() === "") {
      fetchProducts();
    } else {
      searchProducts(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm, searchProducts, fetchProducts]);

  const clearSearch = () => setSearchTerm("");

  return {
    searchTerm,
    setSearchTerm,
    storeProducts,
    loading,
    clearSearch,
  };
}