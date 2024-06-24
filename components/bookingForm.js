"use client";
import React from "react";
import Title from "./Title";
import RoomsBooking from "./RoomsBooking";
import { toast } from "react-toastify";
import { useCartStore } from "../app/store/cart-store";
import { useBookingStore } from "../app/store/booking-store";
import Cart from "./cart";

const BookingForm = () => {
  const { cart, clearCart } = useCartStore();
  const notify = () => {
    toast("Booking completed");
  };

  const {
    firstName,
    lastName,
    phone,
    email,
    numRooms,
    numGuests,
    checkIn,
    checkOut,
  } = useBookingStore();
  const {
    setFirstname,
    setLastname,
    setPhone,
    setEmail,
    setNumRooms,
    setNumGuests,
    setCheckIn,
    setCheckOut,
  } = useBookingStore();
  const roomName = JSON.stringify(cart);

  const data = {
    firstName,
    lastName,
    email,
    phone,
    numRooms,
    numGuests,
    checkIn,
    checkOut,
    roomName,
  };

  const add = () => {
    // console.log(data);
  };

  const sendForm = async () => {
    const formData = data;

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      // console.log(data);
    } catch (error) {
      console.error(
        "There was a problem with the fetch operation: " + error.message
      );
    }

    setFirstname("");
    setLastname("");
    setEmail("");
    setPhone("");
    setNumRooms("");
    setNumGuests("");
    setCheckIn("");
    setCheckOut("");

    clearCart();
    notify();
    add();
  };

  return (
    <div>
      <div className=" p-12">
        <div className="mx-auto w-full max-w-[550px]">
          <Title title="Book Room" />
          <form action="https://formbold.com/s/FORM_ID" method="POST">
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    for="firstName"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    First Name
                  </label>
                  <input
                    type="firstName"
                    name="firstName"
                    id="firstname"
                    value={firstName}
                    onChange={(e) => {
                      setFirstname(e.target.value);
                      add();
                    }}
                    placeholder="First Name"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    for="lastName"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Last Name
                  </label>
                  <input
                    type="lastName"
                    name="lastName"
                    id="lastname"
                    value={lastName}
                    onChange={(e) => {
                      setLastname(e.target.value);
                      add();
                    }}
                    placeholder="Last Name"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>

            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    for="numGuests"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Number of Guests
                  </label>
                  <input
                    type="number"
                    name="numGuests"
                    id="numGuests"
                    value={numGuests}
                    onChange={(e) => {
                      setNumGuests(e.target.value);
                      add();
                    }}
                    placeholder="0"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    for="numRooms"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Number of Rooms
                  </label>
                  <input
                    type="number"
                    name="numRooms"
                    id="numRooms"
                    value={numRooms}
                    onChange={(e) => {
                      setNumRooms(e.target.value);
                      add();
                    }}
                    placeholder="0"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>

            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    for="phone"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      add();
                    }}
                    placeholder="+263 772 000 000"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    for="email"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      add();
                    }}
                    placeholder="address@email.com"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>

            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    for="checkIn"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Check In
                  </label>
                  <input
                    type="date"
                    name="checkIn"
                    id="checkIn"
                    value={checkIn}
                    onChange={(e) => {
                      setCheckIn(e.target.value);
                      add();
                    }}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    for="checkOut"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Check out
                  </label>
                  <input
                    type="date"
                    name="checkOut"
                    id="checkOut"
                    value={checkOut}
                    onChange={(e) => {
                      setCheckOut(e.target.value);
                      add();
                    }}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              {checkIn && checkOut ? <RoomsBooking /> : <></>}
            </div>

            <div>
              <Cart></Cart>
              <button
                type="submit"
                formAction={sendForm}
                data-te-ripple-init
                data-te-ripple-color="light"
                className="btn-form mb-6 inline-block w-full rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              >
                Check Out
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
