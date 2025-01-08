"use client";
import React, { useState } from "react";
import logo from "@/public/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-900 via-black to-gray-900 shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-4 py-4 md:px-8">
        <Image src={logo} alt="logo" width={1000} height={400} className="w-32 md:w-40" />

        <button
          onClick={() => setIsMenuVisible(!isMenuVisible)}
          className="sm:hidden text-gray-300 hover:text-white focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-12 h-12">
            <rect x="14" y="18" width="36" height="18" fill="#B0B0B0" stroke="#333" strokeWidth="2" rx="3" />
            <rect x="18" y="20" width="28" height="2" fill="#000" />
            <rect x="18" y="32" width="28" height="2" fill="#000" />
            <rect x="28" y="36" width="8" height="20" fill="#4C4C4C" stroke="#333" strokeWidth="2" />
            <rect x="28" y="36" width="8" height="4" fill="#000" />
            <line x1="28" y1="38" x2="36" y2="44" stroke="#FFF" strokeWidth="2" />
            <line x1="28" y1="44" x2="36" y2="50" stroke="#FFF" strokeWidth="2" />
            <line x1="28" y1="50" x2="36" y2="56" stroke="#FFF" strokeWidth="2" />
            <rect x="27" y="56" width="10" height="4" fill="#B0B0B0" stroke="#333" strokeWidth="2" />
            <circle cx="32" cy="32" r="4" fill="#FFD700" stroke="#333" strokeWidth="2" />
            <circle cx="32" cy="48" r="2" fill="#FFD700" />
          </svg>
        </button>

        <div className={`${isMenuVisible ? "block" : "hidden"} absolute top-full left-0 w-full bg-black sm:static sm:block sm:w-auto`}>
          <ul className="flex flex-col items-center sm:flex-row sm:space-x-8">
            {[
              { href: "/", label: "HOME" },
              { href: "#aboutus", label: "ABOUT" },
              { href: "#faq", label: "FAQ" },
            ].map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="block px-4 py-2 text-white transition hover:text-cyan-300 sm:px-0">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
