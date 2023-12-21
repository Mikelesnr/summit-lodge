import Hero from "@components/Hero";
import Link from "next/link";
import BookingForm from "@components/bookingForm";
import Map from "@components/map";
import Banner from "@components/Banner";
// import RoomsContainer from "@components/RoomsContainer";
const Book = () => {
  return (
    <>
      <Hero hero="bookHero">
        <Banner title="Book A Room">
          <Link href="/" className="btn-primary">
            Book
          </Link>
        </Banner>
      </Hero>
      <BookingForm></BookingForm>
      <Map></Map>
    </>
  );
};

export default Book;
