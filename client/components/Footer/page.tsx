import React from "react";
import logo from "@/public/assets/logo.png"
import Image from "next/image";

export const Footer = () => {
  return (
    <>
      <div className="sm:flex sm:items-center sm:justify-between">
        <div className="flex mt-4 sm:justify-center sm:mt-0 w-full items-center justify-center">
        <a
  href="https://www.linkedin.com/company/futurix-srmist/"
  className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
  aria-label="LinkedIn page"
>
  <svg
    className="w-10 h-10"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.5 20h-3v-11h3v11zm-1.5-12.28c-.96 0-1.75-.79-1.75-1.75s.79-1.75 1.75-1.75 1.75.79 1.75 1.75-.79 1.75-1.75 1.75zm13 12.28h-3v-5.5c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.6h-3v-11h2.88v1.5h.04c.4-.75 1.38-1.54 2.85-1.54 3.05 0 3.61 2.01 3.61 4.63v6.41z" />
  </svg>
  <span className="sr-only">LinkedIn page</span>
</a>

          <a
  href="https://www.instagram.com/futurix.ctech?igsh=MXJ2eXc4enRsYTNjeg=="
  className="text-gray-500 hover:text-gray-900 dark:hover:text-white ml-5"
  aria-label="Instagram page"
>
  <svg
    className="w-10 h-10"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.332 3.608 1.308.976.975 1.246 2.242 1.308 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.332 2.633-1.308 3.608-.975.976-2.242 1.246-3.608 1.308-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.332-3.608-1.308-.976-.975-1.246-2.242-1.308-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.332-2.633 1.308-3.608.975-.976 2.242-1.246 3.608-1.308 1.265-.058 1.645-.07 4.849-.07zm0-2.163C8.755 0 8.336.013 7.052.071c-1.685.076-3.2.435-4.391 1.627C1.469 3.89 1.11 5.404 1.034 7.089.976 8.373.963 8.791.963 12s.013 3.627.071 4.911c.076 1.685.435 3.2 1.627 4.391 1.191 1.191 2.706 1.551 4.391 1.627 1.284.058 1.703.071 4.911.071s3.627-.013 4.911-.071c1.685-.076 3.2-.435 4.391-1.627 1.191-1.191 1.551-2.706 1.627-4.391.058-1.284.071-1.703.071-4.911s-.013-3.627-.071-4.911c-.076-1.685-.435-3.2-1.627-4.391-1.191-1.191-2.706-1.551-4.391-1.627C15.627.013 15.208 0 12 0z" />
    <circle cx="12" cy="12" r="3.5" />
    <path d="M18.406 5.594a1.44 1.44 0 1 1-2.882-.001 1.44 1.44 0 0 1 2.882.001z" />
  </svg>
  <span className="sr-only">Instagram page</span>
          </a>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <footer className="">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="/" className="flex items-center">
              <Image src={logo} alt="logo" width={1000} height={400} className="w-40"/>
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
                      href="https://www.instagram.com/futurix.ctech?igsh=MXJ2eXc4enRsYTNjeg=="
                      className="hover:underline "
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
