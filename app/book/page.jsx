import Hero from "@components/Hero";
import Link from "next/link";
import Banner from "@components/Banner";
// import RoomsContainer from "@components/RoomsContainer";
const Book = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="Book A Room">
          <Link href="/" className="btn-primary">
            Book
          </Link>
        </Banner>
      </Hero>
      {/* <RoomsContainer></RoomsContainer> */}
    </>
  );
};

export default Book;
