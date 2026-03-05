import Image from "next/image";

export default function HeroCard() {
  return (
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
  )
}
