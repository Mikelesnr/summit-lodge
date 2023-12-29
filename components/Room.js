import defaultImg from "../assets/images/signature/signature-wide.jpeg";
import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";
export default function Room({ room }) {
  const { name, slug, images, price } = room;
  return (
    <article className="room">
      <div className="img-container">
        <Image src={images[0] || defaultImg} alt="single room" />
        <div className="price-top">
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        <Link href={`/single_room/${slug}`} className="btn-primary room-link">
          Features
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
}
// Room is also an Object so adding propTypes
Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  }),
};
