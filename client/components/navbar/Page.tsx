"use client";
import React, { useState, useEffect } from "react";
import logo from "@/public/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingPercentage, setLoadingPercentage] = useState(0);

  const toggleMenu = () => {
    setIsMenuVisible((prevState) => !prevState);
  };

  // Simulate loading process
  useEffect(() => {
    let interval: NodeJS.Timeout; // Explicitly typing the interval variable
    if (isLoading) {
      interval = setInterval(() => {
        setLoadingPercentage((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsLoading(false);
            return 100;
          }
          return prev + 5;
        });
      }, 50);
    }
    return () => clearInterval(interval); // Cleanup to avoid memory leaks
  }, [isLoading]);

  if (isLoading) {
    return (
      <div className="fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center bg-black text-white z-50 overflow-hidden">
        <div className="relative w-40 h-40 mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            className="w-full h-full animate-spin-slow"
          >
            <circle cx="32" cy="32" r="30" fill="#003366" />
            <circle cx="32" cy="32" r="24" fill="#FFFFFF" />
            <circle cx="32" cy="32" r="18" fill="#FF0000" />
            <circle cx="32" cy="32" r="10" fill="#FFFFFF" />
            <path
              d="M32 19.5L35.09 27.61L43.87 28.39L37.09 33.59L39.18 42.39L32 37.79L24.82 42.39L26.91 33.59L20.13 28.39L28.91 27.61L32 19.5Z"
              fill="#003366"
            />
          </svg>
        </div>
        <Image
          src={logo}
          alt="Loading Logo"
          width={200}
          height={200}
          className="mb-6 animate-pulse"
        />
        <div className="relative text-xl font-bold z-10">{loadingPercentage}%</div>
      </div>
    );
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-900 via-black to-gray-900 shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-4 py-4 md:px-8">
        {/* Logo Section */}
        <div className="flex items-center relative">
          <Image
            src={logo}
            alt="logo"
            width={1000}
            height={400}
            className="w-32 md:w-40"
          />
        </div>

        {/* Thor Hammer Icon for Mobile */}
        <div className="sm:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-300 hover:text-white focus:outline-none"
          >
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
                stroke="#333"
                strokeWidth="2"
                rx="3"
              />
              <rect x="18" y="20" width="28" height="2" fill="#000" />
              <rect x="18" y="32" width="28" height="2" fill="#000" />
              <rect
                x="28"
                y="36"
                width="8"
                height="20"
                fill="#4C4C4C"
                stroke="#333"
                strokeWidth="2"
              />
              <rect x="28" y="36" width="8" height="4" fill="#000" />
              <line
                x1="28"
                y1="38"
                x2="36"
                y2="44"
                stroke="#FFF"
                strokeWidth="2"
              />
              <line
                x1="28"
                y1="44"
                x2="36"
                y2="50"
                stroke="#FFF"
                strokeWidth="2"
              />
              <line
                x1="28"
                y1="50"
                x2="36"
                y2="56"
                stroke="#FFF"
                strokeWidth="2"
              />
              <rect
                x="27"
                y="56"
                width="10"
                height="4"
                fill="#B0B0B0"
                stroke="#333"
                strokeWidth="2"
              />
              <circle cx="32" cy="32" r="4" fill="#FFD700" stroke="#333" strokeWidth="2" />
              <circle cx="32" cy="48" r="2" fill="#FFD700" />
            </svg>
          </button>
        </div>

        {/* Navigation Menu */}
        <div
          className={`${
            isMenuVisible ? "block" : "hidden"
          } absolute top-full left-0 w-full bg-black sm:static sm:block sm:w-auto`}
        >
          <ul className="flex flex-col items-center sm:flex-row sm:space-x-8">
            <li>
              <Link
                href="/"
                className="block px-4 py-2 text-white transition-colors duration-300 hover:text-cyan-300 sm:px-0"
              >
                HOME
              </Link>
            </li>
            <li>
              <a
                href="#aboutus"
                className="block px-4 py-2 text-white transition-colors duration-300 hover:text-cyan-300 sm:px-0"
              >
                ABOUT
              </a>
            </li>
            <li>
              <a
                href="#aboutus"
                className="block px-4 py-2 text-white transition-colors duration-300 hover:text-cyan-300 sm:px-0"
              >
                FAQ
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;