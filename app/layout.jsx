import "@styles/globals.css";
import NavBar from "@components/NavBar";
import Footer from "@components/footer";
import { children } from "react";
import { RoomProvider } from "@assets/context";

export const metadata = {
  title: "summit lodge",
  description: "bnb website",
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
      </body>
    </html>
  );
};

export default RootLayout;
