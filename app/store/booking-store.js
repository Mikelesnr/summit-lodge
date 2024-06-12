import { create } from "zustand";

export const useBookingStore = create((set) => ({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  numRooms: "",
  numGuests: "",
  checkIn: "",
  checkOut: "",

  setFirstname: (fname) => set((state) => ({ firstName: fname })),
  setLastname: (lname) => set((state) => ({ lastName: lname })),
  setPhone: (no) => set((state) => ({ phone: no })),
  setEmail: (mail) => set((state) => ({ email: mail })),
  setNumRooms: (rooms) => set((state) => ({ numRooms: rooms })),
  setNumGuests: (guests) => set((state) => ({ numGuests: guests })),
  setCheckIn: (into) => set((state) => ({ checkIn: into })),
  setCheckOut: (out) => set((state) => ({ checkOut: out })),
}));
