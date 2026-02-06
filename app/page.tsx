import Category from "./Components/Category-Buttons/Category";
import Hero from "./Components/Hero/Hero";
import NavBar from "./Components/Navbar/NavBar";
import ProductsSection from "./Components/Products/ProductsSection";

export default function Home() {
  return (
    <main className="w-full bg-[#0E0E0E]">
      <NavBar />
      <Hero />
      <Category />
      <ProductsSection />
    </main>
  );
}
