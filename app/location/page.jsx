import Hero from "@components/Hero";
import Link from "next/link";
import Map from "@components/map";
import Banner from "@components/Banner";
// import RoomsContainer from "@components/RoomsContainer";
const Location = () => {
  return (
    <>
      <Hero hero="bookHero">
        <Banner title="Get Directions">
          <Link href="/" className="btn-primary">
            location
          </Link>
        </Banner>
      </Hero>
      {/* <RoomsContainer></RoomsContainer> */}
      <Map></Map>
    </>
  );
};

export default Location;
