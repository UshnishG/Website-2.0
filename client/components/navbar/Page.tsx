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
    <nav className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 bg-gray-900 bg-opacity-70 shadow-lg rounded-full w-[90%] px-12 py-6 backdrop-blur-sm">
      <div className="flex items-center justify-between w-full">
        {/* Logo Section */}
        <div className="flex items-center">
          <Image
            src={logo}
            alt="logo"
            width={1000}
            height={400}
            className="w-16 md:w-20"
          />
        </div>

        {/* Navigation Menu */}
        <ul className="flex space-x-8 text-white text-sm md:text-base">
          <li>
            <Link
              href="/"
              className="transition-colors duration-300 hover:text-cyan-300"
            >
              HOME
            </Link>
          </li>
          <li>
            <a
              href="#aboutus"
              className="transition-colors duration-300 hover:text-cyan-300"
            >
              ABOUT
            </a>
          </li>
          <li>
            <a
              href="#faq"
              className="transition-colors duration-300 hover:text-cyan-300"
            >
              FAQ
            </a>
          </li>
          <li>
            <Link
              href="#prizes"
              className="transition-colors duration-300 hover:text-cyan-300"
            >
              PRIZES
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
