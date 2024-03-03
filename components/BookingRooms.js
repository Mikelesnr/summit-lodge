"use client";
import { withRoomConsumer } from "../assets/context";
import Loading from "./Loading";
import Title from "./Title";
import RoomsListBook from "./RoomsListBook";

function RoomContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <section className="filter-container">
        <Title title="Select Room"></Title>
        <RoomsListBook rooms={sortedRooms} />
      </section>
    </>
  );
}

export default withRoomConsumer(RoomContainer);
