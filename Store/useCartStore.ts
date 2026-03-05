import { create } from "zustand";
import { Product } from "../types/product"; 

type CartItem = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  quantity: number;
};

type CartStore = {
  items: CartItem[];
  addToCart: (product: Product) => void;
  updateQuantity: (id: number, newQuantity: number) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
};

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],

  addToCart: (product) => set((state) => {
    const existing = state.items.find((item) => item.id === product.id);
    if (existing) {
      return {
        items: state.items.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };
    }
    return {
      items: [
        ...state.items,
        {
          id: product.id,
          title: product.title,
          price: product.price,
          thumbnail: product.thumbnail,
          quantity: 1,
        },
      ],
    };
  }),

  updateQuantity: (id, newQuantity) => set((state) => {
    if (newQuantity <= 0) return { items: state.items.filter((i) => i.id !== id) };
    return {
      items: state.items.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      ),
    };
  }),

  removeFromCart: (id) => set((state) => ({
    items: state.items.filter((item) => item.id !== id),
  })),

  clearCart: () => set({ items: [] }),

  getTotalPrice: () => get().items.reduce((sum, item) => sum + item.price * item.quantity, 0),
}));

//type CartItem: tipagem dos itens do carrinho
//type CartStore: tipagem das funções do zustand
//useCartStore: função que vamos usar para utilizar em outros componentes as funcionalidades do carrinho
//items: []: é tipado com o CartItem, representa o estado inicial do carrinho, um array vazio
//addToCart: Adiciona um produto ao carrinho, se já existe → aumenta quantidade, se não existe → adiciona um novo com quantidade 1
//updateQuantity: Atualiza a quantidade de um item específico, se quantidade ficar <= 0 → remove o item automaticamente, atualiza apenas a quantidade do item desejado
//removeFromCart: Remove completamente um item do carrinho pelo id
//clearCart: Limpa todo o carrinho (remove todos os itens)
//getTotalPrice: Calcula o valor total do carrinho, usa get() porque só precisamos LER o estado atual, valor inicial da soma é 0