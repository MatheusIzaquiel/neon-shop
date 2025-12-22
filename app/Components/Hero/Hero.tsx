import Image from "next/image";
import { Button } from "../components/ui/button";

export default function Home() {
  return (
    <section className="w-full pt-10 bg-[#0E0E0E]">
      <div className="max-w-7xl mx-auto flex items-center md:justify-around py-5 px-6">
        {/* TEXTO */}
        <div className="mt-10 max-w-xl">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1 font-bold leading-tight text-[#F5F5F5]">
              <span className="text-5xl">Seu novo espaço</span>
              <span className="text-5xl">para encontrar</span>
              <span className="text-5xl">produtos incríveis.</span>
            </div>

            <div className="flex flex-col gap-1 leading-tight text-[#F5F5F5]">
              <h3 className="text-[20px] font-light">
                Qualidade, simplicidade e design.
              </h3>
              <h3 className="text-[20px] font-light">Tudo em um só lugar.</h3>
            </div>

            {/* BOTÕES */}
            <div className="flex gap-5 mt-2">
              <Button className="bg-[#6EE7B7] text-black text-[17px] font-semibold hover:bg-[#5eddb0] shadow-[0_0_20px_#6EE7B7] hover:shadow-[0_0_30px_#6EE7B7] cursor-pointer transition">
                Explorar agora
              </Button>

              <Button className="bg-[#0E0E0E] text-[17px] font-semibold border border-zinc-700 text-zinc-200 cursor-pointer hover:bg-zinc-900 transition">
                Ver Lançamentos
              </Button>
            </div>
          </div>
        </div>

        {/* CARD 3D DO PRODUTO */}
        <div className="relative hidden md:block">
          {/* Glow neon */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[260px] h-[60px] bg-[#6EE7B7] blur-3xl opacity-40 rounded-full"></div>

          {/* Card com leve rotação */}
          <div className="transform rotate-[8deg] hover:rotate-0 transition-all duration-300 ease-out">
            <div className="bg-zinc-900 border border-zinc-700 rounded-2xl p-4 shadow-xl">
              <Image
                src="/thumbnail.webp"
                alt="Produto em destaque"
                width={340}
                height={340}
                className="rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
