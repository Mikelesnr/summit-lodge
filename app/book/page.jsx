"use client";
import Hero from "../../components/Hero";
import Link from "next/link";
import BookingForm from "../../components/bookingForm";
import Map from "../../components/map";
import Banner from "../../components/Banner";

const Book = () => {
  const cart = [];
  return (
    <>
      <Hero hero="bookHero">
        <Banner title="Book A Room">
          <Link href="/rooms" className="btn-primary">
            Rooms
          </Link>
        </Banner>
      </Hero>
      <BookingForm></BookingForm>
      <Map></Map>
    </>
  );
};

export default Book;
