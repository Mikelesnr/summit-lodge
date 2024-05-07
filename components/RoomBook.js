import defaultImg from "../assets/images/signature/signature-wide.jpeg";
import PropTypes from "prop-types";
import Image from "next/image";
import { useCartStore } from "../app/store/cart-store";

export default function RoomBook({ room }) {
  const { name, slug, images, price } = room;
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const addToCart = useCartStore((state) => state.addToCart);
  const cart = useCartStore((state) => state.cart);
  const add = () => {
    addToCart({ name, price });
    console.log(cart);
  };

  return (
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
