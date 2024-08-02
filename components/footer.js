import {
  FaAudioDescription,
  FaBed,
  FaBeer,
  FaBookOpen,
  FaEnvelope,
  FaFacebook,
  FaHeadphones,
  FaHeadset,
  FaHome,
  FaInbox,
  FaMapMarked,
  FaPhone,
  FaRegUser,
  FaRobot,
  FaTelegram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Summit Guest House
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="/location" className=" hover:underline">
                    687 Baobab Road
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/location" className="hover:underline">
                    Beitbridge
                  </a>
                </li>
                {/* {/* <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Brand Center
                  </a>
                </li> */}
                <li className="mb-4">
                  <a href="/location" className="hover:underline">
                    Location
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Contact Details
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="tel:+263780652983"
                    className="hover:underline"
                    target="_blank"
                  >
                    <div className="icon-text-container">
                      <FaPhone />
                      <span className="px-2">+263 780 652 983</span>
                    </div>
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="tel:+263718267984"
                    className="hover:underline"
                    target="_blank"
                  >
                    <div className="icon-text-container">
                      <FaPhone />
                      <span className="px-2"> +263 718 267 984</span>
                    </div>
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="mailto:summitguestlodge@gmail.com"
                    className="hover:underline"
                    target="_blank"
                  >
                    <div className="icon-text-container">
                      <FaEnvelope />
                      <span className="px-2"> Email</span>
                    </div>
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://www.facebook.com/Summitguestlodge"
                    className="hover:underline"
                    target="_blank"
                  >
                    <div className="icon-text-container">
                      <FaFacebook />
                      <span className="px-2"> Facebook</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Explore Summit
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="/" className="hover:underline">
                    <div className="icon-text-container">
                      <FaHome />
                      <span className="px-2">Home</span>
                    </div>
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/rooms" className="hover:underline">
                    <div className="icon-text-container">
                      <FaBed />
                      <span className="px-2">Rooms</span>
                    </div>
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/book" className="hover:underline">
                    <div className="icon-text-container">
                      <FaBookOpen />
                      <span className="px-2">Book</span>
                    </div>
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/contacts" className="hover:underline">
                    <div className="icon-text-container">
                      <FaTelegram />
                      <span className="px-2">Contact Us</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Customer Help
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    <div className="icon-text-container">
                      <FaRegUser />
                      <span className="px-2">Guest Feedback</span>
                    </div>
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    <div className="icon-text-container">
                      <FaHeadset />
                      <span className="px-2">Guest Support</span>
                    </div>
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/location" className="hover:underline">
                    <div className="icon-text-container">
                      <FaMapMarked />
                      <span className="px-2">map location</span>
                    </div>
                  </a>
                </li>
                {/* <li className="mb-4">
                  <a href="#" className="hover:underline">
                    MacOS
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
          <div className="px-4 py-6 md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
              © 2023 <a href="">summit_guesthouse_beitbridge™</a>. All Rights
              Reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
