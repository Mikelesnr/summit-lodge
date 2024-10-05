import "../styles/globals.css";
import NavBar from "../components/NavBar";
import Footer from "../components/footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RoomProvider } from "../assets/context";
import "bootstrap/dist/css/bootstrap.css";

export const metadata = {
  title: "Summit Guesthouse",
  description:
    "Summit Guest house,687 Baobab Road Beitbridge Zimbabwe. Plan an Unforgettable Experience in Summit Guesthouse today",
  icons: {
    icon: "/favicon.ico",
  },
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <RoomProvider>
          <main className="app">
            <NavBar />
            {children}
            <Footer />
          </main>
        </RoomProvider>
        <ToastContainer />
      </body>
    </html>
  );
};

export default RootLayout;
