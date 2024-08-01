import Hero from "../../components/Hero";
import ContactForm from "../../components/contactForm";
import Link from "next/link";
import Banner from "../../components/Banner";

const Contacts = () => {
  return (
    <>
      <Hero hero="contactHero">
        <Banner title="Contact Us">
          <Link href="/rooms" className="btn-primary">
            Check Out Our Rooms
          </Link>
        </Banner>
      </Hero>
      <ContactForm></ContactForm>
    </>
  );
};

export default Contacts;
