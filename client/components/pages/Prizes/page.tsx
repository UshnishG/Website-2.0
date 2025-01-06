import React from "react";
import {
  FaTrophy,
  FaMedal,
  FaSkiingNordic,
  FaUserFriends,
} from "react-icons/fa";
import { GiPerson, GiPaintBrush } from "react-icons/gi";

const prizeData = [
  {
    icon: <FaTrophy className="text-yellow-500 text-6xl mb-4" />,
    title: "Overall First",
    description:
      "First Overall prize will be given to a project that outshines all other submissions.",
  },
  {
    icon: <FaMedal className="text-yellow-400 text-6xl mb-4" />,
    title: "Overall Second",
    description:
      "Second Overall prize will be given to the second-best project of the hackathon.",
  },
  {
    icon: <FaSkiingNordic className="text-yellow-500 text-6xl mb-4" />,
    title: "Overall Third",
    description:
      "The third-best overall project of the hackathon will win some awesome prizes.",
  },
  {
    icon: <GiPerson className="text-yellow-500 text-6xl mb-4" />,
    title: "Best Solo",
    description:
      "Compete solo and stand out to win this prize! Teams are encouraged, but solo entries are rewarded too.",
  },
  {
    icon: <FaTrophy className="text-yellow-500 text-6xl mb-4" />,
    title: "Best Beginner",
    description:
      "Win this prize if at least 50% of your team are new participants in hackathons.",
  },
  {
    icon: <GiPaintBrush className="text-yellow-500 text-6xl mb-4" />,
    title: "Best UI/UX",
    description:
      "The project with the most creative and user-friendly design wins this track.",
  },
  {
    icon: null,
    title: "Best Web App with Qoom",
    description: "Utilize Qoom in your project to qualify for this unique category.",
  },
  {
    icon: <FaUserFriends className="text-yellow-500 text-6xl mb-4" />,
    title: "More Prizes",
    description: "Stay tuned for additional exciting prizes to be revealed soon!",
  },
];

export const Prizes = () => {
  return (
    <div
      id="prizes"
      className="prizesection p-10 bg-slate-100 dark:bg-gray-800 rounded-3xl m-4 shadow-lg"
    >
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-slate-700 dark:text-gray-200">
          Prize Section
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Celebrate your achievements with these exciting prizes!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {prizeData.map((prize, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-700 shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            {prize.icon}
            <h2 className="text-black dark:text-gray-100 text-2xl font-semibold">
              {prize.title}
            </h2>
            <p className="text-black dark:text-gray-300">{prize.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
