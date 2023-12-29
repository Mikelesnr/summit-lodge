import Hero from "../../components/Hero";
import Link from "next/link";
import Banner from "../../components/Banner";
import RoomsContainer from "../../components/RoomsContainer";
const Rooms = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="Our Rooms">
          <Link href="/book" className="btn-primary">
            Book Room
          </Link>
        </Banner>
      </Hero>
      <RoomsContainer></RoomsContainer>
    </>
  );
};

export default Rooms;
