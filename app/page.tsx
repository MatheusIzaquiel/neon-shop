
import Hero from "./Components/Hero/Hero";
import Category from "./Components/Products/Category";
import ProductsSection from "./Components/Products/ProductsSection";

export default function Home() {
  return (
    <main className="w-full bg-[#0E0E0E]">
      <Hero />
      <Category />
      <ProductsSection />
    </main>
  );
}
