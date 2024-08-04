import defaultImg from "../assets/images/signature/signature-wide.jpeg";
import PropTypes from "prop-types";
import Image from "next/image";
import { useCartStore } from "../app/store/cart-store";
import { useBookingStore } from "../app/store/booking-store";
import axios from "axios";
import { toast } from "react-toastify";

export default function RoomBook({ room }) {
  const { name, slug, images, price } = room;
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const addToCart = useCartStore((state) => state.addToCart);
  const addToBookingCart = useCartStore((state) => state.addToBookingCart);
  const { bookingCart, cart } = useCartStore();
  const { checkIn, checkOut } = useBookingStore();
  async function getBooked() {
    const response = await axios.get("/api/bookings");
    // console.log(response.data);
    return response.data;
  }
  const bookedRooms = getBooked();

  const add = () => {
    addToCart({ name, price });
    toast(`${name} added`);
  };

  return (
    <>
      <article className="room">
        <div className="img-container">
          cart <Image src={images[0] || defaultImg} alt="single room" />
          <div className="price-top">
            <h6>${price}</h6>
            <p>per night</p>
          </div>
          <button type="button" onClick={add} className="btn-primary room-link">
            Add
          </button>
        </div>
        <p className="room-info">{name}</p>
      </article>
    </>
  );
}
// Room is also an Object so adding propTypes
RoomBook.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  }),
};
