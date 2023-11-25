import Hero from "@components/Hero";
import Link from "next/link";
import Banner from "@components/Banner";
// import RoomsContainer from "@components/RoomsContainer";
const Contacts = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="Contact Us">
          <Link href="/" className="btn-primary">
            Contact
          </Link>
        </Banner>
      </Hero>
      {/* <RoomsContainer></RoomsContainer> */}
    </>
  );
};

export default Contacts;
