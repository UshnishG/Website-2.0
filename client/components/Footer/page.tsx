"use client";
import React from "react";
import logo from "@/public/assets/logo.png";
import Image from "next/image";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <>
      <div className="sm:flex sm:items-center sm:justify-between">
        {/* Logo Section */}
       
        {/* Social Media Section */}
        <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-6 mt-8 lg:mt-10">
          <p className="text-xl sm:text-2xl lg:text-3xl font-semibold">
            Follow us for more updates
          </p>
          <div className="flex gap-6">
            <a
              href="https://www.instagram.com/futurix.ctech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-400 text-3xl lg:text-4xl transition"
              aria-label="Follow us on Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/futurix-srmist/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-600 text-3xl lg:text-4xl transition"
              aria-label="Follow us on LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

      {/* Footer Links */}
      <footer>
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="#" className="flex items-center">
                <Image
                  src={logo}
                  alt="logo"
                  width={1000}
                  height={400}
                  className="w-40"
                />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Follow us
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a
                      href="https://www.instagram.com/futurix.ctech"
                      className="hover:underline"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/futurix-srmist/"
                      className="hover:underline"
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
