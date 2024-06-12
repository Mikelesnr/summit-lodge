import { create } from "zustand";

export const useCartStore = create((set) => ({
  cart: [],
  bookingCart: [],
  checkIn: "",
  checkOut: "",
  addToCart: (room) => set((state) => ({ cart: [...state.cart, room] })),
  addToBookingCart: (booking) =>
    set((state) => ({ bookingCart: [...state.bookingCart, booking] })),
  removeFromCart: (roomName) =>
    set((state) => ({
      cart: state.cart.filter((room) => room.name !== roomName),
    })),
  clearCart: () => set((state) => ({ cart: [] })),
  clearBookingCart: () => set((state) => ({ bookingCart: [] })),
  setCheckIn: (into) => set((state) => ({ email: into })),
  setCheckOut: (out) => set((state) => ({ email: out })),
}));
