"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import DottedButton from "../../ui/Button";
import { FaDiscord } from "react-icons/fa";
import { Calender } from "../../callender/page";

export const Hero = () => {
  return (
    <div className="w-full">
      <div className="w-full h-[60vh] p-8 flex flex-col justify-center items-center">
        <div className=" flex flex-col items-start justify-center h-full gap-4 w-5/6">
          <h1 className="text-5xl font-bold">Join ULTRON 8.0</h1>
            <div className="relative w-fit">
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
              style={{ fontSize: "2em" }}
              repeat={Infinity}
              className=""
            />
            </div>
          <p className="text-4xl font-extralight">
            Join us from 29th January to 31st January with over 300 students
            from across different departments for 3days of creation, innovation, &
            fun.
          </p>
          <DottedButton className="flex items-center gap-4">
            <FaDiscord width={"200px"} height={"200px"} />
            Join Whatsapp
          </DottedButton>
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <Calender />
      </div>
    </div>
  );
};
