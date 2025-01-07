"use client";

import React from "react";
import {
  FaTrophy,
  FaMedal,
  FaUserFriends,
} from "react-icons/fa";
import { GiPerson, GiPaintBrush, GiMicrophone } from "react-icons/gi";

const hackathonPrizes = [
  {
    icon: <FaTrophy className="text-yellow-500 text-6xl mb-4 animate-bounce-once" />,
    title: "1st Position",
    description: "Cash prize of 5k and certificate.",
  },
  {
    icon: <FaMedal className="text-yellow-400 text-6xl mb-4 animate-wobble" />,
    title: "2nd Position",
    description: "Cash prize of 3k and certificate.",
  },
  {
    icon: <FaMedal className="text-yellow-300 text-6xl mb-4 animate-flip" />,
    title: "3rd Position",
    description: "Cash prize of 2k and certificate.",
  },
  {
    icon: <GiPaintBrush className="text-yellow-500 text-6xl mb-4 animate-shake" />,
    title: "Best Innovative Project",
    description: "Certificate awarded for innovation.",
  },
  {
    icon: <GiPaintBrush className="text-yellow-500 text-6xl mb-4 animate-glow" />,
    title: "Best Design and User Experience",
    description: "Certificate awarded for outstanding design.",
  },
];

const openMicPrizes = [
  {
    icon: <GiMicrophone className="text-yellow-500 text-6xl mb-4 animate-bounce-once" />,
    title: "1st Position",
    description: "Cash prize of 3k and certificate.",
  },
  {
    icon: <GiMicrophone className="text-yellow-400 text-6xl mb-4 animate-wobble" />,
    title: "2nd Position",
    description: "Cash prize of 2k and certificate.",
  },
  {
    icon: <GiMicrophone className="text-yellow-300 text-6xl mb-4 animate-flip" />,
    title: "3rd Position",
    description: "Cash prize of 1k and certificate.",
  },
  {
    icon: <GiPerson className="text-yellow-500 text-6xl mb-4 animate-shake" />,
    title: "The Rising Star",
    description: "Certificate awarded for exceptional promise.",
  },
  {
    icon: <FaUserFriends className="text-yellow-500 text-6xl mb-4 animate-glow" />,
    title: "The Crowd's Heartthrob",
    description: "Certificate awarded for audience favorite.",
  },
];

export const Prizes = () => {
  return (
    <div className="p-10 bg-transparent rounded-3xl m-4 shadow-lg backdrop-blur-md">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold text-slate-700 dark:text-gray-200 tracking-wide uppercase">
          Prize Section
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Celebrate your achievements with these exciting prizes!
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-4xl font-bold text-slate-700 dark:text-gray-200 mb-6 underline decoration-yellow-500">
          Hackathon Prizes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hackathonPrizes.map((prize, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 shadow-lg rounded-lg p-6 hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              {prize.icon}
              <h2 className="text-black dark:text-gray-100 text-2xl font-bold">
                {prize.title}
              </h2>
              <p className="text-gray-800 dark:text-gray-300 text-lg mt-2">
                {prize.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-4xl font-bold text-slate-700 dark:text-gray-200 mb-6 underline decoration-yellow-500">
          Open Mic Prizes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {openMicPrizes.map((prize, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-pink-200 via-pink-400 to-pink-600 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 shadow-lg rounded-lg p-6 hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              {prize.icon}
              <h2 className="text-black dark:text-gray-100 text-2xl font-bold">
                {prize.title}
              </h2>
              <p className="text-gray-800 dark:text-gray-300 text-lg mt-2">
                {prize.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


