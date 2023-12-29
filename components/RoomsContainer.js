"use client";
import { withRoomConsumer } from "../assets/context";
import Loading from "./Loading";
import Title from "./Title";
import RoomsList from "./RoomsList";

function RoomContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <section className="filter-container">
        <Title title="Rooms"></Title>
        <RoomsList rooms={sortedRooms} />
      </section>
    </>
  );
}

export default withRoomConsumer(RoomContainer);
