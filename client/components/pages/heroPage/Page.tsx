"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Calendar } from "../../callender/page";
import Devfolio from "../../ui/DevfolioBtn"; // Update this path as needed

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
      <div className="w-full sm:h-[60vh] h-[80vh] px-6 sm:px-12 py-8 sm:py-16 flex flex-col justify-center items-center text-white bg-black/50">
        <div className="flex flex-col items-start justify-center h-full gap-6 w-5/6 lg:w-2/3 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold">Join ULTRON 8.0</h1>
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
              speed={50}ī
              style={{ fontSize: "1.2em" }}
              repeat={Infinity}
            />
          </div>
          <p className="lg:text-2xl text-xl font-light leading-relaxed">
            Join us from 29th January to 31st January with over 300 students
            from across different departments for 3 days of creation, innovation,
            and fun.
          </p>
          <div className="flex items-center gap-3 px-6 py-3">
            {/* Integrating the Devfolio Component */}
            <Devfolio />
          </div>
        </div>
      </div>

      {/* Calendar Section */}
      <div className="w-full flex flex-col items-center justify-center bg-black/70 py-12 px-4">
        <h2 className="text-3xl font-bold text-white mb-6">Event Calendar</h2>
        <Calendar />
        <div className="mt-6 px-6 py-4 bg-gray-800 text-gray-200 rounded-lg w-full max-w-3xl">
          <p className="text-lg font-light">Select a date to see the summary of events scheduled for the day.</p>
        </div>
      </div>
    </div>
  );
};
