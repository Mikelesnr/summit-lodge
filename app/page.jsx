import Hero from "../components/Hero";
import Amenities from "../components/amenities";
import Banner from "../components/Banner";
import Link from "next/link";
import Image from "next/image";
import Services from "../components/Services";
import Reviews from "../components/reviews";
import Featured from "../components/FeaturedRooms";

export default function Home({ children }) {
  return (
    <div>
      <Hero>
        <Banner
          title={
            <Image
              src="/summit.png"
              alt="Summit Logo"
              width={330}
              height={80}
              className="object-contain"
            />
          }
          subtitle="deluxe rooms starting at $50 "
        >
          <Link href="/rooms" className="btn-primary">
            Our rooms
          </Link>
        </Banner>
      </Hero>
      <Services></Services>
      <Featured />
      <Hero hero="bookHero">
        <Banner
          title="Book A Room"
          subtitle="Plan an Unforgettable Experience in Summit Guesthouse today "
        >
          <Link href="/book" className="btn-primary">
            Book
          </Link>
        </Banner>
      </Hero>
      <Amenities />
      <Reviews />
    </div>
  );
}
