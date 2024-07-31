import BookingTable from "../../components/BookingTable";
import Hero from "../../components/Hero";
import Banner from "../../components/Banner";
import Link from "next/link";

const Book = () => {
  const cart = [];
  return (
    <>
      <Hero hero="bookHero">
        <Banner title="Book A Room">
          <Link href="/home" className="btn-primary">
            Home
          </Link>
        </Banner>
      </Hero>
      <BookingTable></BookingTable>
    </>
  );
};

export default Book;