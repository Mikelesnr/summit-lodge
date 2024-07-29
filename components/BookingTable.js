"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Title from "./Title";

const BookingTable = () => {
  const [bookings, setBookings] = useState([]);
  const [deletedBookingId, setDeletedBookingId] = useState(null);

  useEffect(() => {
    async function getBooked() {
      try {
        const response = await axios.get("/api/bookings");
        setBookings(response.data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    }

    getBooked();
  }, []);

  const deleteBooking = async (bookingId) => {
    try {
      await axios.delete(`/api/bookings?id=${bookingId}`);
      setDeletedBookingId(bookingId);
      // Remove the deleted booking from the local state (optional)
      setBookings((prevBookings) =>
        prevBookings.filter((booking) => booking.id !== bookingId)
      );
    } catch (error) {
      console.error("Error deleting booking:", error);
      // Handle error or show an error message
    }
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <>
      <br />
      <Title title="Booked rooms" />
      <div className="table">
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Room</th>
              <th scope="col">Email</th>
              <th scope="col">Check-in</th>
              <th scope="col">Check-out</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => {
              const isCheckOutValid = booking.checkOut >= today;
              if (isCheckOutValid) {
                return (
                  <tr key={booking.id}>
                    <td>{booking.firstName}</td>
                    <td>{booking.lastName}</td>
                    <td>{booking.room}</td>
                    <td>{booking.email}</td>
                    <td>{booking.checkIn}</td>
                    <td>{booking.checkOut}</td>
                    <td>
                      {/* Add your delete button logic here */}
                      {/* For example: */}
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteBooking(booking.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              }
              return null; // Skip rendering if checkOut is invalid
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BookingTable;
