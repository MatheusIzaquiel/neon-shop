// app/api/products/search/route.ts
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q") || "";

  // Se a query estiver vazia, retorna vazio ou redireciona pro fetch all
  if (!q.trim()) {
    return NextResponse.json({ products: [] });
  }

  try {
    // Chama diretamente a API real do DummyJSON
    const res = await fetch(
      `https://dummyjson.com/products/search?q=${encodeURIComponent(q)}&limit=100`
    );

    if (!res.ok) {
      throw new Error(`DummyJSON retornou ${res.status}`);
    }

    const data = await res.json();

    // Retorna exatamente o formato que o seu store espera ({ products: [...] })
    return NextResponse.json(data);
  } catch (error) {
    console.error("Erro na rota de busca:", error);
    return NextResponse.json(
      { products: [], error: "Falha ao buscar produtos" },
      { status: 500 }
    );
  }
}