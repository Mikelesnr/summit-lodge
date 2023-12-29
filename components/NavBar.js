"use client";

import { useEffect, useState } from "react";
import { FaAlignRight } from "react-icons/fa";
import logo from "../assets/images/logo.svg";
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const NavBar = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link href="/" className="nav-icon flex gap-2 felx-center">
            <Image
              src="/summit-guesthouse-high-resolution-logo-transparent.png"
              alt="Summit Logo"
              width={220}
              height={60}
              className="object-contain"
            />
          </Link>
          <button
            className="nav-btn"
            type="submit"
            onClick={() => setToggleDropdown((prev) => !prev)}
          >
            <FaAlignRight className="nav-icon"></FaAlignRight>
          </button>
        </div>
        <ul
          className={toggleDropdown ? "nav-links show-nav" : "nav-links"}
          onClick={() => setToggleDropdown(false)}
        >
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/rooms">Rooms</Link>
          </li>
          <li>
            <Link href="/book">Book</Link>
          </li>
          <li>
            <Link href="/contacts">Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
