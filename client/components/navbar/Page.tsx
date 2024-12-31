"use client";
import React, { useState } from "react";
import logo from "@/public/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import Devfolio from "../ui/DevfolioBtn";

const Navbar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible((prevState) => !prevState);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex flex-wrap items-center justify-between px-2 py-4 text-lg text-gray-700 bg-black border-b border-b-white md:px-4 shadow-teal-900">
      {/* Logo Section */}
      <div className="flex items-center">
        <Image
          src={logo}
          alt="logo"
          width={1000}
          height={400}
          className="w-40"
        />
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="sm:hidden">
        <button onClick={toggleMenu} className="text-white">
        <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 64 64"
  className="w-12 h-12"
>

  <rect
    x="14"
    y="18"
    width="36"
    height="18"
    fill="#B0B0B0"
    stroke="black"
    strokeWidth="2"
    rx="3"
  />
  
  <rect x="18" y="20" width="28" height="2" fill="black" />
  <rect x="18" y="32" width="28" height="2" fill="black" />
  
 
  <rect x="28" y="36" width="8" height="20" fill="#4C4C4C" stroke="black" strokeWidth="2" />
  <rect x="28" y="36" width="8" height="4" fill="black" />
  <line x1="28" y1="38" x2="36" y2="44" stroke="white" strokeWidth="2" />
  <line x1="28" y1="44" x2="36" y2="50" stroke="white" strokeWidth="2" />
  <line x1="28" y1="50" x2="36" y2="56" stroke="white" strokeWidth="2" />
  
  
  <rect x="27" y="56" width="10" height="4" fill="#B0B0B0" stroke="black" strokeWidth="2" />
</svg>


        </button>
      </div>

      {/* Navigation Menu */}
      <div
        id="menu"
        className={`menu ${
          isMenuVisible ? "" : "hidden"
        } w-full sm:flex sm:items-center sm:w-auto`}
      >
        <ul className="pt-4 text-base text-gray-950 sm:flex sm:justify-between sm:pt-0">
          <li className="sm:mx-4">
            <Link href="" className="text-white hover:text-cyan-300">
              HOME
            </Link>
          </li>
          <li className="sm:mx-4">
            <a href="#aboutus" className="text-white hover:text-cyan-300">
              ABOUT
            </a>
          </li>
          
          <li className="sm:mx-4">
            <a href="#aboutus" className="text-white hover:text-cyan-300">
              FAQ
            </a>
          </li>
          <li className="sm:mx-4">
            <Devfolio />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
