import Hero from "../../components/Hero";
import Link from "next/link";
import Map from "../../components/map";
import Banner from "../../components/Banner";
// import RoomsContainer from "@components/RoomsContainer";
const Location = () => {
  return (
    <>
      <Hero hero="bookHero">
        <Banner title="Get Directions">
          <Link href="/rooms" className="btn-primary">
            Check Out Our Rooms
          </Link>
        </Banner>
      </Hero>
      {/* <RoomsContainer></RoomsContainer> */}
      <Map></Map>
    </>
  );
};

export default Location;
