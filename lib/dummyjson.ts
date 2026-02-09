// lib/dummyjson.ts
// Funções que seleciona uma quanntidade de produtos inicial, no caso, máximo de 30 
export async function getProducts(limit = 30) {
  const res = await fetch(`https://dummyjson.com/products?limit=${limit}`);
  if (!res.ok) throw new Error("Falha ao carregar produtos");
  const data = await res.json();
  return data.products;
}
// Função para pegar um produto específico por ID
export async function getProductById(id: string | number) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  if (!res.ok) throw new Error("Produto não encontrado");
  return res.json();
}
// Função para pegar produtos por categoria
export async function getProductsByCategory(category: string) {
  const res = await fetch(`https://dummyjson.com/products/category/${category}`);
  if (!res.ok) throw new Error("Categoria não encontrada");
  const data = await res.json();
  return data.products;
}