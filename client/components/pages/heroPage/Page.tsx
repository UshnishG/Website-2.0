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
        <h1 className="text-5xl font-bold">Join Limbo Hack</h1>
        <div className="relative w-fit">
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed once, initially
              "We produce food for Mice",
              1000,
              "We produce food for Hamsters",
              1000,
              "We produce food for Guinea Pigs",
              1000,
              "We produce food for Chinchillas",
              1000,
            ]}
            speed={50}
            style={{ fontSize: "2em" }}
            repeat={Infinity}
            className=""
          />
        </div>
        <p className="text-4xl font-extralight">
          Join us on 20th November 2021 with over 300 students from across the
          nation for 24 hours of creation, innovation, & fun.
        </p>
        <DottedButton className="flex items-center gap-4">
          <FaDiscord width={"20px"} height={"20px"} />
          join Discord
        </DottedButton>
        <div className="flex w-full gap-4">
        <DottedButton className="flex items-center gap-4 w-40">
          <FaDiscord width={"20px"} height={"20px"} />
          judge
        </DottedButton>
        <DottedButton className="flex items-center gap-4 w-44">
          <FaDiscord width={"20px"} height={"20px"} />
          register
        </DottedButton>
      </div>
      </div>
    </div>
    <div className="w-full flex items-center justify-center">
    <Calender />
    </div>
    </div>
  );
};
