"use client";

import React from "react";

export const Sponsors = () => {
  const sponsors = [
    { id: 1, logo: "/assets/devfolio.png", name: "DEVFOLIO LOGO" }, // Devfolio
    { id: 2, logo: "/assets/eth.png", name: "POLYGON LOGO" }, // Polygon
    { id: 3, logo: "/assets/polygon.png", name: "ETHINDIA LOGO" }, // EthIndia
    { id: 4, logo: "/assets/hitbullseye.png", name: "bullseye" },
  ];

  return (
    <div
      id="sponsors"
      className="p-10 rounded-3xl m-4"
      style={{
        background: "transparent",
      }}
    >
      <div className="text-center mb-8">
        <h1
          className="text-5xl sm:text-6xl font-bold text-white"
          style={{
            textShadow: "0 0 1px #ffffff, 0 0 20px #ffffff, 0 0 30px #ffcc00",
          }}
        >
          Our Sponsors
        </h1>
        <h2 className="text-xl text-white mt-2">
          We are proudly supported by these amazing sponsors.
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-6 items-center">
        {sponsors.map((sponsor) => (
          <div key={sponsor.id} className="flex justify-center items-center">
            <img
              src={sponsor.logo}
              alt={sponsor.name}
              className="w-auto h-14 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
