import { create } from "zustand";

export const useCartStore = create((set) => ({
  cart: [],
  addToCart: (room) => set((state) => ({ cart: [...state.cart, room] })),
  removeFromCart: (roomName) =>
    set((state) => ({
      cart: state.cart.filter((room) => room.name !== roomName),
    })),
  clearCart: () => set((state) => ({ cart: [] })),
}));
