"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Calendar } from "../../callender/page";

import DottedButton from "../../ui/Button";
import { FaWhatsapp } from "react-icons/fa";

export const Hero = () => {
  return (
    <div className="w-full relative">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        autoPlay
        muted
        loop
      >
        <source src="/path-to-your-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Hero Content */}
      <div className="w-full h-auto flex flex-col justify-center items-center text-white bg-black/50 px-6 sm:px-12 pt-0 pb-8 sm:pb-16">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-8 w-full max-w-5xl lg:gap-10">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold">Join ULTRON 8.0</h1>
          <div className="relative w-full">
            <TypeAnimation
              sequence={[
                "Under Ultron 8.0, dreams ignite",
                1000,
                "Under Ultron 8.0, ideas soar",
                1000,
                "Under Ultron 8.0, creativity thrives",
                1000,
                "Under Ultron 8.0, limits break",
                1000,
              ]}
              speed={50}
              className="text-lg sm:text-xl lg:text-2xl"
              repeat={Infinity}
            />
          </div>
          <p className="text-base sm:text-lg lg:text-xl font-light leading-relaxed lg:leading-loose">
            Join us from 29th January to 31st January with over 300 students
            from across different departments for 3 days of creation, innovation,
            and fun.
          </p>

          {/* Apply Section */}
          <div className="flex flex-col items-center w-full gap-6 mt-8 lg:mt-10">
            <p className="text-3xl sm:text-4xl lg:text-5xl font-semibold">Apply Here</p>
            <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-8">
              <DottedButton
                src="/assets/Hackvengers.png"
                alt="Join Hackvengers"
                href="https://ultron-8.devfolio.co/"
                target="_blank"
                className="w-40 sm:w-56 md:w-64 lg:w-72 xl:w-80"
              />
              <DottedButton
                src="/assets/OpenMic.png"
                alt="Join Openmic"
                target="_blank"
                href="https://forms.gle/DVyJehRJ1zWxnpM68"
                className="w-40 sm:w-56 md:w-64 lg:w-72 xl:w-80"
              />
            </div>
          </div>

          {/* WhatsApp Group Section */}
          <div className="w-full flex flex-col items-center pt-6 px-6 sm:px-8 lg:px-12 rounded-lg mt-8 lg:mt-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 lg:mb-6">
              Join Our WhatsApp Group
            </h2>
            <a
              href="https://chat.whatsapp.com/FOHK8Ahm7guCZz6a9eEp20"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 py-2 px-4 rounded-lg text-lg font-semibold shadow-lg hover:bg-green-100 transition-all text-white border border-deepgreen-200"
            >
              <FaWhatsapp size={24} /> Join
            </a>
          </div>

          {/* Calendar Section */}
          <div className="w-full flex flex-col items-center bg-black/70 pt-6 px-6 sm:px-8 lg:px-12 rounded-lg mt-8 lg:mt-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 lg:mb-6">
              Event Calendar
            </h2>
            <Calendar />
            <div className="mt-4 px-6 py-4 bg-gray-800 text-gray-200 rounded-lg w-full max-w-4xl">
              <p className="text-sm sm:text-base lg:text-lg font-light leading-relaxed">
                Select a date to see the summary of events scheduled for the day.
              </p>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};
