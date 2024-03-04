import RoomBook from "./RoomBook";

export default function BookingList({ rooms }) {
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>Unfortunately No Match found</h3>
      </div>
    );
  }
  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {rooms.map((item) => {
          return <RoomBook key={item.id} room={item}></RoomBook>;
        })}
      </div>
    </section>
  );
}
