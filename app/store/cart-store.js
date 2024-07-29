import { create } from "zustand";

export const useCartStore = create((set) => ({
  cart: [],
  bookingCart: [],
  checkIn: "",
  checkOut: "",
  addToCart: (room) => set((state) => ({ cart: [...state.cart, room] })),
  addToBookingCart: (booking) =>
    set((state) => ({ bookingCart: [...state.bookingCart, booking] })),
  removeFromCart: (roomName) => {
    set((state) => {
      const indexToRemove = state.cart.findIndex(
        (room) => room.name === roomName
      );
      if (indexToRemove !== -1) {
        const updatedCart = [...state.cart];
        updatedCart.splice(indexToRemove, 1); // Remove one item at the specified index
        return { cart: updatedCart };
      }
      return state; // No change if room not found
    });
  },
  removeFromBookingCart: (roomName) =>
    set((state) => ({
      bookingCart: state.bookingCart.filter((room) => room !== roomName),
    })),
  clearCart: () => set((state) => ({ cart: [] })),
  clearBookingCart: () => set((state) => ({ bookingCart: [] })),
  setCheckIn: (into) => set((state) => ({ email: into })),
  setCheckOut: (out) => set((state) => ({ email: out })),
}));
