import Hero from "../components/Hero";
import Link from "next/link";
import Banner from "../components/Banner";

const NotFound = () => {
  return (
    <Hero>
      <Banner title="404" subtitle="Page not found">
        <Link href="/" className="btn-primary">
          Return Home
        </Link>
      </Banner>
    </Hero>
  );
};

export default NotFound;
