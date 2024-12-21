'use client'
import React, { useState } from "react";
import logo from "@/public/assets/logo.png"
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible((prevState) => !prevState);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex flex-wrap items-center justify-between px-2 py-4 text-lg text-gray-700 bg-black border-b border-b-white md:px-4 shadow-teal-900"
    >
      {/* Logo Section */}
      <div className="flex items-center">
        <Image src={logo} alt="logo" width={1000} height={400} className="w-40"/>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="sm:hidden">
        <button onClick={toggleMenu} className="text-white">
          ☰
        </button>
      </div>

      {/* Navigation Menu */}
      <div
        id="menu"
        className={`menu ${
          isMenuVisible ? "" : "hidden"
        } w-full sm:flex sm:items-center sm:w-auto`}
      >
        <ul
          className="pt-4 text-base text-gray-950 sm:flex sm:justify-between sm:pt-0"
        >
          <li className="sm:mx-4">
            <Link href="" className="text-white hover:text-cyan-300">
              HOME
            </Link>
          </li>
          <li className="sm:mx-4">
            <Link href="/aboutus" className="text-white hover:text-cyan-300">
              ABOUT
            </Link>
          </li>
          <li className="sm:mx-4">
            <a href="#" className="text-white hover:text-cyan-300">
              EVENTS
            </a>
          </li>
          <li className="sm:mx-4">
            <Link href="/team" className="text-white hover:text-cyan-300">
              TEAM
            </Link>
          </li>
          <li className="sm:mx-4">
            <a href="#" className="text-white hover:text-cyan-300">
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;