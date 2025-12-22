import { api } from "./axios-client";

export async function getAllProducts() {
  const res = await api.get("/products");
  return res.data.products;
}

export async function getProductById(id: string | number) {
  const res = await api.get(`/products/${id}`);
  return res.data;
}
