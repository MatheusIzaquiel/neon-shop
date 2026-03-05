import HeroMainContent from "./Hero_Components/HeroMainContent";
import HeroCard from "./Hero_Components/HeroCard";

export default function Home() {
  return (
    <section className="w-full pt-10 pb-10 bg-[#0E0E0E]">
      <div className="max-w-7xl mx-auto flex items-center md:justify-around py-5 px-6">
        {/* TEXTO */}
        <HeroMainContent />

        {/* CARD 3D DO PRODUTO */}
        <HeroCard />
      </div>
    </section>
  );
}
