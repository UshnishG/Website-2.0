import DottedButton from "@/components/ui/Button";
import React from "react";

export const Sponsors = () => {
  const sponsors = [
    { id: 1, logo: "clientpublic\assets\sublime.jpeg" },
    { id: 2, logo: "public\assets\sublime.jpeg" },
    { id: 3, logo: "public\assets\sublime.jpeg" },
    { id: 4, logo: "public\assets\sublime.jpeg" },
    { id: 5, logo: "public\assets\sublime.jpeg" },
    { id: 6, logo: "public\assets\sublime.jpeg" },
  ];

  return (
    <div id="sponsors" className="p-10 rounded-3xl m-4 shadow-lg">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white">Our Sponsors</h1>
        <p className="text-white">We are proudly supported by these amazing sponsors.</p>
        <p>Interested in Sponsoring</p>
        <DottedButton className="m-4">
            Sponser us
        </DottedButton>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
        {sponsors.map((sponsor) => (
          <div
            key={sponsor.id}
            className=" shadow-md rounded-lg p-4 flex justify-center items-center hover:shadow-lg transition-shadow"
          >
            <img
              src={sponsor.logo}
              alt={`Sponsor ${sponsor.id}`}
              className="w-full h-auto max-h-20 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
