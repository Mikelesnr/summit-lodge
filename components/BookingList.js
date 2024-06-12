import RoomBook from "./RoomBook";
import { useCartStore } from "../app/store/cart-store";
import axios from "axios";

export default function BookingList({ rooms }) {
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>Unfortunately No Match found</h3>
      </div>
    );
  }

  const cart = useCartStore((state) => state.cart);
  // console.log(cart);

  const filtered_rooms = [];

  for (let i = 0; i < rooms.length; i++) {
    let room = rooms[i];
    // console.log(room);
    filtered_rooms.push(room);
  }

  async function getBooked() {
    const response = await axios.get("/api/bookings");
    // console.log(response.data);
    return response.data;
  }
  getBooked();

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
