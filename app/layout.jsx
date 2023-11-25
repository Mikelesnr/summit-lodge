import "@styles/globals.css";
import NavBar from "@components/NavBar";
import { children } from "react";

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

        <main className="app">
          <NavBar />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
