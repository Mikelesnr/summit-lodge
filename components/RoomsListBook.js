import RoomBook from "./RoomBook";
export default function RoomsListBook({ rooms }) {
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>Unfortunately No Match found</h3>
      </div>
    );
  }
  const cart = [];
  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {rooms.map((item) => {
          return (
            <button
              onClick={() => {
                cart.push({ room: item.name, price: item.price });
                console.log(cart);
              }}
            >
              <RoomBook key={item.id} room={item}></RoomBook>;
            </button>
          );
        })}
      </div>
    </section>
  );
}
