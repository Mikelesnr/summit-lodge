import Hero from "@components/Hero";
import ContactForm from "@components/contactForm";
import Link from "next/link";
import Banner from "@components/Banner";
// import RoomsContainer from "@components/RoomsContainer";
const Contacts = () => {
  return (
    <>
      <Hero hero="contactHero">
        <Banner title="Contact Us">
          <Link href="/" className="btn-primary">
            Contact
          </Link>
        </Banner>
      </Hero>
      <ContactForm></ContactForm>
    </>
  );
};

export default Contacts;
