"use client";
import { withRoomConsumer } from "../assets/context";
import Loading from "./Loading";
import Title from "./Title";
import BookingList from "./BookingList";

function RoomsBooking({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <section className="filter-container">
        <Title title="Rooms"></Title>
        <BookingList rooms={sortedRooms} />
      </section>
    </>
  );
}

export default withRoomConsumer(RoomsBooking);
