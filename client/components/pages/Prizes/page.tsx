import React from "react";
import {
  FaTrophy,
  FaMedal,
  FaSkiingNordic,
  FaUserFriends,
} from "react-icons/fa";
import { GiPerson, GiPaintBrush } from "react-icons/gi";

export const Prizes = () => {
  return (
    <>
      <div
        id="prizes"
        className="prizesection p-10 bg-slate-100 rounded-3xl m-4 shadow-lg"
      >
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-700">Prize Section</h1>
          <p className="text-gray-600">
            Celebrate your achievements with these exciting prizes!
          </p>
        </div>

        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-md rounded-lg p-6 text hover:shadow-lg transition-shadow">
            <FaTrophy className="text-yellow-500 text-6xl mb-4 " />
            <h2 className="text-black text-2xl font-semibold">Overall First</h2>
            <p className=" text-black ">
              First Overall prize will be given to a project that outshines all
              other submissions.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6  hover:shadow-lg transition-shadow">
            <FaMedal className="text-yellow-400 text-6xl mb-4 " />
            <h2 className=" text-black text-2xl font-semibold">
              Overall Second
            </h2>
            <p className=" text-black ">
              Second Overall prize will be given to the second-best project of
              the hackathon.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6  hover:shadow-lg transition-shadow">
            <FaSkiingNordic className="text-yellow-500 text-6xl mb-4 " />
            <h2 className=" text-black text-2xl font-semibold">
              Overall Third
            </h2>
            <p className=" text-black ">
              The third-best overall project of the hackathon will win some
              awesome prizes.
            </p>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <div className="bg-white shadow-md rounded-lg p-6  hover:shadow-lg transition-shadow">
            <GiPerson className="text-yellow-500 text-6xl mb-4 " />
            <h2 className=" text-black text-2xl font-semibold">Best Solo</h2>
            <p className=" text-black ">
              Compete solo and stand out to win this prize! Teams are
              encouraged, but solo entries are rewarded too.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6  hover:shadow-lg transition-shadow">
            <FaTrophy className="text-yellow-500 text-6xl mb-4 " />
            <h2 className=" text-black text-2xl font-semibold">
              Best Beginner
            </h2>
            <p className=" text-black ">
              Win this prize if at least 50% of your team are new participants
              in hackathons.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6  hover:shadow-lg transition-shadow">
            <GiPaintBrush className="text-yellow-500 text-6xl mb-4 " />
            <h2 className=" text-black text-2xl font-semibold">Best UI/UX</h2>
            <p className=" text-black ">
              The project with the most creative and user-friendly design wins
              this track.
            </p>
          </div>
        </div>

        {/* Third Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <div className="bg-white shadow-md rounded-lg p-6  hover:shadow-lg transition-shadow">
            <h2 className=" text-black text-2xl font-semibold">
              Best Web App with Qoom
            </h2>
            <p className=" text-black ">
              Utilize Qoom in your project to qualify for this unique category.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6  hover:shadow-lg transition-shadow">
            <FaUserFriends className="text-yellow-500 text-6xl mb-4 " />
            <h2 className=" text-black text-2xl font-semibold">More Prizes</h2>
            <p className=" text-black ">
              Stay tuned for additional exciting prizes to be revealed soon!
            </p>
          </div>
        </div>
      </div>
      <div
        id="prizes"
        className="prizesection p-10 bg-slate-100 rounded-3xl m-4 shadow-lg"
      >
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-700">Non Coding Prizes</h1>
          <p className="text-gray-600">
            coming soon
          </p>
        </div>
      </div>
    </>
  );
};
